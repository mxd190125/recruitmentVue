<template>
  <div id="position-query-id">
    <div class="table-class">
      <!-- 表格搜索 -->
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="职位名称">
            <el-input
              size="small"
              v-model="formInline.positionName"
              placeholder="职位名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="招聘类型">
            <el-select
              size="small"
              v-model="formInline.recruitTypeIds"
              multiple
              clearable
              placeholder="招聘类型"
            >
              <el-option
                v-for="item in recruitTypes"
                :key="item.id"
                :label="item.typeName"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="城市">
            <el-select
              size="small"
              v-model="formInline.cityIds"
              multiple
              clearable
              placeholder="城市"
            >
              <el-option
                v-for="item in cities"
                :key="item.id"
                :label="item.cityName"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职位类型">
            <el-select
              size="small"
              v-model="formInline.positionTypeIds"
              multiple
              clearable
              placeholder="职位类型"
            >
              <el-option
                v-for="item in positionTypes"
                :key="item.id"
                :label="item.typeName"
                :value="item.id"
              >
              </el-option>
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
      <div>
        <el-table
          border
          max-height="500px"
          :data="tableData"
          style="width: 100%"
        >
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
                  props.row.cityName
                }}</el-descriptions-item>
                <el-descriptions-item label="招聘类型">
                  <el-tag size="small">{{ props.row.recruitTypeName }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="职位类型">
                  <el-tag size="small">{{ props.row.positionTypeName }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="人数"
                  ><el-tag size="small">{{
                    props.row.num
                  }}</el-tag></el-descriptions-item
                >
                <el-descriptions-item label="发布时间">{{
                  props.row.createTime
                }}</el-descriptions-item>
                <el-descriptions-item label="职位描述">{{
                  props.row.description
                }}</el-descriptions-item>
                <el-descriptions-item label="职位要求">{{
                  props.row.requirement
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
          <el-table-column label="城市" prop="cityName"> </el-table-column>
          <el-table-column label="招聘类型" prop="recruitTypeName">
          </el-table-column>
          <el-table-column label="职位类型" prop="positionTypeName">
          </el-table-column>
          <el-table-column label="人数" prop="num"> </el-table-column>
          <el-table-column label="发布时间" prop="createTime"> </el-table-column>
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
  </div>
</template>

<script>
import axios from "axios";

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
      recruitTypes: [],
      positionTypes: [],
      cities: [],
      formInline: {
        positionName: "",
        recruitTypeIds: "",
        positionTypeIds: "",
        cityIds: "",
      },
      tableData: [],

      size: 10,
      page: 1,
      total: 0,
      pages: 0,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      this.getCitiesAndTypes();
      this.getPositionsList();
    },
    // 加载加载下拉框
    getCitiesAndTypes() {
      axios({
        method: "get",
        url: "http://localhost:8082/position/getCitiesAndTypes",
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.cities = res.data.cities;
          this.positionTypes = res.data.types;
          this.recruitTypes = res.data.recruitTypes;
        } else {
          console.log("加载多选框元素失败");
        }
      });
    },
    // 查询职位列表
    getPositionsList() {
      axios({
        method: "post",
        url: "http://localhost:8082/position/getPositionsList",
        data: {
          positionName: this.formInline.positionName,
          cityIds: this.formInline.cityIds,
          recruitTypeIds: this.formInline.recruitTypeIds,
          positionTypeIds: this.formInline.positionTypeIds,
          size: this.size,
          page: this.page,
        },
      }).then((res) => {
        res = res.data;
        console.log(res);
        if (res.status == 0) {
          this.tableData = res.data.data;
          // 更新分页信息
          this.size = res.data.size;
          this.page = res.data.page;
          this.total = res.data.total;
          this.pages = res.data.pages;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
        }
      });
    },
    onSubmit() {
      console.log("提交了查询");
      this.getPositionsList();
    },
    handleUpdateClick(position) {
      console.log("修改了职位ID：" + position.id);
    },
    handleCheckClick(position) {
      this.table = true;
      this.deliveryTile = "「" + position.positionName + "」" + "投递列表";
      console.log("查看了职位ID：" + position.id);
    },
    handleRevokeClick(position) {
      console.log("撤回了职位ID：" + position.id);
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
      this.getPositionsList();
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
  /* width: 1000px; */
  margin: 20px auto;
}
.table-page-class {
  float: right;
  margin-top: 10px;
}
</style>
