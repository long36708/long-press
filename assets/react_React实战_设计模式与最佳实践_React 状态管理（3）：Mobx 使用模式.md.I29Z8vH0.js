import{_ as e,a as l,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as h,c as k,I as s,j as i,a as r,a7 as d,o as c}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const x=JSON.parse('{"title":"React 状态管理（3）：Mobx 使用模式","description":"","frontmatter":{},"headers":[],"relativePath":"react/React实战,设计模式与最佳实践/React 状态管理（3）：Mobx 使用模式.md","filePath":"react/React实战,设计模式与最佳实践/React 状态管理（3）：Mobx 使用模式.md","lastUpdated":1708863350000}'),o={name:"react/React实战,设计模式与最佳实践/React 状态管理（3）：Mobx 使用模式.md"},B=i("h1",{id:"react-状态管理-3-mobx-使用模式",tabindex:"-1"},[r("React 状态管理（3）：Mobx 使用模式 "),i("a",{class:"header-anchor",href:"#react-状态管理-3-mobx-使用模式","aria-label":'Permalink to "React 状态管理（3）：Mobx 使用模式"'},"​")],-1),g=d(`<p>既然说了 Redux，没有理由不聊一聊 Mobx，这两个状态管理工具在业界都被广泛应用，走得却是完全不同的两条路。</p><h2 id="理解-mobx" tabindex="-1">理解 Mobx <a class="header-anchor" href="#理解-mobx" aria-label="Permalink to &quot;理解 Mobx&quot;">​</a></h2><p>虽然 Mobx 和 Redux 有很大不同，但是至少还有一个共同点——这两个工具都和 React 没有任何直接关系，只不过凑巧 React 社区大量使用它们罢了。</p><p>从技术上说，Mobx 和 Redux 都是中立的状态管理工具，他们能够应用于 React，也可以用于其他需要状态管理的场景。</p><p>还是用 create-react-app 产生的应用来演示 Mobx 吧，要使用 Mobx，首先我们要在项目中安装对应的 npm 包。</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> mobx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我们用 Mobx 来实现一个很简单的计数工具，首先，需要有一个对象来记录计数值，代码如下：</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">observable</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;mobx&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> counter</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> observable</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">	count</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在上面的代码中，counter 是一个对象，其实就是用 observable 函数包住一个普通 JavaScript 对象，但是 observable 的介入，让 counter 对象拥有了神力。</p><p>我们用最简单的代码来展示这种“神力”，代码如下：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">autorun</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;mobx&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> counter</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">autorun</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	console</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;#count&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">counter</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>把 counter 赋值给 window.counter，是为了让我们在 Chrome 的开发者界面可以访问。</p><p>用 autorun 包住了一个函数，这个函数输出 counter.count 的值，这段代码的作用，我们很快就能看到。</p><p>在 Chrome 的开发者界面，我们可以直接访问 window.counter.count，</p><p>神奇之处是，如果我们直接修改 window.counter.count 的值，可以直接触发 autorun 的函数参数！</p><p>这个现象说明，mobx 的 observable 拥有某种“神力”，任何对这个对象的修改，都会立刻引发某些函数被调用。</p><p>和 observable 这个名字一样，被包装的对象变成了“被观察者”，而被调用的函数就是“观察者”，在上面的例子中，autorun 的函数参数就是“观察者”。</p><p>Mobx 这样的功能，等于实现了设计模式中的“观察者模式”（Observer Pattern），通过建立 observer 和 observable 之间的关联，达到数据联动。</p><p>不过，传统的“观察者模式”要求我们写代码建立两者的关联，也就是写类似下面的代码：</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">observable</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">register</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">observer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Mobx 最了不起之处，在于不需要开发者写上面的关联代码，Mobx自己通过解析代码就能够自动发现 observer 和 observable 之间的关系。</p><p>我们很自然想到，如果让我们的数据拥有这样的“神力”，那我们就不用在修改完数据之后，再费心去调用某些函数使用这些数据了，数据管理会变得十分轻松。</p><h2 id="decorator-装饰者" tabindex="-1">decorator 装饰者 <a class="header-anchor" href="#decorator-装饰者" aria-label="Permalink to &quot;decorator 装饰者&quot;">​</a></h2><p>因为 Mobx 的作用就是把简单的对象赋予神力，总要有一种方法能够在不改变对象代码的前提，去改变对象的行为，这就用得上“装饰者模式”（Decorator Pattern）。</p><p>单独说“装饰者模式”，这只是面向对象编程思想下的一种模式，不过对 JavaScript 语言而言，就不只是一种模式，而是一种语言特性，</p><p>它在语法上对这种模式提供了强大的支持，所谓强大，就是指使用起来代码极其简洁。</p><p>根据 JavaScript 语法，我们可以这样创造一个 decorator，叫做 log：</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> log</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">target</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">descriptor</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	console</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;#target&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">target</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	console</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;#name&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	console</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;#descriptor&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">descriptor</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> descriptor</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>当然，很明显这个 decorator 什么实质的事情都没做，只是用 console.log 输出了三个参数秀了一下存在感，最后返回的 descriptor，就是被这个『装饰者』所『装饰』的对象。</p><p>下面是使用这个 decorator 的代码示例：</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">log</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> Bar</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	@</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">log</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	bar</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">		console</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;bar&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>可以看到，@ 符号就是使用 decorator 的标志，将 @log 作用于一个类 Bar，那么最后得到的 Bar 其实是调用 log 函数返回的结果；</p><p>将 @log 作用于一个类成员 @bar，最后得到的 bar 同样是调用 log 函数之后得到的结果。</p><p>可见，如果我们巧妙地编写 log 函数，控制返回的结果，就可以操纵被『装饰』的类或者成员。</p><p>编写 decorator 是一个复杂的过程，也超出了这本小册的范围，有兴趣的读者可以自行研究。</p><p>在这里，读者只需要知道，虽然使用 Mobx 并不是必须使用 decorator，但是使用 decorator 会让 Mobx 的应用代码简洁易读很多。</p><h2 id="在-create-react-app-中增加-decorator-支持" tabindex="-1">在 create-react-app 中增加 decorator 支持 <a class="header-anchor" href="#在-create-react-app-中增加-decorator-支持" aria-label="Permalink to &quot;在 create-react-app 中增加 decorator 支持&quot;">​</a></h2><p>很不幸，create-react-app 产生的应用并不支持 decorator，官方解释是：decorator 并没有成为稳定的标准，</p><p>为了防止今天写的代码没多久就不好使，create-react-app 不会支持这样的不稳定的功能。</p><p>不过，这并不表示完全没有办法，事情可以解决，只是有些麻烦，我们要做的只是在应用中添加支持 decorator 的 babel plugin。</p><p>首先，我们动用 create-react-app 的 eject 功能，这表示我们和 create-react-app 缺省照顾一切的 react-scripts 一刀两断，</p><p>从此之后，webpack 和 babel 配置就完全由我们自己控制。</p><p>要注意，eject 是不可逆的，做了就收不回来了，所以，请谨慎使用 eject，不过，为了支持 decorator，我们也别无选择。</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> eject</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 eject 之后，我们手动安装支持 decorator 的 babel 插件:</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> babel-plugin-transform-decorators-legacy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后，我们找到 package.json 里面 babel 这一部分，添加 plugins 部分，让这一部分变成这个样子：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&quot;babel&quot;: {</span></span>
<span class="line"><span>    &quot;plugins&quot;: [</span></span>
<span class="line"><span>      &quot;transform-decorators-legacy&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;presets&quot;: [</span></span>
<span class="line"><span>      &quot;react-app&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>现在，我们离在 create-react-app 产生的应用中使用 decorator 只差一步了，</p><p>记得我们说过 Mobx 和 React 并无直接关系吗？为了建立二者的关系，还需要安装 mobx-react:</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>npm install mobx-react</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>现在，我们可以使用 decorator 来操作 Mobx了。</p><h2 id="用-decorator-来使用-mobx" tabindex="-1">用 decorator 来使用 Mobx <a class="header-anchor" href="#用-decorator-来使用-mobx" aria-label="Permalink to &quot;用 decorator 来使用 Mobx&quot;">​</a></h2><p>还是以 Counter 为例，看如何用 decorator 使用 Mobx，我们先看代码：</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">observable</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;mobx&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">observer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;mobx-react&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">observer</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> Counter</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> React</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">Component</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	@</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">observable</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	onIncrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">		this</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	onDecrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">		this</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	componentWillUpdate</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">		console</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;#enter componentWillUpdate&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	render</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">		return</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">			&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">CounterView</span></span>
<span class="line"><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				caption</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;With decorator&quot;</span></span>
<span class="line"><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				onIncrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">onIncrement</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				onDecrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">onDecrement</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">			/&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>在上面的代码中，Counter 这个 React 组件自身是一个 observer，而 observable 是 Counter 的一个成员变量 count。</p><p>注意 observer 这 个decorator 来自于 mobx-react，它是 Mobx 世界和 React 的桥梁，被它“装饰”的组件，</p><p>只要用到某个被 Mobx 的 observable “装饰”过的数据，自然会对这样的数据产生反应。</p><p>所以，只要 Counter 的 count 成员变量一变化，就会引发 Counter 组件的重新渲染。</p><p>可以注意到，Counter 的代码中并没有自己的 state，其实，被 observer 修饰过之后，Counter 被强行&quot;注入”了 state，只不过我们看不见而已。</p><h2 id="独立的-store" tabindex="-1">独立的 Store <a class="header-anchor" href="#独立的-store" aria-label="Permalink to &quot;独立的 Store&quot;">​</a></h2><p>虽然把 observer 和 observable 集中在一个 React 组件中可行，</p><p>但是，这也让 observable 的状态被封存在了 React 组件内，那我们直接用 React 自身的 state 管理也能解决问题，所以，这样使用 Mobx 意义不大。</p><p>更多适用于 Mobx 的场合，就和适用于 Redux 的场合一样，是一个状态需要多个组件共享，所以 observable 一般是在 React 组件之外。</p><p>我们重写一遍 Counter 组件，代码如下：</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> store</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> observable</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">	count</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">increment</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">	this</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">decrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">	this</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">observer</span><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // this decorator is must</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> Counter</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> React</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">Component</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	onIncrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">		store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">increment</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	onDecrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">		store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">decrement</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	render</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">		return</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">			&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">CounterView</span></span>
<span class="line"><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				caption</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;With external state&quot;</span></span>
<span class="line"><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">store</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				onIncrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">onIncrement</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">				onDecrement</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">onDecrement</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">			/&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>可以看到，我们把 count 提到组件之外，甚至就把它叫做 store，这延续的是 Redux 的命名方法。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>在这一小节中，我们介绍了 Mobx，读者应该能学到：</p><ul><li>Mobx 的基本功能就是“观察者模式”</li><li>decorator 是“装饰者模式”在 JavaScript 语言中的实现</li><li>Mobx 通常利用 decorator 来使用</li><li>如何利用 mobx-react 来管理 React组件的状态</li></ul><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,71);function b(y,u,F,m,C,A){const a=e,n=l,p=t;return c(),k("div",null,[B,s(a,{readTime:"6",words:"2k"}),g,s(n),s(p)])}const f=h(o,[["render",b]]);export{x as __pageData,f as default};
