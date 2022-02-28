<template>
  <div id="personal-index-id">
    <el-card class="box-card my-card">
      <div slot="header" class="clearfix">
        <span>{{ username }}</span>
      </div>
      <el-upload
        class="avatar-uploader"
        :action="avatarAction"
        name="file"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="avatarUrl" :src="avatarUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div><el-tag>用户名</el-tag></div>
      <div><el-tag>密码</el-tag></div>
      <div><el-tag>邮箱</el-tag></div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PersonalIndex",
  data() {
    return {
      username: "",
      oldPassword: "",
      newPassword: "",
      isBaidu: "",
      isAlipay: "",
      avatarUrl: "",
      avatarAction: "",
      // userIdParam: ""
      // user: {
      //   userId: ''
      // }
    };
  },
  created() {
    // this.userIdParam= 'userId=' + this.$store.state.user.id;
    // this.username = this.$store.state.user.username;
    this.avatarUrl = this.$store.state.user.avatarUrl;
    // this.oldPassword = this.$store.state.user.oldPassword;
    // this.isBaidu = this.$store.state.user.isBaidu;
    // this.isAlipay = this.$store.state.user.isAlipay;
    this.username = "冬雪是你";
    this.oldPassword = "190125";
    this.isBaidu = 1;
    this.isAlipay = 0;
    this.avatarAction = "http://localhost:8081/auth/uploadAvatar?userId=14";
    // this.avatarUrl =
    //   "https://tfs.alipayobjects.com/images/partner/TB1VF.oaz4ADuNjm2EPXXc__pXa";
    // this.avatarUrl = 'https://tfs.alipayobjects.com/images/partner/TB1RB9oXARDDuNkUvSRXXbm6pXa';
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log("status:" + res.status);
      // this.avatarUrl = URL.createObjectURL(file.raw);
      if (res.status == 0) {
        this.$message({
          message: "头像上传成功!",
          type: "success",
        });
        this.avatarUrl = res.data.newAvatarUrl;
        console.log("newAvatarUrl=>" + this.avatarUrl);
      } else {
        this.$message({
          message: "头像上传失败!",
          type: "error",
        });
      }
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.my-card {
  width: 500px;
  margin: auto;
  height: 500px;
}

/* .avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
} */
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
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
</style>
