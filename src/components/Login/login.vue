<template>
  <div>
    <video class="video-player" preload="auto" autoplay="autoplay" loop="loop" data-height="1080" data-width="1920" height="1080" width="1920">
      <source src="./login.mp4" type="video/mp4">
      <!-- 此视频文件为支付宝所有，在此仅供样式参考，如用到商业用途，请自行更换为其他视频或图片，否则造成的任何问题使用者本人承担，谢谢 -->
    </video>
    <div class="video_mask"></div>
    <div class="login">
      <h1>tika信息网-管理登录</h1>
      <form class="layui-form">
        <div class="layui-form-item">
          <input class="layui-input" name="username" placeholder="用户名" lay-verify="required" type="text" autocomplete="off">
        </div>
        <div class="layui-form-item">
          <input class="layui-input" name="password" placeholder="密码" lay-verify="required" type="password" autocomplete="off">
        </div>
        <div class="layui-form-item form_code">
          <input class="layui-input" name="code" placeholder="验证码" lay-verify="required" type="text" autocomplete="off">
          <div class="code">
            <img src="./code.jpg" width="116" height="36">
          </div>
        </div>
        <button class="layui-btn login_btn" lay-submit="" lay-filter="login" @click="login">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      login(){
        this.$router.push({'path': '/index'})
      }
    }
  }
</script>

<style>
  .video-player {
    background-color: transparent;
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
  }
  body {
    overflow: hidden;
  }
  .login {
    height: 260px;
    width: 260px;
    padding: 20px;
    background-color: rgba(0,0,0,0.5);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -150px;
    z-index: 99;
  }
  form {
    display: block;
    margin-top: 0em;
  }
  .layui-form-item {
    margin-bottom: 15px;
    clear: both;
  }
  .form_code {
    position: relative;
  }
  .login h1 {
    text-align: center;
    color: #fff;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .layui-input, .layui-textarea {
    display: block;
    width: 100%;
    padding-left: 10px;
  }
  .layui-input, .layui-select, .layui-textarea {
    height: 36px;
    line-height: 38px;
    line-height: 36px\9;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    border-radius: 2px;
  }
  .form_code .code {
    position: absolute;
    right: 0;
    top: 1px;
    cursor: pointer;
  }
  img {
    display: inline-block;
    border: none;
  }
  .layui-btn, .layui-inline, img {
    vertical-align: middle;
  }
  .login_btn {
    width: 100%;
  }
  .layui-btn {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 18px;
    background-color: #009688;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    opacity: .9;
    filter: alpha(opacity=90);
  }
  .layui-input {
    display: block;
    width: 96%;
    padding-left: 10px;
  }
  button, input, optgroup, option, select, textarea {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    outline: 0;
  }
  blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .video_mask {
    width: 100%;
    height: 130%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 90;
    background-color: rgba(0,0,0,0.5);
  }

</style>


