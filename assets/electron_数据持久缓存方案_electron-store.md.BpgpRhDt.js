import{_ as p,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as i,c,I as s,a7 as t,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const P=JSON.parse('{"title":"electron-store","description":"","frontmatter":{},"headers":[],"relativePath":"electron/数据持久缓存方案/electron-store.md","filePath":"electron/数据持久缓存方案/electron-store.md","lastUpdated":1709970389000}'),b={name:"electron/数据持久缓存方案/electron-store.md"},u=t(`<h1 id="electron-store" tabindex="-1">electron-store <a class="header-anchor" href="#electron-store" aria-label="Permalink to &quot;electron-store&quot;">​</a></h1><p>如果想存储缓存数据，使用electron-store</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">//安装</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> electron-store</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>使用widow.localStorage存储数据只能在软件未关闭前能拿到。 一旦软件关闭再重新启动，那么缓存的数据将会被清除掉。 使用上面的插件，能有效解决。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>//在main.js里添加如下代码</span></span>
<span class="line"><span>const Store = require(&#39;electron-store&#39;);</span></span>
<span class="line"><span>const store = new Store();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义ipcRenderer监听事件</span></span>
<span class="line"><span>ipcMain.on(&#39;setStore&#39;, (_, key, value) =&gt; {</span></span>
<span class="line"><span>    store.set(key, value)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>ipcMain.on(&#39;getStore&#39;, (_, key) =&gt; {</span></span>
<span class="line"><span>    let value = store.get(key)</span></span>
<span class="line"><span>    _.returnValue = value || &quot;&quot;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在preload.js里添加代码，此文件是专门暴露electron的api给react使用的，直接使用是拿不到的</span></span>
<span class="line"><span>const { contextBridge, ipcRenderer ,shell } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>const fs = require(&quot;fs&quot;)</span></span>
<span class="line"><span>const Store = require(&#39;electron-store&#39;);</span></span>
<span class="line"><span>const store = new Store();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>contextBridge.exposeInMainWorld(</span></span>
<span class="line"><span>  &#39;electron&#39;,</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>    readFile: (filePath)=&gt;{///读取本地文件内容</span></span>
<span class="line"><span>      let data = fs.readFileSync(filePath,&#39;utf-8&#39;)</span></span>
<span class="line"><span>      return data</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    saveFile:(filePath,name,type)=&gt;{//保存文件或图片到本地</span></span>
<span class="line"><span>      ///理论上来讲应该是第一个，但是不知道为啥生成的pdf多了filename=generated.pdf这个，导致失效，只能写死</span></span>
<span class="line"><span>      // let base64 = filePath.replace(/^data:application\\/\\w+;base64,/, &#39;&#39;);</span></span>
<span class="line"><span>      默认获取报告的文件夹位置</span></span>
<span class="line"><span>      let reportPath = store.get(type || &#39;reportPath&#39;)  //文件存储的地址，例如C:/users  存储在c盘的用户文件夹里</span></span>
<span class="line"><span>      let base64 = filePath.replace(&#39;data:application/pdf;filename=generated.pdf;base64,&#39;, &#39;&#39;).replace(&#39;data:image/png;base64,&#39;, &#39;&#39;);</span></span>
<span class="line"><span>      let dataBuffer = Buffer.from(base64,&#39;base64&#39;)</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        fs.writeFileSync(reportPath + &#39;/&#39;+name, dataBuffer)</span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>      }catch (err){</span></span>
<span class="line"><span>        return  false</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ipcRenderer:{//缓存数据或或获取数</span></span>
<span class="line"><span>      setStoreValue:(key,value)=&gt;{</span></span>
<span class="line"><span>        ipcRenderer.send(&quot;setStore&quot;, key, value)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      getStoreValue:(key)=&gt;{</span></span>
<span class="line"><span>        const resp = ipcRenderer.sendSync(&quot;getStore&quot;, key)</span></span>
<span class="line"><span>        return resp</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    getBuffer:(filePath)=&gt;{//获取本地文件的buffer</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        let data = fs.readFileSync(filePath)</span></span>
<span class="line"><span>        return data</span></span>
<span class="line"><span>      }catch {</span></span>
<span class="line"><span>        return  false</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在react代码里使用方式</span></span>
<span class="line"><span>//key是存储的字段名，value是存储的值,使用方式跟window.localStorage类似</span></span>
<span class="line"><span>window.electron.ipcRenderer.setStoreValue(key,value)</span></span>
<span class="line"><span>window.electron.ipcRenderer.getStoreValue(key)</span></span>
<span class="line"><span>//其他方法是使用方式跟上面的类似</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6);function m(d,h,f,_,g,k){const n=p,a=l,e=r;return o(),c("div",null,[u,s(n,{readTime:"1",words:"431"}),s(a),s(e)])}const q=i(b,[["render",m]]);export{P as __pageData,q as default};
