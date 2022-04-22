<template>
  <validation-provider rules="required" v-slot="{ errors }">
    <div class="container">
      <h1>Register - Veevalidate</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <input v-model="email" name="email" type="text" />
      <span>{{ errors[0] }}</span>
    </div>

    <button type="submit">Submit</button>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "VeevalidatePage",
  components: {
    ValidationProvider,
  },
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_form.scss";
</style>
