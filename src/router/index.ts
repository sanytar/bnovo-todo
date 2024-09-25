import { createRouter, createWebHistory } from 'vue-router';
import TodoItem from '@/components/TodoItem.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoItem
    },

  ]
});

export default router;
