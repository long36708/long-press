import{_ as t,a as e,b as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as p,c as h,I as s,a7 as r,o as k}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const c="/long-press/assets/66da2057.MWLWpWCg.png",E=JSON.parse('{"title":"Redux","description":"","frontmatter":{},"headers":[],"relativePath":"react/Redux.md","filePath":"react/Redux.md","lastUpdated":1718814781000}'),d={name:"react/Redux.md"},o=r('<h1 id="redux" tabindex="-1">Redux <a class="header-anchor" href="#redux" aria-label="Permalink to &quot;Redux&quot;">​</a></h1><p>Redux 是一个 JavaScript 状态管理库，它可以帮助你管理整个应用的状态。</p><p>Redux 是一个单向数据流的架构，它的核心概念是：store、action、reducer。</p><p>Redux 是一个 数据管理中心，可以把它理解为一个全局的 data store 实例。</p><p>它通过一定的使用规则和限制，保证着数据的健壮性、可追溯和可预测性。</p><p>它与 React 无关，可以独立运行于任何 JavaScript 环境中，从而也为同构应用提供了更好的数据同步通道。</p><h2 id="核心理念" tabindex="-1">核心理念: <a class="header-anchor" href="#核心理念" aria-label="Permalink to &quot;核心理念:&quot;">​</a></h2><ul><li>单一数据源: 整个应用只有唯一的状态树，也就是所有 state 最终维护在一个根级 Store 中；</li><li>状态只读: 为了保证状态的可控性，最好的方式就是监控状态的变化。那这里就两个必要条件： <ul><li>Redux Store 中的数据无法被直接修改；</li><li>严格控制修改的执行；</li></ul></li><li>纯函数: 规定只能通过一个纯函数 (Reducer) 来描述修改；</li></ul><p>大致的数据结构如下所示: <img src="'+c+`" alt=""></p><h3 id="store" tabindex="-1">Store <a class="header-anchor" href="#store" aria-label="Permalink to &quot;Store&quot;">​</a></h3><p>Store 是一个对象，用来保存应用的 State。Redux 应用只有一个单一的 Store。</p><h3 id="reducer" tabindex="-1">Reducer <a class="header-anchor" href="#reducer" aria-label="Permalink to &quot;Reducer&quot;">​</a></h3><p>Reducer 是一个纯函数，用来根据 Action 来更新 State。</p><p>Reducer 接收两个参数：当前 State 和 Action，并返回一个新的 State。</p><h3 id="action" tabindex="-1">Action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;Action&quot;">​</a></h3><p>Action 是一个普通的 JavaScript 对象，用来描述发生了什么事情。</p><p>Action 必须包含一个 type 属性，用来描述 Action 的类型。</p><h2 id="理念实现" tabindex="-1">理念实现: <a class="header-anchor" href="#理念实现" aria-label="Permalink to &quot;理念实现:&quot;">​</a></h2><ul><li>Store: 全局 Store 单例， 每个 Redux 应用下只有一个 store， 它具有以下方法供使用: <ul><li>getState: 获取 state；</li><li>dispatch: 触发 action, 更新 state；</li><li>subscribe: 订阅数据变更，注册监听器；</li></ul></li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 创建</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> store</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> createStore</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">Reducer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">initStore</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Action: 它作为一个行为载体，用于映射相应的 Reducer，并且它可以成为数据的载体，将数据从应用传递至 store 中，是 store 唯一的数据源；</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 一个普通的 Action</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> action</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">	type</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;ADD_LIST&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">	item</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;list-item-1&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 使用：</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">store</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">dispatch</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">action</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 通常为了便于调用，会有一个 Action 创建函数 (action creater)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> addList</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">item</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> action</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">		type</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;ADD_LIST&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">		item</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> action</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 调用就会变成:</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">dispatch</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">addList</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;list-item-1&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>Reducer: 用于描述如何修改数据的纯函数，Action 属于行为名称，而 Reducer 便是修改行为的实质；</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 一个常规的 Reducer</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// @param {state}: 旧数据</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// @param {action}: Action 对象</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// @returns {any}: 新数据</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> initList</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> ListReducer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">state</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> initList</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">action</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">	switch</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">action</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">type</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">		case</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &#39;ADD_LIST&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">			return</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> state</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">concat</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">action</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">item</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">			break</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#E06C75;">			defalut</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">				return</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> state</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>注意</p><p>遵守数据不可变，不要去直接修改 state，而是返回出一个 新对象，可以使用 assign 、 copy 、 extend 、 解构 等方式创建新对象</p><p>默认情况下需要 返回原数据，避免数据被清空；</p><p>最好设置初始值，便于应用的初始化及数据稳定；</p><h2 id="进阶" tabindex="-1">进阶: <a class="header-anchor" href="#进阶" aria-label="Permalink to &quot;进阶:&quot;">​</a></h2><ul><li>React-Redux: 结合 React 使用； <ul><li>&lt;Provider&gt;: 将 store 通过 context 传入组件中；</li><li>connect: 一个高阶组件，可以方便在 React 组件中使用 Redux；</li></ul></li></ul><p>将store通过mapStateToProps进行筛选后使用props注入组件</p><p>根据mapDispatchToProps创建方法，当组件调用时使用dispatch触发对应的action</p><h3 id="reducer-的拆分与重构" tabindex="-1">Reducer 的拆分与重构: <a class="header-anchor" href="#reducer-的拆分与重构" aria-label="Permalink to &quot;Reducer 的拆分与重构:&quot;">​</a></h3><p>随着项目越大，如果将所有状态的 reducer 全部写在一个函数中，将会 难以维护；</p><p>可以将 reducer 进行拆分，也就是 函数分解，最终再使用combineReducers进行重构合并；</p><h3 id="异步-action" tabindex="-1">异步 Action <a class="header-anchor" href="#异步-action" aria-label="Permalink to &quot;异步 Action&quot;">​</a></h3><p>由于 Reducer 是一个严格的纯函数，因此无法在 Reducer 中进行数据的请求，</p><p>需要先获取数据，再dispatch(Action)即可，下面是三种不同的异步实现:</p><ul><li>redex-thunk(opens new window)</li><li>redux-saga(opens new window)</li><li>redux-observable</li></ul><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,40);function u(y,B,g,b,m,F){const i=t,a=e,n=l;return k(),h("div",null,[o,s(i,{readTime:"3",words:"917"}),s(a),s(n)])}const _=p(d,[["render",u]]);export{E as __pageData,_ as default};
