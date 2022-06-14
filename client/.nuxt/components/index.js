import { wrapFunctional } from './utils'

export { default as AppHeader } from '../..\\components\\AppHeader.vue'
export { default as EndPoint } from '../..\\components\\EndPoint.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyAppHeader = import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const LazyEndPoint = import('../..\\components\\EndPoint.vue' /* webpackChunkName: "components/end-point" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
