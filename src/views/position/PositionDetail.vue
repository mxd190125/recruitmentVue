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
        <el-button type="primary" class="aply-btn">投递</el-button>
      </div>
    </div>
    <div>评论区</div>
  </div>
</template>    

<script>
export default {
  name: "PositionDetail",
  data() {
    return {
      position: {},
      id: 3,
      positionName: "后端实习生-架构",
      cityName: "杭州",
      positionTypeName: "后端",
      recruitTypeName: "校招",
      num: "200",
      createTime: "2021年11月9日",
      description:
        "负责推荐系统架构的设计和开发，保障系统稳定和高可用；负责在线服务、离线数据流性能优化，解决系统瓶颈，降低成本\n开销；抽象系统通用组件和服务，建设推荐中台、数据中台，支撑新产品快速孵化以及为 toB 赋能。\n\n1、负责智能推荐、智能内容等产品的推荐架构工作，解决推荐核心系统的架构优化问题；\n" +
        "2、支持 SaaS 推荐系统的设计和开发工作，将字节核心推荐能力、优质内容输出给合作方；\n" +
        "3、针对推荐场景的架构抽象和流程优化，支持大规模的机器学习的优化，支持推荐平台的研发；\n" +
        "4、针对高并发高吞吐的大规模系统，提升系统的稳定性、性能、可扩展性；\n" +
        "5、核心组件的研发和优化、新技术的应用和落地。",
      requirement:
        "1、扎实的编程能力，有优秀的设计和代码品位，对解决具有挑战性问题充满激情;\n2、对在线架构有丰富的经验和广阔的视野；\n3、开发语言C++/Python；\n4、有以下经验者优先：推荐或搜索相关的开发工作；高并发高吞吐的系统经验。",
    };
  },
  created() {
    this.position =  this.$route.query.position
    console.log(this.position);
  },
  methods: {

  }
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