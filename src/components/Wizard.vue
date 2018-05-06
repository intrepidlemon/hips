<template>
  <div id="wizard">
    <component v-bind:is="current"></component>

    <div class="flex">
      <div v-if="wizardStage === 0"/>
      <sui-button v-if="wizardStage !== 0" v-on:click="back" :animated="true">
        <sui-button-content visible>
          <sui-icon name="left arrow" />
        </sui-button-content>
        <sui-button-content hidden>Back</sui-button-content>
      </sui-button>
      <sui-button v-on:click="next" primary :animated="true">
        <sui-button-content visible>
          <sui-icon name="right arrow" />
        </sui-button-content>
        <sui-button-content hidden>Next</sui-button-content>
      </sui-button>
    </div>
  </div>
</template>

<script>
import Welcome from './WizardStages/Welcome.vue'
import LifeExpectancy from './WizardStages/LifeExpectancy.vue'
import Patient from './WizardStages/Patient.vue'

const stages = [
  'Welcome',
  'LifeExpectancy',
  'Patient',
]

export default {
  name: 'Wizard',

  components: {
    Welcome,
    LifeExpectancy,
    Patient,
  },

  computed: {
    wizardStage: {
      get () {
        return this.$store.state.ui.wizardStage
      },
      set (value) {
        this.$store.commit('updateWizardStage', value)
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
    showResults: {
      get () {
        return this.$store.state.ui.showResults
      },
      set (value) {
        this.$store.commit('updateResults', value)
      },
    },
    current () {
      return stages[this.wizardStage]
    },
    lastStage () {
      return !(this.wizardStage + 1 < stages.length)
    },
  },
  methods: {
    next () {
      if (this.lastStage) {
        this.showWizard = false
        this.showResults = true
      } else {
        this.wizardStage += 1
      }
    },
    back () {
      if (this.wizardStage !== 0) {
        this.wizardStage -= 1
      }
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>
