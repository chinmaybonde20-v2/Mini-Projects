
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MyTask from '../views/MyTask.vue';
import AppLogin from '../views/AppLogin.vue';
import CompletedTask from '../views/CompletedTask.vue';
import store from '@/store';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  { path: "", redirect: "/tasks" },
  {
    path: '/tasks',
    name: 'MyTask',
    component: MyTask
  },
  {
    path: '/completed-tasks',
    name: 'completed-tasks',
    component: CompletedTask
  },
  {
    path: '/login',
    name: 'login',
    component: AppLogin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.getters.userAuthCheck) {
      next();
    } else {
      alert('Please log in');
      next('/login');
    }
  } else {
    next();
  }
});

export default router;

