<template>
  <div class="message-panel-class" v-scroll-bottom="messages">
    <ul>
      <li v-for="message in messages" :key="message.id">
        <p class="time">
          <span>{{ message.date | time }}</span>
        </p>
        <div class="main" :class="{ self: isSelf(message) }">
          <img
            class="avatar"
            width="30"
            height="30"
            :src="message | avatar(user, sessionUser)"
          />
          <div class="text">{{ message.text }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "MessagePanel",
  props: {
    user: Object,
    userList: Array,
    searchKey: String,
    session: {
      type: Object,
      default() {
        return {};
      },
    },
    messages: Array,
  },
  computed: {
    sessionUser() {
      let users = this.userList.filter(
        (item) => item.id === this.session.userId
      );
      return users[0];
    },
  },
  data() {
    return {};
  },
  methods: {
    isSelf(message) {
      return message.userId == this.user.id;
    },
  },
  mounted() {
    console.log("消息面板加载.... user:" + this.user.id);
  },
  filters: {
    // 筛选出用户头像
    avatar(message, user, sessionUser) {
      // 如果是自己发的消息显示登录用户的头像
      let _user = message.userId === user.id ? user : sessionUser;
      return _user && _user.avatarUrl;
    },
    // 将日期过滤为 hour:minutes
    time(date) {
      if (typeof date === "string") {
        date = new Date(date);
      }
      return date.getHours() + ":" + date.getMinutes();
    },
  },
  directives: {
    // 发送消息后滚动到底部
    "scroll-bottom"() {
      Vue.nextTick(() => {
        this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.message-panel-class {
  padding: 10px 15px;
  overflow-y: scroll;
  ul {
    padding-left: 0px;
  }
  li {
    list-style: none;
    margin-bottom: 15px;
  }
  .time {
    margin: 7px 0;
    text-align: center;

    > span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }
  .avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }
  .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: ~"calc(100% - 40px)";
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;

    &:before {
      content: " ";
      position: absolute;
      top: 9px;
      right: 100%;
      border: 6px solid transparent;
      border-right-color: #fafafa;
    }
  }

  .self {
    text-align: right;

    .avatar {
      float: right;
      margin: 0 0 0 10px;
    }
    .text {
      background-color: #b2e281;

      &:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
</style>
