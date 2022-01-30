<template>
  <div id="chat-index-id">
    <el-tabs tab-position="left">
      <el-tab-pane v-for="user in users" :key="user.id">
        <chat-head
          slot="label"
          :avatarUrl="user.avatarUrl"
          :userName="user.userName"
          :lastestRecord="user.lastestRecord"
          class="chat-item-class"
        />
        <chat-panel :id="user.id"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ChatHead from "./chat/ChatHead.vue";
import ChatPanel from './chat/ChatPanel.vue';
export default {
  components: { ChatHead, ChatPanel },
  name: "ChatIndex",
  data() {
    return {
      users: [
        {
          id: "111",
          userName: "马雪冬",
          lastestRecord: "这是马雪冬发的一条最新消息22222",
          avatarUrl:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        },
        {
          id: "222",
          userName: "任思绩",
          lastestRecord: "这是任思绩发的一条最新消息22222",
          avatarUrl:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        },
        {
          id: "333",
          userName: "李东声",
          lastestRecord: "这是李东声发的一条最新消息22222",
          avatarUrl:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        },
        {
          id: "444",
          userName: "马雪冬",
          lastestRecord: "这是马雪冬发的一条最新消息22222",
          avatarUrl:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        },
        {
          id: "555",
          userName: "任思绩",
          lastestRecord: "这是任思绩发的一条最新消息22222",
          avatarUrl:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        },
        {
          id: "666",
          userName: "李东声",
          lastestRecord: "这是李东声发的一条最新消息22222",
          avatarUrl:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>

</style>