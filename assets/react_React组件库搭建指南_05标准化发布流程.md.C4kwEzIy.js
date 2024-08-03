import{_ as l,a as r,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as c,c as t,I as n,j as s,a as b,a7 as o,o as m}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const C=JSON.parse('{"title":"React 组件库搭建指南（五）：标准化发布流程","description":"","frontmatter":{},"headers":[],"relativePath":"react/React组件库搭建指南/05标准化发布流程.md","filePath":"react/React组件库搭建指南/05标准化发布流程.md","lastUpdated":1711988933000}'),u={name:"react/React组件库搭建指南/05标准化发布流程.md"},d=s("h1",{id:"react-组件库搭建指南-五-标准化发布流程",tabindex:"-1"},[b("React 组件库搭建指南（五）：标准化发布流程 "),s("a",{class:"header-anchor",href:"#react-组件库搭建指南-五-标准化发布流程","aria-label":'Permalink to "React 组件库搭建指南（五）：标准化发布流程"'},"​")],-1),g=o(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>本节主要是讲解如何编写脚本完成以下内容：</p><p>版本更新 生成 CHANGELOG 推送至 git 仓库 组件库打包 发布至 npm 打 tag 并推送至 git 如果你对这一节不感兴趣，也可以直接使用 np 进行发布，只需要自定义配置一些钩子。</p><p>本项目是使用 np 进行发布的，本节仅作个人学习用。</p><p>package.json</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>+ &quot;release&quot;: &quot;ts-node ./scripts/release.ts&quot;</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>/* eslint-disable  import/no-extraneous-dependencies,@typescript-eslint/camelcase, no-console */</span></span>
<span class="line"><span>import inquirer from &#39;inquirer&#39;;</span></span>
<span class="line"><span>import fs from &#39;fs&#39;;</span></span>
<span class="line"><span>import path from &#39;path&#39;;</span></span>
<span class="line"><span>import child_process from &#39;child_process&#39;;</span></span>
<span class="line"><span>import util from &#39;util&#39;;</span></span>
<span class="line"><span>import chalk from &#39;chalk&#39;;</span></span>
<span class="line"><span>import semverInc from &#39;semver/functions/inc&#39;;</span></span>
<span class="line"><span>import { ReleaseType } from &#39;semver&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import pkg from &#39;../package.json&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const exec = util.promisify(child_process.exec);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const run = async (command: string) =&gt; {</span></span>
<span class="line"><span>  console.log(chalk.green(command));</span></span>
<span class="line"><span>  await exec(command);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const currentVersion = pkg.version;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getNextVersions = (): { [key in ReleaseType]: string | null } =&gt; ({</span></span>
<span class="line"><span>  major: semverInc(currentVersion, &#39;major&#39;),</span></span>
<span class="line"><span>  minor: semverInc(currentVersion, &#39;minor&#39;),</span></span>
<span class="line"><span>  patch: semverInc(currentVersion, &#39;patch&#39;),</span></span>
<span class="line"><span>  premajor: semverInc(currentVersion, &#39;premajor&#39;),</span></span>
<span class="line"><span>  preminor: semverInc(currentVersion, &#39;preminor&#39;),</span></span>
<span class="line"><span>  prepatch: semverInc(currentVersion, &#39;prepatch&#39;),</span></span>
<span class="line"><span>  prerelease: semverInc(currentVersion, &#39;prerelease&#39;),</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const timeLog = (logInfo: string, type: &#39;start&#39; | &#39;end&#39;) =&gt; {</span></span>
<span class="line"><span>  let info = &#39;&#39;;</span></span>
<span class="line"><span>  if (type === &#39;start&#39;) {</span></span>
<span class="line"><span>    info = \`=&gt; 开始任务：\${logInfo}\`;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    info = \`✨ 结束任务：\${logInfo}\`;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const nowDate = new Date();</span></span>
<span class="line"><span>  console.log(</span></span>
<span class="line"><span>    \`[\${nowDate.toLocaleString()}.\${nowDate.getMilliseconds().toString().padStart(3, &#39;0&#39;)}] \${info}</span></span>
<span class="line"><span>    \`,</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 询问获取下一次版本号</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function prompt(): Promise&lt;string&gt; {</span></span>
<span class="line"><span>  const nextVersions = getNextVersions();</span></span>
<span class="line"><span>  const { nextVersion } = await inquirer.prompt([</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      type: &#39;list&#39;,</span></span>
<span class="line"><span>      name: &#39;nextVersion&#39;,</span></span>
<span class="line"><span>      message: \`请选择将要发布的版本 (当前版本 \${currentVersion})\`,</span></span>
<span class="line"><span>      choices: (Object.keys(nextVersions) as Array&lt;ReleaseType&gt;).map((level) =&gt; ({</span></span>
<span class="line"><span>        name: \`\${level} =&gt; \${nextVersions[level]}\`,</span></span>
<span class="line"><span>        value: nextVersions[level],</span></span>
<span class="line"><span>      })),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ]);</span></span>
<span class="line"><span>  return nextVersion;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 更新版本号</span></span>
<span class="line"><span> * @param nextVersion 新版本号</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function updateVersion(nextVersion: string) {</span></span>
<span class="line"><span>  pkg.version = nextVersion;</span></span>
<span class="line"><span>  timeLog(&#39;修改package.json版本号&#39;, &#39;start&#39;);</span></span>
<span class="line"><span>  await fs.writeFileSync(path.resolve(__dirname, &#39;./../package.json&#39;), JSON.stringify(pkg));</span></span>
<span class="line"><span>  await run(&#39;npx prettier package.json --write&#39;);</span></span>
<span class="line"><span>  timeLog(&#39;修改package.json版本号&#39;, &#39;end&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 生成CHANGELOG</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function generateChangelog() {</span></span>
<span class="line"><span>  timeLog(&#39;生成CHANGELOG.md&#39;, &#39;start&#39;);</span></span>
<span class="line"><span>  await run(&#39; npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0&#39;);</span></span>
<span class="line"><span>  timeLog(&#39;生成CHANGELOG.md&#39;, &#39;end&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 将代码提交至git</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function push(nextVersion: string) {</span></span>
<span class="line"><span>  timeLog(&#39;推送代码至git仓库&#39;, &#39;start&#39;);</span></span>
<span class="line"><span>  await run(&#39;git add package.json CHANGELOG.md&#39;);</span></span>
<span class="line"><span>  await run(\`git commit -m &quot;v\${nextVersion}&quot; -n\`);</span></span>
<span class="line"><span>  await run(&#39;git push&#39;);</span></span>
<span class="line"><span>  timeLog(&#39;推送代码至git仓库&#39;, &#39;end&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 组件库打包</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function build() {</span></span>
<span class="line"><span>  timeLog(&#39;组件库打包&#39;, &#39;start&#39;);</span></span>
<span class="line"><span>  await run(&#39;npm run build&#39;);</span></span>
<span class="line"><span>  timeLog(&#39;组件库打包&#39;, &#39;end&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 发布至npm</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function publish() {</span></span>
<span class="line"><span>  timeLog(&#39;发布组件库&#39;, &#39;start&#39;);</span></span>
<span class="line"><span>  await run(&#39;npm publish&#39;);</span></span>
<span class="line"><span>  timeLog(&#39;发布组件库&#39;, &#39;end&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 打tag提交至git</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function tag(nextVersion: string) {</span></span>
<span class="line"><span>  timeLog(&#39;打tag并推送至git&#39;, &#39;start&#39;);</span></span>
<span class="line"><span>  await run(\`git tag v\${nextVersion}\`);</span></span>
<span class="line"><span>  await run(\`git push origin tag v\${nextVersion}\`);</span></span>
<span class="line"><span>  timeLog(&#39;打tag并推送至git&#39;, &#39;end&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main() {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const nextVersion = await prompt();</span></span>
<span class="line"><span>    const startTime = Date.now();</span></span>
<span class="line"><span>    // =================== 更新版本号 ===================</span></span>
<span class="line"><span>    await updateVersion(nextVersion);</span></span>
<span class="line"><span>    // =================== 更新changelog ===================</span></span>
<span class="line"><span>    await generateChangelog();</span></span>
<span class="line"><span>    // =================== 代码推送git仓库 ===================</span></span>
<span class="line"><span>    await push(nextVersion);</span></span>
<span class="line"><span>    // =================== 组件库打包 ===================</span></span>
<span class="line"><span>    await build();</span></span>
<span class="line"><span>    // =================== 发布至npm ===================</span></span>
<span class="line"><span>    await publish();</span></span>
<span class="line"><span>    // =================== 打tag并推送至git ===================</span></span>
<span class="line"><span>    await tag(nextVersion);</span></span>
<span class="line"><span>    console.log(\`✨ 发布流程结束 共耗时\${((Date.now() - startTime) / 1000).toFixed(3)}s\`);</span></span>
<span class="line"><span>  } catch (error) {</span></span>
<span class="line"><span>    console.log(&#39;💣 发布失败，失败原因：&#39;, error);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>每次初始化一个组件就要新建许多文件（夹），复制粘贴也可，不过还可以使用更高级一点的偷懒方式。</p><p>思路如下：</p><p>创建组件模板，预留动态信息插槽（组件名称，组件描述等等）； 基于inquirer.js询问动态信息； 将信息插入模板，渲染至components文件夹下； 向 components/index.ts 插入导出语句。 我们只需要配置好模板以及问题，至于询问以及渲染就交给plop.js吧。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>yarn add plop --dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>新增脚本命令。</p><p>package.json</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>+ &quot;new&quot;: &quot;plop --plopfile ./scripts/plopfile.ts&quot;,</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,16);function h(v,_,f,x,V,k){const a=l,p=r,e=i;return m(),t("div",null,[d,n(a,{readTime:"3",words:"828"}),g,n(p),n(e)])}const L=c(u,[["render",h]]);export{C as __pageData,L as default};
