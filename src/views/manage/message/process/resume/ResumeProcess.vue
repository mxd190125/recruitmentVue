<template>
  <div id="resume-process-id">
    <!-- 表格搜索 -->
    <div class="table-query-class">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="职位名称">
          <el-input size="small" v-model="formInline.positionName" placeholder="职位名称" />
        </el-form-item>
        <el-form-item label="候选人">
          <el-input size="small" v-model="formInline.candidate" placeholder="候选人" />
        </el-form-item>
        <el-form-item label="简历状态">
          <el-select size="small"
            v-model="formInline.resumeStatusName"
            placeholder="简历状态"
          >
            <el-option
              v-for="item in resumeStatusNames"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="招聘类型">
          <el-select size="small" v-model="formInline.recruitType" placeholder="招聘类型">
            <el-option
              v-for="item in recruitTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="onSubmit">查询</el-button>
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
        <el-table-column prop="deliveryPost" label="投递岗位" width="200px">
        </el-table-column>
        <el-table-column prop="highestEducation" label="最高学历" width="80px">
        </el-table-column>
        <el-table-column prop="graduationSchool" label="毕业学校" width="120px">
        </el-table-column>
        <el-table-column
          prop="resumeStatusName"
          sortable
          label="简历状态"
          width="110px"
        >
          <template slot-scope="scope">
            <el-tag
              :type="
                scope.row.resumeStatusName === '待处理'
                  ? 'primary'
                  : scope.row.resumeStatusName === '已通过'
                  ? 'success'
                  : 'info'
              "
              >{{ scope.row.resumeStatusName }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="deliveryTime" label="投递时间" width="150px">
        </el-table-column>
        <el-table-column prop="operateTime" label="操作时间" width="150px">
        </el-table-column>
        <el-table-column prop="operator" label="操作人"> </el-table-column>
        <el-table-column label="操作" fixed="right" width="130px">
          <template slot-scope="scope">
            <el-button @click="checkResume(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button @click="passResume(scope.row)" type="text" size="small"
              >通过</el-button
            >
            <el-button @click="rejectResume(scope.row)" type="text" size="small"
              >拒绝</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 表格分页 -->
    <div class="table-page-class">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeProcess",
  data() {
    return {
      formInline: {
        positionName: "",
        candidate: "",
        resumeStatusName: "",
        recruitType: "",
      },
      resumeStatusNames: [
        {
          value: "1",
          label: "待处理",
        },
        {
          value: "2",
          label: "已通过",
        },
        {
          value: "3",
          label: "已拒绝",
        },
      ],
      recruitTypes: [
        {
          value: "sx",
          label: "实习",
        },
        {
          value: "xz",
          label: "校招",
        },
        {
          value: "sz",
          label: "社招",
        },
      ],
      resumeList: [
        {
          id: 1,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "待处理",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 2,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "已通过",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 3,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "已通过",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 4,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "待处理",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 5,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "已拒绝",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 6,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "已拒绝",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 7,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "已通过",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 8,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "待处理",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        ,
        {
          id: 9,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "已通过",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 10,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "待处理",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        ,
        {
          id: 11,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "已通过",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
        {
          id: 12,
          name: "马雪冬",
          phone: "19981451191",
          email: "test@test.com",
          deliveryPost: "Java后端-国际化电商",
          highestEducation: "本科",
          graduationSchool: "成都大学",
          resumeStatusName: "待处理",
          deliveryTime: "2022-01-16 13:45",
          operateTime: "2022-01-16 13:45",
          operator: "马雪冬",
        },
      ],
    };
  },
  methods: {
    onSubmit() {},
    checkResume(row) {},
    passResume(row) {},
    rejectResume(row) {},
    tableRowClassName({ row, rowIndex }) {
      let resumeStatusName = row.resumeStatusName;
      console.log("mxd " + resumeStatusName);
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
