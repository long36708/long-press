import{_ as t,a as e,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as p,c as h,I as s,a7 as k,o as r}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const _=JSON.parse('{"title":"useMemoizedFn","description":"","frontmatter":{},"headers":[],"relativePath":"react/aHooks/useMemoizedFn.md","filePath":"react/aHooks/useMemoizedFn.md","lastUpdated":1708876908000}'),d={name:"react/aHooks/useMemoizedFn.md"},B=k(`<h1 id="usememoizedfn" tabindex="-1">useMemoizedFn <a class="header-anchor" href="#usememoizedfn" aria-label="Permalink to &quot;useMemoizedFn&quot;">​</a></h1><p>useMemoizedFn 是一个用于创建记忆化函数的 Hook。它返回一个函数，该函数的身份在每次渲染时都保持不变，只有当依赖项更改时，才会创建一个新的函数。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useMemoizedFn</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;ahooks&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> App</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">count</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">setCount</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useState</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> increment</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useMemoizedFn</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">		setCount</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}, [</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">		&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">			&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">			&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> onClick</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">increment</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">Increment</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">		&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在上述代码中，useMemoizedFn 接收两个参数。第一个参数是要记忆化的函数，第二个参数是依赖项数组。当依赖项更改时，将创建一个新的函数。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,5);function o(c,g,y,F,m,u){const i=t,a=e,n=l;return r(),h("div",null,[B,s(i,{readTime:"1",words:"148"}),s(a),s(n)])}const D=p(d,[["render",o]]);export{_ as __pageData,D as default};
