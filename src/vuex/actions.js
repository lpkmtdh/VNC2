 import Vue from 'vue'
// // 引入 axios
import axios from 'axios'
 import VueAxios from 'vue-axios'
 Vue.use(VueAxios, axios, Vue)

const actions = {
  // getPicTest({dispatch,state}) {
  //   // axios.get('https://apigatewayqa.sgmlink.com:3223/service/tdsmobilehtml5/MobileContent/H5icon/akw-circle.png')
  //   //   .then(function (response) {
  //   //     console.log(response);
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.log(error);
  //   //   });
  //   // GET request for remote image
  //   axios({
  //     method:'get',
  //     url:'https://apigatewayqa.sgmlink.com:3223/service/tdsmobilehtml5/MobileContent/H5icon/akw-circle.png',
  //     responseType:'stream'
  //   })
  //     .then(function(response) {
  //        response.data.pipe(fs.createWriteStream('abc.png'))
  //     });
  // },
  getTokenTest({dispatch,state}) {
    // Send a POST request
    alert('getTokenTest!!!');
    axios({
      method: 'post',
      url: 'https://apigatewayqa.sgmlink.com:3223/auth/tdsmobile/public/login',
      data: {
        username: 'dtest1836',
        password: 'Pass1234',
        grant_type:'password'
      },
      headers:{buid:'dtest1836',uuid:'dtest1836',deviceId:'9qu094u3r019u',app_version:'1.0.0'
        ,Authorization:'Basic QVBQU1RPUkVfQ2xpZW50OnBhc3N3MHJk'}

      })
      .then(function(response) {
        alert(JSON.stringify(response));
      });
  }
}
export default actions
