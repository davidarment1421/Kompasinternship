import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tujuan from '../views/Tujuan.vue'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
          path: '/Tujuan',
          name: 'Tujuan',
          component: Tujuan
        }
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

export default router
