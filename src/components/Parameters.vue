<template>
  <div id="parameters">
    <div class="section">
      <input type="checkbox" v-model="useIncrementalGain"/>
      <label>use incremental gain</label>
    </div>
    <label>trials</label>
    <input v-model.number="trials"/>
    <label>years</label>
    <input v-model.number="years"/>
    <label>total success utility</label>
    <input v-model.number="totalSuccess"/>
    <label>hemi success utility</label>
    <input v-model.number="hemiSuccess"/>
    <label>dislocation utility</label>
    <input v-model.number="dislocation"/>
    <label>total longetivity in years</label>
    <input v-model.number="totalLongetivityYears"/>
    <label>hemi longetivity in years</label>
    <input v-model.number="hemiLongetivityYears"/>
    <label>total longetivity percent survive</label>
    <input v-model.number="totalLongetivityPercent"/>
    <label>hemi longetivity percent survive</label>
    <input v-model.number="hemiLongetivityPercent"/>
    <label>total dislocation rate</label>
    <input v-model.number="totalDislocationRate"/>
    <label>hemi dislocation rate</label>
    <input v-model.number="hemiDislocationRate"/>
    <label>failure utility</label>
    <input v-model.number="failure"/>
  </div>
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
    hemiDislocationRate: {
      get () {
        return this.$store.state.parameters.hemiDislocationRate
      },
      set (value) {
        this.$store.commit('updateHemiDislocationRate', value)
      },
    },
    totalDislocationRate: {
      get () {
        return this.$store.state.parameters.totalDislocationRate
      },
      set (value) {
        this.$store.commit('updateTotalDislocationRate', value)
      },
    },
    trials: {
      get () {
        return this.$store.state.parameters.trials
      },
      set (value) {
        this.$store.commit('updateTrials', value)
      },
    },
    useIncrementalGain: {
      get () {
        return this.$store.state.parameters.useIncrementalGain
      },
      set (value) {
        this.$store.commit('updateUseIncrementalGain', value)
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
    margin-left: 1rem;
  }

  input {
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    width: 100%;
  }
</style>