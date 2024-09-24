<template>
  <div class="container-fluid vh-100 d-flex flex-column">
    <!-- Header section -->
    <header class="bg-light text-center py-3">
      <h1>{{ title }}</h1>
    </header>
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item" v-for="link in navLinks" :key="link.text">
            <a class="nav-link" :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main content area with responsive images -->
    <main class="flex-grow-1 p-3">
      <div v-if="images.length" class="row">
        <div class="col-md-4" v-for="image in images" :key="image.src">
          <!-- Use the ImageComponent here -->
          <image-component
            :src="image.src"
            :alt="image.alt"
            :title="image.title"
          />
        </div>
      </div>
      <div v-else>
        <p>No images available.</p>
      </div>
    </main>
    <!-- Footer section -->
    <footer class="bg-light text-center py-3 mt-auto">
      <p>© 2024 Jason Xu. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
// Import the ImageComponent
import ImageComponent from '@/components/ImageComponent.vue';

export default {
  components: {
    ImageComponent
  },
  data() {
    return {
      title: 'Image Page',
      navLinks: [
        { text: 'Home Page', href: '/' },
        { text: 'Images Page', href: '/images' },
        { text: 'Accordion Page', href: '/accordion' },
        { text: 'Grid Page', href: '/grid' }
      ],
      images: [
        { src: require('@/assets/image1.png'), alt: 'Responsive image 1', title: 'Image 1' },
        { src: require('@/assets/image2.png'), alt: 'Responsive image 2', title: 'Image 2' },
        { src: require('@/assets/image3.jpg'), alt: 'Responsive image 3', title: 'Image 3' }
      ]
    };
  }
};
</script>

<style scoped>
/* Basic styles for layout */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: center;
}

nav {
  background-color: #f8f9fa;
  padding: 0.5rem;
}

.navbar-nav .nav-link {
  margin: 0 1rem;
}

footer {
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
}

.img-fluid {
  width: 100%;
  height: auto;
}
</style>
