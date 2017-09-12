<template>
  <div class="top">
    <div class="user-photo">
      <a class="img" title="logo"><img src="./face.jpg"></a>
      <p>题库职业APP<br>管控后台</p>
    </div>
    <div class="head-top">
        <el-tabs  class="row-first" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <el-button  type="text">默认按钮1</el-button>
            <el-button  type="text">默认按钮1</el-button>
            <el-button  type="text">默认按钮1</el-button>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">
            <el-button  type="text">默认按钮2</el-button>
            <el-button  type="text">默认按钮2</el-button>
            <el-button  type="text">默认按钮2</el-button>
          </el-tab-pane>
          <el-tab-pane label="角色管理" name="third">
            <el-button  type="text">默认按钮3</el-button>
            <el-button  type="text">默认按钮3</el-button>
            <el-button  type="text">默认按钮3</el-button>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">
            <el-button  type="text">默认按钮4</el-button>
            <el-button  type="text">默认按钮4</el-button>
            <el-button  type="text">默认按钮4</el-button>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>


<style>
  .top{
    height: 100px;
    width: 100%;
    background-color: black;
    color: white;
    position: fixed;
    z-index: 5000;
  }
  .user-photo {
    width: 200px;
    height: 120px;
    float: left;
    border-right: 2px solid #fff;
    position: relative;
  }
  .user-photo a.img {
    display: block;
    width: 76px;
    height: 76px;
    float:left;
    margin-top: 8px;
  }
  .user-photo a.img img {
    display: block;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border: 4px solid #44576b;
  }
  .user-photo p {
    display: block;
    width: 90px;
    overflow: inherit ;
    height: 50px;
    font-size: 16px;
    color: #ffffff;
    white-space: nowrap;
    line-height: 35px;
    padding-top: 3px;
    padding-left: 95px
  }
  .head-top .row-first{
    margin-left: 200px;
    width: 50%;
    border-bottom: 0px;
  }
  .head-top{
    margin-left: 20px;
  }
  .head-top .row-first button{
    float: left;
    margin: auto 10px
  }
  .el-tabs__header{
    border-bottom: 0px;
  }
  .el-tabs__item:hover{
    color: #8391a5
  }

</style>
