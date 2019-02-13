/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-02-12 17:15:28
 * @version $Id$
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'

Vue.use(VueRouter)

const routerIndex = new VueRouter({
	mode: 'hash',  //  指定以传统方式访问‘hash’可选   
    routes
})

routerIndex.beforeEach((route, from, next) => {
    let { meta } = route

    meta.title && (window.document.title = meta.title)
    next()
})

export default routerIndex
