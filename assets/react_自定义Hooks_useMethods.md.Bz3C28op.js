import{_ as p,a as l,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as r,c,I as s,a7 as i,o}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const M=JSON.parse('{"title":"useMethods","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useMethods.md","filePath":"react/自定义Hooks/useMethods.md","lastUpdated":1711472450000}'),u={name:"react/自定义Hooks/useMethods.md"},b=i(`<h1 id="usemethods" tabindex="-1">useMethods <a class="header-anchor" href="#usemethods" aria-label="Permalink to &quot;useMethods&quot;">​</a></h1><p><a href="https://juejin.cn/post/7026605205990932494" target="_blank" rel="noreferrer">放弃使用 useCallback 吧，我们有更好的方式</a></p><h2 id="usecallback-的问题。" tabindex="-1">useCallback 的问题。 <a class="header-anchor" href="#usecallback-的问题。" aria-label="Permalink to &quot;useCallback 的问题。&quot;">​</a></h2><p>记忆效果差，依赖值变化则重新创建 想要记忆效果好，又是个闭包，无法获取最新值 上下文调用顺序的问题 组件卸载时获取最新 state 的问题</p><h2 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>export default function useMethods&lt;T extends Record&lt;string, (...args: any[]) =&gt; any&gt;&gt;(methods: T) {</span></span>
<span class="line"><span>	const { current } = React.useRef({</span></span>
<span class="line"><span>		methods,</span></span>
<span class="line"><span>		func: undefined as T | undefined,</span></span>
<span class="line"><span>	});</span></span>
<span class="line"><span>	current.methods = methods;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 只初始化一次</span></span>
<span class="line"><span>	if (!current.func) {</span></span>
<span class="line"><span>		const func = Object.create(null);</span></span>
<span class="line"><span>		Object.keys(methods).forEach((key) =&gt; {</span></span>
<span class="line"><span>			// 包裹 function 转发调用最新的 methods</span></span>
<span class="line"><span>			func[key] = (...args: unknown[]) =&gt; current.methods[key].call(current.methods, ...args);</span></span>
<span class="line"><span>		});</span></span>
<span class="line"><span>		// 返回给使用方的变量</span></span>
<span class="line"><span>		current.func = func;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return current.func as T;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>实现很简单，利用 useRef 暂存 object，在初始化时给每个值包裹一份 function，用于转发获取最新的 function。 从而既拿到最新值，又可以保证引用值在声明周期内永远不改变。</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>function DemoComponent() {</span></span>
<span class="line"><span>  const [count, setCount] = React.useState(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const { method1, method2, method3 } = useMethods({</span></span>
<span class="line"><span>    method1() {</span></span>
<span class="line"><span>      doSomething(count);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    method2() {</span></span>
<span class="line"><span>      // 直接调用 method1</span></span>
<span class="line"><span>      this.method1();</span></span>
<span class="line"><span>      // 其他逻辑</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    method3() {</span></span>
<span class="line"><span>      setCount(3);</span></span>
<span class="line"><span>      // 更多...</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  React.useEffect(() =&gt; {</span></span>
<span class="line"><span>    return () =&gt; {</span></span>
<span class="line"><span>      method1();</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }, []);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return &lt;ChildComponent onClick={method1} /&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="usememoizedfn" tabindex="-1">useMemoizedFn <a class="header-anchor" href="#usememoizedfn" aria-label="Permalink to &quot;useMemoizedFn&quot;">​</a></h2><p>这也是ahooks 中的一个，持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback。</p><p>在某些场景中，我们需要使用 useCallback 来记住一个函数，但是在第二个参数 deps 变化时，会重新生成函数，导致函数地址变化。</p><p>使用 useMemoizedFn，可以省略第二个参数 deps，同时保证函数地址永远不会变化。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,14);function m(d,h,f,_,k,g){const n=p,a=l,e=t;return o(),c("div",null,[b,s(n,{readTime:"1",words:"377"}),s(a),s(e)])}const q=r(u,[["render",m]]);export{M as __pageData,q as default};
