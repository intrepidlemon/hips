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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
