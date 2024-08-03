import{_ as p,a as l,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c as t,I as s,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const u="/long-press/assets/2618c167.Dv0clT5L.png",_=JSON.parse('{"title":"electron-builder","description":"","frontmatter":{},"headers":[],"relativePath":"electron/electron-builder.md","filePath":"electron/electron-builder.md","lastUpdated":1719758327000}'),b={name:"electron/electron-builder.md"},d=c(`<h1 id="electron-builder" tabindex="-1">electron-builder <a class="header-anchor" href="#electron-builder" aria-label="Permalink to &quot;electron-builder&quot;">​</a></h1><p><a href="https://www.kaka996.com/pages/2df2e6/" target="_blank" rel="noreferrer">https://www.kaka996.com/pages/2df2e6/</a></p><h2 id="builder-json" tabindex="-1">builder.json <a class="header-anchor" href="#builder-json" aria-label="Permalink to &quot;builder.json&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	// 可执行程序名称（英文)</span></span>
<span class="line"><span>	// 不要为中文，避免一些未知异常，打包后可修改安装包名称为中文</span></span>
<span class="line"><span>	&quot;productName&quot;: &quot;ee&quot;,</span></span>
<span class="line"><span>	// 软件id</span></span>
<span class="line"><span>	&quot;appId&quot;: &quot;com.electron.ee&quot;,</span></span>
<span class="line"><span>	// 版权标识（换成您自己的）</span></span>
<span class="line"><span>	&quot;copyright&quot;: &quot;© 2023 哆啦好梦 Technology Co., Ltd.&quot;,</span></span>
<span class="line"><span>	// 安装包输出目录</span></span>
<span class="line"><span>	&quot;directories&quot;: {</span></span>
<span class="line"><span>		&quot;output&quot;: &quot;out&quot;</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// asar加密</span></span>
<span class="line"><span>	&quot;asar&quot;: true,</span></span>
<span class="line"><span>	// 需要打包的文件</span></span>
<span class="line"><span>	&quot;files&quot;: [</span></span>
<span class="line"><span>		&quot;**/*&quot;,</span></span>
<span class="line"><span>		&quot;!frontend/&quot;,</span></span>
<span class="line"><span>		&quot;!run/&quot;,</span></span>
<span class="line"><span>		&quot;!logs/&quot;,</span></span>
<span class="line"><span>		&quot;!data/&quot;</span></span>
<span class="line"><span>	],</span></span>
<span class="line"><span>	// 额外资源（将from文件夹打进安装包，软件安装后放到to文件夹）</span></span>
<span class="line"><span>	&quot;extraResources&quot;: {</span></span>
<span class="line"><span>		&quot;from&quot;: &quot;build/extraResources/&quot;,</span></span>
<span class="line"><span>		&quot;to&quot;: &quot;extraResources&quot;</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// nsis脚本</span></span>
<span class="line"><span>	&quot;nsis&quot;: {</span></span>
<span class="line"><span>		// 一键安装</span></span>
<span class="line"><span>		&quot;oneClick&quot;: false,</span></span>
<span class="line"><span>		&quot;allowElevation&quot;: true,</span></span>
<span class="line"><span>		// 允许改变安装目录</span></span>
<span class="line"><span>		&quot;allowToChangeInstallationDirectory&quot;: true,</span></span>
<span class="line"><span>		// 安装图标</span></span>
<span class="line"><span>		&quot;installerIcon&quot;: &quot;build/icons/icon.ico&quot;,</span></span>
<span class="line"><span>		// 卸载图标</span></span>
<span class="line"><span>		&quot;uninstallerIcon&quot;: &quot;build/icons/icon.ico&quot;,</span></span>
<span class="line"><span>		// 安装时header图标图标</span></span>
<span class="line"><span>		&quot;installerHeaderIcon&quot;: &quot;build/icons/icon.ico&quot;,</span></span>
<span class="line"><span>		// 创建桌面快捷方式</span></span>
<span class="line"><span>		&quot;createDesktopShortcut&quot;: true,</span></span>
<span class="line"><span>		// 创建开始菜单快捷方式</span></span>
<span class="line"><span>		&quot;createStartMenuShortcut&quot;: true,</span></span>
<span class="line"><span>		// 桌面快捷方式名称</span></span>
<span class="line"><span>		&quot;shortcutName&quot;: &quot;EE框架&quot;</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// MacOS</span></span>
<span class="line"><span>	&quot;mac&quot;: {</span></span>
<span class="line"><span>		&quot;icon&quot;: &quot;build/icons/icon.icns&quot;,</span></span>
<span class="line"><span>		&quot;artifactName&quot;: &quot;\${productName}-\${os}-\${version}-\${arch}.\${ext}&quot;,</span></span>
<span class="line"><span>		&quot;darkModeSupport&quot;: true,</span></span>
<span class="line"><span>		&quot;hardenedRuntime&quot;: false</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// windows</span></span>
<span class="line"><span>	&quot;win&quot;: {</span></span>
<span class="line"><span>		&quot;icon&quot;: &quot;build/icons/icon.ico&quot;,</span></span>
<span class="line"><span>		&quot;artifactName&quot;: &quot;\${productName}-\${os}-\${version}-\${arch}.\${ext}&quot;,</span></span>
<span class="line"><span>		&quot;target&quot;: [</span></span>
<span class="line"><span>			{</span></span>
<span class="line"><span>				&quot;target&quot;: &quot;nsis&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		]</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// linux</span></span>
<span class="line"><span>	&quot;linux&quot;: {</span></span>
<span class="line"><span>		&quot;icon&quot;: &quot;build/icons/icon.icns&quot;,</span></span>
<span class="line"><span>		&quot;artifactName&quot;: &quot;\${productName}-\${os}-\${version}-\${arch}.\${ext}&quot;,</span></span>
<span class="line"><span>		&quot;target&quot;: [</span></span>
<span class="line"><span>			&quot;deb&quot;</span></span>
<span class="line"><span>		],</span></span>
<span class="line"><span>		&quot;category&quot;: &quot;Utility&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><h2 id="错误-cannot-find-module-fs-promises" tabindex="-1">错误：...Cannot find module &#39;fs/promises&#39; <a class="header-anchor" href="#错误-cannot-find-module-fs-promises" aria-label="Permalink to &quot;错误：...Cannot find module &#39;fs/promises&#39;&quot;">​</a></h2><p>原因：electron-builder包版本太高，一些语法不兼容 解决：降低electron-builder版本，重新安装包：electron-builder &lt;= 22.10.5</p><h2 id="node-module版本不匹配" tabindex="-1">node module版本不匹配 <a class="header-anchor" href="#node-module版本不匹配" aria-label="Permalink to &quot;node module版本不匹配&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 错误</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>was compiled against a different Node.js version using</span></span>
<span class="line"><span>NODE_MODULE_VERSION 83. This version of Node.js requires</span></span>
<span class="line"><span>NODE_MODULE_VERSION 89. Please try re-compiling or re-installing</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 原因</span></span>
<span class="line"><span>一些npm包是用c\\c++等其它语言写的，下载的可执行程序可能与你的操作系统不一致，因此需要根据源代码重新构建。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 解决方案</span></span>
<span class="line"><span>electron-rebuild -f -w 模块名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="macos系统下-自动更新失败" tabindex="-1">macOS系统下，自动更新失败 <a class="header-anchor" href="#macos系统下-自动更新失败" aria-label="Permalink to &quot;macOS系统下，自动更新失败&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>// 尝试关闭asar功能</span></span>
<span class="line"><span>1. 检查确认苹果签名账号</span></span>
<span class="line"><span>2. 修改package.json中，build对象asar属性值为false</span></span>
<span class="line"><span>3. 使用代码加密功能，以防源码暴露</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="软件黑屏或者卡死" tabindex="-1">软件黑屏或者卡死 <a class="header-anchor" href="#软件黑屏或者卡死" aria-label="Permalink to &quot;软件黑屏或者卡死&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>错误： ... ERROR:gpu_memory_buffer_support_x11.cc......</span></span>
<span class="line"><span>原因：win7或者Linux系统，不支持gpu加速</span></span>
<span class="line"><span>处理：在main.js文件的ready()方法中关闭硬件加速</span></span>
<span class="line"><span>伪代码：</span></span>
<span class="line"><span>const isWin7 = os.release().startsWith(&#39;6.1&#39;);</span></span>
<span class="line"><span>const isLinux = true;</span></span>
<span class="line"><span>if (isWin7 || isLinux) {</span></span>
<span class="line"><span>  app.disableHardwareAcceleration();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="代码加密" tabindex="-1">代码加密 <a class="header-anchor" href="#代码加密" aria-label="Permalink to &quot;代码加密&quot;">​</a></h2><blockquote><p>加密，请添加 &quot;!electron/&quot;</p></blockquote><blockquote><p>未加密，请删除 &quot;!electron/&quot;</p></blockquote><p>打开package.json 或 builder.json文件，修改 build.files 数组属性，添加 &quot;!electron/&quot;，如下：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>&quot;build&quot;: {</span></span>
<span class="line"><span>  ......</span></span>
<span class="line"><span>  &quot;asar&quot;: true,</span></span>
<span class="line"><span>  &quot;files&quot;: [</span></span>
<span class="line"><span>    &quot;**/*&quot;,</span></span>
<span class="line"><span>    &quot;!frontend/&quot;, // 过滤前端源码</span></span>
<span class="line"><span>    &quot;!run/&quot;,</span></span>
<span class="line"><span>    &quot;!logs/&quot;,</span></span>
<span class="line"><span>    &quot;!data/&quot;,</span></span>
<span class="line"><span>    &quot;!electron/&quot; // 过滤electron文件夹；如果没有使用加密功能，请删除</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="图标修改" tabindex="-1">图标修改 <a class="header-anchor" href="#图标修改" aria-label="Permalink to &quot;图标修改&quot;">​</a></h2><p>桌面和安装图标，修改里面的图片（图片名称不要修改）。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 名称和尺寸必须一致</span></span>
<span class="line"><span>./build/icons/16x16.png</span></span>
<span class="line"><span>./build/icons/32x32.png</span></span>
<span class="line"><span>./build/icons/64x64.png</span></span>
<span class="line"><span>./build/icons/128x128.png</span></span>
<span class="line"><span>./build/icons/256x256.png</span></span>
<span class="line"><span>./build/icons/512x512.png</span></span>
<span class="line"><span>./build/icons/icon.icns (macOS)</span></span>
<span class="line"><span>./build/icons/icon.ico</span></span>
<span class="line"><span>./build/icons/icon.png</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>图片详情说明。macOS图（icon.icns）建议使用透明背景（512px），然后把415px尺寸的logo贴上去，生成新图。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 文件路径</span></span>
<span class="line"><span>electron-egg\\build\\icons</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 说明</span></span>
<span class="line"><span># 图1：256x256.png</span></span>
<span class="line"><span># 分辨率：256 x 256</span></span>
<span class="line"><span># 宽度：256像素</span></span>
<span class="line"><span># 高度：256像素</span></span>
<span class="line"><span># 位深度：32</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 图2：512x512.png</span></span>
<span class="line"><span># 分辨率：512 x 512</span></span>
<span class="line"><span># 宽度：512像素</span></span>
<span class="line"><span># 高度：512像素</span></span>
<span class="line"><span># 位深度：32</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 图3：icon.ico</span></span>
<span class="line"><span># 分辨率：256 x 256</span></span>
<span class="line"><span># 宽度：256像素</span></span>
<span class="line"><span># 高度：256像素</span></span>
<span class="line"><span># 位深度：32</span></span>
<span class="line"><span></span></span>
<span class="line"><span># macOS</span></span>
<span class="line"><span># 图4：icon.icns</span></span>
<span class="line"><span># 分辨率：512 x 512</span></span>
<span class="line"><span># 宽度：512像素</span></span>
<span class="line"><span># 高度：512像素</span></span>
<span class="line"><span># 位深度：32</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="托盘图标" tabindex="-1">托盘图标 <a class="header-anchor" href="#托盘图标" aria-label="Permalink to &quot;托盘图标&quot;">​</a></h3><p>建议 32x32 或 16x16</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 文件路径</span></span>
<span class="line"><span>electron-egg\\public\\images\\tray.png</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 图片要求</span></span>
<span class="line"><span>分辨率：16 x 16</span></span>
<span class="line"><span>宽度：16像素</span></span>
<span class="line"><span>高度：16像素</span></span>
<span class="line"><span>位深度：32</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="软件左上角图标" tabindex="-1">软件左上角图标 <a class="header-anchor" href="#软件左上角图标" aria-label="Permalink to &quot;软件左上角图标&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>// 文件路径</span></span>
<span class="line"><span>electron-egg\\public\\images\\logo-32.png</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 图片要求</span></span>
<span class="line"><span>分辨率：32 x 32</span></span>
<span class="line"><span>宽度：32像素</span></span>
<span class="line"><span>高度：32像素</span></span>
<span class="line"><span>位深度：32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 代码位置</span></span>
<span class="line"><span>electron-egg\\electron\\config\\config.default.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// config</span></span>
<span class="line"><span>config.windowsOption = {</span></span>
<span class="line"><span>    icon: path.join(appInfo.home, &#39;public&#39;, &#39;images&#39;, &#39;logo-32.png&#39;),</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p>项目目录不允许有中文，否则不能下载打包依赖，导致无法打包</p><h2 id="electron-builder打包命令报错" tabindex="-1">electron-builder打包命令报错 <a class="header-anchor" href="#electron-builder打包命令报错" aria-label="Permalink to &quot;electron-builder打包命令报错&quot;">​</a></h2><h3 id="electron项目路径不能有中文" tabindex="-1">electron项目路径不能有中文 <a class="header-anchor" href="#electron项目路径不能有中文" aria-label="Permalink to &quot;electron项目路径不能有中文&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>Error: C:\\Users\\Administrator\\AppData\\Local\\electron-builder\\Cache\\nsis\\nsis-</span></span>
<span class="line"><span>3.0.3.2\\Bin\\makensis.exe exited with code 1Output:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>解决：electron项目路径不能有中文</p><p>若需要打包支持中文路径 解决：打开<code> C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\electron-builder\\node_modules\\app-builder-lib\\out\\targets\\nsis/NsisTarget.js</code> 文件， 在 <code>executeMakensis</code> 方法中加入我们所需的参数 <code>args.push(“-INPUTCHARSET”, “UTF8”)</code>;</p><h3 id="打包软件时不能出现本软件运行状态-需要从任务管理器关闭-否则将会打包失败" tabindex="-1">打包软件时不能出现本软件运行状态，需要从任务管理器关闭，否则将会打包失败 <a class="header-anchor" href="#打包软件时不能出现本软件运行状态-需要从任务管理器关闭-否则将会打包失败" aria-label="Permalink to &quot;打包软件时不能出现本软件运行状态，需要从任务管理器关闭，否则将会打包失败&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>  ⨯ remove F:\\learn-front\\electron_learn\\electron-egg\\out\\win-unpacked\\d3dcompiler_47.dll: Access is denied.</span></span>
<span class="line"><span>github.com/develar/go-fs-util.EnsureEmptyDir</span></span>
<span class="line"><span>        /Volumes/data/go/pkg/mod/github.com/develar/go-fs-util@v0.0.0-20190620175131-69a2d4542206/fs.go:98</span></span>
<span class="line"><span>github.com/develar/app-builder/pkg/electron.UnpackElectron.func1.1</span></span>
<span class="line"><span>        /Volumes/data/Documents/app-builder/pkg/electron/electronUnpack.go:38</span></span>
<span class="line"><span>github.com/develar/app-builder/pkg/util.MapAsyncConcurrency.func2</span></span>
<span class="line"><span>        /Volumes/data/Documents/app-builder/pkg/util/async.go:68</span></span>
<span class="line"><span>runtime.goexit</span></span>
<span class="line"><span>        /usr/local/Cellar/go/1.17/libexec/src/runtime/asm_amd64.s:1581</span></span>
<span class="line"><span>  ⨯ F:\\learn-front\\electron_learn\\electron-egg\\node_modules\\app-builder-bin\\win\\x64\\app-builder.exe process failed ERR_ELECTRON_BUILDER_CANNOT_EXECUTE</span></span>
<span class="line"><span>Exit code:</span></span>
<span class="line"><span>1  failedTask=build stackTrace=Error: F:\\learn-front\\electron_learn\\electron-egg\\node_modules\\app-builder-bin\\win\\x64\\app-builder.exe process failed ERR_ELECTRON_BUILDER_CANNOT_EXECUTE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>杀掉进程，重新打包</p><h2 id="打包asar加密忽略配置" tabindex="-1">打包asar加密忽略配置 <a class="header-anchor" href="#打包asar加密忽略配置" aria-label="Permalink to &quot;打包asar加密忽略配置&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">  &quot;asarUnpack&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;**/node_modules/iconv-lite/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;**/node_modules/ip/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;**/node_modules/ws/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;**/node_modules/koa/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;**/node_modules/koa-router/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;**/node_modules/koa-static/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;**/node_modules/path/**/*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">    &quot;**/web/**/*&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">  &quot;extraResources&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">      &quot;from&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;./web&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">      &quot;to&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;app.asar.unpacked/web&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="打包取消asar加密" tabindex="-1">打包取消asar加密 <a class="header-anchor" href="#打包取消asar加密" aria-label="Permalink to &quot;打包取消asar加密&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">  &quot;build&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#E06C75;">    &quot;asar&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="错误-fatal-error-unable-to-commit-changes" tabindex="-1">错误 Fatal error: Unable to commit changes <a class="header-anchor" href="#错误-fatal-error-unable-to-commit-changes" aria-label="Permalink to &quot;错误 Fatal error: Unable to commit changes&quot;">​</a></h2><p>原因：电脑开着杀毒软件或者C盘存储空间不足的情况下导致</p><p>解决方法:把所有的杀毒软件退出，清理一下磁盘。再重新打包。</p><h2 id="开发时候安装依赖报错" tabindex="-1">开发时候安装依赖报错 <a class="header-anchor" href="#开发时候安装依赖报错" aria-label="Permalink to &quot;开发时候安装依赖报错&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>node_modules/.pnpm/electron@29.2.0/node_modules/electron: Running postinstall script, failed in 2s</span></span>
<span class="line"><span>.../node_modules/electron postinstall$ node install.js</span></span>
<span class="line"><span>│ RequestError: Hostname/IP does not match certificate&#39;s altnames:</span></span>
<span class="line"><span>Host: npm.taobao.org. is not in the cert&#39;s altnames: DNS:*.tbcdn.cn, DNS:*.taobao.com, DNS:*.alicdn.com,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>需要修改 npm 配置文件</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="打包软件时出现的文件缺失" tabindex="-1">打包软件时出现的文件缺失 <a class="header-anchor" href="#打包软件时出现的文件缺失" aria-label="Permalink to &quot;打包软件时出现的文件缺失&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>⨯ Get &quot;https://npm.taobao.org/mirrors/electron/21.4.4/electron-v21.4.4-win32-x64.zip&quot;: x509: certificate is valid for *.tbcdn.cn, *.taobao.com,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>cannot resolve https://xxxxx.org/mirrors/electron/15.3.4/electron-v15.3.4-win32-x64.zip: status code 404</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打包时下载 electron-v.xxxx.zip 文件失败 解决方案：</p><p>直接在源仓库的文件库(<a href="https://registry.npmmirror.com/binary.html?path=electron/21.4.4/" target="_blank" rel="noreferrer">https://registry.npmmirror.com/binary.html?path=electron/21.4.4/</a>)下载对应版本和打包平台的文件。 下载完成后放在 C:\\Users\\用户名\\AppData\\Local\\electron\\Cache 这个目录下 如下图 <img src="`+u+`" alt=""></p><h2 id="打包时下载-wincodesign-v-xxx-7z-文件失败" tabindex="-1">打包时下载 winCodeSign-v.xxx.7z 文件失败 <a class="header-anchor" href="#打包时下载-wincodesign-v-xxx-7z-文件失败" aria-label="Permalink to &quot;打包时下载 winCodeSign-v.xxx.7z 文件失败&quot;">​</a></h2><p>下载地址：winCodeSign-2.5.0(<a href="https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.5.0/winCodeSign-2.5.0.7z" target="_blank" rel="noreferrer">https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.5.0/winCodeSign-2.5.0.7z</a>) 下载完解压放到 <code>C:\\Users\\用户名\\AppData\\Local\\electron-builder\\Cache\\winCodeSign</code> 目录下</p><h2 id="打包时下载-nsis-v-xxx-7z-文件失败" tabindex="-1">打包时下载 nsis-v.xxx.7z 文件失败 <a class="header-anchor" href="#打包时下载-nsis-v-xxx-7z-文件失败" aria-label="Permalink to &quot;打包时下载 nsis-v.xxx.7z 文件失败&quot;">​</a></h2><p>下载地址：nsis-3.0.4.1(<a href="https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z" target="_blank" rel="noreferrer">https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z</a>) 下载完解压放到 <code>C:\\Users\\用户名\\AppData\\Local\\electron-builder\\Cache\\nsis</code></p><h2 id="打包时下载-nsis-resources-v-xxx-7z-文件失败" tabindex="-1">打包时下载 nsis-resources-v.xxx.7z 文件失败 <a class="header-anchor" href="#打包时下载-nsis-resources-v-xxx-7z-文件失败" aria-label="Permalink to &quot;打包时下载 nsis-resources-v.xxx.7z 文件失败&quot;">​</a></h2><p>下载地址：nsis-resources-3.4.1(<a href="https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z" target="_blank" rel="noreferrer">https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z</a>)</p><p>下载完解压放到 <code>C:\\Users\\用户名\\AppData\\Local\\electron-builder\\Cache\\nsis\\nsis-resources-3.4.1</code></p><h2 id="如果下载慢-设置国内镜像源-加速" tabindex="-1">如果下载慢：设置国内镜像源(加速) <a class="header-anchor" href="#如果下载慢-设置国内镜像源-加速" aria-label="Permalink to &quot;如果下载慢：设置国内镜像源(加速)&quot;">​</a></h2><p>在根目录添加 .npmrc 文件，添加如下内容</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>registry=https://registry.npmmirror.com/</span></span>
<span class="line"><span>disturl=https://registry.npmmirror.com/-/binary/node</span></span>
<span class="line"><span>electron_mirror=https://npmmirror.com/mirrors/electron/</span></span>
<span class="line"><span>electron-builder-binaries_mirror=https://registry.npmmirror.com/-/binary/electron-builder-binaries/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>或者</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>electron-builder-binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>遇到 code ERR_ELECTRON_BUILDER_CANNOT_EXECUTE的问题 在项目中的.npmrc中加上</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>ELECTRON_BUILDER_BINARIES_MIRROR=https://mirrors.huaweicloud.com/electron-builder-binaries/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,68);function m(h,k,g,q,v,x){const n=p,a=l,e=i;return o(),t("div",null,[d,s(n,{readTime:"7",words:"1.8k"}),s(a),s(e)])}const B=r(b,[["render",m]]);export{_ as __pageData,B as default};
