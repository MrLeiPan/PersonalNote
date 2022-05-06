<template>
  <div id="chatMain"

  >
    <div class="mainContext" >
      <div class="ToName">
        <span class="friendName">小黄</span>
        <div class="more" @click="closeFriendBox">x</div>
      </div>
      <div class="ToContext" >
        <el-scrollbar height="300px" ref="scrollbarRef" @scroll="scrollbar">
        <!--聊天内容-->
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
      <textarea  id="userContext" v-model="chatmsg" @keydown.enter.prevent="sendMsg" @keydown="inputChange"></textarea>
    </div>
  </div>
</template>

<script>
import ContextItem from "@/components/FriendSys/ChatUnit/components/ContextItem";
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
      chatmsg:"",
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
        this.chatmsg=''
        //$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 。
        this.$nextTick(()=>{
          this.$refs.scrollbarRef.wrap$.scrollTop = this.$refs.scrollbarRef.wrap$.scrollHeight
        })
        console.log("send scrollTop:"+this.$refs.scrollbarRef.wrap$.scrollTop)
        console.log("send scrollHeight:"+this.$refs.scrollbarRef.wrap$.scrollHeight)

      }
    },
    scrollbar(scrollEvent){
      console.log(this.$refs.scrollbarRef.wrap$.scrollHeight);
      scrollEvent.scrollTop=this.$refs.scrollbarRef;
    },
    inputChange(){
      console.log("change  scrollTop:"+this.$refs.scrollbarRef.wrap$.scrollTop)
      console.log( "change scrollHeight:"+this.$refs.scrollbarRef.wrap$.scrollHeight)
    },

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
