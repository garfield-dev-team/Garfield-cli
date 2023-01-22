"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5371],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,s(s({ref:n},c),{},{components:t})):a.createElement(k,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2014:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),s=["components"],l={sidebar_position:2},o="Webpack 5 \u5347\u7ea7\u65b9\u6848",p={unversionedId:"Webpack5\u5347\u7ea7\u65b9\u6848",id:"Webpack5\u5347\u7ea7\u65b9\u6848",title:"Webpack 5 \u5347\u7ea7\u65b9\u6848",description:"\u524d\u8a00",source:"@site/docs/Webpack5\u5347\u7ea7\u65b9\u6848.md",sourceDirName:".",slug:"/Webpack5\u5347\u7ea7\u65b9\u6848",permalink:"/Garfield-cli/docs/Webpack5\u5347\u7ea7\u65b9\u6848",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack5\u5347\u7ea7\u65b9\u6848.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Garfield-cli/docs/intro"},next:{title:"\u524d\u8a00",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u524d\u8a00"}},c={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u63d2\u4ef6\u5347\u7ea7\u65b9\u6848",id:"\u63d2\u4ef6\u5347\u7ea7\u65b9\u6848",level:2},{value:"\u57fa\u4e8e React + TypeScript \u7684 Webpack5 \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",id:"\u57fa\u4e8e-react--typescript-\u7684-webpack5-\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",level:2},{value:"<code>package.json</code> \u914d\u7f6e",id:"packagejson-\u914d\u7f6e",level:3},{value:"Webpack \u76f8\u5173",id:"webpack-\u76f8\u5173",level:4},{value:"Babel \u76f8\u5173",id:"babel-\u76f8\u5173",level:4},{value:"React \u76f8\u5173",id:"react-\u76f8\u5173",level:4},{value:"TypeScript \u7c7b\u578b\u5b9a\u4e49\u5e93",id:"typescript-\u7c7b\u578b\u5b9a\u4e49\u5e93",level:4},{value:"\u7b2c\u4e09\u65b9 helpers",id:"\u7b2c\u4e09\u65b9-helpers",level:4},{value:"<code>webpack.config.js</code> \u914d\u7f6e",id:"webpackconfigjs-\u914d\u7f6e",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webpack-5-\u5347\u7ea7\u65b9\u6848"},"Webpack 5 \u5347\u7ea7\u65b9\u6848"),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u53c2\u8003 Webpack \u5b98\u65b9\u5347\u7ea7\u65b9\u6848\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/migrate/5/"},"To v5 from v4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/migrate/4/"},"To v4 from v3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/migrate/3/"},"To v2 or v3 from v1"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7161303856943464455"},"\u6781\u81f4\u7f16\u8bd1\u901f\u5ea6\uff0c\u4e00\u6587\u641e\u5b9awebpack5\u5347\u7ea7")),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u5347\u7ea7\u65b9\u6848"},"\u63d2\u4ef6\u5347\u7ea7\u65b9\u6848"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\u5904\u7406\uff0c\u56fe\u7247\u3001\u5b57\u4f53\u6253\u5305\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"url-loader")," -> Webpack5 \u5185\u7f6e Asset Modules\uff08\u503c\u6709\u56db\u79cd\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"asset/resource")," \u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"li"},"file-loader"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"asset/inline")," \u5bf9\u5e94",(0,r.kt)("inlineCode",{parentName:"li"},"url-loader"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"asset/source")," \u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"li"},"raw-loader"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"asset")," \u6839\u636e\u8d44\u6e90\u5927\u5c0f\u81ea\u52a8\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"resource")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"li"},"inline"),"\uff09\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6e05\u7406\u76ee\u5f55\u63d2\u4ef6\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"clean-webpack-plugin")," -> Webpack5 \u5185\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"output.clean")," \u914d\u7f6e\u9879\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u70ed\u66f4\u65b0\u63d2\u4ef6\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"HotModuleReplacementPlugin")," -> Webpack5 \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"devServer.hot = true")," \u65f6\u81ea\u52a8\u542f\u7528\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u538b\u7f29\u63d2\u4ef6\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"uglify-js-webpack-plugin")," -> Webpack5 \u5185\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"terser-webpack-plugin")," (\u751f\u4ea7\u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u79fb\u9664\u4ee3\u7801\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"debugger")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"console.*"),") \uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u62bd\u53d6\u516c\u5171\u6a21\u5757\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"CommonChunksPlugin")," -> Webpack5 \u5185\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks")," \uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u62bd\u53d6 CSS \u63d2\u4ef6\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"extract-text-webpack-plugin")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"mini-css-extract-plugin")," (\u751f\u4ea7\u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u5f00\u53d1\u73af\u5883\u4e0b\u4e3a\u4e86\u8ba9\u6837\u5f0f\u6e90\u6587\u4ef6\u4e5f\u80fd\u88ab\u70ed\u66ff\u6362\uff0c\u4e0d\u80fd\u62bd\u53d6\u6837\u5f0f\uff0c\u800c\u662f\u968f JS Bundle \u4e00\u8d77\u8f93\u51fa) \uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29 CSS \u63d2\u4ef6\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"optimize-css-assets-webpack-plugin")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"css-minimizer-webpack-plugin")," (\u751f\u4ea7\u73af\u5883\u4e0b\u4f7f\u7528) \uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NamedModulesPlugin")," ->  Webpack5 \u5185\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"optimization.moduleIds: 'named'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NamedChunksPlugin")," ->  Webpack5 \u5185\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"optimization.chunkIds: 'named'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HashedModuleIdsPlugin")," ->  Webpack5 \u4e0d\u518d\u9700\u8981\uff0c\u6539\u4e3a\u5185\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"optimization.moduleIds: 'deterministic'"),"\uff08\u751f\u4ea7\u73af\u5883\u9ed8\u8ba4\u542f\u7528\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks.cacheGroups.vendors")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks.cacheGroups.defaultVendors")),(0,r.kt)("li",{parentName:"ul"},"Rule.loaders -> Rule.use\uff08\u6ce8\u610f loaders \u5df2\u7ecf\u5e9f\u5f03\u4e86\uff0c\u4f46\u662f loader \u8fd8\u662f\u53ef\u7528\u7684\uff0c\u76f8\u5f53\u4e8e Rule.use: ","[ { loader } ]"," \u7b80\u5199\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u5f00\u53d1\u547d\u4ee4\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"webpack-cli")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack serve")," \u542f\u52a8 devServer"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u63d2\u4ef6\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"html-webpack-plugin")," \u867d\u7136\u4e0d\u7528\u6362\uff0c\u4f46\u4e5f\u9700\u8981\u5347\u7ea7\u5230\u652f\u6301 Webpack5 \u7684\u7248\u672c\uff1b")),(0,r.kt)("h2",{id:"\u57fa\u4e8e-react--typescript-\u7684-webpack5-\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5"},"\u57fa\u4e8e React + TypeScript \u7684 Webpack5 \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h3",{id:"packagejson-\u914d\u7f6e"},(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")," \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "webpack-antd5-treeshaking",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "serve": "cross-env NODE_ENV=development webpack serve --config config/webpack.config.js",\n    "build:dev": "cross-env NODE_ENV=development webpack --config config/webpack.config.js",\n    "build:prod": "cross-env NODE_ENV=production webpack --config config/webpack.config.js",\n    "build:analyze": "cross-env NODE_ENV=production ANALYZE=true webpack --config config/webpack.config.js",\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "browserslist": {\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  },\n  "devDependencies": {\n    "@babel/core": "^7.20.7",\n    "@babel/preset-env": "^7.20.2",\n    "@babel/preset-react": "^7.18.6",\n    "@babel/preset-typescript": "^7.18.6",\n    "@types/node": "^18.11.18",\n    "@types/react": "^18.0.26",\n    "@types/react-dom": "^18.0.10",\n    "babel-loader": "^9.1.0",\n    "webpack": "^5.75.0",\n    "webpack-bundle-analyzer": "^4.7.0",\n    "webpack-cli": "^5.0.1",\n    "webpack-dev-server": "^4.11.1",\n    "webpackbar": "^5.0.2"\n  },\n  "dependencies": {\n    "antd": "^5.1.2",\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  }\n}\n')),(0,r.kt)("h4",{id:"webpack-\u76f8\u5173"},"Webpack \u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webpack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webpack-cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webpack-dev-server"))),(0,r.kt)("h4",{id:"babel-\u76f8\u5173"},"Babel \u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/core"),"\uff1aBabel \u6838\u5fc3\u5e93"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/preset-env"),"\uff1a\u8f6c\u8bd1 ES Next \u8bed\u6cd5\u7684\u63d2\u4ef6\u96c6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/preset-react"),"\uff1a\u8f6c\u8bd1 React JSX \u8bed\u6cd5\u7684\u63d2\u4ef6\u96c6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/preset-typescript"),"\uff1a\u8f6c\u8bd1 TypeScript \u8bed\u6cd5\u7684\u63d2\u4ef6\u96c6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"babel-loader"),"\uff1aBabel \u914d\u5408 Webpack \u4f7f\u7528\u9700\u8981\u5b89\u88c5\uff0c\u5982\u679c\u76f4\u63a5\u901a\u8fc7\u547d\u4ee4\u884c\u7f16\u8bd1\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"@babel/cli"))),(0,r.kt)("h4",{id:"react-\u76f8\u5173"},"React \u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react-dom")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"antd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"classnames"))),(0,r.kt)("h4",{id:"typescript-\u7c7b\u578b\u5b9a\u4e49\u5e93"},"TypeScript \u7c7b\u578b\u5b9a\u4e49\u5e93"),(0,r.kt)("p",null,"\u7531\u4e8e React \u63d0\u4f9b\u7684\u662f CJS \u5305\uff0c\u672c\u8eab\u6ca1\u6709\u7c7b\u578b\u5b9a\u4e49\uff0c\u9700\u8981\u5355\u72ec\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@types/react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@types/react-dom"))),(0,r.kt)("p",null,"\u5b89\u88c5 Node \u7c7b\u578b\u5b9a\u4e49\u5e93\uff0c\u5728 Webpack \u914d\u7f6e\u4e2d\u901a\u8fc7 Node \u524d\u7f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"node:")," \u65b9\u5f0f\u5bfc\u5165\u6a21\u5757\u53ef\u4ee5\u83b7\u5f97\u7c7b\u578b\u63d0\u793a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@types/node"))),(0,r.kt)("h4",{id:"\u7b2c\u4e09\u65b9-helpers"},"\u7b2c\u4e09\u65b9 helpers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react-dev-utils"),"\uff1aCRA \u7684 utils \u5305\uff0c\u63d0\u4f9b\u975e\u5e38\u591a\u7684\u5de5\u5177\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint-config-react-app"),"\uff1aCRA \u7684 ESLint \u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"babel-preset-react-app"),"\uff1aCRA \u7684 Babel \u914d\u7f6e")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u524d\u7aef\u5de5\u7a0b\u5e38\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," \u914d\u7f6e\u5efa\u8bae\u638c\u63e1\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("strong",{parentName:"p"},"\u524d\u7aef\u9879\u76ee Babel \u914d\u7f6e"),"\u3002\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"postcss")," \u53ef\u4ee5\u76f4\u63a5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"postcss-preset-env"),"\uff0c\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")," \u53ef\u4ee5\u76f4\u63a5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-config-react-app"),"\u3002")),(0,r.kt)("h3",{id:"webpackconfigjs-\u914d\u7f6e"},(0,r.kt)("inlineCode",{parentName:"h3"},"webpack.config.js")," \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require(\"node:fs\");\nconst path = require(\"node:path\");\nconst webpack = require(\"webpack\");\nconst HtmlWebpackPlugin = require(\"html-webpack-plugin\");\nconst CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');\nconst TerserPlugin = require('terser-webpack-plugin');\nconst MiniCssExtractPlugin = require(\"mini-css-extract-plugin\");\nconst CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\nconst ESLintPlugin = require('eslint-webpack-plugin');\nconst ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\nconst ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');\nconst Webpackbar = require('webpackbar');\nconst BundleAnalyzerPlugin = require(\"webpack-bundle-analyzer\").BundleAnalyzerPlugin;\n\nconst appPath = process.cwd();\nconst appBuild = path.resolve(appPath, \"dist\");\nconst appHtml = path.resolve(appPath, \"public/index.html\");\nconst appSrc = path.resolve(appPath, \"src\");\nconst appTsConfig = path.resolve(appPath, \"tsconfig.json\");\nconst appNodeModules = path.resolve(appPath, \"node_modules\");\nconst appWebpackCache = path.resolve(appPath, \"node_modules/.cache\");\nconst appTsBuildInfoFile = path.resolve(appPath, \"node_modules/.cache/tsconfig.tsbuildinfo\");\n\nconst isEnvDevelopment = process.env.NODE_ENV === \"development\";\nconst isEnvProduction = process.env.NODE_ENV === \"production\";\nconst useBundleAnalyzer = process.env.ANALYZE === \"true\";\nconst useTypeScript = fs.existsSync(appTsConfig);\n\nmodule.exports = {\n  mode: isEnvDevelopment ? \"development\" : \"production\",\n  // \u5f00\u53d1\u73af\u5883\u4f7f\u7528 `eval-cheap-module-source-map`\uff0c\u786e\u4fdd\u6700\u4f73\u7f16\u8bd1\u901f\u5ea6\n  // \u751f\u4ea7\u73af\u5883\u4e0d\u5f00\u542f\u6216\u8005\u4f7f\u7528 `hidden-source-map`\n  devtool: isEnvDevelopment ? \"eval-cheap-module-source-map\" : false,\n  entry: {\n    main: path.resolve(appPath, \"src/main.js\"),\n    puzzleEntry: path.resolve(appPath, \"src/studentPuzzle.js\"),\n  },\n  output: {\n    // \u6253\u5305\u4ea7\u7269\u7684\u6587\u4ef6\u5939\n    path: appBuild,\n    // JS \u8d44\u6e90\u7528 contenthash\uff0c\u63d0\u5347\u7f13\u5b58\u590d\u7528\u7387\n    filename: \"static/js/[name].[contenthash:8].js\",\n    // \u57fa\u4e8e Code-Splitting \u5206\u5305\u7684\u5f02\u6b65 chunk\n    chunkFilename: \"static/js/[name].[contenthash:8].chunk.js\",\n    // Asset Module \u6253\u5305\u56fe\u7247\u3001\u5b57\u4f53\u7684\u8f93\u51fa\u8def\u5f84\n    assetModuleFilename: 'static/media/[name].[hash][ext]',\n    // \u9759\u6001\u8d44\u6e90\u524d\u7f00\uff0c\u975e\u6839\u8def\u5f84\u90e8\u7f72\uff0c\u6216\u8005\u751f\u4ea7\u73af\u5883\u9759\u6001\u8d44\u6e90\u4e0a\u4f20 CDN \u4f1a\u7528\u5230\n    publicPath: \"/\",\n    // \u6e05\u7a7a\u6253\u5305\u8f93\u51fa\u76ee\u5f55\n    clean: true,\n  },\n  stats: \"errors-warnings\",\n  module: {\n    rules: [\n      {\n        // \u4f7f\u7528 `Rule.oneOf`\uff0c\u4e00\u65e6 loader \u5339\u914d\u6210\u529f\u5c31\u9000\u51fa\u5339\u914d\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u5339\u914d\u6b21\u6570\n        oneOf: [\n          // \u5904\u7406\u4e1a\u52a1\u4ee3\u7801 js\u3001jsx\u3001ts\u3001tsx \u6587\u4ef6\n          // \u7b2c\u4e09\u65b9\u5e93\u4ee3\u7801\u8df3\u8fc7\u6784\u5efa\u76f4\u63a5\u6253\u5305\uff0c\u6700\u5c0f\u5316 loader \u4f5c\u7528\u8303\u56f4\n          {\n            test: /\\.(js|mjs|jsx|ts|tsx)$/,\n            include: [\n              // \u6700\u5c0f\u5316 loader \u4f5c\u7528\u8303\u56f4\n              // \u5982\u679c\u6709\u7b2c\u4e09\u65b9\u5e93\u4ee3\u7801\u7528\u4e86 ES6 \u8bed\u6cd5\uff0c\u9700\u8981\u5355\u72ec\u6dfb\u52a0 babel-loader \u5904\u7406\n              appSrc,\n              path.resolve(appPath, 'node_modules/@study/common-ykt-puzzles/'),\n            ],\n            // babel \u914d\u7f6e\u53c2\u8003\uff1a\u524d\u7aef\u9879\u76ee Babel \u914d\u7f6e\n            loader: require.resolve('babel-loader'),\n            options: {\n              plugins: [\n                // \u5f00\u53d1\u73af\u5883\u542f\u7528 `react-refresh` \u70ed\u66f4\u65b0 React \u7ec4\u4ef6\n                isEnvDevelopment &&\n                  require.resolve('react-refresh/babel'),\n              ].filter(Boolean),\n              // \u542f\u7528 babel-loader \u7f13\u5b58\u80fd\u529b\n              // Webpack5 \u81ea\u5e26\u7684\u6301\u4e45\u5316\u7f13\u5b58\u7c92\u5ea6\u592a\u5927\uff0c\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u5c31\u4f1a\u5bfc\u81f4\u7f13\u5b58\u5931\u6548\n              // This is a feature of `babel-loader` for webpack (not Babel itself).\n              // It enables caching results in\n              // directory for faster rebuilds.\n              cacheDirectory: true,\n              // See #6846 for context on why cacheCompression is disabled\n              cacheCompression: false,\n              compact: isEnvProduction,\n            }\n          },\n          // \u5904\u7406\u4e1a\u52a1\u4ee3\u7801\u548c\u7ec4\u4ef6\u5e93 css\u3001less \u6587\u4ef6\n          // \u53ef\u4ee5\u7ed9\u666e\u901a css \u548c css module \u914d\u7f6e\u4e24\u5957\u89c4\u5219\n          {\n            test: /\\.(css|less)$/i,\n            // include: /node_modules/,\n            use: [\n              isEnvDevelopment\n                ? // \u5f00\u53d1\u73af\u5883\u5c06\u6837\u5f0f\u6ce8\u5165 style \u6807\u7b7e\u5b9e\u73b0\u6837\u5f0f\u70ed\u66f4\u65b0\n                  \"style-loader\"\n                : // \u751f\u4ea7\u73af\u5883\u4e0b\u5c06 CSS \u62bd\u53d6\u5230\u5355\u72ec\u7684\u6837\u5f0f\u6587\u4ef6\u4e2d\n                  MiniCssExtractPlugin.loader,\n              {\n                loader: \"css-loader\",\n                options: {\n                  sourceMap: isEnvDevelopment,\n                  importLoaders: 2,\n                },\n              },\n              {\n                // \u76f4\u63a5\u7528 postcss-preset-env\uff0c\u5f00\u7bb1\u5373\u7528\u65e0\u9700\u5355\u72ec\u914d\u7f6e\n                // \u6ce8\u610f postcss-loader \u4f1a\u8bfb\u53d6\u9879\u76ee\u6839\u76ee\u5f55\u7684 package.json \u4e2d\u7684 `browserslist` \u914d\u7f6e\n                // Options for PostCSS as we reference these options twice\n                // Adds vendor prefixing based on your specified browser support in\n                // package.json\n                loader: require.resolve('postcss-loader'),\n                options: {\n                  postcssOptions: {\n                    // Necessary for external CSS imports to work\n                    // https://github.com/facebook/create-react-app/issues/2677\n                    ident: 'postcss',\n                    config: false,\n                    plugins: [\n                      'postcss-flexbugs-fixes',\n                      [\n                        'postcss-preset-env',\n                        {\n                          autoprefixer: {\n                            flexbox: 'no-2009',\n                          },\n                          stage: 3,\n                        },\n                      ],\n                      // \u4e0d\u9700\u8981 postcss \u63d0\u4f9b\u7684 CSS Reset \u9009\u9879\n                      // \u4e00\u822c\u7ec4\u4ef6\u5e93\u4f8b\u5982 Antd \u90fd\u4f1a\u5185\u7f6e CSS Reset\n                      // 'postcss-normalize',\n                    ],\n                  },\n                  sourceMap: isEnvDevelopment,\n                },\n              },\n              {\n                loader: 'less-loader',\n                options: {\n                  lessOptions: {\n                    javascriptEnabled: true,\n                    modifyVars: {},\n                  },\n                },\n              },\n            ],\n            // Don't consider CSS imports dead code even if the\n            // containing package claims to have no side effects.\n            // Remove this when webpack adds a warning or an error for this.\n            // See https://github.com/webpack/webpack/issues/6571\n            sideEffects: true,\n          },\n          // \u4f7f\u7528 `@svgr/webpack` \u5c06 SVG \u56fe\u6807\u8f6c\u4e3a React \u7ec4\u4ef6\n          // \u53ef\u4ee5\u652f\u6301\u56fe\u6807\u50cf\u5b57\u4f53\u4e00\u6837\u8bbe\u7f6e `color`\u3001`font-size` \u7b49\u5c5e\u6027\n          {\n            test: /\\.svg$/,\n            use: [\n              {\n                loader: require.resolve('@svgr/webpack'),\n                options: {\n                  prettier: false,\n                  svgo: false,\n                  svgoConfig: {\n                    plugins: [{ removeViewBox: false }],\n                  },\n                  titleProp: true,\n                  ref: true,\n                },\n              },\n              {\n                loader: require.resolve('file-loader'),\n                options: {\n                  name: 'static/media/[name].[hash].[ext]',\n                },\n              },\n            ],\n            issuer: {\n              and: [/\\.(ts|tsx|js|jsx|md|mdx)$/],\n            },\n          },\n          // \u56fe\u7247\u3001\u5b57\u4f53\u6253\u5305\uff0c\u6839\u636e\u8d44\u6e90\u5927\u5c0f\u81ea\u52a8\u9009\u62e9 `resource` \u6216\u8005 `inline`\n          // \u5982\u679c\u9700\u8981\u5f3a\u5236 inline \u53ef\u4ee5\u914d\u7f6e `type: \"asset/inline\"`\n          {\n            test: /\\.(woff|woff2|ttf|eot|svg)$/,\n            exclude: /node_modules/,\n            type: 'asset',\n          },\n          {\n            test: /\\.(png|jpg|gif|jpeg|ico|cur)$/,\n            exclude: /node_modules/,\n            type: 'asset',\n          },\n        ]\n      }\n    ]\n  },\n  resolve: {\n    // \u9650\u5236\u7b2c\u4e09\u65b9\u5e93\u641c\u7d22\u8303\u56f4\uff0c\u5173\u95ed\u9010\u5c42\u641c\u7d22\u529f\u80fd\n    modules: [appNodeModules],\n    // \u4ee3\u7801\u4e2d\u5c3d\u91cf\u8865\u9f50\u6587\u4ef6\u540e\u7f00\u540d\uff0c\u51cf\u5c11\u5339\u914d\u6b21\u6570\n    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'].filter(ext => useTypeScript || !ext.includes('ts')),\n    alias: {\n      \"@\": appSrc,\n    },\n    // Webpack5 \u4e0d\u518d\u63d0\u4f9b Node polyfill\uff0c\u5982\u679c\u7528\u5230\u8fd9\u4e9b\u6a21\u5757\u9700\u8981\u5355\u72ec\u5b89\u88c5\n    // fallback: {\n    //   crypto: require.resolve(\"crypto-browserify\"),\n    //   stream: require.resolve(\"stream-browserify\"),\n    //   buffer: require.resolve(\"buffer/\"),\n    // },\n  },\n  cache: {\n    type: 'filesystem',\n    cacheDirectory: appWebpackCache,\n    store: 'pack',\n    buildDependencies: {\n      defaultWebpack: ['webpack/lib/'],\n      config: [__filename],\n      tsconfig: useTypeScript ? [appTsConfig] : [],\n    },\n  },\n  devServer: {\n    static: appBuild,\n    compress: true,\n    // `hot: true` \u81ea\u52a8\u5e94\u7528 `HotModuleReplacementPlugin` \u63d2\u4ef6\n    hot: true,\n    open: true,\n    // \u652f\u6301\u5386\u53f2\u6a21\u5f0f\u8def\u7531\u91cd\u5b9a\u5411\n    historyApiFallback: true,\n    host: '0.0.0.0',\n    port: 8066,\n    setupMiddlewares: (middlewares, devServer) => {\n      // \u8bbe\u7f6e express \u4e2d\u95f4\u4ef6\uff0c\u53c2\u8003\uff1a\n      // https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares\n    },\n  },\n  plugins: [\n    new Webpackbar(),\n    useBundleAnalyzer && new BundleAnalyzerPlugin(),\n    new HtmlWebpackPlugin({\n      template: appHtml,\n      title: \"React App\",\n      filename: \"index.html\",\n      ...(isEnvProduction && {\n        minify: {\n          removeComments: true,\n          collapseWhitespace: true,\n          removeRedundantAttributes: true,\n          useShortDoctype: true,\n          removeEmptyAttributes: true,\n          removeStyleLinkTypeAttributes: true,\n          keepClosingSlash: true,\n          minifyJS: true,\n          minifyCSS: true,\n          minifyURLs: true,\n        },\n      }),\n    }),\n    new webpack.DefinePlugin({\n      'process.env.NODE_ENV': isEnvDevelopment ? '\"development\"' : '\"production\"',\n      __DEV__: isEnvDevelopment,\n    }),\n    isEnvProduction &&\n      new MiniCssExtractPlugin({\n        filename: 'static/css/[name].[contenthash:8].css',\n        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',\n        // \u89e3\u51b3\u7528\u4e86 antd \u7ec4\u4ef6\u5e93\u4e4b\u540e\uff0c\u62bd\u63d0\u6837\u5f0f\u51b2\u7a81\u95ee\u9898\n        ignoreOrder: true,\n      }),\n    isEnvDevelopment &&\n      new ReactRefreshWebpackPlugin({\n        overlay: false,\n      }),\n    isEnvDevelopment && new CaseSensitivePathsPlugin(),\n    useTypeScript &&\n      new ForkTsCheckerWebpackPlugin({\n        async: isEnvDevelopment,\n        typescript: {\n          typescriptPath: resolve.sync('typescript', {\n            basedir: appNodeModules,\n          }),\n          configOverwrite: {\n            compilerOptions: {\n              sourceMap: isEnvDevelopment,\n              skipLibCheck: true,\n              inlineSourceMap: false,\n              declarationMap: false,\n              noEmit: true,\n              incremental: true,\n              tsBuildInfoFile: appTsBuildInfoFile,\n            },\n          },\n          context: appPath,\n          diagnosticOptions: {\n            syntactic: true,\n          },\n          mode: 'write-references',\n          // profile: true,\n        },\n        issue: {\n          // This one is specifically to match during CI tests,\n          // as micromatch doesn't match\n          // '../cra-template-typescript/template/src/App.tsx'\n          // otherwise.\n          include: [\n            { file: '../**/src/**/*.{ts,tsx}' },\n            { file: '**/src/**/*.{ts,tsx}' },\n          ],\n          exclude: [\n            { file: '**/src/**/__tests__/**' },\n            { file: '**/src/**/?(*.){spec|test}.*' },\n            { file: '**/src/setupProxy.*' },\n            { file: '**/src/setupTests.*' },\n          ],\n        },\n        logger: {\n          infrastructure: 'silent',\n        },\n      }),\n    // \u5f00\u53d1\u73af\u5883\u4e0b\u542f\u7528 `ESLintPlugin`\n    // \u751f\u4ea7\u73af\u5883\u4e0b\u7981\u7528\uff0c\u786e\u4fdd\u6700\u4f73\u7f16\u8bd1\u901f\u5ea6\n    isEnvDevelopment &&\n      new ESLintPlugin({\n        // Plugin options\n        extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],\n        formatter: require.resolve('react-dev-utils/eslintFormatter'),\n        eslintPath: require.resolve('eslint'),\n        // \u672c\u5730\u5f00\u53d1\u73af\u5883\u4e0b\u5c06 ESLint \u62a5\u9519\u8f6c\u4e3a warnings\n        failOnError: false,\n        context: appSrc,\n        // \u542f\u7528 ESLint \u7f13\u5b58\n        cache: true,\n        cacheLocation: path.resolve(\n          appPath,\n          'node_modules/.cache/.eslintcache'\n        ),\n        // ESLint class options\n        cwd: appPath,\n        resolvePluginsRelativeTo: __dirname,\n        baseConfig: {\n          extends: [require.resolve('eslint-config-react-app/base')],\n          // React 17 \u4e4b\u524d\uff0cclassic JSX \u8bed\u6cd5\u5fc5\u987b\u663e\u5f0f import React\n          // React 17 \u5f00\u59cb\u652f\u6301 automatic JSX\uff0c\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u5f15\u5165 jsx \u5165\u53e3\uff0c\u65e0\u9700\u5f00\u53d1\u8005\u624b\u52a8 import\n          // \u56e0\u6b64\u8fd9\u91cc\u5173\u95ed ESLint \u76f8\u5173\u89c4\u5219\n          rules: {\n            'react/jsx-uses-react': 'off',\n            'react/react-in-jsx-scope': 'off',\n          },\n        },\n      }),\n  ].filter(Boolean),\n  optimization: {\n    minimize: isEnvProduction,\n    minimizer: [\n      // \u4ec5\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u542f\u7528\uff0cTerser \u538b\u7f29\u9ed8\u8ba4\u542f\u7528 parallel\n      new TerserPlugin({\n        terserOptions: {\n          parse: {\n            // We want terser to parse ecma 8 code. However, we don't want it\n            // to apply any minification steps that turns valid ecma 5 code\n            // into invalid ecma 5 code. This is why the 'compress' and 'output'\n            // sections only apply transformations that are ecma 5 safe\n            // https://github.com/facebook/create-react-app/pull/4234\n            ecma: 8,\n          },\n          compress: {\n            ecma: 5,\n            warnings: false,\n            // Disabled because of an issue with Uglify breaking seemingly valid code:\n            // https://github.com/facebook/create-react-app/issues/2376\n            // Pending further investigation:\n            // https://github.com/mishoo/UglifyJS2/issues/2011\n            comparisons: false,\n            // Disabled because of an issue with Terser breaking valid code:\n            // https://github.com/facebook/create-react-app/issues/5250\n            // Pending further investigation:\n            // https://github.com/terser-js/terser/issues/120\n            inline: 2,\n            // \u751f\u4ea7\u73af\u5883\u6253\u5305\u79fb\u9664 console\n            drop_console: true,\n          },\n          mangle: {\n            safari10: true,\n          },\n          // Added for profiling in devtools\n          keep_classnames: isEnvProductionProfile,\n          keep_fnames: isEnvProductionProfile,\n          output: {\n            ecma: 5,\n            comments: false,\n            // Turned on because emoji and regex is not minified properly using default\n            // https://github.com/facebook/create-react-app/issues/2488\n            ascii_only: true,\n          },\n        },\n      }),\n      // \u4ec5\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u542f\u7528\n      new CssMinimizerPlugin(),\n    ],\n    // Webpack \u8fd0\u884c\u65f6\u4ee3\u7801\u5355\u72ec\u5206\u5305\n    runtimeChunk: 'single',\n    splitChunks: {\n      // `SplitChunksPlugin` \u9ed8\u8ba4\u53ea\u5bf9 Async Chunk \u751f\u6548\uff0cInitial Chunk \u4e0d\u8fdb\u884c\u62c6\u5305\u5904\u7406\n      // \u5b57\u7b26\u4e32 `'all'` \uff1a\u5bf9 Initial Chunk \u4e0e Async Chunk \u90fd\u751f\u6548\n      chunks: \"all\",\n      cacheGroups: {\n        // \u9488\u5bf9\u4e1a\u52a1\u7ec4\u4ef6\u5e93\u7684\u7f13\u5b58\u7ec4\n        commons: {\n          test: /[\\\\/]node_modules[\\\\/]@study[\\\\/]/,\n          name: 'commons',\n          chunks: 'all',\n        },\n        // \u9488\u5bf9 antd \u7684\u7f13\u5b58\u7ec4\n        vendor: {\n          test: /[\\\\/]node_modules[\\\\/](antd|@ant-design|rc-.*?)[\\\\/]/,\n          name: 'vendor',\n          chunks: 'all',\n          enforce: true,\n        },\n        // Extracting all CSS/less in a single file\n        styles: {\n          name: 'styles',\n          test: /\\.(c|le)ss$/,\n          chunks: 'all',\n          enforce: true,\n        },\n      }\n    }\n  },\n}\n")))}m.isMDXComponent=!0}}]);