<template>
  <div>
    <productshow :productType="type_id" />
  </div>
</template>

<script>
import productshow from '@/components/content/productshow'
export default {
  name: 'lifeapp',
  data(){
      return{
        type_id:38
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