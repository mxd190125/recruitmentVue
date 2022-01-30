<template>
  <div class="dynamic-detail">
    <div class="main">
      <div class="content-wrap">
        <!-- 内容区 -->
        <div class="content">
          <h1 class="article-title">虎虎生威</h1>
          <div class="article-info-wrap">
            <div class="article-info">
              <!-- 时间 -->
              <span>2021.12.23 16:55:02</span>
              <!-- 字数 -->
              <span>字数 192</span>
              <!-- 阅读量 -->
              <span>阅读 13,244</span>
            </div>
          </div>
          <article class="article-text">{{ articleText }}</article>
          <div class="nav-other-article">
            <div class="nav-opt"><span>上一篇</span></div>
            <div class="nav-list nav-opt">查看连载目录</div>
            <div class="nav-opt"><span>下一篇</span></div>
          </div>
        </div>
        <!-- 评论区 -->
        <div class="note-page-comment">
          <div class="comment-wrap"></div>
        </div>
      </div>
    </div>
    <footer>
      <div class="discuss-wrap">
        <div class="discuss-div">
          <div class="discuss-input-div">
            <textarea class="discuss-textarea" placeholder="写下您的评论..." />
          </div>
          <div class="discuss-meta-div">
            <div class="meta-item">
              <i class="el-icon-chat-square"></i>
              <span>评论63</span>
            </div>
            <div class="meta-item">
              <i class="el-icon-thumb"></i>
              <span>赞441</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {},
  name: "DynamicDetail",
  data() {
    return {
      articleText:
        "得知高中同学年薪200万，我顿觉自己好穷。\n" +
        "一下午在医院等着看外科医生，预约的34号，这会还没看上，大概率到5:30下班前了。\n" +
        "有点犹豫要不要动手术了！与它同在行不行？\n" +
        "往自己胸口上动一刀，还是需要勇气的。虽然说年轻恢复快，可还是要一百天才能复原。\n" +
        "不动的话，也不敢赌这个风险，毕竟不是什么好东西。\n" +
        "有时想，疾病真的是自己造的孽，没好好对待自己的身体，没好好稳定自己的情绪，受外界影响太大了。\n" +
        "以后得改",
    };
  },
  created() {
    let dynamicId = this.$route.params.dynamicId;
    console.log(dynamicId);
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.line {
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: #eee;
}

.dynamic-detail {
  background-color: #f9f9f9;
}
.main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 66px);
  padding-top: 10px;
  font-size: 16px;
  box-sizing: content-box;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
}
.content-wrap {
  flex-shrink: 0;
  margin-bottom: 24px;
  /* margin-right: 10px; */
  width: 730px;
}
.content {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  padding: 32px;
}
.article-title {
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  margin-top: 32px;
  color: #404040;
  text-rendering: optimizelegibility;
  margin-bottom: 0.5em;
}
.article-info-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  font-size: 13px;
}
.article-info {
  display: flex;
  color: #969696;
}
.article-info span {
  margin-right: 10px;
}

.article-text {
  font-weight: 400;
  line-height: 2.8;
  margin-bottom: 20px;
  word-break: break-word;
  position: relative;
}

.nav-other-article {
  display: flex;
  align-items: center;
  margin: 30px 0;
  line-height: 20px;
  border-radius: 30px;
  background-color: #f2f2f2;
}

.nav-opt {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 60px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
.nav-list {
  height: 20px;
  color: #8c8c8c;
  font-weight: normal;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  cursor: pointer;
}

/* 文章下面评论 */
.comment-wrap {
  padding: 32px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
}
/* 底部固定评论 */
.discuss-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgb(0 0 0 / 5%);
  z-index: 100;
}
.discuss-div {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: content-box;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  /* margin-right: auto; */
  width: 1000px;
  overflow: auto;
}
.discuss-input-div {
  display: flex;
  position: relative;
}
.discuss-textarea {
  display: inline-flex;
  width: 400px;
  height: 20px;
  resize: none;
  margin-right: 16px;
  padding: 8px 18px;
  border-radius: 18px;
  border: none;
  transition: all 0.2s cubic-bezier(0.19, 0.4, 0.17, 0.85);
  background-color: #f2f2f2;

  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}
.discuss-meta-div {
  display: flex;
  align-items: center;
  margin-left: 16px;
}
.meta-item {
  margin-right: 24px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #969696;
}
.meta-item span {
  margin-left: 8px;
  line-height: 20px;
}
</style>
