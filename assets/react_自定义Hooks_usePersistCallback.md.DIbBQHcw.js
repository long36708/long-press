import{_ as t,a as l,b as e}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as k,c as h,I as s,a7 as p,o as r}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const A=JSON.parse('{"title":"usePersistCallback react useCallback完美替代方案","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/usePersistCallback.md","filePath":"react/自定义Hooks/usePersistCallback.md","lastUpdated":1713718044000}'),c={name:"react/自定义Hooks/usePersistCallback.md"},d=p(`<h1 id="usepersistcallback-react-usecallback完美替代方案" tabindex="-1">usePersistCallback react useCallback完美替代方案 <a class="header-anchor" href="#usepersistcallback-react-usecallback完美替代方案" aria-label="Permalink to &quot;usePersistCallback react useCallback完美替代方案&quot;">​</a></h1><p>react函数组件为了保持引用不变，很多时候需要借助useCallback，但是useCallback强依赖于外部变量，必须传个依赖变量，万一漏传了很容易出问题。比较函数复杂时较麻烦，使用这个即可完美解决，引用不变，调用肯定是最新的，并且不需依赖</p><p>just 记录方便cp</p><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> usePersistCallback</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (...</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">[]) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">fn</span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> ref</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useRef</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	ref</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">current</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> fn</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useCallback</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		(...</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">			const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> fn</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> ref</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">current</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">			return</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> fn</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> fn</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(...</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">args</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		},</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		[</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">ref</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,5);function B(o,g,y,b,u,C){const i=t,a=l,n=e;return r(),h("div",null,[d,s(i,{readTime:"1",words:"140"}),s(a),s(n)])}const f=k(c,[["render",B]]);export{A as __pageData,f as default};
