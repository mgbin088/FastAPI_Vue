<template>
  <div class="create-container">
    <el-form ref="postForm" :model="postForm" class="form-container">
      <sticky :z-index="10" :class-name="'sub-navbar ' + postForm.status">
        <uploadfiles style="margin-left: 10px; display: inline-block" :upload-url="uploadUrl"></uploadfiles>
        <Button style="margin-left: 10px; display: inline-block" type="success">保存</Button>
      </sticky>
      <div class="create-main-container">
        <el-form-item style="margin-bottom: 40px;">
          <label class="material-label">
            文件名:
          </label>
          <Input type="text" v-model="item.fileName" maxlength="100" class="material-input"></Input>
        </el-form-item>
        <el-form-item>
          <codemirror :fileData="item.fileData" @getItem="getItem"></codemirror>
        </el-form-item>

      </div>
    </el-form>
  </div>
</template>
<script>
  import codemirror from '@/components/CodeMirror'
  import uploadfiles from '@/components/UploadFiles'
  import { get, post } from '@utils/axios'
  import Sticky from "./sticky"
  export default {
    name: 'ArticleDetail',
    components: {codemirror, Sticky, uploadfiles},
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        postForm: {
          status: 'draft'
        },
        item: {
          fileName: "",
          fileData: 'a=15'
        },
        uploadUrl: ""
      }
    },
    computed: {

    },
    created() {
      const urlList = this.$route.path.split("/");
      console.log(urlList[urlList.length - 1])
    },
    methods: {
      getItem(fileData) {
        this.item.fileData = fileData;
      },
      getFileData() {
        get("").then(res => {
          if (res.status === 200) {

          }
        })
      },
      updateScript() {
        post("").then(res => {
          if (res.status === 200) {

          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/mixin.scss";
  .create-container {
    position: relative;
    .create-main-container {
      padding: 40px 45px 20px 50px;
    }
  }
</style>