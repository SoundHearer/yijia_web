<template>
  <header>
    <div class="menu">
      <img @click="goHome" src="../../assets/logo.png" alt="">
      <ul>
        <template v-for="(item,index) in menus">
          <router-link tag="li" :to="item.path" :key="index" :class="$route.path.includes(item.path)?'active':''">
            <span>{{item.name}}</span>
          </router-link>
        </template>
        <li>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{$t('public.pub007')}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <template v-for="item in languages">
                <el-dropdown-item :command="item.command" :key="item.command">{{item.name}}
                  <i v-if="lang===item.command" class="el-icon-check"></i></el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: "x-header",
    data(){
      return{
        //首頁
        menus:[
          {name:this.$t('public.pub001'),path:'/home'},
          {name:this.$t('public.pub002'),path:'/about'},
          {name:this.$t('public.pub003'),path:'/house'},
          {name:this.$t('public.pub004'),path:'/business'},
          {name:this.$t('public.pub005'),path:'/culture'},
          {name:this.$t('public.pub006'),path:'/contact'}
        ],
        languages:[
          {name:this.$t('public.pub035'),command:'zh-CN'},
          {name:this.$t('public.pub036'),command:'zh-TW'},
          {name:this.$t('public.pub037'),command:'en-US'},
        ],
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
      }
    },
    created(){
     // console.log(this.$route.path)
    },
    methods:{
      goHome(){
        this.$router.push({path:'/home'})
      },
      handleCommand(e){
        localStorage.setItem('lang',e)
        location.reload()
      }
    }
  }
</script>
<style>
  .menu .el-dropdown{
    color: #fff;
  }
</style>
<style scoped lang="scss">
  header{
    width: 100%;height: 40px;background-color:#34302D;top: 0;
    line-height: 40px;position: fixed;left: 0;z-index:1000;border-bottom: 4px solid #34302D;
    .menu{
      width: 1200px;margin: auto;display: flex;justify-content: space-between;
      img{
        height:28px;margin-top: 6px;
      }
      ul{
        display: flex;justify-content: space-between;color: #fff;font-size:14px;
        li{
          margin: 0 20px;cursor: pointer;height: 38px;
          &:hover{
            color: #e6a635;position: relative;border-bottom: 2px solid #e6a635;
           /* &:before{
              position: absolute;content: '';bottom:0;margin: auto;
              height: 2px;width:24px;z-index: 10;background-color:#e6a635;
            }*/
          }
          &:last-child{
            color: #fff;
            &:hover{
              color: #fff;border-bottom: none;
            }
          }
        }
        .active{
          color: #e6a635;position: relative;border-bottom: 2px solid #e6a635;
          /*&:before{
            position: absolute;content: '';bottom:0;
            height: 2px;width:24px;z-index: 10;background-color:#e6a635;
          }*/
        }
      }
    }
  }
</style>
