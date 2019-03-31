import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // Router.beforeEach((to, from, next) => {
  //   console.log(`i am routing from:${JSON.stringify(from)} to:${JSON.stringify(to)}`)
  //   next()
  // })

  Router.onError(error => {
    console.log(`Router Error:${JSON.stringify(error)}`)
  })

  return Router
}
