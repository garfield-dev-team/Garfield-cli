"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[253],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,b=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(5907),a=(n(9231),n(4852));const o={sidebar_position:6},i=void 0,c={unversionedId:"Webpack\uff08\u9644\u5f55\uff09- FAQ",id:"Webpack\uff08\u9644\u5f55\uff09- FAQ",title:"Webpack\uff08\u9644\u5f55\uff09- FAQ",description:"01 JS \u914d\u7f6e\u6587\u4ef6\u5982\u4f55\u83b7\u5f97\u7c7b\u578b\u63d0\u793a",source:"@site/docs/Webpack\uff08\u9644\u5f55\uff09- FAQ.md",sourceDirName:".",slug:"/Webpack\uff08\u9644\u5f55\uff09- FAQ",permalink:"/Garfield-cli/docs/Webpack\uff08\u9644\u5f55\uff09- FAQ",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack\uff08\u9644\u5f55\uff09- FAQ.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u7528Webpack\u89e3\u51b3\u5b9e\u9645\u4e1a\u52a1\u95ee\u9898",permalink:"/Garfield-cli/docs/\u5982\u4f55\u7528Webpack\u89e3\u51b3\u5b9e\u9645\u4e1a\u52a1\u95ee\u9898"},next:{title:"Nginx \u914d\u7f6e",permalink:"/Garfield-cli/docs/\u90e8\u7f72/Nginx\u914d\u7f6e"}},p={},l=[{value:"01 JS \u914d\u7f6e\u6587\u4ef6\u5982\u4f55\u83b7\u5f97\u7c7b\u578b\u63d0\u793a",id:"01-js-\u914d\u7f6e\u6587\u4ef6\u5982\u4f55\u83b7\u5f97\u7c7b\u578b\u63d0\u793a",level:2},{value:"02 \u524d\u7aef\u5de5\u7a0b public \u548c assets \u76ee\u5f55\u7684\u533a\u522b",id:"02-\u524d\u7aef\u5de5\u7a0b-public-\u548c-assets-\u76ee\u5f55\u7684\u533a\u522b",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"01-js-\u914d\u7f6e\u6587\u4ef6\u5982\u4f55\u83b7\u5f97\u7c7b\u578b\u63d0\u793a"},"01 JS \u914d\u7f6e\u6587\u4ef6\u5982\u4f55\u83b7\u5f97\u7c7b\u578b\u63d0\u793a"),(0,a.kt)("p",null,"\u5728 Vite\u3001Rollup \u7b49\u6253\u5305\u914d\u7f6e\u4e2d\uff0c\u7531\u4e8e\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u51fd\u6570\u8fdb\u884c\u914d\u7f6e\uff08\u8be5\u51fd\u6570\u6ca1\u6709\u5b9e\u9645\u529f\u80fd\uff0c\u4ec5\u4ec5\u63a5\u53d7\u5165\u53c2\u7136\u540e\u76f4\u63a5 return \u51fa\u53bb\uff09\uff0c\u597d\u5904\u5c31\u662f\u7f16\u5199\u914d\u7f6e\u53ef\u4ee5\u83b7\u53d6\u7c7b\u578b\u63d0\u793a\uff0c\u5982\u679c\u914d\u7f6e\u51fa\u9519\uff08\u6bd4\u5982 typo\u3001\u7c7b\u578b\u4e0d\u5339\u914d\u7b49\uff09\u7f16\u8f91\u5668\u4f1a\u9ad8\u4eae\u63d0\u793a\u3002"),(0,a.kt)("p",null,"\u4f46\u662f Webpack \u5e76\u6ca1\u6709\u63d0\u4f9b\u914d\u7f6e\u51fd\u6570\uff0c\u53ea\u80fd\u7528 JS \u5bf9\u8c61\u8fdb\u884c\u914d\u7f6e\u3002\u8fd9\u6837\u7f16\u5199\u914d\u7f6e\u65e0\u6cd5\u83b7\u5f97\u7c7b\u578b\u63d0\u793a\uff0c\u6548\u7387\u975e\u5e38\u4f4e\uff0c\u540c\u65f6\u5982\u679c\u914d\u7f6e\u51fa\u9519\uff0c\u5f80\u5f80\u53ea\u80fd\u7b49\u5230 build \u7684\u65f6\u5019\u624d\u80fd\u53d1\u73b0\uff0c\u4e0d\u5229\u4e8e\u4fdd\u969c\u5de5\u7a0b\u8d28\u91cf\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u8be5\u95ee\u9898\uff0c\u4e00\u79cd\u89e3\u6cd5\u662f\u7528 TS \u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import type { Configuration } from "webpack";\n\n// \u52a0\u4e0a\u7c7b\u578b\u6ce8\u89e3\u5c31\u53ef\u4ee5\u5b9e\u73b0\u7c7b\u578b\u63d0\u793a\u3001\u7c7b\u578b\u68c0\u67e5\nconst config: Configuration = {\n  // ...\n}\n\nexport default config;\n')),(0,a.kt)("p",null,"\u53e6\u4e00\u79cd\u89e3\u6cd5\u7528 webpack-chain \u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff0c\u4f46\u662f\u7531\u4e8e\u4e0a\u624b\u95e8\u69db\u6bd4\u8f83\u9ad8\uff0c\u5728\u4e1a\u52a1\u5de5\u7a0b\u6bd4\u8f83\u5c11\u89c1\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u79cd\u5728 JS \u6587\u4ef6\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u7c7b\u578b\u63d0\u793a\u3001\u7c7b\u578b\u68c0\u67e5\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// @ts-check\n\n/**\n * @type {import("webpack").Configuration}\n */\nconst config = {\n  // ...\n}\n\nmodule.exports = config;\n')),(0,a.kt)("h2",{id:"02-\u524d\u7aef\u5de5\u7a0b-public-\u548c-assets-\u76ee\u5f55\u7684\u533a\u522b"},"02 \u524d\u7aef\u5de5\u7a0b public \u548c assets \u76ee\u5f55\u7684\u533a\u522b"),(0,a.kt)("p",null,"\u9996\u5148\uff0cpublic \u548c assets \u53ea\u662f\u4e00\u4e2a\u7ea6\u5b9a\uff0c\u4e3b\u6d41\u7684\u6846\u67b6\u6bd4\u5982 react-scripts \u548c Next.js \u9ed8\u8ba4\u90fd\u7528\u8fd9\u5957\u7ea6\u5b9a\uff0c\u4f46\u4e5f\u53ef\u4ee5\u6539\u6210\u5176\u4ed6\u7684\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"public \u76ee\u5f55\u4e0d\u4f1a\u88ab Webpack \u5904\u7406\uff0c\u8d44\u6e90\u4f1a\u76f4\u63a5\u590d\u5236\u5230 dist \u76ee\u5f55\uff0c\u4e00\u822c\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"favicon.ico"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," \u7b49\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"assets \u76ee\u5f55\u4f1a\u88ab Webpack \u5904\u7406\uff08\u6ce8\u610f ",(0,a.kt)("strong",{parentName:"p"},"\u6253\u5305")," \u8fd9\u4e2a\u8bcd\u4e0d\u51c6\u786e\uff09\u3002\u53ef\u80fd\u6709\u591a\u79cd\u7b56\u7565\uff0c\u6bd4\u5982\u5c0f\u6587\u4ef6 base64 \u5185\u8054\uff0c\u5927\u6587\u4ef6\u4f1a\u8f93\u51fa\u5230 dist \u76ee\u5f55\u7b49\u3002Webpack5 \u4e4b\u524d\u7528 file-loader\u3001url-loader\uff0cWebpack5 \u5f00\u59cb\u652f\u6301\u5185\u7f6e\u7684 Asset Module\u3002\u5bf9\u4e8e\u5927\u6587\u4ef6\uff0c\u540c\u6837\u90fd\u662f\u8f93\u51fa\u5230 dist \u76ee\u5f55\uff0c\u90a3\u4e48\u88ab Webpack \u5904\u7406\u7684\u597d\u5904\u662f\u5565\uff0c1\uff09\u53ef\u4ee5\u52a0\u4e0a\u6587\u4ef6\u540d\u54c8\u5e0c\uff0c2\uff09\u914d\u5408\u7b2c\u4e09\u65b9 loader \u53ef\u4ee5\u5b9e\u73b0\u9759\u6001\u8d44\u6e90\u5904\u7406\uff0c\u6bd4\u5982\u56fe\u7247\u538b\u7f29\uff0c3\uff09\u9759\u6001\u8d44\u6e90\u53ef\u4ee5\u5173\u8054  publicPath\uff0c\u5047\u5982\u9759\u6001\u6587\u4ef6\u9700\u8981\u4e0a\u4f20\u5230 CDN\uff0c\u53ea\u8981\u4fee\u6539\u6253\u5305\u914d\u7f6e\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"output.publicPath"),"\uff0c\u65e0\u9700\u4fee\u6539\u6bcf\u4e00\u5904\u8d44\u6e90\u5730\u5740\u3002"))}d.isMDXComponent=!0}}]);