<template>
  <Upload multiple :before-upload="handleUpload" :class="uploadClass" :type="isSelect? 'select':'drag'" :action="uploadUrl">
    <div style="padding: 20px 0" v-if="!isSelect">
      <Icon  type="ios-cloud-upload" :size="IconSize"></Icon>
      <p v-if="uploadMsg !== ''">{{ uploadMsg }}</p>
    </div>
    <Button v-else icon="ios-cloud-upload-outline"  type="success">{{ uploadMsg }}</Button>
  </Upload>
</template>

<script>
  export default {
    name: "UploadFiles",
    props: {
      isClickUpload: {     // 是否点击上传 点击上传文件回调在 getFileList 内
        type: Boolean,
        default: false
      },
      uploadClass: {    // 样式
        type: Object
      },
      isSelect: {       // 是否支持拖拽上传 默认 不支持
        type: Boolean,
        default: true
      },
      IconSize: {         // 拖拽上传框icon 大小
        type: String,
        default: "52"
      },
      uploadMsg: {       // 上传按钮显示内容
        type: String,
        default: "文件上传"
      },
      uploadUrl: {       // 上传路径
        type: String,
        default: ""
      }
    },
    data() {
      return {
        fileList: []

      }
    },
    watch: {
      'fileList': function () {
        this.$emit('getFileList', this.fileList)
      }
    },
    methods: {
      handleUpload(fileList) {
        this.fileList = fileList;
        return !this.isClickUpload
      },
    }

  }
</script>

<style scoped>

</style>