<template>
  <sui-form id="parameters">
    <div class="section">
      <input type="radio" value="none" v-model="discount"/>
      <label>no discounting</label>
      <input type="radio" value="hyperbolic" v-model="discount"/>
      <label>hyperbolic discounting</label>
      <input type="radio" value="modified-hyperbolic" v-model="discount"/>
      <label>modified hyperbolic discounting</label>
    </div>
    <sui-form-field>
      <label>life expectancy in years</label>
      <input v-model.number="years"/>
    </sui-form-field>
    <sui-form-field>
      <label>total success utility</label>
      <input v-model.number="totalSuccess"/>
    </sui-form-field>
    <sui-form-field>
      <label>hemi success utility</label>
      <input v-model.number="hemiSuccess"/>
    </sui-form-field>
    <sui-form-field>
      <label>dislocation utility penalty</label>
      <input v-model.number="dislocation"/>
    </sui-form-field>
    <sui-form-field>
      <label>failure utility penalty</label>
      <input v-model.number="failure"/>
    </sui-form-field>
    <sui-form-field>
      <label>total longetivity in years</label>
      <input v-model.number="totalLongetivityYears"/>
    </sui-form-field>
    <sui-form-field>
      <label>hemi longetivity in years</label>
      <input v-model.number="hemiLongetivityYears"/>
    </sui-form-field>
    <sui-form-field>
      <label>total longetivity percent survive</label>
      <input v-model.number="totalLongetivityPercent"/>
    </sui-form-field>
    <sui-form-field>
      <label>hemi longetivity percent survive</label>
      <input v-model.number="hemiLongetivityPercent"/>
    </sui-form-field>
    <sui-form-field>
      <label>total dislocation rate above hemi dislocation rate</label>
      <input v-model.number="totalDislocationRate"/>
    </sui-form-field>
    <sui-form-field>
      <label>clinical significance</label>
      <input v-model.number="clinicalSignificance"/>
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  name: 'Parameters',
  computed: {
    years: {
      get () {
        return this.$store.state.parameters.years
      },
      set (value) {
        this.$store.commit('updateYears', value)
      },
    },
    relativeValueOfHemi: {
      get () {
        return this.$store.state.parameters.relativeValueOfHemi
      },
      set (value) {
        this.$store.commit('updateRelativeValueOfHemi', value)
      },
    },
    totalSuccess: {
      get () {
        return this.$store.state.parameters.totalSuccess
      },
      set (value) {
        this.$store.commit('updateTotalSuccess', value)
      },
    },
    hemiSuccess: {
      get () {
        return this.$store.state.parameters.hemiSuccess
      },
      set (value) {
        this.$store.commit('updateHemiSuccess', value)
      },
    },
    failure: {
      get () {
        return this.$store.state.parameters.failure
      },
      set (value) {
        this.$store.commit('updateFailure', value)
      },
    },
    dislocation: {
      get () {
        return this.$store.state.parameters.dislocation
      },
      set (value) {
        this.$store.commit('updateDislocation', value)
      },
    },
    totalLongetivityYears: {
      get () {
        return this.$store.state.parameters.totalLongetivityYears
      },
      set (value) {
        this.$store.commit('updateTotalLongetivityYears', value)
      },
    },
    totalLongetivityPercent: {
      get () {
        return this.$store.state.parameters.totalLongetivityPercent
      },
      set (value) {
        this.$store.commit('updateTotalLongetivityPercent', value)
      },
    },
    hemiLongetivityYears: {
      get () {
        return this.$store.state.parameters.hemiLongetivityYears
      },
      set (value) {
        this.$store.commit('updateHemiLongetivityYears', value)
      },
    },
    hemiLongetivityPercent: {
      get () {
        return this.$store.state.parameters.hemiLongetivityPercent
      },
      set (value) {
        this.$store.commit('updateHemiLongetivityPercent', value)
      },
    },
    totalDislocationRate: {
      get () {
        const { totalDislocationRate, hemiDislocationRate } = this.$store.state.parameters
        return totalDislocationRate - hemiDislocationRate
      },
      set (value) {
        const { hemiDislocationRate } = this.$store.state.parameters
        this.$store.commit('updateTotalDislocationRate', value + hemiDislocationRate)
      },
    },
    discount: {
      get () {
        return this.$store.state.parameters.discount
      },
      set (value) {
        this.$store.commit('updateDiscount', value)
      },
    },
    clinicalSignificance: {
      get () {
        return this.$store.state.parameters.clinicalSignificance
      },
      set (value) {
        this.$store.commit('updateClinicalSignificance', value)
      },
    },
  },
}
</script>

<style scoped>
  #parameters {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  #parameters > * {
    width: 100%;
    box-sizing: border-box;
    padding: 0 1rem;
    margin: 0;
  }

  #parameters > * + * {
    margin-top: 1rem;
  }

  .section {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .section > * {
    width: auto;
    margin: 0;
  }

  .section > * + * {
    margin-left: 0.5rem;
  }

  input {
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    width: 100%;
  }
</style>
