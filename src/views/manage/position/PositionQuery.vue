<template>
  <div id="position-query-id">
    <div class="table-class">
      <!-- 表格搜索 -->
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="职位名称">
            <el-input
              v-model="formInline.positionName"
              placeholder="职位名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="招聘类型">
            <el-select v-model="formInline.recruitType" placeholder="招聘类型">
              <el-option
                v-for="item in recruitTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="城市">
            <el-select v-model="formInline.city" placeholder="城市">
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item label="职位类型">
            <el-select v-model="formInline.positionType" placeholder="职位类型">
              <el-option
                v-for="item in positionTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 表格主体 -->
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <!-- 职位详情 -->
              <el-descriptions title="职位信息">
                <el-descriptions-item label="职位ID">{{
                  props.row.id
                }}</el-descriptions-item>
                <el-descriptions-item label="职位名称">{{
                  props.row.positionName
                }}</el-descriptions-item>
                <el-descriptions-item label="城市">{{
                  props.row.city
                }}</el-descriptions-item>
                <el-descriptions-item label="招聘类型">
                  <el-tag size="small">{{ props.row.recruitType }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="职位类型">
                  <el-tag size="small">{{ props.row.positionType }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="人数"
                  ><el-tag size="small">{{
                    props.row.num
                  }}</el-tag></el-descriptions-item
                >
                <el-descriptions-item label="发布时间">{{
                  props.row.release
                }}</el-descriptions-item>
                <el-descriptions-item label="职位描述">{{
                  props.row.positionDesc
                }}</el-descriptions-item>
                <el-descriptions-item label="职位要求">{{
                  props.row.positionReq
                }}</el-descriptions-item>
              </el-descriptions>

              <!-- <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="职位ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="职位名称">
                  <span>{{ props.row.positionName }}</span>
                </el-form-item>
                <el-form-item label="城市">
                  <span>{{ props.row.city }}</span>
                </el-form-item>
                <el-form-item label="招聘类型">
                  <span>{{ props.row.recruitType }}</span>
                </el-form-item>
                <el-form-item label="职位类型">
                  <span>{{ props.row.positionType }}</span>
                </el-form-item>
                <el-form-item label="人数">
                  <span>{{ props.row.num }}</span>
                </el-form-item>
                <el-form-item label="发布时间">
                  <span>{{ props.row.release }}</span>
                </el-form-item>
                <el-form-item label="职位描述">
                  <span>{{ props.row.positionDesc }}</span>
                </el-form-item>
                <el-form-item label="职位要求">
                  <span>{{ props.row.positionReq }}</span>
                </el-form-item>
              </el-form> -->
            </template>
            <!-- 职位列表 -->
          </el-table-column>
          <el-table-column label="职位ID" prop="id" sortable> </el-table-column>
          <el-table-column label="职位名称" prop="positionName" sortable>
          </el-table-column>
          <el-table-column label="城市" prop="city"> </el-table-column>
          <el-table-column label="招聘类型" prop="recruitType">
          </el-table-column>
          <el-table-column label="职位类型" prop="positionType">
          </el-table-column>
          <el-table-column label="人数" prop="num"> </el-table-column>
          <el-table-column label="发布时间" prop="release"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="180px">
            <template slot-scope="scope">
              <el-button
                @click="handleUpdateClick(scope.row)"
                type="text"
                size="medium"
                >修改</el-button
              >
              <el-button
                type="text"
                size="medium"
                @click="handleCheckClick(scope.row)"
                >查看投递</el-button
              >
              <el-button
                type="text"
                size="medium"
                @click="handleRevokeClick(scope.row)"
                >撤回</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 职位投递列表 -->
        <el-drawer
          :title="deliveryTile"
          :visible.sync="table"
          direction="rtl"
          size="40%"
        >
          <el-table :data="deliveryList">
            <el-table-column property="name" label="姓名"></el-table-column>
            <el-table-column property="phone" label="电话"></el-table-column>
            <el-table-column
              property="progress"
              label="应聘进度"
            ></el-table-column>
            <el-table-column
              property="date"
              label="投递时间"
              width="150"
            ></el-table-column>
          </el-table>
        </el-drawer>
      </div>
      <!-- 表格分页 -->
      <div class="table-page-class">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PositionQuery",
  data() {
    return {
      table: false,
      deliveryTile: "",
      deliveryList: [
        {
          date: "2016-05-02",
          name: "王小虎",
          progress: "二面",
          phone: "19981451191",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          progress: "三面",
          phone: "19981451191",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          progress: "一面",
          phone: "19981451191",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          progress: "简历筛选",
          phone: "19981451191",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          progress: "笔试",
          phone: "19981451191",
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
      positionTypes: [
        {
          value: "1",
          label: "算法",
        },
        {
          value: "2",
          label: "后端",
        },
        {
          value: "3",
          label: "前端",
        },
      ],
      cities: [
        {
          value: "1",
          label: "成都",
        },
        {
          value: "2",
          label: "北京",
        },
        {
          value: "3",
          label: "上海",
        },
      ],
      formInline: {
        positionName: "",
        recruitType: "",
        positionType: "",
        city: "",
      },
      tableData: [
        {
          id: "12987122",
          positionName: "后端实习生-架构",
          city: "成都、北京、上海",
          recruitType: "校招",
          positionType: "后端",
          release: "2021-11-9",
          num: "200",
          positionDesc:
            "负责推荐系统架构的设计和开发，保障系统稳定和高可用；负责在线服务、离线数据流性能优化，解决系统瓶颈，降低成本开销；抽象系统通用组件和服务，建设推荐中台、数据中台，支撑新产品快速孵化以及为 toB 赋能。\n1、负责智能推荐、智能内容等产品的推荐架构工作，解决推荐核心系统的架构优化问题；2、支持 SaaS 推荐系统的设计和开发工作，将字节核心推荐能力、优质内容输出给合作方；3、针对推荐场景的架构抽象和流程优化，支持大规模的机器学习的优化，支持推荐平台的研发；4、针对高并发高吞吐的大规模系统，提升系统的稳定性、性能、可扩展性；5、核心组件的研发和优化、新技术的应用和落地。",
          positionReq:
            "1、扎实的编程能力，有优秀的设计和代码品位，对解决具有挑战性问题充满激情;2、对在线架构有丰富的经验和广阔的视野；3、开发语言C++/Python；4、有以下经验者优先：推荐或搜索相关的开发工作；高并发高吞吐的系统经验。",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("提交了查询");
    },
    handleUpdateClick(position) {
      console.log("修改了职位ID：" + position.id);
    },
    handleCheckClick(position) {
      this.table = true;
      this.deliveryTile = '「' + position.positionName + '」' + '投递列表';
      console.log("查看了职位ID：" + position.id);
    },
    handleRevokeClick(position) {
      console.log("撤回了职位ID：" + position.id);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.table-class {
  width: 1000px;
  margin: 20px auto;
}
.table-page-class {
  float: right;
  margin-top: 10px;
}
</style>
