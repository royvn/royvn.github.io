(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2rMq":function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var a=n("q1tI"),i=r(a),o=r(n("2rMq")),c=r(n("Gytx"));function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u=[],d=void 0;function f(){d=e(u.map((function(e){return e.props}))),p.canUseDOM?t(d):n&&(d=n(d))}var p=function(e){function t(){return s(this,t),l(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return d},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=d;return d=void 0,u=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){u.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(a.Component);return p.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",p.canUseDOM=o.canUseDOM,p}}},Bt3r:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"b41ed418-09ac-5aff-97fc-988b18dc2dad","fields":{"slug":"/blog/adobe-xd-en-line-height/"},"frontmatter":{"title":"Adobe XD en line-height"}}},{"node":{"id":"0d3da68a-7156-5118-9d86-a741edede541","fields":{"slug":"/blog/css-variabelen-en-preprocessor-variabelen/"},"frontmatter":{"title":"CSS variabelen en preprocessor variabelen"}}},{"node":{"id":"429b3391-56da-568d-bd72-2e187eb32e04","fields":{"slug":"/blog/het-verschil-tussen-require-en-import/"},"frontmatter":{"title":"Het verschil tussen require en import"}}},{"node":{"id":"9d0ce1ab-0cb9-5eff-b007-89bacc576e7f","fields":{"slug":"/blog/webkit-naar-watchos-5/"},"frontmatter":{"title":"Webkit naar WatchOS 5"}}},{"node":{"id":"e4f038c9-591b-532d-b430-e0c128cf45fa","fields":{"slug":"/blog/sketch-plugin-tips-voor-een-snellere-workflow/"},"frontmatter":{"title":"Sketch plugin tips voor een snellere workflow"}}}]}}}')},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Roy van Neden","description":"Designer & developer.","author":"Roy van Neden"}}}}')},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var l=i[s];if(!c(l))return!1;var u=e[l],d=t[l];if(!1===(a=n?n.call(r,u,d,l):void 0)||void 0===a&&u!==d)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Roy van Neden"}}}}')},JwsL:function(e,t,n){"use strict";var r=n("Bt3r"),a=n("q1tI"),i=n.n(a),o=n("Wbzz"),c=n("q9QM");var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;this.props.data;return i.a.createElement(o.StaticQuery,{query:"3182511182",render:function(t){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"footer__widgets grid page-width page-spacer"},i.a.createElement("div",{className:"grid__item gcs-xs-1 gce-xs-13 gcs-md-1 gce-md-4"},i.a.createElement("div",{className:"widget"},i.a.createElement("p",{className:"widget-title"},e.props.siteTitle))),i.a.createElement("div",{className:"grid__item gcs-xs-1 gce-xs-7 gcs-md-4 gce-md-7"},i.a.createElement("div",{className:"widget"},i.a.createElement("p",{className:"widget-title"},"Hoofdmenu"),i.a.createElement("ul",{className:"widget-list"},i.a.createElement("li",{className:"widget-list-item"},i.a.createElement(o.Link,{to:"/",className:"widget-list-link",activeClassName:"widget-list-link--active"},"Home")),i.a.createElement("li",{className:"widget-list-item"},i.a.createElement(o.Link,{to:"/info/",className:"widget-list-link",activeClassName:"widget-list-link--active"},"Info")),i.a.createElement("li",{className:"widget-list-item"},i.a.createElement(o.Link,{to:"/blog/",className:"widget-list-link",activeClassName:"widget-list-link--active"},"Blog")),i.a.createElement("li",{className:"widget-list-item"},i.a.createElement(o.Link,{to:"/contact/",className:"widget-list-link",activeClassName:"widget-list-link--active"},"Contact"))))),i.a.createElement("div",{className:"grid__item gcs-xs-8 gce-xs-13 gcs-md-7 gce-md-10"},i.a.createElement("div",{className:"widget"},i.a.createElement("p",{className:"widget-title"},"Social"),i.a.createElement("ul",{className:"widget-list"},i.a.createElement("li",{className:"widget-list-item"},i.a.createElement("a",{href:"https://github.com/royvn",target:"_blank",rel:"noopener noreferrer",className:"widget-list-link"},"Github")),i.a.createElement("li",{className:"widget-list-item"},i.a.createElement("a",{href:"https://www.instagram.com/royvn/",target:"_blank",rel:"noopener noreferrer",className:"widget-list-link"},"Instagram")),i.a.createElement("li",{className:"widget-list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/roy-van-neden-10549761/",target:"_blank",rel:"noopener noreferrer",className:"widget-list-link"},"Linkedin")),i.a.createElement("li",{className:"widget-list-item"},i.a.createElement("a",{href:"https://twitter.com/royvn_",target:"_blank",rel:"noopener noreferrer",className:"widget-list-link"},"Twitter"))))),i.a.createElement("div",{className:"grid__item gcs-xs-1 gce-xs-13 gcs-md-10 gce-md-13"},i.a.createElement(c.a,{title:"Recent van blog",list:t.allMarkdownRemark.edges}))),i.a.createElement("div",{className:"footer__license"},i.a.createElement("div",{className:"grid page-width page-spacer"},i.a.createElement("div",{className:"grid__item gcs-xs-1 gce-xs-13"},i.a.createElement("p",null,"© 1992 - ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")," and "," ",i.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),". Hosted on"," ",i.a.createElement("a",{href:"https://github.com/royvn/royvn.github.io",target:"_blank",rel:"noopener noreferrer"},"Github"),"."," ","Created with passion in The Hague, The Netherlands.")))))},data:r})},a}(i.a.Component);t.a=s},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,c=function(e,t,n,r){var a=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,c=n("quPj"),s=n("C/va"),l=r.RegExp,u=l,d=l.prototype,f=/a/g,p=/a/g,m=new l(f)!==f;if(n("nh4g")&&(!m||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,l(f)!=f||l(p)==p||"/a/i"!=l(f,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),i=void 0===t;return!n&&r&&e.constructor===l&&i?e:a(m?new u(r&&!i?e.source:e,t):u((r=e instanceof l)?e.source:e,r&&i?s.call(e):t),n?this:d,l)};for(var E=function(e){e in l||i(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},T=o(u),h=0;T.length>h;)E(T[h++]);d.constructor=l,l.prototype=d,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n("q1tI")),o=d(n("17x9")),c=d(n("8+s/")),s=d(n("bmMU")),l=n("v1p5"),u=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,T,h,g=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),v=(E=g,h=T=function(e){function t(){return p(this,t),m(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=c,t.titleAttributes=r({},o),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=E.peek,T.rewind=function(){var e=E.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),d=r(n);if(u&&d){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==n.getTime();var m=t instanceof RegExp,E=n instanceof RegExp;if(m!=E)return!1;if(m&&E)return t.toString()==n.toString();var T=a(t);if((s=T.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,T[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=T[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},nGOU:function(e,t,n){"use strict";n("tUrg");var r=n("q1tI"),a=n.n(r),i=n("Wbzz");var o=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(i.Link,{to:this.props.link,className:"notice",activeClassName:"notice--active"},a.a.createElement("div",{className:"notice__content page-width page-spacer"},a.a.createElement("span",{className:"notice__text"},this.props.title),a.a.createElement("span",{className:"notice__btn btn btn--light btn--sm"},this.props.button_text)))},r}(a.a.Component);t.a=o},q9QM:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz");var o=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{className:"widget"},a.a.createElement("p",{className:"widget-title"},this.props.title),a.a.createElement("ul",{className:"widget-list"},this.props.list.map((function(e){var t=e.node;return a.a.createElement("li",{key:t.id,className:"widget-list-item"},a.a.createElement(i.Link,{to:t.fields.slug,className:"widget-list-link",activeClassName:"widget-list-link--active"},t.frontmatter.title))}))))},r}(a.a.Component);t.a=o},rY4l:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz");function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={isHome:!0,isHighlighted:!1,isNavigationToggled:!1},n.handleHamburgerClick=n.handleHamburgerClick.bind(o(n)),n.handleHeaderHighlight=n.handleHeaderHighlight.bind(o(n)),n.handleCloseAnimation=n.handleCloseAnimation.bind(o(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=r.prototype;return c.handleHeaderHighlight=function(){window.scrollY>0?this.setState({isHighlighted:!0}):this.setState({isHighlighted:!1})},c.componentDidMount=function(){window.addEventListener("scroll",this.handleHeaderHighlight)},c.handleHamburgerClick=function(){this.setState({isNavigationToggled:!this.state.isNavigationToggled})},c.handleCloseAnimation=function(){this.setState({isNavigationToggled:!1})},c.render=function(){return a.a.createElement("header",{className:"header "+(this.state.isNavigationToggled?"navigation--open":"")+" "+(this.state.isHighlighted?"header--highlighted":"")},a.a.createElement("div",{className:"header__content page-width page-spacer"},a.a.createElement("div",{className:"brand"},a.a.createElement(i.Link,{to:"/",className:"brand__title"},this.props.siteTitle)),a.a.createElement("button",{type:"button",onClick:this.handleHamburgerClick,className:"hamburger"},"Menu"),a.a.createElement("nav",{className:"navigation "+(this.state.isNavigationToggled?"navigation--open":"")},a.a.createElement("ul",{className:"nav nav--primary"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.Link,{to:"/",className:"nav-link",activeClassName:"nav-link--active"},"Home")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.Link,{to:"/info/",className:"nav-link",activeClassName:"nav-link--active"},"Info")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.Link,{to:"/blog/",className:"nav-link",activeClassName:"nav-link--active"},"Blog")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.Link,{to:"/contact/",className:"nav-link",activeClassName:"nav-link--active"},"Contact"))),a.a.createElement("ul",{className:"nav nav--secondary"},a.a.createElement("li",{className:"header__social-item"},a.a.createElement("a",{href:"https://github.com/royvn",target:"_blank",rel:"noopener noreferrer",className:"header__social-link"},a.a.createElement("span",{className:"sr-only"},"Github"),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))),a.a.createElement("li",{className:"header__social-item"},a.a.createElement("a",{href:"https://www.instagram.com/royvn/",target:"_blank",rel:"noopener noreferrer",className:"header__social-link"},a.a.createElement("span",{className:"sr-only"},"Instagram"),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})))),a.a.createElement("li",{className:"header__social-item"},a.a.createElement("a",{href:"https://www.linkedin.com/in/roy-van-neden-10549761/",target:"_blank",rel:"noopener noreferrer",className:"header__social-link"},a.a.createElement("span",{className:"sr-only"},"Linkedin"),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})))),a.a.createElement("li",{className:"header__social-item"},a.a.createElement("a",{href:"https://twitter.com/royvn_",target:"_blank",rel:"noopener noreferrer",className:"header__social-link"},a.a.createElement("span",{className:"sr-only"},"Twitter"),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))))))),a.a.createElement("div",{className:"header__mask",onClick:this.handleCloseAnimation}))},r}(a.a.Component);t.a=c},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=s(n("q1tI")),o=s(n("MgzW")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=T(e,c.TAG_NAMES.TITLE),n=T(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return T(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},E=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],l=s.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),s=0;s<i.length;s++){var l=i[s],u=(0,o.default)({},a[l],r[l]);a[l]=u}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){h(e)}),0)}),g=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;N(c.TAG_NAMES.BODY,r),N(c.TAG_NAMES.HTML,a),S(f,p);var m={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,i),metaTags:R(c.TAG_NAMES.META,o),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,s),scriptTags:R(c.TAG_NAMES.SCRIPT,u),styleTags:R(c.TAG_NAMES.STYLE,d)},E={},T={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(T[e]=m[e].oldTags)})),t&&t(),l(e,E,T)},w=function(e){return Array.isArray(e)?e.join(""):e},S=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),N(c.TAG_NAMES.TITLE,t)},N=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var d=i.indexOf(l);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},P=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=M(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),i=w(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){_&&A(_),e.defer?_=v((function(){b(e,(function(){_=null}))})):(b(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:P(c.TAG_NAMES.BASE,t,r),bodyAttributes:P(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:P(c.ATTRIBUTE_NAMES.HTML,a,r),link:P(c.TAG_NAMES.LINK,i,r),meta:P(c.TAG_NAMES.META,o,r),noscript:P(c.TAG_NAMES.NOSCRIPT,s,r),script:P(c.TAG_NAMES.SCRIPT,l,r),style:P(c.TAG_NAMES.STYLE,u,r),title:P(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:T(e,c.HELMET_PROPS.DEFER),encode:T(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=v,t.warn=y}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=4a2938b4d7ad25f47f60e7ef79dc35a6e8e5e19b-a6c8e7365156c65224e0.js.map