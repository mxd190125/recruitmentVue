<template>
  <div id="application-item-id">
    <div class="application-item">
      <!-- 职位信息 -->
      <div class="sofiaBold title">
        <div class="applicationListItem-name applicationListItem-name-text">
          后端开发工程师-电商业务
        </div>
      </div>
      <div class="subTitle__2zDJc applicationListItem-subTitle">
        <div data-v-4bddac78="" class="position-item-sub-title">
          北京
          <div data-v-4bddac78="" class="lineDevider"></div>
          技术
          <div data-v-4bddac78="" class="lineDevider"></div>
          校招
          <div data-v-4bddac78="" class="lineDevider"></div>
          若干
          <div data-v-4bddac78="" class="lineDevider"></div>
          2021年11月9日
        </div>
      </div>
      <!-- 应聘进度 -->
      <div class="step-container">
        <div class="step">
          <div class="icon-wrapper">
            <img
              src="@/assets/img/application/pass.png"
              alt=""
              class="icon-wrapper-img"
            />
          </div>
          <div class="action">投递简历</div>
          <div class="date">2021-08-15</div>
        </div>
        <!-- <div class="stepDivider"></div> -->

        <div class="step">
          <div class="icon-wrapper">
            <img
              src="@/assets/img/application/pass.png"
              alt=""
              class="icon-wrapper-img"
            />
          </div>
          <div class="action">投递简历</div>
          <div class="date">2021-08-15</div>
        </div>
        <!-- <div class="stepDivider"></div> -->
      </div>
      <div class="position-item-sub-title">2021-08-15 09:58 投递</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationItem",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.application-item {
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 20px 30px 20px 30px;
  margin-top: 15px;
  box-shadow: 0 8px 24px 0 rgb(54 97 174 / 14%);
  cursor: pointer;
}

/* 职位标题 */
.applicationListItem-name {
  font-size: 20px;
  color: rgb(31, 35, 41);
  font-weight: 600;
  margin-bottom: 17px;
}

.position-item-sub-title {
  color: rgb(143, 149, 158);
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 350;
  line-height: 1.5;
  margin: 4px 0 12px;
}
.lineDevider {
  display: inline-block;
  width: 1px;
  height: 12px;
  background-color: #bbbfc4;
  margin: 0 8px;
}

/* 进度 */
.step-container {
  display: flex;
}
.icon-wrapper-img {
  width: 48px;
  height: 48px;
}
.step {
  width: 126px;
  text-align: center;
  margin-right: 30px;
}
.action,
.date {
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 350;
  color: rgb(143, 149, 158);
  margin-bottom: 8px;
}

.stepDivider {
  display: inline-block;
  width: 28px;
  height: 0px;
  border-top: 1px dashed rgb(187, 191, 196);
  margin: 23px 2.5px;
}
</style>
