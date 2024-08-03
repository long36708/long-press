import{_ as t,a as p,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c,I as a,a7 as o,o as i}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const k=JSON.parse('{"title":"reflect-metadata","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/reflect-metadata.md","filePath":"nodejs/reflect-metadata.md","lastUpdated":1719038302000}'),m={name:"nodejs/reflect-metadata.md"},d=o(`<h1 id="reflect-metadata" tabindex="-1">reflect-metadata <a class="header-anchor" href="#reflect-metadata" aria-label="Permalink to &quot;reflect-metadata&quot;">​</a></h1><p>注意：现在 Decorator 和 Decorator Metadata 都已在 TC39 中达到第 3 阶段，因此不再考虑将下面建议的 API 进行标准化。 但是，此软件包将继续支持利用 TypeScript 旧 --experimentalDecorators 选项的项目，因为某些项目可能无法迁移到使用标准装饰器。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>// define metadata on an object or property</span></span>
<span class="line"><span>Reflect.defineMetadata(metadataKey, metadataValue, target);</span></span>
<span class="line"><span>Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// check for presence of a metadata key on the prototype chain of an object or property</span></span>
<span class="line"><span>let result = Reflect.hasMetadata(metadataKey, target);</span></span>
<span class="line"><span>let result = Reflect.hasMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// check for presence of an own metadata key of an object or property</span></span>
<span class="line"><span>let result = Reflect.hasOwnMetadata(metadataKey, target);</span></span>
<span class="line"><span>let result = Reflect.hasOwnMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// get metadata value of a metadata key on the prototype chain of an object or property</span></span>
<span class="line"><span>let result = Reflect.getMetadata(metadataKey, target);</span></span>
<span class="line"><span>let result = Reflect.getMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// get metadata value of an own metadata key of an object or property</span></span>
<span class="line"><span>let result = Reflect.getOwnMetadata(metadataKey, target);</span></span>
<span class="line"><span>let result = Reflect.getOwnMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// get all metadata keys on the prototype chain of an object or property</span></span>
<span class="line"><span>let result = Reflect.getMetadataKeys(target);</span></span>
<span class="line"><span>let result = Reflect.getMetadataKeys(target, propertyKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// get all own metadata keys of an object or property</span></span>
<span class="line"><span>let result = Reflect.getOwnMetadataKeys(target);</span></span>
<span class="line"><span>let result = Reflect.getOwnMetadataKeys(target, propertyKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// delete metadata from an object or property</span></span>
<span class="line"><span>let result = Reflect.deleteMetadata(metadataKey, target);</span></span>
<span class="line"><span>let result = Reflect.deleteMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// apply metadata via a decorator to a constructor</span></span>
<span class="line"><span>@Reflect.metadata(metadataKey, metadataValue)</span></span>
<span class="line"><span>class C {</span></span>
<span class="line"><span>  // apply metadata via a decorator to a method (property)</span></span>
<span class="line"><span>  @Reflect.metadata(metadataKey, metadataValue)</span></span>
<span class="line"><span>  method() {</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,4);function b(u,f,y,_,h,g){const s=t,n=p,e=l;return i(),c("div",null,[d,a(s,{readTime:"1",words:"289"}),a(n),a(e)])}const v=r(m,[["render",b]]);export{k as __pageData,v as default};
