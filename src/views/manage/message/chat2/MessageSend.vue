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
export default {
  name: "MessageSend",
  props: {
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
      if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
        this.messages.push({
          text: this.text,
          date: new Date(),
          userId: this.user.id,
        });
        this.text = "";
        console.log("用户ID："+this.user.id+" 发送了消息:" + this.text)
      }
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
