<template>
  <div>
    <div v-if="slideIn">
      <tab :active.sync="active">
        <tab-item
          v-for="item in tabs.slice(0, 4)"
          :name="item.name"
          :key="item.key"
        >
          {{ item.label }}
        </tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
import TabItem from "./TabItem.vue";
export default {
  components: {
    Tab,
    TabItem
  },
  data() {
    return {
      slideIn: true,
      tabs: [
        { name: "recommed", label: "推荐" },
        { name: "it", label: "科技" },
        { name: "active", label: "活动" },
        { name: "find", label: "发现" },
        { name: "sort", label: "排行" },
        { name: "msg", label: "消息" },
        { name: "sns", label: "社区" }
      ],
      active: "recommed"
    };
  }
};
</script>

<!-- <template>
    <div>
        <ul>
            <li v-on:click='btnClick(index)' v-for='(m,index) in movies' v-bind:class='currentIndex==index?"active":""'>{{index}}: {{m}}</li>
        </ul>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                movies: ['贰零贰壹', '新年快乐', '恭喜发财', '红包拿来'],
                //这isActive为0(也可以改写为false)
                isActive: 0,
                //这currentIndex就是数组中第一个(贰零贰壹)为默认样式(字体为红色)
                currentIndex: 0
               }
        },
            methods: {
                btnClick: function(index) {
                    this.currentIndex = index;
                }
            }

    }
</script> -->
