import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect:'/home',
      component: () => import("../views/home")
    },
    {
      path: '/home',
      component: () => import("../views/home")
    },
    {
      path: '/about',
      component:() => import('../views/about')
    },
    {
      path:'/culture',
      component:() => import('../views/culture')
    },
    {
      path:'/contact',
      component:() => import('../views/contact')
    },
    {
      path:'/business',
      component:() => import('../views/business')
    },
    {
      path:'/house',
      component:() => import('../views/house/layout'),
      redirect:'/house/index',
      children:[
        {
          path:'/house/index',
          component:() => import('../views/house/index'),
        },{
          path:'/house/novo',
          component:() => import('../views/house/novo'),
        },{
          path:'/house/sail',
          component:() => import('../views/house/sail'),
        },{
          path:'/house/invest',
          component:() => import('../views/house/invest'),
        },{
          path:'/house/migrant',
          component:() => import('../views/house/migrant'),
        },{
          path:'/house/study',
          component:() => import('../views/house/study'),
        },{
          path:'/house/medical',
          component:() => import('../views/house/medical'),
        },{
          path:'/house/relocation',
          component:() => import('../views/house/relocation'),
        }
      ]
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
