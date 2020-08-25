<template>
  <div :key="$store.state.shopmenustore.navbar">
    <!-- <el-breadcrumb separator="/" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) in showbar" :to="item.url" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>-->
    <div class="name">
      <span>
        <el-breadcrumb separator="/" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item, index) in showbar"
            :to="item.url"
            :key="index"
          >{{ item.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </span>
      <span style="margin-left:10px">商品筛选</span>
      <a href>重置筛选条件</a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'breadcrumb',
  data() {
    return {
      showbar: []
    }
  },
  computed: {
    ...mapGetters(['navbar', 'menulist'])
  },
  created() {
    // this.showbar = this.navbar
    this.setShowBar()
  },
  beforeUpdate() {
    this.setShowBar()
  },

  methods: {
    setShowBar() {
      this.showbar = []
      var objbar = this.navbar.split('_')
      let url = ''
      objbar.forEach((item, i) => {
        this.menulist.find((itemmenu, index) => {
          if (item == itemmenu.id) {
            if (i == 0) {
              url = '/' + itemmenu.url + '/' + itemmenu.id
            } else {
              url += '_' + itemmenu.id
            }
            if (i == objbar.length - 1) {
              url = ''
            }
            let showmenu = { name: itemmenu.name, url }
            this.showbar.push(showmenu)
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/productshow/life.scss';
</style>
