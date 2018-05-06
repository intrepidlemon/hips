<template>
  <sui-container id="calculator" >
    <h1>Calculator 💃</h1>
    <Parameters/>
    <sui-button primary v-on:click="run">Calculate</sui-button>
    <Results v-if="showResults"/>
  </sui-container>
</template>

<script>
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
    run: function () {
      this.showResults = true
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
    margin: 1rem;
  }
  #calculator > * {
    flex-shrink: 0;
  }
  #calculator > * + * {
    margin-top: 1rem;
  }
</style>
