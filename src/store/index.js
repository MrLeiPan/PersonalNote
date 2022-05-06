import { createStore } from 'vuex'
import api from "@/api/api";
export default createStore({
  state: {
    chatContext:[],//聊天内容
    friends:[
      {pid:1,"name":"小张"},
      {pid:2,"name":"小王"}
    ],//好友列表
    friendsChat:[
      {pid:1,"name":"小张","lastContent":"你好呀！"},
      {pid:2,"name":"小王","lastContent":"hellow！"}
    ],
    article:{
      title:"",
      createDate:"",
      visitCount:0
    }
  },
  mutations: {//修改数据
    //发送聊天内容
    sendContext(state,msg){
      state.chatContext.push(msg)
    //  console.log(state.chatContext);
    },
    renderArticle(state,data){
      state.article = data
      console.log(state.article);
    },
    // 用户信息
    USERINFO(state,userInfo){
      state.userInfo = userInfo || {}
    },
    setToken(state,t){
      state.token = t
    }
  },
  actions: {
    //获取用户信息
    async getUserInfo (user){
      let result = await api.login(user)
      console.log(result);
    }
  },
  modules: {

  },
  getters:{//获取数据
    //获取聊天内容
    getChatContext(state){
      return state.chatContext
    },
    //获取文章数据
    getArticle(state){
      return state.article
    },
    // 获取好友列表
    getMyFriends(state){
      return state.friends;
    },
    // 获取好友聊天列表
    getFriendsChat(state){
      return state.friendsChat;
    }
  }

})
