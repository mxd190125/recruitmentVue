<template>
  <div id="resumeViewSection" class="resumeViewSection">
    <div class="resumeViewSection-title sofiaBold">{{ sectionTitle }}</div>
    <div
      class="resumeViewForm-listItem"
      v-for="(sectionData, index) in sectionDataList"
      :key="index"
    >
      <div class="atsx-row">
        <div
          class="atsx-col atsx-col-auto resumeViewItem"
          v-for="(value, name, index) in sectionData"
          :key="index"
        >
          <div class="resumeViewItem-title">{{ getKeyName(name) }}</div>
          <div class="resumeViewItem-content">{{ value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeViewSection",
  props: ["sectionTitle", "sectionDataList"],
  data() {
    return {
      keyNames: {
        major: "专业",
        school: "学校",
        education: "学历",
        educationType: "学历类型",
      },
    };
  },
  computed: {
    // 返回key的name
    getKeyName() {
      return function (keyName) {
        // console.log(keyName);
        return this.keyNames[keyName];
      };
    },
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
