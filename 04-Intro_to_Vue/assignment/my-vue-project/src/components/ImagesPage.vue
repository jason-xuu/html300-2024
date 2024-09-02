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
        <div class="row">
          <div class="col-md-4" v-for="image in images" :key="image.src">
            <img :src="image.src" class="img-fluid" :alt="image.alt">
          </div>
        </div>
      </main>
      <!-- Footer section -->
      <footer class="bg-light text-center py-3 mt-auto">
        <p>© 2024 Jason Xu. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Image Page',
        navLinks: [
          { text: 'Home Page', href: 'assignment02.html' },
          { text: 'Images Page', href: 'images-page.html' },
          { text: 'Accordion Page', href: 'accordion-page.html' },
          { text: 'Grid Page', href: 'grid-page.html' }
        ],
        images: [
          { src: 'image1.png', alt: 'Responsive image 1' },
          { src: 'image2.png', alt: 'Responsive image 2' },
          { src: 'image3.jpg', alt: 'Responsive image 3' }
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
  
  .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr 3fr;
    height: 100vh;
    grid-template-areas: 
      "header header" 
      "nav nav" 
      "sidebar main" 
      "footer footer";
  }
  
  header {
    grid-area: header;
    background-color: #f4f4f4;
    padding: 1rem;
    text-align: center;
  }
  
  nav {
    grid-area: nav;
    background-color: #131111;
    padding: 0.5rem;
    text-align: center;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  nav ul li {
    margin: 0 1rem;
  }
  
  .sidebar {
    grid-area: sidebar;
    background-color: #eee;
    padding: 1rem;
  }
  
  .main-content {
    grid-area: main;
    background-color: #fff;
    padding: 1rem;
  }
  
  footer {
    grid-area: footer;
    background-color: #f4f4f4;
    padding: 1rem;
    text-align: center;
  }
  </style>