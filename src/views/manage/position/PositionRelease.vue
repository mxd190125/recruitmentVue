<template>
  <div id="position-release-id">
    <div>
      <el-card shadow="always" class="release-card">
        <div class="edit-div-class">
          <span class="title-class">职位名称</span>
          <div>
            <el-input
              placeholder="请输入内容"
              v-model="positionName"
              class="input-common-class"
              clearable
              prefix-icon="el-icon-edit"
            >
            </el-input>
          </div>
        </div>
        <div class="edit-div-class">
          <span class="title-class">职位描述</span>
          <div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 10 }"
              placeholder="请输入内容"
              v-model="description"
              prefix-icon="el-icon-edit"
              clearable
              class="textarea-common-class"
            >
            </el-input>
          </div>
        </div>
        <div class="edit-div-class">
          <span class="title-class">职位要求</span>
          <div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 10 }"
              placeholder="请输入内容"
              v-model="requirement"
              prefix-icon="el-icon-edit"
              clearable
              class="textarea-common-class"
            >
            </el-input>
          </div>
        </div>
        <div class="edit-div-class">
          <el-select
            v-model="city"
            placeholder="请选择城市"
            class="select-class"
          >
            <el-option
              v-for="e in cities"
              :key="e.id"
              :label="e.cityName"
              :value="e.id"
            >
            </el-option>
          </el-select>
          <el-select
            v-model="positionType"
            placeholder="请选择职位类型"
            class="select-class"
          >
            <el-option
              v-for="e in positionTypes"
              :key="e.id"
              :label="e.typeName"
              :value="e.id"
            >
            </el-option>
          </el-select>
          <el-select
            v-model="recruitType"
            placeholder="请选择招聘类型"
            class="select-class"
          >
            <el-option
              v-for="e in recruitTypes"
              :key="e.id"
              :label="e.typeName"
              :value="e.id"
            >
            </el-option>
          </el-select>
          <el-select
            v-model="num"
            filterable
            placeholder="招聘人数"
            class="select-class"
          >
            <el-option
              v-for="item in nums"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="edit-div-class">
          <el-button type="primary" plain @click="createPosition">发布职位</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PositionRelease",
  data() {
    return {
      positionName: "",
      description: "",
      requirement: "",
      nums: [
        {
          value: "100",
          label: "100人",
        },
        {
          value: "200",
          label: "200人",
        },
        {
          value: "300",
          label: "300人",
        },
        {
          value: "400",
          label: "400人",
        },
        {
          value: "500",
          label: "500人",
        },
        {
          value: "600",
          label: "600人",
        },
      ],
      num: "",
      cities: [],
      city: "",
      recruitTypes: [],
      recruitType: "",
      positionTypes: [],
      positionType: "",
    };
  },
  created() {
    this.initDatas();
  },
  methods: {
    // 初始化数据
    initDatas() {
      // 加载下拉框数据
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
    // 创建职位
    createPosition() {
      // 校验
      console.log('创建职位....')
      if (this.positionName.trim() == "") {
        this.$message({
          message: "职位名称不能为空！",
          type: "warning",
        });
        return
      }
      if (this.description.trim() == "") {
        this.$message({
          message: "职位描述不能为空！",
          type: "warning",
        });
        return
      }
      if (this.requirement.trim() == "") {
        this.$message({
          message: "职位要求不能为空！",
          type: "warning",
        });
        return
      }
      if (this.city == "") {
        this.$message({
          message: "城市不能为空！",
          type: "warning",
        });
        return
      }
      if (this.positionType == "") {
        this.$message({
          message: "职位类型不能为空！",
          type: "warning",
        });
        return
      }
      if (this.recruitType == "") {
        this.$message({
          message: "招聘类型不能为空！",
          type: "warning",
        });
        return
      }
      if (this.num == "") {
        this.$message({
          message: "招聘人数不能为空！",
          type: "warning",
        });
        return
      }
      // 请求接口
      axios({
        method: "post",
        url: "http://localhost:8082/position/createPosition",
        data: {
          positionName: this.positionName,
          description: this.description,
          requirement: this.requirement,
          city: this.city,
          recruitType: this.recruitType,
          positionType: this.positionType,
          num: this.num,
        },
      }).then((res) => {
        res = res.data;
        console.log(res)
        if (res.status == 0) {
          this.positionName = "";
          this.description = "";
          this.requirement = "";
          this.city = "";
          this.recruitType = "";
          this.positionType = "";
          this.num = "";
          this.$message({
            message: "职位创建成功！",
            type: "success",
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
        }
      });
    },
    handleChange(value) {
      console.log(value);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.release-card {
  width: 87%;
  height: 100%;
  margin: 1% auto;
}

.title-class {
  font-size: 25px;
  font-weight: 300;
  color: #5a9cf8;
  margin-bottom: 10px;
}

.input-common-class {
  width: 300px;
  margin-top: 10px;
}

.textarea-common-class {
  width: 500px;
  margin-top: 10px;
}

.edit-div-class {
  padding-left: 20px;
  margin-bottom: 20px;
  padding: 15px 15px 15px 15px;
}

.edit-div-class:hover {
  background-color: #f9fbff;
  cursor: pointer;
}

.select-class {
  margin: 10px;
}
</style>
