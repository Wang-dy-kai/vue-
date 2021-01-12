<template>
  <div id="Unread">
    <!-- 未读消息 -->
    <div v-for="item in $store.state.unread" :key="item.id">
      <span>({{item.id}})</span>
      <span>{{item.title}}</span>
      <el-button type="success" @click="changeRead(item.id)">已读</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 消息标记已读
    changeRead(id) {
      this.$store.commit("changeRead", id);
    }
  }
};
</script>

<style lang="scss" scoped>
#Unread {
  div {
    display: flex;
    margin-bottom: 10px;
    span:nth-of-type(2) {
      width: 90%;
    }
  }
}
</style>
