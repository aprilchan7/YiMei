<template>
    <div class="goods"> 
        <!-- <em class="left" v-if="this.chooseUrl.length>=4" @click="turnLeft(this)">&lt;</em>
        <em class="right" v-if="this.chooseUrl.length>=4" @click="turnRight">&gt;</em> -->
        <router-link to="#" class="bigImgBox" tag="div">
          <img :src="require(`../../assets/images/${bigImgUrl}`)" class="big">
        </router-link>
        <ul class="little">
          <li v-for="(item,index) in chooseUrl" :key="item.id"  :class="active==index ? 'imgBorder' : ''">
            <img :src="require(`../../assets/images/${item.Pro_Url}`)" @click.stop="change(chooseUrl,index,bigImgUrl)">      
          </li>
        </ul>
        <p>
          <span>¥{{price}}</span>
        </p>
        <router-link to="#" active-class="active" class="textHide" style="color:#6B6B6B">{{tittle}}</router-link>
      </div> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'showbox',
  data(){
     return{
      active:0, 
      bigImgUrl:""
    }
  },
  props:['imgSrc','price','tittle'],
components:{
    
},
created(chooseUrl){
  this.bigImgUrl = this.chooseUrl[0].Pro_Url;
  // console.log(this.chooseUrl)
},

methods: {
  change(chooseUrl,index,bigImgUrl){
    this.active=index;
    this.bigImgUrl= chooseUrl[index].Pro_Url;
  },
  turnLeft(obj){
    let turnLeft = document.getElementsByClassName("little")
    console.log(this)
  },
  turnRight(){
    // console.log(turnRight)
  },
},
computed: {
  chooseUrl: function () {
    return this.imgSrc.filter(function (imgSrc) {
      return imgSrc.Type==3
    })
  } 
}

}
</script>
<style scoped lang="scss">

@import "~assets/css/productshow/life.scss";
</style>