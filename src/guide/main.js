import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import MIcon from '../index'
import ICON1 from '../../icons/3d_rotation'

Vue.use(MIcon, [ICON1])

new Vue({
  render: h => h(App)
}).$mount('#app')
