import{_ as i,a as p,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as r,I as s,a7 as c,o as h}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const f=JSON.parse('{"title":"husky","description":"","frontmatter":{},"headers":[],"relativePath":"standard/husky.md","filePath":"standard/husky.md","lastUpdated":1711902617000}'),o={name:"standard/husky.md"},d=c(`<h1 id="husky" tabindex="-1">husky <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;husky&quot;">​</a></h1><p>(./git提交规范.md#自动配置husky (推荐))</p><h2 id="简介" tabindex="-1">简介： <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介：&quot;">​</a></h2><p>husky 是一个工具，它允许我们轻松地处理 Git Hooks 并在提交代码时运行我们想要的脚本</p><h2 id="使用" tabindex="-1">使用： <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用：&quot;">​</a></h2><p>安装并初始化 husky</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>npx husky-init &amp;&amp; pnpm install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>prepare 会在 install 之后和 prepublishOnly 之前触发。</p></div><p>添加一个 git 钩子</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>npx husky add .husky/commit-msg &#39;pnpm commitlint --edit $1&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加完成后会生成 .husky/commit-msg 文件如下：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm commitlint --edit $1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当你 git commit 提交代码时会执行 pnpm commitlint 命令，通过 commitlint.config.js 配置规则校验你的 commit 内容是否规范</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>使用老版本的 husky 时，可以在 pacaage.json 中加入相关的 hook 配置，但是新版不行了。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># git commit 时检查提交信息是否符合规范</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> husky</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> .husky/commit-msg</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">  &#39;npx --no -- commitlint --edit \${1}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># git commit 时触发 lint-staged，使用上面的那些 lint 工具检查并格式化一遍有改动的代码文件。</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> husky</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> .husky/pre-commit</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &quot;npx lint-staged&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面这个 <code>$1</code> 有坑，加不进去，需要自己去文件里改改</p></div><h2 id="prettier" tabindex="-1">Prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;Prettier&quot;">​</a></h2><h3 id="简介-1" tabindex="-1">简介： <a class="header-anchor" href="#简介-1" aria-label="Permalink to &quot;简介：&quot;">​</a></h3><p>Prettier 是一款流行的代码格式化工具。 它支持的语言相当多。 它很纯粹，就一个代码格式化工具，并不会做代码质量的检查（比如声明了一个未被使用的变量）。 Prettier 会强制使用统一的代码风格，原理就是解析语言生成AST 抽象语法树，然后用自己的一套风格写回到文件。</p><h3 id="使用-1" tabindex="-1">使用： <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用：&quot;">​</a></h3><p>安装</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>pnpm install --save-dev --save-exact prettier</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>编写配置文件 .prettierrc.js, 配置项说明：<a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noreferrer">https://prettier.io/docs/en/options.html</a></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  printWidth: 100,       // 指定换行的行长度。</span></span>
<span class="line"><span>  semi: false,           // 不在语句末尾打印分号。</span></span>
<span class="line"><span>  trailingComma: &#39;es5&#39;,  // 在ES5（对象、数组等）中添加有效的结尾逗号。TypeScript中的类型参数中没有结尾逗号。</span></span>
<span class="line"><span>  tabWidth: 2,           // 指定每个缩进级别的空格数。</span></span>
<span class="line"><span>  singleQuote: true,     // 字符串统一使用单引号</span></span>
<span class="line"><span>  bracketSameLine: false,// 元素不是位于最后一行的末尾，而是单独位于下一行</span></span>
<span class="line"><span>  jsxSingleQuote: true,  // 在JSX中使用单引号而不是双引号。</span></span>
<span class="line"><span>  arrowParens: &#39;avoid&#39;,  // 避免在唯一的箭头函数参数周围包含括号。</span></span>
<span class="line"><span>  proseWrap: &#39;never&#39;,    // 将每一段markdown文本拆分成一行。</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>添加 git 钩子</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>npx husky add .husky/pre-commit &#39;pnpm pretty-quick --staged&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加完成后会生成 .husky/pre-commit 文件如下：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm pretty-quick --staged</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当你 git commit 提交代码前会先执行 pnpm pretty-quick --staged 命令，通过 .prettierrc.js 配置规则校验并修复不符合规则的代码内容</p><h2 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;eslint&quot;">​</a></h2><h3 id="简介-2" tabindex="-1">简介： <a class="header-anchor" href="#简介-2" aria-label="Permalink to &quot;简介：&quot;">​</a></h3><p>eslint 是一种用于识别和报告 ECMAScript/JavaScript 代码中发现的模式的工具，其目标是查找并修复代码中的问题使代码更加一致并避免错误。</p><h3 id="使用-2" tabindex="-1">使用： <a class="header-anchor" href="#使用-2" aria-label="Permalink to &quot;使用：&quot;">​</a></h3><ol><li>安装</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 安装</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 安装</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> react</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 的</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 推荐规则</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint-plugin-react</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 安装</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> prettier</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 的</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 配置文件与插件，目的将</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> pretier</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 规则转为</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> esLint</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 规则运行，合并两边不统一的一些规则</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint-config-prettier</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint-plugin-prettier</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 安装</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 的</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> typescript</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 解析器与插件推荐规则</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> typescript</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> @typescript-eslint/parser</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> @typescript-eslint/eslint-plugin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --dev</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint-plugin-react</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint-config-prettier</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eslint-plugin-prettier</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> typescript</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> @typescript-eslint/parser</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> @typescript-eslint/eslint-plugin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>编写配置文件 .eslintrc.js, 配置项说明：<a href="https://eslint.org/docs/user-guide/configuring" target="_blank" rel="noreferrer">https://eslint.org/docs/user-guide/configuring</a></li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  root: true, // 当前是根 eslint 配置</span></span>
<span class="line"><span>  env: {      // 代码运行环境</span></span>
<span class="line"><span>    browser: true,</span></span>
<span class="line"><span>    es6: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  extends: [</span></span>
<span class="line"><span>    &#39;eslint:recommended&#39;,       // eslint 自身推荐的规则</span></span>
<span class="line"><span>    &#39;plugin:react/recommended&#39;, // eslint-plugin-react 内的规则</span></span>
<span class="line"><span>    &#39;plugin:@typescript-eslint/eslint-recommended&#39;, // @typescript-eslint/eslint-plugin 内推荐的 eslint 规则</span></span>
<span class="line"><span>    &#39;plugin:@typescript-eslint/recommended&#39;,        // @typescript-eslint/eslint-plugin 内的规则</span></span>
<span class="line"><span>    &#39;plugin:prettier/recommended&#39;,     // eslint-plugin-prettier 内的规则，内已导入了 eslint-config-prettier 内配置的兼容react/@typescript-eslint/...的规则</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  parser: &#39;@typescript-eslint/parser&#39;, // 解析器，用于解析 ts 文件</span></span>
<span class="line"><span>  parserOptions: {                     // 解析器配置</span></span>
<span class="line"><span>    project: &#39;tsconfig.json&#39;,          // 解析器配置文件</span></span>
<span class="line"><span>    sourceType: &#39;module&#39;,              // 需要解析器解析的代码类型，代码是 ECMAScript 模块填 module</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [&#39;@typescript-eslint&#39;],     // 引入 @typescript-eslint/eslint-plugin 内的插件规则函数</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    // 规则查询文档：https://eslint.org/docs/latest/rules</span></span>
<span class="line"><span>    &#39;no-empty&#39;: [&#39;error&#39;, { allowEmptyCatch: true }], // 不允许空块语句,排除空catch语句。文档：https://eslint.org/docs/latest/rules/no-empty</span></span>
<span class="line"><span>    &#39;@typescript-eslint/no-explicit-any&#39;: &#39;off&#39;,      // 关闭不允许 any 类型。         文档：https://typescript-eslint.io/rules/no-explicit-any</span></span>
<span class="line"><span>    &#39;no-prototype-builtins&#39;: &#39;off&#39;,                   // 关闭不允许直接对对象调用Object.prototype方法。文档：https://eslint.org/docs/latest/rules/no-prototype-builtins</span></span>
<span class="line"><span>    &#39;react/display-name&#39;: &#39;off&#39;,                      // 关闭不允许React组件定义中缺少displayName。   文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  settings: { // 在所有插件规则中共享的设置</span></span>
<span class="line"><span>    react: {</span></span>
<span class="line"><span>      version: &#39;detect&#39;, // React版本。&quot;detect&quot;会自动选择您已安装的版本。</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ignorePatterns: [&#39;/*&#39;, &#39;!/src&#39;, &#39;/src/**/*.js&#39;], // eslint规则忽略的文件</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ol start="3"><li>package.json 添加规则校验命令</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>     &quot;lint&quot;: &quot;eslint .&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="4"><li>vscode 安装 dbaeumer.vscode-eslint 插件，设置保存时自动通过 eslint 规则格式化文件 .vscode/settings.json文件：</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;editor.formatOnSave&quot;: true,     // 开启保存时格式化</span></span>
<span class="line"><span>    &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>        &quot;source.fixAll.eslint&quot;: true // 保存时通过项目 .eslintrc.js 配置自动格式化代码</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,41);function u(k,b,m,g,y,v){const n=i,a=p,e=l;return h(),r("div",null,[d,s(n,{readTime:"5",words:"1.3k"}),s(a),s(e)])}const q=t(o,[["render",u]]);export{f as __pageData,q as default};
