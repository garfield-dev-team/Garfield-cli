"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,k=d["".concat(o,".").concat(u)]||d[u]||s[u]||r;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var c=2;c<r;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),p=["components"],l={sidebar_position:1},o="Introduction",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"\u9879\u76ee\u7f18\u8d77",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Garfield-cli/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Webpack 5 \u63d2\u4ef6\u5347\u7ea7\u65b9\u6848",permalink:"/Garfield-cli/docs/Webpack5\u63d2\u4ef6\u5347\u7ea7\u65b9\u6848"}},m=[{value:"\u9879\u76ee\u7f18\u8d77",id:"\u9879\u76ee\u7f18\u8d77",children:[],level:2},{value:"\u9879\u76ee\u7279\u70b9",id:"\u9879\u76ee\u7279\u70b9",children:[],level:2},{value:"\u6280\u672f\u7ec6\u8282",id:"\u6280\u672f\u7ec6\u8282",children:[],level:2}],s={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("h2",{id:"\u9879\u76ee\u7f18\u8d77"},"\u9879\u76ee\u7f18\u8d77"),(0,r.kt)("p",null,"\u73b0\u5728\u90e8\u95e8\u9879\u76ee\u4e3b\u8981\u4f7f\u7528 CRA \u6784\u5efa\uff0c\u4f46\u662f CRA \u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRA \u4e0d\u5177\u5907\u5b9a\u5236\u5316\u80fd\u529b\uff0c\u4e0d\u50cf Vue-cli \u53ef\u4ee5\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u9009\u62e9\u9700\u8981\u7684\u7279\u6027\uff0c\u5bfc\u81f4\u65b0\u521b\u5efa\u7684\u9879\u76ee\u9700\u8981\u82b1\u5927\u91cf\u65f6\u95f4\u624b\u52a8\u914d\u7f6e\u3002\u867d\u7136 CRA \u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u6a21\u677f\uff0c\u4f46\u662f\u8fd8\u662f\u4e0d\u591f\u7075\u6d3b\uff1b"),(0,r.kt)("li",{parentName:"ul"},"CRA \u4e0d\u80fd\u50cf Vue-cli \u4e00\u6837\u4f20\u5165\u81ea\u5b9a\u4e49 Webpack \u914d\u7f6e\u3002\u867d\u7136\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e93\u89e3\u51b3\uff0c\u4f46\u662f\u7f51\u4e0a\u8d44\u6599\u6bd4\u8f83\u5c11\uff0c\u800c\u4e14\u589e\u52a0\u5b66\u4e60\u6210\u672c\uff1b")),(0,r.kt)("p",null,"\u7531\u4e8e\u4ee5\u4e0a\u7684\u539f\u56e0\uff0c\u5bfc\u81f4\u5728\u5f00\u53d1\u65b0\u9879\u76ee\u65f6\uff0c\u5f88\u591a\u540c\u4e8b\u5b81\u53ef\u76f4\u63a5\u590d\u5236\u4e00\u4efd\u5b58\u91cf\u9879\u76ee\uff0c\u4e5f\u4e0d\u613f\u610f\u4ece\u96f6\u5f00\u59cb\u914d\u7f6e\u3002\u672c\u9879\u76ee\u65e8\u5728\u5b66\u4e60\u7814\u7a76 CRA \u6e90\u7801\u7684\u57fa\u7840\u4e0a\uff0c\u901a\u8fc7\u5f00\u53d1\u4e00\u5957\u811a\u624b\u67b6\u6784\u5efa\u5de5\u5177\uff0c\u89e3\u51b3 CRA \u5b58\u5728\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u7814\u7a76 CRA \u6e90\u7801\u53ef\u77e5\uff0c\u4e00\u4e2a\u524d\u7aef\u9879\u76ee\u53ef\u4ee5\u5206\u4e3a\u4e24\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9879\u76ee\u6a21\u677f"),"\uff1a\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\uff0c\u4e5f\u5c31\u662f\u4e0e\u4e1a\u52a1\u5f00\u53d1\u6709\u4ea4\u96c6\u7684\u90e8\u5206\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6784\u5efa\u811a\u672c"),"\uff1a\u901a\u5e38\u5b89\u88c5\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," \u91cc\u9762\uff0c\u53ea\u5728\u6784\u5efa\u65f6\u53d1\u6325\u4f5c\u7528\uff0c\u4e00\u822c\u5f88\u5c11\u53bb\u6539\u52a8\uff1b")),(0,r.kt)("p",null,"\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7 monorepo \u673a\u5236\u7ba1\u7406\u591a\u4e2a\u5305\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u9879\u76ee\u6a21\u677f\nreact-template\nreact-ts-template\nvue-template\nvue-ts-template\n\n// \u6784\u5efa\u811a\u672c\ngarfield-script\n\n// \u9879\u76ee\u914d\u7f6e\ngarfield-redux\ngarfield-router\neslint-config\nprettier-config\nstylelint-config\npostcss-config\npurgecss-config\ncommit-lint\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u811a\u624b\u67b6\u5de5\u5177\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u652f\u6301\u81ea\u5b9a\u4e49 Webpack \u914d\u7f6e\uff0c\u8fd8\u53ef\u4ee5\u589e\u52a0\u4e0d\u540c\u7684\u9879\u76ee\u6a21\u677f\uff0c\u540c\u65f6\u652f\u6301 React \u548c Vue \u9879\u76ee\uff0c\u6b64\u5916\u8fd8\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u914d\u7f6e\uff0c\u4f8b\u5982 React \u72b6\u6001\u7ba1\u7406\u5e93\u4e0d\u4ec5\u914d\u7f6e\u9ebb\u70e6\uff0c\u4f7f\u7528\u4e5f\u5f88\u9ebb\u70e6\uff0c\u6240\u4ee5\u5e72\u8106\u5c01\u88c5\u6210\u4e86\u4e00\u4e2a\u4f9d\u8d56\u5e93\uff0c\u652f\u6301\u70ed\u63d2\u62d4\uff0c\u4e00\u4e2a\u547d\u4ee4\u5373\u53ef\u4e3a\u9879\u76ee\u8d4b\u80fd\u3002"),(0,r.kt)("h2",{id:"\u9879\u76ee\u7279\u70b9"},"\u9879\u76ee\u7279\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5355\u4ed3\u591a\u5305\uff08monorepo\uff09\uff0c\u652f\u6301\u70ed\u63d2\u62d4\uff0c\u4e00\u4e2a\u547d\u4ee4\u5373\u53ef\u4e3a\u9879\u76ee\u8d4b\u80fd\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 pre-script \u8fdb\u884c\u524d\u7f6e\u64cd\u4f5c\uff0c\u4f8b\u5982\u68c0\u67e5\u7248\u672c\u3001\u6253\u5370\u6b22\u8fce\u4fe1\u606f\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u662f\u6784\u5efa\u5de5\u5177\uff0c\u6240\u4ee5\u53ea\u7528\u4e00\u4efd ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack.config.js")," \uff0c\u5177\u4f53\u53c2\u8003 CRA \u914d\u7f6e\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003 Vue-cli \u505a\u6cd5\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"chain-webpack")," \u7684\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CRA \u4e2d\u7684\u5de5\u5177\u51fd\u6570\uff0c\u4f8b\u5982\u83b7\u53d6\u5de5\u4f5c\u76ee\u5f55\u3001\u6e05\u7a7a\u63a7\u5236\u53f0\u7b49\u7b49\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003 Vue-cli \u505a\u6cd5\uff0c\u5141\u8bb8\u63d0\u4f9b\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u5408\u5e76\uff1b")),(0,r.kt)("h2",{id:"\u6280\u672f\u7ec6\u8282"},"\u6280\u672f\u7ec6\u8282"),(0,r.kt)("p",null,"\u4f7f\u7528 Webpack5 \uff0c\u5f00\u53d1\u670d\u52a1\u5668\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-dev-middleware")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Webpack \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5\uff0c\u9664\u4e86 Vue-cli \u548c CRA \u6e90\u7801\uff0c\u8fd8\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("inlineCode",{parentName:"p"},"next.js")," \u6e90\u7801\uff1a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/blob/canary/packages/next/build/webpack-config.ts"},"https://github.com/vercel/next.js/blob/canary/packages/next/build/webpack-config.ts")))),(0,r.kt)("p",null,"\u73b0\u5728\u5b9e\u73b0\u5355\u4ed3\u591a\u5305\u65b9\u6848\u4e3b\u8981\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lerna + yarn workspace \uff1b"),(0,r.kt)("li",{parentName:"ul"},"pnpm \uff1b")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5176\u4e2d\uff1a"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"lerna \u5df2\u7ecf\u505c\u6b62\u7ef4\u62a4\uff1b"),(0,r.kt)("li",{parentName:"ul"},"pnpm \u81ea\u5e26\u5355\u4ed3\u591a\u5305\u529f\u80fd\uff0c\u4e0d\u4f1a\u51fa\u73b0\u4f9d\u8d56\u91cd\u590d\u5b89\u88c5\u95ee\u9898\uff0c\u800c\u4e14\u89e3\u51b3\u4e86\u5e7d\u7075\u4f9d\u8d56\u95ee\u9898\uff0cVue3 \u548c Vite \u90fd\u5728\u4f7f\u7528\uff1b")))),(0,r.kt)("p",null,"\u4f7f\u7528 npm \u79c1\u670d"),(0,r.kt)("p",null,"\u4f7f\u7528\u6784\u5efa\u53d1\u5e03\u811a\u672c\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run release")," \u53d1\u5e03 npm \u5305\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"semver")," \u83b7\u53d6\u7248\u672c\u53f7\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u8dd1\u4e00\u904d\u6d4b\u8bd5\u6d41\u7a0b\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u6784\u5efa\u547d\u4ee4\uff0c\u5c06\u6784\u5efa\u4ea7\u7269\u8f93\u51fa\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"./dist")," \u76ee\u5f55\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," \u7248\u672c\u53f7\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210 changelog \uff1b"),(0,r.kt)("li",{parentName:"ul"},"git \u63d0\u4ea4\u6e90\u7801\u5e76\u751f\u6210 tag\uff08\u63d0\u4ea4\u65f6\u901a\u8fc7 husky \u6821\u9a8c\uff09\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"README.md")," \u590d\u5236\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"./dist")," \u76ee\u5f55\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"npm publish")," \u53d1\u5e03\uff1b")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53c2\u8003\uff1a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/vuejs/petite-vue/blob/main/scripts/release.js"},"petite-vue/scripts/release.js")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6902659492161421325"},"\u624b\u628a\u624b\u6559\u4f60\u4f7f\u7528Rollup\u6253\u5305\ud83d\udce6\u5e76\u53d1\u5e03\u81ea\u5df1\u7684\u5de5\u5177\u5e93\ud83d\udd27")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6887961766170066951"},"\u5927\u5382\u662f\u5982\u4f55\u7528DevCloud\u6d41\u6c34\u7ebf\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72Web\u5e94\u7528\u7684\uff1f")))),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," \u6a21\u5757\u5728\u7f16\u8bd1\u5b8c\u6210\u540e\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 webpack-dev-server \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"devServer.open = true")," \u5728\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\u7684\u65f6\u5019\u5c31\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u4f46\u662f\u6b64\u65f6\u7f16\u8bd1\u8fd8\u6ca1\u5b8c\u6210\uff0c\u6240\u4ee5\u8bf7\u6c42\u4e00\u76f4\u6302\u7740\uff0c\u6d4f\u89c8\u5668\u6807\u7b7e\u9875\u4e00\u76f4\u8f6c\u5708\u5708\uff0c\u53ea\u6709\u7f16\u8bd1\u5b8c\u6210\u540e\u624d\u6253\u5f00\u9875\u9762\uff0c\u4f53\u9a8c\u6bd4\u8f83\u5dee\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Vue-cli \u4f1a\u5148\u8fdb\u884c\u7f16\u8bd1\uff0c\u63a7\u5236\u53f0\u4f1a\u6253\u5370\u7f16\u8bd1\u8fdb\u5ea6\uff0c\u7f16\u8bd1\u5b8c\u6210\u540e\u518d\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u7528\u6237\u4f53\u9a8c\u8f83\u597d\uff1b")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53c2\u8003\uff1a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7026505183819464734"},"npm \u4e4b\u738b\u5f00\u53d1\u7684\u795e\u5668 open \u80fd\u5728\u542f\u52a8\u670d\u52a1\u65f6\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\uff0c100\u884c\u6e90\u7801\u63ed\u79d8\uff01")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/open"},"open - npm")))),(0,r.kt)("p",null,"\u4f7f\u7528\u5355\u5143\u6d4b\u8bd5\uff1a"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53c2\u8003\uff1a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6943430853972852750"},"\u90a3\u4e9b\u5e74\u9519\u8fc7\u7684React\u7ec4\u4ef6\u5355\u5143\u6d4b\u8bd5\uff08\u4e0a\uff09")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6946008649026240519"},"\u90a3\u4e9b\u5e74\u9519\u8fc7\u7684React\u7ec4\u4ef6\u5355\u5143\u6d4b\u8bd5\uff08\u4e0b\uff09")))))}d.isMDXComponent=!0}}]);