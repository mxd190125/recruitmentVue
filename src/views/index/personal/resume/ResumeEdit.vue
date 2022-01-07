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
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
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
          <div class="createFormSection-right"></div>
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
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>手机号码</span>
                  <span class="record-title-foucs">*</span>
                </div>
                <div class="record-input">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>邮箱</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>证件号码</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>意向城市</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
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
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>学历</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>学历类型</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>专业</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>时间</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-date-picker
                    v-model="value2"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                  -
                  <el-date-picker
                    v-model="value2"
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
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
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
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>职位</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>时间</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-date-picker
                    v-model="value2"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                  -
                  <el-date-picker
                    v-model="value2"
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
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
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
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>项目角色</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div class="record-row">
                <div class="record-title">
                  <span>时间</span>
                  <span>*</span>
                </div>
                <div class="record-input">
                  <el-date-picker
                    v-model="value2"
                    type="month"
                    placeholder="选择月"
                  >
                  </el-date-picker>
                  -
                  <el-date-picker
                    v-model="value2"
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
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
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
              </div>
              <div class="record-row">
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
              </div>
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
                    v-model="textarea"
                  >
                  </el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeEdit",
  data() {
    return {
      // 头像
      imageUrl: "",
    };
  },
  methods: {
    // 头像
    // 头像加载成功
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 头像上传前
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return i;
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
</style>
