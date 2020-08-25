<template>
    <div id="addcart"  v-show="isshow">
        <div class="addcart-body">
            <div class="addcart-header">
                <span>
                    <button type="button" title="关闭" @click="handle">X</button>
                </span>
                 <h2>{{msg}}</h2>
            </div>
            <div class="addcart-content">
                <div>
                    <p class="p10">目前选购商品共
                        <span>{{kind}}</span> 种
                        <span>{{totalNum}}</span> 件  
                        合计：<span>¥{{totalPrice}}</span>
                    </p>
                    <div class="btnBar">
                        <button class="cart_btn btn-default" @click="gohome">继续购物</button>
                        <button class="cart_btn btn-danger" @click="gocart">去结算</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
   export default {
        name: "addcart",
        data(){
            return {
               msg:"成功加入购物车",

            }
        },
        props:['isshow','kind','totalNum','totalPrice'],
        methods:{
            handle(){
                this.$emit('showbox', this.isshow);
            },
            gohome(){
                this.$router.push("/home");
            },
            gocart() {
                this.$router.push("/cart");
            }

        },
   }
</script>
<style lang="scss" scoped>
@import "~assets/css/pop_up/addcart.scss";
</style>
