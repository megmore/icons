import MIcon, { register } from './icon.vue'

MIcon.install = function install(Vue, data) {
  Vue.component(MIcon.name, MIcon)
  register(data)
}

MIcon.register = register

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MIcon)
}

export default MIcon
