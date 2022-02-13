"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[405],{3905:function(e,n,t){t.d(n,{Zo:function(){return k},kt:function(){return s}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},k=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=m(t),s=r,u=d["".concat(l,".").concat(s)]||d[s]||c[s]||i;return t?a.createElement(u,p(p({ref:n},k),{},{components:t})):a.createElement(u,p({ref:n},k))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1616:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return k},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),p=["components"],o={sidebar_position:2},l="\u542f\u7528 Tree-Shaking \u529f\u80fd",m={unversionedId:"Webpack\u4f18\u5316\u65b9\u6848/\u542f\u7528Tree-Shaking\u529f\u80fd",id:"Webpack\u4f18\u5316\u65b9\u6848/\u542f\u7528Tree-Shaking\u529f\u80fd",isDocsHomePage:!1,title:"\u542f\u7528 Tree-Shaking \u529f\u80fd",description:"\u4ec0\u4e48\u662f Tree-Shaking",source:"@site/docs/Webpack\u4f18\u5316\u65b9\u6848/\u542f\u7528Tree-Shaking\u529f\u80fd.md",sourceDirName:"Webpack\u4f18\u5316\u65b9\u6848",slug:"/Webpack\u4f18\u5316\u65b9\u6848/\u542f\u7528Tree-Shaking\u529f\u80fd",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u542f\u7528Tree-Shaking\u529f\u80fd",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack\u4f18\u5316\u65b9\u6848/\u542f\u7528Tree-Shaking\u529f\u80fd.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u7528\u4f18\u5316\u65b9\u6848",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u5e38\u7528\u4f18\u5316\u65b9\u6848"},next:{title:"\u5f00\u53d1\u73af\u5883\u542f\u7528 HMR",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u5f00\u53d1\u73af\u5883\u542f\u7528HMR"}},k=[{value:"\u4ec0\u4e48\u662f Tree-Shaking",id:"\u4ec0\u4e48\u662f-tree-shaking",children:[],level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[],level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[],level:2}],c={toc:k};function d(e){var n=e.components,o=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u542f\u7528-tree-shaking-\u529f\u80fd"},"\u542f\u7528 Tree-Shaking \u529f\u80fd"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f-tree-shaking"},"\u4ec0\u4e48\u662f Tree-Shaking"),(0,i.kt)("p",null,"\u5728 Webpack \u4e2d\uff0c\u542f\u52a8 Tree Shaking \u529f\u80fd\u5fc5\u987b\u540c\u65f6\u6ee1\u8db3\u4e09\u4e2a\u6761\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 ESM \u89c4\u8303\u7f16\u5199\u6a21\u5757\u4ee3\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"optimization.usedExports")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \uff0c\u542f\u52a8\u6807\u8bb0\u529f\u80fd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u542f\u52a8\u4ee3\u7801\u4f18\u5316\u529f\u80fd\uff08\u76ee\u7684\u662f\u542f\u7528\u4ee3\u7801\u538b\u7f29\uff0c\u4f7f\u7528 Terser \u5220\u6389\u6ca1\u7528\u5230\u7684\u5bfc\u51fa\u8bed\u53e5\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u5b9e\u73b0\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// \u914d\u7f6e mode = production\nmode: "production"\n// \u6216\u8005\u914d\u7f6e\noptimization.minimize = true\n// \u6216\u8005\u63d0\u4f9b\u6570\u7ec4\noptimization.minimizer = []\n')))),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,i.kt)("p",null,"Tree-shaking \u7684\u5b9e\u73b0\u4e00\u662f\u5148 ",(0,i.kt)("strong",{parentName:"p"},"\u6807\u8bb0")," \u51fa\u6a21\u5757\u5bfc\u51fa\u503c\u4e2d\u54ea\u4e9b\u6ca1\u6709\u88ab\u7528\u8fc7\uff0c\u4e8c\u662f\u4f7f\u7528 Terser \u5220\u6389\u8fd9\u4e9b\u6ca1\u88ab\u7528\u5230\u7684\u5bfc\u51fa\u8bed\u53e5\u3002\u6807\u8bb0\u8fc7\u7a0b\u5927\u81f4\u53ef\u5212\u5206\u4e3a\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make \u9636\u6bb5\uff0c\u6536\u96c6\u6a21\u5757\u5bfc\u51fa\u53d8\u91cf\u5e76\u8bb0\u5f55\u5230\u6a21\u5757\u4f9d\u8d56\u5173\u7cfb\u56fe ModuleGraph \u53d8\u91cf\u4e2d"),(0,i.kt)("li",{parentName:"ul"},"Seal \u9636\u6bb5\uff0c\u904d\u5386 ModuleGraph \u6807\u8bb0\u6a21\u5757\u5bfc\u51fa\u53d8\u91cf\u6709\u6ca1\u6709\u88ab\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ea7\u7269\u65f6\uff0c\u82e5\u53d8\u91cf\u6ca1\u6709\u88ab\u5176\u5b83\u6a21\u5757\u4f7f\u7528\u5219\u5220\u9664\u5bf9\u5e94\u7684\u5bfc\u51fa\u8bed\u53e5")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:t(4761).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u793a\u4f8b\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"bar.js")," \u6a21\u5757(\u5de6\u4e8c)\u5bfc\u51fa\u4e86\u4e24\u4e2a\u53d8\u91cf\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u6ca1\u6709\u88ab\u5176\u5b83\u6a21\u5757\u7528\u5230\uff0c\u6240\u4ee5\u7ecf\u8fc7\u6807\u8bb0\u540e\uff0c\u6784\u5efa\u4ea7\u7269(\u53f3\u4e00)\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u53d8\u91cf\u5bf9\u5e94\u7684\u5bfc\u51fa\u8bed\u53e5\u5c31\u88ab\u5220\u9664\u4e86\u3002\u4f5c\u4e3a\u5bf9\u6bd4\uff0c\u5982\u679c\u6ca1\u6709\u542f\u52a8\u6807\u8bb0\u529f\u80fd(",(0,i.kt)("inlineCode",{parentName:"p"},"optimization.usedExports = false")," \u65f6)\uff0c\u5219\u53d8\u91cf\u65e0\u8bba\u6709\u6ca1\u6709\u88ab\u7528\u5230\u90fd\u4f1a\u4fdd\u7559\u5bfc\u51fa\u8bed\u53e5\uff0c\u5982\u4e0a\u56fe\u53f3\u4e8c\u7684\u4ea7\u7269\u4ee3\u7801\u6240\u793a\u3002"))),(0,i.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,i.kt)("p",null,"\u867d\u7136 Webpack \u81ea 2.x \u5f00\u59cb\u5c31\u539f\u751f\u652f\u6301 Tree Shaking \u529f\u80fd\uff0c\u4f46\u53d7\u9650\u4e8e JS \u7684\u52a8\u6001\u7279\u6027\u4e0e\u6a21\u5757\u7684\u590d\u6742\u6027\uff0c\u76f4\u81f3\u6700\u65b0\u7684 5.0 \u7248\u672c\u4f9d\u7136\u6ca1\u6709\u89e3\u51b3\u8bb8\u591a\u4ee3\u7801\u526f\u4f5c\u7528\u5e26\u6765\u7684\u95ee\u9898\uff0c\u4f7f\u5f97\u4f18\u5316\u6548\u679c\u5e76\u4e0d\u5982 Tree Shaking \u539f\u672c\u8bbe\u60f3\u7684\u90a3\u4e48\u5b8c\u7f8e\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528\u8005\u6709\u610f\u8bc6\u5730\u4f18\u5316\u4ee3\u7801\u7ed3\u6784\uff0c\u6216\u4f7f\u7528\u4e00\u4e9b\u8865\u4e01\u6280\u672f\u5e2e\u52a9 Webpack \u66f4\u7cbe\u786e\u5730\u68c0\u6d4b\u65e0\u6548\u4ee3\u7801\uff0c\u5b8c\u6210 Tree Shaking \u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u907f\u514d\u65e0\u610f\u4e49\u7684\u8d4b\u503c"),(0,i.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," \u6a21\u5757\u5f15\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"bar.js")," \u6a21\u5757\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u5e76\u8d4b\u503c\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," \u53d8\u91cf\uff0c\u4f46\u540e\u7eed\u5e76\u6ca1\u6709\u7ee7\u7eed\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," \u53d8\u91cf\uff0c\u8fd9\u79cd\u573a\u666f\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"bar.js")," \u6a21\u5757\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u503c\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u88ab\u4f7f\u7528\uff0c\u7406\u5e94\u88ab\u5220\u9664\uff0c\u4f46 Webpack \u7684 Tree Shaking \u64cd\u4f5c\u5e76\u6ca1\u6709\u751f\u6548\uff0c\u4ea7\u7269\u4e2d\u4f9d\u7136\u4fdd\u7559 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u5bfc\u51fa\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// bar.js\nexport const bar = 'bar'\n\nexport const foo = 'foo'\n\n// index.js\nimport { bar, foo } from \"./bar\";\nconsole.log(bar);\n\nconst f = foo;\n")),(0,i.kt)("p",{parentName:"li"},"\u9020\u6210\u8fd9\u4e00\u7ed3\u679c\uff0c\u6d45\u5c42\u539f\u56e0\u662f Webpack \u7684 Tree Shaking \u903b\u8f91\u505c\u7559\u5728\u4ee3\u7801\u9759\u6001\u5206\u6790\u5c42\u9762\uff0c\u53ea\u662f\u6d45\u663e\u5730\u5224\u65ad\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5bfc\u51fa\u53d8\u91cf\u662f\u5426\u88ab\u5176\u5b83\u6a21\u5757\u5f15\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u5f15\u7528\u6a21\u5757\u7684\u4e3b\u4f53\u4ee3\u7801\u4e2d\u6709\u6ca1\u6709\u51fa\u73b0\u8fd9\u4e2a\u53d8\u91cf")),(0,i.kt)("p",{parentName:"li"},"\u6ca1\u6709\u8fdb\u4e00\u6b65\uff0c\u4ece\u8bed\u4e49\u4e0a\u5206\u6790\u6a21\u5757\u5bfc\u51fa\u503c\u662f\u4e0d\u662f\u771f\u7684\u88ab\u6709\u6548\u4f7f\u7528\u3002"),(0,i.kt)("p",{parentName:"li"},"\u66f4\u6df1\u5c42\u6b21\u7684\u539f\u56e0\u5219\u662f JavaScript \u7684\u8d4b\u503c\u8bed\u53e5\u5e76\u4e0d ",(0,i.kt)("strong",{parentName:"p"},"\u7eaf"),"\uff0c\u89c6\u5177\u4f53\u573a\u666f\u6709\u53ef\u80fd\u4ea7\u751f\u610f\u6599\u4e4b\u5916\u7684\u526f\u4f5c\u7528\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { bar, foo } from \"./bar\";\n\nlet count = 0;\n\nconst mock = {}\n\nObject.defineProperty(mock, 'f', {\n  set(v) {\n    mock._f = v;\n    count += 1;\n  }\n})\n\nmock.f = foo;\n\nconsole.log(count);\n")),(0,i.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4e2d\uff0c\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"mock")," \u5bf9\u8c61\u65bd\u52a0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.defineProperty")," \u8c03\u7528\uff0c\u5bfc\u81f4 ",(0,i.kt)("inlineCode",{parentName:"p"},"mock.f = foo")," \u8d4b\u503c\u8bed\u53e5\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," \u53d8\u91cf\u4ea7\u751f\u4e86\u526f\u4f5c\u7528\uff0c\u8fd9\u79cd\u573a\u666f\u4e0b\u5373\u4f7f\u7528\u590d\u6742\u7684\u52a8\u6001\u8bed\u4e49\u5206\u6790\u4e5f\u5f88\u96be\u5728\u786e\u4fdd\u6b63\u786e\u526f\u4f5c\u7528\u7684\u524d\u63d0\u4e0b\uff0c\u5b8c\u7f8e\u5730 Shaking \u6389\u6240\u6709\u65e0\u7528\u7684\u4ee3\u7801\u679d\u53f6\u3002"),(0,i.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u5728\u4f7f\u7528 Webpack \u65f6\u5f00\u53d1\u8005\u9700\u8981\u6709\u610f\u8bc6\u5730\u89c4\u907f\u8fd9\u4e9b\u65e0\u610f\u4e49\u7684\u91cd\u590d\u8d4b\u503c\u64cd\u4f5c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"#pure")," \u6807\u6ce8\u7eaf\u51fd\u6570\u8c03\u7528"),(0,i.kt)("p",{parentName:"li"},"\u4e0e\u8d4b\u503c\u8bed\u53e5\u7c7b\u4f3c\uff0cJavaScript \u4e2d\u7684\u51fd\u6570\u8c03\u7528\u8bed\u53e5\u4e5f\u53ef\u80fd\u4ea7\u751f\u526f\u4f5c\u7528\uff0c\u56e0\u6b64\u9ed8\u8ba4\u60c5\u51b5\u4e0b Webpack \u5e76\u4e0d\u4f1a\u5bf9\u51fd\u6570\u8c03\u7528\u505a Tree Shaking \u64cd\u4f5c\u3002\u4e0d\u8fc7\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8c03\u7528\u8bed\u53e5\u524d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"/*#__PURE__*/")," \u5907\u6ce8\uff0c\u660e\u786e\u544a\u8bc9 Webpack \u8be5\u6b21\u51fd\u6570\u8c03\u7528\u5e76\u4e0d\u4f1a\u5bf9\u4e0a\u4e0b\u6587\u73af\u5883\u4ea7\u751f\u526f\u4f5c\u7528\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image",src:t(2469).Z})),(0,i.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"foo('be retained')")," \u8c03\u7528\u6ca1\u6709\u5e26\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"/*#__PURE__*/")," \u5907\u6ce8\uff0c\u4ee3\u7801\u88ab\u4fdd\u7559\uff1b\u4f5c\u4e3a\u5bf9\u6bd4\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"foo('be removed')")," \u5e26\u4e0a Pure \u58f0\u660e\u540e\u5219\u88ab Tree Shaking \u5220\u9664\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7981\u6b62 Babel \u8f6c\u8bd1\u6a21\u5757\u5bfc\u5165\u5bfc\u51fa\u8bed\u53e5"),(0,i.kt)("p",{parentName:"li"},"Babel \u662f\u4e00\u4e2a\u975e\u5e38\u6d41\u884c\u7684 JavaScript \u4ee3\u7801\u8f6c\u6362\u5668\uff0c\u5b83\u80fd\u591f\u5c06\u9ad8\u7248\u672c\u7684 JS \u4ee3\u7801\u7b49\u4ef7\u8f6c\u8bd1\u4e3a\u517c\u5bb9\u6027\u66f4\u4f73\u7684\u4f4e\u7248\u672c\u4ee3\u7801\uff0c\u4f7f\u5f97\u524d\u7aef\u5f00\u53d1\u8005\u80fd\u591f\u4f7f\u7528\u6700\u65b0\u7684\u8bed\u8a00\u7279\u6027\u5f00\u53d1\u51fa\u517c\u5bb9\u65e7\u7248\u672c\u6d4f\u89c8\u5668\u7684\u4ee3\u7801\u3002"),(0,i.kt)("p",{parentName:"li"},"\u4f46 Babel \u63d0\u4f9b\u7684\u90e8\u5206\u529f\u80fd\u7279\u6027\u4f1a\u81f4\u4f7f Tree Shaking \u529f\u80fd\u5931\u6548\uff0c\u4f8b\u5982 Babel \u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"import/export")," \u98ce\u683c\u7684 ESM \u8bed\u53e5\u7b49\u4ef7\u8f6c\u8bd1\u4e3a CommonJS \u98ce\u683c\u7684\u6a21\u5757\u5316\u8bed\u53e5\uff0c\u4f46\u8be5\u529f\u80fd\u5374\u5bfc\u81f4 Webpack \u65e0\u6cd5\u5bf9\u8f6c\u8bd1\u540e\u7684\u6a21\u5757\u5bfc\u5165\u5bfc\u51fa\u5185\u5bb9\u505a\u9759\u6001\u5206\u6790\uff0c\u793a\u4f8b\uff1a"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image",src:t(3208).Z})),(0,i.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-loader")," \u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"p"},"*.js")," \u6587\u4ef6\uff0c\u5e76\u8bbe\u7f6e Babel \u914d\u7f6e\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"modules = 'commonjs'"),"\uff0c\u5c06\u6a21\u5757\u5316\u65b9\u6848\u4ece ESM \u8f6c\u8bd1\u5230 CommonJS\uff0c\u5bfc\u81f4\u8f6c\u8bd1\u4ee3\u7801(\u53f3\u56fe\u4e0a\u4e00)\u6ca1\u6709\u6b63\u786e\u6807\u8bb0\u51fa\u672a\u88ab\u4f7f\u7528\u7684\u5bfc\u51fa\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"\u3002\u4f5c\u4e3a\u5bf9\u6bd4\uff0c\u53f3\u56fe 2 \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"modules = false")," \u65f6\u6253\u5305\u7684\u7ed3\u679c\uff0c\u6b64\u65f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u53d8\u91cf\u88ab\u6b63\u786e\u6807\u8bb0\u4e3a Dead Code\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6240\u4ee5\uff0c\u5728 Webpack \u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-loader")," \u65f6\uff0c\u5efa\u8bae\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-preset-env")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"modules")," \u914d\u7f6e\u9879\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5173\u95ed\u6a21\u5757\u5bfc\u5165\u5bfc\u51fa\u8bed\u53e5\u7684\u8f6c\u8bd1\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f18\u5316\u5bfc\u51fa\u503c\u7684\u7c92\u5ea6"),(0,i.kt)("p",{parentName:"li"},"Tree Shaking \u903b\u8f91\u4f5c\u7528\u5728 ESM \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u8bed\u53e5\u4e0a\uff0c\u56e0\u6b64\u5bf9\u4e8e\u4e0b\u9762\u8fd9\u79cd\u5bfc\u51fa\u573a\u666f\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  bar: 'bar',\n  foo: 'foo'\n}\n")),(0,i.kt)("p",{parentName:"li"},"\u5373\u4f7f\u5b9e\u9645\u4e0a\u53ea\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \u5bfc\u51fa\u503c\u7684\u5176\u4e2d\u4e00\u4e2a\u5c5e\u6027\uff0c\u6574\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \u5bf9\u8c61\u4f9d\u7136\u4f1a\u88ab\u5b8c\u6574\u4fdd\u7559\u3002\u6240\u4ee5\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u5e94\u8be5\u5c3d\u91cf\u4fdd\u6301\u5bfc\u51fa\u503c\u9897\u7c92\u5ea6\u548c\u539f\u5b50\u6027\uff0c\u4e0a\u4f8b\u4ee3\u7801\u7684\u4f18\u5316\u7248\u672c\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const bar = 'bar'\nconst foo = 'foo'\n\nexport {\n    bar,\n    foo\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\u652f\u6301 Tree Shaking \u7684\u5305"),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u5e94\u5c3d\u91cf\u4f7f\u7528\u652f\u6301 Tree Shaking \u7684 npm \u5305\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"lodash-es")," \u66ff\u4ee3 ",(0,i.kt)("inlineCode",{parentName:"li"},"lodash")," \uff0c\u6216\u8005\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"babel-plugin-lodash")," \u5b9e\u73b0\u7c7b\u4f3c\u6548\u679c")),(0,i.kt)("p",{parentName:"li"},"\u4e0d\u8fc7\uff0c\u5e76\u4e0d\u662f\u6240\u6709 npm \u5305\u90fd\u5b58\u5728 Tree Shaking \u7684\u7a7a\u95f4\uff0c\u8bf8\u5982 React\u3001Vue2 \u4e00\u7c7b\u7684\u6846\u67b6\u539f\u672c\u5df2\u7ecf\u5bf9\u751f\u4ea7\u7248\u672c\u505a\u4e86\u8db3\u591f\u6781\u81f4\u7684\u4f18\u5316\uff0c\u6b64\u65f6\u4e1a\u52a1\u4ee3\u7801\u9700\u8981\u6574\u4e2a\u4ee3\u7801\u5305\u63d0\u4f9b\u7684\u5b8c\u6574\u529f\u80fd\uff0c\u57fa\u672c\u4e0a\u4e0d\u592a\u9700\u8981\u8fdb\u884c Tree Shaking\u3002"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53c2\u8003\uff1a"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/guides/tree-shaking/"},"https://webpack.docschina.org/guides/tree-shaking/")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7019104818568364069"},"Webpack \u539f\u7406\u7cfb\u5217\u4e5d\uff1aTree-Shaking \u5b9e\u73b0\u539f\u7406")))))}d.isMDXComponent=!0},3208:function(e,n,t){n.Z=t.p+"assets/images/babel-module-transform-063707fbd0a4b592f47357e4d051d9c2.webp"},2469:function(e,n,t){n.Z=t.p+"assets/images/pure-function-call-d71828d926d9ed3deea9500d9e01427f.webp"},4761:function(e,n,t){n.Z=t.p+"assets/images/tree-shaking-example-2229a3844a2740fe6fc7f0dbbae45ecd.webp"}}]);