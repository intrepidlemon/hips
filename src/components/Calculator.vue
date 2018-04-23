<template>
  <div id="calculator" >
    <h1>Calculator 💃</h1>
    <Parameters/>
    <sui-button primary v-on:click="all">Calculate</sui-button>
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
        discount,
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
        discount,
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
    height: auto;
    min-height: 100%;
  }
  #calculator > * {
    flex-shrink: 0;
  }
  #calculator > * + * {
    margin-top: 1rem;
  }
</style>
