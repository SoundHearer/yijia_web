<template>
  <div class="page-contact">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub002')"
              img="about/"
              :tip="$t('contact.con001')">
    </x-banner>
    <div class="content">
      <div class="vertical-text">
        CE GROUP LIMITED
      </div>
      <img src="../assets/contact/contact.png" alt="">
      <div class="content-text">
        <h4>{{$t('contact.con002')}}</h4>
        <p>{{$t('contact.con003')}}</p>
      </div>
    </div>
    <div class="contact-type">
      <x-title width="1000px">
        {{lang.includes('en')?'联系方式':$t('public.pub013')}}<span class="span">CONTACT  US</span>
      </x-title>
      <div style="padding-top:30px">
        <ul>
          <li>
            <h5>{{lang.includes('en')?'公众号':$t('public.pub029')}} <span>OFFICIAL  ACCOUNT</span></h5>
            <p>
              <img src="../assets/contact/qrcode1.png" alt="">
            </p>
          </li>
          <li style="margin-left: 70px">
            <h5>{{lang.includes('en')?'联系我们':$t('public.pub006')}} <span>CONTACT  US</span></h5>
            <p><img src="../assets/contact/qrcode2.png" alt=""></p>
          </li>
        </ul>
        <ul>
          <li>
            <h5>{{$t('contact.con004')}} <span>PHONE</span></h5>
            <p>+86 0755-88912015</p>
          </li>
          <li style="margin-left: 70px">
            <h5>{{$t('contact.con005')}} <span>OFFICIAL  WEBSITE</span></h5>
            <p>www.ceintlgruop.com</p>
          </li>
        </ul>
        <ul>
          <li>
            <h5>{{$t('contact.con006')}} <span>ADDRESS</span></h5>
            <p>{{$t('contact.con007')}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="contact-map">
      <div class="details">
        <h4>
          <label>APPLICATION    FORM</label>
          <span>   FOR     COOPERATION</span>
        </h4>
        <p class="bgImg"></p>
        <p class="bgText">{{$t('public.pub032')}}</p>
      </div>
      <div class="map-form">
        <apply-from></apply-from>
      </div>
    </div>
  </div>
</template>

<script>
  import XBanner from './components/banner'
  import XTitle from './components/xtitle'
  import ApplyFrom from './components/applyFrom'
  export default {
    name: "contact",
    components:{XTitle,XBanner,ApplyFrom},
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-contact{
    width: 100%;min-width: 1200px;overflow-x: hidden;
    .content{
      width: 1200px;display: flex;margin:60px auto;height: 405px;
      .vertical-text{
        width: 30px;-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;color: #fdcc7f;font-size: 20px;
        font-family: SourceHanSansCN-Medium;margin-right: 20px;position: relative;margin-top: 20px;
        &:before{
          content:'';position: absolute;width: 1px;height: 140px;background-color: #fdcc7f;left:12px;top:200px;
        }
      }
      >img{
        width: 430px;height: 405px;
        box-shadow: 0px 0px 40px 0px rgba(73, 73, 73, 0.35);
      }
      .content-text{
        flex: 1;margin-left: 40px;padding-top: 100px;
        h4{
          font-size: 48px;font-weight: bold;color: #fdcc7f;
        }
        p{
          font-size: 18px;line-height: 36px;color: #333;margin-top: 40px;
        }
      }
    }
    .contact-type{
      width: 1200px;margin: auto;padding: 60px 0;
      ul{
        width: 100%;display: flex;padding:30px 0;
        li{
          flex: 1;color: #333333;font-size: 30px;
          span{
            color: #e0b364;
          }
          p{
            width: 100%;background-color: #fff;box-shadow: 0 0 40px 0 rgba(73, 73, 73, 0.35);
            text-align: center;padding:42px 0;font-size: 28px;
          }
        }
      }
    }
    .contact-map{
      width: 100%;padding:50px calc(50% - 500px) 40px 0;display: flex;box-sizing: border-box;
      background: url("../assets/contact/map.png") no-repeat center;
      background-size: cover;
      .details{
        flex: 1;text-align: right;
        h4{
          color: #fff;
          label{
            color: #e0b364;display: block;padding-bottom:10px;font-size: 32px;
          }
          span{
            font-weight: normal;font-size: 30px;
          }
        }
        .bgImg{
          background-image: linear-gradient(264deg,#ffdda1 0%,#e6a635 100%);margin-top:100px;height: 30px;margin-bottom: 5px;
        }
        .bgText{
          font-size: 30px;color: #fff;padding-right: 160px;letter-spacing: 2px;
        }
      }
      .map-form{
        padding:60px 0;
      }
    }
  }
</style>
