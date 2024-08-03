import{_ as p,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as o,c,I as s,a7 as i,o as t}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const D=JSON.parse('{"title":"useExcelDownLoad","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useExcelDownLoad.md","filePath":"react/自定义Hooks/useExcelDownLoad.md","lastUpdated":1710047315000}'),b={name:"react/自定义Hooks/useExcelDownLoad.md"},m=i(`<h1 id="useexceldownload" tabindex="-1">useExcelDownLoad <a class="header-anchor" href="#useexceldownload" aria-label="Permalink to &quot;useExcelDownLoad&quot;">​</a></h1><p>传参为接口名，参数，和导出的excel文件名</p><p>返回为loading 和下载的函数</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import axios from &#39;axios&#39;;</span></span>
<span class="line"><span>import { showMessage } from &#39;common/props/messageProps&#39;;</span></span>
<span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span>interface useExcelDownLoadType&lt;T&gt; {</span></span>
<span class="line"><span>  url: string;</span></span>
<span class="line"><span>  params: T;</span></span>
<span class="line"><span>  fileName: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export const useExcelDownLoad = &lt;T&gt;(props: useExcelDownLoadType&lt;T&gt;) =&gt; {</span></span>
<span class="line"><span>  const { url, params, fileName } = props;</span></span>
<span class="line"><span>  const [loading, setLoading] = useState(false);</span></span>
<span class="line"><span>  const handleDownLoad = async () =&gt; {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      setLoading(true);</span></span>
<span class="line"><span>      const { data } = await axios.post(</span></span>
<span class="line"><span>        url,</span></span>
<span class="line"><span>        { ...params },</span></span>
<span class="line"><span>        { responseType: &#39;blob&#39; } // 设置请求的响应类型为blob</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>      const downloadLink = document.createElement(&#39;a&#39;);</span></span>
<span class="line"><span>      const fileBlob = new Blob([data], { type: &#39;application/octet-stream&#39; });</span></span>
<span class="line"><span>      const fileURL = URL.createObjectURL(fileBlob);</span></span>
<span class="line"><span>      downloadLink.href = fileURL;</span></span>
<span class="line"><span>      downloadLink.download = \`\${fileName}.xlsx\`;</span></span>
<span class="line"><span>      downloadLink.click();</span></span>
<span class="line"><span>      URL.revokeObjectURL(fileURL);</span></span>
<span class="line"><span>    } catch (error) {</span></span>
<span class="line"><span>      showMessage(&#39;error&#39;, (error as Error).message);</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>      setLoading(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  return { loading, handleDownLoad };</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,5);function u(d,_,f,h,x,L){const n=p,a=l,e=r;return t(),c("div",null,[m,s(n,{readTime:"1",words:"140"}),s(a),s(e)])}const E=o(b,[["render",u]]);export{D as __pageData,E as default};
