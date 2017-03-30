<template>
  <div id="app">
    <div  class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
    <keep-alive>
      <router-view  name="default"></router-view>
    </keep-alive>
    </div>
    <!--其他店内页集合 有过渡效果-->
    <transition name="custom-classes-transition" > <!---->
      <router-view name="subPage" class="sub-page"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      "pageName": "",
      "routerAnimate": false,
      "enterAnimate": "", //页面进入动效
      "leaveAnimate": "" //页面离开动效
    }
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    "$route" (to, from) {
      console.log(to.name+"==="+to.path);
//        this.$store.commit("setTitleName", to.name)
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      console.log("path=========="+to.path+"=========="+from.path+"==========="+toDepth);
      if (toDepth === 2) {
        this.$store.commit("setTitleName", to.name)
      }

    }
  }
}
</script>
<style>
  /*将公用的样式统一在此导入*/
  @import "assets/css/base.css";
  @import "assets/css/common.css";
  /*阿里 fonticon*/
  @import "assets/css/lib/iconfont.css";
  /*过渡效果需要的动画库*/
  @import "assets/css/lib/animate.css";
</style>
