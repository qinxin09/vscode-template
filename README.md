# 为VSCODE生成代码片段
1. 在/templates 中创建模板文件，模板文件名格式为：{模板名称}.{文件后缀}，例如：vue3.vue
    创建完成后，在VSCODE中，输入：{模板名称} + tab
2. 编辑/vscode/templates.js

```js
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
    vue: {
      // 在.vue文件编写代码时输入 vvue3出现代码提示，代码片段来自文件 /templates/vue3.vue
      vvue3: {
        prefix: 'vvue3',
        body: fs.readFileSync(path.join(__dirname, '../templates/vue3.vue')).toString()
      }
    }
  },
}
```

3. 运行 /vscode/generage.js 自动保存生成代码片段的配置文件。

```bash
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/qinxin09/vscode-template.git
git push -u origin main
```