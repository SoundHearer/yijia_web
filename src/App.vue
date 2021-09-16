<template>
  <div id="app">
    <XMenu></XMenu>
    <div class="page-main">
      <router-view/>
      <XFooter></XFooter>
    </div>
  </div>
</template>

<script>
  import XMenu from "./views/components/menu";
  import XFooter from "./views/components/XFooter";
  export default {
    name: 'App',
    components:{XMenu,XFooter},
    data(){
      return{

      }
    }
  }
</script>
<style>
  .el-carousel__indicators{
    display: none;
  }
</style>
<style lang="scss" scoped>
  #app {
    font-family: SourceHanSansCN-Regular;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .page-main{
      width: 100%;height: calc(100% - 40px);margin-top: 40px;
    }
  }
</style>
