const path = require('path')
const fs = require('fs')
const { log } = require('console')
const templates = require('./templates.js')
// console.log(__dirname)
const vscodeSnippetDir = 'C:\\Users\\qx\\AppData\\Roaming\\Code\\User\\snippets\\'
/*********************************************** */
main()
function main() {
  generateVSCodeSnippet()
}
/*********************************************** */

function writeFile(fullpath, template) {
  fullpath = fullpath.replace(/\\/g, '/') // 将反斜杠替换为正斜杠
  const parent = fullpath.split('/').slice(0, -1).join('/')
  fs.mkdirSync(parent, { recursive: true }) // 创建目录, 如果目录已存在，则不会报错
  try {
    fs.writeFileSync(fullpath, JSON.stringify(template, null, 4), {
      encoding: 'utf-8', // 指定编码格式
      flag: 'w' // a 追加写入, w 覆盖写入, r 只读
    })
  } catch (e) {
    console.log('写入失败', e)
  }
  log('写入', fullpath)
}
function generateVSCodeSnippet() {
  const { ext, global } = templates
  function generate(obj, fileExt) {
    for (let types in obj) {
      for (let template in obj[types]) {
        obj[types][template]['body'] = obj[types][template]['body'].split('\n')
      }
      writeFile(path.join(vscodeSnippetDir + types + fileExt), obj[types])
    }
  }
  //   处理 html，javascript，vue等以后缀名为key的对象
  generate(ext, '.json')
  // 处理全局代码片段
  generate(global, '.code-snippets')
}
