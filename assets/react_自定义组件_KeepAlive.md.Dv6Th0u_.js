import{_ as h,a as t,b as k}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as l,c as p,I as s,a7 as e,o as r}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const m=JSON.parse('{"title":"KeepAlive","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义组件/KeepAlive.md","filePath":"react/自定义组件/KeepAlive.md","lastUpdated":1711301918000}'),B={name:"react/自定义组件/KeepAlive.md"},d=e(`<h1 id="keepalive" tabindex="-1">KeepAlive <a class="header-anchor" href="#keepalive" aria-label="Permalink to &quot;KeepAlive&quot;">​</a></h1><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">memo</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useEffect</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useMemo</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useReducer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useRef</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &quot;react&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useLocation</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">useOutlet</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &quot;react-router-dom&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> KeepAlive</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">props</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">include</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">[] }) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> outlet</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useOutlet</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">include</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> props</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;">pathname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useLocation</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> componentList</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useRef</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> Map</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> forceUpdate</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useReducer</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">bool</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> !</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">bool</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)[</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]; </span><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 强制渲染</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> cacheKey</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useMemo</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> pathname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&#39;/&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">slice</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)[</span><span style="--shiki-light:#098658;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">], [</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">pathname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">	const</span><span style="--shiki-light:#0070C1;--shiki-dark:#E5C07B;"> activeKey</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> useRef</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">	useEffect</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">		componentList</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">current</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">value</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">			if</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">include</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">includes</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">||</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> key</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> pathname</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#E5C07B;">				this</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">delete</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">			}</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		}, </span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">componentList</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">current</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">		activeKey</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">current</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;"> cacheKey</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">		if</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">componentList</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">current</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">has</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">activeKey</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">current</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">)) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">			componentList</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">current</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">activeKey</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">current</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">outlet</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">		forceUpdate</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	}, [</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">cacheKey</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">include</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">		&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">			{</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">Array</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">from</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;">componentList</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">current</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">map</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">(([</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">component</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">]) </span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">				&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> key</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">					{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#001080;--shiki-dark:#E5C07B;"> activeKey</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">current</span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">						&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">component</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">					) </span><span style="--shiki-light:#000000;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">						&lt;</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#E50000;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> style</span><span style="--shiki-light:#000000;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">display</span><span style="--shiki-light:#001080;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> &quot;none&quot;</span><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;"> }</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">component</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">					)</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">				&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000FF;--shiki-dark:#ABB2BF;">			))</span><span style="--shiki-light:#0000FF;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">		&lt;/</span><span style="--shiki-light:#800000;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#800000;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">	);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;"> memo</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#001080;--shiki-dark:#E06C75;">KeepAlive</span><span style="--shiki-light:#000000;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,3);function y(g,F,c,A,C,o){const i=h,a=t,n=k;return r(),p("div",null,[d,s(i,{readTime:"1",words:"119"}),s(a),s(n)])}const D=l(B,[["render",y]]);export{m as __pageData,D as default};
