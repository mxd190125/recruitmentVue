<template>
  <div id="chat-head-id">
      <div slot="label" class="chat-item-class">
          <span class="chat-avatar-class">
            <el-avatar size="medium" :src="avatarUrl"></el-avatar>
          </span>
          <span class="chat-user-class">
            {{ userName }}&nbsp;<i>{{ lastestRecord }}</i>
          </span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ChatHead',
  props: [
      'avatarUrl',
      'userName',
      'lastestRecord'
  ],
  data() {
    return {
        // avatarUrl: ''
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.chat-avatar-class {
  vertical-align: middle;
  padding: 5px;
}

.chat-item-class {
  width: 270px;
  height: 40px;
  margin-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #f3f3f3;
}

i {
  font: status-bar;
  font-size: unset;
}
</style>
