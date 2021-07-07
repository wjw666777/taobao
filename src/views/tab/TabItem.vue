<template>
  <div
    :style="{
      'min-width': $parent.minTabItemWidth
    }"
    :class="[
      'vx-tab--item',
      {
        'is-flexbox-item': $parent.layout == 'default',
        'is-active': $parent.active === name
      }
    ]"
    @click="handleClick(name)"
  >
    <span v-if="$parent.underlineWidth" class="vx-tab--item-text">
      <slot></slot>
    </span>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "TabItem",
  componentName: "TabItem",
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  methods: {
    handleClick(name) {
      this.$parent.change(name);
    }
  }
};
</script>

<style scoped>
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
</style>
