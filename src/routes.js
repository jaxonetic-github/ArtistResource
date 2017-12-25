export default [
//{path: '/', component: require('./pages/quoter.vue'), name:"main"},
  {
      path: '/quoter/',
      component: require('./pages/quoter.vue')
  },
  {
      path: '/dispatch/',
      component: require('./pages/dispatch.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  }
 /* {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  }
  */

]