<template>
  <sui-form id="parameters">
    <sui-form-field>
      <label>expected years left to live</label>
      <slider-field min="1" max="120" v-model="years"/>
    </sui-form-field>
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

    <sui-card>
      <sui-card-content>

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
            @click="totalSuccess = 100; hemiSuccess = 80"
            :active="totalSuccess === 100 && hemiSuccess === 80"
          >
            very high demand patient
          </sui-menu-item>
        </sui-menu>

        <div class="section">
          <sui-form-field>
            <label>total success utility</label>
            <slider-field min="0" max="200" v-model="totalSuccess"/>
          </sui-form-field>
          <sui-form-field>
            <label>hemi success utility</label>
            <slider-field min="0" max="200" v-model="hemiSuccess"/>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field>
            <label>dislocation utility penalty</label>
            <slider-field min="0" max="100" v-model="dislocation"/>
          </sui-form-field>
          <sui-form-field>
            <label>failure utility penalty</label>
            <slider-field min="0" max="100" v-model="failure"/>
          </sui-form-field>
        </div>

      </sui-card-content>
    </sui-card>

    <sui-card>
      <sui-card-content>

        <div class="section">
          <sui-form-field>
            <label>total longetivity in years</label>
            <slider-field min="0" max="120" v-model="totalLongetivityYears"/>
          </sui-form-field>
          <sui-form-field>
            <label>hemi longetivity in years</label>
            <slider-field min="0" max="120" v-model="hemiLongetivityYears"/>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field>
            <label>total longetivity percent survive</label>
            <slider-field min="0" max="1" step="0.01" v-model="totalLongetivityPercent"/>
          </sui-form-field>
          <sui-form-field>
            <label>hemi longetivity percent survive</label>
            <slider-field min="0" max="1" step="0.01" v-model="hemiLongetivityPercent"/>
          </sui-form-field>
        </div>

        <div class="section">
          <sui-form-field>
            <label>total dislocation rate above hemi dislocation rate</label>
            <slider-field min="0" max="1" step="0.01" v-model="totalDislocationRate"/>
          </sui-form-field>
        </div>

      </sui-card-content>
    </sui-card>

    <sui-form-field>
      <label>clinical significance</label>
      <slider-field min="0" max="1" step="0.01" v-model="clinicalSignificance"/>
    </sui-form-field>
  </sui-form>
</template>

<script>
import SliderField from './SliderField.vue'

export default {
  name: 'Parameters',
  components: {
    SliderField,
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
