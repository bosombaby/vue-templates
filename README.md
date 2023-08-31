# 一、前言
前端项目工程化之代码规范是指在前端项目中定义一套代码规范，以确保项目中的代码风格和格式一致，提高代码的可读性和可维护性。代码规范通常包括以下方面：

1. 缩进和换行：使用统一的缩进方式和换行规则，以便让代码的结构更加清晰明了。
2. 命名规范：使用统一的命名规则，以便让代码中的变量、函数、类等名称更加可读和可识别。
3. 注释规范：使用统一的注释规则，以便让代码中的注释更加清晰明了。
4. 代码格式：使用统一的代码格式，以便让代码的外观更加美观。
5. 代码组织：使用统一的代码组织方式，以便让代码的结构更加清晰明了。

代码规范的实施可以通过使用代码检查工具、代码格式化工具等方式来自动化地完成，以便让开发者在编写代码时能够更加容易地遵循规范。同时，代码规范也可以帮助团队成员之间的协作，让代码更加易于理解和修改。
# 二、ESLint
ESLint 是一个静态代码分析工具，主要用于查找和修复代码中的潜在问题、错误、不一致和不推荐的模式。是帮助你提高代码质量、避免常见的错误，以及确保团队成员遵循统一的编码约定。
[ESLint 使用教程 - 掘金](https://juejin.cn/post/7012798266089668645)

[GitHub - eslint/eslint: Find and fix problems in your JavaScript code.](https://github.com/eslint/eslint)
# 三、Prettier
Prettier是一个代码格式化工具，专注于对代码进行格式化，使其符合一致的风格规范。它会自动调整代码的缩进、换行、引号等，确保代码在不同的编辑器和环境中具有一致的外观。
简单来说，ESLint更注重你的代码是否符合规范，Pretter则是为你提供了按照规范格式化代码的能力。

[Prettier · Opinionated Code Formatter](https://prettier.io/)
# 四、项目实战
[手把手教你用 vite + vue3 + ts + pinia + vueuse 打造企业级前端项目 - 掘金](https://juejin.cn/post/7079785777692934174)
## 4.1 环境依赖版本
```json
"dependencies": {
  "@vueuse/core": "^10.4.1",
  "axios": "^1.5.0",
  "element-plus": "^2.3.12",
  "pinia": "^2.1.6",
  "vue": "^3.3.4",
  "vue-router": "^4.2.4"
},
"devDependencies": {
  "@types/node": "^20.5.7",
  "@typescript-eslint/eslint-plugin": "^6.5.0",
  "@typescript-eslint/parser": "^6.5.0",
  "@vitejs/plugin-vue": "^4.2.3",
  "eslint": "^8.48.0",
  "eslint-config-prettier": "^9.0.0",
  "eslint-plugin-prettier": "^5.0.0",
  "eslint-plugin-vue": "^9.17.0",
  "prettier": "^3.0.3",
  "sass": "^1.66.1",
  "typescript": "^5.0.2",
  "unplugin-auto-import": "^0.16.6",
  "unplugin-vue-components": "^0.25.2",
  "vite": "^4.4.5",
  "vue-tsc": "^1.8.5"
}
```
## 4.2 使用pnpm
[pnpm才是前端工程化项目的未来 - 掘金](https://juejin.cn/post/7239875883254300729)
[pnpm 是凭什么对 npm 和 yarn 降维打击的 - 掘金](https://juejin.cn/post/7127295203177676837)
[都2022年了，pnpm快到碗里来！ - 掘金](https://juejin.cn/post/7053340250210795557)

- 早期npm存在**node_modules**嵌套，多个包依赖下面存在相同的依赖项目
- npm3和yarn早期开始采用扁平化设计，但是会出现幽灵依赖，项目结构不确定性

![2.png](https://cdn.nlark.com/yuque/0/2023/png/27367619/1693459335867-39b43d09-4f35-4134-9aa8-05c583945e83.png#averageHue=%23d1deb2&clientId=uc1dfb322-fdd4-4&from=ui&id=u867df015&originHeight=532&originWidth=1344&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=157700&status=done&style=none&taskId=u00fbdd74-4bb7-4579-9c4c-89933450a0e&title=)
![3.png](https://cdn.nlark.com/yuque/0/2023/png/27367619/1693459373459-c278324f-1604-4613-b1a1-b50d7d413351.png#averageHue=%23eaeff2&clientId=uc1dfb322-fdd4-4&from=ui&id=u365acfb7&originHeight=440&originWidth=941&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=117352&status=done&style=none&taskId=uafe77269-fc77-4967-9a12-1f8f27dc6ce&title=)

- pnpm是一个快速的、节省磁盘空间的依赖安装工具
- 索引节点inode描述文件/目录属性的数据库
- 硬链接创建一个新的文件，但是指向同一个inode，会指向相同的源数据
- 软连接创建不同的inode，但是数据块存储的是文件路径，顺着路径还是指向源数据（快捷方式）
- .pnpm文件通过硬链接到主盘下的store文件，pnpm安装的依赖软连接到.pnpm的文件
## 4.3 git提交规范
[一款vscode git规范化提交的插件](https://segmentfault.com/a/1190000043587212)
# 五、资源 收集
[【建议收藏】全网最全的讲清eslint和prettier的npm包和vscode插件的文章 - 掘金](https://juejin.cn/post/6990929456382607374)

[ESLint & Prettier 不在为代码格式而烦恼 - 掘金](https://juejin.cn/post/7269376347897184308)

[vscode的格式化的settings.json的个人配置 - 掘金](https://juejin.cn/post/7009177228957188104)
**prettier出错解决：每次配置完需要重启**
[https://github.com/prettier/prettier-vscode/issues/2324](https://github.com/prettier/prettier-vscode/issues/2324)
**Prettier换行出错**
[Delete `cr` eslint(prettier/prettier) 错误的解决方案 - 掘金](https://juejin.cn/post/7051785683089752100)
[解决error delete ·CR· (prettier/prettier)_delete ’cr’_Miya锤的博客-CSDN博客](https://blog.csdn.net/weixin_45599105/article/details/124092852)
# 六、源码地址
**项目源码**：[vue-templates](https://github.com/bosombaby/vue-templates)

