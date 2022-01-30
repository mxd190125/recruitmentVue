<template>
  <div id="my-card-id">
    <header>
      <img
        class="avatar"
        width="40"
        height="40"
        :alt="user.userName"
        src="~@/assets/logo.png"
      />
      <p class="name">{{ user.userName }}</p>
    </header>
    <footer>
      <input
        class="search"
        type="text"
        placeholder="search user..."
        v-model="searchKey"
      />
    </footer>
  </div>
</template>

<script>
export default {
  name: "MyCard",
  props: {
    user: Object,
    searchKey: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log("我的卡片加载 userId:" + this.user.id);
  },
};
</script>

<style lang="less" scoped>
#my-card-id {
  padding: 12px;
  border-bottom: solid 1px #24272c;

  footer {
    margin-top: 10px;
  }

  .avatar,
  .name {
    vertical-align: middle;
  }
  .avatar {
    border-radius: 2px;
  }
  .name {
    display: inline-block;
    margin: 0 0 0 15px;
    font-size: 16px;
  }
  .search {
    padding: 0 10px;
    width: 154px;
    // width: 100%;
    font-size: 12px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    border: solid 1px #3a3a3a;
    border-radius: 4px;
    outline: none;
    background-color: #26292e;
  }
}
</style>
