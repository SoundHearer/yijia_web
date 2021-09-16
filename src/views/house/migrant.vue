<template>
  <div class="page-migrant">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub003')" img="house/invest-" :tip="$t('house.hou001')">
    </x-banner>
    <div class="migrant-content">
      <x-title width="1000px">
        <div class="invest-title">
          {{lang.includes('en')?'海外移民':$t('public.pub009')}} <p><span style="color:#e1b261;">OVERSEAS</span><span>IMMIGRATION</span></p>
        </div>
      </x-title>
      <ul class="content">
        <template v-for="(item,index) in contentList">
          <li>
            <img :src="item.img" alt="">
            <div>
              <img :src="item.icon" alt="">
              <h4>{{item.title}}</h4>
              <p>{{item.content}}</p>
            </div>
          </li>
        </template>
      </ul>
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
  import XTitle from '../components/xtitle'
  import HouseAbroad from './component/house-abroad'
  import SubTitle from '../components/sub-title'
  export default {
    name: "migrant",
    components:{
      XBanner,XTitle,SubTitle,HouseAbroad
    },
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        contentList:[
          {
            title:this.$t('migrant.mig001'),content:this.$t('migrant.mig002'),
            img:require('../../assets/house/migrant/migrant1.png'),icon:require('../../assets/house/migrant/icon1.png')
          },{
            title:this.$t('migrant.mig003'),content:this.$t('migrant.mig004'),
            img:require('../../assets/house/migrant/migrant2.png'),icon:require('../../assets/house/migrant/icon2.png')
          },{
            title:this.$t('migrant.mig005'),content:this.$t('migrant.mig006'),
            img:require('../../assets/house/migrant/migrant3.png'),icon:require('../../assets/house/migrant/icon3.png')
          },{
            title:this.$t('migrant.mig007'),content:this.$t('migrant.mig008'),
            img:require('../../assets/house/migrant/migrant4.png'),icon:require('../../assets/house/migrant/icon4.png')
          },{
            title:this.$t('migrant.mig009'),content:this.$t('migrant.mig010'),
            img:require('../../assets/house/migrant/migrant5.png'),icon:require('../../assets/house/migrant/icon5.png')
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-migrant{
    width: 100%;
    .migrant-content{
      width: 1100px;margin: auto;padding: 60px 0;
      .invest-title{
        display: flex;justify-content: space-between;padding: 0 30px;
        p{
          span{
            display: block;height: 25px;line-height: 25px;
          }
        }
      }
      .content{
        width: 100%;padding-top:60px;
        li{
          width: 100%;display: flex;align-items: flex-start;margin-bottom:60px;
          >img{
            width: 539px;height: 447px;
            box-shadow: 0px 0px 22px 2px rgba(0, 0, 0, 0.27);
          }
          div{
            padding-left: 20px;
            >img{
              width: 100px;height: 100px;
            }
            h4{
              color: #e1b261;	font-size: 24px;margin-bottom: 10px;padding-bottom: 10px;position: relative;
              &:before{
                position: absolute;content: '';left: 0;bottom: 0;width: 172px;
                height: 2px;background-image: linear-gradient(0deg, #e0b261 0%,#f6d49a 100%);
              }
            }
            p{
              font-size: 16px;line-height: 40px;color: #333333;
            }
          }
        }
      }
    }
  }
</style>
