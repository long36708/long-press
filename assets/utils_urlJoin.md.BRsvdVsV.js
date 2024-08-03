import{_ as l,a as e,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c as t,I as s,a7 as c,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const F=JSON.parse('{"title":"urlJoin","description":"","frontmatter":{},"headers":[],"relativePath":"utils/urlJoin.md","filePath":"utils/urlJoin.md","lastUpdated":1720343397000}'),u={name:"utils/urlJoin.md"},o=c(`<h1 id="urljoin" tabindex="-1">urlJoin <a class="header-anchor" href="#urljoin" aria-label="Permalink to &quot;urlJoin&quot;">​</a></h1><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * A copy of https://github.com/moxystudio/js-proper-url-join/blob/master/src/index.js</span></span>
<span class="line"><span> * but without the query handling.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const urlRegExp = /^(\\w+:\\/\\/[^/?]+)?(.*?)$/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface UrlJoinOptions {</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * Add a leading slash.</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * **Default**: \`true\`</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  leadingSlash?: boolean | &#39;keep&#39; | undefined</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * Add a trailing slash.</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * **Default**: \`false\`</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  trailingSlash?: boolean | &#39;keep&#39; | undefined</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const normalizeParts = (parts: string[]) =&gt;</span></span>
<span class="line"><span>  parts</span></span>
<span class="line"><span>    // Filter non-string or non-numeric values</span></span>
<span class="line"><span>    .filter((part) =&gt; typeof part === &#39;string&#39; || typeof part === &#39;number&#39;)</span></span>
<span class="line"><span>    // Convert to strings</span></span>
<span class="line"><span>    .map((part) =&gt; \`\${part}\`)</span></span>
<span class="line"><span>    // Remove empty parts</span></span>
<span class="line"><span>    .filter((part) =&gt; part)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const parseParts = (parts: string[]) =&gt; {</span></span>
<span class="line"><span>  const partsStr = parts.join(&#39;/&#39;)</span></span>
<span class="line"><span>  const [, prefix = &#39;&#39;, pathname = &#39;&#39;] = partsStr.match(urlRegExp) || []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    prefix,</span></span>
<span class="line"><span>    pathname: {</span></span>
<span class="line"><span>      parts: pathname.split(&#39;/&#39;).filter((part) =&gt; part !== &#39;&#39;),</span></span>
<span class="line"><span>      hasLeading: /^\\/+/.test(pathname),</span></span>
<span class="line"><span>      hasTrailing: /\\/+$/.test(pathname)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const buildUrl = (parsedParts: ReturnType&lt;typeof parseParts&gt;, options: UrlJoinOptions) =&gt; {</span></span>
<span class="line"><span>  const { prefix, pathname } = parsedParts</span></span>
<span class="line"><span>  const { parts: pathnameParts, hasLeading, hasTrailing } = pathname</span></span>
<span class="line"><span>  const { leadingSlash, trailingSlash } = options</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const addLeading = leadingSlash === true || (leadingSlash === &#39;keep&#39; &amp;&amp; hasLeading)</span></span>
<span class="line"><span>  const addTrailing = trailingSlash === true || (trailingSlash === &#39;keep&#39; &amp;&amp; hasTrailing)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Start with prefix if not empty (http://google.com)</span></span>
<span class="line"><span>  let url = prefix</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Add the parts</span></span>
<span class="line"><span>  if (pathnameParts.length &gt; 0) {</span></span>
<span class="line"><span>    if (url || addLeading) {</span></span>
<span class="line"><span>      url += &#39;/&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    url += pathnameParts.join(&#39;/&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Add trailing to the end</span></span>
<span class="line"><span>  if (addTrailing) {</span></span>
<span class="line"><span>    url += &#39;/&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Add leading if URL is still empty</span></span>
<span class="line"><span>  if (!url &amp;&amp; addLeading) {</span></span>
<span class="line"><span>    url += &#39;/&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return url</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const urlJoin = (...parts: Array&lt;string | UrlJoinOptions&gt;) =&gt; {</span></span>
<span class="line"><span>  const lastArg = parts[parts.length - 1]</span></span>
<span class="line"><span>  let options: UrlJoinOptions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // If last argument is an object, then it&#39;s the options</span></span>
<span class="line"><span>  // Note that null is an object, so we verify if is truthy</span></span>
<span class="line"><span>  if (lastArg &amp;&amp; typeof lastArg === &#39;object&#39;) {</span></span>
<span class="line"><span>    options = lastArg</span></span>
<span class="line"><span>    parts = parts.slice(0, -1)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Parse options</span></span>
<span class="line"><span>  options = {</span></span>
<span class="line"><span>    leadingSlash: true,</span></span>
<span class="line"><span>    trailingSlash: false,</span></span>
<span class="line"><span>    ...options</span></span>
<span class="line"><span>  } as UrlJoinOptions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Normalize parts before parsing them</span></span>
<span class="line"><span>  parts = normalizeParts(parts as string[])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Split the parts into prefix, pathname</span></span>
<span class="line"><span>  // (scheme://host)(/pathnameParts.join(&#39;/&#39;))</span></span>
<span class="line"><span>  const parsedParts = parseParts(parts as string[])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Finally build the url based on the parsedParts</span></span>
<span class="line"><span>  return buildUrl(parsedParts, options)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div><h2 id="encodepath" tabindex="-1">encodePath <a class="header-anchor" href="#encodepath" aria-label="Permalink to &quot;encodePath&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> encodePath</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">path</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> encodeURIComponent</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;%2F&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">join</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;/&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,5);function m(h,d,g,k,f,y){const n=l,a=e,p=i;return b(),t("div",null,[o,s(n,{readTime:"1",words:"305"}),s(a),s(p)])}const P=r(u,[["render",m]]);export{F as __pageData,P as default};
