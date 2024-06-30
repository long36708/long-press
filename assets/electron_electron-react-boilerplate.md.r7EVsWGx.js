import{_ as e,a as l,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as p,c as r,I as s,a7 as h,o as k}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const A=JSON.parse('{"title":"electron-react-boilerplate","description":"","frontmatter":{},"headers":[],"relativePath":"electron/electron-react-boilerplate.md","filePath":"electron/electron-react-boilerplate.md","lastUpdated":1714570785000}'),o={name:"electron/electron-react-boilerplate.md"},d=h(`<h1 id="electron-react-boilerplate" tabindex="-1">electron-react-boilerplate <a class="header-anchor" href="#electron-react-boilerplate" aria-label="Permalink to &quot;electron-react-boilerplate&quot;">​</a></h1><p><a href="https://electron-react-boilerplate.js.org/docs/installation" target="_blank" rel="noreferrer">https://electron-react-boilerplate.js.org/docs/installation</a></p><p>简称 ERB</p><h2 id="adding-dependencies-添加依赖项" tabindex="-1">Adding Dependencies 添加依赖项 <a class="header-anchor" href="#adding-dependencies-添加依赖项" aria-label="Permalink to &quot;Adding Dependencies 添加依赖项&quot;">​</a></h2><p>Module Structure 模块结构 This boilerplate uses a two package.json structure. This means you will have two package.json files. 此样板使用双package.json结构。这意味着您将有两个 package.json 文件。</p><p>./package.json in the root of your project ./package.json 在项目的根目录中 ./release/app/package.json relative to the project root ./release/app/package.json 相对于项目根目录</p><h2 id="要使用哪个package-json文件" tabindex="-1">要使用哪个package.json文件 <a class="header-anchor" href="#要使用哪个package-json文件" aria-label="Permalink to &quot;要使用哪个package.json文件&quot;">​</a></h2><p>Rule of thumb is: all modules go into ./package.json except for native modules, or modules with native dependencies or peer dependencies. Native modules, or packages with native dependencies should go into ./release/app/package.json. 经验法则是：除了本机模块或具有本机依赖关系或对等依赖关系的模块之外，所有模块都进入 <code>./package.json</code> 。 本机模块或具有本机依赖项的包应进入<code> ./release/app/package.json</code> .</p><p>If the module is native to a platform (like node-postgres), it should be listed under dependencies in ./release/app/package.json 如果模块是平台（如 node-postgres）的原生模块，则应将其列在<code>./release/app/package.json</code>的 dependencies</p><p>If a module is imported by another module, include it in dependencies in ./package.json. Examples of such modules are material-ui, redux-form, and moment. 如果一个模块被 另一个模块 import，请将其包含在<code>./package.json</code> 的 dependencies 中 。 此类模块的示例包括 material-ui 、 redux-form 和 moment 。</p><p>Otherwise, modules used for building, testing, and debugging should be included in devDependencies in ./package.json. 否则，用于构建、测试和调试的模块应包含在 <code>./package.json</code>的 devDependencies 中。</p><h3 id="node-原生模块" tabindex="-1">Node 原生模块 <a class="header-anchor" href="#node-原生模块" aria-label="Permalink to &quot;Node 原生模块&quot;">​</a></h3><p>原生Node.js模块由Electron支持，但由于Electron具有与给定Node.js不同的 应用二进制接口 (ABI)(由于使用Chromium的 BoringSL 而不是 OpenSSL 等 差异)， 您使用的原生 模块需要为Electron重新编译。 否则，当您尝试运行您的应用程序时， 将会遇到以下的错误：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>Error: The module &#39;/path/to/native/module.node&#39;</span></span>
<span class="line"><span>was compiled against a different Node.js version using</span></span>
<span class="line"><span>NODE_MODULE_VERSION $XYZ. This version of Node.js requires</span></span>
<span class="line"><span>NODE_MODULE_VERSION $ABC. Please try re-compiling or re-installing</span></span>
<span class="line"><span>the module (for instance, using \`npm rebuild\` or \`npm install\`).</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>为 Electron 安装并重新编译模块 您可以像其他 Node 项目一样安装模块，然后用<code>@electron/rebuild</code> 包重建这些模块以适配 Electron 。 这个包可以自动识别当前 Electron 版本，为你的应用自动完成下载 headers、重新编译原生模块等步骤</p><p>例如，你可以通过下面的命令来安装独立的 @electron/rebuild 工具并重新编译模块:</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> @electron/rebuild</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Every time you run &quot;npm install&quot;, run this:</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">./node_modules/.bin/electron-rebuild</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># If you have trouble on Windows, try:</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">node_modules</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">.bin</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">electron-rebuild.cmd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><a href="https://www.electronjs.org/zh/docs/latest/tutorial/using-native-node-modules" target="_blank" rel="noreferrer">https://www.electronjs.org/zh/docs/latest/tutorial/using-native-node-modules</a></p><h2 id="native-modules-本机模块" tabindex="-1">Native Modules 本机模块 <a class="header-anchor" href="#native-modules-本机模块" aria-label="Permalink to &quot;Native Modules 本机模块&quot;">​</a></h2><h3 id="what-are-native-modules" tabindex="-1">What are Native Modules? <a class="header-anchor" href="#what-are-native-modules" aria-label="Permalink to &quot;What are Native Modules?&quot;">​</a></h3><p>什么是本机模块？</p><p>Native node modules are node dependencies that are written in C++, C, or Rust. Native modules may need to be compiled against a specific version of node. If you change your node version then you&#39;ll need to recompile your native modules, which will be done automatically on postinstall. 本机Node模块是用 C++、C 或 Rust 编写的节点依赖项。 可能需要针对特定版本的Node编译模块。 如果您更改了Node版本，则需要重新编译本机模块，这将在安装后自动完成。</p><p>electron-rebuild will detect and recompile your native modules against the version of node being used by electron. Changing your electron version will require a recompilation. electron-rebuild 将根据 Electron 使用的Node版本检测并重新编译您的原生模块。更改您的electron版本将需要重新编译。</p><p>electron-react-boilerplate 原生模块具有特殊要求，因此处理方式与常规模块不同。 原生模块在与 webpack 捆绑时是有问题的，因此 electron-react-boilerplate 避免捆绑它们 -- 因为它们被视为 webpack 外部模块。 electron-react-boilerplate 中的原生模块被安装到目录中 <code>./release/app/node_modules </code>，并在打包之前复制到你的 electron 应用程序中。</p><h3 id="主进程原生模块" tabindex="-1">主进程原生模块 <a class="header-anchor" href="#主进程原生模块" aria-label="Permalink to &quot;主进程原生模块&quot;">​</a></h3><p>You can import native modules as usual in the main process as you would other modules. Types for native module dependencies (such as @types/sqlite) should be installed to your root package.json since they are not required in production. 您可以像往常一样在主进程中导入本机模块，就像导入其他模块一样。 本机模块依赖项的类型（如 @types/sqlite ）应安装到根目录 package.json 中，因为它们在生产中不是必需的。</p><h3 id="渲染进程原生模块" tabindex="-1">渲染进程原生模块 <a class="header-anchor" href="#渲染进程原生模块" aria-label="Permalink to &quot;渲染进程原生模块&quot;">​</a></h3><p>Loading remote content in the renderer process with node integration enabled is a security vulnerability and is discouraged by electron&#39;s security documentation. Because of this, node integration is disabled by default. 在启用Node集成的情况下在渲染器进程中加载远程内容是一个安全漏洞，Electron 的安全文档不鼓励这样做。因此，默认情况下，Node集成处于禁用状态。</p><p>Make the following changes to opt in to node integration: 进行以下更改以选择加入节点集成： webpack.config.renderer.prod.ts</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>- target: [&#39;web&#39;, &#39;electron-renderer&#39;],</span></span>
<span class="line"><span>+ target: &#39;electron-renderer&#39;,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>webpack.config.renderer.dev.ts</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>- target: [&#39;web&#39;, &#39;electron-renderer&#39;],</span></span>
<span class="line"><span>+ target: &#39;electron-renderer&#39;,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>webpack.config.renderer.prod.ts</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>- library: {</span></span>
<span class="line"><span>- type: &#39;umd&#39;,</span></span>
<span class="line"><span>- },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>webpack.config.renderer.dev.ts</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>- library: {</span></span>
<span class="line"><span>- type: &#39;umd&#39;,</span></span>
<span class="line"><span>- },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>main.ts</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>webPreferences: {</span></span>
<span class="line"><span>+ nodeIntegration: true,</span></span>
<span class="line"><span>+ contextIsolation: false,</span></span>
<span class="line"><span>- preload: path.join(__dirname, &#39;preload.js&#39;),</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>webpack.config.main.prod.ts</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>entry: {</span></span>
<span class="line"><span>	main: path.join(webpackPaths.srcMainPath, &#39;main.ts&#39;),</span></span>
<span class="line"><span>	- preload: path.join(webpackPaths.srcMainPath, &#39;preload.js&#39;),</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> package</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>调试生产版本 只需设置 DEBUG_PROD env 变量，即可使用 devtools 调试生产版本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> cross-env</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> DEBUG_PROD=</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> package</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装electron-store" tabindex="-1">安装electron-store <a class="header-anchor" href="#安装electron-store" aria-label="Permalink to &quot;安装electron-store&quot;">​</a></h2><p>解决electron-store在webpack打包中的Cannot find module &quot;.&quot; 问题</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>//在根目录下</span></span>
<span class="line"><span>npm uninstall electron-store --save //卸载electron-store这个包</span></span>
<span class="line"><span>cd app &amp;&amp; npm install electron-store --save //在app目录下安装这个包，包的信息会添加到这个目录下的package.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//回到根目录</span></span>
<span class="line"><span>npm run package//成功打包了！！！！</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>src/main/preload.js</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">contextBridge</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">ipcRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;electron&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">contextBridge</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">exposeInMainWorld</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;electron&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">	store</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">		get</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">			return</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> ipcRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">sendSync</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;electron-store-get&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		},</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">		set</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">property</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">val</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">			ipcRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;electron-store-set&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">property</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">val</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		},</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">		// Other method you want to add like has(), reset(), etc.</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	},</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	// Any other methods you want to expose in the window object.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	// ...</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>在主进程中添加事件侦听器： src/main/main.ts</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> Store</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;electron-store&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> store</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> Store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// IPC listener</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">ipcMain</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;electron-store-get&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">val</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	event</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">returnValue</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">val</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">ipcMain</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;electron-store-set&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">val</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">val</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>添加以下类型 defs： src/renderer/preload.d.ts</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> global</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	interface</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> Window</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">		electron</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">			store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">				get</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: (</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">				set</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: (</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">val</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				// any other methods you&#39;ve defined...</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">			};</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		};</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>现在，您可以在 渲染进程中使用 electron-store： src/renderer/App.tsx</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>// ...</span></span>
<span class="line"><span>&lt;button</span></span>
<span class="line"><span>  onClick={() =&gt; {</span></span>
<span class="line"><span>    window.electron.store.set(&#39;foo&#39;, &#39;bar&#39;);</span></span>
<span class="line"><span>    // or</span></span>
<span class="line"><span>    console.log(window.electron.store.get(&#39;foo&#39;));</span></span>
<span class="line"><span>  }}</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>  Click Me!</span></span>
<span class="line"><span>&lt;/button&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,56);function c(g,u,b,y,m,B){const a=e,n=l,i=t;return k(),r("div",null,[d,s(a,{readTime:"6",words:"1.5k"}),s(n),s(i)])}const E=p(o,[["render",c]]);export{A as __pageData,E as default};
