(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(e){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n},e.exports.default=e.exports,e.exports.__esModule=!0},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,r,t){var n=t(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},3884:function(e){e.exports=function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3038:function(e,r,t){var n=t(2858),o=t(3884),a=t(379),i=t(521);e.exports=function(e,r){return n(e)||o(e,r)||a(e,r)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,r,t){var n=t(3646),o=t(6860),a=t(379),i=t(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,r,t){var n=t(7228);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7091:function(e){"use strict";var r="%[a-f0-9]{2}",t=new RegExp(r,"gi"),n=new RegExp("("+r+")+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],o(t),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var r=e.match(t),n=1;n<r.length;n++)r=(e=o(r,n).join("")).match(t);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{t[o[0]]=decodeURIComponent(o[0])}catch(r){var i=a(o[0]);i!==o[0]&&(t[o[0]]=i)}o=n.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,r){for(var t={},n=Object.keys(e),o=Array.isArray(r),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==r.indexOf(i):r(i,c,e))&&(t[i]=c)}return t}},2203:function(e,r,t){"use strict";var n=t(9713),o=t(3038),a=t(319);function i(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw a}}}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var u=t(8936),s=t(7091),l=t(4734),f=t(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,r){return r.encode?r.strict?u(e):encodeURIComponent(e):e}function g(e,r){return r.decode?s(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,r){return Number(e)-Number(r)})).map((function(r){return e[r]})):e}function b(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function v(e){var r=(e=b(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function h(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function x(e,r){d((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var t=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return function(r,t,n){var o="string"==typeof t&&t.includes(e.arrayFormatSeparator),a="string"==typeof t&&!o&&g(t,e).includes(e.arrayFormatSeparator);t=a?g(t,e):t;var i=o||a?t.split(e.arrayFormatSeparator).map((function(r){return g(r,e)})):null===t?t:g(t,e);n[r]=i};case"bracket-separator":return function(r,t,n){var o=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),o){var a=null===t?[]:t.split(e.arrayFormatSeparator).map((function(r){return g(r,e)}));void 0!==n[r]?n[r]=[].concat(n[r],a):n[r]=a}else n[r]=t?g(t,e):t};default:return function(e,r,t){void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var a,c=i(e.split("&"));try{for(c.s();!(a=c.n()).done;){var u=a.value;if(""!==u){var s=l(r.decode?u.replace(/\+/g," "):u,"="),f=o(s,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?m:g(m,r),t(g(p,r),m,n)}}}catch(S){c.e(S)}finally{c.f()}for(var b=0,v=Object.keys(n);b<v.length;b++){var x=v[b],w=n[x];if("object"==typeof w&&null!==w)for(var k=0,_=Object.keys(w);k<_.length;k++){var I=_[k];w[I]=h(w[I],r)}else n[x]=h(w,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((function(e,r){var t=n[r];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[r]=y(t):e[r]=t,e}),Object.create(null))}r.extract=v,r.parse=x,r.stringify=function(e,r){if(!e)return"";d((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var t=function(t){return r.skipNull&&null==e[t]||r.skipEmptyString&&""===e[t]},n=function(e){switch(e.arrayFormat){case"index":return function(r){return function(t,n){var o=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[[m(r,e),"[",o,"]"].join("")]:[[m(r,e),"[",m(o,e),"]=",m(n,e)].join("")])}};case"bracket":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[[m(r,e),"[]"].join("")]:[[m(r,e),"[]=",m(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var r="bracket-separator"===e.arrayFormat?"[]=":"=";return function(t){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(t,e),r,m(o,e)].join("")]:[[n,m(o,e)].join(e.arrayFormatSeparator)])}};default:return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[m(r,e)]:[[m(r,e),"=",m(n,e)].join("")])}}}}(r),o={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];t(u)||(o[u]=e[u])}var s=Object.keys(o);return!1!==r.sort&&s.sort(r.sort),s.map((function(t){var o=e[t];return void 0===o?"":null===o?m(t,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?m(t,r)+"[]":o.reduce(n(t),[]).join("&"):m(t,r)+"="+m(o,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var t=l(e,"#"),n=o(t,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:x(v(e),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,r)}:{})},r.stringifyUrl=function(e,t){t=Object.assign(n({encode:!0,strict:!0},p,!0),t);var o=b(e.url).split("?")[0]||"",a=r.extract(e.url),i=r.parse(a,{sort:!1}),c=Object.assign(i,e.query),u=r.stringify(c,t);u&&(u="?".concat(u));var s=function(e){var r="",t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(s="#".concat(t[p]?m(e.fragmentIdentifier,t):e.fragmentIdentifier)),"".concat(o).concat(u).concat(s)},r.pick=function(e,t,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=r.parseUrl(e,o),i=a.url,c=a.query,u=a.fragmentIdentifier;return r.stringifyUrl({url:i,query:f(c,t),fragmentIdentifier:u},o)},r.exclude=function(e,t,n){var o=Array.isArray(t)?function(e){return!t.includes(e)}:function(e,r){return!t(e,r)};return r.pick(e,o,n)}},4734:function(e){"use strict";e.exports=function(e,r){if("string"!=typeof e||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},6041:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var n=t(2203),o=t(7294),a=t(8643),i=function(e,r){var t=(0,o.useRef)(null),n=(0,o.useRef)(null),a=(0,o.useState)(1),i=a[0],c=a[1],u=(0,o.useMemo)((function(){return r.filter((function(r){var t=r.node.frontmatter.categories;return"All"===e||t.includes(e)}))}),[e]);return(0,o.useEffect)((function(){n.current=new IntersectionObserver((function(e,r){e[0].isIntersecting&&(c((function(e){return e+1})),r.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((function(){return c(1)}),[e]),(0,o.useEffect)((function(){10*i>=u.length||null===t.current||0===t.current.children.length||null===n.current||n.current.observe(t.current.children[t.current.children.length-1])}),[i,e]),{containerRef:t,postList:u.slice(0,10*i)}},c=t(5444),u=t(6125),s=t(7452),l=s.default.div.withConfig({displayName:"style__Container",componentId:"sc-onic1k-0"})(["",""],{display:"grid",gap:"1rem",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem","@media (min-width: 640px)":{paddingLeft:"2.5rem",paddingRight:"2.5rem",paddingTop:"1.25rem",paddingBottom:"1.25rem"},"@media (min-width: 768px)":{gridTemplateColumns:"repeat(4, minmax(0, 1fr))"}}),f=(0,s.default)(c.rU).withConfig({displayName:"style__Item",componentId:"sc-onic1k-1"})([""," transition:0.3s box-shadow;&:hover{","}"],{display:"flex",flexDirection:"column",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},{"--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),p=(0,s.default)(u.G).withConfig({displayName:"style__Thumbnail",componentId:"sc-onic1k-2"})(["",""],{width:"100%",height:"10rem","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderTopLeftRadius:"0.375rem",borderTopRightRadius:"0.375rem",objectFit:"cover"}),d=s.default.div.withConfig({displayName:"style__Inner",componentId:"sc-onic1k-3"})(["",""],{padding:"0.75rem"}),m=s.default.div.withConfig({displayName:"style__Title",componentId:"sc-onic1k-4"})([""," -webkit-box-orient:vertical;"],{overflow:"hidden",marginBottom:"0.75rem",textOverflow:"ellipsis",whiteSpace:"normal",overflowWrap:"break-word",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"2",fontWeight:"700",fontSize:"1.25rem",lineHeight:"1.75rem"}),g=s.default.div.withConfig({displayName:"style__Date",componentId:"sc-onic1k-5"})(["",""],{fontSize:"0.875rem",lineHeight:"1.25rem",opacity:"0.7"}),y=s.default.div.withConfig({displayName:"style__Category",componentId:"sc-onic1k-6"})(["",""],{display:"flex",flexWrap:"wrap",marginTop:"0.625rem"}),b=s.default.div.withConfig({displayName:"style__CategoryItem",componentId:"sc-onic1k-7"})(["",""],{marginTop:"0.125rem",marginBottom:"0.125rem",marginLeft:"0.25rem",marginRight:"0.25rem",paddingTop:"0.125rem",paddingBottom:"0.125rem",paddingLeft:"0.25rem",paddingRight:"0.25rem",fontWeight:"700",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))"}),v=s.default.div.withConfig({displayName:"style__Summary",componentId:"sc-onic1k-8"})([""," -webkit-box-orient:vertical;"],{overflow:"hidden",marginTop:"0.75rem",textOverflow:"ellipsis",whiteSpace:"normal",overflowWrap:"break-word",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"2",opacity:"0.8"});function h(e){var r=e.post.node,t=r.fields.slug,n=r.frontmatter,a=n.title,i=n.thumbnail.childImageSharp.gatsbyImageData,c=n.date,u=n.summary,s=n.categories;return o.createElement(f,{to:t},o.createElement(p,{image:i,alt:a+" Thumbnail"}),o.createElement(d,null,o.createElement(m,{children:a}),o.createElement(g,{children:c}),s&&o.createElement(y,null,s.map((function(e){return o.createElement(b,{key:e,children:e})}))),o.createElement(v,{children:u})))}function x(e){var r=e.selectedCategory,t=e.posts,n=i(r,t),a=n.containerRef,c=n.postList,u=(0,o.useMemo)((function(){return c.filter((function(e){var t=e.node.frontmatter.categories;return"All"===r||t.includes(r)}))}),[r,c]);return o.createElement(l,{ref:a},u.map((function(e){return o.createElement(h,{key:e.node.id,post:e})})))}function w(e){var r=e.location.search,t=e.data,i=t.site.siteMetadata,c=i.title,u=i.description,s=i.siteUrl,l=i.avatarImg,f=t.allMarkdownRemark.edges,p=t.file,d=p.childImageSharp.gatsbyImageData,m=p.publicURL,g=n.parse(r),y="string"==typeof g.category&&g.category?g.category:"All",b=(0,o.useMemo)((function(){return f.reduce((function(e,r){return r.node.frontmatter.categories.forEach((function(r){void 0===e[r]?e[r]=1:e[r]++})),e.All++,e}),{All:0})}),[]);return console.log(d),o.createElement(a.Z,{title:c,description:u,url:s,image:m,selectedCategory:y,categoryList:b,logo:l},o.createElement(x,{selectedCategory:y,posts:f}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-32b3f67a46791c149fd5.js.map