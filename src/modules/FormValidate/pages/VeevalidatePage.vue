<template>
  <div class="container">
    <h1>Register - Veevalidate</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <ValidationObserver ref="form" v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <ValidationProvider name="Email" rules="required|email" v-slot="v" slim>
          <custom-input
            :isError="v.dirty && v.invalid"
            v-model="email"
            :label="'Email'"
          />
          <div class="error">{{ v.errors[0] }}</div>
        </ValidationProvider>
        <ValidationProvider
          name="Password"
          rules="required|checkPassword"
          v-slot="v"
          slim
        >
          <custom-input
            :isError="v.dirty && v.invalid"
            v-model="password"
            :label="'Password'"
            :type="'password'"
          />
          <div class="message" v-if="v.pending">Checking password...</div>
          <div class="error">{{ v.errors[0] }}</div>
        </ValidationProvider>
        <ValidationProvider
          name="Password Repeat"
          :rules="`required|sameAs:Password,${password}`"
          v-slot="v"
          slim
        >
          <custom-input
            :isError="v.dirty && v.invalid"
            v-model="pswRepeat"
            name="abc"
            :label="'Password Repeat'"
            :type="'password'"
          />
          <div class="error">{{ v.errors[0] }}</div>
        </ValidationProvider>
        <button :disabled="invalid" type="submit">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "@/validators/veevalidate/index";
import CustomInput from "@/components/Form/CustomInput.vue";

export default {
  name: "VeevalidatePage",
  components: {
    ValidationProvider,
    ValidationObserver,
    CustomInput,
  },
  data() {
    return {
      email: "",
      password: "",
      pswRepeat: "",
    };
  },
  methods: {
    onSubmit() {
      alert("Form submited");
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_form.scss";
</style>
