<template>
  <div class="pwd-login">
    <div class="pwd-container">
      <el-input
        placeholder="请输入用户名/手机号/邮箱"
        clearable
        v-model="username"
        class="login-input"
      />
      <el-input
        placeholder="请输入密码"
        clearable
        v-model="password"
        show-password
        class="login-input"
      />
      <div class="forget-div">
        <label class="msg">{{ msg }}&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <router-link to="/auth/register" style="text-decoration: none">
          <span>立即注册</span>
        </router-link>
        &nbsp;&nbsp;
        <router-link to="/auth/forget" style="text-decoration: none">
          <span>忘记密码？</span>
        </router-link>
      </div>
      <el-button type="primary" @click="doLogin" round class="login-sub-btn"
        ><span>登 录</span></el-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PwdLogin",
  data() {
    return {
      username: "",
      password: "",
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
    // 账号密码登录
    doLogin() {
      this.msg = "";
      if (this.username.trim() == "") {
        this.msg = "用户名不能为空!";
        return;
      }
      if (this.password.trim() == "") {
        this.msg = "密码不能为空!";
        return;
      }

      axios({
        method: "post",
        url: "http://localhost:8081/login/userLogin",
        params: {
          username: this.username,
          password: this.password,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 1000) {
          this.openSucess(res.msg);
          let user = {
            id: res.data.info.id,
            username: res.data.info.username,
            authorities: res.data.info.authorities,
            avatarUrl: res.data.info.avatarUrl,
            token: res.data.token,
          }
          console.log("账号密码登录=>" + JSON.stringify(user))
          this.$store.commit("setUser", user);
          // this.$store.commit("setToken", res.data.token);
          // let token = this.$store.getters.getToken;
          // console.log("token=>" + token);
          // this.$router.push('/index/home');
          window.location.href='http://localhost:8080/index';
        }
        if (res.status == 1004 || res.status == 1003 || res.status == 1001) {
          this.msg = res.msg;
          return;
        }
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.pwd-container {
  text-align: center;
  /* padding-top: 25px; */
}
.login-input {
  width: 90%;
  margin: 25px auto 5px;
}
.login-sub-btn {
  width: 90%;
  margin-top: 25px;
  margin-bottom: 10px;
}
.login-sub-btn > span {
  font-size: 16px;
}
.forget-div {
  text-align: right;
  margin: 0px auto;
  width: 90%;
  /* color: #3370ff; */
}
.forget-div span {
  color: #3370ff;
  cursor: pointer;
  font-size: 14px;
}
.msg {
  font-size: 14px;
  color: red;
  margin: 0px auto 5px;
}
</style>
