import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _914f11fc = () => interopDefault(import('..\\pages\\createEndpoint\\index.vue' /* webpackChunkName: "pages/createEndpoint/index" */))
const _14cdf6ea = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _cd8fb602 = () => interopDefault(import('..\\pages\\secret.vue' /* webpackChunkName: "pages/secret" */))
const _4b2653d3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/createEndpoint",
    component: _914f11fc,
    name: "createEndpoint"
  }, {
    path: "/login",
    component: _14cdf6ea,
    name: "login"
  }, {
    path: "/secret",
    component: _cd8fb602,
    name: "secret"
  }, {
    path: "/",
    component: _4b2653d3,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
