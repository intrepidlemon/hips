<template>
  <div id="calculator" >
    <h1>Calculator</h1>
    <label>trials</label>
    <input v-model="trials"/>
    <label>years</label>
    <input v-model="years"/>
    <label>std</label>
    <input v-model="std"/>
    <label>success utility</label>
    <input v-model="success"/>
    <label>dislocation utility</label>
    <input v-model="dislocation"/>
    <label>failure utility</label>
    <input v-model="failure"/>
    <button v-on:click="all">Calculate</button>
    <h2 v-if="totalResult.length > 0">Average value of total: {{ totalAvg }}</h2>
    <h2 v-if="hemiResult.length > 0 ">Average value of hemi: {{ hemiAvg }}</h2>
  </div>
</template>

<script>
import { run } from '@/simulation'

export default {
  name: 'Calculator',
  data () {
    return {
      years: 5,
      std: 2,
      success: 10,
      failure: 0,
      dislocation: 5,
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
        this.std,
        {
          success: this.success,
          failure: this.failure,
          dislocation: this.dislocation
        }
      )
      this.totalResult = [ ...this.totalResult, result.total ]
      this.hemiResult = [ ...this.hemiResult, result.hemi ]
    },
    all: function () {
      [...Array(this.trials)].forEach(() => this.single())
      console.log(this.trials)
    },
    average: function (arr) {
      return arr.reduce((p, c) => p + c, 0) / arr.length
    }
  }
}
</script>

<style scoped>
  #calculator {
    display: flex;
    flex-direction: column;
  }
</style>
