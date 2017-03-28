<template>
  <div id="tab-nav">
	<nav>
        <router-link to="/standard" tag="dl" exact>
            <dt class="iconfont icon-wechat" >
                <!--<i class="new-msg-count" >10</i>-->
            </dt>
            <dd>标准</dd>
        </router-link>
		    <router-link to="/check" tag="dl">
            <dt class="iconfont icon-contact" >
                <!--<i class="new-msg-count">2</i>-->
            </dt>
            <dd>检查</dd>
        </router-link>
		    <router-link to="/history" tag="dl">
            <dt class="iconfont icon-find" >
                <i class="new-msg-dot"></i>
            </dt>
            <dd>历史</dd>
        </router-link>
    </nav>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
//       , mounted() {
//            for (var i in this.$store.state.msgList.baseMsg) {
//                if (this.$store.state.msgList.baseMsg[i].read === false && this.$store.state.msgList.baseMsg[i].quiet === false) {
//                    this.$store.commit('addNewMsg')
//                }
//            }
//        }
    }
</script>
<style>
    @import "../../assets/css/tab-nav.css";
</style>
