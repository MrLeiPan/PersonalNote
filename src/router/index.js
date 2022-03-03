import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main/Main'
const routes = [
  {
    path:'/',
    name:'Main',
    component:Main
  },{
    path:'/register',
    name:'Register',
    component: () => import('../views/Register/Register')
  },
  {
    path:'/forget',
    name:'Forget',
    component: () => import('../views/Forget/Forget'),
    children:[
      {
        path:'',
        redirect:'/forget/phone'
      },
      {
        path:'/forget/phone',
        name:'ForgetDoPhone',
        component: () => import('../components/Forget/ForgetDoPhone')
      },
      {
        path:'/forget/email',
        name:'ForgetDoEmail',
        component: () => import('../components/Forget/ForgetDoEmail')
      },
      {
        path:'/forget/phone/modify',
        name:'ModifyPWD',
        component: () => import('../components/Forget/ModifyPWD')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
