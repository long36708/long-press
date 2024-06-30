import{_ as p,a as r,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as i,I as s,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const q=JSON.parse('{"title":".fatherrc.ts配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"standard/fatherrc.ts配置文件.md","filePath":"standard/fatherrc.ts配置文件.md","lastUpdated":1711902617000}'),d={name:"standard/fatherrc.ts配置文件.md"},b=c(`<h1 id="fatherrc-ts配置文件" tabindex="-1">.fatherrc.ts配置文件 <a class="header-anchor" href="#fatherrc-ts配置文件" aria-label="Permalink to &quot;.fatherrc.ts配置文件&quot;">​</a></h1><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { defineConfig } from &#39;father&#39;</span></span>
<span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 配置项文档：https://github.com/umijs/father/blob/master/docs/config.md</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  input: &#39;src&#39;,   // 默认打包目录：</span></span>
<span class="line"><span>  output: &#39;dist&#39;, // 默认打包输出目录</span></span>
<span class="line"><span>  esm: {}, // 需要打ESModule包</span></span>
<span class="line"><span>  cjs: {}, // 需要打Commonjs包</span></span>
<span class="line"><span>  umd: {}, // 需要打umd全局引入包</span></span>
<span class="line"><span>  alias: { // 自定义引入别名</span></span>
<span class="line"><span>    &#39;@&#39;: path.resolve(__dirname, &#39;./src&#39;),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  platform: &#39;browser&#39;, // 包使用平台浏览器</span></span>
<span class="line"><span>  plugins: [&#39;./scripts/publish-father-plugin&#39;], // 打包插件</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="安装father" tabindex="-1">安装father <a class="header-anchor" href="#安装father" aria-label="Permalink to &quot;安装father&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>npm install father -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>package.json 添加打包命令</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;father build&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,7);function u(m,h,_,f,v,g){const a=p,n=r,e=l;return o(),i("div",null,[b,s(a,{readTime:"1",words:"140"}),s(n),s(e)])}const P=t(d,[["render",u]]);export{q as __pageData,P as default};
