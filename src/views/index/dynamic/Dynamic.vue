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
        <dynamic-item
          v-for="item in articleList"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :textAbstract="item.textAbstract"
          :goodNum="item.goodNum"
          :discussNum="item.discussNum"
          @click.native="showDynamicDetail(item)"
        />
      </div>
      <div class="load-more">
        <div @click="loadMore">阅读更多</div>
      </div>
    </div>
  </div>
</template>    

<script>
import axios from "axios";
import DynamicItem from "./DynamicItem.vue";

export default {
  components: { DynamicItem },
  name: "Dynamic",
  data() {
    return {
      dynamicSlideaImgSrc:
        "https://upload.jianshu.io/admin_banners/web_images/5054/c9aadf71d6c4429a3960f4da0a421171805d16fc.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
      articleList: [],

      size: 10,
      page: 1,
      total: 0,
      pages: -1,
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    // 获取文章列表
    getArticleList() {
      if (this.page > this.pages && this.pages != -1) {
        return;
      }
      console.log('page===> '+this.page)
      axios({
        method: "post",
        url: "http://localhost:8082/article/getArticleList",
        data: {
          size: this.size,
          page: this.page
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          // 追加
          this.articleList = this.articleList.concat(res.data.data);
          this.size = res.data.size;
          this.page = res.data.page;
          this.total = res.data.total;
          this.pages = res.data.pages;
        }
      });
    },
    // 跳转到文章详情
    showDynamicDetail(item) {
      let id = item.id;
      let { href } = this.$router.resolve({
        path: `/dynamic/detail`,
        query: {
          articleId: id,
        },
      });
      window.open(href, "_blank");
    },
    // 加载更多
    loadMore() {
      this.page = this.page + 1;
      this.getArticleList();
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