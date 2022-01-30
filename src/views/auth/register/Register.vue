<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-title">欢迎注册</div>
      <el-input
        placeholder="请输入用户名"
        clearable
        v-model="username"
        class="register-input"
      />
      <el-input
        placeholder="请输入密码"
        clearable
        v-model="password"
        show-password
        class="register-input"
      />
      <el-input
        placeholder="再次确认密码"
        clearable
        v-model="rePassword"
        show-password
        class="register-input"
      />
      <el-input
        placeholder="请输入手机号"
        clearable
        v-model="phone"
        show-password
        class="register-input"
      />
      <div>
        <el-input
          placeholder="请输入短信验证码"
          clearable
          v-model="code"
          class="register-code-input"
        />
        <el-button type="primary" @click="getCode" class="register-code-btn"
          ><span>{{ codeOptName }}</span></el-button
        >
      </div>
      <div>
        <p class="msg">{{ msg }}</p>
      </div>
      <el-button
        type="primary"
        @click="doRegister"
        round
        class="register-sub-btn"
        ><span>注 册</span></el-button
      >
      <div class="back-div">
        <router-link to="/auth/login" style="text-decoration: none">
          <span>返回登录</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      rePassword: "",
      code: "",
      codeOptName: "获取验证码",
      msg: "",
    };
  },
  methods: {
    openSucess(str) {
      this.$message({
        message: str,
        type: "success",
      });
    },
    openFail(str) {
        this.$message.error(str);
      },
    getCode() {
      this.codeOptName = "重新获取";
    },
    doRegister() {
      this.msg = ''
      if (this.username.trim() == "") {
        this.msg = "用户名不能为空!";
        return;
      }
      if (this.password.trim() == "") {
        this.msg = "密码不能为空!";
        return;
      }
      if (this.rePassword.trim() == "") {
        this.msg = "请重复输入密码!";
        return;
      }
      if (this.phone.trim() == "") {
        this.msg = "手机号不能为空!";
        return;
      }
      if (this.phone.trim() == "") {
        this.msg = "手机号不能为空!";
        return;
      }
      if (this.password != this.rePassword) {
        this.msg = "两次输入的密码不一致!";
        return;
      }

      axios({
        method: "post",
        url: "http://localhost:8081/auth/userRegister",
        data: {
          username: this.username,
          password: this.password,
          phone: this.phone,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 2000) {
            this.openSucess(res.msg)
            return
        }
        if (res.status == 2003 || res.status == 2004 
        || res.status == 2005 || res.status == 2006 
        || res.status == 2002 || res.status == 2007
        || res.status == 2001) {
            this.msg = res.msg
            return
        }
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.register-page {
  height: 630px;
}
.register-container {
  text-align: center;
  width: 400px;
  height: 500px;
  margin: 50px auto 20px;
  padding: 20px;
  background-color: #f1f3f4;
  border-radius: 10px;
}
.register-title {
  font-family: cursive;
  font-size: 33px;
  line-height: 33px;
  font-weight: 500;
  cursor: pointer;
  color: #5a9cf8;
}
.register-input {
  width: 90%;
  margin: 25px auto 5px;
}
.register-code-input {
  width: 50%;
  margin: 25px auto 5px;
}
.register-code-btn {
  width: 40%;
}
.register-sub-btn {
  width: 90%;
  margin-top: 25px;
  margin-bottom: 10px;
}
.register-sub-btn > span {
  font-size: 16px;
}
.back-div {
  text-align: left;
  margin: 0px auto;
  width: 90%;
  color: #3370ff;
}
.back-div span {
  color: #3370ff;
  cursor: pointer;
  font-size: 14px;
}
.msg {
  width: 90%;
  text-align: left;
  font-size: 14px;
  color: red;
  margin: 0px auto 5px;
}
</style>
