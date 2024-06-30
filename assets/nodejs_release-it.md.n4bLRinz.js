import{_ as e,a as l,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as r,I as s,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const u="/long-press/assets/7ceef6b8.Cr2B7EAn.png",_=JSON.parse('{"title":"release-it","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/release-it.md","filePath":"nodejs/release-it.md","lastUpdated":1713718044000}'),b={name:"nodejs/release-it.md"},m=c(`<h1 id="release-it" tabindex="-1">release-it <a class="header-anchor" href="#release-it" aria-label="Permalink to &quot;release-it&quot;">​</a></h1><p>release-it 是一个命令行工具，用于在发布新版本时自动化处理一系列任务。它可以帮助您自动化执行以下任务：</p><ul><li>增加版本号并提交 Git</li><li>生成变更日志（Changelog）并提交到 Git</li><li>创建 Git 标签并推送到远程仓库</li><li>发布到 npm 等软件仓库</li><li>在 GitHub、GitLab 等平台创建发行版</li></ul><h2 id="安装release-it" tabindex="-1">安装release-it <a class="header-anchor" href="#安装release-it" aria-label="Permalink to &quot;安装release-it&quot;">​</a></h2><p>执行<code>npm init release-it</code>后，可选择生成.release-it.json配置文件或者在package.json中添加release-it配置，</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>pnpm create release-it</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;release&quot;: &quot;release-it&quot;,</span></span>
<span class="line"><span>    &quot;release:beta&quot;: &quot;release-it major --preRelease=beta&quot;,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>也可直接安装</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> release-it</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我选择了后者，成功后如下图所示：</p><p>创建配置文件.releate-it.js 复制配置内容至release-it字段，</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span> module.exports = {</span></span>
<span class="line"><span>	// git的提交信息</span></span>
<span class="line"><span>	&quot;git&quot;: {</span></span>
<span class="line"><span>		&quot;tagName&quot;: &quot;v\${version}&quot;,</span></span>
<span class="line"><span>		&quot;commitMessage&quot;: &quot;chore: release v\${version}&quot;,</span></span>
<span class="line"><span>		&quot;requireCleanWorkingDir&quot;: false,</span></span>
<span class="line"><span>		&quot;requireUpstream&quot;: false,</span></span>
<span class="line"><span>		&quot;push&quot;: false</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// 发布github上的release包</span></span>
<span class="line"><span>	&quot;github&quot;: {</span></span>
<span class="line"><span>		&quot;release&quot;: true</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// 发布到npm</span></span>
<span class="line"><span>	&quot;npm&quot;: {</span></span>
<span class="line"><span>		&quot;publish&quot;: true</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;publishConfig&quot;: {</span></span>
<span class="line"><span>        &quot;registry&quot;: &quot;私服地址&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>	// </span></span>
<span class="line"><span>	&quot;hooks&quot;: {</span></span>
<span class="line"><span>		&quot;after:git:release&quot;: &quot;echo git更新成功&quot;,</span></span>
<span class="line"><span>		&quot;after:bump&quot;: &quot;echo 更新版本成功 \${version}&quot; //hook在提升版本后执行该hook</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// 生成changelog</span></span>
<span class="line"><span>	&quot;plugins&quot;: {</span></span>
<span class="line"><span>		&quot;@release-it/conventional-changelog&quot;: {</span></span>
<span class="line"><span>			&quot;preset&quot;: &quot;angular&quot;, //应用预设</span></span>
<span class="line"><span>			&quot;infile&quot;: &quot;CHANGELOG.md&quot;, //写入文件</span></span>
<span class="line"><span>			 &quot;header&quot;:&quot;# Changelog&quot;, //changelog中显示的头部信息，</span></span>
<span class="line"><span>			&quot;ignoreRecommendedBump&quot;: &quot;true&quot; //重新选择需要的版本</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>上面的配置说明：</p><p>git：配置 Git 相关的任务，如自动提交代码、打标签等 github：配置 GitHub 相关的任务，如创建发行版 npm：配置 npm 相关的任务，如发布到 npm 仓库 plugins：配置使用的插件，使用@release-it/conventional-changelog插件来生成 changelog，并使用angular预设</p><p>这里配置文件中使用了生成CHANGELOG的插件,生成的Changelog将会基于最近的Git提交消息，并遵循约定式提交规范</p><p>执行安装<code>@release-it/conventional-changelog</code>插件</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> @release-it/conventional-changelog</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>根目录下添加 CHANGELOG.md 文件 <img src="`+u+`" alt=""></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span> &quot;plugins&quot;: {</span></span>
<span class="line"><span>    &quot;@release-it/conventional-changelog&quot;: {</span></span>
<span class="line"><span>     	//示例 可忽略</span></span>
<span class="line"><span>      &quot;preset&quot;: {</span></span>
<span class="line"><span>        //只有feat和fix标识的变更才会被记录到changelog.md中</span></span>
<span class="line"><span>        &quot;types&quot;: [</span></span>
<span class="line"><span>          { &quot;type&quot;: &quot;feat&quot;, &quot;section&quot;: &quot;Features&quot; },</span></span>
<span class="line"><span>          { &quot;type&quot;: &quot;fix&quot;, &quot;section&quot;: &quot;Bug Fixes&quot; },</span></span>
<span class="line"><span>          { &quot;type&quot;: &quot;chore&quot;, &quot;hidden&quot;: true },</span></span>
<span class="line"><span>          { &quot;type&quot;: &quot;docs&quot;, &quot;hidden&quot;: true },</span></span>
<span class="line"><span>          { &quot;type&quot;: &quot;style&quot;, &quot;hidden&quot;: true },</span></span>
<span class="line"><span>          { &quot;type&quot;: &quot;refactor&quot;, &quot;hidden&quot;: true },</span></span>
<span class="line"><span>          { &quot;type&quot;: &quot;perf&quot;, &quot;hidden&quot;: true },</span></span>
<span class="line"><span>          { &quot;type&quot;: &quot;test&quot;, &quot;hidden&quot;: true }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      &quot;preset&quot;: {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;conventionalcommits&quot;,</span></span>
<span class="line"><span>        // 此处可定义需要哪些放至进 CHANGELOG.md 里，</span></span>
<span class="line"><span>        // 默认只将 feat、fix写入日志</span></span>
<span class="line"><span>        &quot;types&quot;: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;feat&quot;,</span></span>
<span class="line"><span>            &quot;section&quot;: &quot;✨新功能&quot;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;fix&quot;,</span></span>
<span class="line"><span>            &quot;section&quot;: &quot;🐞问题修复&quot;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;style&quot;,</span></span>
<span class="line"><span>            &quot;section&quot;: &quot;🌈样式&quot;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;docs&quot;,</span></span>
<span class="line"><span>            &quot;section&quot;: &quot;📃文档&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;infile&quot;: &quot;CHANGELOG.md&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>git add、commit后(必须保证暂存区是干净的)，执行npm run release，进行打tag、生成changelog</p><p>注意: 运行pnpm release时, 工作目录必须是干净的, 也就是说你需要把修改了的文件提交, 或者使用git stash放入缓存中, 运行完了, 别忘了在git stash pop取出来</p></div><p>然后可以在项目根目录下运行npm run release 或者 npx release-it。 配置了 @release-it/conventional-changelog 这个插件后，是根据 commit 信息来自动判断提升哪个版本的。 一般的 feat 会提升中版本。若是 fix 则会提升小版本。若是 BREAKING CHANGE 则会提升大版本。</p><p>如果想要手动指定版本号，可以使用 --release-as 参数。比如</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> release-it</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --release-as</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;"> 1.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 更新主版本号</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> release</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> major</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 更新次版本号</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> release</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> minor</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 更新修订号</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> release</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> patch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 查看changelog</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> release-it</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --changelog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 查看下一个该发布的版本号</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> release-it</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --release-version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>npm run用于运行项目中已定义在package.json中的自定义脚本。 npx用于在项目依赖中运行命令行工具，无需全局安装。它还可以确保使用最新版本的软件包来执行命令。</p><p>node_modules/.bin目录存放的是本地安装的npm软件包的命令行工具。 这些命令可以直接在命令行中运行，而无需指定完整的路径。 它包含的是项目的开发依赖或通过npm scripts来使用的依赖的命令行工具。 运行npm run时，npm会自动将node_modules/.bin目录添加到PATH中，以便执行package.json中定义的脚本命令。</p></div><h2 id="安装git-cz" tabindex="-1">安装git-cz <a class="header-anchor" href="#安装git-cz" aria-label="Permalink to &quot;安装git-cz&quot;">​</a></h2><p>使用git-cz来规范commit信息</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> git-cz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改npm scripts 增加 &quot;commit&quot;: &quot;git-cz&quot; 在我们将本次改动提交到暂存区之后, 就可以使用npx git-cz来代替git commit来进行本次的提交. 根据命令行的提示,输入本次提交的相关信息即可,最终就会得到类似这样的git log</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>/* eslint-disable */</span></span>
<span class="line"><span>const simpleGit = require(&#39;simple-git&#39;);</span></span>
<span class="line"><span>const bump = require(&#39;json-bump&#39;);</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main() {</span></span>
<span class="line"><span>	const git = simpleGit();</span></span>
<span class="line"><span>	const currentBranch = (await git.branchLocal()).current;</span></span>
<span class="line"><span>	const webAppVersionConstantPath = &#39;../web/src/constants/APP_VERSION.ts&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Assert on main branch</span></span>
<span class="line"><span>	if (currentBranch !== &#39;main&#39;) {</span></span>
<span class="line"><span>		console.log(&#39;❌  You must be on the main branch to release.&#39;);</span></span>
<span class="line"><span>		return;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Assert branch is up to date</span></span>
<span class="line"><span>	// We do -a here so that we fetch the tags as well.</span></span>
<span class="line"><span>	await git.fetch(&#39;-a&#39;);</span></span>
<span class="line"><span>	const status = await git.status();</span></span>
<span class="line"><span>	if (</span></span>
<span class="line"><span>		status.ahead &gt; 0 ||</span></span>
<span class="line"><span>		status.behind &gt; 0 ||</span></span>
<span class="line"><span>		status.modified.length &gt; 0 ||</span></span>
<span class="line"><span>		status.staged.length &gt; 0</span></span>
<span class="line"><span>	) {</span></span>
<span class="line"><span>		console.log(</span></span>
<span class="line"><span>			&#39;❌  Your branch is not in sync with the remote repo. You might have local changes that you need to stash.&#39;</span></span>
<span class="line"><span>		);</span></span>
<span class="line"><span>		return;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Assert proper release command was passed in</span></span>
<span class="line"><span>	const releaseType = process.argv[2].trim();</span></span>
<span class="line"><span>	if (</span></span>
<span class="line"><span>		releaseType !== &#39;patch&#39; &amp;&amp;</span></span>
<span class="line"><span>		releaseType !== &#39;minor&#39; &amp;&amp;</span></span>
<span class="line"><span>		releaseType !== &#39;major&#39;</span></span>
<span class="line"><span>	) {</span></span>
<span class="line"><span>		console.log(&#39;❌  Must specify a release type: patch, minor, major&#39;);</span></span>
<span class="line"><span>		return;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	console.log(\`ℹ️  Running a \${releaseType} release\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Bump the version</span></span>
<span class="line"><span>	const bumpedVersion = await bump(&#39;./release/app/package.json&#39;, {</span></span>
<span class="line"><span>		patch: releaseType === &#39;patch&#39; ? 1 : 0,</span></span>
<span class="line"><span>		minor: releaseType === &#39;minor&#39; ? 1 : 0,</span></span>
<span class="line"><span>		major: releaseType === &#39;major&#39; ? 1 : 0,</span></span>
<span class="line"><span>	});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	console.log(</span></span>
<span class="line"><span>		\`ℹ️  Bumped v\${bumpedVersion.original} to v\${bumpedVersion.updated}\`</span></span>
<span class="line"><span>	);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Get commits since last tag</span></span>
<span class="line"><span>	const commits = await git.log([\`v\${bumpedVersion.original}..HEAD\`]);</span></span>
<span class="line"><span>	const changelog = commits.all</span></span>
<span class="line"><span>		.map((commit) =&gt; \`• \${commit.message}\\n\`)</span></span>
<span class="line"><span>		.join(&#39;&#39;)</span></span>
<span class="line"><span>		.trim();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	const description = \`Changelog since v\${bumpedVersion.original}:\\n\${changelog}\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	console.log(&#39;ℹ️  Updating marketing site...&#39;);</span></span>
<span class="line"><span>	fs.readFile(webAppVersionConstantPath, &#39;utf8&#39;, function(err, data) {</span></span>
<span class="line"><span>		if (err) {</span></span>
<span class="line"><span>			return console.log(err);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		var result = data.replace(bumpedVersion.original, bumpedVersion.updated);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		fs.writeFile(webAppVersionConstantPath, result, &#39;utf8&#39;, function(err) {</span></span>
<span class="line"><span>			if (err) return console.log(err);</span></span>
<span class="line"><span>		});</span></span>
<span class="line"><span>	});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Add &amp; Commit code</span></span>
<span class="line"><span>	await git.add(&#39;-A&#39;);</span></span>
<span class="line"><span>	await git.commit(\`Release v\${bumpedVersion.updated}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Create a new tag</span></span>
<span class="line"><span>	await git.addAnnotatedTag(\`v\${bumpedVersion.updated}\`, description);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	console.log(\`ℹ️  Created new tag v\${bumpedVersion.updated}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	console.log(\`ℹ️  Pushing updates to origin...\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Push to origin</span></span>
<span class="line"><span>	await git.push(&#39;origin&#39;);</span></span>
<span class="line"><span>	await git.push([&#39;origin&#39;, &#39;--tags&#39;]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Pull from origin</span></span>
<span class="line"><span>	await git.fetch(&#39;origin&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	console.log(\`🚀  Success!\`);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,30);function h(d,g,q,k,y,v){const n=e,a=l,p=i;return o(),r("div",null,[m,s(n,{readTime:"6",words:"1.5k"}),s(a),s(p)])}const x=t(b,[["render",h]]);export{_ as __pageData,x as default};
