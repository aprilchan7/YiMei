<template>
  <div class="about">
    <h1>This is an about page {{formatNum(10223)}}</h1>
  </div>
</template>


<script>
import { formatNum } from '../../toolkit'
export default {
  name: 'about',
  methods: {
    formatNum
  }
}
</script>