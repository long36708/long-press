import{_ as l,a as e,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as i,c,I as s,a7 as o,o as b}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const v=JSON.parse('{"title":"useFormModal","description":"","frontmatter":{},"headers":[],"relativePath":"react/自定义Hooks/useFormModal.md","filePath":"react/自定义Hooks/useFormModal.md","lastUpdated":1710047315000}'),t={name:"react/自定义Hooks/useFormModal.md"},m=o(`<h1 id="useformmodal" tabindex="-1">useFormModal <a class="header-anchor" href="#useformmodal" aria-label="Permalink to &quot;useFormModal&quot;">​</a></h1><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import { Form, Modal, ModalProps, FormProps } from &#39;antd&#39;;</span></span>
<span class="line"><span>import React, { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface FormModal&lt;T&gt; {</span></span>
<span class="line"><span>  visible: boolean;</span></span>
<span class="line"><span>  onCancel: VoidFunction;</span></span>
<span class="line"><span>  onOk: (values: T) =&gt; any;</span></span>
<span class="line"><span>  forms: React.ReactNode;</span></span>
<span class="line"><span>  title: string;</span></span>
<span class="line"><span>  modalProps?: ModalProps;</span></span>
<span class="line"><span>  formProps?: FormProps;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function FormModal&lt;T&gt;({</span></span>
<span class="line"><span>  visible,</span></span>
<span class="line"><span>  onCancel,</span></span>
<span class="line"><span>  onOk,</span></span>
<span class="line"><span>  forms,</span></span>
<span class="line"><span>  title,</span></span>
<span class="line"><span>  modalProps,</span></span>
<span class="line"><span>  formProps,</span></span>
<span class="line"><span>}: FormModal&lt;T&gt;) {</span></span>
<span class="line"><span>  const [form] = Form.useForm();</span></span>
<span class="line"><span>  const [loading, setLoading] = useState(false);</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;Modal</span></span>
<span class="line"><span>      {...modalProps}</span></span>
<span class="line"><span>      title={title}</span></span>
<span class="line"><span>      visible={visible}</span></span>
<span class="line"><span>      onCancel={onCancel}</span></span>
<span class="line"><span>      okButtonProps={{ ...(modalProps?.okButtonProps || {}), loading }}</span></span>
<span class="line"><span>      onOk={() =&gt; form.submit()}</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;Form</span></span>
<span class="line"><span>        {...formProps}</span></span>
<span class="line"><span>        onFinish={async (values) =&gt; {</span></span>
<span class="line"><span>          try {</span></span>
<span class="line"><span>            setLoading(true);</span></span>
<span class="line"><span>            await onOk(values);</span></span>
<span class="line"><span>            onCancel();</span></span>
<span class="line"><span>          } catch (error) {</span></span>
<span class="line"><span>            console.log(error);</span></span>
<span class="line"><span>          } finally {</span></span>
<span class="line"><span>            setLoading(false);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }}</span></span>
<span class="line"><span>        form={form}</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        {forms}</span></span>
<span class="line"><span>      &lt;/Form&gt;</span></span>
<span class="line"><span>    &lt;/Modal&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface UseFormModal&lt;T&gt; {</span></span>
<span class="line"><span>  initValues: T;</span></span>
<span class="line"><span>  forms: React.ReactNode;</span></span>
<span class="line"><span>  onOk: (values: T) =&gt; any;</span></span>
<span class="line"><span>  title: string;</span></span>
<span class="line"><span>  modalProps?: ModalProps;</span></span>
<span class="line"><span>  formProps?: FormProps;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function useFormModal&lt;T&gt;({ forms, onOk, title, ...props }: UseFormModal&lt;T&gt;) {</span></span>
<span class="line"><span>  const [show, setShow] = useState(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    setShow,</span></span>
<span class="line"><span>    show,</span></span>
<span class="line"><span>    modal: (</span></span>
<span class="line"><span>      &lt;FormModal</span></span>
<span class="line"><span>        {...props}</span></span>
<span class="line"><span>        title={title}</span></span>
<span class="line"><span>        forms={forms}</span></span>
<span class="line"><span>        visible={show}</span></span>
<span class="line"><span>        onCancel={() =&gt; setShow(false)}</span></span>
<span class="line"><span>        onOk={onOk}</span></span>
<span class="line"><span>      /&gt;</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,3);function u(d,f,_,g,h,F){const n=l,a=e,p=r;return b(),c("div",null,[m,s(n,{readTime:"1",words:"151"}),s(a),s(p)])}const T=i(t,[["render",u]]);export{v as __pageData,T as default};
