import{_ as e,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as i,c,I as s,a7 as t,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const C=JSON.parse('{"title":"DLL使用","description":"","frontmatter":{},"headers":[],"relativePath":"electron/DLL使用.md","filePath":"electron/DLL使用.md","lastUpdated":1714222764000}'),o={name:"electron/DLL使用.md"},u=t(`<h1 id="dll使用" tabindex="-1">DLL使用 <a class="header-anchor" href="#dll使用" aria-label="Permalink to &quot;DLL使用&quot;">​</a></h1><p>Dll文件是动态链接库，桌面软件中经常需要使用。</p><blockquote><p>避坑指南</p><p>如果引入模块报错，那么降低electron版本到 v18 及以下版本 32位的 dll 必须在 32位node、 32位electron 上调用</p></blockquote><p>更推荐使用 <code>koffi</code> <a href="https://koffi.dev/" target="_blank" rel="noreferrer">https://koffi.dev/</a></p><h2 id="准备环境" tabindex="-1">准备环境 <a class="header-anchor" href="#准备环境" aria-label="Permalink to &quot;准备环境&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 编译工具</span></span>
<span class="line"><span>npm i -g node-gyp</span></span>
<span class="line"><span></span></span>
<span class="line"><span># C++构建工具</span></span>
<span class="line"><span>1. 管理员模式打开PowerShell</span></span>
<span class="line"><span>2. npm --vs2015 i -g --production windows-build-tools</span></span>
<span class="line"><span>   或者 npm i -g --production windows-build-tools </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span># 外部接口调用库</span></span>
<span class="line"><span>1. npm install ref-napi         // 基本类型</span></span>
<span class="line"><span>2. npm install ref-array-napi   // 数组类型</span></span>
<span class="line"><span>3. npm install ref-struct-napi  // 结构体类型</span></span>
<span class="line"><span>4. npm install ffi-napi         // 连接c代码和js代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 编译 ref-napi 库</span></span>
<span class="line"><span>1. cd ./node_modules/ref-napi</span></span>
<span class="line"><span>2. node-gyp configure  // 配置</span></span>
<span class="line"><span>3. node-gyp build      // 编译</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="测试代码" tabindex="-1">测试代码 <a class="header-anchor" href="#测试代码" aria-label="Permalink to &quot;测试代码&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>const ffi = require(&#39;ffi-napi&#39;);</span></span>
<span class="line"><span>var ref = require(&#39;ref-napi&#39;);</span></span>
<span class="line"><span>var ArrayType = require(&#39;ref-array-napi&#39;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * exec dll file</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async execDll () {</span></span>
<span class="line"><span>  // 资源路径</span></span>
<span class="line"><span>  const dllFile = &#39;myDllDemo.dll&#39;;</span></span>
<span class="line"><span>  const dllPath = path.join(Ps.getExtraResourcesDir(), &quot;dll&quot;, dllFile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 映射到C语言 int数组类型</span></span>
<span class="line"><span>  var IntArray = ArrayType(ref.types.int);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 加载 DLL文件,无需写扩展名,将DLL中的函数映射成JS方法</span></span>
<span class="line"><span>  const MyDellDemo = new ffi.Library(dllPath, {</span></span>
<span class="line"><span>    // 方法名必须与C函数名一致</span></span>
<span class="line"><span>    add: [</span></span>
<span class="line"><span>      &#39;int&#39;, // 对应 C函数返回类型</span></span>
<span class="line"><span>      [&#39;int&#39;, &#39;int&#39;] // C函数参数列表</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 使用 ffi中内置类型的简写类型</span></span>
<span class="line"><span>    addPtr: [&#39;void&#39;, [&#39;int&#39;, &#39;int&#39;, &#39;int*&#39;]],</span></span>
<span class="line"><span>    // IntArray 是上面通过 ArrayType 构建出来的类型</span></span>
<span class="line"><span>    initArray: [&#39;void&#39;, [IntArray, &#39;int&#39;]]</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 调用add 方法</span></span>
<span class="line"><span>  const res = MyDellDemo.add(1, 2);</span></span>
<span class="line"><span>  console.log(\`add method result of 1 + 2 is: \` + res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 调用addPtr 方法</span></span>
<span class="line"><span>  // 使用Buffer类在C代码和JS代码之间实现了内存共享，让Buffer成为了C语言当中的指针。</span></span>
<span class="line"><span>  // C函数使用指针操作函数外部的内存，所以首先需要 分配一个int类型的内存空间 第一个参数为 C语言数据类型，第二个参数为 默认值</span></span>
<span class="line"><span>  var intBuf = ref.alloc(ref.types.int, 100);</span></span>
<span class="line"><span>  console.log(&#39;addPtr 调用前数据&gt;&gt;&#39;, ref.deref(intBuf)); //获取指向的内容</span></span>
<span class="line"><span>  MyDellDemo.addPtr(2, 2, intBuf); // 调用函数，传递指针</span></span>
<span class="line"><span>  console.log(&#39;addPtr 调用后数据&gt;&gt;&#39;, ref.deref(intBuf));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 调用initArray 方法</span></span>
<span class="line"><span>  // IntArray 是前面使用ref-napi 和 ref-array-napi 库创建的数据类型,数组的长度为 8</span></span>
<span class="line"><span>  // 这里一定要分配内存空间，否则 函数内的指针无法操作内存</span></span>
<span class="line"><span>  let myArray = new IntArray(8);</span></span>
<span class="line"><span>  MyDellDemo.initArray(myArray, 8);</span></span>
<span class="line"><span>  console.log(&#39;初始化数组执行结果:&#39;);</span></span>
<span class="line"><span>  for (var i = 0; i &lt; myArray.length; i++) {</span></span>
<span class="line"><span>    console.log(myArray[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>测试使用的dll文件位置：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>./build/extraResources/dll/myDllDemo.dll</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注：引用 <a href="https://blog.csdn.net/paopao_wu/article/details/107507225" target="_blank" rel="noreferrer">https://blog.csdn.net/paopao_wu/article/details/107507225</a></p><h2 id="调用第三方程序" tabindex="-1">调用第三方程序 <a class="header-anchor" href="#调用第三方程序" aria-label="Permalink to &quot;调用第三方程序&quot;">​</a></h2><p>在项目中，通常需要调用（打开）第三方软件，如exe、bash脚本、dll库等；</p><h3 id="额外资源目录" tabindex="-1">额外资源目录 <a class="header-anchor" href="#额外资源目录" aria-label="Permalink to &quot;额外资源目录&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>./build/extraResources</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="内部逻辑" tabindex="-1">内部逻辑 <a class="header-anchor" href="#内部逻辑" aria-label="Permalink to &quot;内部逻辑&quot;">​</a></h3><p>生成软件时，将 额外资源目录 一起打进软件安装包 软件安装后，将资源解压到：软件安装位置/resources/extraResources</p><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 打包前后资源路径不同</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ps.getExtraResourcesDir()会自动判断当前是打包前，还是打包后</span></span>
<span class="line"><span>let softwarePath = &#39;&#39;;</span></span>
<span class="line"><span>softwarePath = path.join(Ps.getExtraResourcesDir(), softName);</span></span>
<span class="line"><span></span></span>
<span class="line"><span># demo已经在项目中，请查看</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 调用其它程序</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>openSoftware (softName) {</span></span>
<span class="line"><span>  .......</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>demo中powershell.exe 软件位置</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 把它放到 ./build/extraResources 资源目录中，并测试</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,22);function d(m,h,f,v,y,g){const n=e,a=l,p=r;return b(),c("div",null,[u,s(n,{readTime:"3",words:"802"}),s(a),s(p)])}const D=i(o,[["render",d]]);export{C as __pageData,D as default};
