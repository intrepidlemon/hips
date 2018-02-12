<template>
  <div id="calculator" >
    <h1>Calculator 💃</h1>
    <label>trials</label>
    <input v-model.number="trials"/>
    <label>years</label>
    <input v-model.number="years"/>
    <label>total success utility</label>
    <input v-model.number="totalSuccess"/>
    <label>hemi success utility</label>
    <input v-model.number="hemiSuccess"/>
    <label>dislocation utility</label>
    <input v-model.number="dislocation"/>
    <label>total longetivity in years</label>
    <input v-model.number="totalLongetivityYears"/>
    <label>hemi longetivity in years</label>
    <input v-model.number="hemiLongetivityYears"/>
    <label>total longetivity percent survive</label>
    <input v-model.number="totalLongetivityPercent"/>
    <label>hemi longetivity percent survive</label>
    <input v-model.number="hemiLongetivityPercent"/>
    <label>total dislocation rate</label>
    <input v-model.number="totalDislocationRate"/>
    <label>hemi dislocation rate</label>
    <input v-model.number="hemiDislocationRate"/>
    <label>failure utility</label>
    <input v-model.number="failure"/>
    <button v-on:click="all">Calculate 📈</button>
    <h3 v-if="totalResult.length > 0">Average value of total: {{ totalAvg }}</h3>
    <h3 v-if="hemiResult.length > 0 ">Average value of hemi: {{ hemiAvg }}</h3>
  </div>
</template>

<script>
import { run } from '@/simulation'

export default {
  name: 'Calculator',
  data () {
    return {
      years: 5,
      totalSuccess: 100,
      hemiSuccess: 100,
      failure: 0,
      dislocation: 5,
      totalLongetivityYears: 12,
      totalLongetivityPercent: 0.8,
      hemiLongetivityYears: 6,
      hemiLongetivityPercent: 0.8,
      hemiDislocationRate: 0.10,
      totalDislocationRate: 0.14,
      trials: 1000,
      totalResult: [],
      hemiResult: []
    }
  },

  computed: {
    totalAvg: function () {
      return this.average(this.totalResult)
    },
    hemiAvg: function () {
      return this.average(this.hemiResult)
    }
  },

  methods: {

    single: function () {
      const result = run(
        this.years,
        this.years / 2,
        {
          totalUtils: {
            success: this.totalSuccess,
            failure: this.failure,
            dislocation: this.dislocation
          },
          hemiUtils: {
            success: this.hemiSuccess,
            failure: this.failure,
            dislocation: this.dislocation
          }
        },
        {
          totalLongetivity: {
            years: this.totalLongetivityYears,
            percent: this.totalLongetivityPercent
          },
          hemiLongetivity: {
            years: this.hemiLongetivityYears,
            percent: this.hemiLongetivityPercent
          }
        },
        {
          totalDislocationRate: this.totalDislocationRate,
          hemiDislocationRate: this.hemiDislocationRate
        }
      )
      this.totalResult = [ ...this.totalResult, result.total ]
      this.hemiResult = [ ...this.hemiResult, result.hemi ]
    },

    average: function (arr) {
      return arr.reduce((p, c) => p + c, 0) / arr.length
    },

    all: function () {
      this.totalResult = []
      this.hemiResult = []
      const trials = [ ...Array(this.trials) ]
      trials.forEach(this.single)
    }

  }
}
</script>

<style scoped>
  #calculator {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 0.5rem;
  }

  button {
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    background: cornflowerblue;
    color: white;
    padding: 1rem;
  }

  button:active {
    position: relative;
    top: 1px;
  }
</style>
