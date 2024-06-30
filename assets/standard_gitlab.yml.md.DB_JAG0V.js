import{_ as p,a as l,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as i,c as r,I as s,a7 as c,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const x=JSON.parse('{"title":"整一个 .gitlab.yml","description":"","frontmatter":{},"headers":[],"relativePath":"standard/gitlab.yml.md","filePath":"standard/gitlab.yml.md","lastUpdated":1712334308000}'),o={name:"standard/gitlab.yml.md"},u=c(`<h1 id="整一个-gitlab-yml" tabindex="-1">整一个 .gitlab.yml <a class="header-anchor" href="#整一个-gitlab-yml" aria-label="Permalink to &quot;整一个 .gitlab.yml&quot;">​</a></h1><p>在开发工具类项目中，为了提高项目部署效率，gitlab自带的ci/cd是个很不错的选择。</p><p>今天介绍一下 一个 .gitlab.yml 的组成机构和作用。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>stages:</span></span>
<span class="line"><span>	- build</span></span>
<span class="line"><span>	- publish</span></span>
<span class="line"><span></span></span>
<span class="line"><span>before_script:</span></span>
<span class="line"><span>	- echo ------ ci set registry ------</span></span>
<span class="line"><span>	- npm set registry &#39;npm_registry&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cache:</span></span>
<span class="line"><span>	paths:</span></span>
<span class="line"><span>		- ./node_modules/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>build_job:</span></span>
<span class="line"><span>	stage: build</span></span>
<span class="line"><span>	tags:</span></span>
<span class="line"><span>		- wand-ui</span></span>
<span class="line"><span>	script:</span></span>
<span class="line"><span>		- echo ------ ci build start------</span></span>
<span class="line"><span>		- npm install</span></span>
<span class="line"><span>		- npm run build</span></span>
<span class="line"><span>		- echo ------ ci build end ------</span></span>
<span class="line"><span>		- echo &#39;token-info&#39;&gt;.npmrc</span></span>
<span class="line"><span>		- node ./publish.js</span></span>
<span class="line"><span>		- echo ------ publish end ------</span></span>
<span class="line"><span>	only:</span></span>
<span class="line"><span>		- master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="before-script" tabindex="-1">before_script <a class="header-anchor" href="#before-script" aria-label="Permalink to &quot;before_script&quot;">​</a></h3><pre><code> before_script用来定义所有job之前运行的命令，包括deploy(部署) jobs，但是在修复artifacts之后。它可以是一个数组或者是多行字符串。
</code></pre><h3 id="stages" tabindex="-1">stages <a class="header-anchor" href="#stages" aria-label="Permalink to &quot;stages&quot;">​</a></h3><pre><code> stages用来定义可以被job调用的stages。stages的规范允许有灵活的多级pipelines。
</code></pre><p>stages中的元素顺序决定了对应job的执行顺序：</p><ol><li>相同stage的job可以平行执行。</li><li>下一个stage的job会在前一个stage的job成功后开始执行。</li></ol><p>接下仔细看看这个例子，它包含了3个stage：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>stages:</span></span>
<span class="line"><span> - build</span></span>
<span class="line"><span> - test</span></span>
<span class="line"><span> - deploy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>首先，所有build的jobs都是并行执行的。 所有build的jobs执行成功后，test的jobs才会开始并行执行。 所有test的jobs执行成功，deploy的jobs才会开始并行执行。 所有的deploy的jobs执行成功，commit才会标记为success 任何一个前置的jobs失败了，commit会标记为failed并且下一个stages的jobs都不会执行。 这有两个特殊的例子值得一提：</p><p>如果.gitlab-ci.yml中没有定义stages，那么job&#39;s stages 会默认定义为 build，test 和 deploy。 如果一个job没有指定stage，那么这个任务会分配到test stage。</p><h3 id="cache" tabindex="-1">cache <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;cache&quot;">​</a></h3><pre><code> Gitlab Runner v0.7.0 开始引入。
</code></pre><p>cache用来指定需要在job之间缓存的文件或目录。只能使用该项目工作空间内的路径。</p><p>从GitLab 9.0开始，pipelines和job就默认开启了缓存</p><p>如果cache定义在jobs的作用域之外，那么它就是全局缓存，所有jobs都可以使用该缓存。</p><h3 id="jobs" tabindex="-1">Jobs <a class="header-anchor" href="#jobs" aria-label="Permalink to &quot;Jobs&quot;">​</a></h3><pre><code> .gitlab-ci.yml允许指定无限量jobs。每个jobs必须有一个唯一的名字，而且不能是上面提到的关键字。job由一列参数来定义jobs的行为。
</code></pre><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>job_name:</span></span>
<span class="line"><span>	script: // 要执行的脚本</span></span>
<span class="line"><span>		- rake spec</span></span>
<span class="line"><span>		- coverage</span></span>
<span class="line"><span>	stage: test // 定义job stage</span></span>
<span class="line"><span>	only:</span></span>
<span class="line"><span>		- master // 定义一列git分支，并为其创建job</span></span>
<span class="line"><span>	except: // 定义一列git分支，不创建job</span></span>
<span class="line"><span>		- develop</span></span>
<span class="line"><span>	tags: // 定义一列tags，用来指定选择哪个Runner（同时Runner也要设置tags）</span></span>
<span class="line"><span>		- ruby</span></span>
<span class="line"><span>		- postgres</span></span>
<span class="line"><span>	allow_failure: true //允许job失败。失败的job不影响commit状态</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>tags tags可以从允许运行此项目的所有Runners中选择特定的Runners来执行jobs。</p><p>在注册Runner的过程中，我们可以设置Runner的标签，比如ruby，postgres，development。</p><p>提到 runner，必须要说明，如果只有 .gitlab.yml 文件却没有 gitlab runner，ci/cd 也是不会执行的。</p><h3 id="gitlab-runner" tabindex="-1">gitlab runner <a class="header-anchor" href="#gitlab-runner" aria-label="Permalink to &quot;gitlab runner&quot;">​</a></h3><p>有三种配置方式，一般我们采用 Specific Runners 下 Set up a specific Runner manually 就够了。</p><p>按照文档提供的流程就可以：</p><p>Install GitLab Runner Specify the following URL during the Runner setup: <a href="https://git.guahao-inc.com/" target="_blank" rel="noreferrer">https://git.guahao-inc.com/</a> Use the following registration token during setup: 9PN8vkZezz1BuAVQcskp Start the Runner! 具体配置中出现的问题后面补上。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,30);function d(m,h,g,_,f,j){const n=p,a=l,e=t;return b(),r("div",null,[u,s(n,{readTime:"3",words:"803"}),s(a),s(e)])}const R=i(o,[["render",d]]);export{x as __pageData,R as default};
