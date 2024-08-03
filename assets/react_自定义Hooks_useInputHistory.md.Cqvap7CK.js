import{_ as e,a as l,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c as t,I as s,a7 as c,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const H=JSON.parse('{"title":"useInputHistory","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useInputHistory.md","filePath":"react/自定义Hooks/useInputHistory.md","lastUpdated":1710047315000}'),u={name:"react/自定义Hooks/useInputHistory.md"},o=c(`<h1 id="useinputhistory" tabindex="-1">useInputHistory <a class="header-anchor" href="#useinputhistory" aria-label="Permalink to &quot;useInputHistory&quot;">​</a></h1><p>输入记录</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { useEffect, useState } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const InputHistory = {</span></span>
<span class="line"><span>  max: 5,</span></span>
<span class="line"><span>  getList(key: string): string[] {</span></span>
<span class="line"><span>    const list = localStorage.getItem(key)</span></span>
<span class="line"><span>    if (list) {</span></span>
<span class="line"><span>      return JSON.parse(list)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      return []</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  pushItem(key: string, value: any): void {</span></span>
<span class="line"><span>    const list = InputHistory.getList(key) || []</span></span>
<span class="line"><span>    list.unshift(value)</span></span>
<span class="line"><span>    localStorage.setItem(</span></span>
<span class="line"><span>      key,</span></span>
<span class="line"><span>      JSON.stringify([...new Set(list)].slice(0, InputHistory.max))</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useInputHistory = (</span></span>
<span class="line"><span>  key: string,</span></span>
<span class="line"><span>  defaultList = []</span></span>
<span class="line"><span>): [string[], (value: string) =&gt; void] =&gt; {</span></span>
<span class="line"><span>  const [list, setList] = useState&lt;string[]&gt;([])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const setDisplayList = (list: string[]) =&gt; {</span></span>
<span class="line"><span>    if (list.length) {</span></span>
<span class="line"><span>      setList(list)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      setList(defaultList)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const initHistoryList = () =&gt; {</span></span>
<span class="line"><span>    const history = InputHistory.getList(key)</span></span>
<span class="line"><span>    if (history) {</span></span>
<span class="line"><span>      setDisplayList(history)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    initHistoryList()</span></span>
<span class="line"><span>  }, [key])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const pushItem = (value: string) =&gt; {</span></span>
<span class="line"><span>    if (value) {</span></span>
<span class="line"><span>      InputHistory.pushItem(key, value)</span></span>
<span class="line"><span>      initHistoryList()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return [list, pushItem]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>Example:</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>const [searchList, setSearchList] = useInputHistory(&#39;search_user&#39;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6);function m(d,h,y,_,g,f){const n=e,a=l,p=i;return b(),t("div",null,[o,s(n,{readTime:"1",words:"119"}),s(a),s(p)])}const x=r(u,[["render",m]]);export{H as __pageData,x as default};
