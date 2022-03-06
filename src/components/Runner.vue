<template>
  <div v-if="false"/>
</template>

<script>
import { run } from '@/simulation'

export default {
  name: 'Runner',

  computed: {
    showResults: {
      get () {
        return this.$store.state.ui.showResults
      },
      set (value) {
        this.$store.commit('updateResults', value)
      },
    },
    finished () {
      return this.$store.state.results.total.length === this.$store.state.parameters.trials
    },
    averageTotal () {
      return this.$store.getters.averageTotal || 0
    },
    averageHemi () {
      return this.$store.getters.averageHemi || 0
    },
    significant () {
      const criteria = this.$store.state.parameters.clinicalSignificance
      const significance = Math.abs(this.averageTotal - this.averageHemi) / Math.max(this.averageTotal, this.averageHemi)
      return significance > criteria
    },
    better () {
      return this.averageTotal > this.averageHemi ? 'Total' : 'Hemi'
    },
  },

  watch: {
    finished (finished, old) {
      if (old === false && finished === true) {
        this.$ma.trackEvent({
          action: 'complete-total-vs-hemi-calculation',
          properties: {
            ...this.$store.state.parameters,
            significant: this.significant,
            better: this.better,
            averageTotal: this.averageTotal,
            averageHemi: this.averageHemi,
          },
        })
      }
    },
  },

  data () {
    return { timeouts: [] }
  },

  methods: {
    single: function () {
      const {
        years,
        lifeExpectancyDistribution,
        totalSuccess,
        hemiSuccess,
        failure,
        dislocation,
        failureEnduringPenalty,
        dislocationEnduringPenalty,
        totalImmediatePenalty,
        totalLongetivityYears,
        hemiLongetivityYears,
        totalLongetivityPercent,
        hemiLongetivityPercent,
        totalDislocationRate,
        hemiDislocationRate,
        discount,
        failureMode,
        yearTotalDislocationEquals,
      } = this.$store.state.parameters

      const result = run(
        years,
        {
          totalUtils: {
            success: totalSuccess,
            failure: failure,
            dislocation: dislocation,
            years: totalLongetivityYears,
            immediatePenalty: totalImmediatePenalty,
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
          totalDislocationRate,
          hemiDislocationRate,
          yearTotalDislocationEquals,
        },
        discount,
        failureMode,
        lifeExpectancyDistribution,
        failureEnduringPenalty,
        dislocationEnduringPenalty,
      )
      this.$store.commit('pushTotal', result.total)
      this.$store.commit('pushHemi', result.hemi)
    },
    all: function () {
      this.$store.commit('clear')
      const trials = [ ...Array(this.$store.state.parameters.trials) ]
      this.timeouts = trials.map((_, i) => setTimeout(this.single, i))
    },
    clear: function () {
      this.timeouts.forEach(i => clearTimeout(i))
      this.timeouts = []
    },
  },
  mounted: function () {
    this.all()
    this.$ma.trackEvent({
      action: 'run-total-vs-hemi-calculation',
      properties: this.$store.state.parameters,
    })
  },
  destroyed: function () {
    this.clear()
  },
}
</script>
