<template>
  <div id="chat-panel-id">
      <h2>{{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ChatPanel',
  props: [
      'id'
  ],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
</style>
