<template>
  <div class="form-group" :class="{ 'form-group--error': isError }">
    <label class="form__label" :for="name"
      ><b>{{ label }}</b></label
    >
    <input
      :value="value"
      @input="(el) => $emit('input', el.target.value)"
      :name="name"
      :id="name"
      :type="type || 'text'"
      class="form__input"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ["isError", "value", "type", "name", "label"],
};
</script>

<style lang="scss" scoped>
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
