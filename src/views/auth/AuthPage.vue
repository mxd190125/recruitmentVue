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
          <!-- 百度 -->
          <span class="other-icons-item"
            ><img
              src="~@/assets/img/auth/baidu.png"
              alt=""
              class="other-icons-img"
              @click="baiduLogin"
          /></span>
          <!-- 支付宝 -->
          <span class="other-icons-item"
            ><img
              src="~@/assets/img/auth/alipay3.png"
              alt=""
              class="other-icons-img"
              @click="alipayLogin"
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
import axios from 'axios';

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
    // 第三方登录-百度
    baiduLogin() {
      axios({
        method: "get",
        url: 'http://localhost:8081/auth/baidu/login'
      }).then((res)=>{
        res = res.data;
        if (res.status == 0) {
          console.log("url=>" + res.msg);
          // 跳转至百度授权页面 msg为授权页面URL
          window.location.href = res.msg;
        }
      });
      // window.location.href = 'http://openapi.baidu.com/oauth/2.0/authorize?client_id=6PymiRqvIcnNpqGGajlm7nn1&response_type=code&redirect_uri=http://04528914x8.picp.vip/index&display=dialog&confirm_login=1'
    },
    // 第三方登录-支付宝
    alipayLogin() {
      axios({
        method: "get",
        url: 'http://localhost:8081/auth/alipay/login'
      }).then((res)=>{
        res = res.data;
        if (res.status == 0) {
          console.log("url=>" + res.msg);
          // 跳转至支付宝授权页面 msg为授权页面URL
          window.location.href = res.msg;
        }
      });
    }
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
