<template>
  <div id="user-list-id">
    <ul>
      <li
        v-for="item in userList"
        :key="item.id"
        :class="{ active: session.userId === item.id }"
        @click="select(item)"
      >
        <img
          class="avatar"
          width="30"
          height="30"
          :alt="item.username"
          :src="item.avatarUrl"
        />
        <p class="name">{{ item.username }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: {
    userList: Array,
    searchKey: String,
    session: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    select(value) {
      // console.log(this.userList.indexOf(value).id)
      // console.log('value ' + value.userName)
      this.session.userId = value.id;
      //   this.session = {
      //       userId: this.userList.indexOf(value).id
      //   }
      // this.$emit("update:sessionId", this.userList.indexOf(value).id);
      console.log(
        "选择了sessionId:" + this.session.userId + " userName:" + value.username
      );
    },
  },
  mounted() {
    console.log("test userId" + this.session.userId);
    //   console.log("test userList " + this.userList[2].userName)
  },
  filters: {
    search(list) {
      return list.filter((item) => item.username.indexOf(this.searchKey) > -1);
    },
  },
};
</script>

<style lang="less" scoped>
ul {
    padding-left: 0px;
}
li {
  padding: 12px 15px;
  border-bottom: 1px solid #292c33;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
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
}
</style>
