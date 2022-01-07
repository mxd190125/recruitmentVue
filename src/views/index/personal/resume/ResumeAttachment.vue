<template>
  <div id="resume-attachment-id" class="resumeViewSection">
    <div class="resumeViewSection-title sofiaBold">{{ sectionTitle }}</div>
    <div class="resumeItem" style="width: 500px;">
      <div class="resumeItem-left">
        <div class="fileIcon resumeItem-documentIcon">
          <img src="@/assets/img/resume/resume2.png" alt="" />
        </div>
        <div class="resumeItem-text">
          <p class="resumeItem-title sofiaBold">{{ attachmentName }}</p>
          <p class="resumeItem-date">上传时间:{{ attachmentDate }}</p>
        </div>
      </div>
      <div class="resumeItem-right">
        <div class="resumeItem-download">
          <div class="resumeItem-downloadIcon">
            <img src="@/assets/img/resume/download-resume.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeAttachment",
  props: ["sectionTitle", "attachmentUrl", "attachmentName", "attachmentDate"],
  data() {
    return {};
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

.resumeItem {
  justify-content: space-between;
  height: 69px;
  border-radius: 4px;
  background-color: #f9fafd;
  display: flex;
  align-items: center;
}
.resumeItem-left {
  margin-left: 8px;
  display: flex;
  align-items: center;
}

.fileIcon {
  width: 48px;
  margin-top: 2px;
}
.fileIcon img {
  width: 100%;
  height: 100%;
}

.resumeItem-text {
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  margin-top: -5px;
}

.resumeItem-title {
  width: 350px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 26px;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.75;
  color: #1f2329;
}

.resumeItem-date {
  height: 22px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
  color: #646a73;
}

.resumeItem-text p {
  margin: 0;
}

.resumeItem-download {
  width: 32px;
  height: 32px;
  border: 1px solid #eff1f1;
  border-radius: 50%;
  color: #646a73;
  margin-right: 18px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}

.resumeItem-downloadIcon {
  width: 20px;
  height: 20px;
}
.resumeItem-downloadIcon img {
  width: 20px;
  height: 20px;
}
</style>
