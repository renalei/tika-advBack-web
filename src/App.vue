<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
//import '../static/utf8-jsp/ueditor.config'
//import '../static/utf8-jsp/ueditor.all.min.js'
//import '../static/utf8-jsp/ueditor.parse.min'
//import '../static/utf8-jsp/lang/zh-cn/zh-cn'
  export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
