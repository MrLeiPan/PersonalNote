<template>
  <div id="chatMain">
    <div class="mainContext">
      <div class="ToName">
        <span class="friendName">小黄</span>
        <div class="more" @click="closeFriendBox">x</div>
      </div>
      <div class="ToContext">
        <el-scrollbar height="300px" ref="scrollbarRef" @scroll="scrollbar">
          <context-item :status="0">
            <template v-slot:img>
              <img class="userPT" src="../../../assets/img/userPhoto/120.jpeg" alt="">
            </template>
            <template v-slot:info>
              你好！这里是个人笔记系统，记录你最厉害的个人笔记与好友分享讨论哦！
            </template>
          </context-item>
          <context-item :status="1">
            <template v-slot:img>
              <img class="userPT" src="../../../assets/img/userPhoto/b3.jpeg" alt="">
            </template>
            <template v-slot:info>
              Hello!Here is a personal note system, record your most powerful personal notes and friends to share discussions oh!
            </template>
          </context-item>
          <context-item :status="0">
            <template v-slot:img>
              <img class="userPT" src="../../../assets/img/userPhoto/120.jpeg" alt="">
            </template>
            <template v-slot:info>
              你好！这里是个人笔记系统，记录你最厉害的个人笔记与好友分享讨论哦！
            </template>
          </context-item>
          <context-item :status="1">
            <template v-slot:img>
              <img class="userPT" src="../../../assets/img/userPhoto/b3.jpeg" alt="">
            </template>
            <template v-slot:info>
              Hello!Here is a personal note system, record your most powerful personal notes and friends to share discussions oh!
            </template>
          </context-item>

          <context-item :status="1" v-for="chatItem in getChatContext">
            <template v-slot:img>
              <img class="userPT" src="../../../assets/img/userPhoto/b3.jpeg" alt="">
            </template>
            <template v-slot:info>
              {{chatItem}}
            </template>
          </context-item>

        </el-scrollbar>
      </div>
    </div>
    <div class="mainInput">
      <div class="inputTools">

      </div>
      <textarea  id="userContext" v-model="chatmsg" @keydown.enter.prevent="sendMsg"></textarea>
    </div>
  </div>
</template>

<script>
import ContextItem from "@/components/FriendSys/ChatUnit/ContextItem";
import {ElScrollbar} from "element-plus"
import {mapMutations,mapGetters} from "vuex"

export default {
  name: "ChatMain",
  components: {ContextItem,ElScrollbar},
  props:{
    CIsCloseFriendBox:{
      type:Boolean
    }
  },
  data(){
    return{
      isClose:false,
      chatmsg:""
    }
  },
  methods:{
    ...mapMutations(['sendContext']),
    closeFriendBox(){
      this.$emit('friendHandle',false)
    },
    sendMsg(){
      if(this.chatmsg!=''){
        this.sendContext(this.chatmsg)
        this.chatmsg='';
      }
    },
    scrollbar(scrollEvent){
      console.log(this.$refs.scrollbarRef);
      scrollEvent.scrollTop=this.$refs.scrollbarRef.wrap$.scrollTop;
    }
  },
  computed:{
    ...mapGetters(['getChatContext']),
  },
  mounted() {
    this.$refs.scrollbarRef=100
    console.log(this.$refs.scrollbarRef);
  }
}
</script>

<style lang="less">
  #chatMain{
    border-top-right-radius: 15px;
    background-color: #d9d9d9;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-bottom-right-radius: 15px;
    .mainContext{
      border-bottom: #dedede 1px solid;
      height: 70%;
      background-color: #f3f3f3;
      border-top-right-radius: 15px;
      .ToName{
        position: relative;
        background-color: #eeeeee;
        border-top-right-radius: 15px;
        font-size: 16px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-bottom: #dedede 1px solid;
        display: flex;
        .friendName{
          flex: 1;
        }
        .more{
          width: 50px;
          cursor: pointer;
          border-top-right-radius: 15px;
          user-select: none;
          &:hover{
            opacity: 0.4;
          }
        }
        .moreItems{
          position: absolute;
          right: 0;
          top:30px;
          background-color: #eaeaea;
          font-size: 14px;
          padding: 5px;
          cursor: pointer;
          &:hover{
            opacity: 0.7;
          }
        }
      }
      .ToContext{


      }
    }
    .mainInput{
      background-color: white;
      height: 30%;
      border-bottom-right-radius: 15px;
      text-align: center;
      .inputTools{
        width: 100%;
        height: 30px;
        background-color: #eeeeee;
      }
      #userContext{
        height: 90px;
  ///      margin-top: 20px;
        width: 550px;
        border: none;
        resize: none;
        outline: none;
        padding: 10px;
        //background-color: red;
      }
    }
  }
</style>