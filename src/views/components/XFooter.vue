<template>
  <footer v-if="$route.path!=='/home'">
    <div class="footer">
      <ul>
        <li>
          <h4>{{$t('public.pub001')}}</h4>
          <p>{{$t('public.pub002')}}</p>
          <p>{{$t('public.pub003')}}</p>
          <p>{{$t('public.pub004')}}</p>
          <p>{{$t('public.pub005')}}</p>
          <p>{{$t('public.pub006')}}</p>
        </li>
        <li>
          <h4>{{$t('public.pub002')}}</h4>
          <p>{{lang.includes('en')?'Company Introduction':$t('about.ab004')}}</p>
          <p>{{lang.includes('en')?'Business Culture':$t('about.ab002')}}</p>
          <p>{{lang.includes('en')?'Team Members':$t('about.ab015')}}</p>
          <p>{{lang.includes('en')?'Business Segments':$t('about.ab028')}}</p>
          <p>{{$t('public.pub017')}}</p>
          <p>{{$t('public.pub018')}}</p>
        </li>
        <li>
          <h4>{{$t('public.pub003')}}</h4>
          <p>{{$t('public.pub008')}}</p>
          <p>{{$t('public.pub009')}}</p>
          <p>{{$t('public.pub010')}}</p>
          <p>{{$t('public.pub011')}}</p>
          <p>{{$t('public.pub019')}}</p>
          <p>{{$t('public.pub020')}}</p>
        </li>
        <li>
          <h4>{{$t('public.pub004')}}</h4>
          <p>{{$t('public.pub028')}}</p>
          <p>{{$t('public.pub021')}}</p>
          <p>{{$t('public.pub022')}}</p>
          <p>{{$t('public.pub023')}}</p>
        </li>
        <li>
          <h4>{{$t('public.pub005')}}</h4>
          <p>{{$t('public.pub024')}}</p>
          <p>{{$t('public.pub025')}}</p>
          <p>{{$t('public.pub026')}}</p>
          <p>{{$t('public.pub027')}}</p>
        </li>
        <li>
          <h4>{{$t('public.pub006')}}</h4>
          <p>{{$t('public.pub029')}}</p>
          <p>{{$t('public.pub006')}}</p>
          <p>{{$t('public.pub030')}}</p>
          <p>{{$t('public.pub031')}}</p>
          <p>{{$t('public.pub032')}}</p>
        </li>
      </ul>
      <div class="qrcode">
        <img src="../../assets/qrcode.png" alt="">
      </div>
    </div>
    <p></p>
  </footer>
</template>

<script>
  export default {
    name: "x-footer",
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
      }
    }
  }
</script>

<style scoped lang="scss">
  footer{
    width: 100%;height:300px;background-color: #34302D;min-width: 1200px;
    .footer{
      width: 1200px;margin: auto;padding:50px 0;display:flex;justify-content: space-between;
      ul{
        display: flex;color: #fff;
        li{
          padding: 0 1px 0 20px;width: 154px;
          h4{
            font-size: 18px;height: 50px;
          }
          p{
            font-size: 13px;color: #908f8f;margin-top:6px;cursor: pointer;
            &:hover{
              color: #fff;
            }
          }
        }
      }
      .qrcode{
        width:140px;height:140px;
        img{
          width:100%;height: 100%;
        }
      }
    }
  }
</style>
