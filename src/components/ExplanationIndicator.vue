<template>
  <span>
    <sui-icon
      v-on:click="show"
      class="indicator"
      size="small"
      name="question circle"
    />
    <sui-modal
      v-model="open"
      closeIcon
      :animationDuration="250"
      animation="vertical flip"
      >
      <sui-modal-content>
        <FieldExplanation v-if="open" :entry="entry"/>
      </sui-modal-content>
    </sui-modal>
  </span>
</template>

<script>
import FieldExplanation from './FieldExplanation.vue'

export default {
  name: 'ExplanationIndicator',

  props: ['entry'],

  components: {
    FieldExplanation,
  },

  data: function () {
    return {
      open: false,
    }
  },

  methods: {
    show () {
      this.open = true
    },
  },

}
</script>

<style scoped>
.indicator {
  cursor: pointer;
  opacity: 0.2;
}
.indicator:hover {
  opacity: 1;
}
</style>
