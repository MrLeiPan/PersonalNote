<template>
  <div id="note-box">
    <div id="note-header">
      <note-header>
        <template v-slot:logo>
          <header-logo>
            <template v-slot:img></template>
            <template v-slot:title>知享</template>
          </header-logo>
        </template>
        <template v-slot:head-tools>
          <header-tools>
            <template v-slot:tools>

            </template>
          </header-tools>
        </template>
        <template v-slot:userInfo>
          <header-user-info>
            <template v-slot:img>
              <img src="../../assets/img/userPhoto/tx01.jpeg" alt="">
            </template>
          </header-user-info>
        </template>
      </note-header>
    </div>
    <div id="note-container">
      <div id="note-side-container">
        <div id="note-side-category">
          <note-side-category>
            <template v-slot:info>
              <calendar></calendar>
            </template>
            <template v-slot:menu>
              <router-link v-for="(item,index) in categories"  :key="index" :to="{path:item.path}">
                <menu-item>
                  <template v-slot:icon>
                    <i :class="item.cicon"></i>
                  </template>
                  <template v-slot:title>
                    <span>{{item.title}}</span>
                  </template>
                </menu-item>
              </router-link>
            </template>
          </note-side-category>
        </div>
        <div id="note-side-list">

          <!--显示二级目录-->
          <el-scrollbar :always="true">
            <router-view name="childrenItem" v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </el-scrollbar>

        </div>
      </div>


      <div id="note-rw">
        <!--显示文章的-->
        <el-scrollbar :always="true">
          <router-view name="article" v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" :key="$route.name" />
            </keep-alive>
          </router-view>
        </el-scrollbar>


      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/Note/Header/HeaderLogo";
import NoteHeader from "@/components/Note/Header/NoteHeader";
import HeaderUserInfo from "@/components/Note/Header/HeaderUserInfo";
import HeaderTools from "@/components/Note/Header/HeaderTools";
import NoteSideCategory from "@/components/Note/Category/NoteSideCategory";
import MenuItem from "@/components/Note/Category/MenuItem";
import Calendar from "@/components/Note/Category/Calendar";
import NoteEdite from "@/components/Note/NoteEdite/NoteEdite";

import api from "@/api/api";

export default {
  name: "NoteMain",
  data(){
    return{
      categories:null,
    }
  },
  components:{
    Calendar,
    MenuItem,
    NoteSideCategory,
    HeaderTools,
    HeaderLogo,
    NoteHeader,
    HeaderUserInfo,
    NoteEdite
  },
  mounted() {
    /*获取目录列表*/
    api.getCategories({pid:-1}).then(res =>{
      this.categories = res.obj
    })
  }
}
</script>

<style lang="less">
  #note-box{
    width: 100%;
    height: 100%;
    #note-header{
      height: 50px;
      width: 100%;
     // background-color: #01afbe;
      background-color: white;
      display: flex;
      line-height: 50px;
      padding: 0 20px;
    }
    #note-container{
      width: 100%;
      display: flex;
      //一下可以使剩余高度占满页面，利用绝对定位。
      position: absolute;
      top: 50px;
      bottom: 0;
      left: 0;
      border-top: #dedede 1px solid;
      #note-side-container{
        display: flex;
        //min-width: 300px;
        height: 100%;
        #note-side-category{
          width: 200px;
          height: 100%;
          background-color: rgb(245, 245, 245);
         // padding-top: 50px;
          .router-link-active{
            width: 100%;
            background-color: #20a8a8;
            display: inline-block;
            color:white!important;
          }
        }
        #note-side-list{
          width: 280px;
          background-color: #f6f6f6;
          border: #e8e8e8 1px solid;
          flex: none;
        }
      }
      #note-rw{
        height: 100%;
        background-color: white;
        flex: 1;
        padding: 15px;
      }
    }

  }
</style>
