import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'  // elementUI
import 'element-plus/dist/index.css'  // elementUI
import zhCn from 'element-plus/es/locale/lang/zh-cn' //国际化 中文
import router from './router' //vue路由
import store from './store' //状态管理
import './assets/css/icon/iconfont.css' //icon




const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus,{locale:zhCn})
app.mount('#app')
