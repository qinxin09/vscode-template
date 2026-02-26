const fs = require('fs')
const path = require('path')
module.exports = {
  // 根据文件后缀生成对应的代码片段
  ext: {
    // html表示 对文件后缀为html的文件生效
    html: {
      htmlVsCodeKeyword: {
        prefix: 'hhtml', // 快捷键,输入hhtml后按tab键
        body: fs.readFileSync(path.join(__dirname, '../templates/html.html')).toString(),
        description: 'html模板'
      },
      htmlVue3: {
        prefix: 'hhtml-vue3',
        body: fs.readFileSync(path.join(__dirname, '../templates/html-vue3.html')).toString()
      }
    },
    javascript: {},
    vue: {
      vvue2: {
        prefix: 'vvue2',
        body: fs.readFileSync(path.join(__dirname, '../templates/vue2.vue')).toString()
      },
      vvue3: {
        prefix: 'vvue3',
        body: fs.readFileSync(path.join(__dirname, '../templates/vue3.vue')).toString()
      },
      'vvue-svg': {
        prefix: 'vvue-svg',
        body: fs.readFileSync(path.join(__dirname, '../templates/svg.vue')).toString()
      },
      'vvue3-switch-theme-element-plus': {
        prefix: 'vvue3-switch-theme-element-plus',
        body: fs.readFileSync(path.join(__dirname, '../templates/switch-theme-vue3.vue')).toString()
      }
    },
    python: {
      encoding: {
        prefix: "ppy-encoding",
        body: fs.readFileSync(path.join(__dirname, '../templates/py-encoding.py')).toString()
      }
    }
  },
  // 全局代码片段
  global: {
    // js和ts,包括html中<script>标签中的js
    script: {
      'console.log': {
        scope: 'javascript,typescript,jsx',
        prefix: 'llog',
        body: "console.log($0);",
        description: 'console.log'
      },
      'console.error': {
        scope: 'javascript,typescript,jsx',
        prefix: 'eerror',
        body: "console.error($0);",
        description: 'console.error'
      },
      深复制: {
        scope: 'javascript,typescript,jsx',
        prefix: 'JJSON-cp',
        body: 'JSON.parse(JSON.stringify($0));',
        description: '深度复制对象'
      },
      美化打印: {
        scope: 'javascript,typescript,jsx',
        prefix: 'llog-pretty',
        body: 'console.log(JSON.parse(JSON.stringify($0)));',
        description: '美化打印'
      },
      'react-component-class': {
        scope: 'javascript,typescript,javascriptreact', //
        prefix: 'rreact-class-component-class',
        body: fs.readFileSync(path.join(__dirname, '../templates/react-component-class.js')).toString(),
        description: 'react类组件'
      },
      'react-component-function': {
        scope: 'javascript,typescript,javascriptreact',
        prefix: 'rreact-class-component-function',
        body: fs.readFileSync(path.join(__dirname, '../templates/react-component-function.js')).toString(),
        description: 'react函数组件'
      },
      'fetch-downloadfile': {
        scope: 'javascript,typescript,javascriptreact',
        prefix: 'fetch-downloadfile',
        body: fs.readFileSync(path.join(__dirname, '../templates/download.js')).toString(),
        description: 'fetch下载文件'
      },
      'watch-debug': {
        scope: 'javascript,typescript,javascriptreact',
        prefix: 'watch-debug',
        body: fs.readFileSync(path.join(__dirname, '../templates/watchDebug.js')).toString()
      }
    }
  }
}
function printLine(str) {
  console.log(JSON.stringify(str).split('\n'))
}
function toLineArr(str) {
  console.log(str.split('\n'))
}
