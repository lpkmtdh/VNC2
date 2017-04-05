<template>
  <div>
    <header class="app-title">
      <router-link to="/standard" tag="div" class="iconfont icon-return-arrow backCls">
        <span>返回</span>
      </router-link>
      <div class="title retunTitle" v-text="titleName"></div>
    </header>
    <div class="standard-detail_wrap" >
      <ul id="ul1">
        <li>
          <div class="form1">
            <div class="row">
              <div class="col">编号：</div>
              <div class="col col-67" v-text="standardDetal.id1"></div>
            </div>
            <div class="row">
              <div class="col">项目名称：</div>
              <div class="col col-67" v-text="standardDetal.title1"></div>
            </div>
            <div class="row">
              <div class="col">标准说明：</div>
              <div class="col col-67" v-text="standardDetal.desc1"></div>
            </div>
            <div class="row">
              <div class="col col-33">标准照片：</div>
            </div>
            <div class="row">
              <div class="col"><img :src="standardDetal.img1" :style="{ maxWidth: standardDetal.ImgMaxWidth + 'px' }"/></div>
            </div>
          </div>
        </li>
        <li>
          <div class="form1">
            <div class="row">
              <div class="col">编号：</div>
              <div class="col col-67" v-text="standardDetal.id2"></div>
            </div>
            <div class="row">
              <div class="col">项目名称：</div>
              <div class="col col-67" v-text="standardDetal.title2" id="title2"></div>
            </div>
            <div class="row">
              <div class="col">标准说明：</div>
              <div class="col col-67" v-text="standardDetal.desc2"></div>
            </div>
            <div class="row">
              <div class="col col-33">标准照片：</div>
            </div>
            <div class="row">
              <div class="col" ><img  :src="standardDetal.img2" :style="{ maxWidth: standardDetal.ImgMaxWidth + 'px' }"/></div>
            </div>
          </div>
        </li>
        <li>
          <div class="form1">
            <div class="row">
              <div class="col">编号：</div>
              <div class="col col-67" v-text="standardDetal.id3"></div>
            </div>
            <div class="row">
              <div class="col">项目名称：</div>
              <div class="col col-67" v-text="standardDetal.title3"></div>
            </div>
            <div class="row">
              <div class="col">标准说明：</div>
              <div class="col col-67" v-text="standardDetal.desc3"></div>
            </div>
            <div class="row">
              <div class="col col-33">标准照片：</div>
            </div>
            <div class="row">
              <div class="col"><img  :src="standardDetal.img3" :style="{ maxWidth: standardDetal.ImgMaxWidth + 'px' }"/></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
    export default {
        components: {

        },
        data() {
            return {
                "titleName": "abc"
            }
        }
      ,computed: {
        ...mapGetters(['standardList','standardDetal'])
      }
      ,mounted: function () {
        //console.log(this.$route.query.id);
       // alert( document.body.clientWidth);
        this.init();
        //this.$store.dispatch("getPicTest");
      }
      ,methods: {
        init(){
           // console.log(this.$store.state.standardDetal);
          var _storeState = this.$store.state;
          var currIndex = parseInt(this.$route.query.id);
          var clientWidth = document.body.clientWidth;
          var oUl = document.getElementById("ul1");
          var aLis = oUl.getElementsByTagName("li");
          oUl.style.width = aLis.length * clientWidth +"px";
          var once_complete = true;

          this.$store.commit('setStandardDeailImgMaxWidth',clientWidth-50);

          if(aLis.length >1 && currIndex != 0){
            oUl.style.left = -clientWidth + "px";
          }
          for(var i=0;i<aLis.length;i++){
            aLis[i].style.width =clientWidth +"px";
          }
          //alert(aLis[0].style.width );
          var StandardList = _storeState.standardList.Standard.list ;
          //console.log(StandardList);
          Init_Drag();
          function Init_Drag() {
            var disX = 0;
            var downX = 0;
            var iNow = 0;
            var timer = null;
            var iSpeed = 0;

            oUl.addEventListener('touchstart', function(ev) {
              disX = ev.changedTouches[0].pageX - oUl.offsetLeft;
              downX = ev.changedTouches[0].pageX;
              clearInterval(timer);
            }, false);
            oUl.addEventListener('touchmove', function(ev) {
              oUl.style.left = ev.changedTouches[0].pageX - disX + 'px';
            }, false);
            oUl.addEventListener('touchend', function(ev) {
              if( ev.changedTouches[0].pageX < downX ){
                //alert('←');
                if(once_complete) {
                  once_complete = false;
                  if (iNow != aLis.length - 1) {
                    iNow++;
                  }
                  if (currIndex != StandardList.length - 1) {
                    currIndex++;
                  }
                }
                startMove( - iNow * aLis[0].offsetWidth ,SetValues );
              }
              else{
                //alert('→');
                if(once_complete) {
                  once_complete = false;
                  if (iNow != 0) {
                    iNow--;
                  }
                  if (currIndex != 0) {
                    currIndex--;
                  }
                }
                startMove( - iNow * aLis[0].offsetWidth  ,SetValues);
              }
            }, false);

            function startMove(iTarget,endFn){
              clearInterval(timer);
              timer = setInterval(function(){
                iSpeed += (iTarget - oUl.offsetLeft)/6;
                iSpeed *= 0.6;
                if( Math.abs(iSpeed)<=1 && Math.abs(iTarget - oUl.offsetLeft)<=1 ){
                  clearInterval(timer);
                  iSpeed = 0;
                  oUl.style.left = iTarget + 'px';
                  if(endFn){
                    setTimeout(function(){endFn.call(currIndex);},30);
                    // endFn.call(currIndex);
                  }
                }
                else{
                  oUl.style.left = oUl.offsetLeft + iSpeed + 'px';
                }
              },10);
            };
            SetValues();
            // 赋值
            function SetValues(){
              if (StandardList.length == 0) {
                return;
              }
              if (currIndex == 0) {
                //console.log("tab0-------------" + currIndex + "-----------" + iNow);
                _storeState.standardDetal.id1 = StandardList[currIndex].id;
                _storeState.standardDetal.title1 = StandardList[currIndex].title;
                _storeState.standardDetal.desc1 = StandardList[currIndex].Desc;
                _storeState.standardDetal.img1 = StandardList[currIndex].img;

                _storeState.standardDetal.id2 = StandardList[currIndex + 1].id;
                _storeState.standardDetal.title2 = StandardList[currIndex + 1].title;
                _storeState.standardDetal.desc2 = StandardList[currIndex + 1].Desc;
                _storeState.standardDetal.img2 = StandardList[currIndex + 1].img;
                iNow = 0;
                oUl.style.left = "0px";
              }
              else if (currIndex == StandardList.length - 1) {
                // console.log("tab1-------------" + currIndex + "-----------" + iNow);
                _storeState.standardDetal.id2 = StandardList[currIndex-1].id;
                _storeState.standardDetal.title2 = StandardList[currIndex-1].title;
                _storeState.standardDetal.desc2 = StandardList[currIndex-1].Desc;
                _storeState.standardDetal.img2 = StandardList[currIndex-1].img;

                _storeState.standardDetal.id3 = StandardList[currIndex].id;
                _storeState.standardDetal.title3 = StandardList[currIndex].title;
                _storeState.standardDetal.desc3 = StandardList[currIndex].Desc;
                _storeState.standardDetal.img3 = StandardList[currIndex].img;
                iNow = aLis.length - 1;
                oUl.style.left = -iNow*clientWidth + "px";
              }
              else {

                _storeState.standardDetal.id1 = StandardList[currIndex-1].id;
                _storeState.standardDetal.title1 = StandardList[currIndex-1].title;
                _storeState.standardDetal.desc1 = StandardList[currIndex-1].Desc;
                _storeState.standardDetal.img1 = StandardList[currIndex-1].img;

                _storeState.standardDetal.id2 = StandardList[currIndex].id;
                _storeState.standardDetal.title2 = StandardList[currIndex].title;
                _storeState.standardDetal.desc2 = StandardList[currIndex].Desc;
                _storeState.standardDetal.img2 = StandardList[currIndex].img;

                _storeState.standardDetal.id3 = StandardList[currIndex+1].id;
                _storeState.standardDetal.title3 = StandardList[currIndex+1].title;
                _storeState.standardDetal.desc3 = StandardList[currIndex+1].Desc;
                _storeState.standardDetal.img3 = StandardList[currIndex+1].img;

                iNow = 1;
                oUl.style.left = -clientWidth + "px";

                //console.log("tab2-------------" + currIndex + "-----------" + iNow + "------------" + StandardList[currIndex].title);
              }
              once_complete = true;
            };
          };
        }
      }
    }
</script>
<style>
    /*@import "../../assets/css/wechat.css";*/
</style>
