<template>
  <div class="position-item">
    <div class="position-item-title">
      <span class="position-item-title-text">{{ positionName }}</span>
    </div>
    <div class="position-item-sub-title">
      {{ cityName }}
      <div class="lineDevider"></div>
      {{ positionTypeName }}
      <div class="lineDevider"></div>
      {{ recruitTypeName }}
      <div class="lineDevider"></div>
      {{ num }}
      <div class="lineDevider"></div>
      {{ createTime }}
    </div>
    <div class="position-item-description">{{ description }}</div>
  </div>
</template>    

<script>
export default {
  name: "PositionItem",
  props: [
    "id",
    "positionName",
    "cityName",
    "recruitTypeName",
    "num",
    "positionTypeName",
    "description",
    "createTime",
  ],
  data() {
    return {};
  },
  methods: {},
};
</script>
               
<style scoped>
a {
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}
.position-item {
  padding: 22px 8px 18px 16px;
  transition: box-shadow 0.5s;
  cursor: pointer;
}
.position-item-title {
  font-size: 25px;
  font-weight: 800;
  color: #1f2329;
  margin: 4px 0 15px;
}
.position-item-sub-title {
  color: #646a73;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin: 4px 0 12px;
}
.lineDevider {
  display: inline-block;
  width: 1px;
  height: 12px;
  background-color: #bbbfc4;
  margin: 0 8px;
}
.position-item-description {
  width: 664px;
  max-height: 44px;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #8f959e;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  white-space: pre-line;
  -webkit-line-clamp: 2;
}
</style>