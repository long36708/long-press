import{_ as e,a as l,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as t,c as r,I as s,a7 as c,o as d}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const v=JSON.parse('{"title":"数据持久缓存库 lndb","description":"","frontmatter":{},"headers":[],"relativePath":"electron/数据持久缓存方案/数据持久缓存库lndb.md","filePath":"electron/数据持久缓存方案/数据持久缓存库lndb.md","lastUpdated":1709970389000}'),b={name:"electron/数据持久缓存方案/数据持久缓存库lndb.md"},h=c(`<h1 id="数据持久缓存库-lndb" tabindex="-1">数据持久缓存库 lndb <a class="header-anchor" href="#数据持久缓存库-lndb" aria-label="Permalink to &quot;数据持久缓存库 lndb&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> lndb</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> 或者</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> lndb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// electron.js文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> appPath</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> app</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">isPackaged</span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">dirname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">app</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">getPath</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;exe&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)) </span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> app</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">getAppPath</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 配置数据存放的文件夹</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;dataPath&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">mode</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;dev&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> \`</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">appPath</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  }</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">/data\`</span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> \`</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">appPath</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">  }</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">/resources/data\`</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>//preload.js文件</span></span>
<span class="line"><span>const LNDB = require(&#39;lndb&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在contextBridge.exposeInMainWorld里添加api</span></span>
<span class="line"><span>//存储数据  建议数据加个id，用于标记唯一性</span></span>
<span class="line"><span>saveData:({ folder, key, value }) =&gt; {</span></span>
<span class="line"><span>	//获取数据存放的文件夹</span></span>
<span class="line"><span>	let dataPath = store.get(&#39;dataPath&#39;)</span></span>
<span class="line"><span>	const db = new LNDB(dataPath)</span></span>
<span class="line"><span>	// 初始类型</span></span>
<span class="line"><span>	const pg = db.init(folder)</span></span>
<span class="line"><span>	let datas = pg.get(key)</span></span>
<span class="line"><span>	//已经存储过数据了</span></span>
<span class="line"><span>	if (datas.data) {</span></span>
<span class="line"><span>		//我这边是默认存储数组对象的，所以这么写，如果有其他数据格式，自己在这边调整</span></span>
<span class="line"><span>		//检查是否已存在此数据，防止重复添加</span></span>
<span class="line"><span>		let hasData = datas.data.find(item =&gt; item.code === value.code &amp;&amp; value.code)</span></span>
<span class="line"><span>		if (hasData) {</span></span>
<span class="line"><span>			ipcRenderer.send(&quot;showLog&quot;, { title: &#39;提示信息&#39;, message: &#39;项目代码已存在，请检查！&#39; })</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		datas.data.unshift(value)</span></span>
<span class="line"><span>		pg.setAsync(key, datas.data).then()</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		pg.setAsync(key, [value]).then()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	//此处返回所有数据是为了前端页面展示最新数据，可去除或修改</span></span>
<span class="line"><span>	return pg.get(key).data</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//这个是在jsx文件里的调用方式    </span></span>
<span class="line"><span>// let data = window.electron.saveData({</span></span>
<span class="line"><span>//      folder:&#39;sampletype&#39;, //自定义</span></span>
<span class="line"><span>//      key:&#39;list&#39;, //自定义</span></span>
<span class="line"><span>//      value:values  //要保存的数据</span></span>
<span class="line"><span>//    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//获取数据</span></span>
<span class="line"><span>getData:({ folder, key }) =&gt; {</span></span>
<span class="line"><span>	//获取数据存放的文件夹</span></span>
<span class="line"><span>	let dataPath = store.get(&#39;dataPath&#39;)</span></span>
<span class="line"><span>	const db = new LNDB(dataPath)</span></span>
<span class="line"><span>	// 初始类型</span></span>
<span class="line"><span>	const pg = db.init(folder)</span></span>
<span class="line"><span>	let datas = pg.get(key)</span></span>
<span class="line"><span>	return datas?.data || []</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// datas = window.electron.getData({folder:&#39;tester&#39;,key:&#39;list&#39;})   这个是在jsx文件里的调用方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//编辑数据</span></span>
<span class="line"><span>editData:({ folder, key, value }) =&gt; {</span></span>
<span class="line"><span>	let dataPath = store.get(&#39;dataPath&#39;)</span></span>
<span class="line"><span>	const db = new LNDB(dataPath)</span></span>
<span class="line"><span>	// 初始类型</span></span>
<span class="line"><span>	const pg = db.init(folder)</span></span>
<span class="line"><span>	let datas = pg.get(key).data</span></span>
<span class="line"><span>	const foundIndex = datas.findIndex(obj =&gt; obj.id === value.id);</span></span>
<span class="line"><span>	if (foundIndex !== -1) {</span></span>
<span class="line"><span>		datas[foundIndex] = value;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	pg.setAsync(key, datas).then()</span></span>
<span class="line"><span>	return pg.get(key).data</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除数据</span></span>
<span class="line"><span>deleteData:({ folder, key, id }) =&gt; {</span></span>
<span class="line"><span>	let dataPath = store.get(&#39;dataPath&#39;)</span></span>
<span class="line"><span>	const db = new LNDB(dataPath)</span></span>
<span class="line"><span>	// 初始类型</span></span>
<span class="line"><span>	const pg = db.init(folder)</span></span>
<span class="line"><span>	let datas = pg.get(key).data</span></span>
<span class="line"><span>	const foundIndex = datas.findIndex(obj =&gt; obj.id === id);</span></span>
<span class="line"><span>	if (foundIndex !== -1) {</span></span>
<span class="line"><span>		datas.splice(foundIndex, 1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	pg.set(key, datas)</span></span>
<span class="line"><span>	return datas</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//此插件保存数据后的文件层级关系，如下图展示</span></span>
<span class="line"><span>// let data = window.electron.saveData({</span></span>
<span class="line"><span>//      folder:&#39;sampletype&#39;, //自定义</span></span>
<span class="line"><span>//      key:&#39;list&#39;, //自定义</span></span>
<span class="line"><span>//      value:values  //要保存的数据</span></span>
<span class="line"><span>//    })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,5);function k(u,o,m,g,y,B){const n=e,a=l,p=i;return d(),r("div",null,[h,s(n,{readTime:"2",words:"489"}),s(a),s(p)])}const A=t(b,[["render",k]]);export{v as __pageData,A as default};
