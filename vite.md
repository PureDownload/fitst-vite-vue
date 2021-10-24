#### vite的学习
- 注意，vite只能安装在12.0版本以上
##### 1. 安装
```js
npm init vite@latest project-name --template vue
# npm 7+, 需要额外的双横线：
npm init vite@latest project-name -- --template vue
```
可以在后面添加模板语言，初始化一个模板。vanilla，vanilla-ts，vue，vue-ts，react，react-ts，preact，preact-ts，lit，lit-ts，svelte，svelte-ts \
可以在[create-vite][create-vite] 中查看所有模板
- 报错
```
Cannot find module ‘worker_threads‘
node版本过低 12以下
```

#### vue3的学习
vue版本3.1.3以上(3.2.16)
##### 1. setup语法糖
最直观的感受肯定是setup语法糖的出现，在vue3刚出来的时候，当时还是使用setup函数，最后需要将上下文引用的变量return出去 \
改造前
```js
<script>
import { ref } from 'vue'
export default {
    setup() {

        const count = ref(0)
        return { count }
    }

}
</script>
```
改造后
```js
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>
```
只需要在script标签上添加setup，就可以将script里面的内容添加到上下文中。代码简洁好看了很多
    
[create-vite]: https://github.com/vitejs/vite/tree/main/packages/create-vite