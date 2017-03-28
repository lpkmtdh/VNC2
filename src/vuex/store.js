/**
 * Created by Administrator on 2016/11/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex);
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    head: {
      title: '布线标准'
    }
    ,apiUrl:''
  },
  mutations,
  actions,
  getters
});

export default store
