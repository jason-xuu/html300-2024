module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // You can add global SCSS variables or mixins here
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
};
