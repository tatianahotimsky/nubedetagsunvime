(function(e){function t(t){for(var r,a,l=t[0],i=t[1],s=t[2],F=0,d=[];F<l.length;F++)a=l[F],c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function l(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3131ce48":"64c145da","chunk-23193503":"734688c9","chunk-f1933e00":"fb2d87c0","chunk-4fb9f0e1":"4723fe19"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-23193503":1,"chunk-f1933e00":1,"chunk-4fb9f0e1":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3131ce48":"31d6cfe0","chunk-23193503":"5260038f","chunk-f1933e00":"8cfa49c3","chunk-4fb9f0e1":"ed0582e2"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var F=document.getElementsByTagName("style");for(o=0;o<F.length;o++){l=F[o],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,n(c)},d.href=a;var u=document.getElementsByTagName("head")[0];u.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=o);var s,F=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=l(e),s=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}c[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,F.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],F=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=F;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},1263:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[n("router-view")],1)],1)},c=[],o=(n("034f"),n("2877")),l={},i=Object(o["a"])(l,a,c,!1,null,null,null);i.options.__file="App.vue";var s=i.exports,F=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pageContainer",attrs:{id:"HomeContainer"}},[n("video-background"),n("div",{attrs:{id:"HomeContent"}},[n("section",{staticClass:"welcomeContainer"},[n("article",{attrs:{id:"brand"}},[n("logo-curso"),e._m(0)],1),n("article",{staticClass:"welcome"},[n("h1",{staticClass:"md-display-2"},[e._v("¡Hola!")]),e._m(1),n("md-button",{directives:[{name:"show",rawName:"v-show",value:!e.readMore,expression:"!readMore"}],staticClass:"welcomeBtn no-margin-top",on:{click:function(t){e.readMore=!e.readMore}}},[e._v("Leer más")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.readMore,expression:"readMore"}],staticClass:"md-body-2"},[e._v("Reconocernos en ese entramado de saberes es una oportunidad única de encontrarnos en las diferencias y concederles el valor académico que viabiliza la innovación.")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.readMore,expression:"readMore"}],staticClass:"md-body-2"},[e._v("Para formar a este nuevo profesional, "),n("b",[e._v("nos proponemos revisar nuestra propia formación, pensando en los dos ejes")]),e._v(" de trabajo "),n("b",[e._v("que articulan las competencias de nuestros egresados")]),e._v(": "),n("i",[e._v("el diseño")]),e._v(" y "),n("i",[e._v("la comunicación.")])]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.readMore,expression:"readMore"}],staticClass:"md-body-2"},[e._v("En este marco, la propuesta reconoce al diseño como una praxis proyectual mediada por dimensiones culturales, económicas y políticas; las cuales impactan en los factores estéticos, simbólicos y funcionales propios de la función de diseño.")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.readMore,expression:"readMore"}],staticClass:"md-body-2"},[n("b",[e._v("Cada una de las asignaturas")]),e._v(" que se dispone en nuestro plan de estudio, "),n("b",[e._v("colabora para consolidar un profesional que se instituya como un operador cultural")]),e._v(", cuyo fin último es el diseño de estrategias conversacionales que permitan la puesta en dialogo de los diversos actores sociales involucrados en las problemáticas contemporáneas y de raigambre histórica.")]),n("br"),n("md-button",{staticClass:"welcomeBtn addWordBtn",attrs:{to:"/addTag"}},[n("i",{staticClass:"mdi mdi-plus"}),e._v(" A palabra tendida")]),n("md-button",{staticClass:"welcomeBtn",attrs:{to:"/cloud"}},[n("i",{staticClass:"mdi mdi-cloud"}),e._v(" Nube Colectiva")]),n("md-button",{staticClass:"welcomeBtn",attrs:{to:"/mindmap"}},[n("i",{staticClass:"mdi mdi-google-circles-extended"}),e._v(" Entramado de Saberes")]),n("br"),n("md-button",{staticClass:"welcomeBtn",attrs:{href:e.driveURL}},[n("i",{staticClass:"mdi mdi-google-drive"}),e._v(" Archivos del curso")])],1),n("footer",[n("article",[n("logo-unvime"),e._m(2)],1),e._m(3)])])])],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Diseño y Comunicación")]),n("h2",[e._v("Innovación en dispositivos de conversación")]),n("p",{staticClass:"line1"},[e._v("Innovación")]),n("p",{staticClass:"line2"},[e._v("en dispositivos")]),n("p",{staticClass:"line2"},[e._v("de conversación")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"md-body-2"},[e._v("Este espacio de formación se propone porque entendemos que es necesario poder "),n("b",[e._v("consolidar espacios de construcción colectiva entre los docentes")]),e._v(", a los fines de "),n("b",[e._v("trabajar transversalmente")]),e._v(" algunos de los lineamientos que dispone el Plan de Estudios. De allí emerge una definición de un profesional, inserto en un ámbito de trabajo –tanto público, privado, tercer sector o hibrido- apropiándose de una metodología proyectual orientada por la estrategia, para el diseño y puesta en uso de dispositivos de comunicación que aporten a la transformación social desde un enfoque sustentable.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Licenciatura"),n("br"),e._v(" en Diseño de "),n("br"),e._v("Comunicación")]),n("h2",[e._v("Escuela de Gestión"),n("br"),e._v("de Empresas y Economía")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{id:"legalnotice"}},[n("p",{staticClass:"md-caption"},[e._v("Responsable: "),n("b",[e._v("Mg. Javier Spagnolo")])]),n("p",{staticClass:"md-caption"},[e._v("Co-Responsables: "),n("b",[e._v("Mg. Marta Balboa")]),e._v(", "),n("b",[e._v("Lic. Esp. Evelyn Gerson")]),e._v(", "),n("b",[e._v("DCV Carlos Carranza")])]),n("p",{staticClass:"md-caption"},[e._v("Docente Invitada Especial: "),n("b",[e._v("Dra. Sandra Massoni")])]),n("p",{staticClass:"md-caption"},[e._v("Coordinadora: "),n("b",[e._v("Dra. Roxana Lobos")])]),n("p",{staticClass:"md-caption special"},[e._v("Diseño y Desarrollo de WebApp: "),n("b",[e._v("Lic. Tatiana Hotimsky")]),e._v(" y "),n("b",[e._v("Lic. Walter Molina")])]),n("p",{staticClass:"md-caption special"},[n("b",[e._v("¿Te gusta esta app?")]),e._v(" Podes ver su código, aprender a programar y aportar mejoras en "),n("a",{attrs:{href:"https://github.com/waltermolina/nubedetagsunvime"}},[n("i",{staticClass:"mdi mdi-github-circle"}),e._v(" GitHub")])])])}],p=n("e174"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logoCurso"},[n("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500","enable-background":"new 0 0 500 500","xml:space":"preserve"}},[n("g",[n("path",{attrs:{opacity:"0.5",fill:"#FFFFFF",d:"M76.77,294.45v-88.9c0-16.798,3.937-32.716,10.915-46.898\r\n        C12.573,238.32-13.563,337.158,30.924,401.493c25.827,37.347,71.92,57.914,129.789,57.914c7.428,0,14.938-0.351,22.503-1.008\r\n        v-57.001C124.623,401.116,76.77,353.105,76.77,294.45z"}}),n("path",{attrs:{opacity:"0.5",fill:"#FFFFFF",d:"M256.467,98.589l56.615-56.615c-53.055,5.34-108.751,26.537-159.75,61.068\r\n        c9.648-2.881,19.846-4.453,30.398-4.453H256.467z"}}),n("path",{attrs:{opacity:"0.7",fill:"#FFFFFF",d:"M423.23,205.55v88.9c0,16.797-3.937,32.714-10.913,46.896\r\n        c75.11-79.669,101.246-178.505,56.759-242.842C443.248,61.157,397.153,40.59,339.286,40.59c-7.428,0-14.937,0.351-22.502,1.008\r\n        v57.004C375.377,98.884,423.23,146.894,423.23,205.55z"}}),n("path",{attrs:{opacity:"0.6",fill:"#FFFFFF",d:"M243.533,401.41l-56.612,56.612c53.054-5.34,108.748-26.534,159.747-61.065\r\n        c-9.648,2.881-19.846,4.453-30.398,4.453H243.533z"}}),n("path",{attrs:{opacity:"0.6",fill:"#FFFFFF",d:"M1.295,325.694C2.465,249.628,55.702,160.709,145.374,98.7\r\n        c53.769-37.183,112.988-59.751,169.275-64.941l-0.004,0.023c7.561-0.639,17.21-1.225,24.641-1.225\r\n        c28.679,0,54.59,4.942,76.88,14.286c-26.14-15.866-56.749-25.024-89.395-25.024h-9.987H173.229C77.953,21.819,0,99.772,0,195.048v0\r\n        v109.903v0C0,311.973,0.473,318.885,1.295,325.694z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M83.817,453.147c26.144,15.872,56.759,25.034,89.412,25.034h9.987H326.77\r\n        c95.276,0,173.23-77.953,173.23-173.23v0V195.048v0c0-7.022-0.473-13.935-1.295-20.744\r\n        c-1.169,76.067-54.405,164.987-144.079,226.996c-54.331,37.571-114.235,60.247-171.046,65.123\r\n        c-7.274,0.575-15.951,1.016-22.867,1.016C132.027,467.439,106.11,462.495,83.817,453.147z"}})])])])},v=[],m={name:"logo-curso",props:{size:String,computed:{estilo:function(){return{width:+this.size,height:+this.size}}}}},h=m,g=(n("cadc"),Object(o["a"])(h,f,v,!1,null,"362b94c6",null));g.options.__file="LogoCurso.vue";var b=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logoUnvime"},[n("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500","enable-background":"new 0 0 500 500","xml:space":"preserve"}},[n("g",[n("path",{attrs:{fill:"#FFFFFF",d:"M250,500C112.149,500,0,387.851,0,250S112.149,0,250,0s250,112.149,250,250S387.851,500,250,500z\r\n     M250,10.143c-132.258,0-239.857,107.6-239.857,239.857S117.742,489.857,250,489.857S489.857,382.258,489.857,250\r\n    S382.258,10.143,250,10.143z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M433.778,280.382c1.216-8.577,1.883-17.336,1.883-26.254c0-9.753-0.762-19.334-2.215-28.683H299.874\r\n    L433.778,280.382z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M232.24,225.446h-12.335L98.971,275.06c22.601-2.115,51.215-3.023,88.534,10.089L232.24,225.446z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M66.552,225.446c-1.452,9.349-2.21,18.925-2.21,28.682c0,8.941,0.667,17.718,1.888,26.318l134.068-55\r\n    H66.552z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M399.433,274.334l-119.164-48.887h-12.617l44.58,60.973C343.666,270.463,373.165,269.991,399.433,274.334"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M268.613,237.3l5.578,8.505h-48.833l6.286-8.505H268.613z M261.402,225.586h-22.851l-3.555,5.279h29.735\r\n    L261.402,225.586z M202.921,279.556l-5.741,9.249c4.012,1.688,8.069,3.467,12.217,5.451c0,0,41.19,28.138,93.754-3.122\r\n    l-7.021-11.577H202.921z M209.665,268.7h79.884l-10.425-14.754h-58.822L209.665,268.7z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M303.551,328.81c-0.445,0.304-45.138,29.908-102.154-0.349c-49.754-26.404-97.125-21.553-126.838-13.588\r\n    c1.389,4.012,2.873,7.983,4.525,11.868c27.77-7.098,71.488-11.21,116.5,12.676c21.466,11.391,41.303,15.204,58.259,15.204\r\n    c33.239,0,55.377-14.668,56.875-15.689c2.079-1.529,47.317-33.806,109.456-10.547c1.652-3.776,3.19-7.611,4.593-11.514\r\n    C356.087,290.964,305.688,327.226,303.551,328.81"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M195.583,312.29c21.466,11.391,41.304,15.203,58.259,15.203c33.239,0,55.382-14.668,56.884-15.694\r\n    c0.527-0.39,51.057-36.72,117.884-7.021c1.144-4.034,2.183-8.11,3.054-12.253c-72.187-31.142-125.908,7.525-128.114,9.163\r\n    c-0.445,0.3-45.138,29.908-102.154-0.354c-53.739-28.519-104.686-20.586-133.614-11.636c0.803,4.139,1.738,8.233,2.809,12.272\r\n    C97.29,293.687,145.556,285.74,195.583,312.29"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M285.343,216.809c0,0-24.586-4.062-35.743-13.694c-11.213,9.632-34.59,13.694-34.59,13.694H285.343z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M259.996,67.127c-3.354-0.182-6.726-0.286-10.121-0.286c-4.266,0-8.482,0.195-12.671,0.481l11.387,93.454\r\n    L259.996,67.127z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M145.664,99.275c4.812-3.437,15.395-10.46,24.086-14.49c0,0,41.913,63.989,50.506,81.004\r\n    C208.569,153.586,184.335,111.306,145.664,99.275z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M180.993,80.541c6.984-2.873,10.35-4.333,17.729-6.349l30.299,88.503L180.993,80.541z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M206.534,72.249c7.543-1.711,15.244-2.995,23.101-3.758l11.586,93.826L206.534,72.249z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M115.243,125.571c26.124,12.375,38.155-8.078,94.357,42.624c0,0-30.593-49.499-79.061-57.061\r\n    C125.211,114.571,115.243,125.571,115.243,125.571z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M89.977,157.883c39.187-0.687,65.626-18.548,110.685,15.812c-37.812-42.624-68.749-25.437-97.623-32.999\r\n    C97.883,145.508,89.977,157.883,89.977,157.883z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M188.975,177.82c-43.311-33.687-72.186,0.687-106.546-6.444c-2.935,5.069-3.279,6.101-6.792,13.48\r\n    C118.347,184.855,140.347,161.704,188.975,177.82z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M352.35,99.275c-4.812-3.437-15.395-10.46-24.086-14.49c0,0-41.913,63.989-50.507,81.004\r\n    C289.445,153.586,313.679,111.306,352.35,99.275z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M317.021,80.541c-6.984-2.873-10.35-4.333-17.729-6.349l-30.299,88.503L317.021,80.541z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M291.48,72.249c-7.543-1.711-15.244-2.995-23.1-3.758l-11.586,93.826L291.48,72.249z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M382.771,125.571c-26.125,12.375-38.156-8.078-94.357,42.624c0,0,30.593-49.499,79.061-57.061\r\n    C372.803,114.571,382.771,125.571,382.771,125.571z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M408.037,157.883c-39.187-0.687-65.626-18.548-110.685,15.812c37.812-42.624,68.749-25.437,97.623-32.999\r\n    C400.13,145.508,408.037,157.883,408.037,157.883z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M309.039,177.82c43.311-33.687,72.186,0.687,106.546-6.444c2.936,5.069,3.279,6.101,6.792,13.48\r\n    C379.667,184.855,357.667,161.704,309.039,177.82z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M27.173,257.011l0.082-4.439l13.079,0.25c2.365,0.045,3.939-0.327,4.72-1.112\r\n    c0.785-0.79,1.189-1.82,1.216-3.1c0.023-1.257-0.34-2.264-1.084-3.023c-0.744-0.758-2.201-1.162-4.375-1.203l-13.393-0.254\r\n    l0.073-3.858l13.093,0.245c2.469,0.05,4.234,0.39,5.292,1.03c1.057,0.64,1.884,1.552,2.478,2.737\r\n    c0.594,1.184,0.871,2.673,0.835,4.47c-0.032,1.765-0.345,3.277-0.944,4.534c-0.594,1.257-1.462,2.246-2.605,2.963\r\n    c-1.139,0.717-2.946,1.053-5.414,1.008L27.173,257.011z"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"50.832,221.713 29.924,217.529 30.69,213.694 46.911,206.882 32.628,204.022 33.323,200.532\r\n    54.236,204.717 53.455,208.62 37.248,215.364 51.531,218.223   "}}),n("rect",{attrs:{x:"39.992",y:"178.282",transform:"matrix(0.9398 0.3416 -0.3416 0.9398 64.7047 -6.4456)",fill:"#FFFFFF",width:"21.324",height:"4.442"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"71.655,159.307 49.14,156.13 51.391,151.959 68.814,154.405 57.11,141.353 58.621,138.553\r\n    73.761,155.404   "}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"86.846,134.712 69.982,121.66 78.341,110.858 80.665,112.656 75.024,119.949 79.717,123.584\r\n    84.382,117.557 86.706,119.354 82.04,125.381 87.169,129.348 93.227,121.524 95.619,123.375   "}}),n("path",{attrs:{fill:"#FFFFFF",d:"M107.368,110.581L92.845,94.969l5.845-5.437c1.194-1.112,2.242-1.811,3.15-2.092\r\n    c0.903-0.286,1.82-0.291,2.746-0.018c0.93,0.272,1.752,0.79,2.464,1.556c0.849,0.912,1.389,2.024,1.616,3.327\r\n    c0.231,1.302,0.059,2.614-0.504,3.939l11.891,2.537l-3.957,3.681l-9.817-2.769l-1.788,1.661l5.936,6.381L107.368,110.581z\r\n     M102.498,99.213l0.749-0.694c1.339-1.248,1.997-2.401,1.965-3.463c-0.032-1.057-0.39-1.961-1.08-2.696\r\n    c-0.595-0.64-1.275-0.958-2.042-0.944c-0.762,0.009-1.784,0.608-3.059,1.797l-1.134,1.053L102.498,99.213z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M132.486,89.009l-2.033-3.045c1.775-0.345,3.041-0.685,3.799-1.03c0.762-0.34,1.43-0.708,2.006-1.089\r\n    c1.035-0.69,1.652-1.439,1.852-2.242c0.204-0.808,0.091-1.534-0.345-2.178c-0.331-0.499-0.772-0.849-1.325-1.057\r\n    c-0.545-0.204-1.584-0.245-3.113-0.127l-1.639,0.141c-2.346,0.186-4.089,0.082-5.233-0.322c-1.148-0.399-2.079-1.13-2.791-2.196\r\n    c-0.89-1.334-1.144-2.818-0.758-4.452c0.386-1.629,1.539-3.086,3.449-4.361c1.43-0.953,3.177-1.824,5.242-2.609l1.893,2.841\r\n    c-2.287,0.545-3.967,1.176-5.047,1.893c-0.894,0.599-1.443,1.244-1.652,1.942c-0.209,0.699-0.132,1.321,0.231,1.865\r\n    c0.277,0.418,0.681,0.708,1.207,0.88c0.517,0.173,1.539,0.2,3.068,0.082l1.752-0.145c2.691-0.213,4.575-0.095,5.655,0.349\r\n    c1.076,0.463,1.951,1.198,2.628,2.21c0.971,1.457,1.244,3.068,0.821,4.838c-0.417,1.77-1.838,3.458-4.262,5.074\r\n    C136.457,87.226,134.656,88.138,132.486,89.009"}}),n("rect",{attrs:{x:"146.815",y:"59.883",transform:"matrix(0.4367 0.8996 -0.8996 0.4367 144.57 -106.6858)",fill:"#FFFFFF",width:"21.325",height:"4.435"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M181.926,63.143l-6.286-20.377l8.768-2.705c2.351-0.726,4.298-0.912,5.836-0.563\r\n    c1.539,0.349,2.923,1.134,4.153,2.36c1.225,1.225,2.16,2.877,2.8,4.951c0.626,2.029,0.817,3.953,0.567,5.777\r\n    c-0.245,1.825-0.93,3.422-2.061,4.783c-1.125,1.362-2.923,2.424-5.382,3.181L181.926,63.143z M185.275,58.945l3.168-0.976\r\n    c1.652-0.513,2.836-1.157,3.554-1.942c0.717-0.785,1.144-1.87,1.275-3.25c0.132-1.384-0.036-2.827-0.499-4.334\r\n    c-0.445-1.439-1.089-2.641-1.924-3.599c-0.84-0.958-1.788-1.588-2.841-1.888c-1.053-0.304-2.618-0.136-4.706,0.508l-2.56,0.79\r\n    L185.275,58.945z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M215.667,54.201l5.745-22.152l4.416-0.522l10.742,20.205l-4.529,0.536l-2.868-5.392l-8.764,1.035\r\n    l-1.534,5.909L215.667,54.201z M221.172,44.96l6.571-0.776l-4.284-8.056L221.172,44.96z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M253.434,51.392l1.298-21.285l9.163,0.558c2.455,0.15,4.343,0.663,5.659,1.53\r\n    c1.321,0.867,2.337,2.092,3.054,3.672c0.717,1.579,1.008,3.454,0.876,5.618c-0.131,2.119-0.631,3.989-1.507,5.61\r\n    c-0.871,1.625-2.074,2.873-3.612,3.749c-1.534,0.88-3.585,1.239-6.154,1.085L253.434,51.392z M258.05,48.642l3.308,0.2\r\n    c1.725,0.109,3.064-0.082,4.012-0.563c0.948-0.481,1.725-1.343,2.337-2.592c0.608-1.248,0.962-2.659,1.057-4.23\r\n    c0.091-1.507-0.086-2.855-0.531-4.044c-0.445-1.193-1.107-2.119-1.988-2.773c-0.88-0.654-2.41-1.048-4.584-1.18l-2.678-0.163\r\n    L258.05,48.642z"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"313.259,61.504 320.819,41.562 324.478,42.951 328.535,60.065 333.7,46.445 337.026,47.707\r\n    329.465,67.649 325.744,66.237 321.75,49.146 316.585,62.765   "}}),n("path",{attrs:{fill:"#FFFFFF",d:"M344.723,74.871l18.112-13.983l3.812,2.296l-3.894,22.547l-3.908-2.351l1.044-6.018l-7.565-4.557\r\n    l-4.838,3.731L344.723,74.871z M354.734,70.945l5.668,3.413l1.556-8.986L354.734,70.945z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M389.792,106.533c-0.971-0.304-1.766-0.626-2.387-0.967c-0.622-0.34-1.298-0.758-2.024-1.262\r\n    c-0.731-0.504-1.416-1.035-2.06-1.597c-2.809-2.446-4.216-5.065-4.216-7.856c-0.005-2.791,1.067-5.414,3.204-7.869\r\n    c2.151-2.473,4.606-3.894,7.361-4.271c2.755-0.377,5.609,0.722,8.564,3.295c1.747,1.52,3.304,3.24,4.674,5.16l-2.278,2.623\r\n    c-0.581-1.016-1.076-1.824-1.488-2.419c-0.413-0.594-0.826-1.13-1.248-1.607c-0.417-0.481-0.858-0.926-1.33-1.334\r\n    c-1.847-1.611-3.703-2.183-5.573-1.72c-1.865,0.463-3.563,1.57-5.092,3.322c-1.602,1.838-2.424,3.74-2.474,5.7\r\n    c-0.045,1.961,0.867,3.758,2.737,5.383c1.557,1.357,3.485,2.342,5.782,2.95L389.792,106.533z"}}),n("rect",{attrs:{x:"400.346",y:"112.738",transform:"matrix(-0.7591 0.651 -0.651 -0.7591 797.8362 -65.3417)",fill:"#FFFFFF",width:"21.326",height:"4.435"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M420.793,147.202c-1.171-1.888-1.797-3.771-1.883-5.65c-0.086-1.879,0.377-3.635,1.389-5.269\r\n    c1.017-1.638,2.451-3.032,4.302-4.18c1.843-1.144,3.726-1.811,5.646-1.997c1.92-0.186,3.708,0.182,5.355,1.103\r\n    c1.652,0.921,3.059,2.315,4.216,4.184c1.157,1.861,1.779,3.735,1.87,5.623c0.091,1.888-0.372,3.653-1.389,5.287\r\n    c-1.021,1.643-2.451,3.032-4.293,4.175c-1.856,1.153-3.74,1.815-5.655,2.001c-1.915,0.182-3.694-0.182-5.337-1.089\r\n    C423.371,150.483,421.964,149.086,420.793,147.202 M423.28,145.659c1.085,1.748,2.601,2.601,4.557,2.573\r\n    c1.956-0.032,3.853-0.622,5.691-1.761c1.843-1.144,3.209-2.587,4.098-4.32c0.88-1.738,0.785-3.476-0.291-5.215\r\n    c-1.085-1.747-2.605-2.61-4.552-2.587c-1.947,0.023-3.849,0.608-5.691,1.752c-1.838,1.144-3.209,2.582-4.103,4.32\r\n    C422.095,142.16,422.191,143.903,423.28,145.659"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"434.732,172.163 454.619,164.461 456.03,168.11 446.009,182.57 459.588,177.305 460.877,180.627\r\n    440.99,188.329 439.551,184.616 449.599,170.221 436.016,175.481   "}}),n("path",{attrs:{fill:"#FFFFFF",d:"M445.812,204.518l22.501,4.148l0.839,4.371l-19.383,12.158l-0.858-4.479l5.174-3.245l-1.661-8.673\r\n    l-6.009-1.103L445.812,204.518z M455.419,209.351l1.243,6.499l7.729-4.847L455.419,209.351z"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"451.183,242.08 472.5,241.568 472.609,246.002 454.315,246.446 454.546,255.936 451.519,256.008\r\n    "}}),n("rect",{attrs:{x:"39.11",y:"283.371",transform:"matrix(-0.9817 0.1903 -0.1903 -0.9817 136.4475 558.2637)",fill:"#FFFFFF",width:"4.627",height:"4.623"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M35.912,315.058l20.132-7.016l3.023,8.664c0.808,2.324,1.067,4.262,0.776,5.813\r\n    c-0.295,1.552-1.03,2.959-2.21,4.23c-1.18,1.275-2.795,2.265-4.842,2.982c-2.006,0.699-3.926,0.958-5.759,0.776\r\n    c-1.834-0.182-3.449-0.808-4.851-1.883c-1.403-1.08-2.528-2.836-3.377-5.265L35.912,315.058z M40.228,318.253l1.089,3.132\r\n    c0.572,1.634,1.261,2.791,2.069,3.481c0.812,0.69,1.906,1.076,3.295,1.157c1.384,0.082,2.823-0.141,4.311-0.658\r\n    c1.425-0.495,2.596-1.18,3.526-2.051c0.926-0.871,1.52-1.842,1.788-2.905c0.263-1.062,0.036-2.628-0.681-4.684l-0.88-2.532\r\n    L40.228,318.253z"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"51.14,352.338 69.816,342.04 76.41,354.004 73.837,355.424 69.384,347.35 64.184,350.214\r\n    67.864,356.89 65.291,358.311 61.61,351.634 55.933,354.766 60.712,363.434 58.061,364.896   "}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"89.413,405.482 99.057,384.891 102.384,388.263 94.932,404.207 110.843,396.841 113.081,399.11\r\n    92.527,408.641   "}}),n("rect",{attrs:{x:"110.486",y:"417.216",transform:"matrix(-0.6059 0.7955 -0.7955 -0.6059 528.2258 577.1976)",fill:"#FFFFFF",width:"21.325",height:"4.437"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"134.483,441.477 145.03,422.942 148.887,425.139 139.838,441.041 148.089,445.738 146.591,448.371\r\n      "}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"164.665,456.731 172.28,436.812 176.428,438.396 169.893,455.492 178.761,458.883 177.676,461.71\r\n    "}}),n("path",{attrs:{fill:"#FFFFFF",d:"M194.636,466.862l12.408-19.229l4.361,0.894l3.853,22.556l-4.466-0.917l-1.03-6.018l-8.65-1.77\r\n    l-3.313,5.133L194.636,466.862z M202.765,459.819l6.485,1.325l-1.538-8.991L202.765,459.819z"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"260.855,473.511 258.826,452.285 264.663,451.727 271.221,466.163 275.065,450.733\r\n    280.198,450.243 282.226,471.469 278.151,471.859 276.621,455.834 272.827,470.933 269.278,471.274 262.775,456.941\r\n    264.327,473.18   "}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"304.144,467 298.421,446.455 311.582,442.793 312.367,445.624 303.486,448.098 305.079,453.816\r\n    312.422,451.774 313.211,454.601 305.868,456.648 307.606,462.893 317.142,460.238 317.954,463.152   "}}),n("path",{attrs:{fill:"#FFFFFF",d:"M336.863,456.147l-8.95-19.356l7.248-3.349c1.479-0.685,2.696-1.021,3.644-1.012\r\n    c0.949,0.014,1.82,0.29,2.619,0.84c0.794,0.549,1.416,1.293,1.856,2.246c0.522,1.134,0.69,2.355,0.499,3.663\r\n    c-0.186,1.311-0.758,2.505-1.706,3.59l10.515,6.109l-4.902,2.269l-8.473-5.687l-2.215,1.021l3.658,7.915L336.863,456.147z\r\n     M335.769,443.826l0.926-0.427c1.665-0.771,2.646-1.661,2.945-2.678c0.3-1.016,0.236-1.983-0.186-2.9\r\n    c-0.368-0.794-0.917-1.302-1.647-1.529c-0.731-0.232-1.888,0.022-3.472,0.753l-1.402,0.649L335.769,443.826z"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M383.532,428.459c-0.536,0.862-1.048,1.557-1.529,2.07c-0.486,0.517-1.062,1.067-1.729,1.647\r\n    c-0.667,0.576-1.357,1.112-2.061,1.593c-3.072,2.11-5.963,2.814-8.664,2.119c-2.7-0.694-4.974-2.387-6.821-5.069\r\n    c-1.852-2.7-2.614-5.437-2.292-8.196c0.327-2.759,2.101-5.251,5.333-7.47c1.906-1.307,3.966-2.387,6.167-3.236l1.965,2.864\r\n    c-1.13,0.309-2.033,0.586-2.714,0.84c-0.676,0.25-1.303,0.517-1.87,0.799c-0.567,0.286-1.107,0.604-1.62,0.958\r\n    c-2.02,1.389-3.041,3.041-3.059,4.965c-0.018,1.924,0.631,3.844,1.942,5.764c1.379,2.01,3.013,3.281,4.901,3.817\r\n    c1.888,0.536,3.853,0.1,5.895-1.302c1.702-1.166,3.136-2.786,4.303-4.856L383.532,428.459z"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"399.883,415.931 385.152,400.51 395.032,391.074 397.061,393.198 390.394,399.57 394.492,403.863\r\n    400.006,398.599 402.035,400.723 396.525,405.987 401,410.676 408.161,403.841 410.249,406.028   "}}),n("path",{attrs:{fill:"#FFFFFF",d:"M423.754,390.902l-17.082-12.766l5.491-7.348c1.475-1.974,2.932-3.268,4.384-3.894\r\n    c1.452-0.626,3.032-0.803,4.747-0.536c1.711,0.263,3.435,1.048,5.178,2.346c1.697,1.271,2.986,2.719,3.862,4.339\r\n    c0.876,1.62,1.261,3.308,1.153,5.078c-0.109,1.765-0.935,3.676-2.473,5.741L423.754,390.902z M423.986,385.538l1.983-2.655\r\n    c1.035-1.384,1.611-2.605,1.729-3.663c0.118-1.057-0.177-2.183-0.885-3.377c-0.708-1.198-1.693-2.265-2.955-3.209\r\n    c-1.207-0.903-2.433-1.493-3.676-1.775c-1.239-0.277-2.374-0.231-3.404,0.145c-1.035,0.372-2.201,1.434-3.503,3.181l-1.607,2.147\r\n    L423.986,385.538z"}}),n("polygon",{attrs:{fill:"#FFFFFF",points:"446.137,357.456 427.167,347.717 433.403,335.563 436.021,336.906 431.81,345.112 437.088,347.821\r\n    440.569,341.041 443.183,342.384 439.702,349.164 445.47,352.123 449.99,343.319 452.686,344.703   "}}),n("path",{attrs:{fill:"#FFFFFF",d:"M459.75,327.174l-3.472-1.157c1.189-1.357,1.974-2.405,2.369-3.145c0.386-0.735,0.69-1.434,0.908-2.087\r\n    c0.391-1.18,0.422-2.151,0.086-2.909c-0.331-0.758-0.871-1.262-1.611-1.507c-0.567-0.191-1.13-0.195-1.697-0.023\r\n    c-0.554,0.177-1.398,0.785-2.532,1.815l-1.207,1.116c-1.734,1.588-3.177,2.573-4.329,2.955c-1.153,0.395-2.333,0.386-3.549-0.014\r\n    c-1.52-0.508-2.632-1.525-3.331-3.05c-0.694-1.525-0.681-3.381,0.045-5.564c0.54-1.625,1.384-3.386,2.528-5.278l3.245,1.08\r\n    c-1.471,1.833-2.415,3.367-2.823,4.597c-0.34,1.016-0.377,1.865-0.114,2.546c0.268,0.676,0.712,1.121,1.33,1.33\r\n    c0.476,0.154,0.971,0.141,1.488-0.05c0.517-0.177,1.343-0.785,2.473-1.815l1.298-1.194c1.992-1.82,3.554-2.882,4.674-3.195\r\n    c1.135-0.295,2.278-0.254,3.436,0.132c1.656,0.554,2.864,1.656,3.617,3.313c0.753,1.656,0.672,3.862-0.245,6.621\r\n    C461.793,323.33,460.926,325.159,459.75,327.174"}}),n("rect",{attrs:{x:"459.202",y:"280.268",transform:"matrix(0.9813 0.1923 -0.1923 0.9813 62.967 -83.4896)",fill:"#FFFFFF",width:"4.625",height:"4.624"}}),n("path",{attrs:{fill:"#FFFFFF",d:"M400.098,336.217c-2.306,2.215-6.662,12.562-12.449,18.045l5.351-26.572\r\n    c-17.772-3.322-20.464,28.483-20.464,28.483l-8.06,11.391l4.153-38.512c-12.717-0.622-15.553,13.107-15.553,13.107l-4.647,27.566\r\n    l-0.685,1.03l-4.887-34.346c-19.724,7.552-10.733,29.241-10.733,29.241l-1.289,18.943c-35.082,21.231-43.6-5.786-30.226-11.128\r\n    c7.293-2.914,8.596-4.135,15.086-8.523c8.85-5.99,6.327-20.972,2.786-18.707c-16.388,10.488-29.794,15.489-36.239,17.963\r\n    c-15.884,6.104-22.016,20.827-25.533,34.097c0,0-0.648,3.096-0.797,7.458c-0.886,10.409-3.681,35.55-7.882,1.931\r\n    c-0.162-5.338-1.251-9.389-1.251-9.389c-3.517-13.27-9.649-27.993-25.533-34.097c-6.444-2.474-19.846-7.475-36.239-17.963\r\n    c-3.54-2.265-6.063,12.716,2.786,18.707c6.49,4.389,7.793,5.61,15.086,8.523c13.374,5.342,4.856,32.359-30.226,11.128\r\n    l-1.289-18.943c0,0,8.991-21.689-10.733-29.241l-4.888,34.346l-0.685-1.03l-4.648-27.566c0,0-2.836-13.729-15.553-13.107\r\n    l4.153,38.512l-8.06-11.391c0,0-2.691-31.805-20.464-28.483l5.351,26.572c-5.786-5.483-10.143-15.83-12.449-18.045\r\n    c-7.107-6.83-18.576-2.387-17.713-1.139c24.377,36.534,43.931,70.656,114.749,94.044l-0.026,0.018c0,0,0.449,0.151,1.292,0.41\r\n    l0.008,0.003c0.002,0,0.004,0.001,0.004,0.001c8.037,2.463,51.873,14.683,93.391,2.093c2.13-0.592,4.331-1.258,6.694-2.094\r\n    c71.879-23.4,91.498-57.719,116.023-94.475C418.674,333.83,407.206,329.386,400.098,336.217z"}})])])])},y=[],M={name:"logo-unvime"},C=M,w=(n("6560"),Object(o["a"])(C,_,y,!1,null,"1c72940a",null));w.options.__file="LogoUnvime.vue";var z=w.exports,x={name:"Home",components:{"video-background":p["a"],"logo-curso":b,"logo-unvime":z},data:function(){return{readMore:!1,driveURL:"https://drive.google.com/drive/folders/1N1gdNSnnqFbbm5v2F4j-q5IsjNDX0KYL"}},methods:{tatto:function(){console.log("by tachuso!")}},mounted:function(){this.tatto()}},L=x,k=(n("a411"),Object(o["a"])(L,d,u,!1,null,"1d8e183a",null));k.options.__file="Home.vue";var E=k.exports;r["default"].use(F["a"]);var j=new F["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E},{path:"/addtag",name:"addTag",component:function(){return Promise.all([n.e("chunk-3131ce48"),n.e("chunk-f1933e00")]).then(n.bind(null,"03b7"))}},{path:"/cloud",name:"cloud",component:function(){return Promise.all([n.e("chunk-3131ce48"),n.e("chunk-23193503")]).then(n.bind(null,"443c"))}},{path:"/mindmap",name:"mindmap",component:function(){return n.e("chunk-4fb9f0e1").then(n.bind(null,"41ab"))}}]}),O=n("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var S=n("43f9"),H=n.n(S),q=(n("51de"),n("e094"),n("ff32")),B=n.n(q);n("4d2c");r["default"].config.productionTip=!1,r["default"].use(H.a),r["default"].use(B.a),new r["default"]({router:j,render:function(e){return e(s)}}).$mount("#app")},6560:function(e,t,n){"use strict";var r=n("65da"),a=n.n(r);a.a},"65da":function(e,t,n){},"6d16":function(e,t,n){e.exports=n.p+"media/animated gradient.42cd407a.mp4"},"79f4":function(e,t,n){"use strict";var r=n("ebbf"),a=n.n(r);a.a},"88ae":function(e,t,n){},a411:function(e,t,n){"use strict";var r=n("1263"),a=n.n(r);a.a},c21b:function(e,t,n){},cadc:function(e,t,n){"use strict";var r=n("88ae"),a=n.n(r);a.a},e174:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"homeVideoContainer"}},[r("div",{attrs:{id:"videoOverlay2"}}),r("div",{attrs:{id:"videoOverlay"}}),r("video",{attrs:{"data-v-1e97ceea":"",poster:"static/fondovideo.jpg",id:"homeVideo",playsinline:"",autoplay:"autoplay",muted:"muted",loop:"loop"},domProps:{muted:!0}},[r("source",{attrs:{"data-v-1e97ceea":"",src:n("6d16"),type:"video/mp4"}})])])},a=[],c={name:"video-background"},o=c,l=(n("79f4"),n("2877")),i=Object(l["a"])(o,r,a,!1,null,"7d426f3f",null);i.options.__file="VideoBackground.vue";t["a"]=i.exports},ebbf:function(e,t,n){}});
//# sourceMappingURL=app.1e86f57b.js.map