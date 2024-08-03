import{_ as p,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c,I as s,a7 as i,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const C=JSON.parse('{"title":"useInterval","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useInterval.md","filePath":"react/自定义Hooks/useInterval.md","lastUpdated":1710047315000}'),b={name:"react/自定义Hooks/useInterval.md"},u=i(`<h1 id="useinterval" tabindex="-1">useInterval <a class="header-anchor" href="#useinterval" aria-label="Permalink to &quot;useInterval&quot;">​</a></h1><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { useEffect, useRef } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Delay = number | null</span></span>
<span class="line"><span>type TimerHandler = (...args: any[]) =&gt; void</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useInterval = (callback: TimerHandler, delay: Delay) =&gt; {</span></span>
<span class="line"><span>  const savedCallbackRef = useRef&lt;TimerHandler&gt;()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    savedCallbackRef.current = callback</span></span>
<span class="line"><span>  }, [callback])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    const handler = (...args: any[]) =&gt; savedCallbackRef.current!(...args)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (delay !== null) {</span></span>
<span class="line"><span>      const intervalId = setInterval(handler, delay)</span></span>
<span class="line"><span>      return () =&gt; clearInterval(intervalId)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }, [delay])</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,3);function m(d,_,f,v,h,g){const n=p,a=l,e=r;return o(),c("div",null,[u,s(n,{readTime:"1",words:"57"}),s(a),s(e)])}const T=t(b,[["render",m]]);export{C as __pageData,T as default};
