(this["webpackJsonpreact-memory-card"]=this["webpackJsonpreact-memory-card"]||[]).push([[0],Array(25).concat([function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){var c={"./1.png":54,"./10.png":55,"./11.png":56,"./12.png":57,"./13.png":58,"./14.png":59,"./15.png":60,"./16.png":61,"./2.png":62,"./3.png":63,"./4.png":64,"./5.png":65,"./6.png":66,"./7.png":67,"./8.png":68,"./9.png":69};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id=53},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.961a737a.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/10.dc7c8831.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/11.bd83be7f.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/12.6606e255.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/13.c6dfed12.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/14.e957166b.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/15.4994e237.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/16.823c2e42.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/2.f8cc5593.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3.dd43ff48.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/4.4fd5701a.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/5.11240d0e.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/6.465d670c.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/7.5406ef59.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/8.4273041a.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/9.be8dba0a.png"},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(18),i=n.n(r),s=(n(25),n(3)),u=n.n(s),o=n(5),p=n(20),d=n(8),f=n(4),l=(n(29),n.p,n(30),n(0));function m(e){return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{className:"header_title",children:"POK\xc9MORY CARD"})})}n(32);function g(e){return console.log(e),Object(l.jsxs)("div",{className:"scoreBoard",children:[Object(l.jsxs)("div",{className:"board left",children:[Object(l.jsx)("span",{children:"Current Score: "}),Object(l.jsx)("span",{children:e.currentScore})]}),Object(l.jsxs)("div",{className:"board right",children:[Object(l.jsx)("span",{children:"Best Score: "}),Object(l.jsx)("span",{children:e.bestScore})]})]})}n(33);function j(e){var t=e.pokemon,n=e.handleClick;return Object(l.jsxs)("div",{className:"card",onClick:function(){return n(t.name)},children:[Object(l.jsx)("img",{src:t.img,alt:t.name}),Object(l.jsx)("span",{children:t.name})]})}n(34);function b(e){var t=e.pokemons.map((function(t){return Object(l.jsx)(j,{handleClick:e.handleCardClick,pokemon:t},t.name)}));return Object(l.jsx)("div",{className:"cardGrid",children:t})}var h=n(19),O=n.n(h),v=252;function x(){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(Object(f.range)(v,264).map(function(){var e=Object(o.a)(u.a.mark((function e(t){var n,c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,c=n.data,console.log(c),a=Object(f.capitalize)(c.name),r=c.sprites.other.dream_world.front_default,e.abrupt("return",{name:a,img:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var C=function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)([]),s=Object(d.a)(i,2),j=s[0],h=s[1],O=Object(c.useState)([]),v=Object(d.a)(O,2),k=v[0],C=v[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,C(Object(f.shuffle)(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(m,{}),Object(l.jsx)(g,{bestScore:a,currentScore:j.length}),Object(l.jsx)("div",{className:"main",children:Object(l.jsx)(b,{pokemons:k,handleCardClick:function(e){!function(e){j.includes(e)?(a<j.length&&r(j.length),h([])):h((function(t){return[].concat(Object(p.a)(t),[e])}))}(e),C((function(e){return Object(f.shuffle)(e)}))}})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};var S=function(e){var t={};return e.keys().forEach((function(n){t[n.replace("./","")]=e(n).default})),t}(n(53)),w=(console.log(S["1.png"]),[{img:S["1.png"],name:"Bulbasaur"},{img:S["2.png"],name:"Ivysaur"},{img:S["3.png"],name:"Venusaur"},{img:S["4.png"],name:"\tCharmander"},{img:S["5.png"],name:"Charmeleon"},{img:S["6.png"],name:"\tCharizard"},{img:S["7.png"],name:"Squirtle"},{img:S["8.png"],name:"Wartortle"},{img:S["9.png"],name:"Blastoise"},{img:S["10.png"],name:"Caterpie"},{img:S["11.png"],name:"Metapod"},{img:S["12.png"],name:"Butterfree"}]);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(C,{data:w})}),document.getElementById("root")),y()}]),[[70,1,2]]]);
//# sourceMappingURL=main.eee21c3f.chunk.js.map