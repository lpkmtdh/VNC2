<template>
  <div>
    <ul>
      <list-item v-for="item in standardList.Standard.list" :item="item" :key="item.id"></list-item>
    </ul>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import listItem from "../standard/list-item.vue"
    export default {
        components: {
          listItem
        },
        data() {
            return {
                "titleName": "布线标准"
            }
        },
      computed: {
        ...mapGetters(['standardList'])
      }
    }
</script>
<style>
    /*@import "../../assets/css/wechat.css";*/
</style>
