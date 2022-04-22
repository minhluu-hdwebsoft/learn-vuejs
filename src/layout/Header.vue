<template>
  <ul>
    <li><router-link v-bind:to="'/grade-1'">Grade 1</router-link></li>
    <li><router-link v-bind:to="'/grade-2'">Grade 2</router-link></li>
    <li>
      <router-link v-bind:to="'/form-validate'">Form Validate</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  li {
    float: left;
    a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      &:hover {
        background-color: #111;
      }
      &.is-active {
        background-color: #111;
      }
    }
  }
}
</style>
