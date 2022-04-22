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
  computed: {
    // errors() {
    //   return Object.keys(this.defaultValue).reduce((errors, key) => {
    //     return {
    //       ...errors,
    //       [key]: {
    //         isError: !this.$v[key].$error,
    //         message: "Field invalid",
    //       },
    //     };
    //   }, {});
    // },
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
.container {
  padding: 16px;
  background-color: white;
}

.form-group {
  margin-bottom: 2rem;
  .form__label {
    font-size: 0.8125rem;
    color: #4b6372;
    margin-bottom: 0.3125rem;
    margin-left: 0.875rem;
    display: block;
  }
  .form__input {
    font-size: 0.875rem;
    font-weight: 300;
    color: #374853;
    line-height: 2.375rem;
    min-height: 2.375rem;
    position: relative;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    background: #fff;
    padding: 0 0.8125rem;
    width: 100%;
    transition: border 0.1s ease;
    box-sizing: border-box;
  }
}

.form-group--error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  .form__label {
    color: #f04124 !important;
  }
  input {
    border-color: #f79483 !important;
  }
  + .error {
    display: block;
    color: #f57f6c;
  }
}

.message {
  font-size: 0.75rem;
  line-height: 1;
  margin-left: 14px;
  margin-top: -1.6875rem;
  margin-bottom: 0.9375rem;
}

.error {
  font-size: 0.75rem;
  line-height: 1;
  display: none;
  margin-left: 14px;
  margin-top: -1.6875rem;
  margin-bottom: 0.9375rem;
}
</style>
