<template>
  <div>
    <bedchose></bedchose>
    <productshow :productType="type_id" />
  </div>
</template>

<script>
import productshow from "@/components/content/productshow";
import bedchose from "./bedchose";
export default {
  name: "lifeapp",
  data() {
    return {
      type_id: 3
    };
  },
  components: {
    productshow,
    bedchose
  }
};
</script>
<style scoped lang="scss">
@import "~assets/css/productshow/life.scss";
</style>
