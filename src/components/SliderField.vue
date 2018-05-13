<template>
  <div class="slider-field">
    <div class="slider-field__input">
      <input
        inputmode="numeric"
        pattern="[0-9]*"
        :min='min'
        :max='max'
        v-model.number='inputVal'
      />
    </div>
    <div v-if="percentage">
      %
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
    'percentage',
  ],
  data () {
    if (this.percentage) {
      return { inputVal: Math.floor(this.value * 100) }
    }
    return {
      inputVal: this.value,
    }
  },
  watch: {
    inputVal (val) {
      if (this.percentage) {
        this.$emit('input', parseFloat((val / 100).toFixed(2)))
      } else {
        this.$emit('input', val)
      }
    },
    value (val) {
      if (this.percentage) {
        this.inputVal = Math.floor(val * 100)
      } else {
        this.inputVal = val
      }
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
  div.slider-field > * + * {
    margin-left: 0.5rem;
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
  .slider-field__input input {
    text-align: right;
  }
</style>
