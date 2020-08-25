<template>
  <div class="home">
    <!-- <img :src="require('@/assets/images/bed/0035-0.png')"> -->
    <!-- <img src="@/assets/images/bed/0035-0.png"> -->
    <el-carousel :interval="4000" arrow="never">
      <el-carousel-item v-for="item in ProdeuctList[0]" :key="item.id">
        <!-- <router-link :to="'/productdetails/'+item.Pro_id"> -->
        <router-link :to="{ path: '/productdetails/' + item.Pro_id }">
          <img :src="require(`../../assets/images/${item.Banner_src}`)" class="banner_img" />
          <!-- <router-link :to="{path: '/supply/information/' +aId + '/edit' }" exact title="�༭"> �༭ </router-link> -->
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div class="largeproduct">
      <div v-for="item in ProdeuctList[1]" :key="item.id" class="bigPro_img">
        <router-link :to="{ path: '/productdetails/' + item.Pro_Id }">
          <img :src="require(`../../assets/images/${item.Pro_Url}`)" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

// import hotShop from "./components/hotShop";
import {
  getHomeInfo,
  getDetail,
  getProductList,
  login,
  register,
  getProductDetail
} from '@/network/home'

export default {
  name: 'Home',
  data() {
    return {
      ProdeuctList: []
    }
  },
  components: {},
  created() {
    // register().then(res => {
    //   console.log(res)
    // })

    getHomeInfo()
      .then(res => {
        this.ProdeuctList = res.data.data
        console.log(this.ProdeuctList)
      })
      .catch(e => {
        console.log(e)
      })
    // getProductDetail().then(res => {
    //   console.log(res)
    // })
  }
}
</script>
<style lang="scss">
@import '~assets/css/home/home.scss';
</style>
