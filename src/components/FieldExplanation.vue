<template>
  <div class="explanation">
    <sui-dimmer v-if="!loaded" active>
      <sui-loader />
    </sui-dimmer>
    <div v-if="loaded">
      <h2>{{ title }}</h2>
      <vue-markdown>{{ explanation }}</vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'FieldExplanation',

  props: ['entry'],

  data: function () {
    return {
      loaded: false,
      title: '',
      explanation: '',
    }
  },

  components: {
    VueMarkdown,
  },

  methods: {
    load: function () {
      this.$contentful
        .getEntry(this.entry)
        .then(({ fields }) => {
          const { title, explanation } = fields
          this.title = title
          this.explanation = explanation
          this.loaded = true
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },

  mounted: function () {
    this.load()
  },
}
</script>

<style scoped>
.explanation {
  max-height: 90vh;
  overflow: auto;
}
</style>
