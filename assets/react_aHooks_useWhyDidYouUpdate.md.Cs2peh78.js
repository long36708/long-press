import{_ as p,a as t,b as h}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as l,c as k,I as s,a7 as e,o as r}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const D=JSON.parse('{"title":"useWhyDidYouUpdate","description":"","frontmatter":{},"headers":[],"relativePath":"react/aHooks/useWhyDidYouUpdate.md","filePath":"react/aHooks/useWhyDidYouUpdate.md","lastUpdated":1719038302000}'),d={name:"react/aHooks/useWhyDidYouUpdate.md"},B=e(`<h1 id="usewhydidyouupdate" tabindex="-1">useWhyDidYouUpdate <a class="header-anchor" href="#usewhydidyouupdate" aria-label="Permalink to &quot;useWhyDidYouUpdate&quot;">​</a></h1><p>useWhyDidYouUpdate 是一个用于跟踪组件更新原因的 Hook。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useWhyDidYouUpdate</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;ahooks&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useState</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;react&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> App</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">props</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">  useWhyDidYouUpdate</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;App&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">props</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">count</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">setCount</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useState</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">        Count:</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">        {</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">      &lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> onClick</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> setCount</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">Increase</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  );</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>在上述代码中，useWhyDidYouUpdate 接收两个参数。</p><p>第一个参数是组件的名字，第二个参数是组件的 props。</p><p>这个 Hook 会在组件更新时打印出更新的原因。</p><p>帮助开发者排查是什么改变导致了组件的 rerender。</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">randomNum</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">setRandomNum</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useState</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">Math</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">random</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">useWhyDidYouUpdate</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;useWhyDidYouUpdateComponent&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, { ...</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">props</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">randomNum</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,9);function o(y,g,c,u,F,A){const i=p,a=t,n=h;return r(),k("div",null,[B,s(i,{readTime:"1",words:"139"}),s(a),s(n)])}const _=l(d,[["render",o]]);export{D as __pageData,_ as default};
