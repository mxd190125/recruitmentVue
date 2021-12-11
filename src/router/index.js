import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/Index'
import Home from '@/views/index/home/Home'
import Dynamic from '@/views/index/dynamic/Dynamic'
import Internship from '@/views/index/internship/Internship'
import Campus from '@/views/index/campus/Campus'
import Social from '@/views/index/social/Social'
import Introduce from '@/views/index/introduce/Introduce'
import PositionDetail from '@/views/position/PositionDetail'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Index,
    children: [
                {
                  path: '/index/home',
                  component: Home
                },
                {
                  path: '/index/dynamic',
                  component: Dynamic
                },
                {
                  path: '/index/internship',
                  component: Internship
                },
                {
                  path: '/index/campus',
                  component: Campus
                },
                {
                  path: '/index/social',
                  component: Social
                },
                {
                  path: '/index/introduce',
                  component: Introduce
                },
                {
                  path: '/position/showPositionDetail',
                  component: PositionDetail
                }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
