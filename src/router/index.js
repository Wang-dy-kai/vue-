import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '../views/Read.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/read',
    name: 'Read',
    component: Read
  },
  {
    path: '/unread',
    name: 'Unread',
    component: () => import('../views/Unread.vue')
  },
  {
    path: '/recycle',
    name: 'Recycle',
    component: () => import('../views/Recycle.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  // 设置默认路由
  {
    path: "/",
    redirect: "/message"
  }
]

const router = new VueRouter({
  routes
})

export default router
