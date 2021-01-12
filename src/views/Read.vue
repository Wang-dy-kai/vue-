<template>
  <div id="Read">
    <!-- 已读消息 -->
    <div v-for="item in $store.state.read" :key="item.id">
      <span>({{item.id}})</span>
      <span>{{item.title}}</span>
      <el-button type="primary" @click="hyUnRead(item.id)">还原未读</el-button>
      <el-button type="danger" @click="deleteById(item.id)">删除</el-button>
    </div>
    <el-button class="read-button" type="warning" @click="deleteAll">全部删除</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 删除内容
    deleteById(id) {
      this.$store.commit("deleteById", id);
    },

    // 还原未读
    hyUnRead(id) {
      this.$store.commit("hyUnRead", id);
    },

    // 已读消息全部删除
    deleteAll() {
      this.$store.commit("deleteAll");
    }
  }
};
</script>

<style lang="scss" scoped>
#Read {
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
