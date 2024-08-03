import{_ as l,a as i,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c,I as s,a7 as n,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const x=JSON.parse('{"title":"vitePress中的Markdown语法","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Markdown语法.md","filePath":"guide/Markdown语法.md","lastUpdated":1711902617000}'),d={name:"guide/Markdown语法.md"},h=n(`<h1 id="vitepress中的markdown语法" tabindex="-1">vitePress中的Markdown语法 <a class="header-anchor" href="#vitepress中的markdown语法" aria-label="Permalink to &quot;vitePress中的Markdown语法&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#目录表-toc">目录表 (TOC)</a></li><li><a href="#自定义容器">自定义容器</a><ul><li><a href="#默认标题">默认标题</a></li><li><a href="#自定义标题">自定义标题</a></li></ul></li><li><a href="#github-风格的警报">GitHub 风格的警报</a></li><li><a href="#在代码块中实现行高亮">在代码块中实现行高亮</a></li><li><a href="#交互式复选框语法如下">交互式复选框语法如下：</a></li><li><a href="#功能快捷键">功能快捷键</a></li><li><a href="#如何创建一个注脚">如何创建一个注脚</a></li><li><a href="#markdown中的变量引用">Markdown中的变量引用</a></li><li><a href="#contributors">Contributors</a></li></ul></nav><h2 id="目录表-toc" tabindex="-1">目录表 (TOC) <a class="header-anchor" href="#目录表-toc" aria-label="Permalink to &quot;目录表 (TOC)&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>[[toc]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="自定义容器" tabindex="-1">自定义容器 <a class="header-anchor" href="#自定义容器" aria-label="Permalink to &quot;自定义容器&quot;">​</a></h2><h3 id="默认标题" tabindex="-1">默认标题 <a class="header-anchor" href="#默认标题" aria-label="Permalink to &quot;默认标题&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>::: info</span></span>
<span class="line"><span>This is an info box.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: tip</span></span>
<span class="line"><span>This is a tip.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: warning</span></span>
<span class="line"><span>This is a warning.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: danger</span></span>
<span class="line"><span>This is a dangerous warning.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: details</span></span>
<span class="line"><span>This is a details block.</span></span>
<span class="line"><span>:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="自定义标题" tabindex="-1">自定义标题 <a class="header-anchor" href="#自定义标题" aria-label="Permalink to &quot;自定义标题&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>::: danger STOP</span></span>
<span class="line"><span>危险区域，请勿继续</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: details 点我查看代码</span></span>
<span class="line"><span>    \`\`\`js</span></span>
<span class="line"><span>    console.log(&#39;Hello, VitePress!&#39;)</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="github-风格的警报" tabindex="-1">GitHub 风格的警报 <a class="header-anchor" href="#github-风格的警报" aria-label="Permalink to &quot;GitHub 风格的警报&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&gt; [!NOTE]</span></span>
<span class="line"><span>&gt; 强调用户在快速浏览文档时也不应忽略的重要信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; [!TIP]</span></span>
<span class="line"><span>&gt; 有助于用户更顺利达成目标的建议性信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; [!IMPORTANT]</span></span>
<span class="line"><span>&gt; 对用户达成目标至关重要的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; [!WARNING]</span></span>
<span class="line"><span>&gt; 因为可能存在风险，所以需要用户立即关注的关键内容。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; [!CAUTION]</span></span>
<span class="line"><span>&gt; 行为可能带来的负面影响。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="在代码块中实现行高亮" tabindex="-1">在代码块中实现行高亮 <a class="header-anchor" href="#在代码块中实现行高亮" aria-label="Permalink to &quot;在代码块中实现行高亮&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>    \`\`\`js{4}</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>      data () {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>          msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    \`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro has-highlighted vp-code" tabindex="0"><code><span class="line"><span>除了单行之外，还可以指定多个单行、多行，或两者均指定：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>多行：例如 {5-8}、{3-10}、{10-17}</span></span>
<span class="line"><span>多个单行：例如 {4,7,9}</span></span>
<span class="line"><span>多行与单行：例如 {4,7-13,16,23-27,40}</span></span>
<span class="line"><span></span></span>
<span class="line highlighted"><span>也可以使用注释实现行高亮。</span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>    \`\`\`js</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>      data () {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line highlighted"><span>          msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    \`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro has-diff has-focused-lines has-highlighted vp-code" tabindex="0"><code><span class="line"><span>## 代码块中聚焦</span></span>
<span class="line has-focus"><span>在某一行上添加注释将聚焦它并模糊代码的其他部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>此外，可以使用 // [!code focus:&lt;lines&gt;] 定义要聚焦的行数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 代码块中的颜色差异</span></span>
<span class="line diff remove"><span>在某一行添加或 // [!code ++] 注释将会为该行创建 diff，同时保留代码块的颜色。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 高亮“错误”和“警告”</span></span>
<span class="line highlighted warning"><span>在某一行添加或 // [!code error] 注释将会为该行相应的着色。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 代码组</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ::: code-group</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    \`\`\`js [config.js]</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * @type {import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    const config = {</span></span>
<span class="line"><span>      // ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    export default config</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    \`\`\`ts [config.ts]</span></span>
<span class="line"><span>    import type { UserConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    const config: UserConfig = {</span></span>
<span class="line"><span>      // ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    export default config</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    :::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="交互式复选框语法如下" tabindex="-1">交互式复选框语法如下： <a class="header-anchor" href="#交互式复选框语法如下" aria-label="Permalink to &quot;交互式复选框语法如下：&quot;">​</a></h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Screen width (integer)</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Service worker support</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Fetch support</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> CSS flexbox support</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Custom elements</li></ul><h2 id="功能快捷键" tabindex="-1">功能快捷键 <a class="header-anchor" href="#功能快捷键" aria-label="Permalink to &quot;功能快捷键&quot;">​</a></h2><p>撤销：<kbd>Ctrl/Command</kbd> + <kbd>Z</kbd> 重做：<kbd>Ctrl/Command</kbd> + <kbd>Y</kbd> 加粗：<kbd>Ctrl/Command</kbd> + <kbd>B</kbd> 斜体：<kbd>Ctrl/Command</kbd> + <kbd>I</kbd> 标题：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> 无序列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> 有序列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> 检查列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> 插入代码：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> 插入链接：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> 插入图片：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> 查找：<kbd>Ctrl/Command</kbd> + <kbd>F</kbd> 替换：<kbd>Ctrl/Command</kbd> + <kbd>G</kbd></p><p>==标记文本==</p><blockquote><p>引用文本</p></blockquote><p>H~2~O is是液体。</p><p>2^10^ 运算结果是 1024.</p><h2 id="如何创建一个注脚" tabindex="-1">如何创建一个注脚 <a class="header-anchor" href="#如何创建一个注脚" aria-label="Permalink to &quot;如何创建一个注脚&quot;">​</a></h2><p>一个具有注脚的文本。<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><h2 id="markdown中的变量引用" tabindex="-1">Markdown中的变量引用 <a class="header-anchor" href="#markdown中的变量引用" aria-label="Permalink to &quot;Markdown中的变量引用&quot;">​</a></h2><p><a href="https://blog.csdn.net/jianchengss/article/details/79829501" target="_blank" rel="noreferrer">https://blog.csdn.net/jianchengss/article/details/79829501</a></p><p>变量定义 格式，支持中文 😃</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>[baidu]:http://www.baidu.com</span></span>
<span class="line"><span>[我的主页]:http://www.jianchengss.com</span></span>
<span class="line"><span>[image-qr-code]: https://gitee.com/jianchengss/resources/raw/master/images/weixin/mp_QR-code/Jason_pinyaxuan_8.jpg</span></span>
<span class="line"><span>[image-error]: https://www.baidu.com/Jason_pinyaxuan_8.jpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>定义的变量可以在文档的任何位置，而且在正文中不显示，比如说本文底部定义了上面代码块里的变量，供下面示例使用，不过页面上是看不到的。</p><p>注意！链接写的时候一定要带 http://,不然链接不生效，不要问我是怎么知道的！！</p><p>变量使用</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#E06C75;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">### 示例1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">直接把key放入[],这样显示文本是key，链接为value</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">（但是两个放在一行会出问题，而且要空一行才能正确显示两个。。。。）:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">baidu</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">] [</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">我的主页</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]  ← 这里有两，只会显示第一个，估计识别成两个中括号的模式了（因为鼠标放上去显示链接是第二个变量值，两个中括号中间空格无效）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">baidu</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">我的主页</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#E06C75;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">### 示例2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">自定义链接显示文本 + key，分别在[]里：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">百度</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#000000;--shiki-dark:#D19A66;">[baidu]</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">我的主页</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#000000;--shiki-dark:#D19A66;">[我的主页]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#E06C75;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">### 示例3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">图片中引用变量：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">直接使用，前面加感叹号，这样图片失效的时候显示的是key，图片显示是value指向的图片：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">image-qr-code</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">image-error</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#E06C75;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">### 示例4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">感叹号+[</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">图片失效是显示文本</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">] + [</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">], 自定义图片失效是显文本:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">图片失效是显示文本</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#000000;--shiki-dark:#D19A66;">[image-qr-code]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#A31515;--shiki-dark:#61AFEF;">图片加载失败</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#000000;--shiki-dark:#D19A66;">[image-error]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,34),o=n('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>注脚的解释 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function k(u,m,g,f,B,y){const a=l,p=i,e=r;return b(),c("div",null,[h,s(a,{readTime:"4",words:"1k"}),s(p),s(e),o])}const _=t(d,[["render",k]]);export{x as __pageData,_ as default};
