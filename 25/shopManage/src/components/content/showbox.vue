<template>
  <div class="goods">
    <!-- <em class="left" v-if="this.chooseUrl.length>=4">&lt;</em>
    <em class="right" v-if="this.chooseUrl.length>=4">&gt;</em>-->
    <router-link :to="{path: '/productdetails/' +Pro_Id }" class="bigImgBox" tag="div">
      <div :class="getflag"></div>
      <img :src="bigImgUrl && require(`../../assets/images/${bigImgUrl}`)" class="big" />
    </router-link>
    <ul class="little">
      <li
        v-for="(item,index) in chooseUrl"
        :key="item.id"
        :class="active==index ? 'imgBorder' : ''"
      >
        <img
          :src="require(`../../assets/images/${item.Pro_Url}`)"
          @click.stop="change(chooseUrl,index,bigImgUrl)"
        />
      </li>
    </ul>
    <p>
      <span>¥{{price}}</span>
    </p>
    <router-link :to="{path: '/productdetails/' +Pro_Id }" class="textHide" tag="p">{{tittle}}</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'showbox',
  data() {
    return {
      active: 0,
      bigImgUrl: ''
    }
  },
  props: ['imgSrc', 'price', 'tittle', 'Pro_Id', 'Tag_Type'],
  components: {},
  created() {
    if (this.chooseUrl && this.chooseUrl.length > 0) {
      this.bigImgUrl = this.chooseUrl[0].Pro_Url
    }
    // this.bigImgUrl = this.chooseUrl[0].Pro_Url
    // console.log(this.bigImgUrl)
  },
  methods: {
    change(chooseUrl, index, bigImgUrl) {
      this.active = index
      this.bigImgUrl = chooseUrl[index].Pro_Url
      // console.log(this.bigImgUrl)
    }
  },
  computed: {
    chooseUrl: function() {
      const result = this.imgSrc.filter(function(imgSrc) {
        return imgSrc.Type == 2
      })
      return result
    },
    getflag: function() {
      let classname = ''
      switch (this.Tag_Type) {
        case 1:
          classname = 'hotflag'
          break
        case 2:
          classname = 'hotflag'
          break
        case 3:
          classname = 'newflag'
          break
        default:
          classname = ''
      }
      return classname
    }
  },
  watch: {
    Pro_Id: function() {
      if (this.chooseUrl && this.chooseUrl.length > 0) {
        this.bigImgUrl = this.chooseUrl[0].Pro_Url
      }
    }
  }
  // updated() {
  //   this.bigImgUrl = this.chooseUrl[0].Pro_Url
  // }
}
</script>
<style scoped lang="scss">
@import '~assets/css/productshow/life.scss';
</style>