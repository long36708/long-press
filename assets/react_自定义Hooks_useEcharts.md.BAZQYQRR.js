import{_ as e,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as c,c as i,I as s,a7 as t,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const k=JSON.parse('{"title":"useEcharts","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useEcharts.md","filePath":"react/自定义Hooks/useEcharts.md","lastUpdated":1710047315000}'),o={name:"react/自定义Hooks/useEcharts.md"},u=t(`<h1 id="useecharts" tabindex="-1">useEcharts <a class="header-anchor" href="#useecharts" aria-label="Permalink to &quot;useEcharts&quot;">​</a></h1><p>动态导入图表</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import type { ECharts } from &#39;echarts&#39;</span></span>
<span class="line"><span>import React, { DependencyList, useEffect, useRef, useState } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const useEchartsLib = () =&gt; {</span></span>
<span class="line"><span>  const [lib, setLib] = useState&lt;typeof import(&#39;echarts&#39;)&gt;(null)</span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    import(&#39;echarts&#39;).then(echarts =&gt; setLib(echarts))</span></span>
<span class="line"><span>  }, [])</span></span>
<span class="line"><span>  return lib</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type UseEchartsResult = [React.MutableRefObject&lt;HTMLDivElement&gt;, boolean]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function useEcharts(</span></span>
<span class="line"><span>  callback: (chart: ECharts) =&gt; any,</span></span>
<span class="line"><span>  deps?: DependencyList</span></span>
<span class="line"><span>): UseEchartsResult</span></span>
<span class="line"><span>export function useEcharts(</span></span>
<span class="line"><span>  options: object,</span></span>
<span class="line"><span>  deps?: DependencyList</span></span>
<span class="line"><span>): UseEchartsResult</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function useEcharts(</span></span>
<span class="line"><span>  options: ((chart: ECharts) =&gt; any | Promise&lt;any&gt;) | object,</span></span>
<span class="line"><span>  deps: DependencyList = []</span></span>
<span class="line"><span>): UseEchartsResult {</span></span>
<span class="line"><span>  const ref = useRef&lt;HTMLDivElement&gt;()</span></span>
<span class="line"><span>  const [loading, setLoading] = useState(false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const echarts = useEchartsLib()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    if (options === null) {</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    setLoading(true)</span></span>
<span class="line"><span>    let chart: ECharts = null</span></span>
<span class="line"><span>    if (echarts) {</span></span>
<span class="line"><span>      chart = echarts.init(ref.current)</span></span>
<span class="line"><span>      if (typeof options === &#39;function&#39;) {</span></span>
<span class="line"><span>        Promise.resolve(options(chart)).then(() =&gt; setLoading(false))</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        chart.setOption(options)</span></span>
<span class="line"><span>        setLoading(false)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return () =&gt; {</span></span>
<span class="line"><span>      if (chart) {</span></span>
<span class="line"><span>        chart.dispose()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }, [echarts, ...deps])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return [ref, loading]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>Example:</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>const [ref, loading] = useEcharts({</span></span>
<span class="line"><span>  data: [],</span></span>
<span class="line"><span>  tooltip: {}</span></span>
<span class="line"><span>}, [])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div ref={ref} /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6);function m(h,d,f,_,g,E){const n=e,a=l,p=r;return b(),i("div",null,[u,s(n,{readTime:"1",words:"149"}),s(a),s(p)])}const C=c(o,[["render",m]]);export{k as __pageData,C as default};
