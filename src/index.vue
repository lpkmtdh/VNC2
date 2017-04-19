<template>
  <div>
    <header class="app-title">
        <div class="title">{{head.title}}</div>
    </header>

    <section class="app-content">
      <keep-alive>
        <router-view name="tabView"></router-view>
      </keep-alive>
    </section>

    <footer class="app-footer">
      <tab-nav></tab-nav>
    </footer>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import TabNav from './components/common/tab-nav'
  export default {
    name: 'Index',
    components:{TabNav},
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['head','standardList'])
    }
  }
</script>
