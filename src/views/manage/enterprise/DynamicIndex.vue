<template>
  <div id="dynamic-index-id">
    <!-- 表格搜索 -->
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="文章标题">
          <el-input
            size="small"
            v-model="formInline.title"
            clearable=""
            placeholder="文章标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="发表人">
          <el-input
            size="small"
            v-model="formInline.username"
            clearable=""
            placeholder="发表人"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="onSubmit"
            >查询</el-button
          >
          <!-- <el-button size="small" type="primary" @click="onCreate">创建</el-button> -->
          <el-button size="small" type="danger" @click="dialog = true"
            >创建</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 新建 -->
    <el-drawer
      title="欢迎发表文章 !"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="文章标题" :label-width="formLabelWidth">
            <el-input
              style="width: 90%"
              v-model="form.title"
              placeholder="请输入标题..."
              clearable
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="正文" :label-width="formLabelWidth">
            <el-input
              style="width: 90%"
              type="textarea"
              v-model="form.text"
              placeholder="请输入内容..."
              clearable
              prefix-icon="el-icon-edit"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()"
            >发 表</el-button
          >
        </div>
      </div>
    </el-drawer>
    <!-- 主体 -->
    <div>
      <el-table
        border
        max-height="500px"
        :data="articleList"
        style="width: 100%"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <!-- 职位详情 -->
            <el-descriptions title="职位信息">
              <el-descriptions-item label="文章ID">{{
                props.row.id
              }}</el-descriptions-item>
              <el-descriptions-item label="文章标题">{{
                props.row.title
              }}</el-descriptions-item>
              <el-descriptions-item label="发表人">
                {{ props.row.username }}
              </el-descriptions-item>
              <el-descriptions-item label="发表时间">{{
                props.row.createTime
              }}</el-descriptions-item>

              <el-descriptions-item label="点赞量">
                <el-tag size="small">{{ props.row.goodNum }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="阅读量"
                ><el-tag size="small">{{
                  props.row.viewNum
                }}</el-tag></el-descriptions-item
              >
              <el-descriptions-item label="评论量">
                <el-tag size="small">{{
                  props.row.discussNum
                }}</el-tag></el-descriptions-item
              >
              <el-descriptions-item label="字数">
                <el-tag size="small">{{
                  props.row.wordNum
                }}</el-tag></el-descriptions-item
              >
              <el-descriptions-item label="摘要">{{
                props.row.textAbstract
              }}</el-descriptions-item>
            </el-descriptions>
          </template>
          <!-- 职位列表 -->
        </el-table-column>
        <el-table-column label="文章ID" prop="id" sortable> </el-table-column>
        <el-table-column label="文章标题" prop="title" sortable>
        </el-table-column>
        <el-table-column label="发表时间" prop="createTime"> </el-table-column>
        <el-table-column label="发表人" prop="username"> </el-table-column>
        <el-table-column label="点赞量" prop="goodNum"> </el-table-column>
        <el-table-column label="阅读量" prop="viewNum"> </el-table-column>
        <el-table-column label="评论量" prop="discussNum"> </el-table-column>
        <el-table-column label="字数" prop="wordNum"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="180px">
          <template slot-scope="scope">
            <el-button
              @click="handleUpdateClick(scope.row)"
              type="text"
              size="medium"
              >修改</el-button
            >
            <el-button
              type="text"
              size="medium"
              @click="handleRevokeClick(scope.row)"
              >撤回</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 表格分页 -->
    <div class="table-page-class">
      <div class="pageBlock">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-size="size"
          layout="total, prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DynamicIndex",
  data() {
    return {
      articleList: [],
      formInline: {
        title: "",
        username: "",
      },
      form: {
        title: "",
        text: "",
      },
      dialog: false,
      formLabelWidth: "80px",

      size: 10,
      page: 1,
      total: 0,
      pages: 0,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getArticleList();
    },
    onSubmit() {
      console.log("提交了查询");
      this.getArticleList();
    },
    createArticle() {
      axios({
        method: "post",
        url: "http://localhost:8082/article/createArticle",
        data: {
          size: this.size,
          page: this.page,
          title: this.form.title,
          text: this.form.text,
          username: this.$store.state.user.username,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.$message({
            message: "文章发表成功!",
            type: "success",
          });
          this.getArticleList();
        } else {
          this.$message({
            message: "文章发表失败!" + res.msg,
            type: "error",
          });
        }
      });
    },
    getArticleList() {
      axios({
        method: "post",
        url: "http://localhost:8082/article/getArticleList",
        data: {
          size: this.size,
          page: this.page,
          title: this.formInline.title,
          username: this.formInline.username,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          // 追加
          this.articleList = res.data.data;
          this.size = res.data.size;
          this.page = res.data.page;
          this.total = res.data.total;
          this.pages = res.data.pages;
        }
      });
    },
    handleUpdateClick(article) {
      console.log("修改了文章ID：" + article.id);
    },
    handleRevokeClick(article) {
      console.log("撤回了文章ID：" + article.id);
    },
    // 确定
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then((_) => {
          // 这里处理发表请求...
          console.log("这里处理发表请求...");
          this.createArticle();
          this.dialog = false;
        })
        .catch((_) => {
          console.log("这里是取消发表...");
        });
    },
    // 取消
    cancelForm() {
      this.dialog = false;
      this.form.title = "";
      this.form.text = "";
    },
    // 分页事件
    // 每页数量变动事件
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 当前页变动事件
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.getArticleList();
    },
  },
  mounted() {},
};
</script>

<style scoped>
.demo-drawer__content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.demo-drawer__footer {
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}

.demo-drawer__footer button {
  flex: 1;
}

.article-textarea-class {
}
</style>
