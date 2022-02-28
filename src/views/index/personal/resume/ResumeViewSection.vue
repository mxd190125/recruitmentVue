<template>
  <div id="resumeViewSection" class="resumeViewSection">
    <div class="resumeViewSection-title sofiaBold">{{ sectionTitle }}</div>
    <div class="atsx-row">
        <div
          class="atsx-col atsx-col-auto resumeViewItem"
          v-for="(value, name, index) in sectionData"
          :key="index"
        >
          <div class="resumeViewItem-title">{{ getKeyName(name)}}</div>
          <div class="resumeViewItem-content">{{ value }}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ResumeViewSection",
  props: ["sectionTitle", "sectionData"],
  data() {
    return {
      keyNames: {
        // major: "专业",
        // school: "学校",
        // education: "学历",
        // educationType: "学历类型",
        // 基础信息
        name: "名字",
        phone: "电话",
        email: "邮箱",
        identification: "身份证",
        preferred_city: "意向城市",
        self_evaluation: "自我评价",
        // 教育背景
        school: "学校",
        education_type: "学历类型",
        major: "专业",
        start_time: "开始时间",
        end_time: "结束时间",
        score_rank: "成绩排名",
        // 工作经历
        company: '公司',
        position: "职位",
        start_time: "开始时间",
        end_time: "结束时间",
        desc: "描述",
        // 项目经历
        name: "名字",
        role: "角色",
        start_time: "开始时间",
        end_time: "结束时间",
        desc: "描述",
        // 竞赛
        name: "名字",
        desc: "描述",
      },
    };
  },
  computed: {
    // 返回key的name
    getKeyName() {
      return function (keyName) {
        // console.log(keyName);
        // return keyName != 'id' && keyName != 'resumeId' ? this.keyNames[keyName] : null;
        return this.keyNames[keyName];
      };
    },
  },
  created() {
    
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.resumeViewSection {
  margin-top: 32px;
}

.resumeViewSection .resumeViewSection-title {
  position: relative;
  height: 32px;
  margin-bottom: 38px;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.6;
  color: #1f2329;
}
.resumeViewForm-listItem {
  padding-bottom: 8px;
}
.atsx-row {
  position: relative;
  height: auto;
  margin-right: 0;
  margin-left: 0;
  zoom: 1;
  display: block;
  box-sizing: border-box;
}
.atsx-row .atsx-col {
  display: inline-block;
}

.atsx-row .atsx-col-auto:nth-child(odd) {
    width: 520px;
}
.atsx-row .atsx-col {
    display: inline-block;
}
.atsx-col {
  position: relative;
}
.resumeViewItem {
  margin-bottom: 16px;
  vertical-align: top;
}
.resumeViewItem-title {
  margin-bottom: 4px;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.71;
  color: #1f2329;
  opacity: 0.45;
}
.resumeViewItem-content {
  word-wrap: break-word;
  font-size: 16px;
  line-height: 1.75;
  color: #1f2329;
}
</style>
