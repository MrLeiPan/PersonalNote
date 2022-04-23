import { createStore } from 'vuex'

export default createStore({
  state: {
    chatContext:[],
    article:null
  },
  mutations: {
    sendContext(state,msg){
      state.chatContext.push(msg)
    //  console.log(state.chatContext);
    }
  },
  actions: {

  },
  modules: {

  },
  getters:{
    getChatContext(state){
      return state.chatContext
    }
  }
})
