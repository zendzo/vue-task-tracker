import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home'
import About from '../views/About'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    props: {showForm: false}
  },
]

let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router