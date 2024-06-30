import{_ as r,a as t,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as i,c as o,I as e,j as a,a as c,a7 as m,o as d}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const b="/long-press/assets/70f791f8.Bv8nFlHe.png",u="/long-press/assets/c7d17c39.DRSCVM4x.png",x="/long-press/assets/888ead81.BsLtdEG9.png",T=JSON.parse('{"title":"react、vue移动端项目使用技术","description":"","frontmatter":{},"headers":[],"relativePath":"移动端项目/index.md","filePath":"移动端项目/index.md","lastUpdated":1710087145000}'),h={name:"移动端项目/index.md"},_=a("h1",{id:"react、vue移动端项目使用技术",tabindex:"-1"},[c("react、vue移动端项目使用技术 "),a("a",{class:"header-anchor",href:"#react、vue移动端项目使用技术","aria-label":'Permalink to "react、vue移动端项目使用技术"'},"​")],-1),f=m(`<p><a href="https://blog.csdn.net/weixin_44058725/article/details/135072701?spm=1001.2014.3001.5502" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_44058725/article/details/135072701?spm=1001.2014.3001.5502</a></p><h2 id="一、px2rem-插件" tabindex="-1">一、px2rem 插件 <a class="header-anchor" href="#一、px2rem-插件" aria-label="Permalink to &quot;一、px2rem 插件&quot;">​</a></h2><p>h5移动端首先需要做到适配各种手机屏幕，所以 使用的单位肯定是相对单位。 比如：rem 原理就是 rem是相对单位，给 html加个 基准值，然后 其后代元素都会 相对基准值，放大缩小。 px2rem 是一种用于在移动端开发中进行像素值单位转换的方法。它的原理是基于页面的根元素的字体大小，将以像素为单位的尺寸值（px）转换为以根元素字体大小的倍数（rem）为单位的尺寸值。 具体原理如下：</p><p>开发者首先设置页面的根元素的字体大小（通常使用CSS中的html选择器），例如将其设置为16px。</p><p>在CSS中，使用px作为单位定义元素的尺寸，例如width: 320px;。</p><p>使用插件或手动编写脚本，通过计算将像素值转换为以根元素字体大小倍数为单位的rem值。 转换的计算公式是：rem = px / 根元素字体大小。 例如，320px 在根元素字体大小为 16px 的情况下转换为 20rem。</p><p>在移动设备中，根元素的字体大小将根据设备的屏幕尺寸和分辨率进行调整。 因此，根元素的字体大小的变化也会直接影响到以rem为单位的尺寸值。</p><p>通过使用 px2rem 方法，可以实现在不同终端设备上的页面元素的自适应布局和缩放。 例如，如果根元素的字体大小设置为设备屏幕宽度的1/10，那么以rem为单位的尺寸值将根据屏幕的宽度进行动态调整，从而实现响应式布局。 需要注意的是，使用px2rem时只需要关注根元素的字体大小，其他元素的尺寸都以rem为单位计算。 这样做的好处是可以减少在不同设备和屏幕尺寸上调整元素尺寸的工作量。</p><p>不止px2rem其他基于它的都可以比如：postcss-plugin-px2rem等等。具体用法参照官网api。 一般来说 如果你的项目里用到了 移动端的ui库 ，是需要配置 一下 忽略 node_modules里的内容不被转换单位。 否则ui库可能会错乱。 以postcss-plugin-px2rem为例子：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>//px2rem的配置</span></span>
<span class="line"><span>const px2rem = require(&quot;postcss-plugin-px2rem&quot;);</span></span>
<span class="line"><span>const px2remOpts = {</span></span>
<span class="line"><span>	rootValue: 37.5, //这个值定义了1rem应该等于多少像素。在这里，1rem等于37.5</span></span>
<span class="line"><span>	exclude: /(node_module)/, //这是一个正则表达式，用于指定哪些文件应该被排除在转换之外。在这里，所有在&#39;node_module&#39;目录下的文件都将被排除。</span></span>
<span class="line"><span>  //propBlackList: [&#39;font-size&#39;], // 指定不希望被转换的属性 </span></span>
<span class="line"><span>	// mediaQuery: false, //这个选项表示是否应该在媒体查询中转换px单位。在这里，它被设置为false，意味着媒体查询中的px单位将不会被转换</span></span>
<span class="line"><span>	// minPixelValue: 3, //这个选项表示应该转换的最小px值。在这里，只有px值大于或等于3的才会被转换</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>需要注意的是 rootValue就是基准值，一般这个 的计算方式是 设计图宽度/10 。 比如：设计图是375那么 rootValue=375/10=37.5。 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem" target="_blank" rel="noreferrer">https://www.npmjs.com/package/postcss-plugin-px2rem</a></p><h2 id="lib-flexible" tabindex="-1">lib-flexible <a class="header-anchor" href="#lib-flexible" aria-label="Permalink to &quot;lib-flexible&quot;">​</a></h2><p>px2rem只是单位转换，但当页面大小变化时，还需要触发动态改变 基准值的 flexible.js 是一个用于移动端开发的 JavaScript 库，作用是通过动态设置页面根元素的字体大小，实现移动端页面的自适应布局。 它的原理是基于屏幕的宽度和设备像素比来计算根元素的字体大小，并基于此字体大小来设置页面中的其他元素的尺寸。 具体原理如下：</p><p>flexible.js 首先获取设备的屏幕宽度和像素比（DPR）信息。</p><p>根据设备像素比，计算出一个基准像素值（dpr），以适应高清屏。</p><p>根据设置的设计稿尺寸（一般为 750px），将屏幕宽度转换为 rem 单位的页面宽度。</p><p>动态计算并设置页面根元素的字体大小，使得根元素的字体大小与页面宽度成正比，从而实现自适应的效果。</p><p>其他元素的尺寸则以 rem 为单位进行设置，通过控制根元素字体大小的变化来实现页面元素的自适应布局。 flexible.js 通过将页面布局的单位从 px 转换为 rem，以及动态调整根元素字体大小的方式，使得页面能够在不同设备上根据屏幕大小实现布局的适配。 需要注意的是，flexible.js 库一般需要配合 CSS 预处理器或者 postcss 插件来进行 rem 单位的转换。 它通常会与样式库（如 lib-flex）一起使用，以实现移动端页面的完整自适应布局。</p><p>使用方式就是 <code>npm install lib-flexible</code>后 在 入口文件 引入<code>import ‘lib-flexible’;</code> 比如app.js。 例子react里： <img src="`+b+'" alt=""></p><h2 id="h5端项目避免部署时有缓存" tabindex="-1">h5端项目避免部署时有缓存 <a class="header-anchor" href="#h5端项目避免部署时有缓存" aria-label="Permalink to &quot;h5端项目避免部署时有缓存&quot;">​</a></h2><p>h5项目部署时，微信、嵌入app等等，可能会有缓存。看不到最新的页面，开发时可以手动清除缓存。但正式环境肯定不行。可以参考： <a href="https://blog.csdn.net/weixin_44058725/article/details/135071988?spm=1001.2014.3001.5502" target="_blank" rel="noreferrer">React、vue、h5端项目避免缓存</a> 比如webapck 就可以在这里加上：webpack 配置 <img src="'+u+'" alt=""> 类似于这样（伪代码）： <img src="'+x+'" alt=""></p><h2 id="页面缓存" tabindex="-1">页面缓存 <a class="header-anchor" href="#页面缓存" aria-label="Permalink to &quot;页面缓存&quot;">​</a></h2><p>因为 react、vue都是单页面应用，路由跳转时，就会销毁上一个页面的组件。 这里指的缓存是，跳转其他页面返回时，页面状态不丢失。设想一个 页面我滑倒了中间，然后跳转到 详情页然后 返回，之前的页面刷新了，回到顶部了肯定不行（搜索条件之类的）！</p><p>vue里 有keep-alive 。 react里只能借助 第三方插件了(可参考：react 实现页面状态缓存（keep-alive）)。</p><p>其实 如果你的页面要求 缓存状态 可以优先选择 vue。</p><p>react需要自己用第三方插件 实现，不过 react 18有个中的官方实现 也可以实现。 但是目前 还是实验性的，以后可能会开放.甚至 react-router也会适配 。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',27);function g(k,v,w,q,P,S){const s=r,p=t,n=l;return d(),o("div",null,[_,e(s,{readTime:"5",words:"1.6k"}),f,e(p),e(n)])}const $=i(h,[["render",g]]);export{T as __pageData,$ as default};
