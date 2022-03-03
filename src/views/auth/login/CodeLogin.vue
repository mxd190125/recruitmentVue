<template>
  <div class="code-login">
    <div class="code-container">
      <el-input
        placeholder="请输入手机号/邮箱"
        clearable
        v-model="phone"
        class="login-input"
      />
      <div>
        <el-input
          placeholder="请输入验证码"
          clearable
          v-model="code"
          class="login-code-input"
        />
        <el-button type="primary" v-show="show"  @click="getCode" class="login-code-btn"><span>{{ codeOptName }}</span></el-button>
        <el-button type="primary" v-show="!show" class="login-code-btn"><span>{{ cnt }} s</span></el-button>
      </div>
      <el-button type="primary" @click="login" round class="login-sub-btn"
        ><span>登 录</span></el-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CodeLogin",
  data() {
    return {
      phone: "",
      code: "",
      codeOptName: "获取验证码",

      codeTimer: null,
      show: true,
      cnt: "",
      TIME_CNT: 300,
    };
  },
  created() {
  },
  methods: {
    login() {},
    getCode() {
      if (this.phone == null || this.phone == '') {
        this.$message({
          message: '手机号或邮箱不能为空!',
          type: "error",
        });
        return;
      }
      axios({
        method: "get",
        url: "http://localhost:8081/auth/getCode",
        params: {
          username: this.phone
        }
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.$message({
            message: res.msg,
            type: "success",
          });
          // 验证码倒计时
          this.setCodeTimer();
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
          return;
        }
      });
    },
    // 验证码倒计时
    setCodeTimer() {
      this.show = false;
      this.cnt = this.TIME_CNT
      this.codeTimer = setInterval(() => {
        if (this.cnt > 0 && this.cnt <= this.TIME_CNT) {
          this.cnt--;
        } else {
          this.show = true;
          clearInterval(this.codeTimer);
          this.codeTimer = null;
        }
      }, 1000);
    },
    login() {
      if (this.phone == null || this.phone == '') {
        this.$message({
          message: '手机号或邮箱不能为空!',
          type: "error",
        });
        return;
      }
      if (this.code == null || this.code == '') {
        this.$message({
          message: '验证码不能为空!',
          type: "error",
        });
        return;
      }
      axios({
        method: "get",
        url: "http://localhost:8081/auth/codeLogin",
        params: {
          username: this.phone,
          code: this.code
        }
      }).then((res) => {
        res = res.data;
        if (res.status == 1000) {
          console.log('验证码登录成功!')
          this.$message({
            message: '登录成功!',
            type: "success",
          });
          let user = {
            id: res.data.info.id,
            username: res.data.info.username,
            authorities: res.data.info.authorities,
            avatarUrl: res.data.info.avatarUrl,
            token: res.data.token,
          }
          console.log("验证码登录=>" + JSON.stringify(user))
          this.$store.commit("setUser", user);
          window.location.href='http://localhost:8080/index';
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
          return;
        }
      });
    }
  },
  mounted() {},
};
</script>

<style scoped>
.code-container {
  text-align: center;
}
.login-input {
  width: 90%;
  margin: 25px auto 5px;
}
.login-code-input {
  width: 50%;
  margin: 25px auto 5px;
}
.login-sub-btn {
  width: 90%;
  margin-top: 47px;
  margin-bottom: 10px;
}
.login-code-btn {
  width: 40%;
}
.login-sub-btn > span {
  font-size: 16px;
}
</style>
