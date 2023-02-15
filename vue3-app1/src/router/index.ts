import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Detail from '@/views/detailUser.vue'
import AddUser from '@/views/addUser.vue'
import Tags from '@/views/tag.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'Detail',
    component: Detail,
    props: true  // ovo je bitno zato sto onda parametar koji dodajemo u tmplejtu moze da se uhvati preko propsa, tj taj parametar postaje props
  },
  {
    name: 'AddUser',
    path: '/adduser',
    component: AddUser
  },
  {
    name: 'Tags',
    path: '/tags/:lang',
    component: Tags,
    props: true
  }
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
