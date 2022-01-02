<template>
  <div class="slider-field">
    <div class="slider-field__input">
      <input
        inputmode="numeric"
        pattern="\d*"
        :min='min'
        :max='max'
        v-model.number='inputVal'
        :name='name'
        v-validate.initial='{ required: true, numeric: true, min_value: min, max_value: max }'
        :class='{ "error": errors.has(name) }'
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
    'name',
    'value',
    'min',
    'max',
    'step',
    'percentage',
  ],
  inject: {
    $validator: '$validator',
  },
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
      if (Number.isNaN(Number(val))) {
        this.$emit('input', null)
        return
      }
      if (this.percentage) {
        let value = parseFloat((val / 100).toFixed(2))
        this.$emit('input', value)
      } else {
        this.$emit('input', val)
      }
    },
    value (val) {
      if (Number.isNaN(Number(val))) {
        this.inputVal = null
        return
      }
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
  .slider-field__input input.error {
    border-color: red !important;
    background: red !important;
    color: white !important;
    font-weight: 900;
  }
</style>
