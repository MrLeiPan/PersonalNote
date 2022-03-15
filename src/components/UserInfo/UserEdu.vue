<template>
  <div class="eduShow">
    <el-scrollbar max-height="500px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="入学时间" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 10px">{{ scope.row.enterSchool }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="毕业时间" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 10px">{{ scope.row.graduateSchool }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="学历" width="180">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
  <!--            <template #default>
                <div>name: {{ scope.row.name }}</div>
                <div>address: {{ scope.row.education }}</div>
              </template>-->
              <template #reference>
                <el-tag>{{ scope.row.education }}</el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="学校" width="180">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
  <!--            <template #default>
                <div>name: {{ scope.row.name }}</div>
                <div>address: {{ scope.row.schoolName }}</div>
              </template>-->
              <template #reference>
                <el-tag>{{ scope.row.schoolName }}</el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-scrollbar>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加教育经历</el-button>
  </div>
</template>

<script>
import {ElTable,ElTableColumn,ElPopover,ElButton,ElScrollbar} from 'element-plus'
  export default {
    name: "UserEdu",
    data(){
      return{
        tableData: [{
          enterSchool: '2017-05-02',
          graduateSchool:'2022-05-02',
          education: '本科',
          schoolName: '浙江工商大学'
        }, {
          enterSchool: '2017-05-02',
          graduateSchool:'2022-05-02',
          education: '硕士',
          schoolName: '浙江大学'
        }]
      }
    },
    components:{
      ElTable,ElTableColumn,ElPopover,ElButton,ElScrollbar
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      onAddItem(){
        this.tableData.push({
          enterSchool: '2017-05-02',
          graduateSchool:'2022-05-02',
          education: '本科',
          schoolName: '浙江工商大学'
        })
      }

    }
  }
</script>

<style scoped>

</style>