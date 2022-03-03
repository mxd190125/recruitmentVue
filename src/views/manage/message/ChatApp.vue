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
      <message-send
        :session="session"
        :user="user"
        :messages="messages"
        :socket="socket"
      />
    </div>
  </div>
</template>

<script>
import MessagePanel from "./chat2/MessagePanel.vue";
import MessageSend from "./chat2/MessageSend.vue";
import MyCard from "./chat2/MyCard.vue";
import UserList from "./chat2/UserList.vue";
import axios from "axios";

const uuid = require("uuid");

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
        id: '',
        username: "",
        authorities: [],
        avatarUrl: "",
      },
      userList: [],
      messages: [],

      wsUrl: "ws://localhost:8084/server/chat",
      socket: "",
    };
  },
  watch: {
    'session.userId': {
      handler: function() {
        this.getChatMessageList(this.user.id, this.session.userId);
      }
    }
  },
  created() {
    // this.user.id = "14";
    // this.user.username = "冬雪是你";
    // this.user.avatarUrl =
    //   "https://tfs.alipayobjects.com/images/partner/TB1VF.oaz4ADuNjm2EPXXc__pXa";
    this.user.id = this.$store.state.user.id;
    this.user.username = this.$store.state.user.username;
    this.user.avatarUrl = this.$store.state.user.avatarUrl;
    this.user.authorities = this.$store.state.user.authorities;
    this.init();
  },
  methods: {
    init() {
      console.log("开始连接websocket..");
      if (typeof WebSocket === "undefined") {
        console.log("websocket undefined...");
        return;
      }
      this.socket = new WebSocket(this.wsUrl);
      this.socket.onopen = this.open;
      this.socket.onerror = this.error;
      this.socket.onmessage = this.message;
      this.socket.onclose = this.close;
    },
    getChatUserList() {
      axios({
        method: "get",
        url:
          "http://localhost:8083/chat/getChatUserList",
        params: {
          userId: this.user.id,
          roleName: this.user.authorities[0].authority
        }
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.userList = res.data;
          // 窗口默认第一个页面
          this.session.userId = this.userList[0].id;
          // console.log('初始化session.userId=' + this.session.userId);
        }
      });
    },
    getChatMessageList(fromId, toId) {
      console.log("fromId:" + fromId + " toId:" + toId)
      axios({
        method: "get",
        url: "http://localhost:8083/chat/getChatMessageList",
        params: {
          fromId: fromId,
          toId: toId,
        },
      }).then((res) => {
        res = res.data;
        if (res.status == 0) {
          this.messages = res.data;
        }
      });
    },
    open(e) {
      let msg = {
        id: uuid.v1(),
        from: this.user.id,
        to: "",
        type: "1",
        msg: "上线1",
        time: "",
      };
      this.sendMsg(JSON.stringify(msg));
      this.getChatUserList();
      console.log("连接成功!");
    },
    close(e) {
      console.log("断开连接");
    },
    error(e) {
      console.log("连接失败!");
      this.$message.error("消息服务器连接失败!");
    },
    message(e) {
      let backMsg = {
        id: JSON.parse(e.data).id,
        type: JSON.parse(e.data).type,
        msg: JSON.parse(e.data).msg,
        from: JSON.parse(e.data).from,
        to: JSON.parse(e.data).to,
      }
      console.log("接受消息type:" + JSON.parse(e.data).type);
      if (backMsg.type == 2) {
        this.messages.push(backMsg);
      }
      console.log("服务端发来消息:" + e.data);
    },
    sendMsg(msg) {
      if (this.socket.readyState == WebSocket.OPEN) {
        this.socket.send(msg);
        console.log("msg:" + msg);
      } else {
        this.$message.error("socket未连接!");
      }
    },
  },
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
