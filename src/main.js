// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("my-component", {
  data() {
    return {
      name: "zeng"
    };
  },
  template: `<span> to {{name}} </span>`
});
let vm = new Vue({
  el: "#vm"
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
