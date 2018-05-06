<template>
  <sui-container id="calculator" >
    <h1>Calculator 💃</h1>
    <Parameters/>
    <div class="calculate-button">
      <sui-button primary v-on:click="run">Calculate</sui-button>
    </div>
    <sui-modal v-model="showResults" closeIcon>
      <sui-modal-content>
        <Results/>
      </sui-modal-content>
    </sui-modal>
    <sui-modal v-model="showWizard" closeIcon>
      <sui-modal-content>
        <Wizard/>
      </sui-modal-content>
    </sui-modal>
  </sui-container>
</template>

<script>
import uuid from 'uuid/v4'

import Parameters from './Parameters.vue'
import Results from './Results.vue'
import Wizard from './Wizard.vue'
import FieldExplanation from './FieldExplanation.vue'

export default {
  name: 'Calculator',

  components: {
    Parameters,
    Results,
    Wizard,
    FieldExplanation,
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
    showWizard: {
      get () {
        return this.$store.state.settings.showWizard
      },
      set (value) {
        this.$store.commit('updateWizard', value)
      },
    },
    identifier: {
      get () {
        return this.$store.state.settings.identifier
      },
      set (value) {
        this.$store.commit('updateIdentifier', value)
      },
    },
  },

  methods: {
    run: function () {
      this.showResults = true
    },
  },

  mounted: function () {
    if (this.identifier === '') {
      this.identifier = uuid()
    }
    this.$ma.identify({ userId: this.identifier })
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
    padding: 1rem;
  }
  #calculator > * {
    flex-shrink: 0;
  }
  .calculate-button {
    margin-top: 1rem;
  }
</style>
