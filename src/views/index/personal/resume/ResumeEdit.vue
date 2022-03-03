<template>
  <div id="resumeEdit">
    <div class="resumeEditForm-wrapper">
      <div class="resumeEditForm-header">
        <div class="resumeEditForm-headerText sofiaBold">编辑简历</div>
      </div>
      <!-- 头像 -->
      <div class="avatar-lable">上传头像</div>
      <div class="avatar-div">
        <el-upload
          class="avatar-uploader"
          :action="resumuAvatarAction"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="base.resume_avatar_url"
            :src="base.resume_avatar_url"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>

      <form action="" autocomplete="off" class="resumeEditForm-Form">
        <!-- 附件简历 -->
        <div class="uploadResume-section createFormSection-mutiple">
          <div class="createFormSection-left">
            <div class="createFormSection-title">
              <div class="createFormSection-text sofiaBold">附件简历</div>
            </div>
          </div>
          <div class="createFormSection-right">
            <el-upload
              class="upload-demo"
              drag
              :show-file-list="false"
              :action="resumuAttachAction"
              :on-success="handleAttachSuccess"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <div v-if="base.resume_attach_origin_name" class="el-upload__tip" style="font-size: 22px;" slot="tip">
                附件:{{base.resume_attach_origin_name}}
              </div>
              <div class="el-upload__tip" slot="tip">
                只能上传doc/pdf文件，且不超过5M
              </div>
            </el-upload>
          </div>
        </div>

        <!-- 基础信息 -->
        <div class="uploadResume-section createFormSection-mutiple">
          <div class="createFormSection-left">
            <div class="createFormSection-title">
              <div class="createFormSection-text sofiaBold">基础信息</div>
            </div>
          </div>
          <div class="createFormSection-right">
            <div class="createFormSection-formList">
              <div class="record-row">
                <div class="record-title">
                  <span>姓名</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="base.name"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>手机号码</span>
                  <span class="record-title-foucs">*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="base.phone"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>邮箱</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="base.email"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>证件号码</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="base.identification"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>意向城市</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="base.preferred_city"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 教育经历 -->
        <div class="uploadResume-section createFormSection-mutiple">
          <div class="createFormSection-left">
            <div class="createFormSection-title">
              <div class="createFormSection-text sofiaBold">教育经历</div>
            </div>
          </div>
          <div class="createFormSection-right">
            <div class="createFormSection-formList">
              <div class="record-row">
                <div class="record-title">
                  <span>学校</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="education.school"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>学历类型</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="education.education_type"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>专业</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="education.major"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>时间</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-date-picker
                    v-model="education.start_time"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                  -
                  <el-date-picker
                    v-model="education.end_time"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                </div>
                <div class="record-row">
                  <div class="record-title">
                    <span>成绩排名</span>
                    <span>*</span>
                  </div>
                  <div class="record-input">
                    <el-input
                      v-model="education.score_rank"
                      placeholder="请输入内容"
                    ></el-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 工作经历 -->
        <div class="uploadResume-section createFormSection-mutiple">
          <div class="createFormSection-left">
            <div class="createFormSection-title">
              <div class="createFormSection-text sofiaBold">工作经历</div>
            </div>
          </div>
          <div class="createFormSection-right">
            <div class="createFormSection-formList">
              <div class="record-row">
                <div class="record-title">
                  <span>公司</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="work.company"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>职位</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="work.position"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>时间</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-date-picker
                    v-model="work.start_time"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                  -
                  <el-date-picker
                    v-model="work.end_time"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>描述</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="work.desc"
                  >
                  </el-input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 项目经历 -->
        <div class="uploadResume-section createFormSection-mutiple">
          <div class="createFormSection-left">
            <div class="createFormSection-title">
              <div class="createFormSection-text sofiaBold">项目经历</div>
            </div>
          </div>
          <div class="createFormSection-right">
            <div class="createFormSection-formList">
              <div class="record-row">
                <div class="record-title">
                  <span>项目名称</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="project.name"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>项目角色</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="project.role"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>时间</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-date-picker
                    v-model="project.start_time"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                  -
                  <el-date-picker
                    v-model="project.end_time"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>项目描述</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    type="desc"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="project.desc"
                  >
                  </el-input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 竞赛 -->
        <div class="uploadResume-section createFormSection-mutiple">
          <div class="createFormSection-left">
            <div class="createFormSection-title">
              <div class="createFormSection-text sofiaBold">竞赛</div>
            </div>
          </div>
          <div class="createFormSection-right">
            <div class="createFormSection-formList">
              <div class="record-row">
                <div class="record-title">
                  <span>竞赛名称</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input
                    v-model="competition.name"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>说明</span>
                </div>
                <div class="record-input">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="competition.desc"
                  >
                  </el-input>
                </div>
              </div>
              <!-- <div class="record-row">
                <div class="record-title">
                  <span>竞赛名称</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>说明</span>
                </div>
                <div class="record-input">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
                  >
                  </el-input>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <!-- 自我评价 -->
        <div class="uploadResume-section createFormSection-mutiple">
          <div class="createFormSection-left">
            <div class="createFormSection-title">
              <div class="createFormSection-text sofiaBold">自我评价</div>
            </div>
          </div>
          <div class="createFormSection-right">
            <div class="createFormSection-formList">
              <div class="record-row">
                <div class="record-title">
                  <span>自我评价</span>
                  <span></span>
                </div>
                <div class="record-input">
                  <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入内容"
                    v-model="base.self_evaluation"
                  >
                  </el-input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 提交-底部 -->
        <div class="demo-drawer__footer">
          <el-button @click="cancle">取消</el-button>
          <!-- <a href="/index/personal/resume/view"><el-button @click="cancle">取消</el-button></a> -->
          <el-button type="primary" @click="updateResumeBody">确定</el-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResumeEdit",
  data() {
    return {
      resumeId: "",
      resumuAvatarAction: "",
      resumuAttachAction: "",
      base: {
        name: "",
        phone: "",
        email: "",
        identification: "",
        preferred_city: "",
        self_evaluation: "",
        resume_attach_origin_name: ""
      },
      education: {
        school: "",
        education_type: "",
        major: "",
        start_time: "",
        end_time: "",
        score_rank: "",
      },
      work: {
        position: "",
        start_time: "",
        end_time: "",
        desc: "",
      },
      project: {
        name: "",
        role: "",
        start_time: "",
        end_time: "",
        desc: "",
      },
      competition: {
        name: "",
        desc: "",
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getResumeId();
    },
    // 获取resumeId
    getResumeId() {
      // let userId = 14;
      let userId = this.$store.state.user.id;
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
          // 简历照片和附件上传地址
          this.resumuAvatarAction = "http://localhost:8082/resume/uploadResumeAvatar?resumeId=" + this.resumeId;
          this.resumuAttachAction = "http://localhost:8082/resume/uploadResumeAttach?resumeId=" + this.resumeId;
          // 获取简历
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
          this.base = res.data.base;
          this.education = res.data.education;
          this.work = res.data.work;
          this.competition = res.data.competition;
          this.project = res.data.project;
        }
      });
    },
    // 修改简历-全部
    updateResumeBody() {
      axios({
        method: "post",
        url: "http://localhost:8082/resume/updateResumeBody",
        data: {
          resumeId: this.resumeId,
          base: this.base,
          education: this.education,
          work: this.work,
          project: this.project,
          competition: this.competition,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.$message({
            message: "简历修改成功!",
            type: "success",
          });
        } else {
          this.$message({
            message: "简历修改失败!",
            type: "error",
          });
        }
      });
    },
    // 取消修改，返回页面
    cancle() {
      window.location.href = "/index/personal/resume/view";
    },
    // 简历附件上传成功
    handleAttachSuccess(res, file) {
      if (res.status == 0) {
        this.$message({
          message: "简历附件上传成功!",
          type: "success",
        });
        this.base.resume_attach_origin_name = res.data.originAttachName;
        console.log("resume_attach_origin_name=>" + this.base.resume_attach_origin_name);
      } else {
        this.$message({
          message: "简历附件上传失败! " + res.msg,
          type: "error",
        });
      }
    },
    // 简历照片上传成功
    handleAvatarSuccess(res, file) {
      if (res.status == 0) {
        this.$message({
          message: "简历照片上传成功!",
          type: "success",
        });
        this.base.resume_avatar_url = res.data.newResumeAvatarUrl;
        console.log("resume_avatar_url=>" + this.base.resume_avatar_url);
      } else {
        this.$message({
          message: "简历照片上传失败! " + res.msg,
          type: "error",
        });
      }
    },
    // 简历照片上传前
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传简历照片大小不能超过 2MB!");
      }
      return isLt2M;
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* 简历顶部 */
.resumeEditForm-header {
  margin-bottom: 20px;
}

/* 头像 */
.avatar-lable {
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #646a73;
}
.avatar-div {
  position: absolute;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-div:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

/* 表单 */
.resumeEditForm-wrapper {
  width: 1064px;
  margin: 0 auto 40px;
}
.resumeEditForm-header {
  width: 100%;
  margin-top: 50px;
}
.resumeEditForm-headerText {
  margin-left: 24px;
  font-size: 30px;
  font-weight: 800;
  color: #1f2329;
}
.resumeEditForm-Form {
  width: 550px;
  margin: 20px auto 20px;
}

.uploadResume-section {
  /* border-radius: 8px; */
  padding-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  margin-top: 10px;
  padding-left: 5px;
  /* border-bottom: 2px; */
  padding-right: 5px;
  /* border-bottom-color: blue; */
  border-bottom: 1px solid #ebe8e8;
  cursor: pointer;
}

.uploadResume-section:hover {
  /* -webkit-box-shadow: #ccc 0px 2px 10px;
  -moz-box-shadow: #ccc 0px 2px 10px;
  box-shadow: #ccc 0px 2px 8px; */
  background-color: #f9fbff;
}

.createFormSection-title {
  color: #1f2329;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 15px;
}

.record-row {
  margin-bottom: 10px;
}

.record-title {
  color: #1f2329;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.record-title-foucs {
  margin-left: 5px;
  color: #f54a45;
}
.demo-drawer__footer {
  display: flex;
  padding: 20px;
  /* padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px; */
  /* position: absolute;
  bottom: 0;
  right: 0;
  left: 0; */
}
</style>
