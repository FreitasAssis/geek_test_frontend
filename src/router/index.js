import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Job from '../views/Job.vue'
import Candidate from '../views/Candidate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Job',
    component: Job
  },
  {
    path: '/candidates/:filter/:id',
    name: 'Candidate',
    component: Candidate
  },
]

const router = new VueRouter({
  routes
})

export default router
