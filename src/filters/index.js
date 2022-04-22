import Vue from "vue";

const truncateWithEllipses = Vue.filter(
  "truncateWithEllipses",
  function (value, arg1 = 100) {
    return value.substr(0, arg1 - 1) + (value.length > arg1 ? "..." : "");
  }
);

export { truncateWithEllipses };
