<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="wrapper">
      <!-- <transition name="fade"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import AppHeader from "./Header.vue";

export default {
  name: "AppLayout",
  components: { AppHeader },
};
</script>

<style>
.wrapper {
  width: 70%;
  margin: auto;
}
</style>
