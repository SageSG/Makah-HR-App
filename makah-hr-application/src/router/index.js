import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Home',
    props: true,
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Leaves',
    name:'lp',
    props:true,
    component: () => import('@/views/Leaves.vue')
  },
  {
    path: '/Leaves/Form',
    name:'leaveform',
    props:true,
    component: () => import('@/views/LeavesForm.vue')
  },
  {
    path: '/Onboarding',
    component: () => import('@/views/Onboarding.vue')
  },
  {
    path: '/Onboarding/Policy',
    props:true,
    name:'Op',
    component: () => import('@/views/Policy.vue')
  },
  {
    path: '/Onboarding/Quiz',
    props:true,
    name:'Qz',
    component: () => import('@/views/HRquiz.vue')
  },
  {
    path: '/Onboarding/Safety',
    props:true,
    name:'St',
    component: () => import('@/views/Safety.vue')
  },
  {
    path: '/Onboarding/MakahEmaIl',
    component: () => import('@/views/MakahEmail.vue')
  },
  {
    path: '/Onboarding/PersonalParticulars',
    component: () => import('@/views/PersonalParticulars.vue')
  },
  {
    path: '/Payslips',
    component: () => import('@/views/Payslips.vue')
  },
  {
    path: '/Payslips/Document',
    props: true,
    name: 'ps',
    component: () => import('@/views/PayDocument.vue')
  },
  {
    path: '/Profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/LeavesForm',
    component: () => import('@/views/LeavesForm.vue')
  },
  {
    // To remove
    path: '/google',
    component: () => import('@/views/Google.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
