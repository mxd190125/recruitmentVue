<template>
  <div id="application-record-id">
    <div class="application-record">
      <application-item></application-item>
    </div>
    <div class="application-record">
      <application-item></application-item>
    </div>
  </div>
</template>

<script>
import ApplicationItem from "./ApplicationItem.vue";

export default {
  components: { ApplicationItem },
  name: "ApplicationRecord",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
#application-record-id {
  background: rgb(248, 249, 250);
  padding: 20px 0 20px 0;
}

.application-record {
  margin: 0 auto 0;
  width: 800px;
}
</style>
