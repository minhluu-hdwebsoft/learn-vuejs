<template>
  <form action="/action_page.php">
    <div class="container">
      <h1>Register - Vuelidate</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
        <label class="form__label" for="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          class="form__input"
          v-model.trim="$v.email.$model"
        />
      </div>
      <div class="error" v-if="!$v.email.required">Email is required</div>
      <div class="error" v-if="!$v.email.isEmail">Email is invalid</div>

      <div
        class="form-group"
        :class="{ 'form-group--error': $v.password.$error }"
      >
        <label class="form__label" for="password"><b>Password </b></label>
        <input
          type="password"
          placeholder="Enter Password"
          class="form__input"
          v-model.trim="$v.password.$model"
        />
      </div>
      <div class="error" v-if="!$v.password.required">Field is required</div>
      <div class="message" v-if="checkingPassword">Checking Password ...</div>

      <div
        class="form-group"
        :class="{ 'form-group--error': $v.pswRepeat.$error }"
      >
        <label class="form__label" for="email"><b>Password Repeat</b></label>
        <input
          type="password"
          placeholder="Enter Password Repeat"
          class="form__input"
          v-model.trim="$v.pswRepeat.$model"
        />
      </div>
      <div class="error" v-if="!$v.pswRepeat.required">Field is required</div>
      <div class="error" v-if="!$v.pswRepeat.sameAsPassword">
        Passwords must be identical.
      </div>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, sameAs } from "vuelidate/lib/validators";
import { isEmail } from "@/validators/vuelidate";

export default {
  mixins: [validationMixin],
  name: "VuelidatePage",
  data() {
    return {
      checkingPassword: false,

      email: "",
      password: "",
      pswRepeat: "",
    };
  },
  validations: {
    email: {
      required,
      isEmail,
    },
    password: {
      required,
      checkPassword(value) {
        if (value === "") return true;

        this.checkingPassword = true;
        return new Promise((resolve) => {
          setTimeout(() => {
            this.checkingPassword = false;
            resolve(typeof value === "string");
          }, 1000);
        });
      },
    },
    pswRepeat: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
  updated() {
    console.log(this.errors);
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_form.scss";
</style>
