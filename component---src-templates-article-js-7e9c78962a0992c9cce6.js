(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{VRlk:function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return g}));var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("9eSz"),s=a.n(i),l=a("7oih"),c=a("9CUm"),p=a("JX7q"),d=a("dI71"),m=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={isDonationDropdownOpen:!1,active:0,items:a.props.options},a.handleDonationDropdown=a.handleDonationDropdown.bind(Object(p.a)(a)),a.handleDonationUrl=a.handleDonationUrl.bind(Object(p.a)(a)),a}Object(d.a)(e,t);var a=e.prototype;return a.handleDonationUrl=function(t){var e=t.target.dataset.index;this.setState({active:e,isDonationDropdownOpen:!1})},a.handleDonationDropdown=function(){this.setState({isDonationDropdownOpen:!this.state.isDonationDropdownOpen})},a.render=function(){var t=this;return o.a.createElement("div",{className:"donation grid page-width page-spacer"},o.a.createElement("div",{className:"gcs-xs-1 gce-xs-13"},o.a.createElement("div",{className:"donation__content"},this.props.title&&o.a.createElement("p",{className:"donation__title"},this.props.title),this.props.options&&o.a.createElement("p",{className:"donation__subtitle"},o.a.createElement("span",null,"Selecteer en doneer als blijk van waardering een "),o.a.createElement("span",{className:"donation-dropdown "+(this.state.isDonationDropdownOpen?"donation-dropdown--active":"")},o.a.createElement("span",{className:"donation-dropdown-overlay",onClick:this.handleDonationDropdown}),o.a.createElement("button",{type:"button",className:"donation-dropdown-select",onClick:this.handleDonationDropdown},o.a.createElement("span",{className:"donation-dropdown-current"},this.state.items[this.state.active].title),o.a.createElement("span",{className:"icon"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"}),o.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})))),o.a.createElement("ul",{className:"donation-dropdown-list"},this.state.items.map((function(e,a){return o.a.createElement("li",{className:"donation-dropdown-list__item "+(t.state.active==a?"donation-dropdown-list__item--active":"")+" ",key:a},o.a.createElement("button",{type:"button",className:"donation-dropdown-list__button",onClick:t.handleDonationUrl,"data-index":a},e.title))})))),o.a.createElement("span",null," van € ",this.state.items[this.state.active].price,".")),this.props.button_url&&this.props.options&&o.a.createElement("a",{href:this.props.button_url+"/"+this.state.items[this.state.active].price,target:"_blank",rel:"noopener",className:"button button--primary button--lg"},"€",this.state.items[this.state.active].price," doneren"))))},e}(o.a.Component);function u(t,e){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=t[Symbol.iterator]()).next.bind(a)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}e.default=function(t){for(var e,a=t.data.markdownRemark,n="",i=u(a.frontmatter.categories.entries());!(e=i()).done;){var p=e.value,d=p[0],h=""+p[1];d<a.frontmatter.categories.length-1&&(h+=", "),n+=h}return o.a.createElement(l.a,null,o.a.createElement(c.a,{title:a.frontmatter.title,description:a.excerpt}),o.a.createElement("article",{className:"post page-width page-spacer grid"},o.a.createElement("header",{className:"post-header gcs-xs-1 gce-xs-13 gcs-lg-3 gce-lg-11"},o.a.createElement(r.Link,{to:"/blog/",className:"post-back-to-blog"},"Terug naar overzicht"),a.frontmatter.title&&o.a.createElement("h1",{className:"post-title"},a.frontmatter.title),a.frontmatter.date&&n&&o.a.createElement("p",{className:"post-meta"},"Geplaatst op ",a.frontmatter.date," in ",n,".")),a.frontmatter.image&&o.a.createElement("div",{className:"post-image gcs-xs-1 gce-xs-13 gcs-lg-1 gce-lg-13"},o.a.createElement(s.a,{fluid:a.frontmatter.image.childImageSharp.fluid,alt:a.frontmatter.title,style:{maxWidth:1024}})),o.a.createElement("div",{className:"post-content gcs-xs-1 gce-xs-13 gcs-lg-3 gce-lg-11"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html},className:"markdown"}))),o.a.createElement(m,{title:"Vind je dit leuk?",options:[{title:"pakje rooibos thee",price:"1,59"},{title:"pizza pomodori buffalo",price:"5,39"},{title:"Magic Trackpad 2",price:"149,00"}],button_url:"https://www.paypal.me/royvn"}))};var g="2366479382"}}]);
//# sourceMappingURL=component---src-templates-article-js-7e9c78962a0992c9cce6.js.map