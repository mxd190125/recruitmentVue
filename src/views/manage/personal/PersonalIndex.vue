<template>
  <div id="personal-index-id">
    <el-card class="box-card my-card">
      <div slot="header" class="clearfix">
        <span>你好: {{ formData.username }}</span>
        <el-tag v-show="formData.isBaidu==1">百度授权</el-tag>
        <el-tag v-show="formData.isAlipay==1">支付宝授权</el-tag>
        <el-tag v-show="formData.isBaidu!=1&&formData.isAlipay!=1">系统用户</el-tag>
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
      <div class="form-class">
        <el-form ref="formData" :model="formData" label-width="80px">
          <el-form-item label="用户名">
            <el-input
              v-model="formData.username"
              size=""
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input
              v-model="formData.email"
              size=""
              placeholder="请输入邮箱"
            />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input
              v-model="formData.phone"
              size=""
              placeholder="请输入手机号"
            />
          </el-form-item>
          <el-form-item v-show="formData.password" label="原密码">
            <el-input
              v-model="formData.password"
              size=""
              placeholder="请输入原密码"
              show-password
            />
          </el-form-item>
          <el-form-item v-show="formData.password" label="新密码">
            <el-input
              v-model="formData.newPassword"
              size=""
              placeholder="请输入新密码"
              show-password
            />
          </el-form-item>
          <el-form-item v-show="!formData.password" label="设置密码">
            <el-input
              v-model="formData.setPassword"
              size=""
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">修改</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PersonalIndex",
  data() {
    return {
      formData: {
        id: "",
        username: "",
        email: '',
        phone: '',
        password: "",
        newPassword: "",
        setPassword: "",
        isBaidu: "",
        isAlipay: "",
      },

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
    this.formData.username = this.$store.state.user.username;
    this.avatarUrl = this.$store.state.user.avatarUrl;
    this.formData.oldPassword = this.$store.state.user.oldPassword;
    this.formData.isBaidu = this.$store.state.user.isBaidu;
    this.formData.isAlipay = this.$store.state.user.isAlipay;
    // this.username = "冬雪是你";
    // this.oldPassword = "190125";
    // this.isBaidu = 1;
    // this.isAlipay = 0;
    this.avatarAction =
      "http://localhost:8081/auth/uploadAvatar?userId=" +
      this.$store.state.user.id;
    // this.avatarUrl =
    //   "https://tfs.alipayobjects.com/images/partner/TB1VF.oaz4ADuNjm2EPXXc__pXa";
    // this.avatarUrl = 'https://tfs.alipayobjects.com/images/partner/TB1RB9oXARDDuNkUvSRXXbm6pXa';
    this.init();
  },
  methods: {
    init() {
      this.getUserInfo();
    },
    getUserInfo() {
      if (this.$store.state.user.id == null || this.$store.state.user.id == '') {
        this.$message({
          message: "未登录!",
          type: "error",
        });
        return;
      }
      axios({
        method: "post",
        url: "http://localhost:8081/auth/getUserInfo",
        params: {
          userId: this.$store.state.user.id
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.formData.id = this.$store.state.user.id;
          this.formData.username = res.data.username;
          this.formData.email = res.data.email;
          this.formData.phone = res.data.phone;
          this.formData.password = res.data.password;
        }
      });
    },
    onSubmit() {
      console.log(this.formData)
      axios({
        method: "post",
        url: "http://localhost:8081/auth/updateUserInfo",
        data: {
          id: this.formData.id,
          username: this.formData.username,
          email: this.formData.email,
          phone: this.formData.phone,
          password: this.formData.password,
          setPassword: this.formData.setPassword,
          newPassword: this.formData.newPassword,
        }
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.$message({
            message: res.msg,
            type: "success",
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
        }
      });
    },
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
  width: 600px;
  margin: auto;
  height: 650px;
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
  width: 150px;
  height: 150px;
  display: block;
}
.form-class {
  margin-top: 20px;
  width: 55%;
}
</style>
