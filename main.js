require.config({
  paths: {
    'vue': 'vue.min',
    'ELEMENT': 'element-ui/index',
  },
  map: {
    '*': {
      'css': 'css.min'
    }
  },
  shim: {
    'ELEMENT': {
      deps: [
        'css!https://unpkg.com/element-ui/lib/theme-chalk/index.css'
      ],
      exports: 'ELEMENT'
    }
  }
});

require(['ELEMENT', 'vue'], function(ElementUI, Vue) {
  console.log('element', ElementUI)
  console.log('Vue', Vue)
  Vue.use(ElementUI)
  new Vue({
    el: '#app',
    data() {
      return {
        name: '小明',
        value2: ''
      }
    }
  })
});
