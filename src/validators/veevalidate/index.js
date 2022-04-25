/* eslint-disable no-useless-escape */
import { fakePromise } from "@/utils/fakePromise";
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

extend("email", (value) => {
  const isEmail = value.match(emailPattern);

  return isEmail || "This field is invalid email";
});

extend("required", {
  ...required,
  message: (filedName) => `${filedName} is required`,
});

extend("sameAs", {
  validate: (value, { sameValue }) => {
    return value === sameValue;
  },
  message: (fieldName, { sameLabel }) => {
    return `${fieldName} not match with ${sameLabel}`;
  },
  params: ["sameLabel", "sameValue"],
});

extend("checkPassword", {
  validate: async () => {
    await fakePromise(1000);

    return true;
  },
});
