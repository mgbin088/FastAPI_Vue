<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="文件名">
        <template slot-scope="scope">
          <span>{{ scope.row.fileName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="详情">
        <template slot-scope="scope">
          <span>{{ scope.row.msg }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <router-link :to="'/script/edit/'+scope.row.id" class="link-type">
            <Button size="small">编辑</Button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "ScriptList",
    data () {
      return {
        list: [
          {
            id: '1',
            fileName: '打包',
            msg: '占位',
          },
          {
            id: '2',
            fileName: '打包',
            msg: '占位',
          },
          {
            id: '3',
            fileName: '打包',
            msg: '占位',
          }
        ],
        listLoading: false,
      }
    }
  }
</script>

<style scoped>

</style>