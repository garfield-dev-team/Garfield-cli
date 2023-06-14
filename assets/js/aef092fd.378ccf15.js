"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[358],{4852:(e,n,t)=>{t.d(n,{Zo:()=>b,kt:()=>d});var l=t(9231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),s=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=s(e.components);return l.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return t?l.createElement(d,p(p({ref:n},b),{},{components:t})):l.createElement(d,p({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=t(5907),a=(t(9231),t(4852));const r={sidebar_position:4},p="\u524d\u7aef\u9879\u76ee Babel \u914d\u7f6e",i={unversionedId:"\u524d\u7aef\u9879\u76eeBabel\u914d\u7f6e",id:"\u524d\u7aef\u9879\u76eeBabel\u914d\u7f6e",title:"\u524d\u7aef\u9879\u76ee Babel \u914d\u7f6e",description:"Babel \u4e3b\u8981\u4f5c\u7528\u662f \u8bed\u6cd5\u8f6c\u6362\u3001API \u517c\u5bb9\u3002\u5728\u8bed\u6cd5\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u4f1a\u5f15\u5165\u4e00\u4e9b helper \u51fd\u6570\uff0cAPI \u517c\u5bb9\u5219\u4f1a\u5f15\u5165 core-js polyfill\uff0c\u8fd9\u4e5f\u662f\u5bfc\u81f4\u5305\u4f53\u79ef\u589e\u52a0\u7684\u4e3b\u8981\u539f\u56e0\u3002",source:"@site/docs/\u524d\u7aef\u9879\u76eeBabel\u914d\u7f6e.md",sourceDirName:".",slug:"/\u524d\u7aef\u9879\u76eeBabel\u914d\u7f6e",permalink:"/Garfield-cli/docs/\u524d\u7aef\u9879\u76eeBabel\u914d\u7f6e",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u524d\u7aef\u9879\u76eeBabel\u914d\u7f6e.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u5206\u6790\u5de5\u5177",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u6027\u80fd\u5206\u6790\u5de5\u5177"},next:{title:"\u5982\u4f55\u7528Webpack\u89e3\u51b3\u5b9e\u9645\u4e1a\u52a1\u95ee\u9898",permalink:"/Garfield-cli/docs/\u5982\u4f55\u7528Webpack\u89e3\u51b3\u5b9e\u9645\u4e1a\u52a1\u95ee\u9898"}},o={},s=[{value:"@babel/preset-env\u3001@babel/preset-react\u3001@babel/preset-typescript",id:"babelpreset-envbabelpreset-reactbabelpreset-typescript",level:2},{value:"1\uff09\u7b2c\u4e09\u65b9\u5e93\u914d\u7f6e",id:"1\u7b2c\u4e09\u65b9\u5e93\u914d\u7f6e",level:3},{value:"2\uff09\u4e1a\u52a1\u5de5\u7a0b\u914d\u7f6e",id:"2\u4e1a\u52a1\u5de5\u7a0b\u914d\u7f6e",level:3},{value:"3\uff09\u662f\u5426\u9700\u8981\u914d\u7f6e\u8bed\u6cd5\u63d2\u4ef6",id:"3\u662f\u5426\u9700\u8981\u914d\u7f6e\u8bed\u6cd5\u63d2\u4ef6",level:3},{value:"@babel/plugin-transform-runtime",id:"babelplugin-transform-runtime",level:2},{value:"Babel \u914d\u7f6e\u4f18\u5316\u65b9\u6848",id:"babel-\u914d\u7f6e\u4f18\u5316\u65b9\u6848",level:2},{value:"\u518d\u770b Babel",id:"\u518d\u770b-babel",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],b={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,l.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u524d\u7aef\u9879\u76ee-babel-\u914d\u7f6e"},"\u524d\u7aef\u9879\u76ee Babel \u914d\u7f6e"),(0,a.kt)("p",null,"Babel \u4e3b\u8981\u4f5c\u7528\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\u8f6c\u6362"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"API \u517c\u5bb9"),"\u3002\u5728\u8bed\u6cd5\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u4f1a\u5f15\u5165\u4e00\u4e9b helper \u51fd\u6570\uff0cAPI \u517c\u5bb9\u5219\u4f1a\u5f15\u5165 core-js polyfill\uff0c\u8fd9\u4e5f\u662f\u5bfc\u81f4\u5305\u4f53\u79ef\u589e\u52a0\u7684\u4e3b\u8981\u539f\u56e0\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0cBabel \u5f15\u5165 helper \u51fd\u6570\u4f1a\u589e\u52a0\u526f\u4f5c\u7528\uff0c\u8bed\u6cd5\u8f6c\u6362\u6709\u65f6\u5019\u8fd8\u4f1a\u5c06 ESM \u8f6c\u4e3a CJS\uff08\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6709\u4e9b Webpack1.x \u7684\u5de5\u7a0b\u4e5f\u53ef\u4ee5\u7528 ESM \u7684\u539f\u56e0\uff09\uff0c\u8fd9\u4e24\u4e2a\u56e0\u7d20\u8fd8\u4f1a\u5bfc\u81f4 Tree-Shaking \u5931\u6548\u3002"),(0,a.kt)("h2",{id:"babelpreset-envbabelpreset-reactbabelpreset-typescript"},"@babel/preset-env\u3001@babel/preset-react\u3001@babel/preset-typescript"),(0,a.kt)("h3",{id:"1\u7b2c\u4e09\u65b9\u5e93\u914d\u7f6e"},"1\uff09\u7b2c\u4e09\u65b9\u5e93\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u65b9\u5e93\u53ea\u505a\u8bed\u6cd5\u8f6c\u6362\uff0c\u4e0d\u5f15\u5165 polyfill\uff08",(0,a.kt)("inlineCode",{parentName:"strong"},"useBuiltIns: false"),"\uff09"),"\u3002\u7b2c\u4e09\u65b9\u5e93\u4e3a\u4ec0\u4e48\u4e0d\u5f15\u5165 polyfill\uff0c\u4e3b\u8981\u662f polyfill \u5f80\u5f80\u4f53\u79ef\u5f88\u5927\uff0c\u540c\u65f6\u524d\u7aef\u4e1a\u52a1\u5de5\u7a0b\u4f1a\u5b89\u88c5\u5f88\u591a\u7b2c\u4e09\u65b9\u5e93\uff0c\u5982\u679c\u6bcf\u4e2a\u5e93\u90fd\u5f15\u5165\u81ea\u5df1\u7684 polyfill\uff0c\u663e\u7136\u4f1a\u9020\u6210\u4e1a\u52a1\u5de5\u7a0b\u6a21\u5757\u5197\u4f59\u3002\u800c\u4e14\u7b2c\u4e09\u65b9\u5e93\u5982\u679c\u5f15\u5165 polyfill\uff0c\u663e\u7136\u662f\u65e0\u6cd5\u6839\u636e\u524d\u7aef\u4e1a\u52a1\u5de5\u7a0b ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u52a8\u6001\u8c03\u6574\u3002\u7b2c\u4e09\u65b9\u5e93\u662f\u5426\u53ef\u4ee5\u4e0d\u505a\u8bed\u6cd5\u8f6c\u6362\uff0c\u4e0d\u884c\u56e0\u4e3a\u4e3a\u4e86\u63d0\u5347\u4e1a\u52a1\u5de5\u7a0b\u6784\u5efa\u6548\u7387\uff0c\u5f80\u5f80\u9700\u8981\u6700\u5c0f\u5316 loader \u4f5c\u7528\u8303\u56f4\uff0c\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-loader")," \u53ea\u5904\u7406\u4e1a\u52a1\u5de5\u7a0b\u5185\u90e8\u7684\u4ee3\u7801\uff0c\u5bf9\u4e8e\u7b2c\u4e09\u65b9\u5e93\u4e00\u822c\u662f\u76f4\u63a5\u6253\u5305\uff0c\u4e0d\u505a\u8bed\u6cd5\u8f6c\u6362\u4f1a\u5bfc\u81f4\u517c\u5bb9\u6027\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  presets: [\n    "@babel/preset-typescript",\n    [\n      "@babel/preset-env",\n      {\n        // \u7b2c\u4e09\u65b9\u5e93\u65e0\u6cd5\u6839\u636e\u524d\u7aef\u4e1a\u52a1\u5de5\u7a0b `target` \u52a8\u6001\u8c03\u6574\n        // \u5982\u679c\u9700\u8981\u652f\u6301\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\uff0c\u5219\u9700\u8981\u8f6c\u8bd1\u6240\u6709 ES next \u8bed\u6cd5\n        // \u56e0\u6b64 `bugfixes` \u5728\u8fd9\u91cc\u6ca1\u6709\u610f\u4e49\n        // bugfixes: true,\n        // \u4fdd\u7559 ES Module\n        // \u4e1a\u52a1\u5de5\u7a0b\u5982\u679c\u6ca1\u6709\u7528\u5230\u67d0\u4e9b\u5bfc\u51fa\u53ef\u4ee5 Tree-Shaking\n        modules: false,\n        // \u53ea\u505a\u8bed\u6cd5\u8f6c\u6362\uff0c\u4e0d\u5f15\u5165 polyfill\n        useBuiltIns: false,\n      }\n    ],\n    [\n      "@babel/preset-react",\n      {\n        // \u7ec4\u4ef6\u5e93\u63a8\u8350 classic JSX\n        // \u53ef\u4ee5\u517c\u5bb9\u5404\u79cd\u8001\u5de5\u7a0b\n        runtime: "classic",\n      }\n    ]\n  ]\n}\n')),(0,a.kt)("h3",{id:"2\u4e1a\u52a1\u5de5\u7a0b\u914d\u7f6e"},"2\uff09\u4e1a\u52a1\u5de5\u7a0b\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e1a\u52a1\u5de5\u7a0b\u9700\u8981\u8bed\u6cd5\u8f6c\u6362\uff0c\u540c\u65f6\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"strong"},"target")," \u914d\u7f6e\u5168\u91cf\u5f15\u5165 polyfill\uff08",(0,a.kt)("inlineCode",{parentName:"strong"},'useBuiltIns: "entry"'),"\uff09"),"\u3002\u4e1a\u52a1\u5de5\u7a0b\u80fd\u5426\u6309\u9700\u5f15\u5165 polyfill\uff08",(0,a.kt)("inlineCode",{parentName:"p"},'useBuiltIns: "usage"'),"\uff09\uff0c\u4e0d\u80fd\u56e0\u4e3a\u524d\u9762\u8bf4\u4e86\uff0c\u51fa\u4e8e\u4f53\u79ef\u8003\u8651\u7b2c\u4e09\u65b9\u5e93\u53d1\u5305\u4e00\u822c\u90fd\u4e0d\u5f15\u5165 polyfill\uff0c\u51fa\u4e8e\u6784\u5efa\u6027\u80fd\u8003\u8651 ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-loader")," \u4e00\u822c\u4e0d\u4f1a\u5904\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e0b\u7684\u4ee3\u7801\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ea\u80fd\u5168\u91cf\u5f15\u5165 polyfill \u786e\u4fdd\u53ef\u4ee5\u547d\u4e2d\u7b2c\u4e09\u65b9\u5e93\u7684 API\u3002"),(0,a.kt)("p",null,"\u8fd9\u8fb9\u9700\u8981\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"bugfixes")," \u914d\u7f6e\u3002\u8be5\u9009\u9879\u5408\u5e76\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-modules")," \u7279\u6027\uff0c\u542f\u7528\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u4f1a\u5c1d\u8bd5\u5c06\u9ad8\u7248\u672c\u8bed\u6cd5\uff0c\u8f6c\u6362\u4e3a\u76ee\u6807\u6d4f\u89c8\u5668\u517c\u5bb9\u7684\u6700\u63a5\u8fd1\u7684\u8bed\u6cd5\uff0c\u53ef\u4ee5\u6781\u5927\u51cf\u5c0f\u7f16\u8bd1\u540e\u7684\u4f53\u79ef\uff0cBabel 8 \u5c06\u9ed8\u8ba4\u542f\u7528\u8be5\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  presets: [\n   "@babel/preset-typescript",\n    [\n      "@babel/preset-env",\n      {\n        // \u542f\u7528 `@babel/preset-modules` \u7279\u6027\uff0c\u9ed8\u8ba4 false\n        // \u5c06\u9ad8\u7248\u672c\u8bed\u6cd5\uff0c\u8f6c\u6362\u4e3a\u76ee\u6807\u6d4f\u89c8\u5668\u517c\u5bb9\u7684\u6700\u63a5\u8fd1\u7684\u8bed\u6cd5\n        // \u53ef\u4ee5\u6781\u5927\u51cf\u5c0f\u7f16\u8bd1\u540e\u7684\u4f53\u79ef\n        // Babel 8 \u5c06\u9ed8\u8ba4\u542f\u7528\u8be5\u914d\u7f6e\n        bugfixes: true,\n        // \u66f4\u517c\u5bb9 spec\uff0c\u4f46\u4f1a\u53d8\u6162\uff0c\u6240\u4ee5\u4e0d\u5f00\n        spec: false,\n        // \u63a8\u8350\u7528 top level \u7684 assumptions \u914d\u7f6e\n        loose: false,\n        // \u4fdd\u7559 ES Module \u8bed\u6cd5\uff0c\u4ea4\u7ed9 webpack \u5904\u7406\uff0c\u7528\u6765\u652f\u6301 Tree-Shaking\n        modules: false,\n        // \u4f7f\u7528 entry \u65b9\u5f0f\uff0c\u6309\u7167 target \u914d\u7f6e\u5168\u91cf\u5f15\u5165 polyfill\u3001\u4ee5\u53ca\u63d0\u6848\u9636\u6bb5\u7684 API\n        // \u9700\u8981\u6ce8\u610f\uff0c\u76f4\u63a5\u914d\u7f6e `useBuiltIns: "entry"` \u4e0d\u4f1a\u5f15\u5165 polyfill\n        // \u8fd8\u9700\u8981\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u52a0\u4e00\u53e5 `import "core-js/stable";`\n        // \u5efa\u8bae\u6839\u636e\u9002\u914d\u76ee\u6807\u5408\u7406\u914d\u7f6e `browserslist`\uff0c\u4ee5\u51cf\u5c0f polyfill \u4f53\u79ef\n        useBuiltIns: "entry",\n        // \u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 core-js\n        corejs: "3.0"\n      }\n    ],\n    [\n      "@babel/preset-react",\n      {\n        // \u4e1a\u52a1\u5de5\u7a0b\u63a8\u8350 automatic JSX\n        // \u4e0d\u9700\u8981\u6587\u4ef6\u9876\u90e8\u663e\u5f0f import React\n        // \u8fd8\u53ef\u4ee5\u5c0f\u5e45\u4f18\u5316\u4ea7\u7269\u4f53\u79ef\n        // React 17 \u5f00\u59cb\u652f\u6301\n        runtime: "automatic",\n      }\n    ]\n  ]\n}\n')),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},'useBuiltIns: "entry"')," \u914d\u7f6e\u5b9e\u9645\u4e0a\u4e5f\u5b58\u5728\u95ee\u9898\uff0c\u5728\u6784\u5efa\u7684\u65f6\u5019\u53ea\u80fd\u9488\u5bf9\u4e00\u4e2a\u56fa\u5b9a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u5f15\u5165 polyfill\uff0c\u5bfc\u81f4\u9ad8\u7248\u672c\u6d4f\u89c8\u5668\u4e5f\u4f1a\u52a0\u8f7d\u5f88\u591a\u4e0d\u9700\u8981\u7684\u4ee3\u7801\u3002\u6700\u597d\u7684\u505a\u6cd5\u662f\u7528\u4e00\u4e9b polyfill CDN\uff0c\u6309\u7167\u5ba2\u6237\u7aef\u5b9e\u9645 User-Agent \u52a8\u6001\u4e0b\u53d1 polyfill\u3002\u8fd9\u6837\u7528\u6700\u65b0\u7248 Chrome \u6d4f\u89c8\u5668\u8bbf\u95ee\u8be5\u670d\u52a1\uff0c\u8fd4\u56de\u7684 JS \u5185\u5bb9\u662f\u7a7a\u7684\u3002\u4f46\u662f\u7528 CDN \u5728\u5185\u7f51\u8bbf\u95ee\u53ef\u80fd\u4f1a\u6302\uff0c\u8fd9\u79cd\u60c5\u51b5\u9700\u8981\u79c1\u6709\u90e8\u7f72\u3002"),(0,a.kt)("h3",{id:"3\u662f\u5426\u9700\u8981\u914d\u7f6e\u8bed\u6cd5\u63d2\u4ef6"},"3\uff09\u662f\u5426\u9700\u8981\u914d\u7f6e\u8bed\u6cd5\u63d2\u4ef6"),(0,a.kt)("p",null,"Babel v7.22.0 \u53d1\u5e03\uff0c\u771f\u7684\u5f88 Breaking \uff0c\u7206\u6740\u5168\u4e16\u754c\u3002"),(0,a.kt)("p",null,"\u4e3a\u5565 Breaking \u4e86\u5168\u4e16\u754c\uff1f\u56e0\u4e3a\u6709\u4e00\u5927\u6279 es \u529f\u80fd\u8fdb\u5165\u4e86 stage 4 \uff0c\u6240\u4ee5\u8fd9\u4e2a\u7248\u672c babel \u628a\u8d85\u7ea7\u591a proposal \u7684\u5305\u540d\u90fd\u6539\u4e86\uff08\u9ed8\u8ba4\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u90fd\u5305\u542b\u4e86\uff09\uff0c\u5149\u6539\u540d\u4e86\u8fd8\u4e0d\u7b97\u5b8c\uff0c\u4f60\u731c\u600e\u4e48\u7740\uff0c\u65e7\u7248\u672c\u7684\u5168\u90e8\u653e\u5f03\u66f4\u65b0\u4e86\uff0c\u610f\u5473\u7740\u5982\u679c\u4f60\u7528\u4e86\u542b\u6709 proposal \u540d\u5b57\u7684 babel \u63d2\u4ef6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2023/05/26/7.22.0"},"https://babeljs.io/blog/2023/05/26/7.22.0"))),(0,a.kt)("p",null,"\u5728 CRA babel \u914d\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230\u542f\u7528\u4e86\u8f83\u591a\u8bed\u6cd5\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  plugins: [\n    // TypeScript \u88c5\u9970\u5668\u9700\u8981\u7528\u8be5\u63d2\u4ef6\n    "@babel/plugin-proposal-decorators",\n    // \u7c7b\u5c5e\u6027\u8bed\u6cd5\uff0c\u5728 React \u7c7b\u7ec4\u4ef6\u7528\u5927\u91cf\u4f7f\u7528\n    "@babel/plugin-proposal-class-properties",\n    "@babel/plugin-proposal-private-methods",\n    "@babel/plugin-proposal-private-property-in-object",\n    "@babel/plugin-proposal-numeric-separator",\n    "@babel/plugin-proposal-optional-chaining",\n    "@babel/plugin-proposal-nullish-coalescing-operator",\n  ]\n}\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0\u63d2\u4ef6\u4e2d\uff0c\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-decorators"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-private-methods")," \u4ecd\u5728\u63d0\u6848\u9636\u6bb5\uff0c\u5176\u4ed6\u8bed\u6cd5\u5df2\u7ecf\u5168\u90e8\u7eb3\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),"\uff0c\u65e0\u9700\u5355\u72ec\u5b89\u88c5\u63d2\u4ef6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins-list"},"https://babeljs.io/docs/en/plugins-list"))),(0,a.kt)("h2",{id:"babelplugin-transform-runtime"},"@babel/plugin-transform-runtime"),(0,a.kt)("p",null,"\u89e3\u51b3\u4e86 polyfill \u7684\u95ee\u9898\uff0c\u63a5\u4e0b\u6765\u89e3\u51b3 helper \u51fd\u6570\u95ee\u9898\u3002Babel \u505a\u8bed\u6cd5\u8f6c\u6362\u7684\u65f6\u5019\uff0c\u4f1a\u5f15\u5165\u4e00\u4e9b helper \u51fd\u6570\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8fd9\u4e9b helper \u51fd\u6570\u90fd\u662f\u5185\u8054\u8fdb\u6bcf\u4e2a\u6587\u4ef6\u91cc\u9762\uff0c\u5982\u679c\u6a21\u5757\u5f88\u591a\u4e5f\u4f1a\u9020\u6210\u4e00\u4e9b\u5197\u4f59\u95ee\u9898\uff0c\u4f8b\u5982\u76f8\u540c\u7684 helper \u51fd\u6570\u91cd\u590d\u6253\u5305\u3002\u8fd9\u8fb9\u6211\u4eec\u53ef\u4ee5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u63d2\u4ef6\uff0c\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/runtime")," \u5f15\u5165 helper \u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u8fd8\u53ef\u4ee5\u7528\u6765\u5f15\u5165 polyfill\u3002\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684\u533a\u522b\u5728\u4e8e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u5f15\u5165\u7684 polyfill \u63d0\u4f9b\u4e86\u6c99\u7bb1\u673a\u5236\uff0c\u5373\u4e0d\u662f\u901a\u8fc7\u5168\u5c40\u6c61\u67d3\u7684\u65b9\u5f0f\u5b9e\u73b0\u7684\uff0c\u8fd9\u6837\u7684\u597d\u5904\u662f\u4e0d\u4f1a\u4e0e\u5176\u4ed6\u7b2c\u4e09\u65b9 polyfill \u51b2\u7a81\u3002\u4f46\u662f\u6ce8\u610f\u5b58\u5728\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@babel/preset-env")," \u53ef\u4ee5\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," \u914d\u7f6e\u52a8\u6001\u5f15\u5165 polyfill\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"li"},"@babel/plugin-transform-runtime")," \u5219\u4e0d\u652f\u6301\uff08\u8fd9\u662f\u5df2\u77e5\u95ee\u9898\uff0c\u5728 Babel 8 \u4e2d\u4fee\u590d\uff09\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u800c\u4e14\u6c99\u7bb1\u673a\u5236\u9700\u8981 Babel \u5904\u7406\u6bcf\u4e2a\u6587\u4ef6\uff08\u5305\u62ec\u7b2c\u4e09\u65b9\u5e93\uff0c\u5426\u5219\u5c31\u65e0\u6cd5\u4fdd\u8bc1\u7b2c\u4e09\u65b9\u5e93 API \u517c\u5bb9\u6027\uff09\uff0c\u5bf9\u4e1a\u52a1\u5de5\u7a0b\u6765\u8bf4\u663e\u7136\u662f\u4e0d\u5408\u9002\u7684\uff1b")),(0,a.kt)("p",null,"\u76f8\u6bd4\u4e4b\u4e0b\u5168\u5c40\u6c61\u67d3\u65b9\u6848\u53ea\u9700\u5728\u5165\u53e3\u6587\u4ef6\u5904\u7edf\u4e00\u5f15\u5165\u5c31\u597d\u4e86\uff0c\u56e0\u6b64\u4e1a\u52a1\u5de5\u7a0b\u5f15\u5165 polyfill \u8fd8\u662f\u5efa\u8bae\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  plugins: [\n    [\n      "@babel/plugin-transform-runtime",\n      {\n        // \u4e0d\u9700\u8981\u8be5\u63d2\u4ef6\u5f15\u5165 polyfill\n        // \u9ed8\u8ba4\u5c31\u662f false\n        corejs: false,\n        // helper \u51fd\u6570\u4ece @babel/runtime \u5f15\u5165\n        // \u9ed8\u8ba4\u5c31\u662f true\n        helpers: true,\n        // regeneratorRuntime \u662f\u5426\u901a\u8fc7\u6a21\u5757\u5bfc\u5165\uff08Babel 7.18.0 \u540e\u652f\u6301\uff09\n        // \u5982\u679c\u4e3a false \u5219\u4ece\u5168\u5c40\u4f5c\u7528\u57df\u83b7\u53d6\n        // \u9ed8\u8ba4\u4e3a true\n        regenerator: true,\n        // true \u8868\u793a\u6ce8\u5165\u7684 helpers \u6a21\u5757\u4e3a ESM \u5bfc\u51fa\n        // \u8bbe\u7f6e\u4e3a false \u65f6\u8868\u793a\u4f7f\u7528 CJS \u5bfc\u51fa\n        // \u6ce8\u610f\u8be5\u914d\u7f6e\u5728 Babel 7.13.0 \u4e4b\u540e\u5df2\u7ecf\u5e9f\u5f03\u4e86\n        // \u6839\u636e @babel/runtime \u7684 package.json \u4e2d\u7684 exports \u5b57\u6bb5\u51b3\u5b9a\u7528\u54ea\u79cd\u6a21\u5757\u89c4\u8303\n        useESModules: false,\n        // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ctransform-runtime \u4f1a\u4ece\u5f53\u524d\u9879\u76ee\u7684 node_mouldes \u6587\u4ef6\u5939\n        // \u5bfb\u627e @babel/runtime \u6a21\u5757\u4ece\u800c\u5f15\u5165\u5bf9\u5e94\u7684 helpers \u6a21\u5757\n        // \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6bd4\u5982 monorepo \u9879\u76ee\u3001npm link \u7684\u5305\u6216\u8005\u4e00\u4e9b\u7528\u6237\u5916\u90e8\u8c03\u7528\u7684 CLI\n        // \u4f7f\u7528\u9ed8\u8ba4\u7684 helpers \u67e5\u627e\u89c4\u5219\u662f\u4f1a\u4ea7\u751f\u95ee\u9898\u7684\n        // \u8bbe\u7f6e absoluteRuntime: true \u5141\u8bb8\u6211\u4eec\u5728 Babel \u5f00\u59cb\u7f16\u8bd1\u524d\n        // \u9884\u5148\u89e3\u6790\u4e00\u6b21 runtime \u6240\u5728\u4f4d\u7f6e\uff0c\u4ece\u800c\u5c06\u6307\u5b9a\u7684\u7edd\u5bf9\u8def\u5f84\u62fc\u63a5\u5230\u8f93\u51fa\u7684\u4ee3\u7801\u4e4b\u524d\n        // \u6ce8\u610f\u5982\u679c @babel/runtime \u662f\u4f5c\u4e3a\u8fd0\u884c\u65f6\u4f9d\u8d56\uff08\u653e\u5230 dependencies \u91cc\u9762\u4e0d\u6253\u5305\uff09\n        // \u5219\u4e0d\u63a8\u8350\u542f\u7528\u7edd\u5bf9\u8def\u5f84\uff0c\u5728\u5176\u4ed6\u5de5\u7a0b\u5f15\u5165\u8be5\u5e93\u6253\u5305\u4f1a\u62a5\u9519\n        // \u9ed8\u8ba4\u4e3a false\n        absoluteRuntime: false,\n        version: "7.0.0-beta.0"\n      }\n    ]\n  ]\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u53ef\u4ee5\u7528\u4e8e\u7b2c\u4e09\u65b9\u5e93\uff0c\u4f46\u662f\u6ce8\u610f\u4e3a\u4e86\u907f\u514d\u6a21\u5757\u91cd\u590d\u6253\u5305\uff0c\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/runtime")," \u4f5c\u4e3a peerDeps\u3002")),(0,a.kt)("h2",{id:"babel-\u914d\u7f6e\u4f18\u5316\u65b9\u6848"},"Babel \u914d\u7f6e\u4f18\u5316\u65b9\u6848"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u81ea\u5df1\u624b\u52a8\u914d\u7f6e Babel\uff0c\u53ef\u4ee5\u53c2\u8003 CRA \u7684 Webpack \u914d\u7f6e\u3002\u5b9e\u9645\u4e0a\uff0cCRA \u7ed9 Babel \u914d\u7f6e\u5355\u72ec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5305 ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-preset-react-app"),"\uff0c\u76f4\u63a5\u5b89\u88c5\u8fd9\u4e2a\u5305\uff0c\u7136\u540e\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528\u5c31\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  presets: ["react-app"]\n}\n')),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cCRA \u7684 Babel \u914d\u7f6e\u662f\u9488\u5bf9\u524d\u7aef\u4e1a\u52a1\u5de5\u7a0b\u7684\uff0c\u6240\u4ee5\u4e2a\u4eba\u5efa\u8bae\u6700\u597d\u8fd8\u662f\u719f\u6089\u3001\u638c\u63e1 Babel \u914d\u7f6e\u3002\u53e6\u5916\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f CRA \u7684 Webpack \u914d\u7f6e\u4e2d\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-loader")," \u4e5f\u914d\u7f6e\u4e86\u7f13\u5b58\u3002\u6211\u4eec\u77e5\u9053 Webpack 5 \u5f00\u7bb1\u5373\u7528\u81ea\u5e26 filesystem cache\uff0c\u4f46\u5b9e\u9645\u4e0a\u8fd9\u4e2a\u7f13\u5b58\u7684\u7c92\u5ea6\u6bd4\u8f83\u5927\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"cache.buildDependencies")," \u914d\u7f6e\u7684\u6587\u4ef6\u5185\u5bb9\u53d1\u751f\u53d8\u5316\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u7b49\uff09\uff0c\u7f13\u5b58\u4f1a\u5b8c\u5168\u5931\u6548\u800c\u6267\u884c\u5b8c\u6574\u7684\u7f16\u8bd1\u6784\u5efa\u3002\u5982\u679c\u7ed9 Babel \u4e5f\u914d\u7f6e\u7f13\u5b58\uff0c\u76f8\u5f53\u4e8e\u8bbe\u7f6e\u591a\u7ea7\u7f13\u5b58\uff0c\u80fd\u591f\u63d0\u5347\u7f13\u5b58\u590d\u7528\u7387\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.(js|mjs|jsx|ts|tsx)$/,\n        loader: require.resolve('babel-loader'),\n        options: {\n          // This is a feature of `babel-loader` for webpack (not Babel itself).\n          // It enables caching results in ./node_modules/.cache/babel-loader/\n          // directory for faster rebuilds.\n          cacheDirectory: true,\n          // See #6846 for context on why cacheCompression is disabled\n          cacheCompression: false,\n          compact: isEnvProduction,\n        }\n      },\n    ]\n  }\n}\n")),(0,a.kt)("h2",{id:"\u518d\u770b-babel"},"\u518d\u770b Babel"),(0,a.kt)("p",null,"1\u3001\u8bf4\u5230 Babel \u6211\u4f1a\u60f3\u5230\u7684\u4e00\u4e9b\u5173\u952e\u8bcd\uff0c\u8bed\u8a00\u7279\u6027\u3001tc39\u3001\u8865\u4e01\u3001\u6269\u5c55\u548c\u751f\u6001\u3001\u6162\uff0c\u4f60\u4f1a\u60f3\u5230\u5565\uff1f"),(0,a.kt)("p",null,"2\u3001Babel \u7684\u51fa\u53d1\u70b9\u662f\u8ba9\u5f00\u53d1\u8005\u63d0\u524d\u7528\u4e0a ECMAScript \u63d0\u6848\u91cc\u7684\u7279\u6027\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u7528\u4ed6\u6765\u6253\u8865\u4e01\u3001\u5b9e\u73b0 Code Mod\u3001\u8bc6\u522b\u6587\u4ef6\u7279\u5f81\u3001\u7ea6\u675f\u548c\u5361\u70b9\u3001magic \u529f\u80fd\u6bd4\u5982 auto css modules \u7b49"),(0,a.kt)("p",null,"3\u3001\u8bed\u8a00\u7279\u6027\u90fd\u662f Babel \u5b98\u65b9\u63d0\u4f9b\uff0c\u7531\u5f88\u591a\u63d2\u4ef6\u7ec4\u6210\uff0c\u8fd9\u4e9b\u7279\u6027\u5f52\u5c5e\u4e0d\u540c\u7684 Stage\uff0c\u4ece Stage 0 \u5230 3\uff0cpreset-env \u4e0d\u5305\u542b 3 \u4ee5\u4e0b\u7684\u8bed\u8a00\u7279\u6027\uff0c\u6240\u4ee5\u901a\u5e38\u4f7f\u7528\u65b9\u5f0f\u662f preset-env + \u624b\u9009\u7684 stage 3 \u4ee5\u4e0b\u7279\u6027"),(0,a.kt)("p",null,"4\u3001\u8bed\u8a00\u7279\u6027\u53c8\u5206\u4e24\u7c7b\uff0c\u7f16\u8bd1\u7c7b\u548c\u8865\u4e01\u7c7b\u3002\u524d\u8005\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 2, 3].map(n => n + 1)")," \u53ea\u8981\u7f16\u8bd1\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 2, 3].map(function (n) { return n + 1 })")," \u5c31\u597d\uff0c \u540e\u8005\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 2, 3].includes(1)")," \u7684 includes \u662f\u9700\u8981\u7ed9\u4e0d\u652f\u6301\u7684\u6d4f\u89c8\u5668\u989d\u5916 ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.includes")," \u8865\u4e01\u7684\uff0c\u6709\u4e9b\u7279\u6027\u9700\u8981\u4e24\u8005\u7ed3\u5408\u4f7f\u7528"),(0,a.kt)("p",null,"5\u3001\u8bed\u8a00\u7279\u6027\u7684\u7f16\u8bd1\u4f1a\u4ea7\u751f\u5f88\u591a\u8f85\u52a9\u4ee3\u7801\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"class {}")," \u4f1a\u9700\u8981 inherits\u3001setPrototypeOf\u3001createSuper\u3001getPrototypeOf\u3001classCallCheck \u7b49\u8f85\u52a9\u51fd\u6570\uff0cbabel \u7684\u7f16\u8bd1\u662f\u6587\u4ef6\u7ea7\u7684\uff0c\u6240\u4ee5\u4f1a\u4ea7\u751f\u5927\u91cf\u7684\u91cd\u590d\u4ee3\u7801\uff0c\u89e3\u6cd5\u662f plugin-transform-runtime + ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/runtime")," \u7684\u7ec4\u5408\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/runtime"),"  \u5c01\u88c5\u4e0a\u8ff0\u8f85\u52a9\u51fd\u6570\uff0cplugin-transform-runtime \u8ba9\u7f16\u8bd1\u4ea7\u7269\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/runtime")),(0,a.kt)("p",null,"6\u3001plugin-transform-runtime \u4e0d\u8981\u914d corejs \u5e26\u4e0a\u8865\u4e01\uff0c\u4e0d\u7ba1\u662f\u9879\u76ee\u8fd8\u662f\u7ec4\u4ef6\u3002\u5927\u5bb6\u53ef\u4ee5\u60f3\u60f3\u4e3a\u4ec0\u4e48\uff0c\u7b97\u662f\u8fd9\u7bc7\u6587\u7ae0\u7559\u7684\u4e00\u9053\u9898"),(0,a.kt)("p",null,"7\u3001\u8865\u4e01\u65b9\u6848 Babel \u63d0\u4f9b\u4e86\u4e24\u79cd\uff0c\u901a\u8fc7 targets \u914d\u7f6e + preset-env \u7684 useBuiltIns \u914d\u7f6e\u5b9e\u73b0\uff0c\u4e24\u79cd\u65b9\u6848\u5206\u522b\u5bf9\u5e94\u7684\u662f entry \u548c usage \u503c\uff0c\u524d\u8005\u4f1a\u66ff\u6362 core-js import \u4e3a\u7279\u6027\u5217\u8868\uff0c\u540e\u8005\u4f1a\u6309\u4f7f\u7528\u5f15\u5165\u7528\u5230\u7684\u7279\u6027\u5217\u8868"),(0,a.kt)("p",null,"8\u3001Babel \u4f5c\u4e3a\u7f16\u8bd1\u5668\u4e0d\u5e94\u8be5\u5904\u7406 modules \u7c7b\u578b\u7684\u8f6c\u6362\uff0c\u6bd4\u5982 esm \u5230 cjs \u6216 systemjs\uff0c\u8fd9\u5c42\u5904\u7406\u5e94\u4ea4\u7ed9 Bundler\uff0cBundler \u901a\u5e38\u8fd8\u8981\u4f9d\u8d56 esm \u6a21\u5757\u505a tree-shaking\uff0c\u6240\u4ee5 preset-env \u91cc\u7684 modules \u662f\u4e2a\u5e9f\u914d\u7f6e\uff0c\u59cb\u7ec8\u8bbe\u4e3a false \u5c31\u597d"),(0,a.kt)("p",null,"9\u3001\u6162\uff01\u662f\u4e2a\u5927\u95ee\u9898\u3002\u5f71\u54cd\u7684\u4e0d\u4ec5\u6709\u5f00\u53d1\u8005\u7684\u6548\u7387\uff0c\u8fd8\u6709\u5de5\u7a0b\u5316\u65b9\u6848\u3002\u5982\u679c\u4e0d\u6162\uff0cnode_modules \u4e5f\u8d70 babel \u7f16\u8bd1\uff0c\u90a3\u5f88\u591a\u95ee\u9898\u6839\u672c\u4e0d\u5b58\u5728\u3002\u6bd4\u5982\u8865\u4e01\u65b9\u6848\u53ef\u4ee5\u5207\u5230 usage \u6309\u9700\u6253\uff0c\u6574\u4f53\u5c3a\u5bf8\u4f1a\u66f4\u5c0f\uff1b\u6bd4\u5982\u90e8\u5206\u4f9d\u8d56\u6ca1\u6709\u7528 es5 \u8bed\u6cd5\u5bfc\u81f4\u7684 ie11 \u517c\u5bb9\u95ee\u9898\uff1b\u6bd4\u5982\u7ec4\u4ef6\u53d1\u5e03\u53ef\u4ee5\u7528 ts \u5199\u4e0d\u7528\u7f16\u8bd1\u76f4\u63a5\u53d1\u5e03\u3002\u8fd9\u7ed9 swc \u7b49\u7ade\u5bf9\u65b9\u6848\u7559\u4e86\u5f88\u591a\u53ef\u80fd\u6027\u3002"),(0,a.kt)("p",null,"10\u3001\u751f\u6001\u5f88\u597d\uff0c\u5374\u6ca1\u5565\u53ef\u7528\u7684\u3002\u6700\u540e\u4e00\u6761\u672c\u60f3\u63a8\u8350\u4e00\u4e9b\u4e09\u65b9\u63d2\u4ef6\uff0c\u7ffb\u4e86\u4e0b\u53d1\u73b0\u5e76\u6ca1\u6709\u5565\uff0c\u76ee\u524d\u5728 umi \u5728\u7528\u7684\u6709 import\u3001macros\u3001svgr-webpack \u548c named-asset-import\u3002\u56e0\u4e3a\u5f88\u591a Babel \u80fd\u505a\u7684\u5728 Bundler \u5c42\u4e5f\u80fd\u505a\u800c\u4e14\u66f4\u5408\u7406\uff0cBabel \u8986\u76d6\u8303\u56f4\u53ea\u6709\u9879\u76ee\u4ee3\u7801\uff0cBundler \u5c42\u8986\u76d6\u6574\u4e2a\u4ea7\u7269\uff0c\u50cf remove-console \u8fd9\u79cd\u5728 Bundler \u5c42\u505a\u5c31\u66f4\u5408\u7406\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7179049172706787387"},"\u4f60\u6784\u5efa\u7684\u4ee3\u7801\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u5927")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7151653067593613320"},"\u4e00\u6587\u804a\u5b8c\u524d\u7aef\u9879\u76ee\u4e2d\u7684Babel\u914d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7051355444341637128"},"\u300c\u524d\u7aef\u57fa\u5efa\u300d\u63a2\u7d22\u4e0d\u540c\u9879\u76ee\u573a\u666f\u4e0bBabel\u6700\u4f73\u5b9e\u8df5\u65b9\u6848")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7028584587227824158"},"\u4eceTree Shaking\u6765\u8d70\u8fdbBabel\u63d2\u4ef6\u5f00\u53d1\u8005\u7684\u4e16\u754c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7025237833543581732"},"\u300c\u524d\u7aef\u57fa\u5efa\u300d\u5e26\u4f60\u5728Babel\u7684\u4e16\u754c\u4e2d\u7545\u6e38")))}c.isMDXComponent=!0}}]);