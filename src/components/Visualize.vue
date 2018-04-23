<template>
  <div id="visualize">
    <div class="y">
      <div> {{ max.toFixed(2) }} </div>
      <div> {{ half.toFixed(2) }} </div>
      <div> {{ min.toFixed(2) }} </div>
    </div>
    <div class="main">
      <Points/>
      <div class="x">
        <div v-if="averageTotal !== null"><strong>total</strong>: {{ averageTotal.toFixed(2) }} average</div>
        <div v-if="averageTotal !== null"><strong>hemi</strong>: {{ averageHemi.toFixed(2) }} average</div>
      </div>
    </div>
  </div>
</template>

<script>
import Points from './Points.vue'
import { min, max } from '@/utils/array'

export default {
  name: 'Visualize',
  components: {
    Points,
  },
  computed: {
    total () {
      return this.$store.state.results.total
    },
    hemi () {
      return this.$store.state.results.hemi
    },
    min () {
      return Math.min(min(this.total), min(this.hemi))
    },
    max () {
      return Math.max(max(this.total), max(this.hemi))
    },
    half () {
      return (this.max + this.min) / 2
    },
    averageTotal () {
      return this.$store.getters.averageTotal
    },
    averageHemi () {
      return this.$store.getters.averageHemi
    },
  },
}
</script>

<style scoped>
  #visualize {
    display: flex;
    width: 100%;
  }
  .main {
    flex-grow: 1;
  }
  .y {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2rem;
    margin-right: 0.5rem;
    font-size: 0.7rem;
  }
  .x {
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
