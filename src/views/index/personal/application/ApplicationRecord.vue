<template>
  <div id="application-record-id">
    <div class="application-record" v-for="(application, index) in myApplications" :key="index">
      <application-item :post_info="application.post_info" 
      :process_list="application.process_list" 
      :delivery_time="application.delivery_time"></application-item>
    </div>
    <el-card v-show="myApplications.length==0" class="box-card tips-card">
      <p>您的应聘空空如也～～～</p>
      <p><a href="/index/campus">去投递吧!</a></p>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

import ApplicationItem from "./ApplicationItem.vue";

export default {
  components: { ApplicationItem },
  name: "ApplicationRecord",
  data() {
    return {
      myApplications: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getMyApplication();
    },
    // 获取我的应聘
    getMyApplication() {
      axios({
        method: "get",
        url: "http://localhost:8082/process/getMyApplication",
        params: {
          userId: this.$store.state.user.id,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.myApplications = res.data;
        }
      });
    }
  },
  mounted() {},
};
</script>

<style scoped>
#application-record-id {
  background: rgb(248, 249, 250);
  padding: 20px 0 20px 0;
}

.application-record {
  margin: 0 auto 0;
  width: 800px;
}
.tips-card {
  width: 50%;
  margin: auto;
  height: 350px;
}
</style>
