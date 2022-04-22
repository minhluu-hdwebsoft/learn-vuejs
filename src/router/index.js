import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PostListPage from "@/modules/Post/pages/PostListPage";
import FormValidatePage from "@/modules/FormValidate/pages/FormValidatePage";
import VuelidatePage from "@/modules/FormValidate/pages/VuelidatePage";
import VeevalidatePage from "@/modules/FormValidate/pages/VeevalidatePage";

Vue.use(Router);

export default new Router({
  linkActiveClass: "is-active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/grade-1",
      name: "Grade1",
      component: {
        template: "<h1>Grade 1</h1>",
      },
    },
    {
      path: "/grade-2",
      name: "Grade2",
      component: {
        template: "<router-view></router-view>",
      },
      children: [
        {
          path: "post",
          component: PostListPage,
          alias: [""],
        },
      ],
    },
    {
      path: "/form-validate",
      name: "Form Validate",
      component: FormValidatePage,
      children: [
        {
          path: "vuelidate",
          component: VuelidatePage,
        },
        {
          path: "veevalidate",
          component: VeevalidatePage,
        },
      ],
    },
  ],
});
