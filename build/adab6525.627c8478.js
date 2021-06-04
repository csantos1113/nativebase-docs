(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{525:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(720)),i={id:"snackBar",title:"SnackBar"},o={unversionedId:"snackBar",id:"version-3.0.0-next.38/snackBar",isDocsHomePage:!1,title:"SnackBar",description:"Snackbar informs users about a process that an app has performed or will perform. It appears temporarily, towards the bottom of the screen. It shouldn\u2019t interrupt the user experience and doesn't require user input to disappear.",source:"@site/versioned_docs/version-3.0.0-next.38/snackBar.md",slug:"/snackBar",permalink:"/3.0.0-next.38/snackBar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/snackBar.md",version:"3.0.0-next.38"},s=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[{value:"Usage",id:"usage",children:[]},{value:"Using Hook",id:"using-hook",children:[]}]},{value:"Props",id:"props",children:[]},{value:"Accessibility",id:"accessibility",children:[]}],l={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Snackbar")," informs users about a process that an app has performed or will perform. It appears temporarily, towards the bottom of the screen. It shouldn\u2019t interrupt the user experience and doesn't require user input to disappear."),Object(c.b)("h2",{id:"import"},"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Snackbar } from 'native-base';\n")),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("div",{className:"snack-player","data-snack-name":"SnackBar Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Snackbar%2C%20VStack%2C%20Alert%2C%20AlertIcon%2C%20Text%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20SnackbarExample%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%3ESnackbar%20will%20stay%20for%2010%20secs%2C%20default%20is%205%20sec.%3C%2FText%3E%0A%20%20%20%20%20%20%3CSnackbar%0A%20%20%20%20%20%20%20%20autoHideDuration%3D%7B10000%7D%0A%20%20%20%20%20%20%20%20accessibilityAnnouncement%3D%22Sample%20warning%20message%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CVStack%20mx%3D%7B4%7D%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3E%C2%A0Hello%20World%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EAccount%20created%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Description%20mt%3D%7B2%7D%20ml%3D%7B12%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing%20and%20typesetting%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20industry.%20Lorem%20Ipsum%20has%20been%20the%20industry%E2%80%99s%20standard%20dummy%20text%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20ever%20since%20the%201500s.%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%3C%2FSnackbar%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSnackbarExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(c.b)("h3",{id:"using-hook"},"Using Hook"),Object(c.b)("div",{className:"snack-player","data-snack-name":"SnackBar Hooks","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20Alert%2C%0A%20%20useSnackbar%2C%0A%20%20VStack%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0Afunction%20SnackbarExample%20()%20%7B%0A%20%20const%20%7B%20setSnackbar%20%7D%20%3D%20useSnackbar()%3B%0A%20%20const%20template%20%3D%20(%0A%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%3CAlert.Description%3EWelldone%2C%20we%20are%20proud%20of%20you.%3C%2FAlert.Description%3E%0A%20%20%20%20%3C%2FAlert%3E%0A%20%20)%3B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20setSnackbar(template%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20accessibilityAnnouncement%3A%20'Well%20done%2C%20we%20are%20proud%20of%20you.'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20autoHideDuration%3A%201000%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Get%20Default%20Snackbar%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20setSnackbar(template%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20placement%3A%20'top'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20accessibilityAnnouncement%3A%20'Well%20done%2C%20we%20are%20proud%20of%20you.'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Get%20Snackbar%20With%20Overlay%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSnackbarExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"Implement ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.38/transition#slide"}),Object(c.b)("inlineCode",{parentName:"a"},"Slide")),", all props of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.38/box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.38/transition#slide"}),Object(c.b)("inlineCode",{parentName:"a"},"Slide"))," can be passed."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"autoHideDuration"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of milliseconds to wait before dismissing snackbar."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessibilityAnnouncement"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String to be announced by the screen reader."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessibilityLiveRegion"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"none")," , ",Object(c.b)("inlineCode",{parentName:"td"},"polite")," , ",Object(c.b)("inlineCode",{parentName:"td"},"assertive")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To read the content to Talkback and screen reader on web. ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://reactnative.dev/docs/accessibility#accessibilityliveregion-android"}),"Read more")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"polite")))),Object(c.b)("h2",{id:"accessibility"},"Accessibility"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"On Android and Web, Snackbar renders under a View with accessibilityLiveRegion which announces the content rendered inside it to screen reader devices."),Object(c.b)("li",{parentName:"ul"},"On iOS, accessibilityLiveRegion is not supported yet, so we use the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/accessibilityinfo#announceforaccessibility"}),"accessibilityAnnouncement")," to announce the content.")))}b.isMDXComponent=!0},720:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return a?r.a.createElement(m,o(o({ref:t},l),{},{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);