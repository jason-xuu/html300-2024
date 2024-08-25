<script setup>
import { ref } from "vue";

const text = ref("Hello Coders!!");
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <h1>{{ text }}</h1>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
