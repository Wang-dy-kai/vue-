import Vue from 'vue'
import Vuex from 'vuex'

// 1.导入插件，在vuex中
import VuexPersistence from 'vuex-persist'
// 2.创建对象进行配置
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage, // 配置存储介质，默认持久化到本地存储中
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 未读消息
    unread: [
      {
        id: 1,
        title: "1月11日，“生而强悍”的iQOO推出搭载高通骁龙888的全新5G性能横屏旗舰——iQOO 7，为广大用户带来“全感操控”的顶级游戏体验。"
      },
      {
        id: 2,
        title: "从品牌诞生之初，iQOO就一直通过更快的速度、更强的性能，为年轻的用户带来极致的产品体验。"
      },
      {
        id: 3,
        title: "此次iQOO 7更是凭借骁龙888移动平台实现了次时代电竞体验。"
      },
      {
        id: 4,
        title: "极致电竞体验一直是iQOO给用户留下的深刻印象之一。"
      },
      {
        id: 5,
        title: "作为全新一代KPL官方比赛用机，iQOO 7搭载了最新的高通骁龙 888 移动平台+增强版LPDDR5+增强版UFS3.1“性能铁三角”"
      },
      {
        id: 6,
        title: "其中，作为iQOO 7“硬核发动机”的骁龙888采用5nm工艺制程，最高主频达2.84GHz，整体性能较前代平台提升高达25%。"
      },
    ],
    read: [], // 已读消息
    recycle: [] // 回收站信息
  },
  mutations: {
    // 将状态变为已读
    changeRead(state, id) {
      var index = state.unread.findIndex(c => c.id == id);
      var data = state.unread.splice(index, 1); // 未读消息删除内容
      state.read.push(...data); // 已读消息添加 未读删除的消息
    },

    // 根据ID删除已读（状态改为回收站）
    deleteById(state, id) {
      var index = state.read.findIndex(c => c.id == id);
      var data = state.read.splice(index, 1); // 已读消息删除
      state.recycle.push(...data); // 回收站添加 已读删除的消息
    },

    // 回收站还原已读
    huanYuan(state, id) {
      var index = state.recycle.findIndex(c => c.id == id);
      var data = state.recycle.splice(index, 1); // 回收站消息删除
      state.read.push(...data); // 已读添加 回收站删除的消息
    },

    // 标记未读
    hyUnRead(state, id) {
      var index = state.read.findIndex(c => c.id == id);
      var data = state.read.splice(index, 1); // 已读消息删除
      state.unread.push(...data); // 未读添加 已读删除消息
    },

    // 清空已读消息
    deleteAll(state) {
      var data = state.read.splice(0, state.read.length) // 清空已读消息
      state.recycle.push(...data); // 回收站添加 已读删除的所有消息
    },

    // 恢复所有消息
    hyAll(state) {
      var data = state.recycle.splice(0, state.recycle.length) // 清空回收站消息
      state.read.push(...data); // 已读添加 回收站删除的所有消息
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin], // 引入插件
})
