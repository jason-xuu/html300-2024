<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  author: String,
  title: String,
  category: String,
  excerpt: String,
  likes: Number
})

const likes = ref(props.likes)

const incrementLikes = () => {
  likes.value++
}
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>Category: {{ category }}</h3>
    <p>{{ excerpt }}</p>
    <p>Likes: {{ likes }}</p>
    <button @click="incrementLikes">Like</button>
  </div>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
