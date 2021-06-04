(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{414:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(720)),i={id:"box",title:"Box"},c={unversionedId:"box",id:"version-3.0.0-next.40/box",isDocsHomePage:!1,title:"Box",description:"This is a generic component for low level layout needs. It is similar to a div in HTML.",source:"@site/versioned_docs/version-3.0.0-next.40/box.md",slug:"/box",permalink:"/box",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/box.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Using Theme",permalink:"/theme"},next:{title:"Center",permalink:"/center"}},s=[{value:"Example",id:"example",children:[{value:"Basic",id:"basic",children:[]},{value:"Composition",id:"composition",children:[]},{value:"With Linear gradient",id:"with-linear-gradient",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a generic component for low level layout needs. It is similar to a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}),Object(o.b)("inlineCode",{parentName:"a"},"div"))," in HTML."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%0A%20%20%20%20%20%20bg%3D%22primary.400%22%0A%20%20%20%20%20%20p%3D%7B12%7D%0A%20%20%20%20%20%20rounded%3D%22lg%22%0A%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20fontSize%3A%20%22md%22%2C%0A%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20This%20is%20a%20Box%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("br",null),Object(o.b)("h3",{id:"composition"},"Composition"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20Icon%2C%0A%20%20AspectRatio%2C%0A%20%20Image%2C%0A%20%20Text%2C%0A%20%20Center%2C%0A%20%20HStack%2C%0A%20%20Stack%2C%0A%20%20useColorModeValue%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialIcons%2C%20Ionicons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20width%3D%7B72%7D%20bg%3D%7BuseColorModeValue(%22gray.50%22%2C%20%22gray.700%22)%7D%20shadow%3D%7B1%7D%3E%0A%20%20%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%20%20%3CAspectRatio%20ratio%3D%7B16%20%2F%209%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20roundedTop%3D%22lg%22%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20%22https%3A%2F%2Fwww.holidify.com%2Fimages%2Fcmsuploads%2Fcompressed%2FBangalore_citycover_20190613234056.jpg%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20alt%3D%22image%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAspectRatio%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22red.500%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20%22700%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20%22xs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20%20%20bottom%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20px%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20py%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20PHOTOS%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20p%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20rounded%3D%22full%22%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22red.500%22%0A%20%20%20%20%20%20%20%20%20%20boxSize%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20%20%20right%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20%22700%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20%22xs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%2027%20MAR%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3CStack%20p%3D%7B4%7D%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%20ml%3D%7B-1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20Garden%20City%0A%20%20%20%20%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%20%20%20%20%3CHeading%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22xs%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%7BuseColorModeValue(%22red.500%22%2C%20%22red.300%22)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3D%22500%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ml%3D%7B-0.5%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20mt%3D%7B-1%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20Silicon%20Valley%20of%20India.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%20%20%20%20%3CText%20lineHeight%3D%7B6%7D%20fontWeight%3D%7B400%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Bengaluru%20(also%20called%20Bangalore)%20is%20the%20center%20of%20India's%20high-tech%0A%20%20%20%20%20%20%20%20%20%20industry.%20The%20city%20is%20also%20known%20for%20its%20parks%20and%20nightlife.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CHStack%20alignItems%3D%22center%22%20space%3D%7B4%7D%20justifyContent%3D%22space-between%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CHStack%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20as%3D%7BMaterialIcons%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22access-time%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22gray.500%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22sm%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20ml%3D%7B1%7D%20color%3D%22gray.500%22%20fontWeight%3D%22500%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%206%20mins%20ago%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%20%20%20%20%3CHStack%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20as%3D%7BIonicons%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22ios-chatbubbles%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22gray.500%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22sm%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20ml%3D%7B1%7D%20color%3D%22gray.500%22%20fontWeight%3D%22500%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%2039%20comments%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("br",null),Object(o.b)("h3",{id:"with-linear-gradient"},"With Linear gradient"),Object(o.b)("p",null,"If you're using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/"}),"Expo")," managed or bare workflow, you can install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/sdk/linear-gradient/"}),"expo-linear-gradient")," and configure it in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"setup-provider#add-external-dependencies-optional"}),"NativeBaseProvider")," as shown below."),Object(o.b)("div",{className:"snack-player","data-snack-name":"LinearGradient","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0A%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%0A%20%20%20%20%20%20bg%3D%7B%7B%0A%20%20%20%20%20%20%20%20linearGradient%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20colors%3A%20%5B%22lightBlue.300%22%2C%20%22violet.800%22%5D%2C%0A%20%20%20%20%20%20%20%20%20%20start%3A%20%5B0%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20end%3A%20%5B1%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20p%3D%7B12%7D%0A%20%20%20%20%20%20rounded%3D%22lg%22%0A%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20fontSize%3A%20%22md%22%2C%0A%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20This%20is%20a%20Box%20with%20Linear%20Gradient%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aconst%20config%20%3D%20%7B%0A%20%20dependencies%3A%20%7B%0A%20%20%20%20'linear-gradient'%3A%20require('expo-linear-gradient').LinearGradient%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%20config%3D%7Bconfig%7D%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("br",null),Object(o.b)("p",null,"If you're not using Expo, you can install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-linear-gradient"}),"react-native-linear-gradient")," and configure in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"setup-provider#add-external-dependencies-optional"}),"NativeBaseProvider")," as shown below."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Box, NativeBaseProvider } from 'native-base';\n\nconst Example = () => {\n  return (\n    <Box\n      bg={{\n        linearGradient: {\n          colors: ['lightBlue.300', 'violet.800'],\n          start: [0, 0],\n          end: [1, 0],\n        },\n      }}\n      p={12}\n      rounded=\"lg\"\n      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}\n    >\n      This is a Box with Linear Gradient\n    </Box>\n  );\n};\n\nconst config = {\n  dependencies: {\n    'linear-gradient': require('react-native-linear-gradient').default,\n  },\n};\n\nexport default () => {\n  return (\n    <NativeBaseProvider config={config}>\n      <Example />\n    </NativeBaseProvider>\n  );\n};\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"%2F%2F%40ts-nocheck%0Aimport%20React%20from%20%22react%22%0Aimport%20%7B%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20myRef%20%3D%20React.useRef(%7B%7D)%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20myRef%3F.current.setNativeProps(%7B%0A%20%20%20%20%20%20borderWidth%3A%2010%2C%0A%20%20%20%20%20%20opacity%3A%200.5%2C%0A%20%20%20%20%20%20borderRadius%3A%2010%2C%0A%20%20%20%20%7D)%0A%20%20%7D%2C%20%5BmyRef%5D)%0A%20%20return%20(%0A%20%20%20%20%3CBox%0A%20%20%20%20%20%20width%3D%2290%25%22%0A%20%20%20%20%20%20bg%3D%22primary.400%22%0A%20%20%20%20%20%20p%3D%7B4%7D%0A%20%20%20%20%20%20shadow%3D%7B2%7D%0A%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20fontSize%3A%20%22md%22%2C%0A%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20ref%3D%7BmyRef%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20This%20is%20a%20Box%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Common use cases for Box component are:")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Create responsive layouts with ease."),Object(o.b)("li",{parentName:"ul"},"Provide a shorthand to pass styles via props (",Object(o.b)("inlineCode",{parentName:"li"},"bg")," instead of ",Object(o.b)("inlineCode",{parentName:"li"},"backgroundColor"),").")))),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        children\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        shadow\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Applies box shadow and accepts a number from 0 to 9\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        0\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _text\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        For providing props to Text inside Box\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        bg\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | ILinearGradientProps\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        background\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | ILinearGradientProps\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        bgColor\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | ILinearGradientProps\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        backgroundColor\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | ILinearGradientProps\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Box implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view"}),Object(o.b)("code",{parentName:"a"},"View")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"ColorProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),"LayoutProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#flexbox"}),"FlexProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#position"}),"PositionProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#borders"}),"BorderProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#extra-props"}),"ExtraProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#outline"}),"OutlineProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#background"}),"BackgroundProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#safearea"}),"SafeAreaProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#transform"}),"TransformProps"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"PlatformProps"))))}d.isMDXComponent=!0},720:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return A}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,A=b["".concat(i,".").concat(m)]||b[m]||l[m]||o;return a?r.a.createElement(A,c(c({ref:t},p),{},{components:a})):r.a.createElement(A,c({ref:t},p))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);