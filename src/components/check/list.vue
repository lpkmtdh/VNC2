<template>
  <div>
    chcke001<p/>
    chcke002<p/>
    chcke003<p/>
    chcke004<p/>
    chcke005<p/>
    chcke006<p/>

    <button v-on:click="takePhoto">拍照</button>
  </div>
</template>
<script>
  import Vue from 'vue'
    export default {
        components: {

        },
        data() {
            return {
                "titleName": "布线检查"
            }
        }
        ,methods:{
          takePhoto(){
            console.log(Vue.cordova);
            Vue.cordova.on('deviceready', () => {
              console.log('Cordova : device is ready !');

              Vue.cordova.camera.getPicture((imageURI) => {
                window.alert('Photo URI : ' + imageURI)
              }, (message) => {
                window.alert('FAILED : ' + message)
              }, {
                quality: 50,
                destinationType: Vue.cordova.camera.DestinationType.FILE_URI
              });
            });
//            navigator.camera.getPicture(takeSuccess, takeFail, {destinationType : Camera.DestinationType.FILE_URI});
//            //拍照成功后回调
//            function takeSuccess(imageURI) {
//             alert('success' + imageURI);
//            }
//
//            //失败后回调
//            function takeFail(message) {
//              alert('error:'+message);
//                // navigator.notification.alert("拍照失败，原因：" + message);
//            }
          }
      }
    }
</script>
<style>
    /*@import "../../assets/css/wechat.css";*/
</style>
