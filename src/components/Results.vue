<template>
  <div id="results">
    <Runner v-if="showResults"/>
    <div class="inner">
      <div class="results-flex">
        <div class="results-flex-center">
          <h2 v-if="finished && significant">
            {{ better }} is significantly better
          </h2>
          <h2 v-if="finished && !significant">
            Total and hemi are about the same
          </h2>
          <sui-statistics-group>
            <sui-statistic in-group>
              <sui-statistic-label>Total</sui-statistic-label>
              <sui-statistic-value>{{ averageTotal.toFixed(2) }}</sui-statistic-value>
            </sui-statistic>
            <sui-statistic in-group>
              <sui-statistic-label>Hemi</sui-statistic-label>
              <sui-statistic-value>{{ averageHemi.toFixed(2) }}</sui-statistic-value>
            </sui-statistic>
          </sui-statistics-group>
          <h3>Average utility</h3>
        </div>
      </div>
      <sui-progress
        :state="finished ? 'success' : 'active' "
        :indicating = "!finished"
        :percent="progress"
        size="tiny"
      />
      <div class="plot">
        <sui-accordion>
          <a is="sui-accordion-title">
            <sui-icon name="dropdown" />
            Plot
          </a>
          <sui-accordion-content>
            <div class="visualize">
              <Visualize/>
            </div>
          </sui-accordion-content>
        </sui-accordion>
      </div>
    </div>
  </div>
</template>

<script>
import Visualize from './Visualize.vue'
import Runner from './Runner.vue'

export default {
  name: 'Results',
  components: {
    Visualize,
    Runner,
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
    averageTotal () {
      return this.$store.getters.averageTotal || 0
    },
    averageHemi () {
      return this.$store.getters.averageHemi || 0
    },
    finished () {
      return this.$store.state.results.total.length === this.$store.state.parameters.trials
    },
    completed () {
      return this.$store.state.results.total.length
    },
    trials () {
      return this.$store.state.parameters.trials
    },
    progress () {
      return ((this.$store.state.results.total.length / this.$store.state.parameters.trials) * 100).toFixed(1)
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
}
</script>

<style scoped>
.results-flex {
  display: flex;
  margin-bottom: 1rem;
}
.results-flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  flex-grow: 1;
  flex-shrink: 0;
  overflow: hidden;
}

.results-flex-center .statistics {
  margin: 0;
  justify-content: center;
}

.visualize {
  max-height: 40vh;
  width: 40vh;
}

.inner .plot .content.active {
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  margin-top: 0;
}

h2 {
  margin-bottom: 4rem;
}
</style>
