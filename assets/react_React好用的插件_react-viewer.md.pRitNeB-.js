import{_ as p,a as i,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c as t,I as s,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const k=JSON.parse('{"title":"react-viewer 图片查看插件","description":"","frontmatter":{},"headers":[],"relativePath":"react/React好用的插件/react-viewer.md","filePath":"react/React好用的插件/react-viewer.md","lastUpdated":1709970389000}'),b={name:"react/React好用的插件/react-viewer.md"},m=c(`<h1 id="react-viewer-图片查看插件" tabindex="-1">react-viewer 图片查看插件 <a class="header-anchor" href="#react-viewer-图片查看插件" aria-label="Permalink to &quot;react-viewer 图片查看插件&quot;">​</a></h1><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>//https://www.npmjs.com/package/react-viewer#viewerimagesize</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Viewer from &#39;react-viewer&#39;;  ///图片查看插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>showInspectionSheet =(files,index) =&gt;{</span></span>
<span class="line"><span>    let imageList = [];</span></span>
<span class="line"><span>    files.map((item)=&gt;{</span></span>
<span class="line"><span>        imageList.push({src:item.file})</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    // console.log(imageList)</span></span>
<span class="line"><span>    this.setState({</span></span>
<span class="line"><span>        visible:true,</span></span>
<span class="line"><span>        imageList:imageList,</span></span>
<span class="line"><span>        activeIndex:index,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>};                  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Viewer</span></span>
<span class="line"><span>    visible={visible}</span></span>
<span class="line"><span>    onClose={()=&gt;{</span></span>
<span class="line"><span>        this.setState({</span></span>
<span class="line"><span>            visible:false</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }}</span></span>
<span class="line"><span>    activeIndex={activeIndex}</span></span>
<span class="line"><span>    images={imageList}</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,3);function u(d,_,h,v,g,f){const n=p,a=i,e=l;return o(),t("div",null,[m,s(n,{readTime:"1",words:"60"}),s(a),s(e)])}const I=r(b,[["render",u]]);export{k as __pageData,I as default};
