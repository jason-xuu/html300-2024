<template>
  <div>
    <!-- Image with a toggle border effect on click -->
    <img
      :src="src"
      :alt="alt"
      :title="title"
      :class="{ 'bordered': showBorder }"
      @click="toggleBorder"
      class="img-fluid"
    />
  </div>
</template>

<script>
// Import the borderMixin
import borderMixin from '@/mixins/borderMixin';

export default {
  mixins: [borderMixin],
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Image'
    }
  }
};
</script>

<style scoped>
/* Basic image styling */
.img-fluid {
  width: 100%;
  height: auto;
  cursor: pointer; /* Change cursor to pointer to indicate clickability */
}

/* Class to apply border around image */
.bordered {
  border: 2px solid black; /* Add border when showBorder is true */
}
</style>
