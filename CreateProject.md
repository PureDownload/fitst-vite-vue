# Vite5+vue3+ts后台项目搭建
## 1. 创建项目
安装命令
```shell
npm create vite@latest
选择vue，ts
cd 项目名 进入项目
npm install
npm run dev
```
这样子就启动了一个vite的vue3+ts的简易项目

后台管理的搭建非常简单，一个通用后台管理需要用到的依赖也非常的少。下面举出几个常用的依赖
重要：
- vue-router 4 路由管理器 这里使用了router4，因为添加了对ts的类型支持
- pinia 状态管理器 用轻量的pinia也可以很好的满足业务需求
- axios 请求库
- element-plus ui库
按需引入：
- lodash 工具库
- dayjs 时间库
- vue-i18n 国际化
- vite-plugin-style-import 按需引入element-plus的样式
- vite-plugin-svg-icons svg图标
- vite-plugin-mock mock数据
- vite-plugin-purge-icons 清除无用svg图标
- vite-plugin-html-config html配置
- vite-plugin-imagemin 图片压缩
- vite-plugin-compression 压缩代码
- vite-plugin-stylelint 样式检查


## 2. vue-router的引入和使用

## 引入scss并添加全局变量文件
~~~cmd
npm install --save-dev sass-loader
~~~
安装依赖即可
创建mixin.scss,在想要创建的地方
~~~ts
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ; 
        additionalData: '@import "@/assets/style/mixin.scss";'
      }
    }
  }
})
~~~


## 3. 引入element-plus
(Element-plus官网引入)[https://element-plus.org/zh-CN/guide/quickstart.html#%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5]
## 4. layout的编写
- 侧边栏
方案
- 头部
- 面包屑
- 标签页

## 5. 引入pinia
## 6. 引入axios
