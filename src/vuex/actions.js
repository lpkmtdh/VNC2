 import Vue from 'vue'
// // 引入 axios
import axios from 'axios'
 import VueAxios from 'vue-axios'
 Vue.use(VueAxios, axios, Vue)

const actions = {
  getPicTest({dispatch,state}) {
    axios.get('https://apigatewayqa.sgmlink.com:3223/service/tdsmobilehtml5/MobileContent/H5icon/akw-circle.png')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
export default actions
