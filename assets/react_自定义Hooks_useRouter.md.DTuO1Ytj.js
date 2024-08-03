import{_ as p,a as r,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as l,c as i,I as s,a7 as c,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const P=JSON.parse('{"title":"useRouter","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useRouter.md","filePath":"react/自定义Hooks/useRouter.md","lastUpdated":1710047315000}'),u={name:"react/自定义Hooks/useRouter.md"},b=c(`<h1 id="userouter" tabindex="-1">useRouter <a class="header-anchor" href="#userouter" aria-label="Permalink to &quot;useRouter&quot;">​</a></h1><p>React-navigation is a routing library based on routing stack, which can be used for react-native page management.</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { StackActions, useNavigation, useRoute } from &#39;@react-navigation/core&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useRouter = &lt;P extends { [k: string]: any }&gt;() =&gt; {</span></span>
<span class="line"><span>  const navigation = useNavigation();</span></span>
<span class="line"><span>  const route = useRoute();</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    push: navigation.navigate,</span></span>
<span class="line"><span>    back: () =&gt; {</span></span>
<span class="line"><span>      if (navigation.canGoBack()) {</span></span>
<span class="line"><span>        navigation.goBack();</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 退出rn页面回到原生或退出应用</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    reset: (screen: string, params?: any) =&gt; {</span></span>
<span class="line"><span>      navigation.reset({</span></span>
<span class="line"><span>        index: 0,</span></span>
<span class="line"><span>        routes: [{ name: screen, params }],</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    exit: () =&gt; { /** 退出rn页面回到原生或退出应用 **/ },</span></span>
<span class="line"><span>    replace: (screen: string, params?: any) =&gt;</span></span>
<span class="line"><span>      navigation.dispatch(StackActions.replace(screen, params)),</span></span>
<span class="line"><span>    getParams: () =&gt; (route?.params as any) as P,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,4);function m(d,_,g,h,v,f){const n=p,a=r,e=t;return o(),i("div",null,[b,s(n,{readTime:"1",words:"118"}),s(a),s(e)])}const y=l(u,[["render",m]]);export{P as __pageData,y as default};
