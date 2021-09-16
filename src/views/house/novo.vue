<template>
  <div class="house-page">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub003')" img="house/invest-" :tip="$t('house.hou001')"></x-banner>
    <div class="house-consult">
      <sub-title :title="lang.includes('en')?'房产资讯':$t('public.pub020')" color="#333">
        <span>PROPERTY</span>INFORMATION
      </sub-title>
      <div class="house-consult-content">
        <div class="consultative">
          <img src="../../assets/house/consultative2.png" alt="">
          <div class="des-text">
            <h5 class="des-title"><label>{{$t('house.hou035')}}</label>NOVO</h5>
            <p style="font-size: 20px;">{{$t('house.hou036')}}</p>
            <h5 style="margin-top: 120px"><label>{{$t('house.hou027')}}</label>LOCATION</h5>
            <p>{{$t('house.hou037')}}</p>
            <h5><label>{{$t('house.hou029')}}</label>LAND AREA</h5>
            <p>{{$t('house.hou030')}} ≈ 1.15</p>
            <h5><label>{{$t('house.hou031')}}</label>PROJECT TYPE</h5>
            <p>{{$t('house.hou038')}}</p>
            <h5><label>{{$t('house.hou033')}}</label>SUPPORTING FACILITIES</h5>
            <p>{{$t('house.hou039')}}</p>
          </div>
        </div>
        <img style="margin-top: 40px" src="../../assets/house/novo/novo1.png" alt="">
        <div class="consult-img-list">
          <template v-for="(item,index) in consultImgList">
            <img :key="index" :src="item" alt="">
          </template>
        </div>
        <img src="../../assets/house/novo/novo3.png" alt="">
      </div>
    </div>
    <house-abroad>
      <sub-title :title="lang.includes('en')?'为什么要选择海外房产':$t('public.pub012')">
        <span>WHY CHOOSE</span>OVERSEAS REAL ESTATE?
      </sub-title>
    </house-abroad>
  </div>
</template>

<script>
  import XBanner from '../components/banner'
  import SubTitle from '../components/sub-title'
  import HouseAbroad from './component/house-abroad'
  export default {
    name: "house-novo",
    components:{SubTitle,HouseAbroad,XBanner},
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        consultImgList:[
          require('../../assets/house/novo/novo21.png'),require('../../assets/house/novo/novo22.png'),
          require('../../assets/house/novo/novo23.png'),require('../../assets/house/novo/novo24.png')
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
  .house-page{
    width: 100%;
    .house-consult {
      width: 100%;padding: 60px 0 0;background-color: #fff;box-sizing: border-box;
      .house-consult-content {
        width: 1200px;margin: 60px auto;
        .consultative {
          display: flex;
          img{
            width: 600px;height: 670px;
            box-shadow: 0 0 22px 2px rgba(0, 0, 0, 0.27);
          }
          .des-text {
            color: #fff;font-size: 20px;font-weight: bold;margin-left:30px;
            h5 {
              font-size: 18px;color: #e1b261;display: flex;align-items: flex-end;margin-top: 50px;
              label {
                position: relative;font-size: 20px;display: inline-block;width: 116px;padding-bottom: 12px;
                &:before {
                  content: '';width: 117px;height: 3px;position: absolute;bottom: 5px;left: 0;
                  background-image: linear-gradient(0deg, #e0b261 0%, #f6d49a 100%), linear-gradient(#333333, #333333);
                  background-blend-mode: normal, normal;
                }
              }
            }
            .des-title{
              font-size:48px;margin-top: 0;
              label{
                width:237px; font-size:48px;bottom:8px;
                &:before{
                  width: 240px;
                }
              }
            }
            > p {
              line-height: 28px;
              color: #333333;
              opacity: 0.8;
              font-weight: normal;
              span {
                margin-right: 13px
              }
            }
          }
        }
        .consult-img-list{
          margin:40px auto 0;display: flex;flex-flow: wrap;
          img{
            width: 570px;margin-left:60px;margin-bottom:40px;
            box-shadow:0 0 22px 2px rgba(0, 0, 0, 0.27);
            &:nth-of-type(2n+1){
              margin-left:0;
            }
          }
        }
      }
    }
  }
</style>
