<template>
  <div id="position-release-id">
    <div>
      <el-card shadow="always" class="release-card">
        <div class="edit-div-class">
          <span class="title-class">职位名称</span>
          <div>
            <el-input
              placeholder="请输入内容"
              v-model="input1"
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
              v-model="textarea1"
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
              v-model="textarea2"
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
            multiple
            placeholder="请选择城市"
            class="select-class"
          >
            <el-option
              v-for="item in citcities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select
            v-model="positionType"
            multiple
            placeholder="请选择职位类型"
            class="select-class"
          >
            <el-option
              v-for="item in positionTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select
            v-model="recruitType"
            multiple
            placeholder="请选择招聘类型"
            class="select-class"
          >
            <el-option
              v-for="item in recruitTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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
          <el-button type="primary" plain>发布职位</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "PositionRelease",
  data() {
    return {
      input1: "",
      textarea1: "",
      textarea2: "",
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
      citcities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      city: [],
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
      recruitType: [],
      positionTypes: [
        {
          value: "sf",
          label: "算法",
        },
        {
          value: "hd",
          label: "后端",
        },
        {
          value: "qd",
          label: "前端",
        },
        {
          value: "ui",
          label: "UI",
        },
        {
          value: "cp",
          label: "产品",
        },
        {
          value: "sj",
          label: "设计",
        },
        {
          value: "yy",
          label: "运营",
        },
        {
          value: "xz",
          label: "行政",
        },
      ],
      positionType: [],
    };
  },
  methods: {
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
