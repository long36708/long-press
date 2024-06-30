import{_ as l,a as p,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as h,c as k,I as s,a7 as e,o as r}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const E=JSON.parse('{"title":"useRouter","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useRouter2.md","filePath":"react/自定义Hooks/useRouter2.md","lastUpdated":1719038302000}'),B={name:"react/自定义Hooks/useRouter2.md"},d=e(`<h1 id="userouter" tabindex="-1">useRouter <a class="header-anchor" href="#userouter" aria-label="Permalink to &quot;useRouter&quot;">​</a></h1><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useMemo</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;react&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">  useHistory</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">  useLocation</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">  useParams</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">  useRouteMatch</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;react-router-dom&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">parse</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;query-string&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">@hook</span><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> useRouter</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">@desc</span><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> react-router-dom 路由相关的 hook 整合</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useRouter</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> history</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useHistory</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> location</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useLocation</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> params</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useParams</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> match</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useRouteMatch</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">pathname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> location</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">push</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">replace</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">goBack</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">go</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">search</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> history</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // example:: /:topic?sort=popular -&gt; { topic: &quot;react&quot;, sort: &quot;popular&quot; }</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> query</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { ...</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">parse</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">search</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">), ...</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">params</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useMemo</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">    () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> ({</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // alias here</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      push</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      replace</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      goBack</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      go</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      pathname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      query</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      match</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      location</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">      history</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">    [</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">params</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">match</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">location</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">history</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  );</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> useRouter</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,3);function c(y,o,g,u,F,b){const i=l,a=p,n=t;return r(),k("div",null,[d,s(i,{readTime:"1",words:"100"}),s(a),s(n)])}const D=h(B,[["render",c]]);export{E as __pageData,D as default};
