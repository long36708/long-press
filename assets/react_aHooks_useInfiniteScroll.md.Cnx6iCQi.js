import{_ as t,a as l,b as h}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as k,c as p,I as s,a7 as e,o as r}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const D=JSON.parse('{"title":"useInfiniteScroll","description":"","frontmatter":{},"headers":[],"relativePath":"react/aHooks/useInfiniteScroll.md","filePath":"react/aHooks/useInfiniteScroll.md","lastUpdated":1708876908000}'),d={name:"react/aHooks/useInfiniteScroll.md"},B=e(`<h1 id="useinfinitescroll" tabindex="-1">useInfiniteScroll <a class="header-anchor" href="#useinfinitescroll" aria-label="Permalink to &quot;useInfiniteScroll&quot;">​</a></h1><p>useInfiniteScroll 是一个实现无限滚动功能的 Hook。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useInfiniteScroll</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;ahooks&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> App</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">list</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">loading</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">loadMore</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">hasMore</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useInfiniteScroll</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">service</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">		&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">			{</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">list</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">map</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">item</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">index</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">				&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> key</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">index</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">item</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">			))</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">			{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">loading</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">Loading...</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">			{</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">loading</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> hasMore</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> onClick</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">loadMore</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">Load more</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">		&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>在上述代码中，useInfiniteScroll 接受一个异步函数 service 作为参数，返回一个包含 list、loading、loadMore 和 hasMore 的对象。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,5);function g(o,y,c,F,C,m){const i=t,a=l,n=h;return r(),p("div",null,[B,s(i,{readTime:"1",words:"91"}),s(a),s(n)])}const f=k(d,[["render",g]]);export{D as __pageData,f as default};
