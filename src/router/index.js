import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: () => import('../views/Room.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
