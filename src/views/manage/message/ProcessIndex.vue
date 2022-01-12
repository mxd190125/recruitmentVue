<template>
  <div id="process-index-id">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane name="resume">
        <span slot="label"><i class="el-icon-document"></i>简历处理</span>
        <resume-process/>
      </el-tab-pane>
      <el-tab-pane name="exam">
        <span slot="label"><i class="el-icon-edit"></i> 笔试处理</span>
        <exam-process/>
      </el-tab-pane>
      <el-tab-pane name="interview">
        <span slot="label"><i class="el-icon-s-opportunity"></i> 面试安排</span>
        <interview-process/>
      </el-tab-pane>
      <el-tab-pane name="last">
        <span slot="label"><i class="el-icon-finished"></i> 流程结束</span>
        <last-process/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ExamProcess from './process/exam/ExamProcess.vue';
import InterviewProcess from './process/interview/InterviewProcess.vue';
import ResumeProcess from './process/resume/ResumeProcess.vue';
import LastProcess from './process/last/LastProcess.vue';

export default {
  components: { ResumeProcess, ExamProcess, InterviewProcess, LastProcess },
  name: "ProcessIndex",
  data() {
    return {
      activeName: "resume",
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
      console.log("单击：" + tab.name);
    },
  },
  mounted() {},
};
</script>

<style scoped>

</style>
