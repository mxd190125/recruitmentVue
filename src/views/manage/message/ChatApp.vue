<template>
  <div id="chat-app-id">
    <div class="sidebar">
      <my-card :user="user" :search.sync="searchKey" />
      <user-list :user-list="userList" :search="searchKey" :session="session" />
    </div>
    <div class="main">
      <message-panel
        :session="session"
        :user="user"
        :userList="userList"
        :messages="messages"
      />
      <message-send :session="session" :user="user" :messages="messages" />
    </div>
  </div>
</template>

<script>
import MessagePanel from "./chat2/MessagePanel.vue";
import MessageSend from "./chat2/MessageSend.vue";
import MyCard from "./chat2/MyCard.vue";
import UserList from "./chat2/UserList.vue";

export default {
  components: { MyCard, UserList, MessageSend, MessagePanel },
  name: "ChatApp",
  data() {
    return {
      searchKey: "",
      session: {
        userId: "4",
      },
      user: {
        id: 1,
        userName: "冬雪是你",
        avatarUrl:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F55%2F34%2F61%2F553461a1d8bb07b1026a7eeff17319e0.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644593291&t=a79c9a6eac1095e3ef9924114860bc2e",
      },
      userList: [
        {
          id: 2,
          userName: "詹姆斯",
          avatarUrl:
            "https://img1.baidu.com/it/u=1925715390,133119052&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        },
        {
          id: 3,
          userName: "霍华德",
          avatarUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F55%2F34%2F61%2F553461a1d8bb07b1026a7eeff17319e0.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644593291&t=a79c9a6eac1095e3ef9924114860bc2e",
        },
        {
          id: 4,
          userName: "戴维斯",
          avatarUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F55%2F34%2F61%2F553461a1d8bb07b1026a7eeff17319e0.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644593291&t=a79c9a6eac1095e3ef9924114860bc2e",
        },
        {
          id: 5,
          userName: "威少",
          avatarUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F55%2F34%2F61%2F553461a1d8bb07b1026a7eeff17319e0.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644593291&t=a79c9a6eac1095e3ef9924114860bc2e",
        },
      ],
      messages: [
        {
          id: 1,
          text: "我是詹姆斯。。。",
          date: new Date(),
          userId: 2,
        },
        {
          id: 2,
          text: "我是马雪冬",
          date: new Date(),
          userId: 1,
        },
        {
          id: 3,
          text: "你好啊。。。",
          date: new Date(),
          userId: 2,
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#chat-app-id {
  margin: 20px auto;
  width: 800px;
  height: 600px;

  overflow: hidden;
  border-radius: 3px;

  li {
    list-style: none;
  }

  .sidebar,
  .main {
    height: 100%;
  }
  .sidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }
  .message-send-class {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .message-panel-class {
    height: ~"calc(100% - 160px)";
  }
}
</style>
