<template>
  <div class="formRight">
    <el-form ref="form" :model="form" label-width="80px" class="form-style">
      <el-form-item label="挂靠考试:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="考试科目:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="考试行业:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="考试类型:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="考试范围:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="考试安排:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="考试频度:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="考试性质:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style>
  .formRight{
    position: fixed;
    width: 350px;
    height: 100%;
    float: right;
    right: 350px;
    top: 100px;
    border-left: 2px dotted red;
  }
  .formRight .form-style{
    margin-top: 50px;
    margin-left: 10px;
  }
</style>
