<template>
    <div class="stepRight">
      <el-steps :space="120" direction="vertical" :active="1" class="step">
        <el-step title="编辑" icon="edit" ></el-step>
        <el-step title="上传" icon="upload"></el-step>
        <el-step title="完成" icon="check"></el-step>
      </el-steps>
    </div>
</template>


<script type="text/ecmascript-6">

</script>

<style>
  .stepRight{
    position: fixed;
    height: 100%;
    width: 100px;
    top: 100px;
    right: 100px;
    padding-left: 80px;
    border-left: 2px dotted red;

    display: -webkit-flex;
    display: flex;
  }
  .stepRight .step{
    position: fixed;
    margin-top: 300px;
  }

</style>
