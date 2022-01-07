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
import ResumeView from '@/views/index/personal/resume/ResumeView'
import ResumeEdit from '@/views/index/personal/resume/ResumeEdit'
import ApplicationRecord from '@/views/index/personal/application/ApplicationRecord'


import ManageIndex from '@/views/manage/ManageIndex'

import DynamicIndex from '@/views/manage/enterprise/DynamicIndex'
import ConductIndex from '@/views/manage/enterprise/ConductIndex'

import ChatIndex from '@/views/manage/message/ChatIndex'
import ProcessIndex from '@/views/manage/message/ProcessIndex'

import PersonalIndex from '@/views/manage/personal/PersonalIndex'

import PositionRelease from '@/views/manage/position/PositionRelease'
import PositionQuery from '@/views/manage/position/PositionQuery'

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
      },
      {
        path: '/index/personal/resume/view',
        component: ResumeView
      },
      {
        path: '/index/personal/resume/edit',
        component: ResumeEdit
      },
      {
        path: '/index/personal/application/view',
        component: ApplicationRecord
      }
    ]
  },
  {
    path: '/manage',
    component: ManageIndex,
    children: [
      {
        path: '/manage/enterprise/dynamic',
        component: DynamicIndex
      },
      {
        path: '/manage/enterprise/conduct',
        component: ConductIndex
      },
      {
        path: '/manage/message/process',
        component: ProcessIndex
      },
      {
        path: '/manage/message/chat',
        component: ChatIndex
      },
      {
        path: '/manage/personal',
        component: PersonalIndex
      },
      {
        path: '/manage/position/release',
        component: PositionRelease
      },
      {
        path: '/manage/position/query',
        component: PositionQuery
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
