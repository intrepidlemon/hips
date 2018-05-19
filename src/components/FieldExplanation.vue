<template>
  <div id="explanation">
    <sui-dimmer v-if="!loaded" active>
      <sui-loader />
    </sui-dimmer>
    <div class="explanation__content" v-if="loaded">
      <h2>{{ title }}</h2>
      <vue-markdown class="explanation__inner-content">{{ explanation }}</vue-markdown>
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
  #explanation {
    max-height: 90vh;
    overflow: auto;
  }
  #explanation .explanation__content .explanation__inner-content {
    font-weight: initial !important;
  }
  #explanation .explanation__content .explanation__inner-content {
    line-height: 2.5 !important;
  }
</style>
