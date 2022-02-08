<template>
  <div class="dynamic">
    <div class="dynamic-main">
      <div class="dynamic-slide">
        <div class="silde-banner">
          <img class="slide-img" :src="dynamicSlideaImgSrc" alt="" />
        </div>
      </div>
      <div class="dynamic-container-list">
        <!-- 动态文章列表 -->
        <dynamic-item @click.native="showDynamicDetail()" />
        <dynamic-item @click.native="showDynamicDetail()" />
        <dynamic-item @click.native="showDynamicDetail()" />
        <dynamic-item @click.native="showDynamicDetail()" />
        <dynamic-item @click.native="showDynamicDetail()" />
      </div>
      <div class="load-more">
        <div>阅读更多</div>
      </div>
    </div>
  </div>
</template>    

<script>
import DynamicItem from "./DynamicItem.vue";

export default {
  components: { DynamicItem },
  name: "Dynamic",
  data() {
    return {
      dynamicSlideaImgSrc:
        "https://upload.jianshu.io/admin_banners/web_images/5054/c9aadf71d6c4429a3960f4da0a421171805d16fc.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    };
  },
  methods: {
    // 点击文章详情事件
    showDynamicDetail() {
      let dynamicId = 123456;
      let { href } = this.$router.resolve({
        path: `/dynamic/detail`,
        query: {
          id: dynamicId
        }
      });
      window.open(href, "_blank");
    },
  },
};
</script>
               
<style scoped>
.dynamic-main {
  margin: 0px auto;
  width: 50%;
  padding: 30px 15px 20px 15px;
}
.dynamic-slide {
  margin-bottom: 35px;
  border-radius: 6px;
  overflow: hidden;
  z-index: 1000;
}
.slide-img {
  width: 100%;
}

.load-more {
  text-align: center;
}

.load-more > div {
  cursor: pointer;
  width: 90%;
  height: 21px;
  border-radius: 20px;
  background-color: #a5a5a5;
  margin: auto;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  color: #fff;
}
</style>