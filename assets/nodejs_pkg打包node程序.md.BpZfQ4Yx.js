import{_ as e,a as p,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as r,I as s,a7 as h,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const k="/long-press/assets/432c500b.Bq2bnvtH.png",F=JSON.parse('{"title":"使用pkg打包node应用","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/pkg打包node程序.md","filePath":"nodejs/pkg打包node程序.md","lastUpdated":1714222764000}'),d={name:"nodejs/pkg打包node程序.md"},c=h(`<h1 id="使用pkg打包node应用" tabindex="-1">使用pkg打包node应用 <a class="header-anchor" href="#使用pkg打包node应用" aria-label="Permalink to &quot;使用pkg打包node应用&quot;">​</a></h1><p>node相比其它C艹等语言的好处是直接装好node环境后node xxx.js就可以运行了，非常方便。 但是这样的话别人就能直接看到源代码，而且每次部署都需要node环境，并且安装相关的依赖。</p><p>此时pkg这个库就能解决这个问题。 使用pkg对nodejs程序进行打包，能对项目源码和重要文件进行一定的保护，也能提升程序运行的便捷性，使用npm install -g pkg全局安装pkg。</p><p>通过此命令行界面，您可以将Node.js项目打包到可执行文件中，该可执行文件甚至可以在未安装Node.js的设备上运行。</p><p>正确的姿势:例如项目的入口文件是app.js</p><p>1、项目根目录下安装pkg</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> pkg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、打包配置</p><p>参考pkg文档。pkg可以在任意系统上打包全平台的可执行文件。例如我的需求是需要打包win64位系统node8环境的包。 只需要package.json的scripts下配置的话是去读取bin的入口文件。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">  &quot;pkgwin&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;pkg . -t node16-win-x64 -o app&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>bin路径</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">  &quot;bin&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;./app.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>需要注意的是pkg只会分析require的文件并打包在一起，如果是动态拼接的路径就不会打包进去。</p><p>例如我的项目下有的是开启子进程的代码</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>const trackWorker = child_process.fork(\`\${</span></span>
<span class="line"><span>	__dirname}/workers/trackChild.js\`);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此时，需要告诉pkg需要手动打包的文件</p><p>在打包过程中 pkg ，解析源代码，检测对 require 的调用，遍历项目的依赖项，并将它们包含在可执行文件中。在大多数情况下，您不需要手动指定任何内容。 但是，您的代码可能具有 require(variable) 调用（所谓的非文字参数 require ）或使用非 javascript 文件（例如视图、css、图像等）。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">\`./build/</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">cmd</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">.js\`</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">join</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">\`views/</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">viewName</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此类情况不由 pkg .因此，您必须在 package.json 文件的属性中 pkg 手动指定文件 - 脚本和资产</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">  &quot;pkg&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">    &quot;scripts&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;build/**/*.js&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">    &quot;assets&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;views/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">    &quot;targets&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">      &quot;node14-linux-arm64&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">    &quot;outputPath&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;dist&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面的例子将包含 <code>build/ </code>和 <code>assets/</code> 的所有 .js 文件，仅为 node14-linux-arm64 构建，并将可执行文件放在 中 <code>dist/</code> 。 您还可以指定 glob 数组：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">  &quot;assets&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;assets/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;images/**/*&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="pkg打包的可执行程序读取本地文件" tabindex="-1">pkg打包的可执行程序读取本地文件 <a class="header-anchor" href="#pkg打包的可执行程序读取本地文件" aria-label="Permalink to &quot;pkg打包的可执行程序读取本地文件&quot;">​</a></h2><p>pkg打包前与打包后的路径有一些变化，比如打包的时候用 pkg /path/app.js ， 那么打包后，__filename 就是 /snapshot/path/app.js， __dirname 就是 /snapshot/path，</p><p>详细如下表所示： <img src="`+k+`" alt=""> process.cwd() 就是打包后的可执行程序（比如windows下的exe文件，这个exe文件你可以随意移动）所在路径， __dirname则是exe内部项目根目录，有如下文件引用场景：</p><p>1.项目需要引用配置文件config.json，该配置文件内容固定不变。</p><p>引用方法： path.join( __dirname, ‘config.json’) 注意： path.join(）函数中，如果引用文件在项目根目录直接写 &#39;config.json’即可，如果不在需要填入详细路径。</p><p>2.项目需要引用配置文件config.json，该配置文件内容动态变化。</p><p>引用方法：可将config.json文件复制到exe文件所在目录，使用 path.join( process.cwd(), ‘config.json’) 注意： path.join(）函数中，如果引用文件与exe同级，直接写 &#39;config.json’即可，如果在exe文件同级目录下的子目录中，需要填入详细路径。 文件引用问题解决后需要使用 fs.readFileSync(configPath, “utf-8”) 读取文件内容，configPath参数为文件引用路径，注意了，一定要使用同步读取readFileSync， 因为很可能你程序后面的操作需要在读取文件的基础上进行，如果使用异步读取readFile，则文件还没读取后面的操作就继续进行了，会直接报错。</p><blockquote><p>注意：静态文件需要在项目中将文件的引用换成 <code>path.join(__dirname, &#39;dist&#39;)</code> 的形式，才可以正常打包，否则可能会读取不到。</p></blockquote><h2 id="命令行打包" tabindex="-1">命令行打包 <a class="header-anchor" href="#命令行打包" aria-label="Permalink to &quot;命令行打包&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pkg</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> node10-macos-x64</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> index.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pkg</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> node14-win-x64</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> anyAPIcheck.js</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> （使用node14版本单独打包windows下的64位可执行文件）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>nodejs新版本中没有32位linux与macos版本，只有64位版本的，只有windows同时包含32位与64位版本。</p><p>如果只想打包windows下的exe，则加上-t参数。win即为打包成windows平台下的exe文件</p><h2 id="package-json-配置" tabindex="-1">package.json 配置 <a class="header-anchor" href="#package-json-配置" aria-label="Permalink to &quot;package.json 配置&quot;">​</a></h2><p>pkg可以根据package.json下的配置进行打包，默认入口文件为bin指向的文件。 执行</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pkg</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#或</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pkg</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果不想每次都输入这么多参数，则需要在 package.json 文件增加一个 bin 和 pkg 选项： 即可自动按照package.json的配置打包。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>//package.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> //其他配置项</span></span>
<span class="line"><span> &quot;bin&quot;: &quot;service.js&quot;,//入口文件</span></span>
<span class="line"><span> &quot;pkg&quot;: {</span></span>
<span class="line"><span>	 &quot;scripts&quot;: [</span></span>
<span class="line"><span>		&quot;build/**/*.js&quot;//需要打包进来的其他js文件，可添加多个  </span></span>
<span class="line"><span>	 ],</span></span>
<span class="line"><span>	 &quot;assets&quot;: [</span></span>
<span class="line"><span>		&quot;dist/**/*&quot;//静态文件的目录，可添加多个</span></span>
<span class="line"><span>	 ],</span></span>
<span class="line"><span>	 &quot;targets&quot;: [ // 打包选项，格式为：node版本-平台类型 mac 或 windows-架构</span></span>
<span class="line"><span>		 &quot;node10-win-x64&quot;,</span></span>
<span class="line"><span>		 &quot;node10-macos-x64&quot;</span></span>
<span class="line"><span>		],</span></span>
<span class="line"><span>		&quot;output&quot;: &quot;proxy&quot; // 可执行文件名，比如 proxy-win.exe 或 proxy-macos</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="assets" tabindex="-1">Assets <a class="header-anchor" href="#assets" aria-label="Permalink to &quot;Assets&quot;">​</a></h2><p>有一些文件，它不是 js 文件，也没有在代码中 require 过，比如 html 和 css 文件。pkg 就无能为力了。 如果想将这些文件也打包到可执行文件中，将它们放到 pakcage.json 的 pkg 的 assets 数组中就可以了，比如：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&quot;assets&quot;: [ // 需要被打包的资源文件（即没有在代码中被 require 过的文件）</span></span>
<span class="line"><span> &quot;index.html&quot;</span></span>
<span class="line"><span>],</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="动态加载的文件" tabindex="-1">动态加载的文件 <a class="header-anchor" href="#动态加载的文件" aria-label="Permalink to &quot;动态加载的文件&quot;">​</a></h2><p>有一些文件，你不想打包进去，比如一些配置文件、json 文件，可以在 require 时指定绝对路径， 比如 data 目录下的 users.json 文件：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> users</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">join</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">process</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">execPath</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;../data/users.json&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后在打包后，将在可执行文件的同级目录下新建 data 目录，再将 users.json 文件拷贝到 data 目录即可。</p><p>这样，以在运行时改变 app 的一些参数。</p><p>注意，修改 users.json 文件内容后，需要重启可执行文件才能生效。</p><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>确保你的应用程序没有依赖于运行时环境的绝对路径或其他环境特有的因素。 如果你的应用需要读取本地文件资源，要注意 pkg 打包后会对文件系统进行一定的虚拟化处理，需要使用 __dirname 等机制来正确获取资源路径。 当项目中有动态加载模块或使用动态路径时，需要特别注意兼容性问题，有时可能需要硬编码路径或者采用其他策略来避免运行时找不到文件的问题。 测试生成的可执行文件在目标平台上能否正常运行。</p><h2 id="高级选项" tabindex="-1">高级选项 <a class="header-anchor" href="#高级选项" aria-label="Permalink to &quot;高级选项&quot;">​</a></h2><p>可以通过 --debug 参数生成带有调试信息的可执行文件，便于调试。 使用 --no-bytecode 禁止将V8字节码嵌入到可执行文件中。 根据实际情况选择合适的Node.js运行时版本，以及操作系统和架构的目标组合。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,53);function u(g,b,m,y,B,v){const a=e,n=p,i=l;return o(),r("div",null,[c,s(a,{readTime:"6",words:"1.8k"}),s(n),s(i)])}const j=t(d,[["render",u]]);export{F as __pageData,j as default};
