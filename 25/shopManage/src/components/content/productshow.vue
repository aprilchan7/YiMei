<template>
  <fragment>
    <div class="lifeapp" v-if="$store.state.showbox.showlist.length > 0 && this.listpro != null">
      <div class="sort">
        <ul>
          <li style="font-weight:bold;text-decoration:none;cursor: unset">排序方式：</li>
          <li>
            <a href="javascript:;" @click="sort('CreateDate')">
              最新
              <span v-if="sortByObject['CreateDate'] === 'asc'" class="icon iconfont">&#xe6db;</span>
              <span v-if="sortByObject['CreateDate'] === 'desc'" class="icon iconfont">&#xe6da;</span>
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="sort('Score')">
              销量
              <span v-if="sortByObject['Score'] === 'asc'" class="icon iconfont">&#xe6db;</span>
              <span v-if="sortByObject['Score'] === 'desc'" class="icon iconfont">&#xe6da;</span>
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="sort('Price')">
              价格
              <span v-if="sortByObject['Price'] === 'asc'" class="icon iconfont">&#xe6db;</span>
              <span v-if="sortByObject['Price'] === 'desc'" class="icon iconfont">&#xe6da;</span>
            </a>
            <!-- <span class="icon iconfont">&#xe6db;</span> -->
          </li>
          <!-- <li>
            <a href="javascript:;" @click="sort(4)">价格</a>
            <span class="icon iconfont">&#xe6da;</span>
          </li>-->
        </ul>
      </div>
      <ul class="products" v-if="listpro.length > 0">
        <li v-for="item in listpro" :key="item.id" class="items">
          <showbox
            :imgSrc="item.children"
            :price="item.Price"
            :tittle="item.Pro_Name"
            :Pro_Id="item.Pro_Id"
            :Tag_Type="item.Tag_Type"
          ></showbox>
        </li>
      </ul>
    </div>
    <div class="empty" v-if="busy && !loadAll">加载中...</div>
    <div class="empty" v-if="listpro.length > 0 && loadAll">亲，没有更多了...</div>
    <div class="empty" v-if="listpro && listpro.length === 0">暂无数据...</div>
  </fragment>
</template>

<script>
// import { formatNum } from '../../toolkit'
import { mapGetters, mapActions } from 'vuex'
import breadcrumbVue from '@/components/content/breadcrumb'
import showbox from './showbox'
export default {
  name: 'lifeapp',
  data() {
    return {
      sortby: 'CreateDate_desc',
      listpro: [],
      // type: "",
      loadAll: false,
      orderby: 'desc',
      busy: false,
      sortName: 'CreateDate',
      currentPage: 0
      // root: 0,
      // size: 0,
      // type: 0
      // key: ''
    }
  },
  props: ['productType'],
  components: {
    breadcrumbVue,
    showbox
  },
  created: async function() {
    this.getprolist()
    window.addEventListener('scroll', this.scroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    ...mapActions(['getshowlist']),
    scroll: function(a) {
      const body = document.body
      // const viewportHeight = body.offsetHeight
      // const scrollTop = body.scrollTop
      // console.log(scrollTop + window.innerHeight, viewportHeight, this.busy)
      // if (scrollTop + window.innerHeight+300 >= viewportHeight && !this.busy) {
      //   console.log('333333333333')
      //   this.getprolist()
      // }
      const viewportHeight = body.offsetHeight
      const scrollTop = document.documentElement.scrollTop
      // console.log(scrollTop, window.innerHeight, viewportHeight, this.busy)
      if (scrollTop + window.innerHeight >= viewportHeight && !this.busy) {
        this.getprolist()
      }
    },
    getprolist: function(currentPage) {
      if (currentPage) {
        this.currentPage = currentPage
      } else {
        this.currentPage += 1
      }
      // if (this.currentPage > this.totalSize) {
      //   return;
      // }

      console.log(this.currentPage)
      let data = {
        PageCount: 20,
        CurrentPage: this.currentPage,
        key: this.key,
        orderby: this.orderby, //排序方式
        sortName: this.sortName, //排序字段
        root: this.root, //根数
        size: this.size, //尺寸
        type: this.type, //类型
        P_Type_Menu_Id: this.$store.state.shopmenustore.navbar
      }
      this.busy = true

      const done = this.getshowlist(data)
        .then(result => {
          this.listpro =
            this.currentPage !== 1
              ? this.listpro.concat(this.showlist || [])
              : this.showlist
        })
        .finally(() => {
          if (this.totalSize <= this.currentPage) {
            console.log('到底了')
            this.loadAll = true
            return
          }
          this.busy = false
        })
    },
    //排序
    sort(key) {
      const sortBySplit = this.sortby.split('_')
      const currentKey = sortBySplit[0]
      const currentSortBy = sortBySplit[1]
      let sortBy = 'desc'
      if (key === currentKey) {
        if (currentSortBy === 'desc') {
          sortBy = 'asc'
        }
        if (currentSortBy === 'asc') {
          sortBy = 'desc'
        }
      }
      this.orderby = sortBy
      this.sortName = key
      this.sortby = `${key}_${sortBy}`
    },
    watchList: async function() {
      this.getprolist(1)
    }
  },
  computed: {
    ...mapGetters(['showlist', 'key', 'root', 'size', 'type', 'totalSize']),
    sortByObject() {
      const sortBySplit = this.sortby.split('_')
      return {
        [sortBySplit[0]]: sortBySplit[1]
      }
    }
  },
  watch: {
    '$store.state.showbox.key': function() {
      //监听vuex中userName变化而改变header里面的值
      this.watchList()
    },
    '$store.state.showbox.root': function() {
      //监听vuex中userName变化而改变header里面的值
      console.log('watch root')
      this.watchList()
    },
    '$store.state.showbox.size': function() {
      //监听vuex中userName变化而改变header里面的值
      console.log('watch size')
      this.watchList()
    },
    '$store.state.showbox.type': function() {
      //监听vuex中userName变化而改变header里面的值
      console.log('watch type')
      this.watchList()
    },
    orderby: function() {
      this.watchList()
    },
    sortName: function() {
      this.watchList()
    }
  }
}
</script>
<style scoped lang="scss">
@import '~assets/css/productshow/life.scss';
</style>
