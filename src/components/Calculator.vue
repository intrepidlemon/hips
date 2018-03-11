<template>
  <div id="calculator" >
    <h1>Calculator 💃</h1>
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
    <button v-on:click="all">Calculate</button>
    <h3 v-if="totalResult.length > 0">Average value of total: {{ totalAvg }}</h3>
    <h3 v-if="hemiResult.length > 0 ">Average value of hemi: {{ hemiAvg }}</h3>
  </div>
</template>

<script>
import { run } from '@/simulation'

export default {
  name: 'Calculator',
  data () {
    return {
      totalResult: [],
      hemiResult: [],
    }
  },

  computed: {
    totalAvg: function () {
      return this.average(this.totalResult)
    },
    hemiAvg: function () {
      return this.average(this.hemiResult)
    },
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

  methods: {

    single: function () {
      const result = run(
        this.years,
        this.years / 2,
        {
          totalUtils: {
            success: this.totalSuccess,
            failure: this.failure,
            dislocation: this.dislocation,
            years: this.totalLongetivityYears,
          },
          hemiUtils: {
            success: this.hemiSuccess,
            failure: this.failure,
            dislocation: this.dislocation,
            years: this.hemiLongetivityYears,
          },
        },
        {
          totalLongetivity: {
            years: this.totalLongetivityYears,
            percent: this.totalLongetivityPercent,
          },
          hemiLongetivity: {
            years: this.hemiLongetivityYears,
            percent: this.hemiLongetivityPercent,
          },
        },
        {
          totalDislocationRate: this.totalDislocationRate,
          hemiDislocationRate: this.hemiDislocationRate,
        },
        this.useIncrementalGain,
      )
      this.totalResult = [ ...this.totalResult, result.total ]
      this.hemiResult = [ ...this.hemiResult, result.hemi ]
    },

    average: function (arr) {
      return arr.reduce((p, c) => p + c, 0) / arr.length
    },

    all: function () {
      this.totalResult = []
      this.hemiResult = []
      const trials = [ ...Array(this.trials) ]
      trials.forEach(this.single)
    },

  },
}
</script>

<style scoped>
  #calculator {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  button {
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    background: cornflowerblue;
    color: white;
    padding: 1rem;
  }

  button:active {
    position: relative;
    top: 1px;
  }
</style>
