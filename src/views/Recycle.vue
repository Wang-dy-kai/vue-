<template>
  <div id="Recycle">
    <!-- 回收站信息 -->
    <div v-for="item in $store.state.recycle" :key="item.id">
      <span>({{item.id}})</span>
      <span>{{item.title}}</span>
      <el-button type plain @click="huanYuan(item.id)">还原</el-button>
    </div>
    <el-button class="read-button" type="warning" plain @click="hyAll">全部还原</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 单条消息还原
    huanYuan(id) {
      this.$store.commit("huanYuan", id);
    },

    // 全部还原
    hyAll() {
      this.$store.commit("hyAll");
    }
  }
};
</script>

<style lang="scss" scoped>
#Recycle {
  div {
    display: flex;
    margin-bottom: 10px;
    span:nth-of-type(2) {
      width: 85%;
    }
  }
  .read-button {
    margin-left: 45%;
  }
}
</style>