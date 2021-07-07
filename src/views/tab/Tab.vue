<template>
  <div
    :class="['vx-tab', `vx-tab--type-${layout}`]"
    onselectstart="return false;"
  >
    <div class="vx-tab--scroller">
      <div :class="[{ 'is-flexbox': layout == 'default' }, 'vx-tab--inner']">
        <slot></slot>
      </div>
      <div class="vx-tab--underline"></div>
    </div>
  </div>
</template>

<script>
import { tab } from "./utils";
export default {
  name: "Tab",
  componentName: "Tab",
  mixins: [tab],
  props: ["underlineWidth", "minTabItemWidth"],
  mounted() {
    this.computedStyle();
    window.addEventListener("resize", this.computedStyle);
  },
  updated() {
    this.computedStyle();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$computedStyle);
  },
  methods: {
    computedStyle() {
      this.$nextTick(() => {
        let node = this.$el.querySelector(".vx-tab--underline");
        let scrollerNode = this.$el.querySelector(".vx-tab--scroller");
        let innerNode = this.$el.querySelector(".vx-tab--inner");
        let activeNode = this.$el.querySelector(".is-active");
        if (activeNode) {
          let activeWidth = activeNode.offsetWidth;
          let width = activeWidth;
          let left = activeNode.offsetLeft;
          if (this.underlineWidth === "auto" || this.underlineWidth === 0) {
            width = activeNode.children[0].offsetWidth;
            if (width > activeWidth) {
              width = activeWidth;
            }
            left = activeNode.offsetLeft + (activeWidth - width) / 2;
          } else if (this.underlineWidth) {
            width = this.underlineWidth;
            left =
              activeNode.offsetLeft + (activeWidth - this.underlineWidth) / 2;
          }
          let nextElement = activeNode.nextElementSibling;
          let prevElement = activeNode.previousElementSibling;
          requestAnimationFrame(() => {
            let prevRect = null;
            let nextRect = null;
            node.style.cssText = `width: ${width}px;left:${left}px;display:block`;
            let scrollerNodeWidth = scrollerNode.offsetWidth;
            innerNode.offsetWidth > scrollerNodeWidth &&
              requestAnimationFrame(() => {
                if (prevElement) {
                  prevRect = prevElement.getBoundingClientRect();
                }
                if (nextElement) {
                  nextRect = nextElement.getBoundingClientRect();
                }
                requestAnimationFrame(() => {
                  nextElement &&
                    nextRect &&
                    nextRect.left > scrollerNodeWidth - activeWidth / 2 &&
                    nextElement.scrollIntoView();
                  prevElement &&
                    prevRect &&
                    prevRect.left < 0 &&
                    prevElement.scrollIntoView();
                });
              });
          });
        }
      });
    },
    change(value) {
      if (value !== this.active) {
        this.$emit("update:active", value).$emit("change", value);
        this.computedStyle();
      }
      this.layout === "scroll" &&
        this.$nextTick(() => {
          let target = this.$el.querySelector(".is-active");
          let node = this.$el.querySelector(".vx-tab--scroller");
          requestAnimationFrame(() => {
            let width = target.offsetWidth;
            let innerWidth = window.innerWidth;
            let rect = target.getBoundingClientRect();
            let offsetLeft = target.nextElementSibling
              ? target.nextElementSibling.offsetLeft
              : 0;
            if (rect.right + width > innerWidth && target.nextElementSibling) {
              requestAnimationFrame(() => {
                node.scrollLeft =
                  offsetLeft +
                  target.nextElementSibling.offsetWidth -
                  innerWidth;
              });
            }
          });
        });
    }
  }
};
</script>

<style scoped>
:export {
  color-black: #333;
  color-assist: rgba(51, 51, 51, 0.55);
  color-light: rgba(0, 0, 0, 0.35);
  color-primary: #3399ff;
  color-warning: #ff9900;
  color-danger: #f56c6c;
  color-error: #f56c6c;
  color-background: #f7f7f7;
  color-border: #e5e5e5;
  color-divider: #ddd;
  color-touch-active: rgba(0, 0, 0, 0.1);
  font-size-default: 0.28rem;
  font-size-small: 0.24rem;
  font-size-large: 0.32rem;
  font-size-xl: 0.38rem;
  box-size-height-default: 0.92rem;
  box-size-height-small: 0.64rem;
  border-radius: 0.14rem;
}

.vx-tab {
  text-align: center;
  position: relative;
  user-select: none;
  line-height: 0.92rem;
  line-height: var(--vx-box-size-height-default, 0.92rem);
  background: #fff;
}

.vx-tab--scroller {
  white-space: nowrap;
  overflow-x: auto;
  position: relative;
}

.vx-tab--scroller::-webkit-scrollbar {
  display: none;
}

.vx-tab--inner {
  width: fit-content;
  min-width: 100%;
}

.vx-tab--inner.is-flexbox {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
}

.vx-tab:before {
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: top;
  background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 0);
  background-image: linear-gradient(
    180deg,
    var(--vx-color-divider, #ddd),
    var(--vx-color-divider, #ddd) 50%,
    transparent 0
  );
  z-index: 1;
  position: absolute;
  content: "";
  height: 1px;
  width: 100%;
  left: 0;
  bottom: -1px;
  background-color: transparent;
}

.vx-tab--underline {
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 2px solid;
  border-color: #3399ff;
  border-color: var(--vx-color-primary, #3399ff);
  transition: left 0.2s ease-in-out, width 0.2s ease-in-out;
  display: none;
}

.vx-tab--item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}

.vx-tab--item.is-active {
  color: #3399ff;
  color: var(--vx-color-primary, #3399ff);
}

.vx-tab--item.is-flexbox-item {
  -ms-flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1;
  -moz-flex: 1;
  flex: 1;
  min-width: 0;
}

.vx-tab--type-scroll .vx-tab--item {
  display: inline-block;
  vertical-align: middle;
  min-width: 1.5rem;
  padding: 0 0.1rem;
}
</style>
