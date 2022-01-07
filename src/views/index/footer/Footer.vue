<template>
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
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
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
  /* padding-bottom: 60px; */
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
</style>
