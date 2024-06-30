import{_ as l,a as p,b as h}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as k,I as s,a7 as e,o as r}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const D=JSON.parse('{"title":"use","description":"","frontmatter":{},"headers":[],"relativePath":"react/React19全解/use.md","filePath":"react/React19全解/use.md","lastUpdated":1719758327000}'),d={name:"react/React19全解/use.md"},B=e(`<h1 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;use&quot;">​</a></h1><p>use() 是 React19 提升异步开发体验最重要的 hook。也是让 useEffect 重要性大幅度削弱的主要原因。</p><p>我们可以利用 use 读取 Promise 中的值。也可以使用 use 读取 context 中的资源</p><h2 id="正确理解-promise" tabindex="-1">正确理解 promise <a class="header-anchor" href="#正确理解-promise" aria-label="Permalink to &quot;正确理解 promise&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> value</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> use</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里我们需要特别注意的是，Promise 是指的一个已经创建好的 Promise 对象，并且，在该 promise 对象中已经有了确定的 resolve 的结果，use 读取的是 resolve 的值。</p><p>注意观察一下下面两种写法</p><p>第一种是已经有了结果状态的 Promise 对象</p><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> _api2</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">  resolve</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;_api2&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> });</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// good</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> result</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> use</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">_api2</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第二种是函数运行创建 Promise 对象，此时我们需要注意，虽然 _api3 执行之后会立即返回一个带有 resolve 结果状态的 Promise，但是 use 并不能第一时间读取到其值。</p><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> _api3</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">    resolve</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;_api3&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> });</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// bad: get an error</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> result</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> use</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">_api3</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">());</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果我们按照以往的习惯，直接使用第二种，那么运行之后，React19 会给你如下一个报错。</p><p>::: error</p><p>async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding <code>&#39;use client&#39;</code> to a module that was originally written for the server.</p><p>:::</p><h2 id="在条件判断中使用" tabindex="-1">在条件判断中使用 <a class="header-anchor" href="#在条件判断中使用" aria-label="Permalink to &quot;在条件判断中使用&quot;">​</a></h2><p>和其他 hook 一样，use() 必须在函数组件中使用。</p><p>但是很不一样的是，use 可以在循环和条件判断语句中使用。我们这里如下案例来演示这个结论。</p><p>在这个例子中，use 被使用在 if(!loading) 条件判断中来获取 result 的值。</p><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">use</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useState</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;react&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> Message</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;./Message&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> Button</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;./Button&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> Skeleton</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;./Skeleton&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> _api2</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">  resolve</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook.&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> });</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> Demo01</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">loading</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">setLoading</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useState</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> result</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> };</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">loading</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">    result</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> use</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">_api2</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">    &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">      {</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">loading</span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">Skeleton</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;"> /&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">Message</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> message</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">result</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;"> /&gt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> className</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;mt-4 text-right&quot;</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">Button</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> signal</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> onClick</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> setLoading</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">loading</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">切换</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">Button</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">      &lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">    &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  );</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="在异步请求中使用" tabindex="-1">在异步请求中使用 <a class="header-anchor" href="#在异步请求中使用" aria-label="Permalink to &quot;在异步请求中使用&quot;">​</a></h2><p>通常，我们在处理异步请求时，也会结合 promise 来使用。</p><p>但是我们并不能直接使用 use 来读取异步请求中的 promise，因为我们已经非常明确，<strong>use 只能读取有确定 resolve 结果的 promise 中的值</strong>。</p><p>但是有可能第一时间异步请求包装的 promise 状态为 pending。</p><p>因此在这种情况下，<strong>我们必须结合 <code>Suspense</code> 来使用</strong>。</p><blockquote><p>在实践中，如果我们要读取异步请求的 promise 中的值，必须结合 Suspense 来处理 否则，虽然我们最终读取到了 promise 中的值，内容也顺利渲染出来了，但是中间存在一次明显的闪烁，这种体验非常的糟糕。</p></blockquote><h2 id="在低版本中使用" tabindex="-1">在低版本中使用 <a class="header-anchor" href="#在低版本中使用" aria-label="Permalink to &quot;在低版本中使用&quot;">​</a></h2><p>早在 React 16 的后期版本中，就提供了对 Suspense 的支持，</p><p>因此，我们只需要在这个基础之上，自己定义一个 use 方法，去读取 promise 中的值就可以实现use + Suspense 结合的效果了。</p><p>自定义的代码如下</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> use</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;fulfilled&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  else</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;rejected&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">    throw</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">reason</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  else</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;pending&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">    throw</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  else</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">    promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;pending&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">    promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">then</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">result</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">      promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;fulfilled&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">      promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> result</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">    }, (</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">reason</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">      promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;rejected&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">      promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">reason</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> reason</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">    throw</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> promise</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,32);function g(y,o,c,F,u,C){const i=l,a=p,n=h;return r(),k("div",null,[B,s(i,{readTime:"3",words:"805"}),s(a),s(n)])}const E=t(d,[["render",g]]);export{D as __pageData,E as default};
