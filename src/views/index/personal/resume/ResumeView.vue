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
      </div>
      <!-- 教育经历 -->
      <resume-view-section
        sectionTitle="教育经历"
        :sectionDataList="resume_detail.education_list"
      />
      <!-- 教育经历 -->
      <resume-view-section
        sectionTitle="教育经历"
        :sectionDataList="resume_detail.education_list"
      />
      <!-- 附件简历 -->
      <resume-attachment
        sectionTitle="附件简历"
        attachmentName="马雪冬_19981451191_成都大学.pdf"
        attachmentUrl=""
        attachmentDate="2021-09-02 14:34"
      />
    </div>
    <div class=""></div>
  </div>
</template>

<script>
import ResumeAttachment from "./ResumeAttachment.vue";
import ResumeViewSection from "./ResumeViewSection.vue";

export default {
  components: { ResumeViewSection, ResumeAttachment },
  name: "ResumeView",
  data() {
    return {
      resume_detail: {
        education_list: [
          {
            major: "软件工程",
            school: "成都大学",
            education: "本科",
            educationType: "统招全日制",
          },
        ],
      },
    };
  },
  computed: {},
  methods: {},
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
