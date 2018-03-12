<template>
  <div id="calculator" >
    <h1>Calculator 💃</h1>
    <Parameters/>
    <button v-on:click="all">Calculate</button>
    <Results v-if="showResults"/>
  </div>
</template>

<script>
import { run } from '@/simulation'
import Parameters from './Parameters.vue'
import Results from './Results.vue'

export default {
  name: 'Calculator',

  components: {
    Parameters,
    Results,
  },

  computed: {
    showResults: {
      get () {
        return this.$store.state.ui.showResults
      },
      set (value) {
        this.$store.commit('updateResults', value)
      },
    },
  },

  methods: {
    single: function () {
      const {
        years,
        totalSuccess,
        hemiSuccess,
        failure,
        dislocation,
        totalLongetivityYears,
        hemiLongetivityYears,
        totalLongetivityPercent,
        hemiLongetivityPercent,
        totalDislocationRate,
        hemiDislocationRate,
        useIncrementalGain,
      } = this.$store.state.parameters
      const result = run(
        years,
        years / 2,
        {
          totalUtils: {
            success: totalSuccess,
            failure: failure,
            dislocation: dislocation,
            years: totalLongetivityYears,
          },
          hemiUtils: {
            success: hemiSuccess,
            failure: failure,
            dislocation: dislocation,
            years: hemiLongetivityYears,
          },
        },
        {
          totalLongetivity: {
            years: totalLongetivityYears,
            percent: totalLongetivityPercent,
          },
          hemiLongetivity: {
            years: hemiLongetivityYears,
            percent: hemiLongetivityPercent,
          },
        },
        {
          totalDislocationRate: totalDislocationRate,
          hemiDislocationRate: hemiDislocationRate,
        },
        useIncrementalGain,
      )
      this.$store.commit('pushTotal', result.total)
      this.$store.commit('pushHemi', result.hemi)
    },
    all: function () {
      this.showResults = true
      this.$store.commit('clear')
      const trials = [ ...Array(this.$store.state.parameters.trials) ]
      trials.forEach((_, i) => setTimeout(this.single, i * 3))
    },
  },
}
</script>

<style scoped>
  #calculator {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
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
