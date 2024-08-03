import{_ as p,a as l,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c as i,I as s,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const x=JSON.parse('{"title":"两个跨域页面进行跳转传参的终极方案","description":"","frontmatter":{},"headers":[],"relativePath":"guide/两个跨域页面进行跳转传参的终极方案.md","filePath":"guide/两个跨域页面进行跳转传参的终极方案.md","lastUpdated":1713718044000}'),m={name:"guide/两个跨域页面进行跳转传参的终极方案.md"},b=c(`<h1 id="两个跨域页面进行跳转传参的终极方案" tabindex="-1">两个跨域页面进行跳转传参的终极方案 <a class="header-anchor" href="#两个跨域页面进行跳转传参的终极方案" aria-label="Permalink to &quot;两个跨域页面进行跳转传参的终极方案&quot;">​</a></h1><p><a href="https://blog.csdn.net/weixin_43552879/article/details/127223631?spm=1001.2014.3001.5502" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_43552879/article/details/127223631?spm=1001.2014.3001.5502</a></p><h3 id="终极方案-iframe-postmessage-localstorage" tabindex="-1">终极方案：iframe+postMessage+localStorage <a class="header-anchor" href="#终极方案-iframe-postmessage-localstorage" aria-label="Permalink to &quot;终极方案：iframe+postMessage+localStorage&quot;">​</a></h3><p>在A页面中使用iframe标签加载B页面并隐藏，</p><p>当点击跳转时，使用postMessage发送消息给B页面，在B页面中监听A页面发过来的数据，然后保存到localStorage中，</p><p>然后当A页面使用window.open打开B页面时，B页面直接去localStorage中取数据，这样就完成了页面跳转并传参</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>// A页面</span></span>
<span class="line"><span>&lt;span onClick=”toB();”&gt;跳转&lt;/span&gt;</span></span>
<span class="line"><span>&lt;iframe id=”myIframe” src=“http://b.com” style=”display: none” /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    function toB(){</span></span>
<span class="line"><span>        var myIframe = document.getElementById(“myIframe”);</span></span>
<span class="line"><span>        if(myIframe){</span></span>
<span class="line"><span>            var data = {data: 1};</span></span>
<span class="line"><span>            myIframe.contentWindow.postMessage(JSON.stringify(data), “http://b.com”);</span></span>
<span class="line"><span>            window.open(“http://b.com”, ”_blank”);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>// B页面</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    var aData = localStorage.getItem(“aPageData”);</span></span>
<span class="line"><span>    if(aData){</span></span>
<span class="line"><span>        doSomething(aData);     // 当能获取到数据时就说明是从A页面跳转过来的</span></span>
<span class="line"><span>        localStorage.removeItem(“aPageData”);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        window.addEventListener(“message”, receiveMessage, false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function receiveMessage(event){</span></span>
<span class="line"><span>        if (event.origin !== “http://a.com”) return;</span></span>
<span class="line"><span>        if(event.data){</span></span>
<span class="line"><span>            localStorage.setItem(“aPageData”, event.data);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>总结：</strong><br><strong>1.iframe和postMessage都是可以跨域的，而localStorage是不能跨域共享数据的</strong><br><strong>2.window.postMessage 中的window 始终是指将要跳转的目标页面的window对象</strong></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,10);function d(u,g,_,h,f,v){const a=p,n=l,e=t;return o(),i("div",null,[b,s(a,{readTime:"1",words:"280"}),s(n),s(e)])}const y=r(m,[["render",d]]);export{x as __pageData,y as default};
