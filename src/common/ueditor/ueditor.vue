<template>
  <div class="ue-style">
    <div :id=id></div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          editor: null
        }
      },
      props: {
        defaultMsg: {
          type: String
        },
        config: {
          type: Object
        },
        id: {
          type: String
        },
      },
      mounted() {
        const _this = this;
        this.editor = UE.getEditor(this.id, this.config); // 初始化UE
        this.editor.addListener("ready", function () {
          _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
        });
      },
      methods: {
        getUEContent() { // 获取内容方法
          return this.editor.getContent()
        }
      },
      destroyed() {
        this.editor.destroy();
      }
    }
    </script>
    <style>
      .edui-default .edui-toolbar {
        /*left: -600px;*/
        width: 700px;
        overflow: inherit
      }
      .edui-default .edui-toolbar {

      }
      .ue-style{
          margin-left: 5px;
       }
    </style>
