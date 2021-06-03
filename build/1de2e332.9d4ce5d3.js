(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1714:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=l(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,u=p["".concat(o,".").concat(b)]||p[b]||m[b]||i;return t?r.a.createElement(u,c(c({ref:a},d),{},{components:t})):r.a.createElement(u,c({ref:a},d))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},276:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return l}));var n=t(3),r=t(7),i=(t(0),t(1714)),o={id:"heading",title:"Heading"},c={unversionedId:"heading",id:"version-3.0.0-next.27/heading",isDocsHomePage:!1,title:"Heading",description:"Headings are used for rendering headlines.",source:"@site/versioned_docs/version-3.0.0-next.27/heading.md",slug:"/heading",permalink:"/3.0.0-next.27/heading",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/heading.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Text",permalink:"/3.0.0-next.27/text"},next:{title:"AlertDialog",permalink:"/3.0.0-next.27/alertDialog"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Example (Sizes)",id:"example-sizes",children:[]},{value:"Example (Truncate)",id:"example-truncate",children:[]},{value:"Example (Overriden)",id:"example-overriden",children:[]},{value:"Example (Composition)",id:"example-composition",children:[]},{value:"Props",id:"props",children:[{value:"Heading",id:"heading",children:[]}]}],d={toc:s};function l(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Headings are used for rendering headlines."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Heading"),"\xa0composes\xa0",Object(i.b)("inlineCode",{parentName:"p"},"Text"),"\xa0so you can use all the style props."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Text")," from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/text"}),"react-native"))),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Heading } from 'native-base';\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20%3CHeading%3E%20I'm%20a%20Heading%3C%2FHeading%3E%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-sizes"},"Example (Sizes)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example(Sizes)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Heading%2C%20VStack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%222xl%22%3E(2xl)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xl%22%3E(xl)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22lg%22%3E(lg)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3E(md)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22sm%22%3E(sm)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xs%22%3E(xs)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-truncate"},"Example (Truncate)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example(Truncate)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHeading%20isTruncated%3E%0A%20%20%20%20%20%20Basic%20text%20writing%2C%20including%20headings%2C%20body%20text%2C%20lists%2C%20and%20more.%0A%20%20%20%20%3C%2FHeading%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-overriden"},"Example (Overriden)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example(Overriden)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHeading%20size%3D%22lg%22%20fontSize%3D%7B50%7D%3E%0A%20%20%20%20%20%20I'm%20overriding%20this%20heading%0A%20%20%20%20%3C%2FHeading%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-composition"},"Example (Composition)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example(Composition)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Text%2C%20Button%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%20mb%3D%7B4%7D%3EModern%20online%20and%20offline%20payments%20for%20Africa%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22xl%22%3E%0A%20%20%20%20%20%20%20%20Paystack%20helps%20businesses%20in%20Africa%20get%20paid%20by%20anyone%2C%20anywhere%20in%20the%0A%20%20%20%20%20%20%20%20world%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%22lg%22%20colorScheme%3D%22green%22%20mt%3D%2224px%22%3E%0A%20%20%20%20%20%20%20%20Create%20a%20free%20account%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"heading"},"Heading"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2xl, lg, md, sm, xl, xs"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the heading."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xl")))))}l.isMDXComponent=!0}}]);