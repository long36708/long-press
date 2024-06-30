import{_ as p,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as i,c as t,I as s,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const k=JSON.parse('{"title":"idea 注释模板配置","description":"","frontmatter":{},"headers":[],"relativePath":"tools/idea 注释模板配置.md","filePath":"tools/idea 注释模板配置.md","lastUpdated":1715494022000}'),b={name:"tools/idea 注释模板配置.md"},u=c(`<h1 id="idea-注释模板配置" tabindex="-1">idea 注释模板配置 <a class="header-anchor" href="#idea-注释模板配置" aria-label="Permalink to &quot;idea 注释模板配置&quot;">​</a></h1><h2 id="类注释" tabindex="-1">类注释 <a class="header-anchor" href="#类注释" aria-label="Permalink to &quot;类注释&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @ClassName: \${NAME}.java</span></span>
<span class="line"><span> * @author: longmo</span></span>
<span class="line"><span> * @version: 1.0.0</span></span>
<span class="line"><span> * @Description: TODO</span></span>
<span class="line"><span> * @createTime: \${DATE} \${TIME}</span></span>
<span class="line"><span> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="自定义注释" tabindex="-1">自定义注释 <a class="header-anchor" href="#自定义注释" aria-label="Permalink to &quot;自定义注释&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span> /**</span></span>
<span class="line"><span> * @ClassName: $NAME$.java</span></span>
<span class="line"><span> * @author: longmo</span></span>
<span class="line"><span> * @version: 1.0.0</span></span>
<span class="line"><span> * @Description: TODO</span></span>
<span class="line"><span> * @createTime: $date$ $time$</span></span>
<span class="line"><span> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="方法注释" tabindex="-1">方法注释 <a class="header-anchor" href="#方法注释" aria-label="Permalink to &quot;方法注释&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @methendName: $name$</span></span>
<span class="line"><span> * @description: TODO</span></span>
<span class="line"><span> * @param $params$</span></span>
<span class="line"><span> * @return $return$</span></span>
<span class="line"><span> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>param:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>groovyScript(&quot;def result=&#39;&#39;; def stop=false; def params=\\&quot;\${_1}\\&quot;.replaceAll(&#39;[\\\\\\\\[|\\\\\\\\]|\\\\\\\\s]&#39;, &#39;&#39;).split(&#39;,&#39;).toList(); if (params.size()==1 &amp;&amp; (params[0]==null || params[0]==&#39;null&#39; || params[0]==&#39;&#39;)) { stop=true; }; if(!stop) { for(i=0; i &lt; params.size(); i++) {result +=((i==0) ? &#39;\\\\r\\\\n&#39; : &#39;&#39;) + ((i &lt; params.size() - 1) ? &#39; * @param: &#39; + params[i] + &#39;\\\\r\\\\n&#39; : &#39; * @param: &#39; + params[i] + &#39;&#39;)}; }; return result;&quot;, methodParameters())</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>return:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>groovyScript(&quot;def result=&#39;&#39;; def data=\\&quot;\${_1}\\&quot;; def stop=false; if(data==null || data==&#39;null&#39; || data==&#39;&#39; || data==&#39;void&#39; ) { stop=true; }; if(!stop) { result += &#39;\\\\r\\\\n&#39; + &#39; * @return: &#39; + data; }; return result;&quot;, methodReturnType())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>*注：</span></span>
<span class="line"><span>\${PACKAGE_NAME} : 包路径</span></span>
<span class="line"><span>\${NAME} : 文件名</span></span>
<span class="line"><span>\${USER} ： 主机用户名</span></span>
<span class="line"><span>\${DATE} ： 系统当前日期，格式为：yyyy/mm/dd</span></span>
<span class="line"><span>\${TIME} ： 系统当前时间 格式为：HH:mm</span></span>
<span class="line"><span>\${YEAR}：当前年</span></span>
<span class="line"><span>\${MONTH}：当前月</span></span>
<span class="line"><span>\${MONTH_NAME_SHORT} ： 月份名称简写；如：Jan, Feb, etc.</span></span>
<span class="line"><span>\${MONTH_NAME_FULL} ： 月份名称全拼；如：January, February.</span></span>
<span class="line"><span>\${DAY} ：当前天</span></span>
<span class="line"><span>\${DAY_NAME_SHORT} ：星期简写；如：Mon, Tue, etc.</span></span>
<span class="line"><span>\${DAY_NAME_FULL}：星期全写；如：Mon, Tue, etc.</span></span>
<span class="line"><span>\${HOUR} ： 当前小时</span></span>
<span class="line"><span>\${MINUTE} ：当前分钟</span></span>
<span class="line"><span>\${PROJECT_NAME} ： 项目名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,12);function d(m,h,_,v,$,f){const a=p,n=l,e=r;return o(),t("div",null,[u,s(a,{readTime:"1",words:"257"}),s(n),s(e)])}const A=i(b,[["render",d]]);export{k as __pageData,A as default};
