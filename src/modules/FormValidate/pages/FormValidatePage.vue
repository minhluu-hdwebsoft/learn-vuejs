<template>
  <div>
    <ul>
      <li>
        <router-link :to="'/form-validate/vuelidate'">Vuelidate</router-link>
      </li>
      <li>
        <router-link :to="'/form-validate/veevalidate'"
          >Veevalidate</router-link
        >
      </li>
      <li><router-link :to="'/form-validate/vuetify'">Vuetify</router-link></li>
    </ul>
    <router-view> </router-view>
  </div>
</template>
