export default [
//{path: '/', component: require('./pages/quoter.vue'), name:"main"},
  {
      path: '/quoter/',
      component: require('./components/quoter.vue')
  },
  {
      path: '/dispatch/',
      component: require('./components/dispatch.vue')
  },
  {
      path: '/form/',
      component: require('./components/form.vue')
  },
  {
      path: '/documentation/',
      component: require('./components/DocumentationComponent.vue')
  }
]