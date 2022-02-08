<template>
  <div id="interview-process-id">
    <!-- 表格搜索 -->
    <div class="table-query-class">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="职位名称">
          <el-input size="small" v-model="formInline.positionName" placeholder="职位名称" />
        </el-form-item>
        <el-form-item label="候选人">
          <el-input size="small" v-model="formInline.candidate" placeholder="候选人" />
        </el-form-item>
        <el-form-item label="面试状态">
          <el-select size="small"
            v-model="formInline.interviewStatusName"
            placeholder="面试状态"
          >
            <el-option
              v-for="item in interviewStatusNames"
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
    <div class="interview-table-div">
      <el-table :data="interviewList" max-height="500" border style="width: 100%">
          <el-table-column prop="name" label="姓名" width="100px"></el-table-column>
          <el-table-column prop="phone" label="电话" width="130px"> </el-table-column>
          <el-table-column prop="email" label="邮箱" width="185px"> </el-table-column>
          <el-table-column prop="deliveryPost" label="投递岗位" width="200px"> </el-table-column>
          <el-table-column prop="interviewStatusName" sortable label="面试状态" width="160px">
            <template slot-scope="scope">
              <el-tag :type="interviewStatusType(scope.row)" >{{scope.row.interviewStatusName}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="interviewer" label="面试官"> </el-table-column>
          <el-table-column prop="intervieTime" label="面试时间" width="150px"> </el-table-column>
          <el-table-column prop="operateTime" label="操作时间" width="150px"> </el-table-column>
          <el-table-column prop="operator" label="操作人"> </el-table-column>
          <el-table-column label="操作" fixed="right" width="130px">
            <template slot-scope="scope">
              <el-button @click="checkResume(scope.row)" type="text" size="small">简历</el-button>
              <!-- 面评页面-包含面试历史进度 -->
              <el-button @click="checkResume(scope.row)" type="text" size="small">面评</el-button>
              <!-- 本轮通过-包含安排：面试官、面试时间、面试链接 -->
              <el-button v-if="scope.row.interviewStatusName.match('面试结束')" @click="checkResume(scope.row)" type="text" size="small">本轮通过</el-button>
              <el-button v-if="scope.row.interviewStatusName.match('面试结束')" @click="checkResume(scope.row)" type="text" size="small">本轮失败</el-button>
              <el-button v-if="scope.row.interviewStatusName.match('中')" @click="checkResume(scope.row)" type="text" size="small">面试时间</el-button>
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
  name: "InterviewProcess",
  data() {
    return {
      formInline: {
        positionName: "",
        candidate: "",
        interviewStatusName: "",
        recruitType: "",
      },
      interviewStatusNames: [
        {
          value: "1",
          label: "一面",
        },
        {
          value: "xz",
          label: "二面",
        },
        {
          value: "sz",
          label: "三面",
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
      interviewList: [
        {
          'id': 1,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'interviewStatusName': '一面/待安排',
          'interviewer': '',
          'intervieTime': '',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 2,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'interviewStatusName': '一面/面试中',
          'interviewer': '马雪冬',
          'intervieTime': '2022-01-16 13:45',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 3,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'interviewStatusName': '一面/面试结束',
          'interviewer': '马雪冬',
          'intervieTime': '2022-01-16 13:45',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 4,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'interviewStatusName': '二面/流程结束',
          'interviewer': '马雪冬',
          'intervieTime': '2022-01-16 13:45',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 5,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'interviewStatusName': '三面/面试通过',
          'interviewer': '马雪冬',
          'intervieTime': '2022-01-16 13:45',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 6,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'interviewStatusName': '三面/面试结束',
          'interviewer': '马雪冬',
          'intervieTime': '2022-01-16 13:45',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 7,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'interviewStatusName': '三面/流程结束',
          'interviewer': '马雪冬',
          'intervieTime': '2022-01-16 13:45',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 8,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'interviewStatusName': '二面/待安排',
          'interviewer': '',
          'intervieTime': '',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
      ]
    };
  },
  methods: {
    onSubmit() {

    },
    interviewStatusType(row) {
      let interviewStatusName = row.interviewStatusName
      console.log(interviewStatusName)
      if (interviewStatusName.match('安排') || interviewStatusName.match('面试结束')) {
        return 'primary'
      }
      if (interviewStatusName.match('中')) {
        return 'info'
      }
      if (interviewStatusName.match('流程结束')) {
        return 'danger'
      }
      if (interviewStatusName.match('通过')) {
        return 'success'
      }
      return 'info'
    }
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
