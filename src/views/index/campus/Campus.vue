<template>
  <div id="campus">
    <div class="searchBlockArea">
      <div class="swiper-container">
        <div class="carousel_image"></div>
      </div>
      <!-- 搜索 -->
      <div class="search-block" style="display: block; opacity: 1">
        <span class="atsx-input-affix-wrapper">
          <span class=""></span>
          <input
            autocomplete="off"
            class="atsx-input"
            placeholder="搜索职位"
            type="text"
            v-model="positionName"
          />
          <span class="atsx-input-suffix">
            <button type="button" class="atsx-btn" @click="searchPosition()">
              <span>搜索</span>
            </button>
          </span>
        </span>
        <div class="filter">
          <div class="role-filter">
            <el-checkbox-group v-model="checkedRecruitTypes">
              <el-checkbox :label="1">实习</el-checkbox>
              <el-checkbox :label="2">校招</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="city-filter">
            <span class="filter-lable">城市：</span>
            <el-checkbox-group v-model="checkedCities">
              <el-checkbox
                v-for="city in cities"
                :label="city.id"
                :key="city.id"
                >{{ city.cityName }}
              </el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="position-filter">
            <span class="filter-lable">岗位：</span>
            <el-checkbox-group v-model="checkedPositionTypes">
              <el-checkbox
                v-for="type in positionTypes"
                :label="type.id"
                :key="type.id"
                >{{ type.typeName }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </div>
    <div class="boderContainer">
      <!-- 右侧面板 -->
      <div class="rightBlock">
        <position-item
          v-for="position in positions"
          :key="position.id"
          @click.native="showPositonDetail(position)"
          :id="position.id"
          :positionName="position.positionName"
          :cityName="position.cityName"
          :recruitTypeName="position.recruitTypeName"
          :num="position.num"
          :positionTypeName="position.positionTypeName"
          :description="position.description"
          :createTime="position.createTime"
        >
        </position-item>
      </div>
      <!-- 分页 -->
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

import PositionItem from "../../position/PositionItem.vue";
export default {
  components: { PositionItem },
  name: "Campus",
  data() {
    return {
      positions: [],
      positionName: "",
      cities: [],
      checkedCities: [],
      positionTypes: [],
      checkedPositionTypes: [],
      checkedRecruitTypes: [1, 2],

      size: 10,
      page: 1,
      total: 0,
      pages: 0,
    };
  },
  computed: {},
  created() {
    this.initDatas();
  },
  methods: {
    // 初始化数据
    initDatas() {
      axios({
        method: "get",
        url: "http://localhost:8082/position/getCitiesAndTypes",
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.cities = res.data.cities;
          this.positionTypes = res.data.types;
          this.checkedCities = this.cities.map((e) => {
            return e.id;
          });
          this.checkedPositionTypes = this.positionTypes.map((e) => {
            return e.id;
          });
          this.getPosiotionList();
        } else {
          console.log("加载多选框元素失败");
        }
      });
    },
    // 查询职位列表
    getPosiotionList() {
      axios({
        method: "post",
        url: "http://localhost:8082/position/getPositionsList",
        data: {
          size: this.size,
          page: this.page,
          positionName: this.positionName,
          cityIds: this.checkedCities,
          positionTypeIds: this.checkedPositionTypes,
          recruitTypeIds: this.checkedRecruitTypes,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.positions = res.data.data;
          this.size = res.data.size;
          this.page = res.data.page;
          this.total = res.data.total;
          this.pages = res.data.pages;
        }
      });
    },
    // 条件查询
    searchPosition() {
      this.getPosiotionList();
    },
    // 跳转到详情页面
    showPositonDetail(position) {
      console.log("跳转到职位详情页面...." + "id:" + position.id);
      this.$router.push({
        path: "/position/showPositionDetail",
        query: { position: position },
      });
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
      this.getPosiotionList();
    },
  },
};
</script>
               
<style scoped>
.swiper-container {
  height: 300px;
}
.carousel_image {
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: url("https://lf26-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/campus/427bannernew.png");
}

/* 搜索 */
.search-block {
  text-align: center;
}
/* 搜索框 */
.atsx-input {
  padding-top: 1px;
  margin-top: 12px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1.5px solid #3370ff;
  width: 300px;
  height: 44px;
  padding-left: 36px;
  padding-right: 36px;
}

/* 搜索按钮 */
.atsx-btn {
  cursor: pointer;
  width: 100px;
  border: 0px;
  height: 48px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #3370ff;
  color: #ffff;
  font-size: 14px;
  font-weight: 800;
  padding-left: 26px;
  padding-right: 26px;
}
/* 筛选过滤 */
.filter {
  margin-top: 18px;
}
.filter-lable {
  color: #646a73;
}

.boderContainer {
  flex-shrink: 0;
  width: 276px;
  margin-right: 35px;
  position: relative;
}

.rightBlock {
  width: 712px;
  padding-left: 451px;
}
.pageBlock {
  padding-left: 451px;
}
</style>