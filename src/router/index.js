import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/standard',name: 'standard'
      ,components: {"default": resolve => require(["../index.vue"], resolve)}
      ,children:[{path:'/standard',name:"standard",components:{"tabView": resolve => require(["../components/standard/list.vue"], resolve)}}]
    }
    ,{path: '/check',name: 'check'
      ,components: {"default": resolve => require(["../index.vue"], resolve)}
      ,children:[{path:'/check',name:"check",components:{"tabView": resolve => require(["../components/check/list.vue"], resolve)}}]
    }
    ,{path: '/history',name: 'history'
      ,components: {"default": resolve => require(["../index.vue"], resolve)}
      ,children:[{path:'/history',name:"history",components:{"tabView": resolve => require(["../components/history/list.vue"], resolve)}}]
    }
    ,{path:'*',redirect:'/standard'}
  ]
})
