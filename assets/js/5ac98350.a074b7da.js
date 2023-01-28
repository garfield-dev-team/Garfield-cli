"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5471],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2416:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=t(3117),i=t(102),l=(t(7294),t(3905)),r=["components"],p={sidebar_position:1},o="\u5e38\u7528\u4f18\u5316\u65b9\u6848",s={unversionedId:"Webpack\u4f18\u5316\u65b9\u6848/\u5e38\u7528\u4f18\u5316\u65b9\u6848",id:"Webpack\u4f18\u5316\u65b9\u6848/\u5e38\u7528\u4f18\u5316\u65b9\u6848",title:"\u5e38\u7528\u4f18\u5316\u65b9\u6848",description:"1. \u533a\u5206\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883",source:"@site/docs/Webpack\u4f18\u5316\u65b9\u6848/\u5e38\u7528\u4f18\u5316\u65b9\u6848.md",sourceDirName:"Webpack\u4f18\u5316\u65b9\u6848",slug:"/Webpack\u4f18\u5316\u65b9\u6848/\u5e38\u7528\u4f18\u5316\u65b9\u6848",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u5e38\u7528\u4f18\u5316\u65b9\u6848",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack\u4f18\u5316\u65b9\u6848/\u5e38\u7528\u4f18\u5316\u65b9\u6848.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u524d\u8a00",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u524d\u8a00"},next:{title:"\u542f\u7528 Tree-Shaking \u529f\u80fd",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u542f\u7528Tree-Shaking\u529f\u80fd"}},c={},u=[{value:"1. \u533a\u5206\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883",id:"1-\u533a\u5206\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883",level:2},{value:"2. \u7b2c\u4e09\u65b9\u5e93\u4f18\u5316",id:"2-\u7b2c\u4e09\u65b9\u5e93\u4f18\u5316",level:2},{value:"3. \u614e\u7528 source-map",id:"3-\u614e\u7528-source-map",level:2},{value:"4. \u542f\u7528 CSS\u3001less\u3001sass \u6a21\u5757\u5316",id:"4-\u542f\u7528-csslesssass-\u6a21\u5757\u5316",level:2},{value:"5. \u542f\u7528 ESLint",id:"5-\u542f\u7528-eslint",level:2},{value:"6. \u9759\u6001\u8d44\u6e90\u90e8\u7f72\u5230 CDN",id:"6-\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u5230-cdn",level:2},{value:"7. \u542f\u7528 Long Term Cache",id:"7-\u542f\u7528-long-term-cache",level:2},{value:"8. \u6e05\u9664\u65e0\u7528 CSS",id:"8-\u6e05\u9664\u65e0\u7528-css",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5e38\u7528\u4f18\u5316\u65b9\u6848"},"\u5e38\u7528\u4f18\u5316\u65b9\u6848"),(0,l.kt)("h2",{id:"1-\u533a\u5206\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883"},"1. \u533a\u5206\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e Webpack \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"mode")," \u9009\u9879\u53ef\u4ee5\u4f7f\u7528\u76f8\u5e94\u6a21\u5f0f\u7684\u5185\u7f6e\u4f18\u5316\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"development"),"\uff1a\u4f1a\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"DefinePlugin")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"process.env.NODE_ENV")," \u7684\u503c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"development"),"\uff0c\u4e3a\u6a21\u5757\u548c chunk \u542f\u7528\u6709\u6548\u7684\u540d\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"production"),"\uff1a\u4f1a\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"DefinePlugin")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"process.env.NODE_ENV")," \u7684\u503c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"production"),"\uff0c\u4e3a\u6a21\u5757\u548c chunk \u542f\u7528\u786e\u5b9a\u6027\u7684\u6df7\u6dc6\u540d\u79f0\uff0c\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"FlagDependencyUsagePlugin")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"FlagIncludedChunksPlugin"),"\uff0c\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"ModuleConcatenationPlugin")," \u5c1d\u8bd5\u8fdb\u884c\u6a21\u5757\u5408\u5e76\uff0c\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"NoEmitOnErrorsPlugin"),"\uff0c\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"TerserPlugin")," \u8fdb\u884c\u4ee3\u7801\u538b\u7f29\uff08\u5982\u679c\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"optimization.usedExports")," \u8fd8\u4f1a\u8fdb\u884c TreeShaking\uff09\uff1b")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u201c\u73af\u5883\u53d8\u91cf\u201d\u9700\u8981\u6ce8\u610f\u7684\u95ee\u9898"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"1. \u4e3a\u4ec0\u4e48\u4f7f\u7528 cross-env \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf")),(0,l.kt)("p",{parentName:"admonition"},"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u7528 npm scripts \u8bbe\u7f6e Node.js \u7684\u73af\u5883\u53d8\u91cf\uff0c\u901a\u5e38\u90fd\u4f1a\u4f7f\u7528 cross-env \u8fd9\u4e2a\u5e93\u3002\u5176\u5b9e\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u5728 MacOS \u548c linux \u7cfb\u7edf\u76f4\u63a5\u901a\u8fc7 shell \u547d\u4ee4\u5c31\u53ef\u4ee5\u4e86\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"PORT=8066"),"\uff0c\u4f46\u662f Win \u8bbe\u7f6e\u7684\u65b9\u5f0f\u4e0d\u592a\u4e00\u6837\uff0c\u6240\u4ee5 cross-env \u5b9e\u9645\u4e0a\u662f\u5b9e\u73b0\u4e86\u8de8\u5e73\u53f0\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"2. ",(0,l.kt)("inlineCode",{parentName:"strong"},".env")," \u6587\u4ef6\u662f\u5982\u4f55\u751f\u6548\u7684")),(0,l.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"dotenv")," \u8fd9\u4e2a\u5e93\uff0c\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e0b\u7684\u5185\u5bb9\u52a0\u8f7d\u5230 Node.js \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env")," \u5bf9\u8c61\u4e2d\uff0c\u6ce8\u610f key \u548c value \u90fd\u662f string \u7c7b\u578b\u3002"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"3. \u524d\u7aef\u9879\u76ee\u7684\u73af\u5883\u53d8\u91cf\u662f\u5982\u4f55\u751f\u6548\u7684")),(0,l.kt)("p",{parentName:"admonition"},"\u524d\u7aef\u9879\u76ee\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5b9e\u9645\u4e0a\u4e0d\u662f\u771f\u6b63\u7684\u73af\u5883\u53d8\u91cf\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\u662f\u8bbf\u95ee\u4e0d\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"process")," \u5bf9\u8c61\u7684\uff0c\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"DefinePlugin")," \u5728\u6253\u5305\u6784\u5efa\u7684\u65f6\u5019\uff0c\u5c06\u53d8\u91cf\u66ff\u6362\u4e3a\u5bf9\u5e94\u7684\u503c\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u8fd9\u91cc\u6709\u4e2a\u5751\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"DefinePlugin")," \u9ed8\u8ba4\u76f4\u63a5\u8fdb\u884c\u6587\u672c\u66ff\u6362\uff0c\u5982\u679c\u60f3\u8981\u66ff\u6362\u4e3a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\uff0c\u5219\u9700\u8981\u5728\u5b57\u7b26\u4e32\u4e2d\u518d\u52a0\u4e00\u4e2a\u5f15\u53f7\uff0c\u6216\u8005\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," \u5305\u88f9\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},'new webpack.DefinePlugin({\n  __DEV__: "true", // \u66ff\u6362\u4e3a\u5e03\u5c14\u503c\n  "process.env.NODE_ENV": JSON.stringify("development"), // \u66ff\u6362\u4e3a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\n})\n\n// \u6e90\u7801\nif (__DEV__) {\n  // ...\n}\n\nif (process.env.NODE_ENV === "development") {\n  // ...\n}\n\n// \u66ff\u6362\u5f97\u5230\u7684\u7ed3\u679c\nif (true) {\n  // ...\n}\n\nif ("development" === "development") {\n  // ...\n}\n'))),(0,l.kt)("h2",{id:"2-\u7b2c\u4e09\u65b9\u5e93\u4f18\u5316"},"2. \u7b2c\u4e09\u65b9\u5e93\u4f18\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u652f\u6301 Tree-Shaking \u7684\u5e93\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"lodash-es")),(0,l.kt)("li",{parentName:"ul"},"antd \u7ec4\u4ef6\u5e93\u4f7f\u7528\u6309\u9700\u5f15\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u5c3a\u5bf8\u30021\uff09\u5c11\u7528\u4f9d\u8d56\uff0c2\uff09\u9009\u62e9\u8f7b\u91cf\u7ea7\u7684\u4f9d\u8d56\uff0c\u6bd4\u5982\u7528 day.js \u4ee3\u66ff moment\uff0c\u7528 zustand \u4ee3\u66ff redux toolkit\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u4e00\u4e9b\u5e93\uff08\u4f8b\u5982\u524d\u7aef\u6846\u67b6\u7684\u8fd0\u884c\u65f6\u4ee3\u7801\uff09\u53ef\u4ee5\u6392\u9664\u6389\uff0c\u4e0d\u6253\u5305\uff0c\u4f7f\u7528\u5916\u94fe CDN \u7684\u65b9\u5f0f\u5f15\u5165")),(0,l.kt)("h2",{id:"3-\u614e\u7528-source-map"},"3. \u614e\u7528 source-map"),(0,l.kt)("p",null,"source-map \u662f\u4e00\u79cd\u5c06\u7ecf\u8fc7\u7f16\u8bd1\u3001\u538b\u7f29\u3001\u6df7\u6dc6\u7684\u4ee3\u7801\u4ee3\u7801\u6620\u5c04\u56de\u6e90\u7801\u7684\u6280\u672f\uff0c\u5b83\u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u8005\u8fc5\u901f\u5b9a\u4f4d\u5230\u66f4\u6709\u610f\u4e49\u3001\u66f4\u7ed3\u6784\u5316\u7684\u6e90\u7801\u4e2d\uff0c\u65b9\u4fbf\u8c03\u8bd5\u3002\u4e0d\u8fc7\uff0c\u540c\u6837\u7684 source-map \u64cd\u4f5c\u672c\u8eab\u4e5f\u6709\u5f88\u5927\u6027\u80fd\u5f00\u9500\uff0c\u5efa\u8bae\u8bfb\u8005\u6839\u636e\u5b9e\u9645\u573a\u666f\u614e\u91cd\u9009\u62e9\u6700\u5408\u9002\u7684 source-map \u65b9\u6848\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"eval-cheap-module-source-map")," \uff0c\u786e\u4fdd\u6700\u4f73\u7f16\u8bd1\u901f\u5ea6\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u73af\u5883\u4e0d\u5f00\u542f\u6216\u8005\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"hidden-source-map")," \uff1b")),(0,l.kt)("h2",{id:"4-\u542f\u7528-csslesssass-\u6a21\u5757\u5316"},"4. \u542f\u7528 CSS\u3001less\u3001sass \u6a21\u5757\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"css-loader")," \u9ed8\u8ba4\u4f1a\u4e3a\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"/\\.module\\.\\w+$/i")," \u7684\u6587\u4ef6\u542f\u7528 CSS module"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u9700\u8981 CSS module\uff0c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"options.modules = false")," \u4f1a\u63d0\u5347\u6027\u80fd\uff0c\u56e0\u4e3a\u907f\u514d\u4e86 CSS Modules \u7279\u6027\u7684\u89e3\u6790")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6700\u8fd1\u5728\u7814\u7a76 Webpack \u914d\u7f6e\uff0c\u53d1\u73b0\u4e86\u4e00\u4e2a\u7ec6\u8282\u3002\u4e3a\u4ec0\u4e48 Webpack loader \u914d\u7f6e\u90fd\u662f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},'"style-loader"'),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'require.resolve("style-loader")')," \u7b49\u65b9\u5f0f\uff0c\u800c\u4e0d\u662f\u76f4\u63a5 ",(0,l.kt)("inlineCode",{parentName:"p"},'require("style-loader")'),"\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5728 Node \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"require()")," \u5b9e\u9645\u4e0a\u662f\u4e00\u79cd JIT \u6027\u8d28\u7684\u52a0\u8f7d\uff0c\u5982\u679c\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"require()")," \u52a0\u8f7d\u6bd4\u8f83\u6602\u8d35\uff0c\u6027\u80fd\u5f00\u9500\u592a\u5927\u3002\u5b9e\u9645\u4e0a\u8fd9\u662f\u4e00\u79cd\u60f0\u6027\u52a0\u8f7d\u65b9\u5f0f\uff0c\u628a loader \u6a21\u5757\u4ee3\u7801\u52a0\u8f7d\u63a8\u8fdf\u5230\u9700\u8981\u8c03\u7528\u8be5 loader \u65f6\u8fdb\u884c\uff0c\u53ef\u4ee5\u6709\u6548\u63d0\u5347 Webpack \u542f\u52a8\u6548\u7387\uff0c\u540c\u65f6\u5982\u679c\u4e0d\u9700\u8981\u8c03\u7528\u8be5 loader \u5219\u65e0\u9700\u52a0\u8f7d\u6b64 loader \u76f8\u5173\u6a21\u5757\u4ee3\u7801\u3002"),(0,l.kt)("p",{parentName:"admonition"},"Plugin \u80fd\u5426\u7528\u8be5\u65b9\u5f0f\u52a0\u8f7d\uff0c\u4e0d\u884c\u56e0\u4e3a Webpack \u6574\u4e2a\u7f16\u8bd1\u6d41\u7a0b\u90fd\u662f\u9760 ",(0,l.kt)("inlineCode",{parentName:"p"},"tapable")," \u4e8b\u4ef6\u673a\u5236\u9a71\u52a8\u7684\uff0c\u5fc5\u987b\u5728 Webpack \u521d\u59cb\u5316\u9636\u6bb5\u5c31\u63d0\u524d\u57cb\u5165\u4e8b\u4ef6\u94a9\u5b50\u3002")),(0,l.kt)("h2",{id:"5-\u542f\u7528-eslint"},"5. \u542f\u7528 ESLint"),(0,l.kt)("p",null,"\u5728\u8fc7\u53bb\u6211\u4eec\u901a\u5e38\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint-loader"),"\uff0c\u7136\u800c 2021 \u5e74\u7684\u5f53\u4e0b\u5b83\u5df2\u7ecf\u88ab\u5f52\u6863\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint-webpack-plugin"),"\u3002"),(0,l.kt)("h2",{id:"6-\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u5230-cdn"},"6. \u9759\u6001\u8d44\u6e90\u90e8\u7f72\u5230 CDN"),(0,l.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u7684\u9759\u6001\u8d44\u6e90\u5f80\u5f80\u4f1a\u4e0a\u4f20\u5230 CDN \u4e0a\uff0c\u5728\u72ec\u7acb\u57df\u540d\u4e0a\u7ef4\u62a4\u3002\u5173\u4e8e\u9759\u6001\u8d44\u6e90\uff0c\u53ef\u4ee5\u5206\u7c7b\u6210\u4e24\u90e8\u5206\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/build"),"\uff0c\u6b64\u7c7b\u6587\u4ef6\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 require/import \u5f15\u7528\uff0c\u4f1a\u88ab webpack \u6253\u5305\u5e76\u52a0 hash \u503c\uff0c\u5e76\u901a\u8fc7 publicPath \u4fee\u6539\u8d44\u6e90\u5730\u5740\u3002\u53ef\u4ee5\u628a\u6b64\u7c7b\u6587\u4ef6\u4e0a\u4f20\u81f3 CDN\uff0c\u5e76\u52a0\u4e0a\u6c38\u4e45\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/public"),"\uff0c\u6b64\u7c7b\u6587\u4ef6\u5728\u9879\u76ee\u4e2d\u76f4\u63a5\u5f15\u7528\u6839\u8def\u5f84\uff0c\u76f4\u63a5\u6253\u5165\u955c\u50cf\uff0c\u5982\u679c\u4e0a\u4f20\u81f3 CDN \u53ef\u80fd\u589e\u52a0\u590d\u6742\u5ea6 (\u6279\u91cf\u4fee\u6539 publicPath)")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"output.publicPath")," \u914d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const CDN_HOST = process.env.CDN_HOST; // CDN \u57df\u540d\nconst CDN_PATH = process.env.CDN_PATH; // CDN \u8def\u5f84\nconst ENV = process.env.ENV; // \u5f53\u524d\u7684\u73af\u5883\u7b49\u7b49\nconst VERSION = process.env.VERSION; // \u5f53\u524d\u53d1\u5e03\u7684\u7248\u672c\n\n// \u4f9d\u636e ENV \u7b49\u52a8\u6001\u6784\u9020 publicPath\nconst getPublicPath = () => `${CDN_HOST}/${CDN_PATH}/${ENV}/`;\n\nconst publicPath = process.env.NODE_ENV === 'production' ? getPublicPath() : '.';\n\nmodule.exports = {\n  output: {\n    filename: 'bundle.[name][contenthash:8].js',\n    publicPath,\n  },\n}\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u53c2\u8003\uff1a"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/configuration/output/#outputpublicpath"},"https://webpack.docschina.org/configuration/output/#outputpublicpath"))),(0,l.kt)("p",null,"\u6b64\u65f6\u901a\u8fc7\u4e00\u4e2a\u811a\u672c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run uploadOss"),"\uff0c\u6765\u628a\u9759\u6001\u8d44\u6e90\u4e0a\u4f20\u81f3 CDN\u3002nginx \u53ea\u8d1f\u8d23\u8fd4\u56de\u7ed9\u7528\u6237 html \u5165\u53e3\u6587\u4ef6\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"public")," \u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\uff0c\u5176\u4ed6\u9759\u6001\u8d44\u6e90\u8d70 CDN\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\u6709\u4e00\u4e9b\u81ea\u5b9a\u4e49 CDN \u7684\u52a0\u8f7d\uff0c\u53ef\u4ee5\u4f7f\u7528 HTMLWebpackPlugin \u66b4\u9732\u7ed9\u6a21\u677f\u53d8\u91cf\u6e32\u67d3\u8d44\u6e90\u6807\u7b7e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const CDN_CSS = [\n  'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.0/theme-chalk/index.min.css'\n];\nconst CDN_JS = [\n  'https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js',\n  'https://cdn.bootcdn.net/ajax/libs/element-ui/2.6.0/index.js',\n  'https://cdn.bootcdn.net/ajax/libs/element-ui/2.6.0/locale/zh-CN.min.js',\n  'https://cdn.bootcdn.net/ajax/libs/echarts/5.1.2/echarts.min.js',\n]\n\nmodule.exports = {\n  configureWebpack: {\n    // \u6392\u9664\u4e00\u4e9b\u6a21\u5757\uff0c\u4e0d\u6253\u5305\uff0c\u800c\u662f\u901a\u8fc7\u5916\u94fe CDN \u7684\u65b9\u5f0f\u5f15\u5165\n    externals: {\n      vue: 'Vue',\n      'element-ui': 'ELEMENT',\n      echarts: 'echarts',\n    }\n  },\n  chainWebpack: config => {\n    config.plugin('html').tap(args => {\n      args[0].CDN_CSS = CDN_CSS;\n      args[0].CDN_JS = CDN_JS;\n      return args\n    })\n  }\n  // ...\n}\n")),(0,l.kt)("p",null,"\u5728 html \u6a21\u677f\u4e2d\u4f7f\u7528\u5b9a\u4e49\u597d\u7684 CDN \u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="">\n\n<head>\n<meta charset="utf-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width,initial-scale=1.0">\n  <title>web</title>\n  <link rel="icon" href="<%= BASE_URL %>favicon.ico">\n  \x3c!-- \u5f15\u5165\u6837\u5f0f --\x3e\n  <% for(var css of htmlWebpackPlugin.options.CDN_CSS) { %>\n    <link rel="stylesheet" href="<%=css%>" >\n  <% } %>\n\n  \x3c!-- \u5f15\u5165JS --\x3e\n  <% for(var js of htmlWebpackPlugin.options.CDN_JS) { %>\n    <script src="<%=js%>"><\/script>\n  <% } %>\n</head>\n<body style="font-size:14px">\n  <div id="app"></div>\n</body>\n</html>\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin")," \u529f\u80fd\u975e\u5e38\u5f3a\u5927\u3002\u591a\u5165\u53e3\u5206\u5305\u573a\u666f\u4e0b\uff0c\u5bf9\u8d44\u6e90\u52a0\u8f7d\u987a\u5e8f\u6709\u975e\u5e38\u4e25\u683c\u7684\u8981\u6c42\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin")," \u63d0\u4f9b\u7684\u8d44\u6e90\u5217\u8868\uff0c\u672c\u8eab\u5c31\u662f\u6309\u987a\u5e8f\u6392\u5e8f\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u5b8c\u7f8e\u89e3\u51b3\u8be5\u95ee\u9898\u3002\u9664\u4e86\u6839\u636e\u7ed9\u5b9a\u7684 HTML \u6a21\u677f\uff0c\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," \u6807\u7b7e\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u7528\u81ea\u5b9a\u4e49\u6a21\u677f\uff08\u4e0d\u4e00\u5b9a\u662f HTML\uff09\uff0c\u62ff\u5230\u6a21\u677f\u53d8\u91cf\u81ea\u884c\u6e32\u67d3\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  plugins: [\n    new HtmlWebpackPlugin({\n      // \u81ea\u5b9a\u4e49\u6a21\u677f\u6587\u4ef6\n      template: path.join(workDir, "config/course-catalog.html"),\n      // \u6a21\u677f\u8f93\u51fa\u8def\u5f84\uff08\u76f8\u5bf9\u4e8e dist \u76ee\u5f55\u7684\u8def\u5f84\uff09\n      // \u53ef\u4ee5\u76f4\u63a5\u4e00\u4e2a\u6587\u4ef6\u540d\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u8def\u5f84\n      filename: "course-catalog/jcc.ftl",\n      // \u9ed8\u8ba4\u4f1a\u6ce8\u5165 scripts \u6807\u7b7e\uff0c\u8fd9\u91cc\u5173\u95ed\u9ed8\u8ba4\u884c\u4e3a\n      // \u53ef\u4ee5\u7528 `htmlWebpackPlugin.files.js`\u3001`htmlWebpackPlugin.files.css` \u62ff\u5230\u8d44\u6e90\u5217\u8868\u8fdb\u884c\u6e32\u67d3\n      inject: false,\n      // \u5f53 `filename` \u662f\u8def\u5f84\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u4f1a\u7528 Webpack \u7684 `publicPath` \u751f\u6210\u76f8\u5bf9\u8def\u5f84\n      // \u8fd9\u91cc\u8986\u76d6 Webpack \u9ed8\u8ba4\u7684 `publicPath` \u914d\u7f6e\n      publicPath: "",\n      // \u66b4\u9732\u7ed9\u6a21\u677f\u7684\u53d8\u91cf\n      templateParameters: {\n        cssTag: "<@css_combo [",\n        jsTag: "<@js_combo [",\n        closeTag: "] />",\n      },\n      // \u9ed8\u8ba4\u4f1a\u538b\u7f29 HTML\uff0c\u8fd9\u91cc\u5173\u95ed HTML \u538b\u7f29\n      minify: false,\n    })\n  ]\n}\n')),(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f ",(0,l.kt)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin")," \u7684\u6a21\u677f\u8bed\u6cd5\u548c EJS \u975e\u5e38\u50cf\uff0c\u4f46\u5b9e\u9645\u4e0a\u7528\u7684\u662f lodash template\uff1a"),(0,l.kt)("blockquote",{parentName:"admonition"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#template"},"https://lodash.com/docs/4.17.15#template")))),(0,l.kt)("h2",{id:"7-\u542f\u7528-long-term-cache"},"7. \u542f\u7528 Long Term Cache"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"contenthash")," \u65f6\uff0c\u5f80\u5f80\u4f1a\u589e\u52a0\u4e00\u4e2a\u5c0f\u6a21\u5757\u540e\uff0c\u6574\u4f53\u6587\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hash")," \u90fd\u53d1\u751f\u53d8\u5316\uff0c\u539f\u56e0\u4e3a Webpack \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"module.id")," \u9ed8\u8ba4\u57fa\u4e8e\u89e3\u6790\u987a\u5e8f\u81ea\u589e\uff0c\u4ece\u800c\u5f15\u53d1\u7f13\u5b58\u5931\u6548\u3002Webpack4 \u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"HashedModuleIdsPlugin")," \u6765\u751f\u6210 hash \u503c\u4f5c\u4e3a\u6a21\u5757 id\uff0c\u5728 Webpack5 \u4e2d\u5df2\u7ecf\u4e0d\u9700\u8981\u4e86\uff0c\u53ef\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"optimization.moduleIds")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"'deterministic'"),"\uff0c\u4fdd\u8bc1\u6a21\u5757 id \u4e0d\u4f1a\u968f\u7740\u89e3\u6790\u987a\u5e8f\u7684\u53d8\u5316\u800c\u53d8\u5316\uff0c\u751f\u4ea7\u73af\u5883\u9ed8\u8ba4\u5f00\u542f\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 Webpack \u7ed9\u9759\u6001\u8d44\u6e90\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"hash"),"\uff0c\u5bf9\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"hash")," \u7684\u8d44\u6e90\u8bbe\u7f6e\u6c38\u4e45\u7f13\u5b58\uff0c\u53ef\u5927\u5e45\u63d0\u9ad8\u7f51\u7ad9\u7684\u7f13\u5b58\u80fd\u529b\uff0c\u4ece\u800c\u5927\u5e45\u63d0\u9ad8\u7f51\u7ad9\u7684\u4e8c\u6b21\u52a0\u8f7d\u6027\u80fd\u3002\u901a\u8fc7\u5728\u670d\u52a1\u5668\u7aef/\u7f51\u5173\u7aef\u5bf9\u8d44\u6e90\u8bbe\u7f6e\u4ee5\u4e0b Response Header\uff0c\u8fdb\u884c\u5f3a\u7f13\u5b58\u4e00\u5e74\u65f6\u95f4\uff0c\u79f0\u4e3a\u6c38\u4e45\u7f13\u5b58\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"Long Term Cache"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"Cache-Control: public,max-age=31536000,immutable\n")),(0,l.kt)("p",null,"\u5047\u8bbe\u6709\u4e24\u4e2a\u6587\u4ef6: ",(0,l.kt)("inlineCode",{parentName:"p"},"index.js")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.js")," \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport('./lib').then(o => console.log(o))\n\n// lib.js\nexport const a = 3\n")),(0,l.kt)("p",null,"\u7531 Webpack \u6253\u5305\u4e4b\u540e\u5c06\u4f1a\u751f\u6210\u4e24\u4e2a chunk\uff08\u4e00\u4e2a\u662f\u6839\u636e\u5165\u53e3\u914d\u7f6e\u751f\u6210\u7684 initial chunk\uff0c\u53e6\u4e00\u4e2a\u662f async chunk\uff09\uff0c\u4f1a\u751f\u6210\u4e24\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u3002\u5047\u8bbe ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.js")," \u6587\u4ef6\u5185\u5bb9\u53d1\u751f\u53d8\u66f4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"index.js")," \u7531\u4e8e\u5f15\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.js"),"\uff0c\u53ef\u80fd\u5305\u542b\u5176\u6587\u4ef6\u540d\uff0c\u90a3\u4e48\u5b83\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hash")," \u662f\u5426\u4f1a\u53d1\u751f\u53d8\u52a8\u3002"),(0,l.kt)("p",null,"\u4e0d\u4e00\u5b9a\u3002\u6253\u5305\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.js")," \u4e2d\u5f15\u7528 lib \u65f6\u5e76\u4e0d\u4f1a\u5305\u542b\u6587\u4ef6\u540d\uff0c\u800c\u662f\u91c7\u7528 chunkId \u7684\u5f62\u5f0f\uff0c\u5982\u679c chunkId \u662f\u56fa\u5b9a\u7684\u8bdd\uff0c\u5219\u4e0d\u4f1a\u53d1\u751f\u53d8\u66f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u6253\u5305\u524d\nimport('./lib')\n\n// \u6253\u5305\u540e\uff0c201 \u4e3a\u56fa\u5b9a\u7684 chunkId (chunkIds = deterministic \u65f6)\n__webpack_require__.e(/* import() | lib */ 201)\n")),(0,l.kt)("p",null,"\u5728 webpack \u4e2d\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"optimization.chunkIds")," \u53ef\u8bbe\u7f6e\u786e\u5b9a\u7684 chunId\uff0c\u6765\u589e\u5f3a Long Term Cache \u80fd\u529b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  optimization: {\n    chunkIds: 'deterministic'\n  }\n}\n")),(0,l.kt)("p",null,"\u53c2\u8003\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7035834332266627085"},"\u4ec0\u4e48\u662f Long Term Cache")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/guides/caching/"},"\u7f13\u5b58 - Webpack \u4e2d\u6587\u6587\u6863")),(0,l.kt)("h2",{id:"8-\u6e05\u9664\u65e0\u7528-css"},"8. \u6e05\u9664\u65e0\u7528 CSS"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"purgecss-webpack-plugin")," \u53ef\u4ee5\u5b9e\u73b0 CSS \u4ee3\u7801\u7684 Tree-Shaking\uff0c\u5355\u72ec\u63d0\u53d6 CSS \u5e76\u6e05\u9664\u7528\u4e0d\u5230\u7684 CSS"),(0,l.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -D purgecss-webpack-plugin\n")),(0,l.kt)("p",null,"\u6dfb\u52a0\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')\nconst glob = require('glob'); // \u6587\u4ef6\u5339\u914d\u6a21\u5f0f\n\nfunction resolve(dir){\n  return path.join(__dirname, dir);\n}\n\nconst PATHS = {\n  src: resolve('src')\n}\n\nmodule.exports = {\n  plugins:[\n    // ...\n    new PurgecssPlugin({\n      paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true})\n    }),\n  ]\n}\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u53c2\u8003\uff1a"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7040792659153125413"},"CSS TreeShaking \u539f\u7406\u63ed\u79d8\uff1a \u624b\u5199\u4e00\u4e2a PurgeCss"))))}d.isMDXComponent=!0}}]);