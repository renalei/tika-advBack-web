<template>
  <div class="content-text">
    <div class="table-style">
      <div class="search">
        <div class="top-line">
          <el-input v-model="input" placeholder="资讯大类"></el-input>
          <el-input v-model="input" placeholder="资讯小类"></el-input>
          <el-input v-model="input" placeholder="资讯名称"></el-input>
          <el-input v-model="input" placeholder="资讯类型"></el-input>
        </div>
        <div class="bottom-line">
          <el-input v-model="input" placeholder="创建机构"></el-input>
          <el-input v-model="input" placeholder="创建时间起"></el-input>
          <el-input v-model="input" placeholder="创建时间起"></el-input>
          <el-input v-model="input" placeholder="创建人"></el-input>
          <el-button type="primary" icon="plus" style="margin-left: 20px">新建资讯类别</el-button>
        </div>
      </div>

      <el-table :data="tableData2"  :row-class-name="tableRowClassName">
        <el-table-column  prop="num"  label="序号" width="80"></el-table-column>
        <el-table-column  prop="big"  label="资讯大类"   width="100"></el-table-column>
        <el-table-column  prop="small"  label="咨询小类" width="100"></el-table-column>
        <el-table-column  prop="type"  label="咨询类型" width="100"></el-table-column>
        <el-table-column  prop="way" label="维护方式"  width="100"></el-table-column>
        <el-table-column  prop="status" label="状态"  width="80"></el-table-column>
        <el-table-column  prop="remark" label="备注"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: [
          {
            num: 1,
            big: '静态新闻',
            small: '考试指南',
            type: '静态',
            way: '手动',
            status: '生效',
            remark: '这是一段注释文字'
          },
          {
            num: 2,
            big: '静态新闻',
            small: '考试指南',
            type: '静态',
            way: '手动',
            status: '生效'
          },
          {
            num: 3,
            big: '静态新闻',
            small: '考试指南',
            type: '静态',
            way: '手动',
            status: '生效'
          },
          {
            num: 4,
            big: '静态新闻',
            small: '考试指南',
            type: '静态',
            way: '手动',
            status: '生效'
          }
        ]
      }
    }
  }
</script>

<style>
  .content-text{
    background-color: antiquewhite;
    left: 202px;
    margin-left: 200px
  }
  .content-text .table-style{
    float: left;
    width: 55%;
    height: 40px;
    font-size: 25px;
    text-align: left;
    margin-left: 5px;
    margin-top: 100px;
    margin-bottom: 0px;
  }
  .el-table .info-row {
    background: #c9e5f5;
  }
  .content-text .table-style .search{
    height: 90px;
    margin-top: 10px;
    margin-bottom: 20px;
    border-bottom: 2px dotted #000;
  }
  .content-text .table-style .search .bottom-line{
    margin-top: 9px;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
  .search .el-input{
    width: 20%;
    display: inline-block;
  }

</style>
