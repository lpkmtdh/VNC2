<template>
    <li>
      <router-link :to="{ path: '/standard/detail', query: { id: item.id}}" tag="div" class="standardItem clearfix">
        <img :src="item.img" >
        <!--<img src="./../../assets/img/adam.jpg" >-->
        <h2 class="marginTop5" v-text="item.title"></h2>
        <p class="marginTop5" v-text="item.Desc"></p>
      </router-link>
    </li>
</template>
<script>
  import standardDetail from "../standard/detail.vue"
  export default {
    props: ["item"],
    components: {
      standardDetail
    },
    data() {
      return {
        //  img:gift
      }
    }
  }
</script>
