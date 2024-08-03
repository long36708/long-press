import{_ as e,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as c,c as i,I as s,a7 as t,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const y=JSON.parse('{"title":"useIntersection","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useIntersection.md","filePath":"react/自定义Hooks/useIntersection.md","lastUpdated":1710047315000}'),o={name:"react/自定义Hooks/useIntersection.md"},u=t(`<h1 id="useintersection" tabindex="-1">useIntersection <a class="header-anchor" href="#useintersection" aria-label="Permalink to &quot;useIntersection&quot;">​</a></h1><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { useEffect, useRef } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const map = new WeakMap&lt;Element, (target: Element) =&gt; void&gt;()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let IO: IntersectionObserver = null</span></span>
<span class="line"><span>if (</span></span>
<span class="line"><span>  typeof window !== &#39;undefined&#39; &amp;&amp;</span></span>
<span class="line"><span>  typeof IntersectionObserver !== &#39;undefined&#39;</span></span>
<span class="line"><span>) {</span></span>
<span class="line"><span>  IO = new IntersectionObserver(entries =&gt; {</span></span>
<span class="line"><span>    entries.forEach(item =&gt; {</span></span>
<span class="line"><span>      if (item.isIntersecting) {</span></span>
<span class="line"><span>        map.get(item.target)(item.target)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useIntersection = (</span></span>
<span class="line"><span>  callback: (target: Element) =&gt; void,</span></span>
<span class="line"><span>  enable = true</span></span>
<span class="line"><span>) =&gt; {</span></span>
<span class="line"><span>  const ref = useRef&lt;HTMLElement&gt;()</span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    if (!enable) return</span></span>
<span class="line"><span>    if (IO === null) {</span></span>
<span class="line"><span>      // 如果IO==NULL，说明不支持IntersectionObserver，则直接callback</span></span>
<span class="line"><span>      return callback(ref.current)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    map.set(ref.current, callback)</span></span>
<span class="line"><span>    IO.observe(ref.current)</span></span>
<span class="line"><span>    return () =&gt; {</span></span>
<span class="line"><span>      IO.unobserve(ref.current)</span></span>
<span class="line"><span>      map.delete(ref.current)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }, [callback, enable])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return ref</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>Example:</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import AntdAvatar, { AvatarProps } from &#39;antd/lib/avatar&#39;</span></span>
<span class="line"><span>import React, { useState } from &#39;react&#39;</span></span>
<span class="line"><span>import { useUpdateEffect } from &#39;react-use&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface Avatar extends AvatarProps {</span></span>
<span class="line"><span>  src?: string</span></span>
<span class="line"><span>  lazy?: boolean</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const Avatar = ({ src, lazy = false, ...props }: Avatar) =&gt; {</span></span>
<span class="line"><span>  const [display, setDisplay] = useState&lt;string&gt;(lazy ? null : src)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useUpdateEffect(() =&gt; {</span></span>
<span class="line"><span>    setDisplay(src)</span></span>
<span class="line"><span>  }, [src])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const ref = useIntersection(() =&gt; {</span></span>
<span class="line"><span>    setDisplay(src)</span></span>
<span class="line"><span>  }, lazy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return &lt;AntdAvatar ref={ref} {...props} src={display} /&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const avatar = &lt;Avatar src=&quot;xxx&quot; lazy /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,5);function m(d,f,_,g,v,h){const n=e,a=l,p=r;return b(),i("div",null,[u,s(n,{readTime:"1",words:"163"}),s(a),s(p)])}const A=c(o,[["render",m]]);export{y as __pageData,A as default};
