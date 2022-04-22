import Vue from "vue";
import AppLayout from "./layout";
import router from "./router";
import * as filters from "@/filters";
import * as directives from "@/derective";

import "./scss/style.scss";

Vue.config.devtools = true;
Vue.use(require("vue-moment"));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  filters: {
    ...filters,
  },
  directives: {
    ...directives,
  },
  components: { AppLayout },
  template: "<AppLayout/>",
});
