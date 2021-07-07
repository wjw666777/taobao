<template>
  <div class="search">
    <!-- 搜索组件 -->
    <!-- 搜索左边区域 -->
    <div class="search_left"></div>
    <!-- 搜索区域 -->
    <div class="search_input">
      <div class="search_input_icon">
        <svg
          t="1590583132901"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2822"
          width="200"
          height="200"
        >
          <path
            d="M908.6 883.1l-155-155c28.1-30.9 50.5-66 66.8-104.4 19.3-45.6 29-94 29-143.9 0-49.9-9.8-98.3-29-143.9-18.6-44-45.3-83.5-79.2-117.5-33.9-33.9-73.5-60.6-117.5-79.2-45.6-19.3-94-29-143.9-29-49.9 0-98.3 9.8-143.9 29-44 18.6-83.5 45.3-117.5 79.2s-60.6 73.5-79.2 117.5c-19.3 45.6-29 94-29 143.9 0 49.9 9.8 98.3 29 143.9 18.6 44 45.3 83.5 79.2 117.5s73.5 60.6 117.5 79.2c45.6 19.3 94 29 143.9 29 49.9 0 98.3-9.8 143.9-29 38.5-16.3 73.6-38.7 104.4-66.8l155 155c3.5 3.5 8.1 5.3 12.7 5.3s9.2-1.8 12.7-5.3c7.1-7.1 7.1-18.5 0.1-25.5z m-428.8-69.7c-184 0-333.6-149.7-333.6-333.6 0-184 149.7-333.6 333.6-333.6 184 0 333.6 149.7 333.6 333.6 0 184-149.6 333.6-333.6 333.6z"
            p-id="2823"
          ></path>
        </svg>
      </div>
      <input type="text" placeholder="请输入内容" ref="inputValue" />
    </div>
    <!-- 搜索又边区域 -->
    <div class="search_right" @click="onSearch">搜索</div>
  </div>
</template>

<script>
export default {
  name: "SearchItem",
  components: {},
  methods: {
    onSearch() {
      if (this.$refs.inputValue.value !== "") {
        console.log(this.$refs.inputValue.value);
        this.$emit("inputValue", this.$refs.inputValue.value);
      }
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}

/* 搜索左边区域 */
.search_left {
  width: 15%;
  height: 100%;
  /* in order to take up a place to insert icon such as location ic */
  /* background-color: pink; */
}

/* 搜索区域 */
.search_input {
  width: 80%;
  height: 75%;
  border-radius: 50px;
  border: 1px solid gray;
  display: flex;
  overflow: hidden;
}
/* 搜索图标 */
.search_input_icon {
  width: 12%;
  height: 100%;
  /* background-color: orangered; */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* =====================svg样式代码====================== */
.icon {
  width: 80%;
  height: 80%;
}
/* =========================================== */

/* input框 */
.search_input input {
  width: 100%;
  height: 100%;
  border: none;
  /* input在获得焦点时外边框不变色 */
  outline: none;
}

/* 搜索右边区域 */
.search_right {
  width: 15%;
  height: 100%;
  font-size: 0.18rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
