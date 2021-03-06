<template>
  <sui-form id="parameters">
    <sui-card>
      <sui-card-content>
        <h3 class="patient-header" is="sui-header">
          <div>Patient information</div>
          <sui-button v-on:click="reset">Reset default parameters</sui-button>
        </h3>
        <div class="section">
          <sui-form-field>
            <label>
              age
            </label>
            <slider-field
              min="65"
              max="89"
              v-model="age"
              name="age"
            />
          </sui-form-field>
          <sui-form-field>
            <label>
              sex
            </label>
            <sui-menu :widths="2">
              <sui-menu-item
                @click="sex = 'male'"
                :active="sex === 'male'"
              >
                male
              </sui-menu-item>
              <sui-menu-item
                @click="sex = 'female'"
                :active="sex === 'female'"
              >
                female
              </sui-menu-item>
            </sui-menu>
          </sui-form-field>
          <sui-form-field>
            <label>
              calculate life expectancy from age and sex
              <ExplanationIndicator :entry="content['life-expectancy-calculator']"/>
            </label>
            <sui-button v-on:click="calculateLifeExpectancy">Calculate</sui-button>
          </sui-form-field>
        </div>
        <div class="section">
          <sui-form-field>
            <label>
              life expectancy
              <ExplanationIndicator :entry="content['life-expectancy']"/>
            </label>
            <slider-field
              min="1"
              max="25"
              v-model="years"
              name="years"
            />
          </sui-form-field>
          <sui-form-field>
            <label>
              standard deviation of life expectancy
              <ExplanationIndicator :entry="content['life-expectancy-std']"/>
            </label>
            <sui-menu :widths="2">
              <sui-menu-item
                @click="std = 0.5"
                :active="std === 0.5"
              >
                narrow
              </sui-menu-item>
              <sui-menu-item
                @click="std = 1.0"
                :active="std === 1.0"
              >
                wide
              </sui-menu-item>
            </sui-menu>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field class="parameters__toggle">
            <label>
              suppress first year increased mortality risk
              <ExplanationIndicator :entry="content['suppress-20']"/>
            </label>
            <sui-checkbox toggle v-model="suppressFirstYearMortality"/>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field>
            <label>
              utility discounting
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
                @click="discount = 'modified-hyperbolic'"
                :active="discount === 'modified-hyperbolic'"
              >
                partial hyperbolic
              </sui-menu-item>
              <sui-menu-item
                @click="discount = 'hyperbolic'"
                :active="discount === 'hyperbolic'"
              >
                hyperbolic
              </sui-menu-item>
            </sui-menu>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field>
            <label>
              pre-fracture functional status
              <ExplanationIndicator :entry="content['patient-temperament']"/>
            </label>
            <sui-menu :widths="4">
              <sui-menu-item
                @click="totalSuccess = 80; hemiSuccess = 100"
                :active="totalSuccess === 80 && hemiSuccess === 100"
              >
                low demand
              </sui-menu-item>
              <sui-menu-item
                @click="totalSuccess = 100; hemiSuccess = 100"
                :active="totalSuccess === 100 && hemiSuccess === 100"
              >
                average
              </sui-menu-item>
              <sui-menu-item
                @click="totalSuccess = 100; hemiSuccess = 90"
                :active="totalSuccess === 100 && hemiSuccess === 90"
              >
                high demand
              </sui-menu-item>
              <sui-menu-item
                @click="totalSuccess = 100; hemiSuccess = 75"
                :active="totalSuccess === 100 && hemiSuccess === 75"
              >
                very high demand
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
                  THA success utility
                  <ExplanationIndicator :entry="content['utilities']"/>
                </label>
                <slider-field
                  min="0"
                  max="200"
                  v-model="totalSuccess"
                  name="total-success"
                  />
              </sui-form-field>
              <sui-form-field>
                <label>
                  hemi success utility
                  <ExplanationIndicator :entry="content['utilities']"/>
                </label>
                <slider-field
                  min="0"
                  max="200"
                  v-model="hemiSuccess"
                  name="hemi-success"
                  />
              </sui-form-field>
            </div>

            <div class="section">
              <sui-form-field>
                <label>
                  dislocation utility penalty
                  <ExplanationIndicator :entry="content['utilities']"/>
                </label>
                <slider-field
                 min="0"
                 max="200"
                 v-model="dislocation"
                 name="dislocation"
                 />
              </sui-form-field>
              <sui-form-field>
                <label>
                  failure utility penalty
                  <ExplanationIndicator :entry="content['utilities']"/>
                </label>
                <slider-field
                  min="0"
                  max="200"
                  v-model="failure"
                  name="failure"
                  />
              </sui-form-field>
            </div>
          </sui-accordion-content>
        </sui-accordion>
      </sui-card-content>
    </sui-card>

    <sui-card>
      <sui-card-content>
        <sui-accordion>
          <a is="sui-accordion-title">
            <sui-icon name="dropdown" />
            <h3 class="accordion-header" is="sui-header">Device information</h3>
          </a>
          <sui-accordion-content>

            <div class="section">
              <sui-form-field>
                <label>
                  hemi dislocation rate
                  <ExplanationIndicator :entry="content['dislocation-rates']"/>
                </label>
                <slider-field
                  min="0"
                  max="20"
                  step="1"
                  v-model="hemiDislocationRate"
                  :percentage="true"
                  name="hemi-dislocation-rate"
                  />
              </sui-form-field>

              <sui-form-field>
                <label>
                  total dislocation rate
                  <ExplanationIndicator :entry="content['dislocation-rates']"/>
                </label>
                <slider-field
                  min="0"
                  max="20"
                  step="1"
                  v-model="totalDislocationRate"
                  :percentage="true"
                  name="total-dislocation-rate"
                  />
              </sui-form-field>
            </div>

            <div class="section">
              <sui-form-field>
                <label>
                  year THA dislocation rate falls to hemi dislocation rate
                  <ExplanationIndicator :entry="content['dislocation-rates']"/>
                </label>
                <slider-field
                  min="0"
                  max="15"
                  step="1"
                  v-model="yearTotalDislocationEquals"
                  name="year-total-dislocation-equals"
                  />
              </sui-form-field>
            </div>

            <div class="section">
              <sui-form-field>
                <label>
                  THA longevity in years
                  <ExplanationIndicator :entry="content['device-longevity']"/>
                </label>
                <slider-field
                  min="1"
                  max="15"
                  v-model="totalLongetivityYears"
                  name="total-longevity-years"
                  />
              </sui-form-field>
              <sui-form-field>
                <label>
                  hemi longevity in years
                  <ExplanationIndicator :entry="content['device-longevity']"/>
                </label>
                <slider-field
                  min="1"
                  max="15"
                  v-model="hemiLongetivityYears"
                  name="hemi-longevity-years"
                  />
              </sui-form-field>
            </div>

            <div class="section">
              <sui-form-field>
                <label>
                  device survival at "longevity"
                  <ExplanationIndicator :entry="content['device-longevity-percent-survive']"/>
                </label>
                <slider-field
                  min="0"
                  max="100"
                  step="1"
                  :percentage="true"
                  v-model="longetivityPercent"
                  name="longevity-percent"
                />
              </sui-form-field>
              <sui-form-field>
                <label>
                  failure function
                  <ExplanationIndicator :entry="content['failure-function']"/>
                </label>
                <sui-menu :widths="2">
                  <sui-menu-item
                    @click="failureMode = 'quadratic'"
                    :active="failureMode === 'quadratic'"
                  >
                    quadratic
                  </sui-menu-item>
                  <sui-menu-item
                    @click="failureMode = 'linear'"
                    :active="failureMode === 'linear'"
                  >
                    linear
                  </sui-menu-item>
                </sui-menu>
              </sui-form-field>
            </div>
          </sui-accordion-content>
        </sui-accordion>

      </sui-card-content>
    </sui-card>
    <sui-card>
      <sui-card-content>
        <sui-accordion>
          <a is="sui-accordion-title">
            <sui-icon name="dropdown" />
            <h3 class="accordion-header" is="sui-header">Calculator features</h3>
          </a>
          <sui-accordion-content>

            <div class="section">
              <sui-form-field>
                <label>
                  minimal clinically important difference
                  <ExplanationIndicator :entry="content['clinical-significance']"/>
                </label>
                <slider-field
                  min="0"
                  max="20"
                  step="1"
                  v-model="clinicalSignificance"
                  :percentage="true"
                  name="clinical-significance"
                  />
              </sui-form-field>
            </div>

            <div class="section">
              <sui-form-field>
                <label>
                  simulator iterations
                  <ExplanationIndicator :entry="content['trials']"/>
                </label>
                <slider-field
                 min="100"
                 max="1000"
                 step="10"
                 v-model="trials"
                 name="trials"
                 />
              </sui-form-field>
            </div>

          </sui-accordion-content>
        </sui-accordion>

      </sui-card-content>
    </sui-card>
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
  inject: {
    $validator: '$validator',
  },
  methods: {
    reset: function (e) {
      e.preventDefault()
      this.$store.commit('resetDefaultParameters')
    },
    calculateLifeExpectancy: function (e) {
      e.preventDefault()
      this.$store.commit('calculateLifeExpectancy')
    },
  },
  computed: {
    age: {
      get () {
        return this.$store.state.parameters.age
      },
      set (value) {
        this.$store.commit('updateAge', value)
      },
    },
    sex: {
      get () {
        return this.$store.state.parameters.sex
      },
      set (value) {
        this.$store.commit('updateSex', value)
      },
    },
    years: {
      get () {
        return this.$store.state.parameters.years
      },
      set (value) {
        this.$store.commit('updateYears', value)
      },
    },
    std: {
      get () {
        return this.$store.state.parameters.std
      },
      set (value) {
        this.$store.commit('updateSTD', value)
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
    hemiLongetivityYears: {
      get () {
        return this.$store.state.parameters.hemiLongetivityYears
      },
      set (value) {
        this.$store.commit('updateHemiLongetivityYears', value)
      },
    },
    longetivityPercent: {
      get () {
        return this.$store.state.parameters.totalLongetivityPercent
      },
      set (value) {
        this.$store.commit('updateTotalLongetivityPercent', value)
        this.$store.commit('updateHemiLongetivityPercent', value)
      },
    },
    hemiDislocationRate: {
      get () {
        return this.$store.state.parameters.hemiDislocationRate
      },
      set (value) {
        this.$store.commit('updateHemiDislocationRate', value)
      },
    },
    totalDislocationRate: {
      get () {
        return this.$store.state.parameters.totalDislocationRate
      },
      set (value) {
        this.$store.commit('updateTotalDislocationRate', value)
      },
    },
    differenceDislocationRate: {
      get () {
        const { totalDislocationRate, hemiDislocationRate } = this.$store.state.parameters
        const value = parseFloat((totalDislocationRate - hemiDislocationRate).toFixed(2))
        return value
      },
      set (value) {
        const { hemiDislocationRate } = this.$store.state.parameters
        this.$store.commit('updateTotalDislocationRate', parseFloat((value + hemiDislocationRate).toFixed(2)))
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
    failureMode: {
      get () {
        return this.$store.state.parameters.failureMode
      },
      set (value) {
        this.$store.commit('updateFailureMode', value)
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
    trials: {
      get () {
        return this.$store.state.parameters.trials
      },
      set (value) {
        this.$store.commit('updateTrials', value)
      },
    },
    yearTotalDislocationEquals: {
      get () {
        return this.$store.state.parameters.yearTotalDislocationEquals
      },
      set (value) {
        this.$store.commit('updateYearTotalDislocationEquals', value)
      },
    },
    suppressFirstYearMortality: {
      get () {
        return !this.$store.state.parameters.emphasizeFirstYearMortality
      },
      set (value) {
        this.$store.commit('updateEmphasizeFirstYearMortality', !value)
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

  #parameters .patient-header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .menu .item {
    cursor: pointer;
  }

  .content > * + * {
    margin-top: 1rem;
  }

  .accordion-header {
    display: inline;
  }

  .ui .menu {
    margin: 0;
  }

  #parameters .section .parameters__toggle {
    flex-shrink: 1;
    flex-grow: 0;
    flex-direction: row;
    display: flex;
  }

  #parameters .section .parameters__toggle > * + * {
    margin-left: 0.5rem;
  }

</style>
