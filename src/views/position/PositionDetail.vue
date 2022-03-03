<template>
  <div id="positionDetail">
    <div class="job-detail">
      <div class="job-header">
        <span class="jobTitle">{{ position.positionName }}</span>
      </div>
      <div class="job-info">
        <span>{{ position.cityName }}</span>
        <div class="lineDevider"></div>
        <span>{{ position.positionTypeName }}</span>
        <div class="lineDevider"></div>
        <span>{{ position.recruitTypeName }}</span>
        <div class="lineDevider"></div>
        <span>{{ position.num }}</span>
        <div class="lineDevider"></div>
        <span>{{ position.createTime }}</span>
      </div>
      <div class="block-title">职位描述</div>
      <div class="block-content">{{ position.description }}</div>
      <div class="block-title">职位要求</div>
      <div class="block-content">{{ position.requirement }}</div>
      <div class="aply-block">
        <el-button type="primary" class="aply-btn" @click="deliveryThePosition"
          >投递</el-button
        >
      </div>
    </div>
    <div>评论区</div>
  </div>
</template>    

<script>
import axios from "axios";

export default {
  name: "PositionDetail",
  data() {
    return {
      positionId: '',
      position: {},
    };
  },
  created() {
    this.positionId = this.$route.query.positionId;
    console.log("职位ID:" + this.positionId);
    this.getPositionDetail();
  },
  methods: {
    getPositionDetail() {
      axios({
        method: "post",
        url:
          "http://localhost:8082/position/getPositionDetail?id=" +
          this.positionId,
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.position = res.data;
        } else {
          this.$message({
            message: "简历获取失败! " + res.msg,
            type: "error",
          });
        }
      });
    },
    // 简历投递
    deliveryThePosition() {
      // let userId = 14;
      let userId = this.$store.state.user.id;
      axios({
        method: "post",
        url: "http://localhost:8082/process/deliveryThePosition",
        data: {
          userId: userId,
          positionId: this.positionId,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.$message({
            message: "投递成功!",
            type: "success",
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
        }
      });
    },
  },
};
</script>
               
<style scoped>
.job-detail {
  font-size: 16px;
  max-width: 700px;
  min-height: 573px;
  margin: 60px auto 110px;
  padding-left: 32px;
}
.job-header {
  margin-bottom: 13px;
  position: relative;
  font-size: 30px;
  font-weight: 800;
  color: #1f2329;
}
.job-info {
  color: #646a73;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 500;
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
.block-title {
  margin: 38px 0 8px;
  font-size: 21px;
  line-height: 1.52;
  font-weight: 800;
  color: #1f2329;
}
.block-content {
  line-height: 2em;
  white-space: pre;
  white-space: pre-line;
  word-break: break-word;
  font-size: 12px;
  color: #646a73;
}

.aply-block {
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin: 50px 0;
  line-height: 40px;
  height: 40px;
}

.aply-btn {
  background-color: #3370ff;
}
</style>