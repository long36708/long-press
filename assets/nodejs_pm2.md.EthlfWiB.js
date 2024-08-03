import{_ as e,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as i,I as s,a7 as c,o as m}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const C=JSON.parse('{"title":"PM2","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/pm2.md","filePath":"nodejs/pm2.md","lastUpdated":1722158621000}'),o={name:"nodejs/pm2.md"},b=c(`<h1 id="pm2" tabindex="-1">PM2 <a class="header-anchor" href="#pm2" aria-label="Permalink to &quot;PM2&quot;">​</a></h1><h2 id="pm2常用命令" tabindex="-1">PM2常用命令 <a class="header-anchor" href="#pm2常用命令" aria-label="Permalink to &quot;PM2常用命令&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>pm2 start app.js --name &lt;app_name&gt; # 指定应用名称</span></span>
<span class="line"><span>pm2 start app.js --watch # 当文件变化时自动重启应用</span></span>
<span class="line"><span>pm2 start app.js --log &lt;log_path&gt; # 指定日志文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 管理程序状态:</span></span>
<span class="line"><span>pm2 restart app_name # 重启</span></span>
<span class="line"><span>pm2 reload app_name # 重载</span></span>
<span class="line"><span>pm2 stop app_name # 停止</span></span>
<span class="line"><span>pm2 delete app_name # 删除</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>你可以将 app_name 替换为:</p><p>all 对所有程序操作</p><p>id 对特定的进程id操作</p><p>其它用的较多的命令：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>pm2 start script.sh # 启动 bash 脚本</span></span>
<span class="line"><span>pm2 list # 列表 PM2 启动的所有的应用程序</span></span>
<span class="line"><span>pm2 monit # 显示每个应用程序的CPU和内存占用情况</span></span>
<span class="line"><span>pm2 show [app-name] # 显示应用程序的所有信息</span></span>
<span class="line"><span>pm2 logs # 显示所有应用程序的日志</span></span>
<span class="line"><span>pm2 logs [app-name] # 显示指定应用程序的日志</span></span>
<span class="line"><span>pm2 flush # 清空所有日志文件</span></span>
<span class="line"><span>pm2 reset [app-name] # 重置元数据，例如重置重启数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pm2 startup # 创建开机自启动命令</span></span>
<span class="line"><span>pm2 unstartup # 禁用自启动命令</span></span>
<span class="line"><span>pm2 save # 保存当前应用列表</span></span>
<span class="line"><span>pm2 resurrect # 重新加载保存的应用列表(通过pm2 save保存的应用)</span></span>
<span class="line"><span>pm2 update # 升级pm2，这之前最好先 pm2 save保存一下</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>线上网址： <a href="https://pm2.keymetrics.io/" target="_blank" rel="noreferrer">https://pm2.keymetrics.io/</a></p><p>Github地址：<a href="https://github.com/Unitech/pm2" target="_blank" rel="noreferrer">https://github.com/Unitech/pm2</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,11);function d(u,h,_,f,g,v){const a=e,n=l,p=r;return m(),i("div",null,[b,s(a,{readTime:"1",words:"306"}),s(n),s(p)])}const y=t(o,[["render",d]]);export{C as __pageData,y as default};
