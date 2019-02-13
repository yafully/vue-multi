/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-02-12 16:42:59
 * @version $Id$
 */
import Vue from 'vue'
import router from '../../route/index/'
import ElementUI from 'element-ui'
import IndexPage from './IndexPage'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { locale })
Vue.use(require('vue-wechat-title'))
new Vue({
	router,
	render: h => h(IndexPage)
}).$mount('#app')
