<template>
    <div id="addcollect" v-show="isshow">
        <div class="addcollect-body">
            <button type="button" title="关闭" @click="handle">X</button>
            <div class="addcollect-content">
                <table>
                    <tr>
                        <td>
                            <h3>收藏成功!</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            您可以在 <a href="#" target="_blank">我的收藏</a> 中进行查看您还收藏了哪些商品
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "addcollect",
        data(){
            return {
                 isshow:true
            }
        },
        methods:{
            handle(){
                this.isshow=false;
            }
        },
    }
</script>
<style lang="scss" scoped>
@import "~assets/css/pop_up/addcollect.scss";   
</style>