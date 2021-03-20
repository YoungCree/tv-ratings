import Vue from 'vue'
import VueRouter from 'vue-router'
import Ratings from '../views/Ratings.vue'
import TopTen from '../views/TopTen.vue'
import MyFavorites from '../views/MyFavorites.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'ratings',
    component: Ratings
  },
  {
    path: '/top-ten',
    name: 'top-ten',
    component: TopTen
  },
  {
    path: '/my-favorites',
    name: 'my-favorites',
    component: MyFavorites
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
