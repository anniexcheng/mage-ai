"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1845],{55283:function(n,t,e){e.d(t,{HC:function(){return y},Kf:function(){return f},Nk:function(){return s},PY:function(){return p},gE:function(){return A},jv:function(){return h},nz:function(){return m},oh:function(){return l},qn:function(){return d},t1:function(){return g},y9:function(){return T}});var r=e(38626),o=e(44897),i=e(44425),c=e(42631),a=e(70515),u=e(91437),l=68;function d(n,t){var e,r,c=((null===t||void 0===t||null===(e=t.theme)||void 0===e?void 0:e.borders)||o.Z.borders).light,a=((null===t||void 0===t||null===(r=t.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,u=t||{},l=u.blockColor,d=u.isSelected,f=u.theme;return d?c=(f||o.Z).content.active:i.tf.TRANSFORMER===n||l===i.Lq.PURPLE?(c=(f||o.Z).accent.purple,a=(f||o.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||l===i.Lq.YELLOW?(c=(f||o.Z).accent.yellow,a=(f||o.Z).accent.yellowLight):i.tf.DATA_LOADER===n||l===i.Lq.BLUE?(c=(f||o.Z).accent.blue,a=(f||o.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(f||o.Z).accent.sky,a=(f||o.Z).accent.skyLight):i.tf.SENSOR===n||l===i.Lq.PINK?(c=(f||o.Z).accent.pink,a=(f||o.Z).accent.pinkLight):i.tf.DBT===n?(c=(f||o.Z).accent.dbt,a=(f||o.Z).accent.dbtLight):i.tf.EXTENSION===n||l===i.Lq.TEAL?(c=((null===f||void 0===f?void 0:f.accent)||o.Z.accent).teal,a=((null===f||void 0===f?void 0:f.accent)||o.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===f||void 0===f?void 0:f.accent)||o.Z.accent).rose,a=((null===f||void 0===f?void 0:f.accent)||o.Z.accent).roseLight):i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||l===i.Lq.GREY||i.tf.CUSTOM===n&&!l?(c=(f||o.Z).content.default,a=(f||o.Z).accent.contentDefaultTransparent):i.tf.GLOBAL_DATA_PRODUCT!==n||l||(c=(f||o.Z).monotone.white,a=(f||o.Z).monotone.whiteTransparent),{accent:c,accentLight:a}}var f=(0,r.css)([""," "," "," "," "," "," ",""],(0,u.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(d(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(d(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),s=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),p=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],f,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(d(n.blockType,n).accent,";\n    }\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],f,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,a.iI,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return n.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((n.theme||o.Z).borders.medium2,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],f,c.M8,c.mP,c.M8,c.mP,a.iI,a.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),A=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*a.iI,.5*a.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||o.Z.text).fileBrowser,";\n      ")})),g=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*a.iI),T=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],1*a.iI,1*a.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?a.iI:l,"px;\n  ")})),y=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,l)},44425:function(n,t,e){e.d(t,{$W:function(){return g},DA:function(){return h},HX:function(){return b},J8:function(){return R},L8:function(){return a},LE:function(){return s},Lk:function(){return N},Lq:function(){return p},M5:function(){return m},Q3:function(){return T},Qj:function(){return O},Ut:function(){return C},V4:function(){return _},VZ:function(){return y},dO:function(){return f},f2:function(){return S},iZ:function(){return E},t6:function(){return u},tf:function(){return d}});var r,o,i,c,a,u,l=e(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(a||(a={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var d,f=(r={},(0,l.Z)(r,u.MARKDOWN,"MD"),(0,l.Z)(r,u.PYTHON,"PY"),(0,l.Z)(r,u.R,"R"),(0,l.Z)(r,u.SQL,"SQL"),(0,l.Z)(r,u.YAML,"YAML"),r),s=(o={},(0,l.Z)(o,u.MARKDOWN,"Markdown"),(0,l.Z)(o,u.PYTHON,"Python"),(0,l.Z)(o,u.R,"R"),(0,l.Z)(o,u.SQL,"SQL"),(0,l.Z)(o,u.YAML,"YAML"),o);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(d||(d={}));var p,m=[d.CALLBACK,d.CONDITIONAL,d.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(p||(p={}));var h,A,g=[d.CHART,d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],T=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],y=[d.DATA_EXPORTER,d.DATA_LOADER],R=[d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],b=[d.DATA_EXPORTER,d.DATA_LOADER,d.DBT,d.TRANSFORMER],O=[d.CHART,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN],E=[d.CALLBACK,d.CHART,d.EXTENSION,d.SCRATCHPAD,d.MARKDOWN],N=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SENSOR,d.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(h||(h={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(A||(A={}));var S=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],_=(i={},(0,l.Z)(i,d.CALLBACK,"Callback"),(0,l.Z)(i,d.CHART,"Chart"),(0,l.Z)(i,d.CONDITIONAL,"Conditional"),(0,l.Z)(i,d.CUSTOM,"Custom"),(0,l.Z)(i,d.DATA_EXPORTER,"Data exporter"),(0,l.Z)(i,d.DATA_LOADER,"Data loader"),(0,l.Z)(i,d.DBT,"DBT"),(0,l.Z)(i,d.EXTENSION,"Extension"),(0,l.Z)(i,d.GLOBAL_DATA_PRODUCT,"Global data product"),(0,l.Z)(i,d.MARKDOWN,"Markdown"),(0,l.Z)(i,d.SCRATCHPAD,"Scratchpad"),(0,l.Z)(i,d.SENSOR,"Sensor"),(0,l.Z)(i,d.TRANSFORMER,"Transformer"),i),C=[d.DATA_LOADER,d.TRANSFORMER,d.DATA_EXPORTER,d.SENSOR];c={},(0,l.Z)(c,d.DATA_EXPORTER,"DE"),(0,l.Z)(c,d.DATA_LOADER,"DL"),(0,l.Z)(c,d.SCRATCHPAD,"SP"),(0,l.Z)(c,d.SENSOR,"SR"),(0,l.Z)(c,d.MARKDOWN,"MD"),(0,l.Z)(c,d.TRANSFORMER,"TF")},57653:function(n,t,e){e.d(t,{$1:function(){return d},G7:function(){return s},LM:function(){return p},Mj:function(){return m},QK:function(){return l},a_:function(){return h},qL:function(){return c},r0:function(){return f}});var r,o,i,c,a=e(82394),u=e(72473);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(c||(c={}));var l,d,f,s=(r={},(0,a.Z)(r,c.INTEGRATION,"Integration"),(0,a.Z)(r,c.PYTHON,"Standard"),(0,a.Z)(r,c.PYSPARK,"PySpark"),(0,a.Z)(r,c.STREAMING,"Streaming"),r),p="all",m=(c.PYTHON,c.INTEGRATION,c.STREAMING,o={},(0,a.Z)(o,p,u.ie),(0,a.Z)(o,c.INTEGRATION,u.YC),(0,a.Z)(o,c.PYTHON,u.El),(0,a.Z)(o,c.STREAMING,u.dB),o);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry"}(l||(l={})),function(n){n.GROUP="group_by",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(d||(d={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(f||(f={}));var h=(i={},(0,a.Z)(i,c.PYTHON,"python3"),(0,a.Z)(i,c.PYSPARK,"pysparkkernel"),i)},85854:function(n,t,e){var r,o,i,c,a,u,l,d,f=e(82394),s=e(26304),p=e(26653),m=e(38626),h=e(33591),A=e(44897),g=e(95363),T=e(61896),y=e(30160),R=e(70515),b=e(38276),O=e(28598),E=["children","condensed","inline","level","marketing","spacingBelow"];function N(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function S(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?N(Object(e),!0).forEach((function(t){(0,f.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var _=(0,m.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],y.IH,(function(n){return n.color&&"\n    color: ".concat(n.color,"\n  ")}),(function(n){return n.yellow&&"\n    color: ".concat((n.theme.accent||A.Z.accent).yellow,";\n  ")}),(function(n){return n.center&&"\n    text-align: center;\n  "}),(function(n){return!n.monospace&&0===Number(n.weightStyle)&&"\n    font-family: ".concat(g.iI,";\n  ")}),(function(n){return!n.monospace&&1===Number(n.weightStyle)&&"\n    font-family: ".concat(g.LX,";\n  ")}),(function(n){return!n.monospace&&2===Number(n.weightStyle)&&"\n    font-family: ".concat(g.LX,";\n  ")}),(function(n){return!n.monospace&&3===Number(n.weightStyle)&&"\n    font-family: ".concat(g.ry,";\n  ")}),(function(n){return!n.monospace&&4===Number(n.weightStyle)&&"\n    font-family: ".concat(g.YC,";\n  ")}),(function(n){return!n.monospace&&5===Number(n.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(n){return!n.monospace&&(6===Number(n.weightStyle)||n.bold)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(n){return!n.monospace&&7===Number(n.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(n){return!n.monospace&&8===Number(n.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(n){return n.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),C=m.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(n){return"\n    color: ".concat((n.theme.content||A.Z.content).active,";\n  ")})),D=m.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],_,h.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),T.aQ),h.media.lg(o||(o=(0,p.Z)(["\n    ","\n  "])),T.aQ),h.media.xl(i||(i=(0,p.Z)(["\n    ","\n  "])),T.aQ)),v=m.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],_,T.MJ),w=m.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],_,h.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI),h.media.sm(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI),h.media.md(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI),h.media.lg(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI),h.media.xl(d||(d=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI)),L=m.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],_,T.BL),Z=m.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],_),x=m.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],_),I=m.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],_),P=m.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],_,(function(n){return 1===n.level&&"\n    ".concat(T.MJ,"\n  ")}),(function(n){return 2===n.level&&"\n    ".concat(T.BL,"\n  ")}),(function(n){return 3===n.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(n){return 4===n.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),M=function(n){var t,e=n.children,r=n.condensed,o=n.inline,i=n.level,c=n.marketing,a=n.spacingBelow,u=(0,s.Z)(n,E);o?t=P:0===Number(i)?t=D:1===Number(i)?t=c?w:v:2===Number(i)?t=L:3===Number(i)?t=Z:4===Number(i)?t=x:5===Number(i)&&(t=I);var l=(0,O.jsxs)(t,S(S({},u),{},{level:i,children:[a&&(0,O.jsx)(b.Z,{mb:r?2:3,children:e}),!a&&e]}));return o?l:(0,O.jsx)(C,{children:l})};M.defaultProps={level:3,weightStyle:6},t.Z=M},81728:function(n,t,e){e.d(t,{RA:function(){return s},kC:function(){return p},vg:function(){return R},kE:function(){return _},Mp:function(){return m},Pb:function(){return d},HW:function(){return O},wX:function(){return h},x6:function(){return A},_6:function(){return g},zf:function(){return b},Y6:function(){return N},Lo:function(){return S},wE:function(){return C},J3:function(){return T},We:function(){return f},QV:function(){return E},C5:function(){return y}});var r=e(75582),o=e(17717),i=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],c=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],a=(e(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),u=["0","1","2","3","4","5","6","7","8","9"],l=e(86735);function d(n){if(!n)return!1;try{JSON.parse(n)}catch(t){return!1}return!0}function f(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(t)}function s(n){return n.split(" ").join("_")}function p(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function m(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function h(n){return n.charAt(0).toLowerCase()+n.slice(1)}function A(n){if(null===n||"undefined"===typeof n)return"";var t=n.toString().split("."),e=(0,r.Z)(t,2),o=e[0],i=e[1],c=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return i?"".concat(c,".").concat(i):c}function g(n,t){var e,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=t,i=void 0!==o&&null!==o;if(i||(o=2),1===o)e=n;else{var c=n.length,a=n[c-1];e="y"===a&&"day"!==n?"".concat(n.slice(0,c-1),"ies"):"".concat(n,"s"===a?"es":"s")}if(i){var u=r?A(o):o;return"".concat(u," ").concat(e)}return e}function T(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function y(n){var t=n.length;return"ies"===n.slice(t-3,t)?"".concat(n.slice(0,t-3),"y"):"es"===n.slice(t-2,t)&&"ces"!==n.slice(t-3,t)?n.slice(0,t-2):n.slice(0,t-1)}function R(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return p(T(n.toLowerCase()))}function b(n){var t,e=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return e.forEach((function(o,i){if(!t){var c=(0,r.Z)(o,2),a=c[0],u=c[1],l=e.slice(0,i).reduce((function(n,t){return n*Number(t[1])}),1);n<Number(u)*l&&(t=g(a,Math.round(n/l)))}})),t}function O(n){return"undefined"!==typeof n&&null!==n&&!isNaN(n)}function E(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=Math.pow(10,t);return Math.round((n||0)*e)/e}function N(){return"".concat((0,l.mp)(i)," ").concat((0,l.mp)(a))}function S(){return"".concat((0,l.mp)(c)).concat((0,l.mp)(u))}function _(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function C(n){var t,e=n.split(o.sep),r=e[e.length-1].split(".");return t=1===r.length?r[0]:r.slice(0,-1).join("."),e.slice(0,e.length-1).concat(t).join(o.sep)}}}]);