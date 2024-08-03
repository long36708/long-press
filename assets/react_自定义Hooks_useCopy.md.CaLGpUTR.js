import{_ as e,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as i,I as s,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const k=JSON.parse('{"title":"useCopy","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useCopy.md","filePath":"react/自定义Hooks/useCopy.md","lastUpdated":1710047315000}'),b={name:"react/自定义Hooks/useCopy.md"},u=c(`<h1 id="usecopy" tabindex="-1">useCopy <a class="header-anchor" href="#usecopy" aria-label="Permalink to &quot;useCopy&quot;">​</a></h1><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { message } from &#39;antd&#39;</span></span>
<span class="line"><span>import ClipboardJS from &#39;clipboard&#39;</span></span>
<span class="line"><span>import { DependencyList, useEffect, useRef } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useCopy = &lt;</span></span>
<span class="line"><span>  Button extends HTMLElement = any,</span></span>
<span class="line"><span>  Target extends HTMLElement = any</span></span>
<span class="line"><span>&gt;(</span></span>
<span class="line"><span>  init: (cp: ClipboardJS) =&gt; void | VoidFunction = cp =&gt; {</span></span>
<span class="line"><span>    cp.on(&#39;success&#39;, () =&gt; message.success(&#39;复制成功&#39;))</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  deps: DependencyList = []</span></span>
<span class="line"><span>) =&gt; {</span></span>
<span class="line"><span>  const ref = useRef&lt;Button&gt;()</span></span>
<span class="line"><span>  const targetRef = useRef&lt;Target&gt;()</span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    const targetId = \`Clipboard-Target-\${Date.now()}\`</span></span>
<span class="line"><span>    if (ref.current) {</span></span>
<span class="line"><span>      ref.current.setAttribute(&#39;data-clipboard-target&#39;, \`#\${targetId}\`)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (targetRef.current) {</span></span>
<span class="line"><span>      targetRef.current.id = targetId</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      ref.current.id = targetId</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const cp = new ClipboardJS(ref.current)</span></span>
<span class="line"><span>    init &amp;&amp; init(cp)</span></span>
<span class="line"><span>    return () =&gt; cp.destroy()</span></span>
<span class="line"><span>  }, deps)</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    button: ref,</span></span>
<span class="line"><span>    target: targetRef,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>Example:</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>const copy = useCopy()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div ref={copy.target}&gt;内容&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div ref={copy.button}&gt;按钮&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,5);function m(d,g,f,_,h,y){const n=e,a=l,p=r;return o(),i("div",null,[u,s(n,{readTime:"1",words:"114"}),s(a),s(p)])}const T=t(b,[["render",m]]);export{k as __pageData,T as default};
