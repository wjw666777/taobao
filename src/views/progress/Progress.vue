<template>
  <div>
    <H2>线性进度条--百分比外显</H2>
    <dProgress :percentage="0" />
    <dProgress :percentage="40" pcolor="orange" />
    <dProgress :percentage="60" status="success" />
    <dProgress :percentage="80" status="failure" />
    <H2>线性进度条--百分比内显</H2>
    <dProgress :percentage="0" :text-inside="true" :stroke-height="16" />
    <dProgress :percentage="40" :text-inside="true" :stroke-height="16" />
    <dProgress
      :percentage="60"
      status="success"
      :text-inside="true"
      :stroke-height="16"
    />
    <dProgress
      :percentage="80"
      status="failure"
      :text-inside="true"
      :stroke-height="16"
    />
    <h2>环形进度条</h2>
    <dProgress :percentage="0" ptype="circle" />
    <dProgress :percentage="40" ptype="circle" />
    <dProgress :percentage="60" ptype="circle" status="success" />
    <dProgress :percentage="80" ptype="circle" status="failure" />
  </div>
</template>

<script>
// 组件名称大小写敏感，不能和已经存在的HTML里面的控件同名，如果是驼峰形式，则可以用短横线的方式（如：d=progress）或者和名称保持一致
import dProgress from "./progressItem.vue";
export default {
  components: {
    dProgress
  }
};
</script>
