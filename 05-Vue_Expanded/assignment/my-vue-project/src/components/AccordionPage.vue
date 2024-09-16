<template>
  <div class="container-fluid vh-100 d-flex flex-column">
    <header class="bg-light text-center py-3">
      <h1>{{ title }}</h1>
    </header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item" v-for="link in navLinks" :key="link.text">
            <router-link class="nav-link" :to="link.href">{{ link.text }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main class="flex-grow-1 p-3">
      <div v-for="(content, title) in accordionContent" :key="title">
        <button class="accordion" @click="toggleAccordion(title)">{{ title }}</button>
        <div class="panel" :style="{ maxHeight: activeAccordion === title ? panelMaxHeight : null }">
          <p>{{ content }}</p>
        </div>
      </div>
    </main>
    <footer class="bg-light text-center py-3 mt-auto">
      <p>© 2024 Jason Xu. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Accordion Page',
      navLinks: [
        { text: 'Home Page', href: '/' },
        { text: 'Images Page', href: '/images' },
        { text: 'Accordion Page', href: '/accordion' },
        { text: 'Grid Page', href: '/grid' }
      ],
      accordionContent: {
        'Section 1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
        'Section 2': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
        'Section 3': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.'
      },
      activeAccordion: null,
      panelMaxHeight: '100px' // Adjust this value as needed
    };
  },
  methods: {
    toggleAccordion(title) {
      this.activeAccordion = this.activeAccordion === title ? null : title;
    }
  }
}
</script>

<style scoped>
/* Accordion styles */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.accordion:after {
  content: "➕"; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "➖"; /* Unicode character for "minus" sign (-) */
}
</style>
