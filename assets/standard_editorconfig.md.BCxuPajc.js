import{_ as p,a as i,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c as t,I as n,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const x=JSON.parse('{"title":"editorConfig 跨多个编辑器和IDE一致代码风格","description":"","frontmatter":{},"headers":[],"relativePath":"standard/editorconfig.md","filePath":"standard/editorconfig.md","lastUpdated":1708698357000}'),b={name:"standard/editorconfig.md"},d=c(`<h1 id="editorconfig-跨多个编辑器和ide一致代码风格" tabindex="-1">editorConfig 跨多个编辑器和IDE一致代码风格 <a class="header-anchor" href="#editorconfig-跨多个编辑器和ide一致代码风格" aria-label="Permalink to &quot;editorConfig 跨多个编辑器和IDE一致代码风格&quot;">​</a></h1><p>EditorConfig 规范缩进风格，缩进大小，tab长度以及字符集等,解决不同IDE的编码范设置。有助于维护跨多个编辑器和IDE从事同一项目的多个开发人员的一致编码风格</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>EditorConfig项目由一种用于定义编码样式的文件格式和一组文本编辑器插件组成，这些文本编辑器插件使编辑器可以读取文件格式并遵循定义的样式，EditorConfig 文件易于阅读，并且可以与版本控制系统很好地协同工作。</p><p>通俗地讲，就是由于开发人员的习惯不一样，所用的开发编辑器可能不同，在不同的编辑器之间保持代码格式一致的风格。</p><p>EditorConfig 插件会去查找当前编辑文件的所在文件夹或其上级文件夹中是否有 .editorconfig 文件。</p><p>如果有，则编辑器的行为会与 .editorconfig 文件中定义的一致，并且其优先级高于编辑器自身的设置。</p><p>虽然它提供的格式化的配置参数很少，就 3 个，缩进风格、是否在文件末尾插入新行和是否删除一行中前后空格。</p><p>但是它还是非常有必要存在的，理由有 3 个：</p><ul><li>能够在不同的编辑器和 IDE 中保持一致的代码风格；</li><li>配合插件打开文件即自动格式化，非常方便</li><li>支持格式化的文件类型很多；</li></ul><p>如果需要让以上的配置生效，还得在 VSCode 里安装 EditorConfig for VS Code 这个插件配合使用。</p><div class="tip custom-block"><p class="custom-block-title">重点来了</p><p>可以看到 EditorConfig 和 Prettier 会存在一些重复的配置，比如都提供了对缩进的配置参数，所以在实际使用的时候需要避免它们，或者把他们的参数设置为一致。</p></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> editorconfig</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>对于vscode，需要安装扩展：EditorConfig for VS Code，然后项目根目录添加文件 .editorconfig，编写以下配置，更多配置参考 官网-editorconfig.org：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># EditorConfig is awesome: https://EditorConfig.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span># top-most EditorConfig file</span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Unix-style newlines with a newline ending every file</span></span>
<span class="line"><span>[*]</span></span>
<span class="line"><span>end_of_line = crlf</span></span>
<span class="line"><span>insert_final_newline = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Matches multiple files with brace expansion notation</span></span>
<span class="line"><span># Set default charset</span></span>
<span class="line"><span>[*.{js}]</span></span>
<span class="line"><span>charset = utf-8</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Tab indentation (no size specified)</span></span>
<span class="line"><span># 可以是tab 或 space</span></span>
<span class="line"><span># Indentation override for all JS under lib directory</span></span>
<span class="line"><span>[lib/**.js]</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span>trim_trailing_whitespace = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Matches the exact files either package.json</span></span>
<span class="line"><span>[{package.json}]</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*.md]</span></span>
<span class="line"><span>insert_final_newline = false</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># Editor configuration, see http://editorconfig.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 表示最顶层的 EditorConfig 配置文件</span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*] # 表示所有文件适用</span></span>
<span class="line"><span>charset = utf-8 # 设置文件字符集为 utf-8</span></span>
<span class="line"><span>indent_style = space # 缩进风格（tab | space）</span></span>
<span class="line"><span>indent_size = 2 # 缩进大小</span></span>
<span class="line"><span>end_of_line = lf # 控制换行类型(lf | cr | crlf)</span></span>
<span class="line"><span>trim_trailing_whitespace = true # 去除行首的任意空白字符</span></span>
<span class="line"><span>insert_final_newline = true # 始终在文件末尾插入一个新行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*.md] # 表示仅 md 文件适用以下规则</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span>
<span class="line"><span>insert_final_newline = false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,19);function u(m,h,f,_,g,k){const s=p,a=i,e=l;return o(),t("div",null,[d,n(s,{readTime:"2",words:"751"}),n(a),n(e)])}const y=r(b,[["render",u]]);export{x as __pageData,y as default};
