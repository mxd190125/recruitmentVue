<template>
  <div id="resumeView">
    <div class="resumeViewForm">
      <div class="resumeView-header">
        <div class="resumeView-myResume">我的简历</div>
        <div class="resumeView-lastUpdate">
          <img src="@/assets/img/resume/update.png" alt="" />
          <span class="resumeView-lastUpdate-text">最近更新:</span>
          <span class="resumeView-lastUpdate-time">2021-09-02 14:35</span>
        </div>
        <div style="float: right;font-size: 25px;"><a href="/index/personal/resume/edit"><i class="el-icon-edit">编辑</i></a></div>
      </div>
      <!-- 基础信息 -->
      <resume-view-section
        sectionTitle="基础信息"
        :sectionData="resume_detail.base"
      />
      <!-- 教育经历 -->
      <resume-view-section
        sectionTitle="教育经历"
        :sectionData="resume_detail.education"
      />
      <!-- 工作经历 -->
      <resume-view-section
        sectionTitle="工作经历"
        :sectionData="resume_detail.work"
      />
      <!-- 项目经历 -->
      <resume-view-section
        sectionTitle="项目经历"
        :sectionData="resume_detail.project"
      />
      <!-- 竞赛经历 -->
      <resume-view-section
        sectionTitle="竞赛经历"
        :sectionData="resume_detail.competition"
      />
      <!-- 附件简历 -->
      <resume-attachment
        sectionTitle="附件简历"
        :attachmentName="resume_detail.resume_attach_origin_name"
        :attachmentUrl="resume_detail.resume_attach_url"
        attachmentDate="2021-09-02 14:34"
      />
    </div>
    <div class=""></div>
  </div>
</template>

<script>
import axios from "axios";

import ResumeAttachment from "./ResumeAttachment.vue";
import ResumeViewSection from "./ResumeViewSection.vue";

export default {
  components: { ResumeViewSection, ResumeAttachment },
  name: "ResumeView",
  data() {
    return {
      resume_detail: {
        resumeId: "",
        resume_attach_url: '',
        resume_attach_origin_name: '',
        base: {},
        educationt: {},
        work: {},
        project: {},
        competition: {},
      },
    };
  },
  computed: {},
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getResumeId();
    },
    // 获取resumeId
    getResumeId() {
      let userId = 14;
      // let userId = this.$store.state.user.id;
      axios({
        method: "get",
        url: "http://localhost:8082/resume/getResumeId",
        params: {
          userId: userId,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.resumeId = res.data.resumeId;
          this.getResumeBody();
        }
      });
    },
    // 查询简历
    getResumeBody() {
      axios({
        method: "get",
        url: "http://localhost:8082/resume/getResumeBody",
        params: {
          resumeId: this.resumeId,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.resume_detail.resume_attach_origin_name = res.data.base.resume_attach_origin_name;
          this.resume_detail.resume_attach_url = res.data.base.resume_attach_url;
          this.resume_detail.base = res.data.base;
          this.resume_detail.education = res.data.education;
          this.resume_detail.work = res.data.work;
          this.resume_detail.competition = res.data.competition;
          this.resume_detail.project = res.data.project;
          
          delete this.resume_detail.base.id;
          delete this.resume_detail.base.user_id;
          delete this.resume_detail.base.resume_id;
          delete this.resume_detail.base.resume_attach_origin_name;
          delete this.resume_detail.base.resume_attach_url;
          delete this.resume_detail.base.resume_avatar_url;
          delete this.resume_detail.education.id;
          delete this.resume_detail.education.resume_id;
          delete this.resume_detail.work.id;
          delete this.resume_detail.work.resume_id;
          delete this.resume_detail.competition.id;
          delete this.resume_detail.competition.resume_id;
          delete this.resume_detail.project.id;
          delete this.resume_detail.project.resume_id;
        }
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* 我的简历 */
.resumeView-myResume {
  color: #1f2329;
  height: 59px;
  line-height: 59px;
  font-size: 30px;
  font-weight: 800;
}

.resumeView-lastUpdate {
  display: flex;
  align-items: center;
  margin-top: 3px;
  height: 28px;
  font-size: 16px;
  line-height: 1.75;
}

.resumeView-lastUpdate img {
  width: 16px;
  height: 16px;
}
.resumeView-lastUpdate-text {
  margin-left: 8px;
  margin-right: 4px;
}
.resumeView-lastUpdate-time {
}

.resumeViewForm {
  /* position: relative; */
  width: 1016px;
  margin: 50px auto 115px;
  border-radius: 4px;
  box-shadow: 0 8px 24px 0 rgb(54 97 174 / 14%);
  background-color: #fff;
  padding: 8px 50px 40px;
  z-index: 1;
}
</style>
