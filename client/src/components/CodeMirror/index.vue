<template>
    <codemirror ref="myCmd" v-model="content" :options="cmOptions"></codemirror>
</template>
<script>
  import { codemirror } from 'vue-codemirror'
  import "codemirror/mode/python/python.js"
  // import "codemirror/addon/fold/foldcode.js"
  // import "codemirror/addon/fold/foldgutter.js"
  // import "codemirror/addon/fold/brace-fold.js"
  // import "codemirror/addon/fold/xml-fold.js"
  // import "codemirror/addon/fold/indent-fold.js"
  // import "codemirror/addon/fold/markdown-fold.js"
  // import "codemirror/addon/fold/comment-fold.js"
  // 基础样式
  import "codemirror/lib/codemirror.css"
  // 主题样式
  import "codemirror/theme/dracula.css"
  export default {
    name: "CodeMirror",
    components: {
      codemirror
    },
    props: {
        fileData: {
            type: String,
            default: "# -*- coding:utf-8 -*- \n"
        }
    },
    data() {
      return {
        content: '',
        cmOptions: {
          value: '',
          tabSize: 4,    // 制表符宽度
          mode: 'python',
          theme: 'dracula', // 设置主题
          lineNumbers: true, //是否显示行数
          lineWrapping: true,
          extraKeys: {"Ctrl": "autocomplete"}, // 按键配置
          lineWiseCopyCut: true,
          showCursorWhenSelecting: true,
          matchBrackets: true,
          line: true,
          readOnly: false,    // 只读
          indentUnit: 4    // 缩进
        }
      }
    },
    watch: {
      'content': function () {
        this.$emit('getItem', this.content);
      }
    },
    created() {
        this.content = this.fileData
    }
  }
</script>
<style lang="scss" scoped>

  /deep/ .CodeMirror {
    width:100%;
    min-height: 600px;
    overflow-y: scroll !important;
    padding:0;
    text-align:left;

    font-size: 11pt;

    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;

  }

</style>
