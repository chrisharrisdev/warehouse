import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import("../views/Index.vue"),
  },
  {
    path: '/warehouse',
    name: 'warehouse',
    component: () => import("../views/Warehouse.vue"),
  },
  {
    path: '/zhengjian',
    name: 'zhengjian',
    component: () => import("../views/Zhengjian.vue"),
  },
  {
    path: '/peisong',
    name: 'peisong',
    component: () => import("../views/Peisong.vue"),
  },    
  {
    path: '/fahuo',
    name: 'fahuo',
    component: () => import("../views/Fahuo.vue"),
  },   
  {
    path: '/shouhuo',
    name: 'shouhuo',
    component: () => import("../views/Shouhuo.vue"),
  },  
  {
    path: '/chailing',
    name: 'chailing',
    component: () => import("../views/Chailing.vue"),
  }, 
  {
    path: '/lengcang',
    name: 'lengcang',
    component: () => import("../views/Lengcang.vue"),
  },    
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
