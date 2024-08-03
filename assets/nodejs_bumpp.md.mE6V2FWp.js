import{_ as e,a as o,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as r,I as s,a7 as i,o as c}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const x=JSON.parse('{"title":"bumpp修改版本号的npm","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/bumpp.md","filePath":"nodejs/bumpp.md","lastUpdated":1720367503000}'),u={name:"nodejs/bumpp.md"},m=i(`<h1 id="bumpp修改版本号的npm" tabindex="-1">bumpp修改版本号的npm <a class="header-anchor" href="#bumpp修改版本号的npm" aria-label="Permalink to &quot;bumpp修改版本号的npm&quot;">​</a></h1><p><a href="https://www.npmjs.com/package/bumpp" target="_blank" rel="noreferrer">https://www.npmjs.com/package/bumpp</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { execSync } from &quot;child_process&quot;;</span></span>
<span class="line"><span>import { readJSONSync } from &quot;fs-extra&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { version: oldVersion } = readJSONSync(&quot;package.json&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>execSync(&quot;bumpp --no-commit --no-tag --no-push&quot;, { stdio: &quot;inherit&quot; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { version } = readJSONSync(&quot;package.json&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (oldVersion === version) {</span></span>
<span class="line"><span>  console.log(&quot;canceled&quot;);</span></span>
<span class="line"><span>  process.exit();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>execSync(&quot;git add .&quot;, { stdio: &quot;inherit&quot; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>execSync(\`git commit -m &quot;chore: release v\${version}&quot;\`, { stdio: &quot;inherit&quot; });</span></span>
<span class="line"><span>execSync(\`git tag -a v\${version} -m &quot;v\${version}&quot;\`, { stdio: &quot;inherit&quot; });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>package.json</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;scripts&quot;: {</span></span>
<span class="line"><span>        &quot;release&quot;: &quot;tsx release.ts&quot;,</span></span>
<span class="line"><span>        &quot;pb&quot;: &quot;npm run release &amp; npm publish&quot;,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6);function b(d,q,_,h,v,g){const n=e,a=o,p=l;return c(),r("div",null,[m,s(n,{readTime:"1",words:"95"}),s(a),s(p)])}const y=t(u,[["render",b]]);export{x as __pageData,y as default};
