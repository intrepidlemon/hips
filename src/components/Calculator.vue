<template>
  <sui-container id="calculator" >
    <h1>Decision Calculator using Monte Carlo Simulation for Treating Geriatric Hip Fracture with Arthroplasty.</h1>
    <h3>Created by J Bernstein and Ianto Xi</h3>
    <Parameters/>
    <transition name="fade">
      <sui-message
        v-if="error"
        header="Error"
        content="Please check all red boxes above"
        dismissable
        negative
        @dismiss="() => this.error = false"
      />
    </transition>
    <div class="calculate-button">
      <sui-button primary v-on:click="run">Run simulations</sui-button>
    </div>
    <div class="explanation">
      <p><a href="/static/2018-NTLW-Bhandari-Paradox.pdf">Why is this calculator important?</a></p>
    </div>
    <sui-modal v-model="showResults" closeIcon>
      <sui-modal-content>
        <Results/>
      </sui-modal-content>
    </sui-modal>
  </sui-container>
</template>

<script>
import uuid from 'uuid/v4'

import Parameters from './Parameters.vue'
import Results from './Results.vue'
import FieldExplanation from './FieldExplanation.vue'

export default {
  name: 'Calculator',

  inject: {
    $validator: '$validator',
  },

  components: {
    Parameters,
    Results,
    FieldExplanation,
  },

  data () {
    return { error: false }
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
      this.error = false
      this.$validator.validate().then(result => {
        if (result) {
          this.showResults = true
        } else {
          this.error = true
        }
      })
    },
  },

  mounted: function () {
    if (!this.identifier) {
      this.identifier = uuid()
    }
    this.$ma.identify({ userId: this.identifier })
    this.$ma.setUserProperties({ userId: this.identifier })
    this.$ma.trackEvent({
      action: 'load-calculator',
    })
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
  #calculator h1 {
    font-size: 1.8rem;
  }
  #calculator h1, #calculator h3 {
    margin: 0.5rem;
    line-height: 1.8;
  }
  .explanation {
    margin-top: 1rem;
  }
  .explanation a {
    text-decoration: underline;
  }
</style>
