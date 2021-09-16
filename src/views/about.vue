<template>
  <div class="page-about">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub002')" img="about/"
              :tip="$t('about.ab001')">
    </x-banner>
    <div class="about-introduce">
      <div class="introduce">
        <div class="introduce-title">
          <sub-title :title="$t('about.ab004')" color="#fff">
            <span>COMPANY PROFILE</span>
          </sub-title>
        </div>
        <img src="../assets/about/introduce1.png" alt="">
        <div class="introduce-text">
          <img src="../assets/about/introduce-logo.png" alt="">
          <div>
            <h5>{{$t('public.pub002')}}</h5>
            <p>{{$t('about.ab003')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="enterprise-culture">
      <sub-title :title="$t('about.ab002')" color="#fff">
        <span>COMPANY</span>CULTURE
      </sub-title>
      <ul class="company-culture">
        <template v-for="(item,index) in companyList">
          <li :key="index">
            <img :src="item.icon" alt="" />
            <h4>{{item.title}}</h4>
            <p>{{item.des}}</p>
          </li>
        </template>
      </ul>
    </div>
    <div class="about-team">
      <x-title width="900px">
        {{$t('about.ab015')}}<span class="span">ELITE TEAM</span>
      </x-title>
      <div class="team-carousel">
        <el-carousel :interval="4000000" type="card" height="520px">
          <el-carousel-item v-for="(item,index) in eliteList" :key="index">
            <div class="elite-img">
              <p class="img">
                <img :src="item.img" alt="" />
              </p>
              <div class="name-precept">
                <label>{{item.title}}</label>
                <h4>{{item.name}} <span>{{item.enName}}</span></h4>
                <p>{{item.precept}}</p>
              </div>
              <div class="introduce">
                {{item.introduce}}
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="about-business">
      <sub-title :title="$t('about.ab028')" color="#fff">
        <span style="margin-right: 5px">BUSINESS</span>SEGMENTS
      </sub-title>
      <div class="business-content">
        <template v-for="(item,index) in aboutList">
          <div :key="index">
            <h4>
              <label>{{lang.includes('en')?item.titleEn:item.title}}</label>
              <span>{{item.enTitle}}</span>
            </h4>
            <p>
              <template v-for="(img,ind) in item.imgs">
                <img :key="index+''+ind" :src="img" alt="">
              </template>
            </p>
            <div class="des">{{item.des}}</div>
          </div>
        </template>
      </div>
    </div>
    <div class="culture-idea">
      <div class="content">
        <div>
          <h5>
            <span>WHY  DO  YOU</span>
            <label>{{$t('about.ab038')}}</label>
            <p>{{$t('about.ab039')}}    +</p>
          </h5>
          <p>CHOOSE  US?</p>
        </div>
        <ul>
          <li></li>
          <template v-for="(item,index) in idealList">
            <li :key="index" >
              <h4>
                <img :src="item.icon" alt="">
                <label>{{item.title}}</label>
              </h4>
              <p>{{item.content}}</p>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="about-apply">
      <div class="content">
        <apply-from></apply-from>
        <div class="apply-right">
          <p class="p1"><span style="margin-right: 30px;">APPLICATION</span><span>FORM</span></p>
          <p class="p2"><span style="margin-right: 30px;">FOR</span><span>COOPERATION</span></p>
          <p class="p3">{{$t('about.ab040')}}</p>
          <p class="p4"></p>
        </div>
      </div>
    </div>
    <div class="about-cooperate">
      <div class="about-cooperate-content">
        <div class="cooperate-content-title">
          <sub-title :title="$t('about.ab046')" color="#333" font-size="36">
            <span style="margin-right: 5px">COOPERATIVE</span>CLIENT
          </sub-title>
        </div>
        <p>
          <img src="../assets/about/cooperate.png" alt="">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import SubTitle from './components/sub-title'
  import XBanner from './components/banner'
  import XTitle from './components/xtitle'
  import applyFrom from "./components/applyFrom";
  export default {
    name: "about",
    components:{XTitle,XBanner,SubTitle,applyFrom},
    data(){
      return{
        formInput:{
          phone:'',
          company:'',
          remark:''
        },
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        idealList:[
          {
            icon:require('../assets/culture/ideaS.png'),title:this.$t('about.ab041'),
          },{
            icon:require('../assets/culture/ideaS.png'),title:this.$t('about.ab042'),
          },{
            icon:require('../assets/about/ideaA.png'),title:this.$t('about.ab043'),
          },{
            icon:require('../assets/culture/ideaR.png'),title:this.$t('about.ab044'),
          },{
            icon:require('../assets/culture/ideaE.png'),title:this.$t('about.ab045'),
          }
        ],
        aboutList:[
          {title:this.$t('public.pub003'),enTitle:'REAL ESTATE',imgs:[require('../assets/about/business11.png'),
              require('../assets/about/business12.png'),require('../assets/about/business13.png'),
            ],des:this.$t('about.ab029'),titleEn:'壹嘉房产' //标题用中文显示
          },
          {title:this.$t('public.pub004'),enTitle:'COMMERCIAL AFFAIRS',imgs:[require('../assets/about/business21.png'),
              require('../assets/about/business22.png'),require('../assets/about/business23.png')
            ],des:this.$t('about.ab030'),titleEn:'壹嘉商务'
          },
          {title:this.$t('public.pub005'),enTitle:'MARKETING',imgs:[require('../assets/about/business31.png'),
              require('../assets/about/business32.png'),require('../assets/about/business33.png')
            ],des:this.$t('about.ab031'),titleEn:'壹嘉文化'
          }
        ],
        companyList:[
          {
            icon:require('../assets/about/icon1.png'),title:this.$t('about.ab005'),des:this.$t('about.ab006')
          },{
            icon:require('../assets/about/icon2.png'),title:this.$t('about.ab007'),des:this.$t('about.ab008')
          },{
            icon:require('../assets/about/icon3.png'),title:this.$t('about.ab009'),des:this.$t('about.ab010')
          },{
            icon:require('../assets/about/icon4.png'),title:this.$t('about.ab011'),des:this.$t('about.ab012')
          },{
            icon:require('../assets/about/icon5.png'),title:this.$t('about.ab013'),des:this.$t('about.ab014')
          }
        ],
        eliteList:[
          {
            img:require('../assets/about/elite1.png'),name:'许紫妍',enName:'Esther Hui',title:this.$t('about.ab016'),
            precept:this.$t('about.ab017'), introduce:this.$t('about.ab018')
          },
          {
            img:require('../assets/about/elite3.png'),name:'钟振宇',enName:'John Zhong',title:this.$t('about.ab021'),
            precept:this.$t('about.ab022'), introduce:this.$t('about.ab023')
          },
          {
            img:require('../assets/about/elite5.png'),name:'陈志鸿',enName:'Zhihom  Chan',title:this.$t('about.ab021'),
            precept:this.$t('about.ab024'), introduce:this.$t('about.ab025'),
          },
          {
            img:require('../assets/about/elite4.png'),name:'李梓键',enName:'King Lee',title:this.$t('about.ab021'),
            precept:this.$t('about.ab026'), introduce:this.$t('about.ab027')
          },
          {
            img:require('../assets/about/elite2.png'),name:'章佳洁',enName:'Charis Cheung',title:this.$t('about.ab016'),
            precept:this.$t('about.ab019'),
            introduce:this.$t('about.ab020')
          }
        ]
      }
    },
    created(){
      console.log(this.lang)
    }
  }
</script>
<style scoped lang="scss">
  .page-about{
    width: 100%;min-width: 1200px;overflow-x: hidden;
    .about-introduce{
      width: 100%;background: url("../assets/whrite-bg.png") no-repeat center;
      background-size: cover;padding: 60px 0;
      .introduce{
        width: 1200px;margin: auto;position: relative;padding-top:45px;display: flex;
        .introduce-title{
          width: 100%;position: absolute; top: 0;left: 0;z-index: 10;
        }
        .introduce-text{
          display: flex;
          img{
            width: 78px;height: 78px;margin: 0 50px;
          }
          h5{
            font-size: 24px;padding: 30px 0;font-weight: normal;
          }
          p{
            font-size:18px;line-height:34px;
          }
        }
      }
    }
    .enterprise-culture{
      width: 100%;padding: 60px 0;
      background-image: linear-gradient(131deg,rgba(#55524d,0.9) 0%,rgba(#1e1916,0.9) 100%);
      .company-culture{
        width: 1200px;margin:60px auto 40px;display: flex;
        li{
          flex: 1;color: #fff;margin-left: 50px;
          &:first-child{
            margin-left: 0;
          }
          img{
            width: 42px;height: 42px;
          }
          h4{
            font-size:18px;padding:20px 0;
          }
          p{
            font-size:14px;color: rgba(#eee,0.8);line-height: 30px;
          }
        }
      }
    }
    .about-team{
      width: 1200px;min-height: 400px;background-size: cover;padding-top:80px;
      background: url(../assets/about/team-bg.png) no-repeat center 0;margin: auto;
      .span{
        color: #e0b364;margin-left:20px;
      }
      .team-carousel{
        width:100%;padding-top:50px;margin: auto;
        .elite-img{
          background-color:#fff;width:600px;position: relative;box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.27);height: 462px;
          .img{
            position: absolute;z-index: 2;padding: 20px;background-color: #d4d4d4;
            img{
              width:250px;
            }
          }
          .name-precept{
            padding-left:300px;padding-top:20px;padding-right: 10px;position: relative;
            label{
              font-size:21px;font-weight: bold;color: #e0b364;opacity: 0.35;position: absolute;top: 20px;
            }
            h4{
              font-size: 22px;color: #333333;padding-top:32px;position: relative;padding-bottom:10px;
              &:before{
                position: absolute;content: '';left: 0;width: 33px;
                height:2px;background-color: #e6a635;bottom: 0;
              }
              span{
                color: #e8ad44;
              }
            }
            p{
              font-size: 14px;padding: 10px 50px 10px 0;
            }
          }
          .introduce{
            padding-left:300px;height: 300px;padding-right:25px;padding-top:30px;box-sizing: border-box;
            background:rgba(#eaeaea,0.68) url("../assets/logo11.png") no-repeat left 70px bottom 10px;
            background-size: 144px 34px;font-size: 12px;line-height:30px;color:rgba(#000000,0.8);
            position: absolute;bottom: 0;left: 0;
          }
        }
      }
    }
    .about-business{
      width: 100%; background-image: linear-gradient(41deg,rgba(#66635e,0.9) 0%,rgba(#34302d,0.9) 100%);padding-top: 40px;
      .business-content{
        width: 1200px;margin:0 auto;padding:20px 0 60px;
        >div{
          margin-top:30px;
          h4{
            color: #e0b261;font-size:24px;margin-bottom: 10px;position: relative;
            label{
              display: inline-block;width:170px;border-bottom: 20px ;font-size:36px;
              border-bottom: 2px solid #e0b261;padding-bottom: 5px;
            }
            span{
              position: absolute;left: 170px;bottom: -7px;
            }
          }
          p{
            width: 100%;display: flex;justify-content: space-between;
            img{
              width:360px;
            }
          }
          .des{
            color:rgba(#eee,0.8);font-size: 18px;padding-top: 15px;line-height:30px;
          }
        }
      }
    }
    .culture-idea{
      width: 100%;padding-bottom:100px;
      .content{
        width: 1100px;margin: auto;position: relative;padding-top: 160px;
        >div{
          position: absolute;z-index: 3;left:-40px;top: 0;display: flex;letter-spacing: 2px;
          >h5{
            width:300px;height:300px;background-image: linear-gradient(0deg, #dfb15f 0%, #ffdda2 100%);color: #fff;
            padding-top:30px;box-sizing: border-box;text-align: center;
            >label{
              display: block;font-size:28px;margin-top:30px;
            }
            >span{
              display: block;font-size:36px;
            }
            >p{
              font-size:14px;border: 2px solid #fff;margin-top: 30px;
              padding: 10px 0;display: inline-block;width: 240px;text-align: center;
            }
          }
          >p{
            padding-top:30px;font-size:36px;padding-left: 5px;
          }
        }
        >ul{
          width: 100%; box-shadow: 0 0 22px 2px rgba(0, 0, 0, 0.27);background-color: #fff;
          box-sizing: border-box;display: flex;flex-flow: wrap;
          li{
            display: flex;align-items: center;padding: 50px 0 50px 40px;width: 33.33%; box-sizing: border-box;
            h4{
              font-size:24px;color: #232449;position: relative;width:200px;
              img{
                width: 48px;
              }
              label{
                position: absolute;left:48px;bottom:10px;
              }
            }
            p{
              font-family: SourceHanSansCN-Regular;font-size: 18px;color: #333333;padding-top: 20px;
            }
          }
        }
      }
    }
    .about-apply{
      width: 100%;background:url("../assets/about/apply-bg.png");background-size: cover;
      padding: 100px 0;
      .content{
        width: 1200px;margin: auto;display: flex;justify-content: space-between;
      }
      .apply-right{
        width: 500px;padding-top: 40px;
        p{
          font-size: 30px;color: #fff;margin-bottom: 10px;
        }
        .p1{
          font-weight: bold;color: #f6c97a;
        }
        .p3{
          padding-top:40px;position: relative;
          &:before{
            content:"";position: absolute;background-color:#feda9c;
            left: 0;top:30px;width: 150px;height: 2px;
          }
        }
        .p4{
          width:500px;height:30px;margin-top: 40px;
          background-image: linear-gradient(-66deg, #e8aa3d 0%,#feda9c 100%);
        }
      }
    }
    .about-cooperate{
      width: 100%;padding:40px 0;
      .about-cooperate-content{
        width: 1200px;margin: auto;position: relative;
        .cooperate-content-title{
          position: absolute;z-index: 10;left:60px;top:40px;
        }
        p{
          width: 1200px;margin: auto;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>
