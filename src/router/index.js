import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main/Main'
import PersonalNote from "@/components/Note/SideList/PersonalNote";
import store from "@/store";
const routes = [
  {
    path:'/',
    name:'Main',
    component:Main
  },
  {
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
    /*一级路由，左侧菜单*/
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
        /*二级路由，跳转到浏览文章*/
        children:[
          {
            path:'/note/personalNote/article',
            name:'NoteAr',
            components:{
              childrenItem:() => import('../components/Note/SideList/PersonalNote'),
              article:() => import('../components/Note/Article')
            }
          }
        ]
      },
      {
        path:'/note/myBooks',
        name:'MyBooks',
        components: {
          childrenItem:() => import('../components/Note/SideList/MyBooks'),
          article:() => import('../components/Note/Article')
        },
        children:[
          {
            path:'/note/myBooks/article',
            name:'BooksAr',
            components:{
              article:() => import('../components/Note/Article')
            }
          }
        ]
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
      },
    ]
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
 //saveScrollPosition: true,
  //suppressTransitionError: true,
})

/*
*  to : 即将到来的路由
*  from :即将离开的路由
*  next : 下一个路由
*
* */

router.beforeEach((to, from, next) => {

  console.log("to+")
  /*设置需要放行的路径*/
  if (to.fullPath==='/' || to.fullPath.startsWith("/forget/") || to.fullPath==='/register'){
    next()
  }else{//对于其它路径，需要判断是否有token
    let token = localStorage.getItem("token")
    if (token===null){
      console.log("没有登陆");
      next("/")
    }else {
      next();
    }
  }

  console.log(to);


})

export default router
