import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';
import AboutComponent from '../views/about/About.vue';
import DetailComponent from '../views/detail/Detail.vue';
import FormComponent from '../views/form/Form.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  }, {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }, {
    path: '/detail',
    name: 'Detail',
    component: DetailComponent
  },
    {
      path: '/form',
      name: 'Form',
      component: FormComponent
    }
  ];
  
  const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;