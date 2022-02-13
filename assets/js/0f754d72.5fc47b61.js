"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[986],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7728:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:6},p="\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",c={unversionedId:"Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",id:"Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",isDocsHomePage:!1,title:"\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",description:"1. \u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4",source:"@site/docs/Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd.md",sourceDirName:"Webpack\u4f18\u5316\u65b9\u6848",slug:"/Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u591a\u8fdb\u7a0b\u6253\u5305",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u591a\u8fdb\u7a0b\u6253\u5305"},next:{title:"\u5206\u5305\u4f18\u5316",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u5206\u5305\u4f18\u5316"}},d=[{value:"1. \u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4",id:"1-\u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4",children:[],level:2},{value:"2. \u8df3\u8fc7\u6587\u4ef6\u7f16\u8bd1",id:"2-\u8df3\u8fc7\u6587\u4ef6\u7f16\u8bd1",children:[],level:2},{value:"3. \u6700\u5c0f\u5316 Loader \u4f5c\u7528\u8303\u56f4",id:"3-\u6700\u5c0f\u5316-loader-\u4f5c\u7528\u8303\u56f4",children:[],level:2},{value:"4. \u6700\u5c0f\u5316 watch \u76d1\u63a7\u8303\u56f4",id:"4-\u6700\u5c0f\u5316-watch-\u76d1\u63a7\u8303\u56f4",children:[],level:2},{value:"5. \u8df3\u8fc7 TS \u7c7b\u578b\u68c0\u67e5",id:"5-\u8df3\u8fc7-ts-\u7c7b\u578b\u68c0\u67e5",children:[],level:2}],u={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63d0\u5347\u7f16\u8bd1\u6027\u80fd"},"\u63d0\u5347\u7f16\u8bd1\u6027\u80fd"),(0,o.kt)("h2",{id:"1-\u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4"},"1. \u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"enhanced-resolve")," \u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4\uff1b"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/enhanced-resolve"},"https://github.com/webpack/enhanced-resolve")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve.extensions")," \u51cf\u5c11\u5339\u914d\u6b21\u6570\uff0c\u4ee3\u7801\u4e2d\u5c3d\u91cf\u8865\u9f50\u6587\u4ef6\u540e\u7f00\u540d\uff1b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"resolve.modules")," \u914d\u7f6e"),(0,o.kt)("p",{parentName:"li"},"\u5f53 Webpack \u9047\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"import 'lodash'")," \u8fd9\u6837\u7684 npm \u5305\u5bfc\u5165\u8bed\u53e5\u65f6\uff0c\u4f1a\u5c1d\u8bd5\u5148\u5f53\u524d\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u641c\u7d22\u8d44\u6e90\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5219\u6309\u76ee\u5f55\u5c42\u7ea7\u5c1d\u8bd5\u9010\u7ea7\u5411\u4e0a\u67e5\u627e ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u76ee\u5f55\uff0c\u5982\u679c\u4f9d\u7136\u627e\u4e0d\u5230\u5219\u6700\u7ec8\u5c1d\u8bd5\u5728\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u641c\u7d22\u3002"),(0,o.kt)("p",{parentName:"li"},"\u5728\u4e00\u4e2a\u4f9d\u8d56\u7ba1\u7406\u6267\u884c\u7684\u6bd4\u8f83\u826f\u597d\u7684\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u5c3d\u91cf\u4fdd\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u8d44\u6e90\u7684\u9ad8\u5ea6\u5185\u805a\uff0c\u63a7\u5236\u5728\u6709\u9650\u7684\u4e00\u4e24\u4e2a\u5c42\u7ea7\u4e0a\uff0c\u56e0\u6b64 Webpack \u8fd9\u4e00\u9010\u5c42\u67e5\u627e\u7684\u903b\u8f91\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5b9e\u7528\u6027\u5e76\u4e0d\u9ad8\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve.modules")," \u914d\u7f6e\u9879\uff0c\u4e3b\u52a8\u5173\u95ed\u9010\u5c42\u641c\u7d22\u529f\u80fd\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  resolve: {\n    modules: [path.resolve(__dirname, 'node_modules')],\n  },\n};\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"resolve.mainFiles")," \u914d\u7f6e"),(0,o.kt)("p",{parentName:"li"},"\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve.extensions")," \u7c7b\u4f3c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"resolve.mainFiles")," \u914d\u7f6e\u9879\u7528\u4e8e\u5b9a\u4e49\u6587\u4ef6\u5939\u9ed8\u8ba4\u6587\u4ef6\u540d\uff0c\u4f8b\u5982\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"import './dir'")," \u8bf7\u6c42\uff0c\u5047\u8bbe ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve.mainFiles = ['index', 'home']")," \uff0cWebpack \u4f1a\u6309\u4f9d\u6b21\u6d4b\u8bd5 ",(0,o.kt)("inlineCode",{parentName:"p"},"./dir/index")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"./dir/home")," \u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002"),(0,o.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u5e94\u63a7\u5236 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve.mainFiles")," \u6570\u7ec4\u6570\u91cf\uff0c\u51cf\u5c11\u5339\u914d\u6b21\u6570\u3002"))),(0,o.kt)("h2",{id:"2-\u8df3\u8fc7\u6587\u4ef6\u7f16\u8bd1"},"2. \u8df3\u8fc7\u6587\u4ef6\u7f16\u8bd1"),(0,o.kt)("p",null,"\u6709\u4e0d\u5c11 npm \u5305\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u63d0\u524d\u6253\u5305\u597d\uff0c\u4e0d\u9700\u8981\u505a\u4e8c\u6b21\u7f16\u8bd1\u7684\u8d44\u6e90\u7248\u672c\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vue \u5305\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/vue/dist/vue.runtime.esm.js")," \u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"React \u5305\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/react/umd/react.production.min.js")," \u6587\u4ef6")),(0,o.kt)("p",null,"\u5bf9\u4f7f\u7528\u65b9\u6765\u8bf4\uff0c\u8fd9\u4e9b\u8d44\u6e90\u7248\u672c\u90fd\u662f\u9ad8\u5ea6\u72ec\u7acb\u3001\u5185\u805a\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u6ca1\u5fc5\u8981\u91cd\u590d\u505a\u4f9d\u8d56\u89e3\u6790\u3001\u4ee3\u7801\u8f6c\u8bd1\u64cd\u4f5c\uff0c\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"module.noParse")," \u914d\u7f6e\u9879\u8df3\u8fc7\u8fd9\u4e9b npm \u5305:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  module: {\n    noParse: /vue|lodash|react/,\n  },\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u8be5\u5c5e\u6027\u540e\uff0c\u4efb\u4f55\u5339\u914d\u8be5\u9009\u9879\u7684\u5305\u90fd\u4f1a\u8df3\u8fc7\u8017\u65f6\u7684\u5206\u6790\u8fc7\u7a0b\uff0c\u76f4\u63a5\u6253\u5305\u8fdb chunk\uff0c\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6")),(0,o.kt)("h2",{id:"3-\u6700\u5c0f\u5316-loader-\u4f5c\u7528\u8303\u56f4"},"3. \u6700\u5c0f\u5316 Loader \u4f5c\u7528\u8303\u56f4"),(0,o.kt)("p",null,"Loader \u7ec4\u4ef6\u7528\u4e8e\u5c06\u5404\u5f0f\u6587\u4ef6\u8d44\u6e90\u8f6c\u6362\u4e3a\u53ef\u88ab JavaScript \u7406\u89e3\u3001\u8fd0\u884c\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u6b63\u662f\u8fd9\u4e00\u7279\u6027\u652f\u6491\u8d77 Webpack \u5f3a\u5927\u7684\u8d44\u6e90\u5904\u7406\u80fd\u529b\u3002\u4e0d\u8fc7\uff0cLoader \u5728\u6267\u884c\u5185\u5bb9\u8f6c\u6362\u7684\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u505a\u5927\u91cf\u7684 CPU \u8fd0\u7b97\u64cd\u4f5c\uff0c\u4f8b\u5982 babel-loader\u3001eslint-loader\u3001vue-loader \u7b49\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u6709\u5fc5\u8981\u6839\u636e\u5b9e\u9645\u9700\u6c42\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"module.rules.include"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"module.rules.exclude")," \u7b49\u914d\u7f6e\u9879\u9650\u5b9a Loader \u7684\u6267\u884c\u8303\u56f4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      // include: path.join(__dirname, './src'),\n      use: ['babel-loader', 'eslint-loader']\n    }]\n  }\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"exclude: /node_modules/")," \u5c5e\u6027\u540e\uff0cWebpack \u5728\u5904\u7406 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u7684 js \u6587\u4ef6\u65f6\u4f1a\u76f4\u63a5\u8df3\u8fc7\u8fd9\u4e2a rule \u9879\uff0c\u4e0d\u4f1a\u4e3a\u8fd9\u4e9b\u6587\u4ef6\u6267\u884c\u540e\u7eed\u7684 Loader")),(0,o.kt)("h2",{id:"4-\u6700\u5c0f\u5316-watch-\u76d1\u63a7\u8303\u56f4"},"4. \u6700\u5c0f\u5316 watch \u76d1\u63a7\u8303\u56f4"),(0,o.kt)("p",null,"\u5728 watch \u6a21\u5f0f\u4e0b(\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"npx webpack --watch")," \u547d\u4ee4\u542f\u52a8)\uff0cWebpack \u4f1a\u6301\u7eed\u76d1\u542c\u9879\u76ee\u6240\u6709\u4ee3\u7801\u6587\u4ef6\uff0c\u53d1\u751f\u53d8\u5316\u65f6\u91cd\u65b0\u6784\u5efa\u6700\u65b0\u4ea7\u7269\u3002\u4e0d\u8fc7\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u524d\u7aef\u9879\u76ee\u4e2d\u67d0\u4e9b\u8d44\u6e90\u5e76\u4e0d\u4f1a\u9891\u7e41\u66f4\u65b0\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \uff0c\u6b64\u65f6\u53ef\u4ee5\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"watchOptions.ignored")," \u5c5e\u6027\u5ffd\u7565\u8fd9\u4e9b\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  watchOptions: {\n    ignored: /node_modules/\n  },\n};\n")),(0,o.kt)("h2",{id:"5-\u8df3\u8fc7-ts-\u7c7b\u578b\u68c0\u67e5"},"5. \u8df3\u8fc7 TS \u7c7b\u578b\u68c0\u67e5"),(0,o.kt)("p",null,"\u7c7b\u578b\u68c0\u67e5\u6d89\u53ca AST \u89e3\u6790\u3001\u904d\u5386\u4ee5\u53ca\u5176\u5b83\u975e\u5e38\u6d88\u8017 CPU \u7684\u64cd\u4f5c\uff0c\u4f1a\u7ed9\u5de5\u7a0b\u5316\u6d41\u7a0b\u5f15\u5165\u6027\u80fd\u8d1f\u62c5\uff0c\u5fc5\u8981\u65f6\u5f00\u53d1\u8005\u53ef\u9009\u62e9\u5173\u95ed\u7f16\u8bd1\u4e3b\u8fdb\u7a0b\u4e2d\u7684\u7c7b\u578b\u68c0\u67e5\u529f\u80fd\uff0c\u540c\u6b65\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," \u63d2\u4ef6\u5c06\u5176\u5265\u79bb\u5230\u5355\u72ec\u8fdb\u7a0b\u6267\u884c\uff0c\u4f8b\u5982\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\n\nmodule.exports = {\n  // ...\n  module: {\n    rules: [{\n      test: /\\.ts$/,\n      use: [\n        {\n          loader: 'ts-loader',\n          options: {\n            // \u7981\u7528 `ts-loader` \u7684\u7c7b\u578b\u68c0\u67e5\n            transpileOnly: true\n          }\n        }\n      ],\n    }, ],\n  },\n  plugins:[\n    new ForkTsCheckerWebpackPlugin()\n  ]\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\uff0c\u65e2\u53ef\u4ee5\u83b7\u5f97 Typescript \u9759\u6001\u7c7b\u578b\u68c0\u67e5\u80fd\u529b\uff0c\u53c8\u80fd\u63d0\u5347\u6574\u4f53\u7f16\u8bd1\u901f\u5ea6")))}s.isMDXComponent=!0}}]);