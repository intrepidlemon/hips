<template>
  <div class="slider-field">
    <div class="slider-field__input">
      <input
        :min='min'
        :max='max'
        v-model.number='inputVal'
      />
    </div>
    <input
      class="slider-field__slider-input"
      type='range'
      :min='min'
      :max='max'
      :step='step'
      v-model.number='inputVal'
    />
  </div>
</template>

<script>
export default {
  props: [
    'value',
    'min',
    'max',
    'step',
  ],
  data () {
    return { inputVal: this.value }
  },
  watch: {
    inputVal (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.inputVal = val
    },
  },
}
</script>

<style scoped>
  div.slider-field {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .slider-field__slider-input {
    flex-grow: 1;
    flex-shrink: 1;
    margin-left: 1rem;
    width: 1rem;
  }
  .slider-field__input {
    flex-shrink: 0;
    width: 5rem;
  }
</style>
