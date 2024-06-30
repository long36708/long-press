import{_ as o,a as p,b as s}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as c,c as n,I as e,a7 as d,o as u}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const P=JSON.parse('{"title":"useDeferredValue","description":"","frontmatter":{},"headers":[],"relativePath":"react/React19全解/useDeferredValue.md","filePath":"react/React19全解/useDeferredValue.md","lastUpdated":1719758327000}'),i={name:"react/React19全解/useDeferredValue.md"},l=d('<h1 id="usedeferredvalue" tabindex="-1">useDeferredValue <a class="header-anchor" href="#usedeferredvalue" aria-label="Permalink to &quot;useDeferredValue&quot;">​</a></h1><p>在 React 并发模式的基础之上，我们可以利用 useDeferredValue 在不变动代码顺序的情况之下，推迟指定 UI 更新任务的执行。</p><p>更新时，保持现有列表，可在此的基础之上显示 Loading/蒙层/透明度</p><h2 id="运行原理" tabindex="-1">运行原理 <a class="header-anchor" href="#运行原理" aria-label="Permalink to &quot;运行原理&quot;">​</a></h2><p>useDeferredValue 会尝试将 UI 任务更新两次。</p><p>第一次，会给子组件传递旧值。此时 Expensive 接收到的 props 会与上一次完全相同。</p><p>如果结合了 React.memo，那么该组件就不会重新渲染。该组件可以重复使用之前的渲染结果</p><blockquote><p>Compiler 编译之后不需要 memo</p></blockquote><p>此时，高优先级的任务渲染会发生，渲染完成之后，将会开始第二次渲染。</p><p>此时，将会传入刚才更新之后的新值。</p><p>对于 Expensive 而言，props 发生了变化，整个组件会重新渲染。</p><p>我们通常会将已经非常明确的耗时任务标记为 deferred，因此，这些任务都被视为低优先级。</p><p>当重要的高优先级更新已经完成，低优先级任务在第二次渲染时尝试更新...</p><p>在它第二次更新的过程中，如果又有新的高优先级任务进来，那么 React 就会中断并放弃第二次更新，去执行高优先级的任务。</p><blockquote><p>注意：是中断，并放弃这次更新，所以表现出来的结果就是，中间会漏掉许多任务的执行</p></blockquote><p>这样的运行机制有一个非常重要的好处。</p><p>那就是，如果你的电脑性能足够强悍，那么第二次的更新可能会快速完成，高优先级的任务来不及中断，那么我们的页面响应就是非常理想的。</p><p>但是如果我们的电脑性能比较差，第二次更新还没完成，新的高优先级任务又来了，那么就可以通过中断的方式，降级处理，保证重要 UI 的流畅，放弃低优先级任务。</p><p>在不同性能的设备上，有不同的反应，这个是跟防抖、节流的最重要的区别</p><p>这种场景的最佳实践代码非常的简洁和优雅。写起来也很舒服，性能也非常强悍。但是理解起来会比较困难。因此想要做到灵活运用，还需要多多消化。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',21);function _(f,m,h,b,V,D){const a=o,r=p,t=s;return u(),n("div",null,[l,e(a,{readTime:"1",words:"610"}),e(r),e(t)])}const R=c(i,[["render",_]]);export{P as __pageData,R as default};
