<template>
  <div
    id="results"
    v-on:click="close"
  >
    <div class="interior">
      <h1>Utility</h1>
      <Visualize/>
    </div>
  </div>
</template>

<script>
import Visualize from './Visualize.vue'

export default {
  name: 'Results',
  components: {
    Visualize,
  },
  methods: {
    close () {
      this.$store.commit('updateResults', false)
    },
  },
}
</script>

<style scoped>
#results {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  box-sizing: border-box;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10vh;
  background: rgba(0, 0, 0, 0.3);
  margin: 0;
}
.interior {
  max-width: 90vw;
  width: 100%;
  background: white;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 0.2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
}
h1 {
  margin: 0;
  text-align: center;
  margin-right: 1.5rem;
}
.averages {
  display: flex;
}
</style>
