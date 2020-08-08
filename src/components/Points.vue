<template>
  <svg width="100" height="100" viewBox="-2 0 102 101">
    <circle
      v-for="(point, index) in points.total"
      v-bind:key="`${point}-${index}-total`"
      r="1"
      v-bind:cx="2+45*jitter[index]"
      v-bind:cy="98 - (point * 95)"
    />
    <circle
      v-for="(point, index) in points.hemi"
      v-bind:key="`${point}-${index}-hemi`"
      r="1"
      v-bind:cx="53 + 45*jitter[index]"
      v-bind:cy="98 - (point * 95)"
    />
  </svg>
</template>

<script>
import { min, max } from '@/utils/array'

const points = (total, hemi) => {
  const minPoint = Math.min(min(total), min(hemi))
  const maxPoint = Math.max(max(total), max(hemi))
  const spread = maxPoint - minPoint
  const normalize = n => (n - minPoint) / spread
  return {
    min: minPoint,
    max: maxPoint,
    half: (minPoint + maxPoint) / 2,
    total: total.map(normalize),
    hemi: hemi.map(normalize),
  }
}

export default {
  name: 'Points',
  computed: {
    total () {
      return this.$store.state.results.total
    },
    hemi () {
      return this.$store.state.results.hemi
    },
    points () {
      return points(this.total, this.hemi)
    },
    jitter () {
      return [...Array(this.$store.state.parameters.trials)].map(() => Math.random())
    },
  },
}
</script>

<style scoped>
  svg {
    width: 100%;
    height: auto;
    border-left: 1px dashed rgba(0, 0, 0, 0.3);
    border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
  }
  line {
    stroke-width: 1px;
    stroke: rgba(0, 0, 0, 0.3);
    stroke-dasharray: 5,5,5;
  }
  text {
    font-size: 0.1rem;
  }
  circle {
    fill: rgba(199, 56, 58, 0.2);
  }
</style>
