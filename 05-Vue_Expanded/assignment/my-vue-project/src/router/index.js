import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AccordionPage from '../components/AccordionPage.vue';
import GridPage from '../components/GridPage.vue';
import ImagesPage from '../components/ImagesPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/accordion', name: 'AccordionPage', component: AccordionPage },
    { path: '/grid', name: 'GridPage', component: GridPage },
    { path: '/images', name: 'ImagesPage', component: ImagesPage }
  ]
});
