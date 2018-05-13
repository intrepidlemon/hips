<template>
  <sui-form>
    <h3 is="sui-header">Life Expectancy</h3>
    <p>Please enter in the life expectancy of your patient, i.e., the expected number of years left to live</p>
    <div class="section">
      <sui-form-field>
        <label>expected years left to live</label>
        <slider-field min="1" max="120" v-model="years"/>
      </sui-form-field>
    </div>
  </sui-form>
</template>

<script>
import SliderField from '../SliderField.vue'

export default {
  name: 'LifeExpectancy',
  components: {
    SliderField,
  },
  computed: {
    years: {
      get () {
        return this.$store.state.parameters.years
      },
      set (value) {
        this.$store.commit('updateYears', value)
      },
    },
  },
}
</script>

<style scoped></style>
