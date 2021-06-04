(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{617:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(720)),i={id:"buildingAppBar",title:"Building AppBar"},c={unversionedId:"buildingAppBar",id:"version-3.0.0-next.40/buildingAppBar",isDocsHomePage:!1,title:"Building AppBar",description:"The top app bar provides content and actions related to the current screen. It\u2019s used for branding, screen titles, navigation, and actions.",source:"@site/versioned_docs/version-3.0.0-next.40/buildingAppBar.md",slug:"/buildingAppBar",permalink:"/buildingAppBar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/buildingAppBar.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Building SearchBar",permalink:"/buildingSearchBar"},next:{title:"Building a form with Validation",permalink:"/form"}},s=[{value:"Example:",id:"example",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The top app bar provides content and actions related to the current screen. It\u2019s used for branding, screen titles, navigation, and actions."),Object(o.b)("h2",{id:"example"},"Example:"),Object(o.b)("p",null,"We can easily create it using basic layout components from NativeBase."),Object(o.b)("div",{className:"snack-player","data-snack-name":"App Bar","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20VStack%2C%20HStack%2C%20Button%2C%20IconButton%2C%20Icon%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0Aimport%20%7B%20MaterialIcons%20%7D%20from%20'%40expo%2Fvector-icons'%3B%0A%0A%0Afunction%20AppBar()%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B4%7D%20flex%3D%7B1%7D%20%3E%0A%20%20%20%20%20%20%3CHStack%20bg%3D'primary.300'%20justifyContent%3D'space-between'%3E%0A%20%20%20%20%20%20%20%20%3CHStack%20alignItems%3D'center'%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%20icon%3D%7B%3CIcon%20as%3D%7B%3CMaterialIcons%20name%3D'menu'%20%2F%3E%7D%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20fontWeight%3D'bold'%3EHome%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%20icon%3D%7B%3CIcon%20as%3D%7B%3CMaterialIcons%20name%3D'favorite'%20%2F%3E%7D%20size%3D'sm'%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%20icon%3D%7B%3CIcon%20as%3D%7B%3CMaterialIcons%20name%3D'search'%20%2F%3E%7D%20%2F%3E%7D%20size%3D'sm'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%20icon%3D%7B%3CIcon%20as%3D%7B%3CMaterialIcons%20name%3D'more-vert'%20%2F%3E%7D%20size%3D'sm'%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAppBar%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}))}l.isMDXComponent=!0},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);