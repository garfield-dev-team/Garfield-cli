"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2671],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||p;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<p;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=n(5907),r=(n(9231),n(4852));const p={sidebar_position:1},l="\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6",o={unversionedId:"\u81ea\u52a8\u5316\u811a\u672c/\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6",id:"\u81ea\u52a8\u5316\u811a\u672c/\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6",title:"\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6",description:"1. \u9879\u76ee\u7f18\u8d77",source:"@site/docs/\u81ea\u52a8\u5316\u811a\u672c/\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6.md",sourceDirName:"\u81ea\u52a8\u5316\u811a\u672c",slug:"/\u81ea\u52a8\u5316\u811a\u672c/\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6",permalink:"/Garfield-cli/docs/\u81ea\u52a8\u5316\u811a\u672c/\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u81ea\u52a8\u5316\u811a\u672c/\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"K8S \u8fd0\u7ef4",permalink:"/Garfield-cli/docs/\u90e8\u7f72/K8S\u8fd0\u7ef4"}},i={},s=[{value:"1. \u9879\u76ee\u7f18\u8d77",id:"1-\u9879\u76ee\u7f18\u8d77",level:2},{value:"2. \u7ec4\u4ef6\u5f00\u53d1\u89c4\u8303",id:"2-\u7ec4\u4ef6\u5f00\u53d1\u89c4\u8303",level:2},{value:"1) \u5982\u4f55\u5f15\u5165 React",id:"1-\u5982\u4f55\u5f15\u5165-react",level:3},{value:"2) \u5982\u4f55\u5f15\u5165\u6837\u5f0f",id:"2-\u5982\u4f55\u5f15\u5165\u6837\u5f0f",level:3},{value:"3) \u4f7f\u7528 type \u8fd8\u662f interface",id:"3-\u4f7f\u7528-type-\u8fd8\u662f-interface",level:3},{value:"4) \u5982\u4f55\u58f0\u660e\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"4-\u5982\u4f55\u58f0\u660e\u51fd\u6570\u5f0f\u7ec4\u4ef6",level:3},{value:"5) \u5982\u4f55\u4f7f\u7528 props",id:"5-\u5982\u4f55\u4f7f\u7528-props",level:3},{value:"6) \u662f\u5426\u4f7f\u7528 memo",id:"6-\u662f\u5426\u4f7f\u7528-memo",level:3},{value:"3. \u811a\u672c\u9700\u6c42\u6982\u8ff0",id:"3-\u811a\u672c\u9700\u6c42\u6982\u8ff0",level:2},{value:"1) \u5b89\u88c5 npm \u5305",id:"1-\u5b89\u88c5-npm-\u5305",level:3},{value:"2) \u7f16\u5199 npm scripts",id:"2-\u7f16\u5199-npm-scripts",level:3},{value:"3) \u914d\u7f6e\u6587\u4ef6",id:"3-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"4) \u6267\u884c npm scripts",id:"4-\u6267\u884c-npm-scripts",level:3},{value:"4. \u53c2\u8003",id:"4-\u53c2\u8003",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6"},"\u81ea\u52a8\u6dfb\u52a0\u7ec4\u4ef6"),(0,r.kt)("h2",{id:"1-\u9879\u76ee\u7f18\u8d77"},"1. \u9879\u76ee\u7f18\u8d77"),(0,r.kt)("p",null,"\u5728\u524d\u7aef\u9879\u76ee\u4e2d\uff0c\u901a\u5e38\u90fd\u662f\u7ec4\u4ef6\u5316\u5f00\u53d1\uff0c\u9700\u8981\u7f16\u5199\u5404\u79cd\u7ec4\u4ef6\u3002\u4f46\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u6bcf\u4e2a\u540c\u4e8b\u7f16\u7801\u98ce\u683c\u90fd\u4e0d\u4e00\u6837\uff0c\u5199\u51fa\u6765\u7684\u7ec4\u4ef6\u98ce\u683c\u5404\u5f02\u3002\u8fd9\u4e0d\u4ec5\u5bfc\u81f4\u9879\u76ee\u7ef4\u62a4\u6027\u4e0b\u964d\uff0c\u8fd8\u53ef\u80fd\u5f15\u8d77\u6027\u80fd\u95ee\u9898\u3002\u6b64\u5916\uff0c\u9879\u76ee\u4e2d\u7ecf\u5e38\u4f1a\u62bd\u79bb\u4e00\u4e9b\u53ef\u590d\u7528\u7684\u529f\u80fd\u7ec4\u4ef6\uff0c\u4f46\u5f80\u5f80\u53c8\u7f3a\u5c11\u6587\u6863\uff0c\u5bfc\u81f4\u540c\u4e8b\u4f7f\u7528\u9047\u5230\u56f0\u96be\u3002\u672c\u9879\u76ee\u65e8\u5728\u901a\u8fc7\u7f16\u5199\u4e00\u4e2a\u811a\u672c\uff0c\u901a\u8fc7\u4e00\u4e2a\u7edf\u4e00\u7684\u6a21\u677f\u521b\u5efa\u7ec4\u4ef6\uff0c\u89c4\u8303\u7f16\u7801\u98ce\u683c\uff0c\u63d0\u5347\u9879\u76ee\u7ef4\u62a4\u6027\u3002"),(0,r.kt)("h2",{id:"2-\u7ec4\u4ef6\u5f00\u53d1\u89c4\u8303"},"2. \u7ec4\u4ef6\u5f00\u53d1\u89c4\u8303"),(0,r.kt)("p",null,"\u4ee5 React + TS \u9879\u76ee\u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport style from "./style.module.less";\n\ntype Props = {\n  name: string;\n}\n\nconst MyComponent: React.FC<Props> = ({ name }) => {\n  const [count, setCount] = React.useState(0);\n\n  const handleClick = (val) => {\n    setCount(val + 1);\n  }\n\n  return (\n    <>\n      <div>Name: {name}</div>\n      <div>Count: {count}</div>\n      <button onClick={handleClick}>Click me!</button>\n    </>\n  )\n}\n\nexport default React.memo(MyComponent);\n')),(0,r.kt)("h3",{id:"1-\u5982\u4f55\u5f15\u5165-react"},"1) \u5982\u4f55\u5f15\u5165 React"),(0,r.kt)("p",null,"\u5728 TS \u4e0b\u63a8\u8350\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport * as ReactDOM from "react-dom";\n')),(0,r.kt)("p",null,"\u800c\u53e6\u5916\u4e00\u79cd\u5f15\u7528\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom";\n')),(0,r.kt)("p",null,"\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e2d\u6dfb\u52a0\u989d\u5916\u914d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'"allowSyntheticDefaultImports": true'),"\u3002"),(0,r.kt)("h3",{id:"2-\u5982\u4f55\u5f15\u5165\u6837\u5f0f"},"2) \u5982\u4f55\u5f15\u5165\u6837\u5f0f"),(0,r.kt)("p",null,"\u6837\u5f0f\u770b\u8fc7\u5404\u79cd\u5199\u6cd5\uff0c\u751a\u81f3\u6bcf\u4e2a\u540c\u4e8b\u6837\u5f0f\u6587\u4ef6\u547d\u540d\u90fd\u4e0d\u4e00\u6837\uff0c\u8fd9\u8fb9\u7edf\u4e00\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"style.xxx")," \u5f62\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import "./style.less";\nimport style from "./style.module.less";\n')),(0,r.kt)("h3",{id:"3-\u4f7f\u7528-type-\u8fd8\u662f-interface"},"3) \u4f7f\u7528 type \u8fd8\u662f interface"),(0,r.kt)("p",null,"\u6709\u51e0\u79cd\u5e38\u7528\u89c4\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u5b9a\u4e49\u516c\u5171 API \u65f6(\u6bd4\u5982\u7f16\u8f91\u4e00\u4e2a\u5e93\uff09\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},"interface"),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u4f7f\u7528\u8005\u7ee7\u627f\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\uff08Props\uff09\u548c\u72b6\u6001\uff08State\uff09\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},"type"),"\uff0c\u56e0\u4e3a ",(0,r.kt)("strong",{parentName:"li"},"type")," \u7684\u7ea6\u675f\u6027\u66f4\u5f3a")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"interface")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"type")," \u5728ts\u4e2d\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u6982\u5ff5\uff0c\u4f46\u5728 React \u5927\u90e8\u5206\u4f7f\u7528\u7684 case \u4e2d\uff0c",(0,r.kt)("strong",{parentName:"p"},"interface")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"type")," \u53ef\u4ee5\u8fbe\u5230\u76f8\u540c\u7684\u529f\u80fd\u6548\u679c\uff0c",(0,r.kt)("strong",{parentName:"p"},"type")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"interface")," \u6700\u5927\u7684\u533a\u522b\u662f\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," \u7c7b\u578b\u4e0d\u80fd\u4e8c\u6b21\u7f16\u8f91\uff0c\u800c ",(0,r.kt)("strong",{parentName:"li"},"interface")," \u53ef\u4ee5\u968f\u65f6\u6269\u5c55"))),(0,r.kt)("h3",{id:"4-\u5982\u4f55\u58f0\u660e\u51fd\u6570\u5f0f\u7ec4\u4ef6"},"4) \u5982\u4f55\u58f0\u660e\u51fd\u6570\u5f0f\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"React.FunctionComponent"),"\uff0c\u7b80\u5199\u5f62\u5f0f\uff1a",(0,r.kt)("strong",{parentName:"p"},"React.FC"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Props = {\n  message: string;\n}\n\nconst App: React.FC<Props> = ({ message, children }) => {\n  return (\n    <div>\n      {message}\n      {children}\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"React.FC")," \u58f0\u660e\u51fd\u6570\u7ec4\u4ef6\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u666e\u901a\u58f0\u660e")," \u4ee5\u53ca ",(0,r.kt)("strong",{parentName:"p"},"PropsWithChildren")," \u7684\u533a\u522b\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"React.FC")," \u663e\u5f0f\u5730\u5b9a\u4e49\u4e86\u8fd4\u56de\u7c7b\u578b\uff0c\u5176\u4ed6\u65b9\u5f0f\u662f\u9690\u5f0f\u63a8\u5bfc\u7684\uff1b"),(0,r.kt)("li",{parentName:"ul"},"React.FC\u5bf9\u9759\u6001\u5c5e\u6027\uff1adisplayName\u3001propTypes\u3001defaultProps\u63d0\u4f9b\u4e86\u7c7b\u578b\u68c0\u67e5\u548c\u81ea\u52a8\u8865\u5168\uff1b"),(0,r.kt)("li",{parentName:"ul"},"React.FC\u4e3achildren\u63d0\u4f9b\u4e86\u9690\u5f0f\u7684\u7c7b\u578b\uff08ReactElement | null\uff09\uff1b")),(0,r.kt)("h3",{id:"5-\u5982\u4f55\u4f7f\u7528-props"},"5) \u5982\u4f55\u4f7f\u7528 props"),(0,r.kt)("p",null,"\u76f4\u63a5\u53c2\u6570\u89e3\u6784\uff0c\u4e0d\u8981\u518d\u63a5\u53d7\u5f62\u53c2\u4e86\u3002"),(0,r.kt)("h3",{id:"6-\u662f\u5426\u4f7f\u7528-memo"},"6) \u662f\u5426\u4f7f\u7528 memo"),(0,r.kt)("p",null,"\u4e00\u5f8b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"React.memo")," \u5305\u88f9\u4e4b\u540e\u518d\u5bfc\u51fa\u3002"),(0,r.kt)("h2",{id:"3-\u811a\u672c\u9700\u6c42\u6982\u8ff0"},"3. \u811a\u672c\u9700\u6c42\u6982\u8ff0"),(0,r.kt)("h3",{id:"1-\u5b89\u88c5-npm-\u5305"},"1) \u5b89\u88c5 npm \u5305"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u5b89\u88c5 npm \u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @garfield-cli/auto-gen -D\n")),(0,r.kt)("h3",{id:"2-\u7f16\u5199-npm-scripts"},"2) \u7f16\u5199 npm scripts"),(0,r.kt)("p",null,"\u7531\u4e8e npm \u5305\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," \u5b57\u6bb5\uff0c\u56e0\u6b64\u5728\u5b89\u88c5\u65f6\u4f1a\u81ea\u52a8\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.bin/")," \u76ee\u5f55\u4e0b\u521b\u5efa\u8f6f\u94fe\u63a5\uff0c\u76f8\u5f53\u4e8e\u6ce8\u518c\u4e86\u4e00\u4e2a\u547d\u4ee4\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," \u53bb\u6267\u884c\u8fd9\u4e2a\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx auto-gen new-component\n\n# \u7b49\u4ef7\u4e8e\n$ node_modules/.bin/auto-gen new-component\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u7136\u8fd9\u6837\u505a\u7684\u524d\u63d0\u662f\u5728\u6587\u4ef6\u9876\u90e8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"#!/usr/bin/env node")," \u58f0\u660e\u811a\u672c\u89e3\u91ca\u7a0b\u5e8f")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0 npm scripts\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "gen:component": "auto-gen new-component"\n  }\n}\n')),(0,r.kt)("h3",{id:"3-\u914d\u7f6e\u6587\u4ef6"},"3) \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u5728\u524d\u7aef\u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "gen-config": {\n    "typescript": true, // \u662f\u5426\u4f7f\u7528 typescript\n    "style": "less-module", // CSS \u9884\u7f16\u8bd1\u5668\u53ca\u662f\u5426\u4f7f\u7528 CSS module\n    "doc": true, // \u662f\u5426\u751f\u6210 README.md\n  }\n}\n')),(0,r.kt)("h3",{id:"4-\u6267\u884c-npm-scripts"},"4) \u6267\u884c npm scripts"),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u6dfb\u52a0\u65b0\u7ec4\u4ef6\u65f6\uff0c\u53ea\u9700\u8981\u6267\u884c\u4e0b\u9762\u7684 npm scripts\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn run gen:component\n")),(0,r.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u540e\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"inquirer")," \u914d\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"chalk")," \u5b9e\u73b0\u547d\u4ee4\u884c\u4ea4\u4e92\uff0c\u7528\u6237\u9700\u8981\u63d0\u4f9b\u6dfb\u52a0\u7684\u7ec4\u4ef6\u540d\u79f0\uff0c\u4ee5\u53ca\u7ec4\u4ef6\u6dfb\u52a0\u7684\u4f4d\u7f6e\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"components"),"\uff09\u3002\u7136\u540e\u4f1a\u6309\u7167\u7528\u6237\u63d0\u4f9b\u7684\u914d\u7f6e\u8fdb\u884c\u6dfb\u52a0\uff0c\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6\u76ee\u5f55\uff0c\u5305\u542b\u7ec4\u4ef6\u6587\u4ef6\u3001\u6837\u5f0f\u6587\u4ef6\u3001\u4ee5\u53ca README.md \u7b49\u7b49\u3002"),(0,r.kt)("h2",{id:"4-\u53c2\u8003"},"4. \u53c2\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6952696734078369828"},"React + TypeScript\u5b9e\u8df5")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6966491047257964575"},"Element UI\u6e90\u7801\u4e2d\u5b66\u5230\u7684\u6280\u5de7")))}u.isMDXComponent=!0}}]);