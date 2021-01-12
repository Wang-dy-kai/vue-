<template>
  <div id="Message">
    <!-- 消息主页 -->
    <div class="message-box">
      <span @click="changeStatus(0)">未读({{$store.state.unread.length}})</span>
      <span @click="changeStatus(1)">已读({{$store.state.read.length}})</span>
      <span @click="changeStatus(2)">回收站({{$store.state.recycle.length}})</span>
    </div>
    <div class="message-title">
      <UnRead v-if="status == 0"></UnRead>
      <Read v-if="status == 1"></Read>
      <Recycle v-if="status == 2"></Recycle>
    </div>
  </div>
</template>

<script>
// 导入子组件
import UnRead from "./Unread";
import Read from "./Read";
import Recycle from "./Recycle";
export default {
  components: { UnRead, Read, Recycle },
  data() {
    return {
      status: 0 // 状态
    };
  },
  methods: {
    changeStatus(index) {
      this.status = index;
    }
  }
};
</script>

<style lang="scss" scoped>
#Message {
  .message-box {
    width: 100%;
    display: flex;
    span {
      width: 36%;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>