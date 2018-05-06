<template>
  <sui-form id="parameters">
    <sui-card>
      <sui-card-content>
        <h3 is="sui-header">Patient</h3>

        <div class="section">
          <sui-form-field>
            <label>
              expected years left to live
              <ExplanationIndicator :entry="content['life-expectancy']"/>
            </label>
            <slider-field min="1" max="120" v-model="years"/>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field>
            <label>
              utility decay rate
              <ExplanationIndicator :entry="content['utility-decay-rate']"/>
            </label>
            <sui-menu :widths="3">
              <sui-menu-item
                @click="discount = 'none'"
                :active="discount === 'none'"
              >
                no discounting
              </sui-menu-item>
              <sui-menu-item
                @click="discount = 'hyperbolic'"
                :active="discount === 'hyperbolic'"
              >
                hyperbolic
              </sui-menu-item>
              <sui-menu-item
                @click="discount = 'modified-hyperbolic'"
                :active="discount === 'modified-hyperbolic'"
              >
                modified hyperbolic
              </sui-menu-item>
            </sui-menu>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field>
            <label>
              patient temperament
              <ExplanationIndicator :entry="content['patient-temperament']"/>
            </label>
            <sui-menu :widths="3">
              <sui-menu-item
                @click="totalSuccess = 100; hemiSuccess = 100"
                :active="totalSuccess === 100 && hemiSuccess === 100"
              >
                standard patient
              </sui-menu-item>
              <sui-menu-item
                @click="totalSuccess = 100; hemiSuccess = 90"
                :active="totalSuccess === 100 && hemiSuccess === 90"
              >
                high demand patient
              </sui-menu-item>
              <sui-menu-item
                @click="totalSuccess = 100; hemiSuccess = 75"
                :active="totalSuccess === 100 && hemiSuccess === 75"
              >
                very high demand patient
              </sui-menu-item>
            </sui-menu>
          </sui-form-field>
        </div>

        <sui-accordion>
          <a is="sui-accordion-title">
            <sui-icon name="dropdown" />
            Advanced
          </a>
          <sui-accordion-content>
            <div class="section">
              <sui-form-field>
                <label>
                  total success utility
                  <ExplanationIndicator :entry="content['utilities']"/>
                </label>
                <slider-field min="0" max="200" v-model="totalSuccess"/>
              </sui-form-field>
              <sui-form-field>
                <label>
                  hemi success utility
                  <ExplanationIndicator :entry="content['utilities']"/>
                </label>
                <slider-field min="0" max="200" v-model="hemiSuccess"/>
              </sui-form-field>
            </div>

            <div class="section">
              <sui-form-field>
                <label>
                  dislocation utility penalty
                  <ExplanationIndicator :entry="content['utilities']"/>
                </label>
                <slider-field min="0" max="100" v-model="dislocation"/>
              </sui-form-field>
              <sui-form-field>
                <label>
                  failure utility penalty
                  <ExplanationIndicator :entry="content['utilities']"/>
                </label>
                <slider-field min="0" max="100" v-model="failure"/>
              </sui-form-field>
            </div>
          </sui-accordion-content>
        </sui-accordion>
      </sui-card-content>
    </sui-card>

    <sui-card>
      <sui-card-content>
        <h3 is="sui-header">Device</h3>

        <div class="section">
          <sui-form-field>
            <label>
              total dislocation rate above hemi dislocation rate
              <ExplanationIndicator :entry="content['dislocation-rates']"/>
            </label>
            <slider-field min="0" max="1" step="0.01" v-model="totalDislocationRate"/>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field>
            <label>
              total longevity in years
              <ExplanationIndicator :entry="content['device-longevity']"/>
            </label>
            <slider-field min="0" max="120" v-model="totalLongetivityYears"/>
          </sui-form-field>
          <sui-form-field>
            <label>
              hemi longevity in years
              <ExplanationIndicator :entry="content['device-longevity']"/>
            </label>
            <slider-field min="0" max="120" v-model="hemiLongetivityYears"/>
          </sui-form-field>
        </div>

        <sui-accordion>
          <a is="sui-accordion-title">
            <sui-icon name="dropdown" />
            Advanced
          </a>
          <sui-accordion-content>
            <div class="section">
              <sui-form-field>
                <label>
                  total longevity percent survive
                  <ExplanationIndicator :entry="content['device-longevity-percent-survive']"/>
                </label>
                <slider-field min="0" max="1" step="0.01" v-model="totalLongetivityPercent"/>
              </sui-form-field>
              <sui-form-field>
                <label>
                  hemi longevity percent survive
                  <ExplanationIndicator :entry="content['device-longevity-percent-survive']"/>
                </label>
                <slider-field min="0" max="1" step="0.01" v-model="hemiLongetivityPercent"/>
              </sui-form-field>
            </div>
          </sui-accordion-content>
        </sui-accordion>

      </sui-card-content>
    </sui-card>

    <sui-form-field>
      <label>
        clinical significance
        <ExplanationIndicator :entry="content['clinical-significance']"/>
      </label>
      <slider-field min="0" max="1" step="0.01" v-model="clinicalSignificance"/>
    </sui-form-field>
  </sui-form>
</template>

<script>
import SliderField from './SliderField.vue'
import ExplanationIndicator from './ExplanationIndicator.vue'

import content from '@/assets/contentful.json'

export default {
  name: 'Parameters',
  components: {
    SliderField,
    ExplanationIndicator,
  },

  computed: {
    years: {
      get () {
        return this.$store.state.parameters.years
      },
      set (value) {
        this.$store.commit('updateYears', value)
      },
    },
    relativeValueOfHemi: {
      get () {
        return this.$store.state.parameters.relativeValueOfHemi
      },
      set (value) {
        this.$store.commit('updateRelativeValueOfHemi', value)
      },
    },
    totalSuccess: {
      get () {
        return this.$store.state.parameters.totalSuccess
      },
      set (value) {
        this.$store.commit('updateTotalSuccess', value)
      },
    },
    hemiSuccess: {
      get () {
        return this.$store.state.parameters.hemiSuccess
      },
      set (value) {
        this.$store.commit('updateHemiSuccess', value)
      },
    },
    failure: {
      get () {
        return this.$store.state.parameters.failure
      },
      set (value) {
        this.$store.commit('updateFailure', value)
      },
    },
    dislocation: {
      get () {
        return this.$store.state.parameters.dislocation
      },
      set (value) {
        this.$store.commit('updateDislocation', value)
      },
    },
    totalLongetivityYears: {
      get () {
        return this.$store.state.parameters.totalLongetivityYears
      },
      set (value) {
        this.$store.commit('updateTotalLongetivityYears', value)
      },
    },
    totalLongetivityPercent: {
      get () {
        return this.$store.state.parameters.totalLongetivityPercent
      },
      set (value) {
        this.$store.commit('updateTotalLongetivityPercent', value)
      },
    },
    hemiLongetivityYears: {
      get () {
        return this.$store.state.parameters.hemiLongetivityYears
      },
      set (value) {
        this.$store.commit('updateHemiLongetivityYears', value)
      },
    },
    hemiLongetivityPercent: {
      get () {
        return this.$store.state.parameters.hemiLongetivityPercent
      },
      set (value) {
        this.$store.commit('updateHemiLongetivityPercent', value)
      },
    },
    totalDislocationRate: {
      get () {
        const { totalDislocationRate, hemiDislocationRate } = this.$store.state.parameters
        return totalDislocationRate - hemiDislocationRate
      },
      set (value) {
        const { hemiDislocationRate } = this.$store.state.parameters
        this.$store.commit('updateTotalDislocationRate', value + hemiDislocationRate)
      },
    },
    discount: {
      get () {
        return this.$store.state.parameters.discount
      },
      set (value) {
        this.$store.commit('updateDiscount', value)
      },
    },
    clinicalSignificance: {
      get () {
        return this.$store.state.parameters.clinicalSignificance
      },
      set (value) {
        this.$store.commit('updateClinicalSignificance', value)
      },
    },
  },

  created: function () {
    this.content = content
  },
}
</script>

<style scoped>
  #parameters {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  #parameters > * {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  #parameters > * + * {
    margin-top: 1rem;
  }

  #parameters .section {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  #parameters .section > * {
    width: auto;
    margin: 0;
    flex-grow: 1;
  }

  #parameters .section > * + * {
    margin-left: 1rem;
  }

  .menu .item {
    cursor: pointer;
  }

  .content > * + * {
    margin-top: 1rem;
  }

</style>
