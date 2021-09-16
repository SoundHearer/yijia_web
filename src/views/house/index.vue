<template>
  <div class="house-page">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub003')"
              img="house/"
              :tip="$t('house.hou001')">
    </x-banner>
    <div class="house-choose">
      <sub-title :title="$t('house.hou002')" color="#333">
        <span>WHY CHOOSE</span>OVERSEAS REAL ESTATE?
      </sub-title>
      <div class="choose">
        <sub-menu color="#333"></sub-menu>
        <p>{{$t('house.hou003')}}</p>
      </div>
      <x-title width="1000px">
        <div class="consult">
          {{lang.includes('en')?'置业资讯':$t('public.pub019')}} <p><span style="color:#e1b261;">PROPERTY</span><span>NFORMATION</span> </p>
        </div>
      </x-title>
      <router-link tag="div" to="/house/relocation" class="consult-content">
        <div class="content1">
          <img src="../../assets/house/consult.png" alt="">
          <div>
            <h4>{{$t('house.hou004')}}</h4>
            <p>
              {{$t('house.hou005')}}
            </p>
            <h4 class="h4">{{$t('house.hou006')}}</h4>
            <p>{{$t('house.hou007')}}</p>
            <h4 class="h4">{{$t('house.hou008')}}</h4>
            <p>
              {{$t('house.hou009')}}
            </p>
          </div>
        </div>
        <div class="content2">
          <h4>{{$t('house.hou010')}}</h4>
          <p>{{$t('house.hou011')}}</p>
        </div>
        <div class="content2">
          <h4>{{$t('house.hou012')}}</h4>
          <p>{{$t('house.hou013')}}</p>
          <p>{{$t('house.hou014')}}</p>
        </div>
        <ul>
          <template v-for="(item,index) in liList">
            <li :key="index">
              <img :src="item.img" alt="" />
              <h4>
                <p>{{item.title}}</p>
                <p>{{item.subTitle}}</p>
              </h4>
              <p>{{item.des}}</p>
            </li>
          </template>
        </ul>
      </router-link>
    </div>
    <div class="house-consultative">
      <sub-title :title="lang.includes('en')?'房产资讯':$t('public.pub020')">
        <span>PROPERTY</span>INFORMATION
      </sub-title>
      <div class="consultative">
        <div>
          <h4>
            <p><span>{{$t('house.hou024')}}</span><label>THE SAIL</label></p>
            <label class="btn">{{$t('house.hou025')}}</label>
          </h4>
          <div class="consultative1" @click="goToPage('/house/sail')" >
            <img src="../../assets/house/consultative1.png" alt="">
            <div class="des-text">
              <p style="font-size: 20px;color:#eee">{{$t('house.hou026')}}</p>
              <h5><label>{{$t('house.hou027')}}</label>LOCATION</h5>
              <p>{{$t('house.hou028')}}</p>
              <h5><label>{{$t('house.hou029')}}</label>LAND AREA</h5>
              <p>{{$t('house.hou030')}} ≈ 27.52</p>
              <h5><label>{{$t('house.hou031')}}</label>PROJECT TYPE</h5>
              <p>{{$t('house.hou032')}}</p>
              <h5><label>{{$t('house.hou033')}}</label>SUPPORTING FACILITIES</h5>
              <p>{{$t('house.hou034')}}</p>
            </div>
          </div>
        </div>
        <div>
          <h4>
            <p><span>{{$t('house.hou035')}}</span><label>NOVO</label></p>
          </h4>
          <div class="consultative2" @click="goToPage('/house/novo')" >
            <img src="../../assets/house/consultative2.png" alt="">
            <div class="des-text">
              <p style="font-size: 20px;color:#eee">{{$t('house.hou036')}}</p>
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
        </div>
      </div>
      <p class="logo">
        <img src="../../assets/logo.png" alt="">
      </p>
    </div>
  </div>
</template>

<script>
  import XBanner from '../components/banner'
  import XTitle from '../components/xtitle'
  import SubTitle from '../components/sub-title'
  import subMenu from './component/menu'
  export default {
    name: "house",
    components:{XTitle,SubTitle,subMenu,XBanner},
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        liList:[
          {
            img:require('../../assets/house/consult1.png'),
            title:this.$t('house.hou015'),subTitle:this.$t('house.hou016'),
            des:this.$t('house.hou017')
          },
          {
            img:require('../../assets/house/consult2.png'),
            title:this.$t('house.hou018'),subTitle:this.$t('house.hou019'),
            des:this.$t('house.hou020')
          },
          {
            img:require('../../assets/house/consult3.png'),
            title:this.$t('house.hou021'),subTitle:this.$t('house.hou022'),
            des:this.$t('house.hou023')
          },
        ]
      }
    },
    methods:{
      goToPage(page){
        this.$router.push({
          path:page
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  .house-page{
    width: 100%;
    .house-choose{
      width: 100%;padding: 60px 0;
      .choose{
        width: 1000px;margin:60px auto 80px;
        >p{
          font-size: 20px;line-height: 36px;color: #333333;padding-top: 50px;
        }
      }
      .consult{
        display: flex;justify-content: space-between;padding: 0 30px;
        p{
          span{
            display: block;height: 25px;line-height: 25px;
          }
        }
      }
      .consult-content{
        width: 1100px;margin: 50px auto 20px;
        h4{
          color: #e1b261;	font-size:15px;margin-bottom:6px;padding-bottom:6px;position: relative;
          &:before{
            position: absolute;content: '';left: 0;bottom: 0;
            width: 172px;height: 2px;
            background-image: linear-gradient(0deg, #e0b261 0%,#f6d49a 100%);
          }
        }
        .content1{
          width: 100%;display: flex;
          img{
            margin-right: 30px;height: 458px;
          }
          >div{
            .h4{
              margin-top:10px;
            }
            p{
              line-height:20px;
            }
          }
        }
        .content2{
          padding-top:30px;
          h4{
            @extend h4;
          }
          line-height: 26px;
        }
        ul{
          display: flex;justify-content: space-between;margin-top: 40px;
          li{
            width: 344px;text-align: center;
            img{
              width: 344px;height: 255px;
            }
            h4{
              &:before{
                width:310px; left:17px;
              }
            }
            >p{
              line-height: 24px;text-align: left;
            }
          }
        }
      }
    }
    .house-consultative{
      width: 100%;min-width: 1200px;padding: 60px 0;background-image: linear-gradient(41deg,rgba(#66635e,0.9) 0%,rgba(#34302d,0.9) 100%);
      .consultative{
        width: 1200px;margin:auto;
        img{width: 617px;}
        >div{
          width: 1200px;margin:60px auto 0;
          h4{
            color: #e1b261;font-size:36px;font-weight: normal;display: flex;align-items: flex-end;
            >p{
              display: flex;align-items: flex-end;
              span{
                display: inline-block;border-bottom:4px solid #e1b261;
                width: 170px;margin-bottom:5px;padding-bottom:5px;
              }
            }
            .btn{
              display: inline-block;border-radius: 16px;color: #333;font-size: 22px;padding:1px 20px;
              background-image: linear-gradient(180deg,#fac76f 0%,#dcad5b 100%), linear-gradient(#ffffff,#ffffff);
              background-blend-mode: normal,normal;margin-left: 10px;margin-bottom:8px;

            }
          }
          .consultative1,.consultative2{
            display: flex;width:1200px;
            .des-text{
              color: #fff;font-size: 20px;font-weight: bold;margin-left: 20px;
              h5{
                font-size: 18px;color: #e1b261;display: flex;align-items: flex-end;margin-top: 40px;
                label{
                  position: relative;font-size: 20px;display: inline-block;width: 116px;padding-bottom: 12px;
                  &:before{
                    content:'';width: 117px;height: 3px;position: absolute;bottom:5px;left: 0;
                    background-image: linear-gradient(0deg,#e0b261 0%,#f6d49a 100%),linear-gradient(#333333,#333333);
                    background-blend-mode: normal,normal;
                  }
                }
              }
              p{
                line-height:28px;color:rgba(#eeeeee,0.8);
                span{margin-right:13px}
              }
            }
          }
        }
      }
      .logo{
        width: 300px;height: 70px;margin:60px auto 0;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
