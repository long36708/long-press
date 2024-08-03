import{_ as e,a as l,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c,I as s,a7 as t,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const C=JSON.parse('{"title":"useLoadScript","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useLoadScript.md","filePath":"react/自定义Hooks/useLoadScript.md","lastUpdated":1710047315000}'),o={name:"react/自定义Hooks/useLoadScript.md"},u=t(`<h1 id="useloadscript" tabindex="-1">useLoadScript <a class="header-anchor" href="#useloadscript" aria-label="Permalink to &quot;useLoadScript&quot;">​</a></h1><h2 id="按需加载js" tabindex="-1">按需加载js <a class="header-anchor" href="#按需加载js" aria-label="Permalink to &quot;按需加载js&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { useEffect, useRef, useState } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Cache = {</span></span>
<span class="line"><span>  dom: HTMLScriptElement</span></span>
<span class="line"><span>  lib: any</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const map = new Map&lt;string, Cache&gt;()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useLoadScript = &lt;T&gt;(</span></span>
<span class="line"><span>  name: string,</span></span>
<span class="line"><span>  src: string,</span></span>
<span class="line"><span>  deps: any[] = []</span></span>
<span class="line"><span>): [T, boolean] =&gt; {</span></span>
<span class="line"><span>  const ref = useRef&lt;T&gt;()</span></span>
<span class="line"><span>  const [loading, setLoading] = useState(true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const loadLib = () =&gt; {</span></span>
<span class="line"><span>    const cache = map.get(name) || ({} as Cache)</span></span>
<span class="line"><span>    cache.lib = window[name]</span></span>
<span class="line"><span>    map.set(name, cache)</span></span>
<span class="line"><span>    ref.current = cache.lib</span></span>
<span class="line"><span>    setLoading(false)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    const cache = map.get(name) || ({} as Cache)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (cache.lib) {</span></span>
<span class="line"><span>      ref.current = cache.lib</span></span>
<span class="line"><span>      setLoading(false)</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (cache.dom) {</span></span>
<span class="line"><span>      cache.dom.addEventListener(&#39;load&#39;, loadLib)</span></span>
<span class="line"><span>      return () =&gt; cache.dom.removeEventListener(&#39;load&#39;, loadLib)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const script = document.createElement(&#39;script&#39;)</span></span>
<span class="line"><span>    script.src = src</span></span>
<span class="line"><span>    script.type = &#39;text/javascript&#39;</span></span>
<span class="line"><span>    script.crossOrigin = &#39;true&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    script.addEventListener(&#39;load&#39;, loadLib)</span></span>
<span class="line"><span>    document.body.append(script)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cache.dom = script</span></span>
<span class="line"><span>    map.set(name, cache)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return () =&gt; script.removeEventListener(&#39;load&#39;, loadLib)</span></span>
<span class="line"><span>  }, deps)</span></span>
<span class="line"><span>  return [ref.current, loading]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h2 id="use" tabindex="-1">Use: <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use:&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">Hls</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">loading</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useLoadScript</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">Hls</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">	&#39;Hls&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">	&#39;https://cdn.jsdelivr.net/npm/hls.js@alpha&#39;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6);function d(m,h,k,g,_,f){const n=e,a=l,p=i;return b(),c("div",null,[u,s(n,{readTime:"1",words:"140"}),s(a),s(p)])}const L=r(o,[["render",d]]);export{C as __pageData,L as default};
