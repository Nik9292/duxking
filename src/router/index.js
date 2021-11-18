import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import Play from "../views/Play";
import Mission from "../views/Mission";
import Policy from "../views/Policy";
import Conditions from "../views/Conditions";
import Cookies from "../views/Cookies";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/our-mission',
    name: 'Our mission',
    component: Mission
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: Policy
  },
  {
    path: '/conditions',
    name: 'Conditions',
    component: Conditions
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: Cookies
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
