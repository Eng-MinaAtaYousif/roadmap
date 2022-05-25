import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import about from "../views/about.vue";
import frontend from "../views/frontend.vue";
import backend from "../views/backend.vue";
import laravel from "../views/laravel.vue";
const routes = [
  {
     path: '/',
     name: 'home',
     component: home 
  },
  {
    path: '/about',
    name: 'about',
    component: about 
 }
 ,
  {
    path: '/frontend',
    name: 'frontend',
    component: frontend 
 }
 ,
 {
   path: '/backend',
   name: 'backend',
   component: backend 
}
,
{
  path: '/laravel',
  name: 'laravel',
  component: laravel 
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
