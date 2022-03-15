import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main/Main'
import PersonalNote from "@/components/Note/SideList/PersonalNote";
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
        component:import('../components/Forget/ForgetDoPhone')
      },
      {
        path:'/forget/email',
        name:'ForgetDoEmail',
        component: () => import('../components/Forget/ForgetDoEmail'),
      },
      {
        path:'/forget/phone/modify',
        name:'ModifyPWD',
        component: () => import('../components/Forget/ModifyPWD')
      }
    ]
  },
  {
    path:'/note',
    name:'Note',
    component: () => import('../views/Note/NoteMain'),
    children: [
      {
        path:'',
        redirect:PersonalNote
      },
      {
        path:'/note/personalNote',
        name:'PersonalNote',
        components: {
          childrenItem:() => import('../components/Note/SideList/PersonalNote'),
          article:() => import('../components/Note/Article')
        },
        children:[
          {
            path:'/note/personalNote/article',
            name:'Article',
            component:() => import('../components/Note/Article')
          }
        ]
      },
      {
        path:'/note/myBooks',
        name:'MyBooks',
        components: {
          childrenItem:() => import('../components/Note/SideList/MyBooks')
        }
      },
      {
        path:'/note/mistake',
        name:'MistakeNotes',
        components:{
          childrenItem:() => import('../components/Note/SideList/MistakeNotes')
        }
      },
      {
        path:'/note/circle',
        name:'Circle',
        components: {
          childrenItem:() => import('../components/Note/SideList/Circle')
        }
      },
      {
        path:'/note/user',
        name:'UserInfo',
        components:{
          childrenItem:() => import('../components/UserInfo/UserInfoNav'),
          article: () => import('../components/UserInfo/UserInfo')
        },
        children:[
          {
            path:'',
            redirect:'/note/user/person'
          },
          {
            path:'/note/user/person',
            name:'UserPerson',
            component:() => import('../components/UserInfo/UserPerson')
          },
          {
            path:'/note/user/edu',
            name:'UserEdu',
            component:() => import('../components/UserInfo/UserEdu')
          },
          {
            path:'/note/user/sec',
            name:'UserSec',
            component:() => import('../components/UserInfo/UserSec')
          }
        ]
      }
    ]
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
