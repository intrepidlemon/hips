<template>
  <sui-form id="parameters">
    <h3 is="sui-header">Patient functional status</h3>
    <p>Please select the functional status of your patient</p>
    <div class="section">
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
    </div>
  </sui-form>
</template>

<script>
export default {
  name: 'Parameters',
  computed: {
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
  },
}
</script>

<style scoped>
  .menu .item {
    cursor: pointer;
  }

</style>
