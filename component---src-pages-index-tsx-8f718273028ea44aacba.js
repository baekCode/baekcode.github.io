(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3038:function(e,t,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var l=c[u];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=r(8936),l=r(7091),s=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?u(e):encodeURIComponent(e):e}function g(e,t){return t.decode?l(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function h(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function b(e){var t=(e=h(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function v(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function x(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&g(r,e).includes(e.arrayFormatSeparator);r=a?g(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)})):null===r?r:g(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?g(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var a,c=i(e.split("&"));try{for(c.s();!(a=c.n()).done;){var u=a.value;if(""!==u){var l=s(t.decode?u.replace(/\+/g," "):u,"="),f=o(l,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?m:g(m,t),r(g(p,t),m,n)}}}catch(I){c.e(I)}finally{c.f()}for(var h=0,b=Object.keys(n);h<b.length;h++){var x=b[h],w=n[x];if("object"==typeof w&&null!==w)for(var k=0,_=Object.keys(w);k<_.length;k++){var S=_[k];w[S]=v(w[S],t)}else n[x]=v(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=b,t.parse=x,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(t,e),"[",o,"]"].join("")]:[[m(t,e),"[",m(o,e),"]=",m(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(t,e),"[]"].join("")]:[[m(t,e),"[]=",m(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,e),t,m(o,e)].join("")]:[[n,m(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[m(t,e)]:[[m(t,e),"=",m(n,e)].join("")])}}}}(t),o={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];r(u)||(o[u]=e[u])}var l=Object.keys(o);return!1!==t.sort&&l.sort(t.sort),l.map((function(r){var o=e[r];return void 0===o?"":null===o?m(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?m(r,t)+"[]":o.reduce(n(r),[]).join("&"):m(r,t)+"="+m(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:x(b(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=h(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),c=Object.assign(i,e.query),u=t.stringify(c,r);u&&(u="?".concat(u));var l=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l="#".concat(r[p]?m(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(u).concat(l)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=t.parseUrl(e,o),i=a.url,c=a.query,u=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(c,r),fragmentIdentifier:u},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},6109:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(2203),o=r(7294),a=r(2237),i=function(e,t){var r=(0,o.useRef)(null),n=(0,o.useRef)(null),a=(0,o.useState)(1),i=a[0],c=a[1],u=(0,o.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,o.useEffect)((function(){n.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(c((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((function(){return c(1)}),[e]),(0,o.useEffect)((function(){10*i>=u.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:u.slice(0,10*i)}},c=r(5444),u=r(6125),l=r(7452),s=l.default.div.withConfig({displayName:"style__Container",componentId:"sc-onic1k-0"})(["",""],{display:"grid",gap:"1rem",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem","@media (min-width: 640px)":{paddingLeft:"2.5rem",paddingRight:"2.5rem",paddingTop:"1.25rem",paddingBottom:"1.25rem"},"@media (min-width: 768px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(4, minmax(0, 1fr))"},"@media (min-width: 1280px)":{gridTemplateColumns:"repeat(5, minmax(0, 1fr))"}}),f=(0,l.default)(c.rU).withConfig({displayName:"style__Item",componentId:"sc-onic1k-1"})([""," transition:0.3s box-shadow;&:hover{","}"],{display:"flex",flexDirection:"column",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},{"--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),p=(0,l.default)(u.G).withConfig({displayName:"style__Thumbnail",componentId:"sc-onic1k-2"})(["",""],{width:"100%",height:"10rem","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderTopLeftRadius:"0.375rem",borderTopRightRadius:"0.375rem",objectFit:"cover"}),d=l.default.div.withConfig({displayName:"style__Inner",componentId:"sc-onic1k-3"})(["",""],{padding:"0.75rem"}),m=l.default.div.withConfig({displayName:"style__Title",componentId:"sc-onic1k-4"})([""," -webkit-box-orient:vertical;"],{overflow:"hidden",marginBottom:"0.75rem",textOverflow:"ellipsis",whiteSpace:"normal",overflowWrap:"break-word",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"2",fontWeight:"500",fontSize:"1.25rem",lineHeight:"1.75rem"}),g=l.default.div.withConfig({displayName:"style__Date",componentId:"sc-onic1k-5"})(["",""],{fontSize:"0.875rem",lineHeight:"1.25rem",opacity:"0.7"}),y=l.default.div.withConfig({displayName:"style__Category",componentId:"sc-onic1k-6"})(["",""],{display:"flex",flexWrap:"wrap",marginTop:"0.625rem"}),h=l.default.div.withConfig({displayName:"style__CategoryItem",componentId:"sc-onic1k-7"})(["",""],{marginTop:"0.125rem",marginBottom:"0.125rem",marginLeft:"0.25rem",marginRight:"0.25rem",paddingTop:"0.125rem",paddingBottom:"0.125rem",paddingLeft:"0.25rem",paddingRight:"0.25rem",fontWeight:"700",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))"}),b=l.default.div.withConfig({displayName:"style__Summary",componentId:"sc-onic1k-8"})([""," -webkit-box-orient:vertical;"],{overflow:"hidden",marginTop:"0.75rem",textOverflow:"ellipsis",whiteSpace:"normal",overflowWrap:"break-word",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"2",opacity:"0.8"});function v(e){var t=e.post.node,r=t.fields.slug,n=t.frontmatter,a=n.title,i=n.thumbnail.childImageSharp.gatsbyImageData,c=n.date,u=n.summary,l=n.categories;return o.createElement(f,{to:r},o.createElement(p,{image:i,alt:a+" Thumbnail"}),o.createElement(d,null,o.createElement(m,{children:a}),o.createElement(g,{children:c}),l&&o.createElement(y,null,l.map((function(e){return o.createElement(h,{key:e,children:e})}))),o.createElement(b,{children:u})))}function x(e){var t=e.selectedCategory,r=e.posts,n=i(t,r),a=n.containerRef,c=n.postList,u=(0,o.useMemo)((function(){return c.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t,c]);return o.createElement(s,{ref:a},u.map((function(e){return o.createElement(v,{key:e.node.id,post:e})})))}var w=l.default.div.withConfig({displayName:"style__Container",componentId:"sc-rixfaf-0"})([""," font-family:'Noto Serif KR';"],{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"12rem","--tw-bg-opacity":"0.8",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))",fontWeight:"700",fontSize:"1.5rem",lineHeight:"2rem",backgroundImage:"linear-gradient(to top, var(--tw-gradient-stops))","--tw-gradient-from":"#000","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 640px)":{fontSize:"2.25rem",lineHeight:"2.5rem"},"@media (min-width: 1024px)":{fontSize:"3.75rem",lineHeight:"1"}});function k(){return o.createElement(w,null,"return <블로그 대문 />")}function _(e){var t=e.location.search,r=e.data,i=r.site.siteMetadata,c=i.title,u=i.headingTitle,l=i.description,s=i.siteUrl,f=i.avatarImg,p=i.githubUrl,d=r.allMarkdownRemark.edges,m=r.file.publicURL,g=n.parse(t),y="string"==typeof g.category&&g.category?g.category:"All",h=(0,o.useMemo)((function(){return d.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return o.createElement(a.Z,{title:c,headingTitle:u,description:l,url:s,image:m,selectedCategory:y,categoryList:h,logo:f,footerLink:p},o.createElement(k,null),o.createElement(x,{selectedCategory:y,posts:d}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8f718273028ea44aacba.js.map