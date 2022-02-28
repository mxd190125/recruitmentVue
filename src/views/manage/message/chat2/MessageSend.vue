<template>
  <div class="message-send-class">
    <textarea
      placeholder="按 Ctrl + Enter 发送"
      v-model="text"
      @keyup="inputing"
    />
  </div>
</template>

<script>
const uuid = require('uuid')

export default {
  name: "MessageSend",
  props: {
    socket: "",
    user: Object,
    session: {
      type: Object,
      default() {
        return {};
      },
    },
    messages: Array,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    inputing(e) {
      if (e.keyCode === 13 && this.text.length) {
        let msg = {
          id: uuid.v1(),
          from: this.user.id,
          to: this.session.userId,
          type: "2",
          msg: this.text,
          time: "",
        };
        let msgJson = JSON.stringify(msg);
        this.socket.send(msgJson);
        this.messages.push(msg);
        console.log("用户ID：" + this.user.id + " 发送了消息:" + msgJson);
        console.log("消息列表长度[发送后]:" + this.messages.length);
        this.text = "";
      }
    },
    time(date) {
      if (typeof date === "string") {
        date = new Date(date);
      }
      return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.message-send-class {
  height: 160px;
  border-top: solid 1px #ddd;

  textarea {
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
  }
}
</style>
