(()=>{var e={640:(e,t,o)=>{"use strict";var r=o(742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,n,s,l,c,i,d=!1;t||(t={}),o=t.debug||!1;try{if(s=r(),l=document.createRange(),c=document.getSelection(),(i=document.createElement("span")).textContent=e,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=a[t.format]||a.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(i),l.selectNodeContents(i),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(r){o&&console.error("unable to copy using execCommand: ",r),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){o&&console.error("unable to copy using clipboardData: ",r),o&&console.error("falling back to prompt"),n=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(n,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),i&&document.body.removeChild(i),s()}return d}},742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(640),t=o.n(e);const r=".wp-block-kevinbatdorf-code-block-pro",a=()=>{Array.from(document.querySelectorAll(`${r}:not(.cbp-see-more-loaded) .cbp-see-more-line`)).forEach((e=>{const t=e.closest(r);t.classList.add("cbp-see-more-loaded");const o=e.closest("pre"),a=o.offsetHeight;let n=0;if(e.classList.contains("cbp-see-more-transition")){const t=o.querySelectorAll("code > *").length,r=Array.from(e.closest("code").children).filter((t=>t.offsetTop<e.offsetTop))?.length;n=.5+.01*(t-r),o.style.transition=`max-height ${n}s ease-out`}const s="SPAN"===t.children[0].tagName?t.children[0].offsetHeight:0,l=parseFloat(window.getComputedStyle(e).lineHeight);o.style.maxHeight=e.offsetTop+l-s+"px";const c=e.closest(r).querySelector(".cbp-see-more-container");if(!c)return;c.style.display="flex";const i=c.querySelector(".cbp-see-more-simple-btn");if(!i)return;t.classList.contains("padding-disabled")&&i.classList.remove("cbp-see-more-simple-btn-hover"),i.style.transition=`all ${Math.max(n,1)/1.5}s linear`;const d=e=>{e.preventDefault(),i.classList.remove("cbp-see-more-simple-btn-hover"),o.style.maxHeight=a+"px",setTimeout((()=>{i.style.opacity=0,i.style.transform="translateY(-100%)",setTimeout((()=>i.remove()),1e3*Math.max(n,1))}),1e3*n)};i.addEventListener("click",d),i.addEventListener("keypress",(e=>{"Enter"===e.key&&d(e)}))})),Array.from(document.querySelectorAll(".code-block-pro-copy-button:not(.cbp-cb-loaded)")).forEach((e=>{e.classList.add("cbp-cb-loaded"),e.style.display="block",e.addEventListener("click",(e=>{var o;const r=e.target?.closest("span");t()(null!==(o=r?.dataset?.code)&&void 0!==o?o:"",{format:"text/plain"}),r.classList.add("copying"),setTimeout((()=>{r.classList.remove("copying")}),2e3)}))})),Array.from(document.querySelectorAll(`${r} pre:not(.cbp-hl-loaded)`)).forEach((e=>{e.classList.add("cbp-hl-loaded");const t=e.querySelectorAll(".cbp-line-highlight");t.length&&(new ResizeObserver((t=>{t.forEach((t=>{e.style.setProperty("--cbp-block-width","0");const o=t.target.querySelector("code").offsetWidth,r=o+16===t.target.scrollWidth?o+16:t.target.scrollWidth+16;e.style.setProperty("--cbp-block-width",`${r}px`)}))})).observe(e),t.forEach((e=>{e.insertAdjacentHTML("beforeend",'<span aria-hidden="true" class="cbp-line-highlighter"></span>')})))})),(()=>{if(!window.codeBlockPro?.pluginUrl)return;const e=Array.from(document.querySelectorAll("[data-code-block-pro-font-family]:not(.cbp-ff-loaded)")||[]);e.forEach((e=>e.classList.add("cbp-ff-loaded"))),[...new Set(e.map((e=>e.dataset.codeBlockProFontFamily)).filter(Boolean))].forEach((async e=>{const t=new FontFace(e,`url(${window.codeBlockPro.pluginUrl}/build/fonts/${e}.woff2)`);await t.load(),document.fonts.add(t)}))})()};a(),window.codeBlockProInit=a,window.addEventListener("DOMContentLoaded",a),window.addEventListener("load",a)})()})();