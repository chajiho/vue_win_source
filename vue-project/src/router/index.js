import { createRouter, createWebHistory } from 'vue-router'
import ZeroPage from '@/views/ZeroPage.vue'
import FirstPage from '@/views/FirstPage.vue'
import SecondPage from '@/views/SecondPage.vue'
import InfoTechHome from '@/views/InfoTechStudy/InfoTechHome.vue'
import InfoTechTestPage from '@/views/InfoTechStudy/InfoTechTestPage.vue'
import RegistInfoTechTest from '@/views/InfoTechStudy/Manage/RegistInfoTechTest.vue'
// import TestPage from '@/views/old/TestPage.vue'
import HomeView from '@/views/old/HomeView.vue'
import TestPage from '@/views/old/TestPage.vue'
// import SamplePage from '@/views/SamplePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/국가자격증시험',
      name: 'firstPage',
      component: FirstPage
    },
    {
      path: '/',
      name: 'ZeroPage',
      component: ZeroPage
    },
    {
      path: '/정보처리기사문제',
      name: 'InfoTechHome',
      component: InfoTechHome
    },
    {
      path: '/정보처리/page',
      name: 'InfoTechTestPage',
      component: InfoTechTestPage
    },
    {
      path: '/정보처리문제등록/manage',
      name: 'RegistInfoTechTest',
      component: RegistInfoTechTest
    },
    // {
    //   path: '/',
    //   name: 'testPage',
    //   component: TestPage
    // },
    {
      path: '/second',
      name: 'secondPage',
      component: SecondPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/old/AboutView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage
    }
    // {
    //   path: '/sample',
    //   name: 'SamplePage',
    //   component: SamplePage
    // }
  ]
})

export default router
