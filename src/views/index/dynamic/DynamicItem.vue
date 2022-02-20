<template>
  <div class="dynamic-item">
    <div class="item-content">
      <p class="title">{{ title }}</p>
      <p class="abstract">{{ textAbstract }}</p>
      <div class="meta">
        <span><i class="el-icon-chat-square">{{ discussNum }}</i></span>
        <span><i class="el-icon-thumb">{{ goodNum }}</i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicItem",
  props: [
    "id", "title", "textAbstract", "discussNum", "goodNum"
  ],
  data() {
    return {
      // title: "虎虎生威，虎年大吉",
      // abstract:
      //   "岁月中，谁都渴望万事顺遂，然而，谁都不可能真的那么顺利。 可能说，有的人即使并不是那么顺利，也不过只会遇见一些小波折，却也有人，在人生的某一个路...",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.dynamic-item {
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  /* box-shadow: ; */
}
.title {
  cursor: pointer;
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}
.meta {
  padding-right: 0 !important;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #b4b4b4;
}
.meta span {
  margin-right: 10px;
}
</style>
