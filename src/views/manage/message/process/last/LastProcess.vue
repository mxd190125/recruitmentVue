<template>
  <div id="last-process-id">
    <!-- 表格搜索 -->
    <div class="table-last-class">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="职位名称">
          <el-input size="small" v-model="formInline.positionName" placeholder="职位名称" />
        </el-form-item>
        <el-form-item label="候选人">
          <el-input size="small" v-model="formInline.candidate" placeholder="候选人" />
        </el-form-item>
        <el-form-item label="流程状态">
          <el-select size="small"
            v-model="formInline.processStatusName"
            placeholder="流程状态"
          >
            <el-option
              v-for="item in processStatusNames"
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
    <div class="last-table-div">
      <el-table :data="lastProcessList" max-height="500" border style="width: 100%">
          <el-table-column prop="name" label="姓名" width="100px"></el-table-column>
          <el-table-column prop="phone" label="电话" width="130px"> </el-table-column>
          <el-table-column prop="email" label="邮箱" width="185px"> </el-table-column>
          <el-table-column prop="deliveryPost" label="投递岗位" width="200px"> </el-table-column>
          <el-table-column prop="recruitType" sortable label="招聘类型" width="110px">
            <template slot-scope="scope">
              <el-tag :type="curRecruitType(scope.row)">{{scope.row.recruitType}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="processStatusName" sortable label="流程状态" width="120px">
            <template slot-scope="scope">
              <el-tag :type="curProcessType(scope.row)" >{{scope.row.processStatusName}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="remarks" label="备注" width="120px"> </el-table-column>
          <el-table-column prop="operateTime" label="操作时间" width="150px"> </el-table-column>
          <el-table-column prop="operator" label="操作人"> </el-table-column>
          <el-table-column label="操作" fixed="right" width="130px">
            <template slot-scope="scope">
              <el-button @click="checkResume(scope.row)" type="text" size="small">简历</el-button>
              <el-button @click="checkResume(scope.row)" type="text" size="small">面评</el-button>
              <el-button v-if="scope.row.processStatusName.match('拟offer')" @click="sendOffer(scope.row)" type="text" size="small">发送offer</el-button>
              <el-button v-if="scope.row.processStatusName.match('拟offer')" @click="sendOffer(scope.row)" type="text" size="small">取消拟offer</el-button>
              <el-button v-if="scope.row.processStatusName.match('面试通过')" @click="sendOffer(scope.row)" type="text" size="small">设为拟offer</el-button>
              <el-button v-if="scope.row.processStatusName.match('面试通过')" @click="checkResume(scope.row)" type="text" size="small">面试失败</el-button>
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
  name: 'LastProcess',
  data() {
    return {
      formInline: {
        positionName: "",
        candidate: "",
        interviewStatusName: "",
        recruitType: "",
      },
      processStatusNames: [
        {
          value: "1",
          label: "面试通过",
        },
        {
          value: "2",
          label: "拟offer",
        },
        {
          value: "3",
          label: "offer已发",
        },
        {
          value: "4",
          label: "offer已拒",
        },
        {
          value: "5",
          label: "待入职",
        },
        {
          value: "6",
          label: "已入职",
        }
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
      lastProcessList: [
        {
          'id': 1,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'recruitType': '实习',
          'processStatusName': '面试通过',
          'remarks': '该同学还有其他三个offer，在考虑中',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 2,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'recruitType': '校招',
          'processStatusName': '拟offer',
          'remarks': '该同学还有其他三个offer，在考虑中',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 3,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'recruitType': '实习',
          'processStatusName': 'offer已发',
          'remarks': '该同学还有其他三个offer，在考虑中',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 4,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'recruitType': '社招',
          'processStatusName': 'offer已拒',
          'remarks': '该同学还有其他三个offer，在考虑中',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 5,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'recruitType': '社招',
          'processStatusName': 'offer已发',
          'remarks': '该同学还有其他三个offer，在考虑中',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 6,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'recruitType': '校招',
          'processStatusName': '待入职',
          'remarks': '该同学还有其他三个offer，在考虑中',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 7,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'recruitType': '社招',
          'processStatusName': '已入职',
          'remarks': '该同学还有其他三个offer，在考虑中',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        },
        {
          'id': 8,
          'name': '马雪冬',
          'phone': '19981451191',
          'email': 'test@test.com',
          'deliveryPost': 'Java后端-国际化电商',
          'recruitType': '实习',
          'processStatusName': '待入职',
          'remarks': '该同学还有其他三个offer，在考虑中',
          'operateTime': '2022-01-16 13:45',
          'operator': '马雪冬'
        }
      ]
    };
  },
  methods: {
    curRecruitType(row) {
      let recruitType = row.recruitType
      if (recruitType === '实习') {
        return 'warning'
      }
      if (recruitType === '校招') {
        return 'primary'
      }
      if (recruitType === '社招') {
        return 'danger'
      }
      return ''
    },
    curProcessType(row) {
      let processStatusName = row.processStatusName
      if (processStatusName === '待入职' || processStatusName === '拟offer') {
        return 'primary'
      }
      if (processStatusName === '面试通过' || processStatusName === 'offer已发' || processStatusName === '已入职') {
        return 'success'
      }
      if (processStatusName === 'offer已拒') {
        return 'danger'
      }
      return ''
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
