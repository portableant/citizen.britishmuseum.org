/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-touchevents-shiv !*/
!function(e,t,n){function a(e,t){return typeof e===t}function o(){var e,t,n,o,r,i,s;for(var c in f)if(f.hasOwnProperty(c)){if(e=[],t=f[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=a(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)i=e[r],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),l.push((o?"":"no-")+s.join("-"))}}function r(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(m&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?u.className.baseVal=t:u.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):m?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=i(m?"svg":"body"),e.fake=!0),e}function c(e,n,a,o){var r,c,l,f,d="modernizr",m=i("div"),h=s();if(parseInt(a,10))for(;a--;)l=i("div"),l.id=o?o[a]:d+(a+1),m.appendChild(l);return r=i("style"),r.type="text/css",r.id="s"+d,(h.fake?h:m).appendChild(r),h.appendChild(m),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),m.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",f=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),c=n(m,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=f,u.offsetHeight):m.parentNode.removeChild(m),!!c}var l=[],f=[],d={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){f.push({name:e,fn:t,options:n})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=t.documentElement,m="svg"===u.nodeName.toLowerCase();m||!function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t)}function r(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function i(e,n,a){if(n||(n=t),d)return n.createElement(e);a||(a=r(n));var o;return o=a.cache[e]?a.cache[e].cloneNode():p.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!o.canHaveChildren||h.test(e)||o.tagUrn?o:a.frag.appendChild(o)}function s(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),i=0,s=a(),c=s.length;c>i;i++)o.createElement(s[i]);return o}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function l(e){e||(e=t);var a=r(e);return!E.shivCSS||f||a.hasCSS||(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||c(e,a),e}var f,d,u="3.7.3",m=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,d=!0}}();var E={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:m.shivCSS!==!1,supportsUnknownElements:d,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:o};e.html5=E,l(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof e?e:this,t);var h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];d._prefixes=h;var p=d.testStyles=c;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var a=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");p(a,function(e){n=9===e.offsetTop})}return n}),o(),r(l),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);