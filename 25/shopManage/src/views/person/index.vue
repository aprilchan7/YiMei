<template>
  <div id="person">
    <h1>我是个人中</h1>
<!--    <search></search>-->
    <head></head>
    动态路由参数 {{$route.params.id}}
  </div>
</template>


<script>
  import head from "./components/head";
// import { formatNum } from '../../toolkit'

export default {
  name: 'person',
  methods: {},
  components:{
    search:search,
    head:head
  }

}
</script>
