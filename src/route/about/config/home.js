import About from '@/views/about/pages'
//Vue.use(Router)
export default {
    path: '/about',
    name: 'About',
    component: About
}
// export default new Router({
//   mode: 'history',  //  指定以传统方式访问‘hash’可选   
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       components: {
//         default: Home
//       }
//     }
//   ]
// })