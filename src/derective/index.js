import Vue from "vue";

function debounce(fn, delay) {
  let timeoutID = null;
  return () => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

const debounceDirective = Vue.directive("debounce", function (el, bind) {
  console.log("🚀 Minh =====>  ~ file: index.js ~ line 15 ~ bind", bind);
  if (bind.value !== bind.oldValue) {
    // change debounce only if interval has changed
    el.oninput = debounce(function () {
      el.dispatchEvent(new Event("change"));
    }, parseInt(bind.value) || 800);
  }
});

export { debounceDirective };
