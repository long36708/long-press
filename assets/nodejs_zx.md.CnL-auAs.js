import{_ as l,a as e,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.BCVHfIj7.js";import{_ as i,c,I as s,a7 as b,o as t}from"./chunks/framework.DGCt2JJv.js";import"./chunks/dayjs.min.DZyl58SH.js";const v=JSON.parse('{"title":"zx","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/zx.md","filePath":"nodejs/zx.md","lastUpdated":1719759053000}'),o={name:"nodejs/zx.md"},u=b(`<h1 id="zx" tabindex="-1">zx <a class="header-anchor" href="#zx" aria-label="Permalink to &quot;zx&quot;">​</a></h1><p>Bash 很棒，但是在编写更复杂的脚本时，许多人更喜欢更方便的编程语言。</p><p>JavaScript 是一个完美的选择，但Node.js标准库在使用之前需要额外的麻烦。</p><p>该 zx 软件包提供了有用的 child_process 包装器，转义参数并给出了合理的默认值。</p><p><a href="https://google.github.io/zx/getting-started" target="_blank" rel="noreferrer">https://google.github.io/zx/getting-started</a></p><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><p>将脚本编写到带有 .mjs 扩展名的文件中，以便在顶层使用 await 。如果您更喜欢扩展， .js 请将脚本包装在类似 void async function () {...}() .</p><p>将以下 代码 添加到 zx 脚本的开头：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#!/usr/bin/env zx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>现在，您将能够像这样运行脚本：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> ./script.mjs</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">./script.mjs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或通过 CLI：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#61AFEF;">zx</span><span style="--shiki-light:#A31515;--shiki-dark:#98C379;"> ./script.mjs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="scripts-download-mjs" tabindex="-1">scripts/download.mjs <a class="header-anchor" href="#scripts-download-mjs" aria-label="Permalink to &quot;scripts/download.mjs&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env zx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import axios from &#39;axios&#39;;</span></span>
<span class="line"><span>import fs from &#39;fs&#39;;</span></span>
<span class="line"><span>import Progress from &quot;progress&quot;;</span></span>
<span class="line"><span>import { createHash } from &quot;crypto&quot;;</span></span>
<span class="line"><span>import os from &quot;os&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Calculate the hash of the file</span></span>
<span class="line"><span> * @param path {string}</span></span>
<span class="line"><span> * @param options {{algo: string}}</span></span>
<span class="line"><span> * @returns {Promise&lt;unknown&gt;}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function hashFile(path, options) {</span></span>
<span class="line"><span>  const algo = options.algo || &quot;sha1&quot;;</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    const hash = createHash(algo);</span></span>
<span class="line"><span>    const stream = fs.createReadStream(path);</span></span>
<span class="line"><span>    stream.on(&quot;error&quot;, reject);</span></span>
<span class="line"><span>    stream.on(&quot;data&quot;, (chunk) =&gt; hash.update(chunk));</span></span>
<span class="line"><span>    stream.on(&quot;end&quot;, () =&gt; resolve(hash.digest(&quot;hex&quot;)));</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Verify the existence of the file</span></span>
<span class="line"><span> * @param dir {string}</span></span>
<span class="line"><span> * @param file {string}</span></span>
<span class="line"><span> * @param sha {string | undefined}</span></span>
<span class="line"><span> * @returns {Promise&lt;&#39;need_download&#39; | &#39;pass&#39;&gt;}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function verifyExistence({</span></span>
<span class="line"><span>                                 dir,</span></span>
<span class="line"><span>                                 file,</span></span>
<span class="line"><span>                                 sha,</span></span>
<span class="line"><span>                               }) {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    if (fs.statSync(path.join(dir, file)).isFile()) {</span></span>
<span class="line"><span>      console.info(chalk.green(\`✅ File \${file} already exists\`));</span></span>
<span class="line"><span>      const hash = await hashFile(path.join(dir, file), { algo: &quot;sha1&quot; });</span></span>
<span class="line"><span>      if (sha === undefined || hash === sha) {</span></span>
<span class="line"><span>        console.info(chalk.green(\`✅ File \${file} valid\`));</span></span>
<span class="line"><span>        return &#39;pass&#39;;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        console.error(</span></span>
<span class="line"><span>          chalk.red(\`❌ File \${file} not valid, start to redownload\`)</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        fs.unlinkSync(path.join(dir, file));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    if (err &amp;&amp; err.code !== &quot;ENOENT&quot;) {</span></span>
<span class="line"><span>      console.error(chalk.red(\`❌ Error: \${err}\`));</span></span>
<span class="line"><span>      process.exit(1);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      console.info(chalk.blue(\`=&gt; Start to download File \${file}\`));</span></span>
<span class="line"><span>      return &#39;need_download&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Set proxy</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function setProxy() {</span></span>
<span class="line"><span>  const proxyUrl =</span></span>
<span class="line"><span>    process.env.HTTPS_PROXY ||</span></span>
<span class="line"><span>    process.env.https_proxy ||</span></span>
<span class="line"><span>    process.env.HTTP_PROXY ||</span></span>
<span class="line"><span>    process.env.http_proxy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (proxyUrl) {</span></span>
<span class="line"><span>    const { hostname, port, protocol } = new URL(proxyUrl);</span></span>
<span class="line"><span>    axios.defaults.proxy = {</span></span>
<span class="line"><span>      host: hostname,</span></span>
<span class="line"><span>      port: port,</span></span>
<span class="line"><span>      protocol: protocol,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Download file from url</span></span>
<span class="line"><span> * @param url {string}</span></span>
<span class="line"><span> * @param dir {string}</span></span>
<span class="line"><span> * @param file {string}</span></span>
<span class="line"><span> * @param sha {string | undefined}</span></span>
<span class="line"><span> * @returns {Promise&lt;void&gt;}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const download = async ({ url, dir, file, sha }) =&gt; {</span></span>
<span class="line"><span>  const dest = path.join(dir, file);</span></span>
<span class="line"><span>  console.info(chalk.blue(\`=&gt; Start to download from \${url} to \${dest}\`));</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const response = await axios.get(url, { responseType: &quot;stream&quot; });</span></span>
<span class="line"><span>    const totalLength = response.headers[&quot;content-length&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const progressBar = new Progress(\`-&gt; downloading [:bar] :percent :etas\`, {</span></span>
<span class="line"><span>      width: 40,</span></span>
<span class="line"><span>      complete: &quot;=&quot;,</span></span>
<span class="line"><span>      incomplete: &quot; &quot;,</span></span>
<span class="line"><span>      renderThrottle: 1,</span></span>
<span class="line"><span>      total: parseInt(totalLength),</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    response.data.on(&quot;data&quot;, (chunk) =&gt; {</span></span>
<span class="line"><span>      progressBar.tick(chunk.length);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    await new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>      response.data.pipe(fs.createWriteStream(dest)).on(&quot;close&quot;, async () =&gt; {</span></span>
<span class="line"><span>        console.info(chalk.green(\`✅ File \${file} downloaded successfully\`));</span></span>
<span class="line"><span>        const hash = await hashFile(path.join(dir, file), { algo: &quot;sha1&quot; });</span></span>
<span class="line"><span>        if (sha === undefined | hash === sha) {</span></span>
<span class="line"><span>          console.info(chalk.green(\`✅ File \${file} valid\`));</span></span>
<span class="line"><span>          resolve();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          console.error(</span></span>
<span class="line"><span>            chalk.red(</span></span>
<span class="line"><span>              \`❌ File \${file} not valid, please try again using command \\\`yarn download\\\`\`</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>          );</span></span>
<span class="line"><span>          reject();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.error(</span></span>
<span class="line"><span>      chalk.red(</span></span>
<span class="line"><span>        \`❌ Failed to download \${url}: \${err}.\\nPlease try again using command \\\`yarn download\\\`\`</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    process.exit(1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/////////////////////</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * URL structure for different platforms</span></span>
<span class="line"><span> * @type {{darwin: string, win32: string}}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const platformUrls = {</span></span>
<span class="line"><span>  darwin: {</span></span>
<span class="line"><span>    x64: &#39;&#39;,</span></span>
<span class="line"><span>    arm64: &#39;&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  win32: {</span></span>
<span class="line"><span>    x64: &#39;&#39;,</span></span>
<span class="line"><span>    ia32: &#39;&#39;,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const FFMPEG_BASE_URL = &#39;https://github.com/eugeneware/ffmpeg-static/releases/download/b6.0/&#39;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * URLs for different tools</span></span>
<span class="line"><span> * @type {{ffprobe: typeof platformUrls, ffmpeg: typeof platformUrls}}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const urls = {</span></span>
<span class="line"><span>  ffmpeg: {</span></span>
<span class="line"><span>    darwin: {</span></span>
<span class="line"><span>      x64: \`\${FFMPEG_BASE_URL}ffmpeg-darwin-x64\`,</span></span>
<span class="line"><span>      arm64: \`\${FFMPEG_BASE_URL}ffmpeg-darwin-arm64\`</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    win32: {</span></span>
<span class="line"><span>      x64: \`\${FFMPEG_BASE_URL}ffmpeg-win32-x64\`,</span></span>
<span class="line"><span>      ia32: \`\${FFMPEG_BASE_URL}ffmpeg-win32-ia32\`,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    linux: {</span></span>
<span class="line"><span>      x64: \`\${FFMPEG_BASE_URL}ffmpeg-linux-x64\`,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ffprobe: {</span></span>
<span class="line"><span>    darwin: {</span></span>
<span class="line"><span>      x64: \`\${FFMPEG_BASE_URL}ffprobe-darwin-x64\`,</span></span>
<span class="line"><span>      arm64: \`\${FFMPEG_BASE_URL}ffprobe-darwin-arm64\`</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    win32: {</span></span>
<span class="line"><span>      x64: \`\${FFMPEG_BASE_URL}ffprobe-win32-x64\`,</span></span>
<span class="line"><span>      ia32: \`\${FFMPEG_BASE_URL}ffprobe-win32-ia32\`,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    linux: {</span></span>
<span class="line"><span>      x64: \`\${FFMPEG_BASE_URL}ffprobe-linux-x64\`,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &#39;yt-dlp&#39;: {</span></span>
<span class="line"><span>    darwin: {</span></span>
<span class="line"><span>      x64: &#39;https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos&#39;,</span></span>
<span class="line"><span>      arm64: &#39;https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    win32: {</span></span>
<span class="line"><span>      x64: &#39;https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe&#39;,</span></span>
<span class="line"><span>      ia32: &#39;https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    linux: {</span></span>
<span class="line"><span>      x64: &#39;https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>////////////////////</span></span>
<span class="line"><span>setProxy();</span></span>
<span class="line"><span>const dir = path.join(process.cwd(), &#39;lib&#39;);</span></span>
<span class="line"><span>if (!fs.existsSync(dir)) {</span></span>
<span class="line"><span>  fs.mkdirSync(dir);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const platform = process.env.npm_config_platform || os.platform()</span></span>
<span class="line"><span>const arch = process.env.npm_config_arch || os.arch()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // ffmpeg</span></span>
<span class="line"><span>  const file = platform === &#39;win32&#39; ? &#39;ffmpeg.exe&#39; : &#39;ffmpeg&#39;;</span></span>
<span class="line"><span>  const res = await verifyExistence({</span></span>
<span class="line"><span>    dir,</span></span>
<span class="line"><span>    file,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  if (res === &#39;need_download&#39;) {</span></span>
<span class="line"><span>    const downloadUrl = urls.ffmpeg[platform][arch];</span></span>
<span class="line"><span>    await download({ url: downloadUrl, dir, file });</span></span>
<span class="line"><span>    fs.chmodSync(path.join(dir, file), 0o755);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // ffprobe</span></span>
<span class="line"><span>  const file = platform === &#39;win32&#39; ? &#39;ffprobe.exe&#39; : &#39;ffprobe&#39;;</span></span>
<span class="line"><span>  const res = await verifyExistence({</span></span>
<span class="line"><span>    dir,</span></span>
<span class="line"><span>    file,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  if (res === &#39;need_download&#39;) {</span></span>
<span class="line"><span>    const downloadUrl = urls.ffprobe[platform][arch];</span></span>
<span class="line"><span>    await download({ url: downloadUrl, dir, file });</span></span>
<span class="line"><span>    fs.chmodSync(path.join(dir, file), 0o755);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // yt-dlp</span></span>
<span class="line"><span>  const file = platform === &#39;win32&#39; ? &#39;yt-dlp.exe&#39; : &#39;yt-dlp&#39;;</span></span>
<span class="line"><span>  const res = await verifyExistence({</span></span>
<span class="line"><span>    dir,</span></span>
<span class="line"><span>    file,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  if (res === &#39;need_download&#39;) {</span></span>
<span class="line"><span>    const downloadUrl = urls[&#39;yt-dlp&#39;][platform][arch];</span></span>
<span class="line"><span>    await download({ url: downloadUrl, dir, file });</span></span>
<span class="line"><span>    fs.chmodSync(path.join(dir, file), 0o755);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,16);function m(d,h,f,g,x,w){const n=l,a=e,p=r;return t(),c("div",null,[u,s(n,{readTime:"4",words:"863"}),s(a),s(p)])}const q=i(o,[["render",m]]);export{v as __pageData,q as default};
