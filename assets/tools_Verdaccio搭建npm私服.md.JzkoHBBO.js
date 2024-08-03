import{_ as i,a as e,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c as t,I as s,a7 as c,o as h}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const o="/long-press/assets/6fd00d31.CZgH6wom.png",b="/long-press/assets/070eb7a9.CUPrcZl8.png",x=JSON.parse('{"title":"Verdaccio","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Verdaccio搭建npm私服.md","filePath":"tools/Verdaccio搭建npm私服.md","lastUpdated":1722158621000}'),d={name:"tools/Verdaccio搭建npm私服.md"},u=c(`<h1 id="verdaccio" tabindex="-1">Verdaccio <a class="header-anchor" href="#verdaccio" aria-label="Permalink to &quot;Verdaccio&quot;">​</a></h1><p><a href="https://verdaccio.org/zh-CN/docs/installation" target="_blank" rel="noreferrer">https://verdaccio.org/zh-CN/docs/installation</a></p><h2 id="安装cli" tabindex="-1">安装CLI <a class="header-anchor" href="#安装cli" aria-label="Permalink to &quot;安装CLI&quot;">​</a></h2><p>Verdaccio 必须使用以下方法之一全局安装</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> verdaccio</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> global</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> verdaccio</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> verdaccio</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>npm 出于安全考虑不支持以 root 用户运行，即使你用 root 用户身份运行了，npm 会自动转成一个叫 nobody 的用户来运行，而这个用户几乎没有任何权限。</p><p>这样的话如果你脚本里有一些需要权限的操作，比如写文件（尤其是写 <code>/root/.node-gyp</code>），就会崩掉了。</p><p>为了避免这种情况，要么按照 npm 的规矩来，专门建一个用于运行 npm 的高权限用户；要么加 --unsafe-perm 参数，这样就不会切换到 nobody 上，运行时是哪个用户就是哪个用户，即使是 root。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> verdaccio</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -unsafe-perm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>首先启动 verdaccio，任意控制台执行命令</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">verdaccio</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>出现以下信息表明安装成功 <img src="`+o+`" alt=""> 上面的config file显示的是verdaccio的配置文件的地址</p><p>浏览器中输入地址 <a href="http://localhost:4873/" target="_blank" rel="noreferrer">http://localhost:4873/</a> 启动服务。这里显示上传过的组件。</p><h2 id="config-yaml配置说明" tabindex="-1">config.yaml配置说明 <a class="header-anchor" href="#config-yaml配置说明" aria-label="Permalink to &quot;config.yaml配置说明&quot;">​</a></h2><p>verdaccio服务启动后，会在启动服务对应的目录下创建一个名为verdaccio的文件夹，文件夹下有个storage文件夹和config.yaml文件。</p><p>storage文件夹下存放的是 Verdaccio 存储的包，config.yaml文件是 Verdaccio 的默认配置文件。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 存储路径</span></span>
<span class="line"><span>storage: ./storage</span></span>
<span class="line"><span># 插件路径</span></span>
<span class="line"><span>plugins: ./plugins</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Web UI 相关的参数</span></span>
<span class="line"><span>web:</span></span>
<span class="line"><span>  title: Verdaccio</span></span>
<span class="line"><span>  # Gravatar 是一项全球性的头像服务，允许用户使用同一个邮箱在多个网站上使用同一个头像。在这里，将 gravatar 设置为 false 可以禁用 Gravatar 支持。</span></span>
<span class="line"><span>  gravatar: false</span></span>
<span class="line"><span>  # 包列表的排序顺序 (asc|desc) 默认为升序asc</span></span>
<span class="line"><span>  sort_packages: desc</span></span>
<span class="line"><span>  # 是否启用暗黑模式</span></span>
<span class="line"><span>  # darkMode: true</span></span>
<span class="line"><span>  # 是否启用 HTML 缓存</span></span>
<span class="line"><span>  # html_cache: true</span></span>
<span class="line"><span>  # 是否启用登录功能</span></span>
<span class="line"><span>  # login: true</span></span>
<span class="line"><span>  # 是否显示额外的信息</span></span>
<span class="line"><span>  # showInfo: true</span></span>
<span class="line"><span>  # 是否显示设置选项</span></span>
<span class="line"><span>  # showSettings: true</span></span>
<span class="line"><span>  # 是否显示主题切换选项</span></span>
<span class="line"><span>  # showThemeSwitch: true</span></span>
<span class="line"><span>  # 是否显示页脚</span></span>
<span class="line"><span>  # showFooter: true</span></span>
<span class="line"><span>  # 是否显示搜索功能</span></span>
<span class="line"><span>  # showSearch: true</span></span>
<span class="line"><span>  # 是否显示原始数据或源代码</span></span>
<span class="line"><span>  # showRaw: true</span></span>
<span class="line"><span>  # 是否显示下载 tarball 的选项，tarball 是一种常见的文件压缩格式，通常用于打包和传输文件。</span></span>
<span class="line"><span>  # 启用 showDownloadTarball 功能可以让用户更方便地获取到特定包的 tarball 文件，以便于离线安装或其他用途。</span></span>
<span class="line"><span>  # showDownloadTarball: true</span></span>
<span class="line"><span>  # scriptsBodyAfter:</span></span>
<span class="line"><span>  #    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://my.company.com/customJS.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span>  # metaScripts:</span></span>
<span class="line"><span>  #    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://code.jquery.com/jquery-3.5.1.slim.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span>  #    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://browser.sentry-cdn.com/5.15.5/bundle.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span>  #    - &#39;&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot; /&gt;&#39;</span></span>
<span class="line"><span>  # bodyBefore:</span></span>
<span class="line"><span>  #    - &#39;&lt;div id=&quot;myId&quot;&gt;html before webpack scripts&lt;/div&gt;&#39;</span></span>
<span class="line"><span>  # 配置项用于指定公共路径或基础 URL</span></span>
<span class="line"><span>  # publicPath: http://somedomain.org/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 身份验证，默认身份验证基于 htpasswd 并内置，可以通过插件修改</span></span>
<span class="line"><span>auth:</span></span>
<span class="line"><span>  htpasswd:</span></span>
<span class="line"><span>    file: ./htpasswd</span></span>
<span class="line"><span>    # 允许注册的最大用户数, 默认是无限制</span></span>
<span class="line"><span>    # 设置为-1，表示禁止注册</span></span>
<span class="line"><span>    max_users: -1</span></span>
<span class="line"><span>    # 哈希算法，可选项为“bcrypt”、“md5”、“sha1”、“crypt”</span></span>
<span class="line"><span>    algorithm: bcrypt # 默认算法是 crypt ，被认为对生产环境不安全，建议新安装改用 bcrypt</span></span>
<span class="line"><span>    # “bcrypt”的舍入数，对于其他算法将被忽略</span></span>
<span class="line"><span>    rounds: 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 上行链路是具有外部注册表的链接，用于提供对外部包的访问。</span></span>
<span class="line"><span># 可以定义多个上行链路，每个上行链路都必须具有唯一的名称</span></span>
<span class="line"><span>uplinks:</span></span>
<span class="line"><span>  npmjs:</span></span>
<span class="line"><span>    url: https://registry.npmjs.org/ #</span></span>
<span class="line"><span>  yarn:</span></span>
<span class="line"><span>    url: https://registry.yarnpkg.com/</span></span>
<span class="line"><span>    timeout: 10s</span></span>
<span class="line"><span>  cnpm:</span></span>
<span class="line"><span>    url: https://registry.npmmirror.com/</span></span>
<span class="line"><span>    timeout: 10s</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置包访问的权限</span></span>
<span class="line"><span># &quot;$all&quot; 所有用户, &quot;$anonymous&quot; 匿名用户, &quot;$authenticated&quot; 认证用户</span></span>
<span class="line"><span>packages:</span></span>
<span class="line"><span>  # 指定了对以 @dd/ 开头的所有包的访问和发布权限</span></span>
<span class="line"><span>  &#39;@dd/*&#39;:</span></span>
<span class="line"><span>    # 特定作用域的包 @dd 一般为公司名 后面的为具体包名</span></span>
<span class="line"><span>    access: $all # 所有用户都能访问</span></span>
<span class="line"><span>    publish: $authenticated # 注册并且登录的用户才能发布</span></span>
<span class="line"><span>    unpublish: $authenticated # 注册并且登录的用户才能取消发布</span></span>
<span class="line"><span>    proxy: npmjs # 如果包在本地不可用，指定代理上行链路中的npmjs注册表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &#39;**&#39;:</span></span>
<span class="line"><span>    access: $all</span></span>
<span class="line"><span>    publish: $authenticated</span></span>
<span class="line"><span>    unpublish: $authenticated</span></span>
<span class="line"><span>    proxy: npmjs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server:</span></span>
<span class="line"><span>  keepAliveTimeout: 60</span></span>
<span class="line"><span>  # Allow \`req.ip\` to resolve properly when Verdaccio is behind a proxy or load-balancer</span></span>
<span class="line"><span>  # See: https://expressjs.com/en/guide/behind-proxies.html</span></span>
<span class="line"><span>  # trustProxy: &#39;127.0.0.1&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否允许离线发布</span></span>
<span class="line"><span># publish:</span></span>
<span class="line"><span>#   allow_offline: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置 Verdaccio 的公共 URL 前缀，用于解决反向代理问题</span></span>
<span class="line"><span># url_prefix: /verdaccio/</span></span>
<span class="line"><span># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org&#39;;</span></span>
<span class="line"><span># url_prefix: &#39;/my_prefix&#39;</span></span>
<span class="line"><span># // url -&gt; https://somedomain.org/my_prefix/</span></span>
<span class="line"><span># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org&#39;;</span></span>
<span class="line"><span># url_prefix: &#39;/&#39;</span></span>
<span class="line"><span># // url -&gt; https://somedomain.org/</span></span>
<span class="line"><span># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org/first_prefix&#39;;</span></span>
<span class="line"><span># url_prefix: &#39;/second_prefix&#39;</span></span>
<span class="line"><span># // url -&gt; https://somedomain.org/second_prefix/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安全相关设置</span></span>
<span class="line"><span># security:</span></span>
<span class="line"><span>#   api:</span></span>
<span class="line"><span>#     legacy: true</span></span>
<span class="line"><span>#     jwt:</span></span>
<span class="line"><span>#       sign:</span></span>
<span class="line"><span>#         expiresIn: 29d</span></span>
<span class="line"><span>#       verify:</span></span>
<span class="line"><span>#         someProp: [value]</span></span>
<span class="line"><span>#    web:</span></span>
<span class="line"><span>#      sign:</span></span>
<span class="line"><span>#        expiresIn: 1h # 1 hour by default</span></span>
<span class="line"><span>#      verify:</span></span>
<span class="line"><span>#         someProp: [value]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 用户速率限制的设置</span></span>
<span class="line"><span># userRateLimit:</span></span>
<span class="line"><span>#   windowMs: 50000</span></span>
<span class="line"><span>#   max: 1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 最大请求体大小限制</span></span>
<span class="line"><span># max_body_size: 10mb</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 监听的地址和端口配置</span></span>
<span class="line"><span>listen:</span></span>
<span class="line"><span>#  localhost:4873            # 默认值，本机4873端口</span></span>
<span class="line"><span>#  http://localhost:4873     # 和上个配置相同</span></span>
<span class="line"><span> - 0.0.0.0:4873              # 所有网络接口的 4873 端口</span></span>
<span class="line"><span># - https://example.org:4873  # if you want to use https</span></span>
<span class="line"><span># - &quot;[::1]:4873&quot;                # ipv6</span></span>
<span class="line"><span># - unix:/tmp/verdaccio.sock    # unix socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span># https证书相关设置</span></span>
<span class="line"><span># https:</span></span>
<span class="line"><span>#   key: ./path/verdaccio-key.pem</span></span>
<span class="line"><span>#   cert: ./path/verdaccio-cert.pem</span></span>
<span class="line"><span>#   ca: ./path/verdaccio-csr.pem</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置 HTTP 和 HTTPS 代理的设置</span></span>
<span class="line"><span># http_proxy: http://something.local/</span></span>
<span class="line"><span># https_proxy: https://something.local/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 用于配置通知功能</span></span>
<span class="line"><span># notify:</span></span>
<span class="line"><span>#   method: POST</span></span>
<span class="line"><span>#   headers: [{ &quot;Content-Type&quot;: &quot;application/json&quot; }]</span></span>
<span class="line"><span>#   endpoint: https://usagge.hipchat.com/v2/room/3729485/notification?auth_token=mySecretToken</span></span>
<span class="line"><span>#   content: &#39;{&quot;color&quot;:&quot;green&quot;,&quot;message&quot;:&quot;New package published: * {{ name }}*&quot;,&quot;notify&quot;:true,&quot;message_format&quot;:&quot;text&quot;}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用审核中间件</span></span>
<span class="line"><span>middlewares:</span></span>
<span class="line"><span>  audit:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志设置</span></span>
<span class="line"><span># type: stdout：指定日志输出到标准输出流（stdout），通常是终端或命令行界面</span></span>
<span class="line"><span># format: pretty：指定日志格式为漂亮的可读格式，这意味着日志信息将以易于阅读的方式呈现，通常包括时间戳、日志级别、消息内容等</span></span>
<span class="line"><span># level: http：指定日志记录的级别为 http。这意味着只有级别为 http 及以上的日志信息（例如 http、warn、error 等）才会被输出。</span></span>
<span class="line"><span>log: { type: stdout, format: pretty, level: http }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一些实验性功能的设置</span></span>
<span class="line"><span># experiments:</span></span>
<span class="line"><span>#  # support for npm token command</span></span>
<span class="line"><span>#  token: false</span></span>
<span class="line"><span>#  # disable writing body size to logs, read more on ticket 1912</span></span>
<span class="line"><span>#  bytesin_off: false</span></span>
<span class="line"><span>#  # enable tarball URL redirect for hosting tarball with a different server, the tarball_url_redirect can be a template string</span></span>
<span class="line"><span>#  tarball_url_redirect: &#39;https://mycdn.com/verdaccio/\${packageName}/\${filename}&#39;</span></span>
<span class="line"><span>#  # the tarball_url_redirect can be a function, takes packageName and filename and returns the url, when working with a js configuration file</span></span>
<span class="line"><span>#  tarball_url_redirect(packageName, filename) {</span></span>
<span class="line"><span>#    const signedUrl = // generate a signed url</span></span>
<span class="line"><span>#    return signedUrl;</span></span>
<span class="line"><span>#  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定了网页界面的语言</span></span>
<span class="line"><span>i18n:</span></span>
<span class="line"><span>  web: zh-CN</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br></div></div><p><img src="`+b+`" alt=""> 需要格外注意的是必须配置 listen: 0.0.0.0:4873 才能运行其他机子访问！！！</p><p>在离线时要发布依赖包必须设置 allow_offline: true ！！！</p><p>Linux 系统下，需要配置如下 <code>~/.config/verdaccio/config.yaml</code></p><p>要允许所有ip访问，放开配置</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>// listen:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 0.0.0.0:4873</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="使用pm2管理verdaccio" tabindex="-1">使用pm2管理Verdaccio <a class="header-anchor" href="#使用pm2管理verdaccio" aria-label="Permalink to &quot;使用pm2管理Verdaccio&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> pm2</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 启用Verdaccio</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pm2</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> verdaccio</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 查看Verdaccio</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pm2</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> verdaccio</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>使用pm2 list命令查看进程列表：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">pm2</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> id</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> name</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">               │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> mode</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">     │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> ↺</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> cpu</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">      │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> memory</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">   │</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">  │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> verdaccio</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">          │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> fork</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">     │</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> online</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 0%</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">       │</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 25.7mb</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">   │</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>还有以下常用选项可以加在启动命令后：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 指定应用名称</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">--name</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">app_nam</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">e&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置应用程序加载的内存阈值</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">--max-memory-restart</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">200M</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">B&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 指定日志文件</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">--log</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">log_pat</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 自动重启间隔时间</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">--restart-delay</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">delay</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> m</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">s&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="使用-pm2-启动-verdaccio-失败" tabindex="-1">使用 pm2 启动 verdaccio 失败 <a class="header-anchor" href="#使用-pm2-启动-verdaccio-失败" aria-label="Permalink to &quot;使用 pm2 启动 verdaccio 失败&quot;">​</a></h3><p>使用pm2启动verdaccio后，输入pm2 list命令，会显示 verdaccio 程序状态为 errored，使用pm2 logs命令打印日志，输出如下错误：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>Error: Cannot find module &#39;/root/verdaccio&#39;</span></span>
<span class="line"><span>    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:956:15)</span></span>
<span class="line"><span>    at Function.Module._load (node:internal/modules/cjs/loader:804:27)</span></span>
<span class="line"><span>    at Object.&lt;anonymous&gt; (/root/node-v16.19.1-linux-x64/lib/node_modules/pm2/lib/ProcessContainerFork.js:33:23)</span></span>
<span class="line"><span>    at Module._compile (node:internal/modules/cjs/loader:1126:14)</span></span>
<span class="line"><span>    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)</span></span>
<span class="line"><span>    at Module.load (node:internal/modules/cjs/loader:1004:32)</span></span>
<span class="line"><span>    at Function.Module._load (node:internal/modules/cjs/loader:839:12)</span></span>
<span class="line"><span>    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)</span></span>
<span class="line"><span>    at node:internal/main/run_main_module:17:47 {</span></span>
<span class="line"><span>  code: &#39;MODULE_NOT_FOUND&#39;,</span></span>
<span class="line"><span>  requireStack: []</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>报找不到verdacio模块的错误，可以尝试使用以下命令重新启动verdaccio：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>$ pm2 start \`which verdaccio\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>反引号 \` 是一种在很多编程语言中用来执行命令并将结果插入到字符串中的语法。</p><p>在这个特定的命令中，which verdaccio 执行了一个 shell 命令，即 which verdaccio，它会返回 Verdaccio 可执行文件的路径。</p><p>这个路径会被插入到 pm2 start 命令中，以便启动 Verdaccio 服务。</p><h2 id="添加用户并设置npm镜像源" tabindex="-1">添加用户并设置npm镜像源 <a class="header-anchor" href="#添加用户并设置npm镜像源" aria-label="Permalink to &quot;添加用户并设置npm镜像源&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#当前npm 服务指向本地</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> http://localhost:4873</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 注册用户 在本地注册一个用户然后指向我们的地址然后我们就可以发布包了</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> adduser</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --registry</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> http://localhost:4873</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">Username:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> xxx</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">Password:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> xxx</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">Password:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">  xxx</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">Email:</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (this </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">IS</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> public</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) xxx</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">Logged</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> as</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> yg-ui</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> http://localhost/</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> （你的ip地址）</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">这时候我们就注册一个用户，我们可以用这个用户名和密码去登录去上图窗口去登录了</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>下次我们再登录时，只需要输入</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> login</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后依次输入账户密码，接着检查当前用户。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> who</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> am</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> i</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看当前用户用户是否登录成功</p><h2 id="内网npm私服搭建" tabindex="-1">内网npm私服搭建 <a class="header-anchor" href="#内网npm私服搭建" aria-label="Permalink to &quot;内网npm私服搭建&quot;">​</a></h2><p>将以下对应的外网目录拷贝到内网环境中</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>文件：C:\\\\Users\\\\用户名\\\\AppData\\\\Roaming\\\\npm\\\\verdaccio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>文件：C:\\\\Users\\\\用户名\\\\AppData\\\\Roaming\\\\npm\\\\verdaccio.cmd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目录：C:\\\\Users\\\\用户名\\\\AppData\\\\Roaming\\\\npm\\\\node\\_modules\\\\verdaccio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>文件：C:\\\\Users\\\\用户名\\\\AppData\\\\Roaming\\\\verdaccio\\\\config.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目录：C:\\\\Users\\\\用户名\\\\AppData\\\\Roaming\\\\verdaccio\\\\storage</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>注意，其中 storage 目录是存放npm依赖包的地方， 我们可以先直接在外网发布好npm包，然后把storage文件夹复制到内网，接着打开内网verdaccio地址，就能发现这些依赖包自动发布到内网了。</p><p>我们发布依赖包到npm私服，有两种包，一种是自己开发的包，另一种是外网npm上的开源包，如果想要将开源包发布到自己的私服上使用</p><p>注意：要发布的npm依赖包，最好用npm下载，别用cnpm，因为cnpm包含了各种快捷方式，拷贝到其他电脑会出现各种问题</p><h2 id="设置-registry" tabindex="-1">设置 registry <a class="header-anchor" href="#设置-registry" aria-label="Permalink to &quot;设置 registry&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> http://localhost:4873/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>你可以在需要时带上 --registry 参数。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> --registry</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> http://localhost:4873</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在你的 .npmrc 中设置一个 registry 属性。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">registry</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">http://localhost:4873</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或在你的 package.json 中设置 publishConfig</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">  &quot;publishConfig&quot;</span><span style="--shiki-light:#795E26;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">    &quot;registry&quot;</span><span style="--shiki-light:#795E26;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &quot;http://localhost:4873&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="发布包" tabindex="-1">发布包 <a class="header-anchor" href="#发布包" aria-label="Permalink to &quot;发布包&quot;">​</a></h2><p>在具体项目根目录执行</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> publish</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://blog.csdn.net/qq_37155408/article/details/137926879" target="_blank" rel="noreferrer">如何部署npm私有仓库以及在项目中如何使用</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,64);function m(k,g,y,v,C,A){const n=i,a=e,p=l;return h(),t("div",null,[u,s(n,{readTime:"10",words:"2.5k"}),s(a),s(p)])}const E=r(d,[["render",m]]);export{x as __pageData,E as default};
