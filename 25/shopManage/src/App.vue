<template>
  <div id="app">
    <div v-if="ishow">
      <shopMenu></shopMenu>
      <div class="nav">
        <breadcrumbVue v-if="showbreadcrumb"></breadcrumbVue>
      </div>
    </div>
    <router-view v-if="showRouter" />
    <sidebar />
    <div>
      <myfooter />
    </div>
  </div>
</template>
<script>
import shopMenu from "@/components/content/shopMenu";
import breadcrumbVue from "@/components/content/breadcrumb";
import { mapActions, mapGetters } from "vuex";
import productdeltails from "@/components/content/productdetails";
import sidebar from "@/components/commom/sidebar";
import person from "@/views/person/components/wode";
import head from "@/views/person/components/head";
import myfooter from "@/components/content/myfooter";
import { isLogin } from "./toolkit";

export default {
  name: "app",
  data() {
    return {};
  },
  created() {},
  watch: {
    $route(to, from) {
      try {
        // console.log(to.path)
        if (
          to.path.indexOf("PerCenter") > 0 ||
          to.path.indexOf("order") > 0 ||
          to.path.indexOf("cart") > 0
        ) {
          if (!isLogin()) {
            this.$message({
              message: "您还没有登录！请先登录",
              type: "warning"
            });
            setTimeout(() => {
              this.$router.push({
                path: `/denglu`
              });
            }, 300);
          }
        }

        let nav = this.$route.params.id;
        this.setNav(nav);
        const header = document.querySelector(".header");
        if (!header) return;
        document.querySelector(".header").className =
          "header submenu-panel-hide";
        setTimeout(() => {
          document.querySelector(".header").className = "header";
        }, 100);
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed: {
    ishow: function() {
      if (
        this.$route.path.indexOf("PerCenter") > 0 ||
        this.$route.path.indexOf("denglu") > 0 ||
        this.$route.path.indexOf("zhuce") > 0 ||
        this.$route.path.indexOf("forgetPwd") > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
    showRouter: function() {
      return (
        // 等待菜单数据加载完成再显示 || 在订单页面显示
        this.$store.state.shopmenustore.menulist.length > 0 ||
        this.$route.path.indexOf("PerCenter") > 0 ||
        this.$route.path.indexOf("denglu") > 0 ||
        this.$route.path.indexOf("zhuce") > 0 ||
        this.$route.path.indexOf("forgetPwd") > 0
      );
    },
    showbreadcrumb() {
      return (
        this.$store.state.shopmenustore.menulist.length > 0 &&
        this.$store.state.shopmenustore.navbar &&
        (this.$route.path.indexOf("home") == -1 ||
          this.$route.path.indexOf("/") == 1)
      );
    }
  },
  methods: {
    ...mapActions(["setNav"])
  },
  components: {
    shopMenu,
    breadcrumbVue,
    productdeltails,
    sidebar,
    person,
    myfooter
  }
};
</script>
<style lang="scss">
@import "~assets/css/nomralize.min.css";
@import "~assets/css/base.scss";
@import "~assets/font/iconfont.css";
</style>
