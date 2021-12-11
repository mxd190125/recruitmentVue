<template>
    <div id="campus">
      <div class="searchBlockArea">
        <div class="swiper-container">
          <div class="carousel_image" ></div>
        </div>
        <!-- 搜索 -->
        <div class="search-block" style="display: block; opacity: 1;">
          <span class="atsx-input-affix-wrapper">
            <span class=""></span>
            <input autocomplete="off" class="atsx-input"  placeholder="搜索职位" type="text" value="">
            <span class="atsx-input-suffix">
              <button type="button" class="atsx-btn">
                <span>搜索</span>
              </button>
            </span>
          </span>
          <div class="filter">
            <div class="role-filter">
              <el-checkbox-group v-model="roleCheckList">
                <el-checkbox label="应届生"></el-checkbox>
                <el-checkbox label="实习生"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="city-filter">
              <span class="filter-lable">城市：</span>
              <el-checkbox :indeterminate="cityIsIndeterminate" v-model="cityCheckAll" @change="handleCheckAllChange">全选</el-checkbox>
              <el-checkbox-group v-model="cityCheckedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cityCities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="position-filter">
              <span class="filter-lable">岗位：</span>
              <el-checkbox :indeterminate="typeIsIndeterminate" v-model="typeCheckAll" @change="handleCheckAllChange">全选</el-checkbox>
              <el-checkbox-group v-model="checkedTypes" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="type in types" :label="type" :key="type">{{type}}</el-checkbox>
              </el-checkbox-group>
            </div>
            
          </div>
        </div>
      </div>
      <div class="boderContainer">
        <!-- 右侧面板 -->
        <div class="rightBlock">
          <position-item v-for="position in positions" :key="position.id" @click.native="showPositonDetail(position.id)"
                    :id="position.id"
                    :title="position.title" 
                    :base="position.base" 
                    :recruitmentType="position.recruitmentType"
                    :quantity="position.quantity"
                    :positionType="position.positionType"
                    :description="position.description"
                    :release="position.release">
        </position-item>
        </div>
      </div>
    </div>       
</template>    

<script>
import PositionItem from '../../position/PositionItem.vue'
  export default {
  components: { PositionItem },
    name: "Campus",  
    data() {    
        return {
            cityCheckAll: false,
            cityCheckedCities: ['上海', '北京'],
            cityCities: [],
            cityIsIndeterminate: true,

            typeCheckAll: false,
            checkedTypes: ['后端', '前端'],
            types: [],
            typeIsIndeterminate: true,

            roleCheckList: ['应届生','实习生'],

            positions: [
              {
                id: '1',
                title:'后端研发工程师-钱包支付-抖音/直播',
                base:'北京',
                recruitmentType:"校招",
                quantity:"若干",
                positionType:"技术",
                release:"2021年11月9日",
                description:"1、负责设计和实现大规模、高效、智能的基于 Kubernetes 平台的边缘计算新一代调度体系；\n"
                +"2、负责平台稳定性、高可用和高性能，提高资源利用效率，降低成本；\n"
                +"3、负责建设智能调度，结合动态运行数据、深度学习、强化学习等技术打造下一代智能化、可视化调度技术；\n"
                +"4、支持计算类、大数据类、机器学习等业务的资源调度，设计和研发高并发、低延迟、大规模的调度技术。"
              },
              {
                id: '2',
                title:'后端研发工程师-钱包支付-抖音/直播',
                base:'北京',
                recruitmentType:"校招",
                quantity:"若干",
                positionType:"技术",
                release:"2021年11月9日",
                description:"1、负责设计和实现大规模、高效、智能的基于 Kubernetes 平台的边缘计算新一代调度体系；\n"
                +"2、负责平台稳定性、高可用和高性能，提高资源利用效率，降低成本；\n"
                +"3、负责建设智能调度，结合动态运行数据、深度学习、强化学习等技术打造下一代智能化、可视化调度技术；\n"
                +"4、支持计算类、大数据类、机器学习等业务的资源调度，设计和研发高并发、低延迟、大规模的调度技术。"
              },
              {
                id: '3',
                title:'后端研发工程师-钱包支付-抖音/直播',
                base:'北京',
                recruitmentType:"校招",
                quantity:"若干",
                positionType:"技术",
                release:"2021年11月9日",
                description:"1、负责设计和实现大规模、高效、智能的基于 Kubernetes 平台的边缘计算新一代调度体系；\n"
                +"2、负责平台稳定性、高可用和高性能，提高资源利用效率，降低成本；\n"
                +"3、负责建设智能调度，结合动态运行数据、深度学习、强化学习等技术打造下一代智能化、可视化调度技术；\n"
                +"4、支持计算类、大数据类、机器学习等业务的资源调度，设计和研发高并发、低延迟、大规模的调度技术。"
              },
              {
                id: '4',
                title:'后端研发工程师-钱包支付-抖音/直播',
                base:'北京',
                recruitmentType:"校招",
                quantity:"若干",
                positionType:"技术",
                release:"2021年11月9日",
                description:"1、负责设计和实现大规模、高效、智能的基于 Kubernetes 平台的边缘计算新一代调度体系；\n"
                +"2、负责平台稳定性、高可用和高性能，提高资源利用效率，降低成本；\n"
                +"3、负责建设智能调度，结合动态运行数据、深度学习、强化学习等技术打造下一代智能化、可视化调度技术；\n"
                +"4、支持计算类、大数据类、机器学习等业务的资源调度，设计和研发高并发、低延迟、大规模的调度技术。"
              },
              {
                id: '5',
                title:'后端研发工程师-钱包支付-抖音/直播',
                base:'北京',
                recruitmentType:"校招",
                quantity:"若干",
                positionType:"技术",
                release:"2021年11月9日",
                description:"1、负责设计和实现大规模、高效、智能的基于 Kubernetes 平台的边缘计算新一代调度体系；\n"
                +"2、负责平台稳定性、高可用和高性能，提高资源利用效率，降低成本；\n"
                +"3、负责建设智能调度，结合动态运行数据、深度学习、强化学习等技术打造下一代智能化、可视化调度技术；\n"
                +"4、支持计算类、大数据类、机器学习等业务的资源调度，设计和研发高并发、低延迟、大规模的调度技术。"
              }]
        }       
    },
    created() {
      this.cityCities = ['上海', '北京', '广州', '深圳'];
      this.types = ['后端', '前端', '算法', '运营'];
    },
    methods: {
      handleCheckAllChange(val) {
        this.cityCheckedCities = val ? cityCities : [];
        this.cityIsIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.cityCheckAll = checkedCount === this.cityCities.length;
        this.cityIsIndeterminate = checkedCount > 0 && checkedCount < this.cityCities.length;
      },
      showPositonDetail(id) {
        console.log('跳转详细页面....'+'id:'+id);
        this.$router.push('/position/showPositionDetail');
      }
    }
}

</script>
               
<style scoped>
.swiper-container{
  height: 300px;
}
.carousel_image{
  background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    position: relative;
    cursor: pointer;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  background-image: url("https://lf26-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/campus/427bannernew.png");
}

/* 搜索 */
.search-block{
  text-align: center;
}
/* 搜索框 */
.atsx-input{
  padding-top: 1px;
  margin-top: 12px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1.5px solid #3370ff;
  width: 300px;
  height: 44px;
  padding-left: 36px;
  padding-right: 36px;
  
}

/* 搜索按钮 */
.atsx-btn{
  width: 100px;
    border: 0px;
    height: 48px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #3370ff;
    color: #ffff;
    font-size: 14px;
    font-weight: 800;
    padding-left: 26px;
    padding-right: 26px;
}
/* 筛选过滤 */
.filter{
  margin-top: 18px;
}
.filter-lable{
  color: #646a73;
}


.boderContainer{
  flex-shrink: 0;
    width: 276px;
    margin-right: 35px;
    position: relative;
}

.rightBlock{
  width: 712px;
  padding-left: 451px;
}
</style>