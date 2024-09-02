<template>
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
      </header>
      <nav>
        <ul>
          <li v-for="link in navLinks" :key="link.text">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </nav>
      <aside class="sidebar">
        <h2>Sidebar</h2>
        <p>{{ sidebarContent }}</p>
      </aside>
      <main class="main-content">
        <h2>Main Content</h2>
        <p>{{ mainContent }}</p>
      </main>
      <footer>
        <p>© 2024 Jason Xu. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Home Page',
        navLinks: [
          { text: 'Home Page', href: 'assignment02.html' },
          { text: 'Images Page', href: 'images-page.html' },
          { text: 'Accordion Page', href: 'accordion-page.html' },
          { text: 'Grid Page', href: 'grid-page.html' }
        ],
        sidebarContent: 'Sidebar content goes here.',
        mainContent: 'Main content goes here.'
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