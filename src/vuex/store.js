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


const StandardList = {"Standard":{v:"1","list":[{
  id: 0,
  title: '设备仪安装',
  Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内.设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内.',
  img: './static/img/ben.png'
},
  {
    id: 1,
    title: '电瓶取点',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内222...',
    img: './static/img/adam.jpg'
  }, {
    id: 2,
    title: '检查项目2',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内333...',
    img: './static/img/ionic.png'
  }, {
    id: 3,
    title: '检查项目3',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内444...',
    img: './static/img/mike.png'
  }, {
    id: 4,
    title: '检查项目4',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内444...',
    img: './static/img/mike.png'
  }, {
    id: 5,
    title: '检查项目5',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内444...',
    img: './static/img/mike.png'
  }, {
    id: 6,
    title: '检查项目6',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内444...',
    img: './static/img/mike.png'
  }, {
    id: 7,
    title: '检查项目7',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内444...',
    img: './static/img/mike.png'
  }, {
    id: 8,
    title: '检查项目8',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内444...',
    img: './static/img/mike.png'
  }, {
    id: 9,
    title: '检查项目9',
    Desc: '设备仪器应采用捆扎或固定于定制支架等适当的方法固定于车辆内444...',
    img: './static/img/mike.png'
  }
]}};

const store = new Vuex.Store({
  state: {
    head: {
      title: '布线标准'
    }
    ,standardList:StandardList
    ,standardDetal:{"id1":"","title1":"","desc1":"","img1":"","id2":"","title2":"","desc2":"","img2":"","id3":"","title3":"","desc3":"","img3":""
      ,"ImgMaxWidth":0
    }
    ,apiUrl:''
  },
  mutations,
  actions,
  getters
});

export default store
