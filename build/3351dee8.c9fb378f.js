(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var o=a(0),n=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,p=m["".concat(c,".").concat(u)]||m[u]||A[u]||i;return a?n.a.createElement(p,r(r({ref:t},l),{},{components:a})):n.a.createElement(p,r({ref:t},l))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,c=new Array(i);c[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},408:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return s}));var o=a(3),n=a(7),i=(a(0),a(1714)),c={id:"accordion",title:"Accordion"},r={unversionedId:"accordion",id:"version-3.0.0-next.31/accordion",isDocsHomePage:!1,title:"Accordion",description:"Implements",source:"@site/versioned_docs/version-3.0.0-next.31/accordion.md",slug:"/accordion",permalink:"/3.0.0-next.31/accordion",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.31/accordion.md",version:"3.0.0-next.31",sidebar:"version-3.0.0-next.31/componentsSidebar",previous:{title:"Popover",permalink:"/3.0.0-next.31/popOver"},next:{title:"ActionSheet",permalink:"/3.0.0-next.31/actionSheet"}},d=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Multiple",id:"multiple",children:[]},{value:"Default Index",id:"default-index",children:[]},{value:"Toggle",id:"toggle",children:[]},{value:"Expanded Style",id:"expanded-style",children:[]},{value:"Accessing Internal State",id:"accessing-internal-state",children:[]}]},{value:"Props",id:"props",children:[{value:"Accordion",id:"accordion",children:[]},{value:"AccordionItem",id:"accordionitem",children:[]},{value:"Accordion.Summary",id:"accordionsummary",children:[]},{value:"Accordion.Details",id:"accordiondetails",children:[]},{value:"Accordion.Icon",id:"accordionicon",children:[]}]}],l={toc:d};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/3.0.0-next.31/collapse"}),Object(i.b)("inlineCode",{parentName:"a"},"Collapse")),", ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/3.0.0-next.31/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box")))),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Accordion } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Accordion%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20AccordionComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CAccordion%20index%3D%7B%5B0%2C%201%5D%7D%3E%0A%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20Section%201%20title%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%0A%20%20%20%20%20%20%20%20%20%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20Section%202%20title%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%0A%20%20%20%20%20%20%20%20%20%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20Section%203%20title%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%0A%20%20%20%20%20%20%20%20%20%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%3C%2FAccordion%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CAccordionComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"multiple"},"Multiple"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Multilple","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Accordion%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20AccordionComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20m%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAccordion%20allowMultiple%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%201%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%202%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%203%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%3C%2FAccordion%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CAccordionComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"default-index"},"Default Index"),Object(i.b)("div",{className:"snack-player","data-snack-name":"DefaultIndex","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Accordion%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20AccordionComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20m%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAccordion%20allowMultiple%20defaultIndex%3D%7B%5B0%2C%202%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%201%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%202%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%203%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%3C%2FAccordion%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%3CAccordionComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"toggle"},"Toggle"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Toggle","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Accordion%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20AccordionComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20m%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAccordion%20allowToggle%20defaultIndex%3D%7B%5B2%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%201%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%202%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3ESection%203%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%3C%2FAccordion%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CAccordionComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"expanded-style"},"Expanded Style"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Style","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Accordion%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20AccordionComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20m%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAccordion%20allowMultiple%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%20_expanded%3D%7B%7BbackgroundColor%3A%20'orange.300'%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3EClick%20me%20to%20see%20a%20different%20style%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%20id%3D%7B9%7D%20isDisabled%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%20_disabled%3D%7B%7BbackgroundColor%3A%20'gray.300'%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3EI'm%20Disabled%20%F0%9F%98%A2%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%3C%2FAccordion%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CAccordionComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"accessing-internal-state"},"Accessing Internal State"),Object(i.b)("div",{className:"snack-player","data-snack-name":"InternalState","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Accordion%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20AccordionComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20m%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAccordion%20allowMultiple%20defaultIndex%3D%7B%5B1%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%20textAlign%3D%22left%22%3ESection%201%20title%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%0A%20%20%20%20%20%20%20%20%3CAccordion.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%7B(%7BisExpanded%7D%3A%20any)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%20textAlign%3D%22left%22%3E%7BisExpanded%20%3F%20'Fire'%20%3A%20'Snow'%7D%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7BisExpanded%20%3F%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22fire%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%20%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22snowflake%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enim%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20nisi%20ut%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FAccordion.Details%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%3C%2FAccordion.Item%3E%0A%20%20%20%20%20%20%3C%2FAccordion%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CAccordionComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"accordion"},"Accordion"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"allowMultiple"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"If true, multiple accordion items can be expanded at once."),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"allowToggle"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"If true, any expanded accordion item can be collapsed again."),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"index"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Number[], number"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"The index(es) of the expanded accordion item."),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"defaultIndex"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Number[], number"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"The initial index(es) of the expanded accordion item. Must be an array for allowMultiple={true} to work."),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"onChange"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"The callback invoked when accordion items are expanded or collapsed."),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h3",{id:"accordionitem"},"AccordionItem"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"A unique id for the accordion item."),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"If true, the accordion header will be disabled."),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h3",{id:"accordionsummary"},"Accordion.Summary"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Accrodion.Summary")," renders a button and composes ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"strong"},{href:"/3.0.0-next.31/box"}),"Box")),". All the ",Object(i.b)("strong",{parentName:"p"},"Box")," props can be passed to ",Object(i.b)("strong",{parentName:"p"},"Accrodion.Summary")," and you can style it by passing pseudo style props like ",Object(i.b)("inlineCode",{parentName:"p"},"_expanded"),", ",Object(i.b)("inlineCode",{parentName:"p"},"_disabled"),", ",Object(i.b)("inlineCode",{parentName:"p"},"_hover"),", etc."),Object(i.b)("h3",{id:"accordiondetails"},"Accordion.Details"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"AccordionDetails")," renders a ",Object(i.b)("strong",{parentName:"p"},"Box")," and composes ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"strong"},{href:"/3.0.0-next.31/collapse"}),"Collapse"))," to provide height animation."),Object(i.b)("h3",{id:"accordionicon"},"Accordion.Icon"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"AccordionIcon")," renders an Icon and composes ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"strong"},{href:"/3.0.0-next.31/icon"}),"Icon")),"."))}s.isMDXComponent=!0}}]);