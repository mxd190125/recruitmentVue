<template>
  <div id="index">
    <el-container>
      <el-header
        style="
          padding: 0 0;
          position: fixed;
          width: 100%;
          z-index: 1;
          background-color: white;
        "
      >
        <div id="logo-img">
          <img
            src="~@/assets/img/index/baidu-logo4.png"
            style="height: 40px; margin-top: 8px; margin-bottom: 5px"
            alt=""
          />
        </div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          style="padding-left: 52%; position: static"
          mode="horizontal"
          active-text-color="#409eff"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link to="/index/home" style="text-decoration: none"
              >主页</router-link
            >
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/index/dynamic" style="text-decoration: none"
              >动态</router-link
            >
          </el-menu-item>
          <!-- <el-menu-item index="3">
                        <router-link to="/index/internship" style="text-decoration: none;">实习招聘</router-link>
                    </el-menu-item> -->
          <el-menu-item index="4">
            <router-link to="/index/campus" style="text-decoration: none"
              >校园招聘</router-link
            >
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/index/social" style="text-decoration: none"
              >社会招聘</router-link
            >
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/index/introduce" style="text-decoration: none"
              >了解我们</router-link
            >
          </el-menu-item>
          <!-- 登录成功 -->
          <el-submenu index="7" v-if="isOnline">
            <template slot="title">
              <img :src="avatarUrl" class="avatar" alt="">
              {{username}}
            </template>
            <router-link
              to="/index/personal/resume/view"
              style="text-decoration: none"
            >
              <el-menu-item index="7-1">我的简历</el-menu-item>
            </router-link>
            <el-menu-item index="7-2">我的账号</el-menu-item>
            <router-link
              to="/index/personal/application/view"
              style="text-decoration: none"
            >
              <el-menu-item index="7-3">我的应聘</el-menu-item>
            </router-link>
            <el-menu-item index="7-4">职位收藏</el-menu-item>
            <el-menu-item index="7-5" @click="logOut">退出</el-menu-item>
          </el-submenu>
          <!-- 登录 -->
          <el-menu-item v-else index="8">
            <router-link to="/auth/login" style="text-decoration: none"
              >登录</router-link
            >
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main
        style="
          padding-left: 0px;
          padding-right: 0px;
          padding-top: 60px;
          padding-bottom: 0px;
        "
      >
        <router-view />
      </el-main>
      
      <div id="footer">
        <div class="footer-container tiktok-footer">
          <div class="footer-content-wrapper">
            <div class="bytedance-logo footer-content-column">
              <div class="logo-container">
                <img src="@/assets/img/footer/baidu-logo1.png" alt="" />
              </div>
              <h2>© 1999-2022 百度在线网络技术(北京)有限公司</h2>
              <h2>京公网安备 11000002002023号</h2>
            </div>
            <div class="footer-content-column">
              <h2>联系我们</h2>
              <h3>关于投递</h3>
              <h3>意见反馈</h3>
            </div>
            <div class="footer-content-column">
              <h2>相关网站</h2>
              <h3>成都大学官网</h3>
              <h3>海外招聘</h3>
            </div>
            <div class="footer-content-column">
              <h2>实时动态与招聘信息，关注我们</h2>
              <span class="media-icon"
                ><img src="@/assets/img/footer/weixin.png" alt=""
              /></span>
              <span class="media-icon"
                ><img src="@/assets/img/footer/QQ.png" alt=""
              /></span>
              <span class="media-icon"
                ><img src="@/assets/img/footer/weibo.png" alt=""
              /></span>
              <span class="media-icon"
                ><img src="@/assets/img/footer/douyin2.png" alt=""
              /></span>
            </div>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>    

<script>
import axios from 'axios';
export default {
  name: "Index",
  data() {
    return {
      username: "",
      avatarUrl: '',
      activeIndex: "1",
    };
  },
  computed: {
    isOnline() {
      return this.username != "" ? true : false;
    },
  },
  created() {
    let code = this.$route.query.code;
    if (code != null && code != "") {
      this.handleBaiduLogin(code);
    }
    let user = this.$store.getters.getUser;
    if (user != null) {
      this.username = user.username;
      this.avatarUrl = user.avatarUrl;
      console.log("this.username:", this.username)
      console.log("this.avatarUrl:", this.avatarUrl)
      console.log("token=>" + user.token);
    }
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
    // 处理百度授权完成后的登录
    handleBaiduLogin(code) {
      console.log("code:" + code);
      axios({
        method: "get",
        url: 'http://localhost:8081/auth/baidu/callback?code='+code 
      }).then((res)=>{
        res = res.data;
        if (res.status == 1000) {
          // 登录成功
          this.openSucess(res.msg);
          let user = {
            username: res.data.info.username,
            avatarUrl: res.data.info.avatarUrl,
            token: res.data.token,
          }
          this.$store.commit("setUser", user);
          // this.$store.commit("setToken", res.data.token);
          let token = this.$store.getters.getToken;
          return;
        }
        else if (res.status == 1004 || res.status == 1003 || res.status == 1001) {
          this.msg = res.msg;
          return;
        }
        else if(res.status == 400) {
          console.log(res.msg)
        }
      });
    },
    handleSelect(key, keyPath) {
      this.$router;
      console.log(key, keyPath);
    },
    logOut() {
      this.$store.commit("setUser", null);
      this.username = '';
      this.avatarUrl = '';
      this.openSucess('成功退出!')
      window.location.href='http://localhost:8080/auth/login';
    }
  },
};
</script>
               
<style scoped>
#logo-img {
  position: absolute;
  margin-left: 2%;
}
#index {
  /* width: 100%; */
}
#footer {
  transform: transformZ(0);
  background: #1f2329;
  height: 250px;
}

.footer-container {
  position: relative;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  max-width: 1440px;
  margin: 0 auto;
  color: #fff;
  padding-bottom: 60px;
}

.footer-content-wrapper {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 69px 0 0;
  text-align: left;
}

.bytedance-logo {
  margin-right: 36px;
  margin-left: 96px;

  text-align: left;
  max-width: 382px;
  min-width: 350px;
}

.logo-container {
  margin-bottom: 9px;
}

.logo-container img {
  width: 120px;
  height: 81px;
}
.footer-content-column {
  max-width: 212px;

  flex: 1 1;
  max-width: calc(24.2vw - 136.6px);
  color: #d2d3d4;
  text-align: center;
  position: relative;
}

h2 {
  margin-bottom: 18px;

  font-size: 14px;
  line-height: 22px;
  margin: 4px 0;
  color: #7b7e81;
}

h3 {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin: 4px 0;
}

.media-icon {
  display: inline-block;
  width: 32px;
  height: 32px;

  margin-right: 16px;

  margin: 2px calc(2.1vw - 14.3px) 10px 0;
  cursor: pointer;
}

.media-icon img {
  width: 33px;
  height: 32px;
}

.avatar {
  height: 40px; 
  margin-top: 8px; 
  margin-bottom: 5px
}
</style>