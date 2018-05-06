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
  },

  data () {
    return { timeouts: [] }
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
