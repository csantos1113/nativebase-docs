(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||a;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1715:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},1716:function(e,t,n){"use strict";var r=n(0),o=n(1717);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1717:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},1718:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1716),c=n(1715),i=n(56),s=n.n(i);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:p,className:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[v,O]=Object(r.useState)(i),y=r.Children.toArray(e.children);if(null!=p){const e=d[p];null!=e&&e!==v&&m.some((t=>t.value===e))&&O(e)}const g=e=>{O(e),null!=p&&f(p,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},m.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(r.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},1719:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},598:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(1714)),c=n(1718),i=n(1719),s={},l={unversionedId:"migration/Icon",id:"version-3.0.0-next.31/migration/Icon",isDocsHomePage:!1,title:"Icon",description:"Migrating to v3 will provide a lot more customisation option. Apart from the icons provided by @expo/vector-icon, you can also create custom icons using SVG.",source:"@site/versioned_docs/version-3.0.0-next.31/migration/Icon.md",slug:"/migration/Icon",permalink:"/3.0.0-next.31/migration/Icon",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.31/migration/Icon.md",version:"3.0.0-next.31",sidebar:"version-3.0.0-next.31/componentsSidebar",previous:{title:"Header",permalink:"/3.0.0-next.31/migration/Header"},next:{title:"Layout",permalink:"/3.0.0-next.31/migration/Layout"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],m={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Migrating to v3 will provide a lot more ",Object(a.b)("strong",{parentName:"p"},"customisation")," option. Apart from the icons provided by ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/expo/vector-icons"}),"@expo/vector-icon"),", you can also create custom icons using SVG."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Migrating Icon components can broadly described in these points:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ios")," and ",Object(a.b)("strong",{parentName:"li"},"android")," props have been deprecated.")),Object(a.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(a.b)(c.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"v2",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Icon name='home' /> // same\n<Icon type='FontAwesome' name='home' /> //same\n<Icon\n  ios='ios-menu'\n  android='md-menu'\n  style={{ fontSize: 20, color: 'red' }}\n/>\n// need to re-write\n"))),Object(a.b)(i.a,{value:"v3",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Icon name='home' /> // same\n<Icon type='FontAwesome' name='home' /> //same\n<Icon\n  name={Platform.OS ? 'ios-menu' : 'md-menu'}\n  style={{ fontSize: 20, color: 'red' }}\n/>\n// v3 version\n")))))}p.isMDXComponent=!0}}]);