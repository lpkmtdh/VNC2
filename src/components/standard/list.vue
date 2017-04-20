<template>
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore" topPullText="下拉刷新。。。">
    <ul style=" border: 1px solid red; position: relative; top: 0;bottom: 0;left: 0;right:0; ">
      <list-item v-for="item in standardList.Standard.list" :item="item" :key="item.id" ></list-item>
    </ul>
      <div slot="top" class="mint-loadmore-top" topPullText="下拉刷新">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
        <span v-show="topStatus === 'loading'">加载中，请稍后...</span>
      </div>
    </mt-loadmore>

</template>
<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import listItem from "../standard/list-item.vue"

  import { Loadmore } from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);

    export default {
      components: {
        listItem
      },
      data() {
          return {
              "titleName": "布线标准"
              ,topStatus: ''
          }
      },
      computed: {
        ...mapGetters(['standardList'])
      }
      ,methods: {
        handleTopChange(status) {
          this.topStatus = status;
        }
        ,loadTop() {
          let This = this;
          // 加载更多数据
          console.log("loadTop!!!!!!!!!!!!!!!!!!!!!!!!");
          setTimeout(function(){
            This.$refs.loadmore.onTopLoaded();
          },2000);
        }
      }
    }
</script>
<style>
    /*@import "../../assets/css/wechat.css";*/
</style>
