import{_ as e,a as l,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as i,c,I as s,a7 as o,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const P=JSON.parse('{"title":"useModal","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useModal.md","filePath":"react/自定义Hooks/useModal.md","lastUpdated":1710047315000}'),t={name:"react/自定义Hooks/useModal.md"},m=o(`<h1 id="usemodal" tabindex="-1">useModal <a class="header-anchor" href="#usemodal" aria-label="Permalink to &quot;useModal&quot;">​</a></h1><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { Modal, ModalProps } from &#39;antd&#39;;</span></span>
<span class="line"><span>import React, { ReactNode, useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface UseModalOptions extends ModalProps {</span></span>
<span class="line"><span>  content?: ReactNode;</span></span>
<span class="line"><span>  onOk?: () =&gt; Promise&lt;any&gt;;</span></span>
<span class="line"><span>  onCancel?: () =&gt; Promise&lt;any&gt;;</span></span>
<span class="line"><span>  autoClose?: boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useModal = ({</span></span>
<span class="line"><span>  content,</span></span>
<span class="line"><span>  onOk,</span></span>
<span class="line"><span>  onCancel,</span></span>
<span class="line"><span>  autoClose = true,</span></span>
<span class="line"><span>  ...modalProps</span></span>
<span class="line"><span>}: UseModalOptions) =&gt; {</span></span>
<span class="line"><span>  const [visible, setVisible] = useState(false);</span></span>
<span class="line"><span>  const [loading, setLoading] = useState(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const modal = (</span></span>
<span class="line"><span>    &lt;Modal</span></span>
<span class="line"><span>      visible={visible}</span></span>
<span class="line"><span>      onOk={async () =&gt; {</span></span>
<span class="line"><span>        if (onOk) {</span></span>
<span class="line"><span>          setLoading(true);</span></span>
<span class="line"><span>          try {</span></span>
<span class="line"><span>            await onOk();</span></span>
<span class="line"><span>            setLoading(false);</span></span>
<span class="line"><span>            autoClose &amp;&amp; setVisible(false);</span></span>
<span class="line"><span>          } catch (error) {</span></span>
<span class="line"><span>            console.log(error);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          autoClose &amp;&amp; setVisible(false);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }}</span></span>
<span class="line"><span>      onCancel={async () =&gt; {</span></span>
<span class="line"><span>        if (onCancel) {</span></span>
<span class="line"><span>          setLoading(true);</span></span>
<span class="line"><span>          try {</span></span>
<span class="line"><span>            await onCancel();</span></span>
<span class="line"><span>            setLoading(false);</span></span>
<span class="line"><span>            autoClose &amp;&amp; setVisible(false);</span></span>
<span class="line"><span>          } catch (error) {</span></span>
<span class="line"><span>            console.log(error);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          autoClose &amp;&amp; setVisible(false);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }}</span></span>
<span class="line"><span>      confirmLoading={loading}</span></span>
<span class="line"><span>      {...modalProps}</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      {content}</span></span>
<span class="line"><span>    &lt;/Modal&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    visible,</span></span>
<span class="line"><span>    setVisible,</span></span>
<span class="line"><span>    modal,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,3);function u(d,_,f,g,h,C){const n=e,a=l,p=r;return b(),c("div",null,[m,s(n,{readTime:"1",words:"111"}),s(a),s(p)])}const x=i(t,[["render",u]]);export{P as __pageData,x as default};
