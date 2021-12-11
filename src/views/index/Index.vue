<template>
    <div id="index">
        <el-container>
            <el-header style="padding: 0 0;position: fixed;width:100%;">
                <div id="logo-img"><img src="~@/assets/img/index/logo-blue.png" style="height:60px;" alt=""></div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" style="padding-left:52%;position:static;"
                mode="horizontal" active-text-color="#409eff" @select="handleSelect">
                    <el-menu-item index="1">
                        <router-link to="/index/home" style="text-decoration: none;">主页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/index/dynamic" style="text-decoration: none;">动态</router-link>
                    </el-menu-item>
                    <!-- <el-menu-item index="3">
                        <router-link to="/index/internship" style="text-decoration: none;">实习招聘</router-link>
                    </el-menu-item> -->
                    <el-menu-item index="4">
                        <router-link to="/index/campus" style="text-decoration: none;">校园招聘</router-link>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <router-link to="/index/social" style="text-decoration: none;">社会招聘</router-link>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <router-link to="/index/introduce" style="text-decoration: none;">了解百度</router-link>
                    </el-menu-item>
                    <el-submenu index="7">
                        <template v-if="isOnline" slot="title">冬雪是你</template>
                        <template v-else slot="title">登录</template>
                            <el-menu-item index="5-1">我的简历</el-menu-item>
                            <el-menu-item index="5-2">我的账号</el-menu-item>
                            <el-menu-item index="5-3">我的应聘</el-menu-item>
                            <el-menu-item index="5-4">职位收藏</el-menu-item>
                            <el-menu-item index="5-5">退出</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-main style="padding-left: 0px;padding-right: 0px;padding-top: 60px;padding-bottom: 0px;">
                <router-view/>
            </el-main>
            <div id="footer">
                这是底部
            </div>
        </el-container>
    </div>
    
</template>    

<script>
  export default {
    name: "Index",  
    data() {    
        return {
            username: '冬雪是你',
            activeIndex: '1'        
        }       
    },
    computed: {
        isOnline() {
            return this.username != '' ? true : false
        }
    }
    ,
    methods: {
        handleSelect(key, keyPath) {
            this.$router
            console.log(key, keyPath);
      }
    }
}

</script>
               
<style scoped>
#logo-img{
    position: absolute;
    margin-left: 2%;
}
#index{
    /* width: 100%; */
}
#footer{
    transform: transformZ(0);
    background: #1f2329;
    height: 150px;
}
</style>