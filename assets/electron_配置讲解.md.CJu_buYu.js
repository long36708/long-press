import{_ as e,a as t,b as p}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as h,c as k,I as s,j as i,a as r,a7 as d,o as B}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const D=JSON.parse('{"title":"productName：指定了您的应用程序的产品名称，通常用于构建过程中生成的安装程序文件名等地方。","description":"","frontmatter":{},"headers":[],"relativePath":"electron/配置讲解.md","filePath":"electron/配置讲解.md","lastUpdated":1713973155000}'),c={name:"electron/配置讲解.md"},o=i("h1",{id:"productname-指定了您的应用程序的产品名称-通常用于构建过程中生成的安装程序文件名等地方。",tabindex:"-1"},[r("productName：指定了您的应用程序的产品名称，通常用于构建过程中生成的安装程序文件名等地方。 "),i("a",{class:"header-anchor",href:"#productname-指定了您的应用程序的产品名称-通常用于构建过程中生成的安装程序文件名等地方。","aria-label":'Permalink to "productName：指定了您的应用程序的产品名称，通常用于构建过程中生成的安装程序文件名等地方。"'},"​")],-1),g=d(`<p>appId：指定了您的应用程序的唯一标识符，这个值在打包和部署时会用到。 files：指定打包时所需打包的文件 directories.output：指定了输出目录的路径，即构建后的文件将会保存在 dist 目录中。 nsis ：指定了 NSIS（Nullsoft Scriptable Install System）打包的相关配置。 oneClick：指定是否启用一键安装模式。 allowElevation：是否允许提升权限进行安装。 allowToChangeInstallationDirectory：是否允许用户更改安装目录。 installerIcon：安装程序的图标文件路径。 uninstallerIcon：卸载程序的图标文件路径。 installerHeaderIcon：安装程序的头部图标文件路径。 createDesktopShortcut：是否在桌面上创建快捷方式。 createStartMenuShortcut：是否在开始菜单中创建快捷方式。 shortcutName：创建的快捷方式的名称。</p><p>win ：指定了 Windows 平台的配置。 icon：指定应用程序的图标文件路径。 artifactName：定义生成的构建文件的命名规则模板。 target：指定构建的目标平台，这里是 NSIS。</p><p>electronDist：指定了预先下载的 Electron 包的路径。</p><h2 id="特别注意" tabindex="-1">特别注意 <a class="header-anchor" href="#特别注意" aria-label="Permalink to &quot;特别注意&quot;">​</a></h2><p>这里有几个需要特别注意的点：</p><p>首先我们用的logo.ico文件尺寸大小至少是256*256的 由于打包时需要使用electron的相关包文件，为了提高打包速度，我们一般会提前下载与我们node_modules相同版本的.zip包，然后打包时使用electronDist指定打包用的文件目录，可以缩减打包时间 自定义artifactName，该名称就是打包后我们可安装的.exe可执行文件的名称 electron-builder打包原理实际上是将package.json同目录的所有文件进行整体打包输出， 在package.json同级目录下有一些文件夹我们是不需要进行打包的，其中dist下是我们上次打包输出的内容，electron是我们预下载的打包所需的.zip包， node_modules下面是我们开发时所用的依赖包，这些都不需要打包进去。因此我们需要指定我们打包时所需要打包的文件夹，此时就需要用到package.json里面build配置中的files属性， 如上配置，我们只需要将build目录下的文件和main下面的文件打包即可。 这里的build目录下是渲染层的代码，main下面都是我们主进程的代码</p><h2 id="窗口常用的实例属性" tabindex="-1">窗口常用的实例属性 <a class="header-anchor" href="#窗口常用的实例属性" aria-label="Permalink to &quot;窗口常用的实例属性&quot;">​</a></h2><p>窗口自身存在很多的实例属性，可以使我们获取到窗口的一些当前状态。下面是一些常用的实例属性。</p><p>win.id - 窗口的唯一ID。 win.webContents- 包含窗口网页内容的BrowserWindowProxy对象。 win.devToolsWebContents - 用于开发者工具窗口的webContents。 win.minimizable - 是否允许最小化窗口,默认为true。 win.maximizable - 是否允许最大化窗口,默认为true。 win.fullScreenable - 是否允许全屏窗口,默认为true。 win.resizable - 是否允许改变窗口大小,默认为true。 win.closable - 是否允许关闭窗口,默认为true。 win.movable - 是否允许移动窗口,默认为true。 win.alwaysOnTop - 是否永远置顶,默认为false。 win.modal - 是否为模态窗口,默认为false。 win.title - 窗口标题。 win.defaultWidth/Height - 窗口默认宽高。 win.width/height - 窗口当前宽高。 win.x/y- 窗口左上角坐标。 窗口常用的实例方法 win.loadURL(url)- 加载指定URL到窗口中，通常用于加载本地文件或远程网页。 win.webContents.send(channel, ...args)- 在窗口之间发送异步消息。channel 是一个字符串，用于标识消息的类型，...args 是要传递的参数。 win.show()- 显示窗口，通常与 hide() 方法配合使用。 win.hide()- 隐藏窗口。 win.close()- 关闭窗口 win.minimize()- 最小化窗口 win.maximize()- 最大化窗口 win.restore()- 恢复窗口大小和位置。 win.setSize(width, height[, animate])- 设置窗口的宽度和高度。 win.setPosition(x, y[, animate])- 设置窗口的位置。 win.getTitle()- 获取窗口的标题。 win.setTitle(title)- 设置窗口的标题。 win.setMenu(menu)- 设置窗口的菜单。 win.setResizable(resizable)- 设置窗口是否可以改变大小。 win.setAlwaysOnTop(flag[, level[, relativeLevel]])- 将窗口置顶。 win.setMenu(null)- 隐藏窗口的菜单栏。 win.setProgressBar(progress)- 设置窗口的任务栏进度条。 win.focus()- 将窗口置于前台并获得焦点。 win.isVisible()- 返回窗口是否可见。 win.isFullScreen()- 返回窗口是否全屏。 win.isMaximized()- 返回窗口是否最大化。 win.webContents.executeJavaScript(code[, userGesture])- 在窗口的渲染进程中执行一段 JavaScript 代码。 win.openDevTools([options])- 打开开发者工具。</p><h2 id="创建右下角托盘" tabindex="-1">创建右下角托盘 <a class="header-anchor" href="#创建右下角托盘" aria-label="Permalink to &quot;创建右下角托盘&quot;">​</a></h2><p>对于一个桌面应用来说，右下角的系统托盘必不可少，electron应用的系统托盘使用tray这个api实现，下面是封装的专门处理系统托盘的文件 systemTray.js</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;path&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">app</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">Tray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">Menu</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;electron&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">getMainWindow</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">mainWindowIsExist</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;./windows/mainWindow&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> tray</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;"> null</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> iconPath</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;./assets/logo.png&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> initTray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">	tray</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> Tray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">iconPath</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> contextMenu</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> Menu</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">buildFromTemplate</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">([</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		{</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">			label</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;打开应用&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">				mainWindowIsExist</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> getMainWindow</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">show</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">			}</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		},</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		{</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">			label</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;退出应用&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">				app</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">quit</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">			}</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		},</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	tray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">setToolTip</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;Harbour&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 设置鼠标悬停时显示的提示信息</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	tray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">setContextMenu</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">contextMenu</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">	tray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;click&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">		mainWindowIsExist</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> getMainWindow</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">show</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	})</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> getTray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> tray</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">initTray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">getTray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>iconPath获取托盘图标路径，这里注意一定要使用path.resolve生产绝对路径否则打包成安装包后会无法找到该文件导致报错 Menu.buildFromTemplate是electron的一个方法，用来创建一个菜单，菜单的label是显示的内容，click是点击后触发的事件 tray.setToolTip(&#39;Harbour&#39;)是用来设置鼠标悬停时显示的提示信息 tray.setContextMenu(contextMenu)将使用Menu.buildFromTemplate创建出的菜单设置为托盘菜单 tray.on(&#39;click&#39;, () =&gt; {}) 当点击托盘的时候触发的事件，我们这里是将mainWindowshow出来 初始化系统托盘 系统托盘的初始化需要在app.on(&#39;ready&#39;)之后，因此我们将初始化系统托盘的方法封装好导出，在app.on(&#39;ready&#39;)中执行</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">app</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;electron&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">createMainWindow</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;./windows/mainWindow&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">initTray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">getTray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;./systemTray&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">app</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;ready&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, () </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	createMainWindow</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	initTray</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="应用层和主进程通信-ipcmain-ipcrender" tabindex="-1">应用层和主进程通信（ipcMain,ipcRender） <a class="header-anchor" href="#应用层和主进程通信-ipcmain-ipcrender" aria-label="Permalink to &quot;应用层和主进程通信（ipcMain,ipcRender）&quot;">​</a></h2><p>应用层和主进程之间的通信流程是:</p><p>应用层使用ipcRender.send方法将事件及数据传递到主进程 主进程使用ipcMain.on或者ipcMain.once方法监听事件并获取数据 主进程使用ipcMain.removeListener移除事件监听或者ipcMain.removeAllListeners移除所有事件监听 主进程使用窗口实例的webContents.send方法将事件和数据传递到应用层 应用层使用ipcRender.on或者ipcRender.once监听事件并获取数据 应用层使用ipcRenderer.removeListener移除事件监听或者ipcRenderer.removeAllListeners移除所有事件监</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,18);function y(F,b,u,m,A,C){const a=e,n=t,l=p;return B(),k("div",null,[o,s(a,{readTime:"5",words:"1.7k"}),g,s(n),s(l)])}const f=h(c,[["render",y]]);export{D as __pageData,f as default};
