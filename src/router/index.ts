import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'
import SkillsAndProjectsView from '@/views/SkillsAndProjectsView.vue'
import HireMeView from '@/views/HireMeView.vue'
import SpecialView from '@/views/SpecialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/skills-projects',
      name: 'skills-projects',
      component: SkillsAndProjectsView,
    },
    {
      path: '/hire-me',
      name: 'hire-me',
      component: HireMeView,
    },
    {
      path: '/special',
      name: 'special',
      component: SpecialView,
    },
  ],
});

export default router;
