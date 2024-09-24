<template>
    <header>
      <!-- Named slot for header content with default content -->
      <slot name="header">
        <h1>Default Header</h1>
      </slot>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  };
  </script>
  
  <style scoped>
  /* Basic styling for header */
  header {
    padding: 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
  }
  </style>
  