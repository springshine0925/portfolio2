async function u({src:n,srcSet:r,sizes:a}){return new Promise((o,c)=>{try{if(!n&&!r)throw new Error("No image src or srcSet provided");let e=new Image;n&&(e.src=n),r&&(e.srcset=r),a&&(e.sizes=a);const t=()=>{e.removeEventListener("load",t);const s=e.currentSrc;e=null,o(s)};e.addEventListener("load",t)}catch(e){c(`Error loading ${r}: ${e}`)}})}async function d(n=1,r=1){return new Promise(a=>{const o=document.createElement("canvas"),c=o.getContext("2d");o.width=n,o.height=r,c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,n,r),o.toBlob(async e=>{if(!e)throw new Error("Video thumbnail failed to load");const t=URL.createObjectURL(e);o.remove(),a(t)})})}async function f({srcSet:n,sizes:r}){const a=await Promise.all(n.split(", ").map(async t=>{const[s,i]=t.split(" "),l=Number(i.replace("w","")),m=await d(l);return{src:s,image:m,width:i}})),o=a.map(({image:t,width:s})=>`${t} ${s}`).join(", "),c=await u({srcSet:o,sizes:r});return a.find(t=>t.image===c).src}export{f as r};