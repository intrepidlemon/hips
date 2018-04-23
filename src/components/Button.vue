<template>
<button @click="onClick" class="Button">
  <slot>Button</slot>
</button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style scoped>

  button {
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: 0.2rem;
    border: none;
    background: cornflowerblue;
    color: white;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease;
  }

  button:hover {
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.2);
    transform: translate(0, -0.1rem);
  }

  button:active {
    transform: translate(0, 0);
    box-shadow: none;
  }
</style>
