<template>
  <div
    id="results"
  >
    <Runner v-if="showResults"/>
    <Visualize/>
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
  },
}
</script>

<style scoped>
</style>
