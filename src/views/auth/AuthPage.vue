<template>
  <div class="auth-page">
    <div class="auth-container">
      <!-- 认证 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="pwd">
          <span slot="label" class="tab-title">账号密码登录</span>
          <pwd-login />
        </el-tab-pane>
        <el-tab-pane name="code">
          <span slot="label" class="tab-title">验证码登录</span>
          <code-login />
        </el-tab-pane>
      </el-tabs>
      <!-- 第三方 -->
      <div class="other-login-container">
        <p class="other-title">第三方快速登录</p>
        <div class="other-icons">
          <span class="other-icons-item"
            ><img
              src="~@/assets/img/auth/weixin.png"
              alt=""
              class="other-icons-img"
          /></span>
          <span class="other-icons-item"
            ><img
              src="~@/assets/img/auth/qq3.png"
              alt=""
              class="other-icons-img"
          /></span>
        </div>
      </div>
      <!-- 用户协议 -->
      <div class="login-agree">登录即同意 用户协议 与 隐私政策</div>
    </div>
  </div>
</template>

<script>
import PwdLogin from "./login/PwdLogin.vue";
import CodeLogin from "./login/CodeLogin.vue";

export default {
  components: { PwdLogin, CodeLogin },
  name: "AuthPage",
  data() {
    return {
      activeName: "pwd",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.auth-page {
  height: 630px;
}
.auth-container {
  width: 400px;
  height: 500px;
  margin: 50px auto 20px;
  padding: 20px;
  background-color: #f1f3f4;
  border-radius: 10px;
}
.tab-title {
  /* font-family:  */
  font-size: 24px;
  line-height: 33px;
  font-weight: 500;
  cursor: pointer;
}

.other-title {
  padding-top: 30px;
  text-align: center;
  border-top: 1px solid #d4dbdb;
  color: #8f959e;
  font-weight: 500;
}
.other-icons {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.other-icons-item {
  margin: 0 16px;
  cursor: pointer;
}
.other-icons-img {
  width: 40px;
  height: 40px;
}
.login-agree {
  margin-top: 26px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #646a73;
}
</style>
