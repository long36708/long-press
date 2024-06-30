import{_ as e,a as l,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as c,c as r,I as n,a7 as t,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css3/现代web布局/23.md","filePath":"css3/现代web布局/23.md","lastUpdated":1709569726000}'),o={name:"css3/现代web布局/23.md"},u=t(`<p>通过上节课的学习，我想你已经知道了，构建一个多语言的 Web 网站或应用，离不开对语言的书写模式、阅读模式、CSS 逻辑属性等特性，同时也知道了 CSS Flexbox 和 CSS Grid 布局都是基于文档书写模式设计，天然地能实现 LTR 和 RTL 的翻转设计。</p><p>构建一个多语言的 Web 布局，它所涉及的不仅是 LTR 和 RTL 的翻转设计，其中还会涉及很多其他的布局、排版、设计等相关知识。这节课，主要和大家一起探讨 Web 布局中 LTR 切换到 RTL 常见的错误以及一些设计上需要注意的细节，希望能帮助大家从设计阶段就构建好一个多语言的 Web 网站或应用。</p><h2 id="字间距-letter-spacing" tabindex="-1">字间距 letter-spacing <a class="header-anchor" href="#字间距-letter-spacing" aria-label="Permalink to &quot;字间距 letter-spacing&quot;">​</a></h2><p>在 CSS 中，我们可以通过 <code>letter-spacing</code> 属性来给英文字母间增加间距（它也被称为<strong>活版印刷跟踪</strong> ）。比如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e1348ba9b8543369fa4489307b214b1~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>上图中的第二行使用了 <code>letter-spacing</code> 给字母间增加了间距，它看起来是正常的。但是，如果将相同的 <code>letter-spacing</code> 样式添加到阿拉伯语系的内容中，效果看起来就会非常的奇怪。比如下面这个示例：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>[dir=&quot;ltr&quot;] .media {</span></span>
<span class="line"><span>    letter-spacing: 4px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4fd2e6bab00a4ef8ac6bf24c35bf867c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/wvXOQjB" target="_blank" rel="noreferrer">https://codepen.io/airen/full/wvXOQjB</a></p></blockquote><p>正如上图所示，设置 <code>letter-spacing</code> 的阿拉伯语中每个单词的字母看起来彼此不相连。这是不正确的。阿拉伯字母看起来应该是连在一起的（像上图中 <code>letter-spacing: normal</code> 的那样），而英文（拉丁语体系）中使用 <code>letter-spacing</code> 增加字母之间间距，对于阅读体验来说是更佳的。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>[dir=&quot;ltr&quot;] {</span></span>
<span class="line"><span>    letter-spacing: 1px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>[dir=&quot;rtl&quot;] {</span></span>
<span class="line"><span>    letter-spacing: 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ef8d81c74564efb8603be3675e9d7b9~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/oNyVQJQ" target="_blank" rel="noreferrer">https://codepen.io/airen/full/oNyVQJQ</a></p></blockquote><p>因此，<strong>在阿拉伯语中（RTL）中应该确保</strong> <strong><code>letter-spacing</code></strong> <strong>的值为</strong> <strong><code>0</code></strong>。</p><h2 id="文本的透明度" tabindex="-1">文本的透明度 <a class="header-anchor" href="#文本的透明度" aria-label="Permalink to &quot;文本的透明度&quot;">​</a></h2><p>在 Web 开发中，给文本增加一定的透明度是很常见的一种行为。这在拉丁语体系（比如英语）和汉语体系（比如中文）都是可行的。然而，当内容是阿拉伯语体系（比如阿拉伯文）时，渲染出来的文本会给人一种怪怪的感觉：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5348c9b9ad18461cb4c66b7912d64ea2~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/eYKXbJM" target="_blank" rel="noreferrer">https://codepen.io/airen/full/eYKXbJM</a></p></blockquote><p>你会发现字母之间有一些不同颜色的区域。看上去是有层叠区域造成的颜色不一致：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/067ee94236174271a8a43b1a9ce3d048~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>在这个例子中，字母间距没有调整，所以这个问题与字母间距无关。解决方案很简单，<strong>设置不带透明度的颜色值，也不给文本设置透明度</strong> 。</p><h2 id="不同语言之间字-词-大小差异" tabindex="-1">不同语言之间字（词）大小差异 <a class="header-anchor" href="#不同语言之间字-词-大小差异" aria-label="Permalink to &quot;不同语言之间字（词）大小差异&quot;">​</a></h2><p>不同语言中的字大小是有一定差异的。比如说英文翻译成阿拉伯文后，有些单词就会变大或变小，因此元素的大小也会发生变化（内容容器）。比如：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee52974e06a842f492e11296d3ae2d49~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>正如上图所示，当英文网站翻译成阿拉伯语时，由于翻译后一些单词变大或变小，元素的大小也会发生变化。比如说：</p><ul><li><code>div.menu_login_container</code> 容器（登录表单）在英文版本时，它的宽度大约是 <code>393px</code> ，阿拉伯语版本时，它的宽度因词变宽，它的宽度也变大了，大约是 <code>441px</code>；</li><li><code>input</code> （登录按钮）在英文版本时，它的宽度大约是 <code>36.47px</code> ，在阿拉伯语版本中大约是 <code>84.66px</code>。</li></ul><p>事实上，这种差异不只存在于拉丁语体系与阿拉伯语体系之间，它们也同样存在于汉语体系中。有些单词在不同语系中宽度有些相同，有些更大，也有一些更小：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9dcccf8b6ed74256b2d6a35c6d7a80db~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>在这种因语言不同，内容长度（大小）不同，要是在容器上显式设置宽度，就会造成内容被溢出，或断行；如果容器被设置了 <code>overflow: hidden</code>，还会造成内容被裁剪等现象。来看一个真实案例，比如 <a href="https://zh-cn.facebook.com/" target="_blank" rel="noreferrer">Facebook 的登录页中的“新建帐户”按钮</a>：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/afa6563b45ee4e3d885b7e69fe562595~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>不管是给按钮设置宽度为 <code>104px</code> 或 <code>219px</code> 都不是最佳的。</p><ul><li>如果设置最小值 <code>104px</code> ，其他语言版本就会内容溢出；</li><li>如果设置最大值 <code>219px</code> ，其他语言版本就有可能会有很大的空白空间。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49d2cdbfd9744314bdcda84de2cf784d~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>针对这样的场景，更好的做法是，使用 CSS 的内在尺寸来定义元素容器的大小，比如可以将按钮设置的宽度为 <code>auto</code> 、<code>min-content</code> 或 <code>max-content</code> ，这样使不同版本语言下都有一个较好的宽度：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92846bcc717d4bb887a4ae4c5c0ddedd~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/ExRMrMN" target="_blank" rel="noreferrer">https://codepen.io/airen/full/ExRMrMN</a></p></blockquote><p>面对多语言的 Web 布局时，给元素设置尺寸大小，使用 <code>auto</code> 、<code>min-content</code> 和 <code>max-content</code> 要比具体尺寸更为合适。但有的场景也会让你的 UI 看上去不太完美。就拿下图为例：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae1fcfec712d41138462619a752194d8~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>英文版本“Done”按钮，在英文版本下，它视觉上，甚至可点击区域都是符合 Web 设计的，但它一到阿拉伯语言版本中，“Done”被翻译成“إنجاز”，不管是 UI 视觉还是按钮可点击区域都变小了，有可能它不符合 Web 设计需求，比如按钮可点击区域要求是 <code>44px x 44px</code> 。因此，除了给按钮设置宽度为 <code>auto</code> 或 <code>min-content</code> 或 <code>max-content</code> 时，最好也同时给按钮设置一个 <code>min-width</code> 值，比如上图中的 “Done”按钮：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.button {</span></span>
<span class="line"><span>    width: auto; /* 或 min-content */</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    /* 或者 */</span></span>
<span class="line"><span>    inline-size: auto; /* 或 min-content */</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    /* 最好加上 min-width 或 min-inline-size */</span></span>
<span class="line"><span>    min-width: 100px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad475b752c2447da9016175687f944d5~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/gOKEEXJ" target="_blank" rel="noreferrer">https://codepen.io/airen/full/gOKEEXJ</a></p></blockquote><h2 id="文本截取" tabindex="-1">文本截取 <a class="header-anchor" href="#文本截取" aria-label="Permalink to &quot;文本截取&quot;">​</a></h2><p>在 CSS 中需要对文本进行截取，并且在被截取的末尾添加相应的省略指示器，一般会使用 <code>text-overflow: ellipsis</code> 来实现：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.text-ellipsis {</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    white-space: nowrap;</span></span>
<span class="line"><span>    text-overflow:ellipsis;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>或者：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.line-clamp {</span></span>
<span class="line"><span>    display: -webkit-box;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    -webkit-line-clamp: 2;</span></span>
<span class="line"><span>    -webkit-box-orient: vertical;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf2951b325664dc692bfa5607a9b2d9f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/wvXObbN" target="_blank" rel="noreferrer">https://codepen.io/airen/full/wvXObbN</a></p></blockquote><p>上面的效果应该是符合我们预期的。如果不慎在拉丁语体系和汉语体系中设置了 <code>dir=&quot;rtl&quot;</code> 时，效果和我们阅读习惯就不同了，甚至是一种错误的表现行为：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ddd739726394acca4b902c3e1411c79~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>正如上图所示，英文和中文文本的截断不正确。它应该在元素的末尾，而不是开头。要解决这个问题，<code>dir</code> 需要根据语言的正确阅读方式来设置正确的值。如果你不清楚语言的阅读方式或者无法预判用户会将应用切换到何种语言的话，建议将 <code>dir</code> 的值设置为 <code>auto</code>。这样一来，浏览器会自动根据语言的阅读方式来处理文本截取的效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc82b275ab2e4e51852fe39891357551~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>当然，这种情况一般会发生在混合排版中，比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 阿拉伯语为主，里面混合汉语或拉丁语 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;p dir=&quot;auto&quot;&gt;Web إلى اليمين واليسار، CSS العائمة، Flexbox و GRID، تتأثر بنماذج الكتابة والقراءة.Web إلى اليمين واليسار، CSS العائمة، Flexbox و GRID، تتأثر بنماذج الكتابة والقراءة.&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;p dir=&quot;auto&quot;&gt;Web and left to right, CSS floating layout, Flexbox layout and Grid layout, influenced by book template and reading mode.&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>&lt;!-- 汉语或拉丁语中为主，里面混合阿拉伯语 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;ar&quot; dir=&quot;ltr&quot;&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;p dir=&quot;auto&quot;&gt;Web إلى اليمين واليسار، CSS العائمة، Flexbox و GRID، تتأثر بنماذج الكتابة والقراءة.Web إلى اليمين واليسار، CSS العائمة، Flexbox و GRID، تتأثر بنماذج الكتابة والقراءة.&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;p dir=&quot;auto&quot;&gt;Web and left to right, CSS floating layout, Flexbox layout and Grid layout, influenced by book template and reading mode.&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="给-rtl-选择一个糟糕的字体" tabindex="-1">给 RTL 选择一个糟糕的字体 <a class="header-anchor" href="#给-rtl-选择一个糟糕的字体" aria-label="Permalink to &quot;给 RTL 选择一个糟糕的字体&quot;">​</a></h2><p>对于大部分 Web 开发者，在开发多语言 Web 网站或应用时，很少会根据语言版本来选择不同的字体，为了避免麻烦，习惯性地选择系统默认字体。但事实上，这并不是一种较好的选择，尤其是 RTL 版本的设计，还是需要精心选择对应的字体，这样才能确保它具有良好的可读性。就拿 “Twitter” 这个词为例：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3f1b10b9467464389acdf47bbfeb91e~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>英文版本和阿拉伯语版本选择同一字体，但对于使用阿拉伯语的用户而言，“تغريد”这个词很难，原因如下:</p><ul><li>字体不好；</li><li>加粗影响了可读性；</li><li>这个单词的点很小，非常接近字母。</li></ul><p>针对这种情形，应该为阿拉伯语（LTR 版本）选择一个更为适合的字体。比如：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09cd832e91754c4796acceee1ccbf2d2~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><h2 id="不宜设置相同的-line-height" tabindex="-1">不宜设置相同的 line-height <a class="header-anchor" href="#不宜设置相同的-line-height" aria-label="Permalink to &quot;不宜设置相同的 line-height&quot;">​</a></h2><p>如果需要更好的阅读体验，可能会为不同的语言（LTR 或 RTL）设置不同的布局。但是 LTR 和 RTL 排版设置相同的 <code>line-height</code> 的话，阅读体验就有可能达不到你预期的效果。比如给英文和阿拉伯文设置相同的 <code>line-height</code> ，在阿拉伯文中看上去行与行的间距要更小：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e9f340b2b2a44d0afa46101e7681bf3~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>如果想改变这样的现象，需要考虑为阿拉伯语的内容提供一个更适合的 <code>line-height</code>。比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>/* LTR: Left To Right */</span></span>
<span class="line"><span>[dir=&quot;ltr&quot;] {</span></span>
<span class="line"><span>    line-height: 1.5;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>/* RTL: Right To Left */</span></span>
<span class="line"><span>[dir=&quot;rtl&quot;] {</span></span>
<span class="line"><span>    line-height: 1.8;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb420196539544948a1e10e37a298378~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/NWzJZzG" target="_blank" rel="noreferrer">https://codepen.io/airen/full/NWzJZzG</a></p></blockquote><p>另外建议 <code>line-height</code> 不要使用固定单位的值，这样在一些语言的切换状态下很容易造成文本展示不全（类似被截）。比如下图的效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e2e33daf82d4302872fd7a3fed15bab~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><h2 id="不采用默认的文本下划线" tabindex="-1">不采用默认的文本下划线 <a class="header-anchor" href="#不采用默认的文本下划线" aria-label="Permalink to &quot;不采用默认的文本下划线&quot;">​</a></h2><p>有些文本会带有默认下划线的效果，比如 <code>&lt;a&gt;</code> 链接。在阿拉伯语言的文本中，默认的文本下划线会让阅读变得很困难。这种现象的产生，与阿拉伯语单词和字母的书写方式有关。如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2c3012ac8474ae8b588f436a714c3bc~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>你会发现，文本下划线会和一些文本重叠，比如单词中的一些点：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0b2bac15a6640f4a33f26190345e09f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>另外，采用默认的文本下划线，不同的浏览器渲染出的效果也会有所差异：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c719b0d80c34885b9db07accf2e0ca2~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>很明显，Chrome 和 Firefox 浏览器不会出现我们上面所说的现象（在这方面可能做了一定的优化），但是在 Safari 浏览器中，就出现了上面所描述的现象。另外可能在一些 UI 效果上趋向于风格的统一。所以在给文本加下划线的时候，更建议采用自定义的下划线风格。</p><p>在 CSS 中有很多种不同的方案来实现自定义下划线的效果，比如 <code>border-bottom</code>、<code>box-shadow</code>、<code>background-image</code>等，还可以给文本添加 SVG 的下划线。除此之外，<a href="https://drafts.csswg.org/css-text-decor-4/" target="_blank" rel="noreferrer">CSS Text Decoration Module Level 4</a> 提供的一系列 <code>text-decoration-*</code> 属性也可以实现一些个性化的下划线效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6dc50e1b46de48d6b6c26ed1f80c5207~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/dyKrxYL" target="_blank" rel="noreferrer">https://codepen.io/airen/full/dyKrxYL</a></p></blockquote><p>简单地说，可以使用 <code>text-decoration-*</code> 来设置下划线样式：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>a:hover { </span></span>
<span class="line"><span>    text-decoration: underline;</span></span>
<span class="line"><span>    text-decoration-color: rgba(21, 132, 196, 0.2); </span></span>
<span class="line"><span>    text-decoration-skip-ink: auto;</span></span>
<span class="line"><span>    text-decoration-style: wavy; </span></span>
<span class="line"><span>    text-underline-offset: 4px; </span></span>
<span class="line"><span>    text-decoration-thickness: 2px; </span></span>
<span class="line"><span>    text-decoration: underline;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2c6b48a214741d48c9af60224abd9ba~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/Yzvgomb" target="_blank" rel="noreferrer">https://codepen.io/airen/full/Yzvgomb</a></p></blockquote><h2 id="断行需要独立处理" tabindex="-1">断行需要独立处理 <a class="header-anchor" href="#断行需要独立处理" aria-label="Permalink to &quot;断行需要独立处理&quot;">​</a></h2><p>如果使用断行处理的相关样式，比如 <code>word-break</code>，那么在阿拉伯语的应用中需要进行单独的测试，因为它可能会破坏阿拉伯语单词。如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97d9b4cfa41741dcba27a0603e04899b~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>上图中圈出的部分是由于断句带来的影响。<strong>在阿拉伯语中，没有断字这回事</strong> 。一个单词的字母是相互联系的，所以不可能打破一个单词。</p><h2 id="尽量避免给文本加粗和使用斜体文本" tabindex="-1">尽量避免给文本加粗和使用斜体文本 <a class="header-anchor" href="#尽量避免给文本加粗和使用斜体文本" aria-label="Permalink to &quot;尽量避免给文本加粗和使用斜体文本&quot;">​</a></h2><p>在大多数 RTL 语言（比如阿拉伯语）的应用中，应该尽量避免使用粗体（<code>font-weight</code>）和斜体（<code>font-style: italic</code>）。因为大多数 RTL 语言中，粗体文本会让应用的可读性变得更为困难，而斜体几乎是不被使用。同样的，在 RTL 语言中，几乎会忽略大写字母。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12f3a52c64b64cf89206e921bef29f5f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><h2 id="双向语言的最佳用户体验" tabindex="-1">双向语言的最佳用户体验 <a class="header-anchor" href="#双向语言的最佳用户体验" aria-label="Permalink to &quot;双向语言的最佳用户体验&quot;">​</a></h2><p>这里所谓的双向语言指的是 LTR 和 RTL 的输入顺序（语言）和文本显示布局的能力。前面我们花了一些时间和大家聊了聊双向语言在 Web 网站或应用中的差异以及开发者切入到 RTL 中会碰到的一些问题。</p><p>事实上除了开发者，对于设计师以及用户体验，双向语言都会有很多细节需要我们注意，或者说有很多问题需要我们一起面对。如果仅从 UI 布局上来看，<strong>双向语言（LTR 和 RTL）的 UI 布局是一种镜向的布局效果</strong>。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc66004cf8dc44bc8f60b16558d4a5a4~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>表面看上去是一种反向的切换，但事实上，这里面有很多细节是需要我们注意或者单独处理的。接下来，我们来看看需要注意的一些细节（主要围绕着 UX 来展开）。</p><h3 id="图标" tabindex="-1">图标 <a class="header-anchor" href="#图标" aria-label="Permalink to &quot;图标&quot;">​</a></h3><p>在现代 Web 中开发中，图标的应用非常广泛，正所谓“一图胜过千言万言”，对于图标（Icon 图标）的使用也是如此，很多时候图标能很明确地告诉用户所代表的含义，比起文本的描述要更具效果。但在 RTL 开发中图标的使用要比 LTR 复杂得多，也麻烦得多。</p><blockquote><p>在 RTL 语言中有些是具有较强的宗教信仰，民俗民风也较强，因此图标的使用也需要特别注意，因为一不小心就可能会冒犯到你的用户。</p></blockquote><p>这是很复杂的事情，我们先抛开这个体系，只聊聊技术上实现的差异。</p><p>Web 中的图标有些是没有方向性的，有些是带有方向性。比如下图所示的图标，图标中心线左右两侧是对称的，可以说是没有任何方向性：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8612f93a821143dcaf265b72e70985a1~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>像上述这种对称性的图标，用在双向语言中，你不需要对这些图标做任何的处理（比如翻转）。</p><p>在双向语言系统中有些图标是具有方向性的。也就是说在 LTR 和 RTL 中要改变它们的方向，而且这一点对于用户来说是非常重要的，可以更清楚地理解图标的含义。比如：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dcc866547c54645bc7cfb25370d2b10~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>对于需要镜像的图标，仅仅使用 <code>dir</code> (或 <code>direction</code> )无法达到所要的效果：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- LTR: Left To Right --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;icons&quot; dir=&quot;ltr&quot;&gt;</span></span>
<span class="line"><span>    &lt;svg&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- RTL: Right To Left --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;icons&quot; dir=&quot;rtl&quot;&gt;</span></span>
<span class="line"><span>    &lt;svg&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>[dir=&quot;rtl&quot;] {</span></span>
<span class="line"><span>    direction: rtl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4129022de1f448dbbfc0017c456e97da~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/mdKgMEb" target="_blank" rel="noreferrer">https://codepen.io/airen/full/mdKgMEb</a></p></blockquote><p>你可能已经发现了，<code>dir</code> 和 <code>direction</code> 只是对图片的排列顺序做了调整， RTL 版本中的图标没有水平翻转。要让 RTL 版本下的图片真的符合需求，需要对它们做一些额外的处理。</p><p>在 CSS 中，可以使用 <code>transform</code> 的 <code>scaleX(-1)</code> 让 RTL 版本下的图标做水平翻转：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>[dir=&quot;rtl&quot;] svg {</span></span>
<span class="line"><span>    transform: scaleX(-1);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bc3fd60d3d24ace8b8ccc288fede697~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/ZERZJLr" target="_blank" rel="noreferrer">https://codepen.io/airen/full/ZERZJLr</a></p></blockquote><p>也就是说，我们在 LTR 和 RTL 版本中使用图标时，应该尽可能像下图这样来使用：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da9331f9cc8f45a996a8c08f3496e133~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>然而，总是有例外的。根据 <a href="https://m2.material.io/design/usability/bidirectionality.html" target="_blank" rel="noreferrer">Material Design 指南</a>，如果一个图标代表一个可以用右手拿着的对象，那么它不需要翻转。例如，搜索图标的手柄通常位于右下角，因为大多数用户都是右撇子。在使用 RTL 语言的国家，大多数用户也是右撇子，所以这样的图标不应该被镜像。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a00aca7c424140a5b181da162f3f346b~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>还有一些图标是通用的，也不需要翻转它们。例如，播放器上的一些图标，它代表的是磁带播放的方向，而不是时间方向，所以不必要对它们做翻转。下图是 Spotify 应用程序的英语和阿拉伯语版本:</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9754599e36a4868a6f3e7221e7880b5~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>所以说，在 LTR 和 RTL 下使用图标时，需要根据实际环境做出最合适的选择。</p><h3 id="带图标的按钮和表单控件" tabindex="-1">带图标的按钮和表单控件 <a class="header-anchor" href="#带图标的按钮和表单控件" aria-label="Permalink to &quot;带图标的按钮和表单控件&quot;">​</a></h3><p>通常有些按钮会带上相应的 Icon 图标。在这种情况下，在 RTL 布局中，图标的位置也需要进行翻转：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3aa9bef9a85742b3b1d2601d9b0b014e~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>对于表单控件也是如此，特别是对于输入型的 <code>input</code> 表单控件，还应该保持输入的方向性：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38689fa16b6c4f91977ee6bf4de8e93f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>在 RTL 中，有些表单输入应该保持左对齐，例如电子邮件和手机号码。值得注意的是，如果占位符内容是阿拉伯语或其他 RTL 语言，那么占位符应该向右对齐。一旦输入框获得焦点，用户开始输入，对齐方式将翻转到左侧。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35e8ce0ca6b144a1bc3b61f6567bfc0c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><h3 id="导航菜单和面包屑" tabindex="-1">导航菜单和面包屑 <a class="header-anchor" href="#导航菜单和面包屑" aria-label="Permalink to &quot;导航菜单和面包屑&quot;">​</a></h3><p>对于导航菜单以及页头，还有面包屑等 UI 的设计在双向语言中是 UI 的镜像。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1e5fdfcde6248549fe77222ee05b111~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><h3 id="数字顺序" tabindex="-1">数字顺序 <a class="header-anchor" href="#数字顺序" aria-label="Permalink to &quot;数字顺序&quot;">​</a></h3><p>在双向语言中，对于数字的顺序（比如电话号码、门牌号等），不需要做镜像的处理。但要是带有图标的话，对应的图标还是需要做镜像处理的。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6df6c713914d47ffa94611c0733a6147~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><h3 id="组件的翻转" tabindex="-1">组件的翻转 <a class="header-anchor" href="#组件的翻转" aria-label="Permalink to &quot;组件的翻转&quot;">​</a></h3><p>在处理一些组件时，我需要一种快速翻转它们的方法。在 Sketch 应用中，我将复制一个组件，然后用 “flip” 命令翻转它。同样的功能也可以在 Adobe XD 和 Figma 中使用。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a49dce378334638bab49064e31965a9~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>而我们在 Web 中构建 Web 组件时，大部分通过 HTML 的 <code>dir</code> 或 CSS 的 <code>direction</code> 就可以实现水平翻转的效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7505e9a0031e42f6b7c0879db2bc396b~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/LYrvzPE" target="_blank" rel="noreferrer">https://codepen.io/airen/full/LYrvzPE</a></p></blockquote><p>构建翻转的 Web 组件，我们这里采用的基本上是 CSS Flexbox 和 CSS Grid 布局技术，只不过在设置与方向有关的属性，我们尽可能地使用了 CSS 的逻辑属性，比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>/* RTL 需要水平翻转的图标 */</span></span>
<span class="line"><span>[dir=&quot;rtl&quot;] svg {</span></span>
<span class="line"><span>    transform: scaleX(-1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>figure {</span></span>
<span class="line"><span>    max-inline-size: 160px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 自定义下划线，更符合 RTL 排版 */</span></span>
<span class="line"><span>header .active,</span></span>
<span class="line"><span>header a:hover {</span></span>
<span class="line"><span>    text-decoration: underline;</span></span>
<span class="line"><span>    text-decoration-color: #03a9f4;</span></span>
<span class="line"><span>    text-decoration-skip-ink: auto;</span></span>
<span class="line"><span>    text-decoration-style: wavy;</span></span>
<span class="line"><span>    text-underline-offset: 4px;</span></span>
<span class="line"><span>    text-decoration-thickness: 2px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.tabs li.active::after {</span></span>
<span class="line"><span>    content: &quot;&quot;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    inset-inline-start: 0;</span></span>
<span class="line"><span>    inset-inline-end: 0;</span></span>
<span class="line"><span>    inset-block-end: 0;</span></span>
<span class="line"><span>    block-size: 5px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.toasts svg:last-child {</span></span>
<span class="line"><span>    margin-inline-start: auto;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="实际案例" tabindex="-1">实际案例 <a class="header-anchor" href="#实际案例" aria-label="Permalink to &quot;实际案例&quot;">​</a></h2><p>先来看一个简单示例，看看 LTR 和 RTL 两个版本的 Web 布局要如何处理。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/615ee46892184646ad7d8290413fbdd0~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/ZERZXwE" target="_blank" rel="noreferrer">https://codepen.io/airen/full/ZERZXwE</a></p></blockquote><p>构建 LTR 和 RTL 布局，它们在 HTML 结构上最大的差异在最外边的容器，比如示例中的 <code>.page</code> （往往单独的页面，可以设置在 <code>&lt;html&gt;</code> 和 <code>&lt;body&gt;</code>）显式设置了 <code>dir</code> 的值：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- LTR --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;page&quot; dir=&quot;ltr&quot;&gt;</span></span>
<span class="line"><span>    &lt;header&gt;&lt;/header&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;sub__title&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;main&gt;&lt;/main&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- RTL --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;page&quot; dir=&quot;rtl&quot;&gt;</span></span>
<span class="line"><span>    &lt;header&gt;&lt;/header&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;sub__title&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;main&gt;&lt;/main&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>这样做的好处就是，我们可以提前设置 LTR 和 RTL 语言的的内联流（文档流）和块流的方向。尤其是我们使用 CSS Flexbox 和 CSS Grid 布局时，可以很好地匹配 LTR 和 RTL，那是因为这两种布局技术都是基于书写模式设计的布局。</p><p>先来看页头 <code>header</code> 的布局，它主要包含了 <code>.logo</code> 、<code>.nav</code> 和 <code>.user--profile</code> 三个部分：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6bf994ae90e404f96115e5ca883e461~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>我们在 <code>header</code> 中使用 CSS Flexbox 布局，它可以自动适配 LTR 和 RTL 的布局：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>header {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    gap: 1rem;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>注意，在主轴（Main Axis）并没有使用 <code>justify-content</code> 来控制这三个部分的对齐，示例中在 <code>.user--profile</code> 使用了逻辑属性 <code>margin-inline-start</code> 来控制它：</p><ul><li>LTR 中居右；</li><li>RTL 中居左。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.user--profile {</span></span>
<span class="line"><span>    margin-inline-start: auto;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第二部分 <code>.sub__title</code> 和 <code>header</code> 采用的是相同的布局方式：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86c37e6705624b2584245aa0c8953753~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.sub__title {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.sub__title form {</span></span>
<span class="line"><span>    margin-inline-start: auto;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>对于主内容区域 <code>main</code> 中的卡片，我在这里使用了 CSS Grid 中的 RAM 布局技术，它也能很好匹配 LTR 和 RTL ：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd448b72e89d4d4f8369a07a08197bf1~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>main {</span></span>
<span class="line"><span>    display: grid;</span></span>
<span class="line"><span>    grid-template-columns: repeat(auto-fit, minmax(min(100% - 2rem, 460px), 1fr));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>对于单张卡片，在这个示例中没有使用 CSS Grid 中的 <code>subgrid</code> 来构建布局，选择的还是 CSS Flexbox 来布局：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a1a9cefa1284576b43a89b73e6f110d~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.media {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    gap: 1rem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.media__content {</span></span>
<span class="line"><span>    flex: 1 1 0%;</span></span>
<span class="line"><span>    min-width: 0;</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    flex-direction: column;</span></span>
<span class="line"><span>    gap: 5px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>同样的，在卡片的按钮上使用逻辑属性，让按钮在靠近底部放着：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.media button {</span></span>
<span class="line"><span>    margin-inline-start: auto;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在我们这个示例中，很好地利用了 CSS Flexbox 和 CSS Grid 中的 <code>gap</code> 属性，来设置元素之间的间距：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ad5441032c041f8b911688e2fdf0d1c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>如果不使用 <code>gap</code> 属性，很有可能需要使用到 <code>margin</code> 对应的逻辑属性，比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.logo {</span></span>
<span class="line"><span>    margin-inline-end: 1rem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.user--profile span {</span></span>
<span class="line"><span>    margin-inline-start: 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.sub__title dd span {</span></span>
<span class="line"><span>    maing-inline: 10px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其实到这，LTR 和 RTL 布局基本上已经完成。不过，我还对示例中的图标做了些处理，比如：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b519df2a5d374a2888ef71d651e7bd2c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>[dir=&quot;rtl&quot;] .sub__title a svg,</span></span>
<span class="line"><span>[dir=&quot;rtl&quot;] .media button svg {</span></span>
<span class="line"><span>    transform: scaleX(-1);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这是一个关于 LTR 和 RTL 最基本的示例。你可能会说这是一个不真实的示例，那接下来，就以 <a href="https://zh-cn.facebook.com/" target="_blank" rel="noreferrer">Facebook 的登录页</a>为例：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4084fa227c0241eda9e1a50b096ba069~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>构建一个这样的登录页，你可能需要的 HTML 结构：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- LTR: 中文简体 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;zh-Hans&quot; dir=&quot;ltr&quot;&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;page__sloga&quot;&gt;</span></span>
<span class="line"><span>            &lt;h1 class=&quot;logo&quot;&gt;</span></span>
<span class="line"><span>                &lt;a href=&quot;https://zh-cn.facebook.com/&quot;&gt;</span></span>
<span class="line"><span>                    &lt;svg class=&quot;icon__logo&quot;&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>                &lt;/a&gt;</span></span>
<span class="line"><span>            &lt;/h1&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;sloga&quot;&gt;联系你我，分享生活，尽在 Facebook&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;form--wrapper&quot;&gt;</span></span>
<span class="line"><span>            &lt;form class=&quot;login&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;text&quot; placeholder=&quot;邮箱或手机号&quot; name=&quot;user&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;password&quot; placeholder=&quot;密码&quot; name=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;button class=&quot;button button--primary&quot;&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a href=&quot;&quot;&gt;忘记密码？&lt;/a&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;button class=&quot;button button--secondary&quot;&gt;新建帐户&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/form&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;help--message&quot;&gt;</span></span>
<span class="line"><span>                为名人、品牌或公司&lt;a href=&quot;&quot;&gt;创建公共主页&lt;/a&gt;。</span></span>
<span class="line"><span>            &lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>对于日文或英文版本来说，它们的 HTML 结构和中文版本是一样的，对应的内容换成了日文或英文。唯 一的差别是 <code>&lt;html&gt;</code> 元素的 <code>lang</code> 值替换成 <code>ja</code> （日文）或 <code>en</code> （英文），而 <code>dir</code> 依旧是 <code>ltr</code> ，因为它们的书写模式和阅读模式也是 LTR ：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- LTR: 日文 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;jp&quot; dir=&quot;ltr&quot;&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;page__sloga&quot;&gt;</span></span>
<span class="line"><span>            &lt;h1 class=&quot;logo&quot;&gt;</span></span>
<span class="line"><span>                &lt;a href=&quot;https://zh-cn.facebook.com/&quot;&gt;</span></span>
<span class="line"><span>                    &lt;svg class=&quot;icon__logo&quot;&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>                &lt;/a&gt;</span></span>
<span class="line"><span>            &lt;/h1&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;sloga&quot;&gt;Facebookを使うと、友達や同僚、同級生、仲間たちとつながりを深められます。ケータイ、スマートフォンからもアクセスできます。&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;form--wrapper&quot;&gt;</span></span>
<span class="line"><span>            &lt;form class=&quot;login&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;text&quot; placeholder=&quot;メールアドレスまたは電話番号&quot; name=&quot;user&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;password&quot; placeholder=&quot;パスワード&quot; name=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;button class=&quot;button button--primary&quot;&gt;ログイン&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a href=&quot;&quot;&gt;パスワードを忘れた場合&lt;/a&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;button class=&quot;button button--secondary&quot;&gt;新しいアカウントを作成&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/form&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;help--message&quot;&gt;</span></span>
<span class="line"><span>                有名人、ブランドまたはビジネスのために&lt;a href=&quot;&quot;&gt;Facebookページを作成&lt;/a&gt;できます。</span></span>
<span class="line"><span>            &lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>对于阿拉伯语体系，比如阿拉伯语，它的 HTML 结构除了内容变了之外，<code>&lt;html&gt;</code> 元素的 <code>lang</code> 要求被设置为 <code>ar</code> ，还需要将 <code>dir</code> 的值设置为 <code>rtl</code> ，因为阿拉伯语的书写模式和阅读模式是 LRT ，刚好和拉丁语体系的英文、汉语体系的中文或日文相反，因为它们都是 LTR：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- RTL: 阿拉伯语 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;page__sloga&quot;&gt;</span></span>
<span class="line"><span>            &lt;h1 class=&quot;logo&quot;&gt;</span></span>
<span class="line"><span>                &lt;a href=&quot;https://zh-cn.facebook.com/&quot;&gt;</span></span>
<span class="line"><span>                    &lt;svg class=&quot;icon__logo&quot;&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>                &lt;/a&gt;</span></span>
<span class="line"><span>            &lt;/h1&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;sloga&quot;&gt;يمنحك فيسبوك إمكانية التواصل مع الأشخاص ومشاركة ما تريد معهم.&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;form--wrapper&quot;&gt;</span></span>
<span class="line"><span>            &lt;form class=&quot;login&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;text&quot; placeholder=&quot;البريد الإلكتروني أو رقم الهاتف&quot; name=&quot;user&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;password&quot; placeholder=&quot;كلمة السر&quot; name=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;button class=&quot;button button--primary&quot;&gt;تسجيل الدخول&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a href=&quot;&quot;&gt;هل نسيت كلمة السر؟&lt;/a&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;control&quot;&gt;</span></span>
<span class="line"><span>                    &lt;button class=&quot;button button--secondary&quot;&gt;إنشاء حساب جديد&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/form&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;help--message&quot;&gt;</span></span>
<span class="line"><span>                &amp;rlm;&lt;a href=&quot;&quot;&gt;إنشاء صفحة&lt;/a&gt;&amp;rlm;لشخصية مشهورة أو علامة تجارية أو نشاط تجاري.</span></span>
<span class="line"><span>            &lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>基本样式，这里不做阐述。先看页面级的布局，在这里使用 CSS Grid 的 Full-Bleed 技术来构建整体的页面级布局：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>body {</span></span>
<span class="line"><span>  display: grid;</span></span>
<span class="line"><span>  place-content: start center;</span></span>
<span class="line"><span>  grid-template-columns: </span></span>
<span class="line"><span>      minmax(1rem, 1fr) </span></span>
<span class="line"><span>      minmax(min(100% - 2rem, 960px), 1fr) </span></span>
<span class="line"><span>      minmax(1rem, 1fr);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body &gt; * {</span></span>
<span class="line"><span>  grid-column: 2;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20dfbdef477b43bbb73a1479766d43a2~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>对于页面的口号（Sloga）和登录表单两个部分自动换行，这里在它的容器 <code>section</code> 中使用 CSS Grid 的 RAM 布局技术，并限制了每个部分的最小宽度（<code>min-inline-size</code>）：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>section {</span></span>
<span class="line"><span>    display: grid;</span></span>
<span class="line"><span>    grid-template-columns: repeat(auto-fit, minmax(min(100% - 2rem, 400px), 1fr));</span></span>
<span class="line"><span>    gap: 1rem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>section &gt; * {</span></span>
<span class="line"><span>    max-inline-size: 400px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media only screen and (min-width: 514px) {</span></span>
<span class="line"><span>    section {</span></span>
<span class="line"><span>        justify-items: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .login {</span></span>
<span class="line"><span>        min-inline-size: 400px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media only screen and (min-width: 760px) {</span></span>
<span class="line"><span>    .form--wrapper {</span></span>
<span class="line"><span>        justify-self: end;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .login {</span></span>
<span class="line"><span>        min-inline-size: 400px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>对于组件级，都采用了 CSS Flexbox 来构建的布局：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.login {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    flex-direction: column;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    gap: 1rem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login input {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    inline-size: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login button {</span></span>
<span class="line"><span>    display: inline-flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.page__sloga {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    flex-direction: column;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media only screen and (min-width: 760px) {</span></span>
<span class="line"><span>    .page__sloga {</span></span>
<span class="line"><span>        align-items: flex-start;</span></span>
<span class="line"><span>        text-align: start;</span></span>
<span class="line"><span>        align-self: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>这个时候，你将看到基本布局效果就出来了，而且能很好匹配 LTR 和 RTL 语言版本：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca1b960039eb4e4794128dd9d064e394~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>当然，在开发 LTR 和 RTL （多语言版本）的 Web 网站或应用时，应该尽可能避免使用 CSS 的物理属性，我们这个示例中尽可能使用 CSS 的逻辑属性来替代其对应的物理属性：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.logo svg {</span></span>
<span class="line"><span>    block-size: 106px;</span></span>
<span class="line"><span>    margin-inline-start: -28px;</span></span>
<span class="line"><span>    margin-inline-end: -28px;</span></span>
<span class="line"><span>    margin-block-start: -28px;</span></span>
<span class="line"><span>    margin-block-end: -28px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>h1 {</span></span>
<span class="line"><span>    margin-block-start: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login {</span></span>
<span class="line"><span>    border-radius: 8px;</span></span>
<span class="line"><span>    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    padding-inline: 20px;</span></span>
<span class="line"><span>    padding-block: 20px;</span></span>
<span class="line"><span>    max-inline-size: 400px;</span></span>
<span class="line"><span>    min-inline-size: calc(100% - 2rem);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login .control {</span></span>
<span class="line"><span>    inline-size: 100%;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login .control:last-of-type {</span></span>
<span class="line"><span>    padding-block-start: 1.625rem;</span></span>
<span class="line"><span>    border-block-start: 1px solid #dddfe2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login input {</span></span>
<span class="line"><span>    padding-inline: 16px;</span></span>
<span class="line"><span>    padding-block: 14px;</span></span>
<span class="line"><span>    border-radius: 6px;</span></span>
<span class="line"><span>    inline-size: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login input:focus {</span></span>
<span class="line"><span>    box-shadow: 0 0 0 2px #e7f3ff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login button {</span></span>
<span class="line"><span>    border-radius: 6px;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    padding-block: 0;</span></span>
<span class="line"><span>    padding-inline: 16px;</span></span>
<span class="line"><span>    min-block-size: 3rem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.login .button--primary {</span></span>
<span class="line"><span>    inline-size: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.help--message {</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    margin-block-start: 28px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>section &gt; * {</span></span>
<span class="line"><span>    max-inline-size: 400px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.page__sloga {</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media only screen and (min-width: 514px) {</span></span>
<span class="line"><span>    .login {</span></span>
<span class="line"><span>        min-inline-size: 400px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media only screen and (min-width: 760px) {</span></span>
<span class="line"><span>    .page__sloga {</span></span>
<span class="line"><span>        text-align: start;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    .login {</span></span>
<span class="line"><span>        min-inline-size: 400px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div><p>不过在使用 CSS 逻辑属性也会面临一个新问题。在 CSS 中有很多属性是可以简写的，比如 CSS 盒模型中的 <code>margin</code> 、<code>padding</code> 、<code>border</code> 以及 <code>border-radius</code> 之类的属性。在开发多语言版本 Web 网站或应用时，如果我们使用简写属性，比如 <code>margin</code> :</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>    margin: 10px 20px 8px 5px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>你无法预测人们会怎么解读它。如果网站使用物理属性，这些值会被相应地解读成：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>    margin-top: 10px;</span></span>
<span class="line"><span>    margin-right: 20px;</span></span>
<span class="line"><span>    margin-bottom: 8px;</span></span>
<span class="line"><span>    margin-left: 5px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果网站使用逻辑属性，这些值就会被解读为：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>    margin-block-start: 10px;</span></span>
<span class="line"><span>    margin-inline-end: 20px;</span></span>
<span class="line"><span>    margin-block-end: 8px;</span></span>
<span class="line"><span>    margin-inline-start: 5px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在英文网站中，物理属性和逻辑属性以相同的方式工作。在其他语言中，当我们使用 <code>margin</code> 等简写方式时，目的是根据 <code>direction</code> 或 <code>dir</code> 属性或新的 <code>writing-mode</code> 属性来工作。</p><p>对于开发者来说是件不易的事情，因为一些物理属性和逻辑属性是易于记忆的，像 <code>margin</code> 、<code>padding</code> 之类，但有一些是不易于记忆的，比如 <code>border</code> 和 <code>border-radius</code> 。就拿 <code>border-radius</code> 为例吧，与之对应的逻辑属性，在 <code>dir</code> 或 <code>direction</code> 和 <code>writing-mode</code> 下工作如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96567f6231164887bb59e28f5e67295e~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>这里我把以前整理的 <code>width</code> 、<code>hieght</code> 、<code>border</code> 、<code>padding</code> 、<code>top</code> 、<code>left</code> 、<code>bottom</code> 和 <code>right</code> 对应逻辑属性在 <code>dir</code> 、<code>direction</code> 和 <code>writing-mode</code> 下的工作情形用图来展示，希望有利于大家更好理解：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e879a7963f14956adc03487c6cc5bfc~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>最后，要是你对 CSS 逻辑属性和物理属性之间的对应关系记不住，也不要紧，查看下图的即可：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a55b66f8f6174c1589c7b9d6cd8a3f3d~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>另外，需要注意的是，我们的示例在媒体查询中并没有使用 CSS 的逻辑属性，比如 <code>min-inline-size</code> ，那是因为到目前为止，它还不能作为媒体查询中的媒体条件。比如，下面这段代码是无法正常工作的：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>@media only screen and (min-inline-size: 514px) {</span></span>
<span class="line"><span>    .login {</span></span>
<span class="line"><span>        min-inline-size: 400px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>@media only screen and (min-inline-size: 760px) {</span></span>
<span class="line"><span>    .page__sloga {</span></span>
<span class="line"><span>        text-align: start;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    .login {</span></span>
<span class="line"><span>        min-inline-size: 400px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>在这个示例中，我们不需要处理图标相关的事情，但根据前面所介绍的内容，我们应该在 LTR 和 RTL 版本中设置不同的行高 <code>line-height</code> ，给链接下划线设置不同的样式：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>section[dir=&quot;ltr&quot;] {</span></span>
<span class="line"><span>    line-height: 1.625;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>section[dir=&quot;rtl&quot;] {</span></span>
<span class="line"><span>    line-height: 1.325;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>section[dir=&quot;rtl&quot;] .form--wrapper a:hover {</span></span>
<span class="line"><span>      text-decoration: underline;</span></span>
<span class="line"><span>      text-decoration-color: rgba(21, 132, 196, 0.2);</span></span>
<span class="line"><span>      text-decoration-skip-ink: auto;</span></span>
<span class="line"><span>      text-underline-offset: 4px;</span></span>
<span class="line"><span>      text-decoration-thickness: 2px;</span></span>
<span class="line"><span>      text-decoration: underline;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>最终你看到的效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa53b1d197b04a18a83a98eb706dfb74~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/poKBGzK" target="_blank" rel="noreferrer">https://codepen.io/airen/full/poKBGzK</a></p></blockquote><p>再来看一个 <a href="https://codepen.io/Alaa_AbdElrahim/full/XWaBBoq" target="_blank" rel="noreferrer">@Alaa Abd El-Rahim 在 Codepen 分享的一个示例</a>，我在他的基础上 Fork 了一份，并在该示例的“英文”、“日文”、“阿拉伯文”的基础上新增了“中文”。这样就构建了一个四国语言的 Web 页面：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/155a87a3b565458591676b7922ddb292~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/qBKwwdM" target="_blank" rel="noreferrer">https://codepen.io/airen/full/qBKwwdM</a></p></blockquote><p>构建上图这样的多语言 Web 页面，对于 Web 开发者来说，要做的第一件事情就是在根元素 <code>&lt;html&gt;</code> 上设置 <code>lang</code> 和<code>dir</code> 属性的值，比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- LTR: 中文 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;zh-Hans&quot; dir=&quot;ltr&quot;&gt;&lt;/html&gt;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>&lt;!-- LTR: 日文 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;jp&quot; dir=&quot;ltr&quot;&gt;&lt;/html&gt;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>&lt;!-- LTR: 英文 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot; dir=&quot;ltr&quot;&gt;&lt;/html&gt;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>&lt;!-- LTR: 阿拉伯文 --&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>然后我们可以在选择器中使用这些属性来设置样式。比如使用 CSS 属性选择器来选择相应的元素：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>[lang=&quot;zh&quot;] {</span></span>
<span class="line"><span>    /* 匹配 lang=&quot;zh&quot; 的元素 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>[lang^=&quot;zh&quot;] {</span></span>
<span class="line"><span>    /* 匹配以 zh 开头的 lang ，比如 zh, zh-Hans, zh-HK 等*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>[lang|=&quot;zh&quot;] {</span></span>
<span class="line"><span>    /* 匹配 lang 属性值中含有 zh 的值 ，比如 zh, zh-Hans, zh-HK 等*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>[dir=&quot;ltr&quot;] {</span></span>
<span class="line"><span>    /* 匹配 dir 值为 ltr 的元素 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>[dir=&quot;rtl&quot;] {</span></span>
<span class="line"><span>    /* 匹配 dir 值为 ltr 的元素 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>还可以上面选择器为父选择器，来匹配对应的后代元素，比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>html[dir=&quot;rtl&quot;] .hero,</span></span>
<span class="line"><span>html[dir=&quot;rtl&quot;] .hero__content,</span></span>
<span class="line"><span>html[dir=&quot;rtl&quot;] .hero__img img,</span></span>
<span class="line"><span>html[dir=&quot;rtl&quot;] .hero__social &gt; div {</span></span>
<span class="line"><span>    transform: rotateY(180deg);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>甚至将来你还可以使用 <code>:dir()</code> 伪类匹配特定文字书写方向的元素。比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;div dir=&quot;rtl&quot;&gt;</span></span>
<span class="line"><span>    &lt;span&gt;test1&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;div dir=&quot;ltr&quot;&gt;test2</span></span>
<span class="line"><span>        &lt;div dir=&quot;auto&quot;&gt;עִבְרִית&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>示例中的 <code>:dir(rtl)</code> 会匹配最外层的 <code>div</code>，内容为 <code>test1</code> 的 <code>span</code> 和有希伯来字符的 <code>div</code>。<code>:dir(ltr)</code> 会匹配到内容为 <code>test2</code> 的 <code>div</code> 。</p><p>值得注意的是，用 CSS 伪类 <code>:dir()</code> 并不等于使用 <code>[dir=…]</code> 属性选择器。后者匹配 <code>dir</code> 的值且不会匹配到未定义此属性的元素，即使该元素继承了父元素的属性；类似的， <code>[dir=rtl]</code> 或 <code>[dir=ltr]</code> 不会匹配到 <code>dir</code> 属性的值为 <code>auto</code> 的元素。</p><p>而<code>:dir()</code>会匹配经过客户端计算后的属性，不管是继承的 <code>dir</code> 值还是 <code>dir</code> 值为 <code>auto</code> 。另外，<code>:dir()</code> 伪类仅考虑文档（大多数情况是 HTML）中定义的文字方向的语义值，并不会考虑格式值，如 CSS 的 <code>direction</code> 的值。</p><p>不幸的是，CSS 的 <code>:dir()</code> 伪类到目前还只是一个实验属性，你还无法使用到生产环境中。所以，目前为止还是使用 <code>[dir=&quot;ltr&quot;]</code> 或 <code>[dir=&quot;rtl&quot;]</code> 这样的属性选择器更为安全。</p><p>另外，当你的 Web 排版中有 LTR 和 RTL 混排时，也建议在文档的标签元素上显式设置 <code>dir</code> 的值，最好是也能显式设置 <code>lang</code> 值，这样做除了避免混排的阅读困难之外，也更有利于使用 CSS 属性选择器选中需要设置样式的元素：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;h1 dir=&quot;rtl&quot; lang=&quot;ar&quot;&gt;مرحباً بكم في &lt;strong dir=&quot;ltr&quot; lang=&quot;en&quot;&gt;W3cplus.com&lt;/strong&gt;&lt;/h1&gt;</span></span>
<span class="line"><span>[dir=&quot;rtl&quot;] {</span></span>
<span class="line"><span>    font-size: clamp(1.25rem, 4vw + 1.5rem, 2rem);</span></span>
<span class="line"><span>    color: #09f;</span></span>
<span class="line"><span>    font-weight: 500;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>[dir=&quot;ltr&quot;] {</span></span>
<span class="line"><span>    font-weight: 900;</span></span>
<span class="line"><span>    color: #f36;</span></span>
<span class="line"><span>    text-decoration: underline;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65b4328de036454ba357feb9427bd35a~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/mdKgYOR" target="_blank" rel="noreferrer">https://codepen.io/airen/full/mdKgYOR</a></p></blockquote><p>除了使用 <code>[lang=&quot;en&quot;]</code> 这样的属性选择器之外，还可以使用 <code>:lang()</code> 伪类选择器，针对特定的语言设置不同的样式。例如，在这个例子中，当 <code>:lang</code> 伪类切换为阿拉伯语、日语或中文时，我们可以改变字体大小：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span> html:lang(ar),</span></span>
<span class="line"><span>  html:lang(jp),</span></span>
<span class="line"><span>  html:lang(zh){</span></span>
<span class="line"><span>      --offers-item-after-font-size: 1.2rem;</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>也可以使用类似的方式，给特定的语言设置不同的字体，比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>/* 阿拉伯语时使用的字体  */</span></span>
<span class="line"><span>html:lang(ar) {</span></span>
<span class="line"><span>    --font-family: &quot;Tajawal&quot;, sans-serif;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>/* 日语时使用的字体 */</span></span>
<span class="line"><span>html:lang(jp) {</span></span>
<span class="line"><span>    --font-family: &quot;Noto Sans JP&quot;, sans-serif;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>还可以针对不同语言，对相应元素改变其书写模式 <code>writing-mode</code> 的值，比如日文和中文时，将 <code>.about__text</code> 的内容修改成竖排，并且从右向左排列，即 <code>writing-mode</code> 设置为 <code>vertical-rl</code> ：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>html:lang(jp) .about__text,</span></span>
<span class="line"><span>html:lang(zh) .about__text {</span></span>
<span class="line"><span>    writing-mode: vertical-rl;</span></span>
<span class="line"><span>    inline-size: 400px;</span></span>
<span class="line"><span>    block-size: max-content;</span></span>
<span class="line"><span>    margin-block-end: auto;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd1df52b7559421c90c344eec32c0b04~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>示例中还使用到了前面课程中没有介绍过的 CSS 知识。就是在伪元素 <code>::before</code> 或 <code>::after</code> 使用 <code>attr()</code> 函数，根据 HTML 标签元素的属性值生成伪元素的内容：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;div data-badge=&quot;特殊报价&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>div::before {</span></span>
<span class="line"><span>    content: attr(data-badge);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这样做，在多语言网站中，<code>dir</code> 的值就决定了我们要选择什么和设置什么样式。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;div data-name=&quot;特殊报价&quot; dir=&quot;ltr&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div data-name=&quot;اقتباس خاص&quot; dir=&quot;rtl&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这使得在切换语言后更改内容而不更改样式变得相对容易。回到我们的设计。卡片上有一个圆形的徽标设计，采用的就是这个方案：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.offers__item::after {</span></span>
<span class="line"><span>    content: attr(data-offer);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    inline-size: 80px;</span></span>
<span class="line"><span>    inset-block-start: 20px;</span></span>
<span class="line"><span>    aspect-ratio: 1;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    padding: 2%;</span></span>
<span class="line"><span>    border-radius: 50%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>@media (min-width: 768px) {</span></span>
<span class="line"><span>    .offers__item::after {</span></span>
<span class="line"><span>        inline-size: 100px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>@media (min-width: 1900px) {</span></span>
<span class="line"><span>    .offers__item::after {</span></span>
<span class="line"><span>        inline-size: 6.5rem;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7742ba2cfb954d48815c077b5036ee37~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>需要注意的是，<code>[dir=&quot;...&quot;]</code> 、<code>[lang=&quot;...&quot;]</code> 和 <code>:lang(...)</code> 除了可以选中显式设置了 <code>dir</code> 和 <code>lang</code> 属性的元素之外，也可以利用 CSS 的选择器组合功能选择与其相邻的元素，它的子元素以及它的后代元素，比如：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>html[dir=&quot;ltr&quot;] {</span></span>
<span class="line"><span>    /* 选中 dir=&quot;ltr&quot; 的 html 元素 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>html[dir=&quot;ltr&quot;] .about__text {</span></span>
<span class="line"><span>    /* 选中 dir=&quot;ltr&quot; 的 html 元素的后代名为 .about__text 元素 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>html:lang(en) {</span></span>
<span class="line"><span>    /* 选中 lang=&quot;en&quot; 的 html 元素*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>html:lang(en) .about__text {</span></span>
<span class="line"><span>    /* 选中 lang=&quot;en&quot; 的 html 元素的后代名为 .about__text 元素*/</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>接下来就是 CSS 逻辑属性的使用了，我将示例中涉及到的 CSS 物理属性基本上使用了逻辑属性来编码：</p><ul><li><code>inline-size</code> 和 <code>block-size</code> 分别替代 <code>width</code> 和 <code>height</code>；</li><li><code>min-inline-size</code> 和 <code>min-block-size</code> 分别替代 <code>min-width</code> 和 <code>min-height</code>；</li><li><code>margin-inline-end</code> 替代了 <code>margin-right</code>；</li><li><code>border-inline-start</code> 替代 <code>border-left</code>；</li><li><code>inset-block-start</code> 、<code>inset-inline-end</code> 、<code>inset-block-end</code> 和 <code>inset-inline-start</code> 分别替代了 <code>top</code> 、<code>right</code> 、<code>bottom</code> 和 <code>left</code>。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.w-100 {</span></span>
<span class="line"><span>    inline-size: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.btn {</span></span>
<span class="line"><span>    padding-inline: calc(var(--btn-padding) * 2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.about,</span></span>
<span class="line"><span>.offers,</span></span>
<span class="line"><span>.footer {</span></span>
<span class="line"><span>    padding-block-start: var(--sec-padding-block);</span></span>
<span class="line"><span>    padding-inline: var(--sec-padding-inline);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.offers,</span></span>
<span class="line"><span>.footer {</span></span>
<span class="line"><span>    padding-block-end: var(--sec-padding-block);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.sec__header {</span></span>
<span class="line"><span>    margin-block-end: var(--sec-heading-mbe);</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.sec__header::after {</span></span>
<span class="line"><span>    inline-size: 50px;</span></span>
<span class="line"><span>    block-size: 2px;</span></span>
<span class="line"><span>    margin-inline: auto;</span></span>
<span class="line"><span>    margin-block-start: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.hero {</span></span>
<span class="line"><span>    min-block-size: var(--hero-height);</span></span>
<span class="line"><span>    padding-block: var(--hero-padding-block);</span></span>
<span class="line"><span>    padding-inline: var(--sec-padding-inline);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.hero__navbar {</span></span>
<span class="line"><span>    margin-block-end: var(--hero-navbar-padding-block-end);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.mode__switcher {</span></span>
<span class="line"><span>    inline-size: 20px;</span></span>
<span class="line"><span>    aspect-ratio: 1;</span></span>
<span class="line"><span>    margin-inline-end: 8px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.mode__switcher::after {</span></span>
<span class="line"><span>    inset-inline-start: 50%;</span></span>
<span class="line"><span>    inset-block-start: 50%;</span></span>
<span class="line"><span>    transform: translate(-50%, -50%);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.hero__text {</span></span>
<span class="line"><span>    margin-block-end: var(--hero-text-mbe);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.hero__title,</span></span>
<span class="line"><span>.hero__para {</span></span>
<span class="line"><span>    margin-block-end: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.hero__social {</span></span>
<span class="line"><span>    inset-inline-start: 0;</span></span>
<span class="line"><span>    inset-block-start: 50%;</span></span>
<span class="line"><span>    transform: translateY(-50%);</span></span>
<span class="line"><span>    padding-block: 50px;</span></span>
<span class="line"><span>    padding-inline: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.hero__social a {</span></span>
<span class="line"><span>    margin-block-end: 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.about__img {</span></span>
<span class="line"><span>    margin-block-end: var(--about-img-mbe);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.about__subtitle {</span></span>
<span class="line"><span>    margin-block: 30px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.about__subtitle:first-of-type {</span></span>
<span class="line"><span>    margin-block-start: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.cta__btn {</span></span>
<span class="line"><span>    margin-block-start: 1.5625rem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.offers__content--has-margin {</span></span>
<span class="line"><span>    margin-block-end: 60px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.offers__item .para {</span></span>
<span class="line"><span>    margin-block-end: 30px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.offers__item::after {</span></span>
<span class="line"><span>    inline-size: 80px;</span></span>
<span class="line"><span>    aspect-ratio: 1;</span></span>
<span class="line"><span>    inset-block-start: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.offers__item_img {</span></span>
<span class="line"><span>    inline-size: 60%;</span></span>
<span class="line"><span>    margin-inline: auto;</span></span>
<span class="line"><span>    margin-block-end: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer {</span></span>
<span class="line"><span>    border-start-end-radius: 120px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer__about,</span></span>
<span class="line"><span>.footer__newsletter,</span></span>
<span class="line"><span>.footer__navbar {</span></span>
<span class="line"><span>    margin-block-end: var(--item-mbe);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer__logo {</span></span>
<span class="line"><span>    margin-block-end: 40px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer__navbar_head,</span></span>
<span class="line"><span>.footer__newsletter_head {</span></span>
<span class="line"><span>    margin-block-end: 50px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer__navbar_item {</span></span>
<span class="line"><span>    margin-block: 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer__newsletter .para {</span></span>
<span class="line"><span>    margin-block-end: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer__newsletter input {</span></span>
<span class="line"><span>    padding-block: var(--btn-padding);</span></span>
<span class="line"><span>    padding-inline-start: calc(var(--btn-padding) * 2);</span></span>
<span class="line"><span>    padding-inline-end: calc(110px + (var(--btn-padding) * 2));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer__newsletter_btn {</span></span>
<span class="line"><span>    inset-inline-end: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>@media (max-width: 899px) {</span></span>
<span class="line"><span>    .cta {</span></span>
<span class="line"><span>        padding-inline: 2.8%;</span></span>
<span class="line"><span>        margin-block-start: var(--sec-padding-block);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>@media (min-width: 768px) {</span></span>
<span class="line"><span>    .offers__item::after {</span></span>
<span class="line"><span>        inline-size: 100px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>@media (min-width: 900px) {</span></span>
<span class="line"><span>    .hero__text {</span></span>
<span class="line"><span>        min-block-size: calc(</span></span>
<span class="line"><span>          var(--hero-height) - (var(--sec-padding-block) * 2) -</span></span>
<span class="line"><span>          var(--hero-navbar-padding-block-end) - 30px</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        inline-size: 56.5%;</span></span>
<span class="line"><span>        padding-inline-end: 2.75%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .hero__img {</span></span>
<span class="line"><span>        inline-size: 33.33%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .cta {</span></span>
<span class="line"><span>        padding-block-start: var(--sec-padding-block);</span></span>
<span class="line"><span>        padding-inline: var(--sec-padding-inline);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .cta__text {</span></span>
<span class="line"><span>        padding-block: 6.875rem 2.1875rem;</span></span>
<span class="line"><span>        padding-inline: 6.25rem var(--cta-text-mie);</span></span>
<span class="line"><span>        border-start-start-radius: 50%;</span></span>
<span class="line"><span>        border-end-start-radius: 50px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>@media (min-width: 1200px) {</span></span>
<span class="line"><span>    .hero::before {</span></span>
<span class="line"><span>        block-size: 100%;</span></span>
<span class="line"><span>        inline-size: 33.33%;</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        inset-block-start: 0;</span></span>
<span class="line"><span>        inset-inline-end: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .about__img {</span></span>
<span class="line"><span>        inline-size: 37%;</span></span>
<span class="line"><span>        margin-inline-start: 5%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .about__img::after {</span></span>
<span class="line"><span>        inline-size: 100%;</span></span>
<span class="line"><span>        aspect-ratio: 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .about__text {</span></span>
<span class="line"><span>        inline-size: 53%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    html:lang(jp) .about__text,</span></span>
<span class="line"><span>    html:lang(zh) .about__text {</span></span>
<span class="line"><span>        writing-mode: vertical-rl;</span></span>
<span class="line"><span>        inline-size: 400px;</span></span>
<span class="line"><span>        block-size: max-content;</span></span>
<span class="line"><span>        margin-block-end: auto;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .cta {</span></span>
<span class="line"><span>        margin-inline-start: 3.8%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .cta__text {</span></span>
<span class="line"><span>        margin-inline-start: calc(-1 * var(--sec-padding-inline) + 3%);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .cta__img {</span></span>
<span class="line"><span>        inline-size: var(--cta-img-width);</span></span>
<span class="line"><span>        margin-inline-start: calc(-1 * var(--cta-text-mie));</span></span>
<span class="line"><span>        border-inline-start-color: var(--light-color);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .footer__about,</span></span>
<span class="line"><span>    .footer__newsletter {</span></span>
<span class="line"><span>        inline-size: 30%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    .footer__navbar {</span></span>
<span class="line"><span>        inline-size: 20%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>@media (min-width: 1900px) {</span></span>
<span class="line"><span>    .offers__item::after {</span></span>
<span class="line"><span>        inline-size: 6.5rem;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br></div></div><p>比如示例中圆角的使用：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f984aba816347139ada810a65e06c0c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.cta__text {</span></span>
<span class="line"><span>    border-start-start-radius: 50%;</span></span>
<span class="line"><span>    border-end-start-radius: 50px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.footer {</span></span>
<span class="line"><span>    border-start-end-radius: 120px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>你可能已经猜到了，整个页面的布局都是以 CSS Flexbox 和 CSS Grid 来构建的，所以不用太多担心 LTR 和 RTL 两种版本下因为布局会产生异常。具体原因在上一个示例中已经阐述过了。<strong>CSS Flexbox 和 CSS Grid 都是基于文档书写模式而设计的</strong> 。比如下图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a6a9fd22dea47e7afabf2173e43508a~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.d-xl-flex {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.cta__text {</span></span>
<span class="line"><span>    padding-block: 6.875rem  2.1875rem;</span></span>
<span class="line"><span>    padding-inline: 6.25rem  var(--cta-text-mie);</span></span>
<span class="line"><span>    border-start-start-radius: 50%;</span></span>
<span class="line"><span>    border-end-start-radius: 50px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.cta__img {</span></span>
<span class="line"><span>    inline-size: var(--cta-img-width);</span></span>
<span class="line"><span>    margin-inline-start: calc(-1 * var(--cta-text-mie));</span></span>
<span class="line"><span>    padding: 10px;</span></span>
<span class="line"><span>    border-radius: 50%;</span></span>
<span class="line"><span>    border: 1px dashed var(--secondary-color);</span></span>
<span class="line"><span>    border-inline-start-color: var(--light-color);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>再比如示例中卡片展示区域，使用 CSS Grid 构建的布局，也能很好适配 LTR 和 RTL 版本，即使卡片由三个增加到四个，它也能很好地展示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0aea3e5ca7ac4c7884b7065a07b7e0cd~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>.offers__content {</span></span>
<span class="line"><span>    display: grid;</span></span>
<span class="line"><span>    grid-template-columns: var(--offers-content-column);</span></span>
<span class="line"><span>    gap: var(--offers-content-gap);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在这个区域的布局，其实更好的方式是采用 CSS Grid 的 RAM 布局技术，它将会更好地响应浏览器不同断点的展示效果。有关于 CSS Grid 的 RAM 布局技术，这里就不过多阐述了，因为它在前面的课程中已经出现很多次了。</p><p>你可能已经发现了，在原作者的示例中，有些地方细节做得还是略有缺陷，比如示例中的按钮，因为不同版本语言，翻译出来的内容长度有所不同，有的按钮看上去较小：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b911556865b4df397857cef9e1c8650~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>我在 Fork 的示例基础上对按钮做了一个最小尺寸的设置，这样做的主要原因是，在不同语言版本时，不会让有的语言版本下视觉看上去不美观，也避免按钮不好点击：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/309099ed834843fbb778cc2cf5bbc2f4~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>这个示例还使用 CSS 自定义构建了 Dark Mode （暗黑模式）的效果：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>html {</span></span>
<span class="line"><span>    /* colors */</span></span>
<span class="line"><span>    --dark-color: #161616;</span></span>
<span class="line"><span>    --light-color: #eee;</span></span>
<span class="line"><span>    --primary-text-color: var(--dark-color);</span></span>
<span class="line"><span>    --primary-bg-color: #fff;</span></span>
<span class="line"><span>    --shadow-color: var(--light-color);</span></span>
<span class="line"><span>    --hero-bg-gradient: linear-gradient(90deg, #30333f, #161616, #161616);</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    /* font sizes */</span></span>
<span class="line"><span>    --logo-font-size: 2rem;</span></span>
<span class="line"><span>    --lang-switcher-font-size: 1.02em;</span></span>
<span class="line"><span>    --offers-item-after-font-size: 1.5rem;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    /* margin and padding */</span></span>
<span class="line"><span>    --btn-padding: 7px;</span></span>
<span class="line"><span>    --sec-padding-block: 120px;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    /* height and width */</span></span>
<span class="line"><span>    --hero-height: 500px;</span></span>
<span class="line"><span>    --cta-img-width: 45.75%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>    background-color: var(--primary-bg-color);</span></span>
<span class="line"><span>    color: var(--primary-text-color);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>body.dark {</span></span>
<span class="line"><span>    --primary-bg-color: #0f0f0f;</span></span>
<span class="line"><span>    --primary-text-color: var(--light-color);</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    /* other changes */</span></span>
<span class="line"><span>    --shadow-color: #13151a;</span></span>
<span class="line"><span>    --hero-bg-gradient: linear-gradient(90deg, #191b20, #131313, #131313);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>Dark Mode 的切换还是使用了一点点 JavaScript 脚本的：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>(function () {</span></span>
<span class="line"><span>    document.getElementById(&quot;dark-mode&quot;).addEventListener(&quot;click&quot;, function () {</span></span>
<span class="line"><span>        document.body.classList.toggle(&quot;dark&quot;);</span></span>
<span class="line"><span>        this.classList.toggle(&quot;dark&quot;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>你切换模式的时候，能看到下图这样的效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1984c5b18284bf6a0048a29282074dd~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/qBKwwdM" target="_blank" rel="noreferrer">https://codepen.io/airen/full/qBKwwdM</a></p></blockquote><p>这是示例最终的效果。注意，这个示例也是具有响应式的效果，它能很好适配移动端、平板和 PC 等。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>我希望这些技术可以帮助你更轻松地创建多语言 Web 网站或应用。这节课向大家介绍了 LTR 和 RTL 中排版或 Web 布局中常会出的一些小问题以及设计上需要注意的一些细节。虽然罗列的所有注意项目不是最全面的，但希望这些能帮助你从设计的阶段就避免一些常识性的错误。</p><p>另外，在示例中我们学习了一些用来为这特定语言应用样式的 CSS 技巧，比如 <code>[dir=&quot;...&quot;]</code> 、<code>[lang=&quot;...&quot;]</code> 、<code>:dir(...)</code> 和 <code>:lang(...)</code> 。其中还介绍了 CSS 中的逻辑属性，以及它们如何适应文档的书写模式 <code>writing-mode</code> 、<code>direction</code> （或 HTML 的 <code>dir</code> 属性）。这比为不同语言版本编写额外的 CSS 样式规则要实用得多，而且还让你更易于维护一个多语言 Web 网站或应用的样式规则。</p><p>最后需要再次强调的是，<strong>在构建一个多语言 Web 网站或应用时，首选的 Web 布局技术是 CSS Flexbox 和 CSS Grid，因为它们天然的能与文档书写模式相结合</strong> 。除此之外，应该尽可能使用 CSS 逻辑属性来替换物理属性，尤其是涉及到方向性的属性，更应该使用逻辑属性。</p><p>对于不同语言版本的差异化的样式规则，可以考虑使用前面提到的 CSS 属性选择器 <code>[dir=&quot;...&quot;]</code> 、<code>[lang=&quot;...&quot;]</code> 或伪类选择器 <code>:dir(...)</code> 、<code>:lang(...)</code> 额外处理。</p><p>当然，在为特定语言优化网站时，可能还有其他需求需要考虑，但我们这里介绍的内容应该可以为你提供创建健壮 Web 布局所需的所有能力，以适应任何数量的语言和书写模式。换句话说，掌握课程中的内容，构建一个多语言 Web 网站或应用对于你来说已不是一件难事，但差异化的处理，还是需要针对实际场景运用课程中所介绍的知识，做进一步的优化。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,282);function m(d,g,h,f,v,k){const s=e,a=l,p=i;return b(),r("div",null,[u,n(s,{readTime:"43",words:"10.9k"}),n(a),n(p)])}const C=c(o,[["render",m]]);export{_ as __pageData,C as default};
