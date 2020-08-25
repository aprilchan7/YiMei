<template>
  <div>
    <div class=bedchose>
    <ul>
      <li style="font-weight:bold;text-decoration:none;cursor:unset;color:#6B6B6B">风格：</li>
      <li>全部</li>
      <li>纯色</li>
      <li>格子</li>
      <li>条纹</li>
      <li>印花</li>
    </ul>
  </div>
    <productshow :productType="type_id" />
  </div>
</template>

<script>
import productshow from '@/components/content/productshow'
export default {
  name: 'lifeapp',
  data(){
      return{
        type_id:33
    }
  },
  components:{
    productshow
  }
} 
</script>
<style scoped lang="scss">
@import "~assets/css/productshow/life.scss";
</style>