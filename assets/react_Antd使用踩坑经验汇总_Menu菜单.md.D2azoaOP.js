import{_ as s,a as o,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as l,c as i,I as e,a7 as p,o as c}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const k=JSON.parse('{"title":"Menu菜单","description":"","frontmatter":{},"headers":[],"relativePath":"react/Antd使用踩坑经验汇总/Menu菜单.md","filePath":"react/Antd使用踩坑经验汇总/Menu菜单.md","lastUpdated":1710047315000}'),d={name:"react/Antd使用踩坑经验汇总/Menu菜单.md"},u=p(`<h1 id="menu菜单" tabindex="-1">Menu菜单 <a class="header-anchor" href="#menu菜单" aria-label="Permalink to &quot;Menu菜单&quot;">​</a></h1><h2 id="在-flex-布局中-menu-没有按照预期响应式省略菜单" tabindex="-1">在 Flex 布局中，Menu 没有按照预期响应式省略菜单？ <a class="header-anchor" href="#在-flex-布局中-menu-没有按照预期响应式省略菜单" aria-label="Permalink to &quot;在 Flex 布局中，Menu 没有按照预期响应式省略菜单？&quot;">​</a></h2><p>Menu 初始化时会先全部渲染，然后根据宽度裁剪内容。 当处于 Flex 布局中，你需要告知其预期宽度为响应式宽度：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&lt;div style={{ flex }}&gt;</span></span>
<span class="line"><span>&lt;div style={{ ... }}&gt;Some Content&lt;/div&gt;</span></span>
<span class="line"><span>&lt;Menu style={{ minWidth: 0, flex: &quot;auto&quot; }} /&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>selectable 是否被选中</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6);function _(m,h,b,f,x,v){const a=s,n=o,t=r;return c(),i("div",null,[u,e(a,{readTime:"1",words:"94"}),e(n),e(t)])}const q=l(d,[["render",_]]);export{k as __pageData,q as default};
