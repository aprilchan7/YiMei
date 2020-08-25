<template>
  <div id="myT">
    <!--      <button>点击收藏</button>-->
    <!--      v-if="tanchu"-->
    <div id="myC" v-if="tanchu">
      <div class="quit">
        <slot name="mySlot"></slot>    <!--插槽-->
        <!--          <img src="../../../assets/images/home/cha2.jpg" alt="" @click="myClose">-->
      </div>

      <div class="daGou">
        <img src="../../../assets/images/home/dui2.jpg" alt="">
        <span>收藏成功</span>
      </div>

      <div class="tishiyu">
          <span>您可以在          <!--插槽2-->
            <slot name="mySlot2"></slot>中进行查看您还收藏了哪些商品</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myCollect",
    data(){
      return {
        tanchu:1
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  #myC {
    width: 600px;
    height: 310px;
    background-color: rgb(243,236,230);
    border-radius: 5px;

  }
  .quit {
    text-align: right;
    padding-right: 30px;
    padding-top: 30px;
  }

  .daGou {
    margin-top: 100px;
  }
  .daGou span {
    font-size: 16px;
    color: rgb(99,82,72);
    margin-left: 10px;
  }
  .daGou img {
    vertical-align: middle;
  }

  .tishiyu {
    margin-top: 30px;
  }
  .tishiyu span {
    font-size: 12px;
  }
  .tishiyu a {
    text-decoration: none;
    color: red;
  }
  .tishiyu a:hover {
    text-decoration: underline;
  }
</style>
