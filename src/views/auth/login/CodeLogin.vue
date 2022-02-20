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
        <el-button type="primary" @click="getCode" class="login-code-btn"
          ><span>{{ codeOptName }}</span></el-button
        >
      </div>
      <el-button type="primary" @click="login" round class="login-sub-btn"
        ><span>登 录</span></el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeLogin",
  data() {
    return {
      phone: "",
      code: "",
      codeOptName: "获取验证码",
    };
  },
  methods: {
    login() {},
    getCode() {
        this.codeOptName = "重新获取"
    },
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
