<template>
  <div id="interview-process-id">
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
        <el-form-item label="面试状态">
          <el-select
            size="small"
            v-model="formInline.status"
            clearable
            placeholder="面试状态"
          >
            <el-option
              v-for="e in interviewProcess"
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
          <el-button size="small" type="primary" @click="onSubmit()"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格主体 -->
    <div class="interview-table-div">
      <el-table
        :data="interviewList"
        max-height="500"
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
        <el-table-column
          prop="statusName"
          sortable
          label="面试状态"
          width="160px"
        >
          <template slot-scope="scope">
            <el-tag :type="interviewStatusType(scope.row)">{{
              scope.row.statusName
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="interviewer" label="面试官"> </el-table-column>
        <el-table-column prop="interviewTime" label="面试时间" width="150px">
        </el-table-column>
        <el-table-column prop="operateTime" label="操作时间" width="150px">
        </el-table-column>
        <el-table-column prop="operator" label="操作人"> </el-table-column>
        <el-table-column label="操作" fixed="right" width="130px">
          <template slot-scope="scope">
            <el-button @click="checkResume(scope.row)" type="text" size="small"
              >简历</el-button
            >
            <!-- 面评页面-包含面试历史进度 -->
            <el-button @click="checkRemarks(scope.row)" type="text" size="small"
              >面评</el-button
            >
            <!-- 本轮通过-包含安排：面试官、面试时间、面试链接 -->
            <el-button
              v-if="scope.row.statusName.match('结束')"
              @click="handlePass(scope.row)"
              type="text"
              size="small"
              >本轮通过</el-button
            >
            <el-button
              v-if="scope.row.statusName.match('结束')"
              @click="handleOut(scope.row)"
              type="text"
              size="small"
              >本轮失败</el-button
            >
            <el-button
              v-if="scope.row.statusName.match('面试中')"
              @click="checkResume(scope.row)"
              type="text"
              size="small"
              >面试时间</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 查看面试评价 -->
      <el-drawer
        :title="remarksTitle"
        :visible.sync="table"
        direction="rtl"
        size="40%"
      >
        <el-table :data="remarksList">
          <el-table-column
            property="operator"
            label="操作人"
            width="80px"
          ></el-table-column>
          <el-table-column
            property="operateTime"
            label="操作时间"
          ></el-table-column>
          <el-table-column property="statusName" label="状态"></el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">
              <p v-if="scope.row.remarks">{{ scope.row.remarks }}</p>
              <el-button v-else @click="openRemarksDialog(scope.row.hisId)"
                >添加</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-drawer>
      <!-- 创建面评的弹框 -->
      <el-dialog
        title="请提交面试评价"
        :visible.sync="remarksDialogVisible"
        width="30%"
        center
      >
        <el-input v-model="remarksNew" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="remarksDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="createRemarks">提 交</el-button>
        </span>
      </el-dialog>
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
  name: "InterviewProcess",
  data() {
    return {
      formInline: {
        positionName: "",
        name: "",
        status: "",
        recruitType: "",
        processStatus: "",
      },
      interviewProcess: [],
      recruitTypes: [],
      interviewList: [],
      table: false,
      remarksTitle: "",
      remarksList: [],
      remarksDialogVisible: false,
      remarksHisId: "",
      remarksNew: "",

      size: 10,
      page: 1,
      total: 0,
      pages: 0,
    };
  },
  created() {
    this.formInline.processStatus = 2;
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
    // 加载面试状态
    getProcessStatus() {
      axios({
        method: "get",
        url: "http://localhost:8082/process/getProcessStatus",
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.interviewProcess = res.data.interviewProcess;
        } else {
          console.log("加载简历状态多选框元素失败");
        }
      });
    },
    // 获取面试进程
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
          this.interviewList = res.data.data;
          // 更新分页信息
          this.size = res.data.size;
          this.page = res.data.page;
          this.total = res.data.total;
          this.pages = res.data.pages;
        } else {
          this.$message({
            message: "加载面试列表失败!" + res.msg,
            type: "error",
          });
          console.log("加载面试列表失败");
        }
      });
    },
    // 查询面试记录及面评
    getRemarks(id) {
      axios({
        method: "get",
        url: "http://localhost:8082/process/getRemarks",
        params: {
          id: id,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.remarksList = res.data;
        } else {
          console.log("加载面试记录失败");
        }
      });
    },
    // 打开面评提示框
    openRemarksDialog(hisId) {
      this.remarksDialogVisible = true;
      this.remarksHisId = hisId;
    },
    // 添加面试评价
    createRemarks() {
      if (this.remarksNew == null || this.remarksNew.trim() == "") {
        this.$message({
          message: "面试评价不可为空!",
          type: "error",
        });
        return;
      }
      if (
        this.$store.state.user.username == null ||
        this.$store.state.user.username == ""
      ) {
        this.$message({
          message: "未登录!",
          type: "error",
        });
        return;
      }
      axios({
        method: "post",
        url: "http://localhost:8082/process/createRemarks",
        data: {
          operator: this.$store.state.user.username,
          hisId: this.remarksHisId,
          remarks: this.remarksNew,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          // 关闭弹框
          this.remarksDialogVisible = false;
          // 关闭面试评价列表
          this.table = false;
          this.$message({
            message: "添加面试评价成功!",
            type: "success",
          });
          console.log("添加面试评价成功");
        } else {
          this.$message({
            message: "添加面试评价失败!" + res.msg,
            type: "error",
          });
          console.log("添加面试评价失败" + +res.msg);
        }
      });
    },
    // 列表条件查询
    onSubmit() {
      console.log("查询面试");
      this.getProcessList();
    },
    interviewStatusType(row) {
      let statusName = row.statusName;
      if (statusName.match("待安排") || statusName.match("结束")) {
        return "primary";
      }
      if (statusName.match("面试中")) {
        return "info";
      }
      if (statusName.match("失败")) {
        return "danger";
      }
      if (statusName.match("通过")) {
        return "success";
      }
      return "info";
    },
    // 查询面试评价列表
    checkRemarks(row) {
      this.table = true;
      this.remarksTitle = "「" + row.name + "」" + "投递列表";
      this.getRemarks(row.id);
    },
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
    // 操作-本轮面试通过
    handlePass(row) {
      let statusName = row.statusName;
      let status = "";
      let processStatus = row.processStatus;
      if (statusName == "一面/结束") {
        status = "2_1_4";
        statusName = "一面/通过";
      } else if (statusName == "二面/结束") {
        status = "2_2_4";
        statusName = "二面/通过";
      } else if (statusName == "三面/结束") {
        status = "3_1";
        statusName = "面试通过";
        // 进入"最后流程"
        processStatus = 3;
      }
      this.handleUpdateProcess(row.id, processStatus, status, statusName);
    },
    // 操作-本轮面试失败
    handleOut(row) {
      let statusName = row.statusName;
      let status = "";
      let processStatus = row.processStatus;
      if (statusName == "一面/结束") {
        status = "2_1_5";
        statusName = "一面/失败";
      } else if (statusName == "二面/结束") {
        status = "2_2_5";
        statusName = "二面/失败";
      } else if (statusName == "三面/结束") {
        status = "2_3_5";
        statusName = "三面/失败";
      }
      this.handleUpdateProcess(row.id, processStatus, status, statusName);
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
</style>
