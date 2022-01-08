<template>
  <div id="manage-index-id">
    <el-container>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo el-col-class"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>职位管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">
                <router-link
                  to="/manage/position/release"
                  style="text-decoration: none"
                >
                  职位发布
                </router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-search"></i>
              <span slot="title"
                ><router-link
                  to="/manage/position/query"
                  style="text-decoration: none"
                >
                  职位查询
                </router-link></span
              >
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>企业管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <i class="el-icon-location-outline"></i>
              <span slot="title"
                ><router-link
                  to="/manage/enterprise/dynamic"
                  style="text-decoration: none"
                >
                  招聘动态
                </router-link></span
              >
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-postcard"></i>
              <span slot="title"
                ><router-link
                  to="/manage/enterprise/conduct"
                  style="text-decoration: none"
                >
                  公司宣传
                </router-link></span
              >
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-chat-dot-round"></i>
              <span slot="title"
                ><router-link
                  to="/manage/enterprise/public"
                  style="text-decoration: none"
                >
                  公众号
                </router-link></span
              >
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-chat-line-round"></i>
            <span>我的消息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <i class="el-icon-set-up"></i>
              <span slot="title"
                ><router-link
                  to="/manage/message/process"
                  style="text-decoration: none"
                >
                  流程处理
                </router-link></span
              >
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-chat-square"></i>
              <span slot="title"
                ><router-link
                  to="/manage/message/chat"
                  style="text-decoration: none"
                >
                  消息咨询
                </router-link></span
              >
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="4">
          <i class="el-icon-user-solid"></i>
          <span slot="title"
            ><router-link to="/manage/personal" style="text-decoration: none">
              个人中心
            </router-link></span
          >
        </el-menu-item>
      </el-menu>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "ManageIndex",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.el-col-class {
  width: 200px;
}
</style>
