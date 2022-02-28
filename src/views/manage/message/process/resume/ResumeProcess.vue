<template>
  <div id="resume-process-id">
    <!-- 表格搜索 -->
    <div class="table-query-class">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="职位名称">
          <el-input
            size="small"
            v-model="formInline.positionName"
            clearable
            placeholder="职位名称"
          />
        </el-form-item>
        <el-form-item label="候选人">
          <el-input
            size="small"
            v-model="formInline.name"
            clearable
            placeholder="候选人"
          />
        </el-form-item>
        <el-form-item label="简历状态">
          <el-select
            size="small"
            v-model="formInline.status"
            clearable
            placeholder="简历状态"
          >
            <el-option
              v-for="e in resumeProcess"
              :key="e.status"
              :label="e.statusName"
              :value="e.status"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="招聘类型">
          <el-select
            size="small"
            v-model="formInline.recruitType"
            clearable
            placeholder="招聘类型"
          >
            <el-option
              v-for="e in recruitTypes"
              :key="e.id"
              :label="e.typeName"
              :value="e.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格主体 -->
    <div class="resume-table-div">
      <el-table
        :data="resumeList"
        max-height="500"
        :row-class-name="tableRowClassName"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="姓名"
          width="100px"
        ></el-table-column>
        <el-table-column prop="phone" label="电话" width="130px">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="185px">
        </el-table-column>
        <el-table-column prop="positionName" label="投递岗位" width="200px">
        </el-table-column>
        <el-table-column prop="highestEducation" label="最高学历" width="80px">
        </el-table-column>
        <el-table-column prop="school" label="毕业学校" width="120px">
        </el-table-column>
        <el-table-column
          prop="statusName"
          sortable
          label="简历状态"
          width="110px"
        >
          <template slot-scope="scope">
            <el-tag
              :type="
                scope.row.statusName === '待处理'
                  ? 'primary'
                  : scope.row.statusName === '已通过'
                  ? 'success'
                  : 'info'
              "
              >{{ scope.row.statusName }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="deliveryTime" label="投递时间" width="150px">
        </el-table-column>
        <el-table-column prop="operatorTime" label="操作时间" width="150px">
        </el-table-column>
        <el-table-column prop="operator" label="操作人"> </el-table-column>
        <el-table-column label="操作" fixed="right" width="130px">
          <template slot-scope="scope">
            <el-button @click="checkResume(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button v-if="scope.row.statusName == '待处理'" @click="passResume(scope.row)" type="text" size="small"
              >通过</el-button
            >
            <el-button v-if="scope.row.statusName == '待处理'" @click="rejectResume(scope.row)" type="text" size="small"
              >拒绝</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 表格分页 -->
    <div class="table-page-class">
      <div class="pageBlock">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-size="size"
          layout="total, prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResumeProcess",
  data() {
    return {
      formInline: {
        positionName: "",
        name: "",
        status: "",
        recruitType: "",
        processStatus: "",
      },
      resumeProcess: [],
      recruitTypes: [],
      resumeList: [],

      size: 10,
      page: 1,
      total: 0,
      pages: 0,
    };
  },
  created() {
    this.formInline.processStatus = 1;
    this.init();
  },
  methods: {
    init() {
      this.getCitiesAndTypes();
      this.getProcessStatus();
      this.getProcessList();
    },
    // 加载招聘类型
    getCitiesAndTypes() {
      axios({
        method: "get",
        url: "http://localhost:8082/position/getCitiesAndTypes",
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          // this.cities = res.data.cities;
          // this.positionTypes = res.data.types;
          this.recruitTypes = res.data.recruitTypes;
        } else {
          console.log("加载招聘类型多选框元素失败");
        }
      });
    },
    // 加载简历状态
    getProcessStatus() {
      axios({
        method: "get",
        url: "http://localhost:8082/process/getProcessStatus",
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.resumeProcess = res.data.resumeProcess;
        } else {
          console.log("加载简历状态多选框元素失败");
        }
      });
    },
    // 获取简历进程
    getProcessList() {
      axios({
        method: "post",
        url: "http://localhost:8082/process/getProcessList",
        data: {
          positionName: this.formInline.positionName,
          name: this.formInline.name,
          status: this.formInline.status,
          recruitType: this.formInline.recruitType,
          processStatus: this.formInline.processStatus,
          size: this.size,
          page: this.page,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.resumeList = res.data.data;
          // 更新分页信息
          this.size = res.data.size;
          this.page = res.data.page;
          this.total = res.data.total;
          this.pages = res.data.pages;
        } else {
          this.$message({
            message: "加载简历列表失败!" + res.msg,
            type: "error",
          });
          console.log("加载简历列表失败");
        }
      });
    },
    onSubmit() {
      this.getProcessList();
    },
    // 查看简历
    checkResume(row) {},
    // 更新进程状态
    handleUpdateProcess(id, processStatus, status, statusName) {
      console.log("id, processStatus, status, statusName=>" + id+" "+ processStatus+" "+status+" "+statusName)
      axios({
        method: "post",
        url: "http://localhost:8082/process/updateProcessStatus",
        data: {
          id: id,
          operator: this.$store.state.user.username,
          processStatus: processStatus,
          status: status,
          statusName: statusName,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.$message({
            message: "更新进程成功!",
            type: "success",
          });
          this.getProcessList();
          console.log("更新进程成功");
        } else {
          this.$message({
            message: "更新进程失败!" + res.msg,
            type: "error",
          });
          console.log("更新进程失败" + +res.msg);
        }
      });
    },
    // 通过简历
    passResume(row) {
      let statusName = row.statusName;
      let status = "";
      let processStatus = row.processStatus;
      if (statusName == "待处理") {
        status = "2_1_1";
        statusName = "一面/待安排";
        processStatus = 2;
      }
      this.handleUpdateProcess(row.id, processStatus, status, statusName);
    },
    // 拒绝简历
    rejectResume(row) {
      let statusName = row.statusName;
      let status = "";
      let processStatus = row.processStatus;
      if (statusName == "待处理") {
        status = "1_3";
        statusName = "已拒绝";
      }
      this.handleUpdateProcess(row.id, processStatus, status, statusName);
    },
    tableRowClassName({ row, rowIndex }) {
      let resumeStatusName = row.resumeStatusName;
      // console.log("mxd " + resumeStatusName);
      if (resumeStatusName === "待处理") {
        return ".info-row";
      }
      return "";
      // if (rowIndex === 1) {
      //     return 'warning-row';
      //   } else if (rowIndex === 3) {
      //     return 'success-row';
      //   }
      //   return '';
    },
    // 分页事件
    // 每页数量变动事件
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 当前页变动事件
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.getProcessList();
    },
  },
  mounted() {},
};
</script>

<style scoped>
.table-page-class {
  float: right;
  margin-top: 10px;
}
.table-query-class {
}
.el-table .info-row {
  background: #aacefb;
}
</style>
