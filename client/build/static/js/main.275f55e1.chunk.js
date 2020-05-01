(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{104:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(20),c=t.n(i),o=(t(67),t(68),t(22)),u=t(23),l=(t(69),t(4)),s=t(14),m=t(5),d=t.n(m),f=t(8),p=t(17),g=Object(p.b)({name:"WATCHLIST",initialState:{watchlist:[]},reducers:{getLocalStorageSuccess:function(n,e){var t=e.payload;n.watchlist=t},add:function(n,e){var t=e.payload;n.watchlist.find((function(n){return n.id===t.id}))||n.watchlist.push(t)},remove:function(n,e){var t=e.payload,r=n.watchlist.findIndex((function(n){return n.id===t.id}));-1!==r&&n.watchlist.splice(r,1)}}}),h=g.actions,b=h.getLocalStorageSuccess,v=h.add,w=h.remove,x=function(){return function(){var n=Object(f.a)(d.a.mark((function n(e,t){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{r=JSON.parse(localStorage.getItem("movies")||"[]"),e(b(r))}catch(t){console.log(t)}case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},O=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=JSON.parse(localStorage.getItem("movies")||"[]"),r.find((function(e){return e.id===n.id}))||(r.push(n),t(v(n))),localStorage.setItem("movies",JSON.stringify(r));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},E=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=JSON.parse(localStorage.getItem("movies")||"[]"),-1!==(a=r.findIndex((function(e){return e.id===n.id})))&&(r.splice(a,1),t(w(n))),localStorage.setItem("movies",JSON.stringify(r));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},j=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t,r){var a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r().watchlist.watchlist,i=a.find((function(e){return e.id===n.id})),t(i?E(n):O(n));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},k=function(n){return{watchlist:n.watchlist.watchlist}},y=g.reducer,S=t(27),P=t(56),z=t(105),_=t(3);function I(){var n=Object(l.a)(["\n  color: ",";\n  font-size: 1.25rem;\n  margin-left: 2rem;\n"]);return I=function(){return n},n}function M(){var n=Object(l.a)(["\n  color: ",";\n  background: hsl(46, 80%, 40%);\n  vertical-align: baseline;\n  padding-right: 0.6em;\n  padding-left: 0.55em;\n  margin-left: 0.3rem;\n  font-size: 0.8rem;\n  height: 19px;\n  width: 20px;\n  line-height: 0.9;\n  position: absolute;\n  top: 16px;\n  right: -7px;\n  display: flex;\n  justify-content: center;\n\n  span {\n    transform: translateX(1px);\n  }\n"]);return M=function(){return n},n}function N(){var n=Object(l.a)(["\n  padding: 0.75rem;\n  color: ",";\n  font-weight: bold;\n  letter-spacing: 1px;\n  position: relative;\n"]);return N=function(){return n},n}function W(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  list-style: none;\n  margin-bottom: 0;\n\n  a {\n    text-decoration-color: ",";\n  }\n"]);return W=function(){return n},n}function L(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 1.25rem;\n  height: 37px;\n  width: 42px;\n  background: ",";\n  color: ",";\n"]);return L=function(){return n},n}function R(){var n=Object(l.a)(["\n  max-width: 1100px;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  padding: 0 1rem;\n"]);return R=function(){return n},n}function F(){var n=Object(l.a)(["\n  background: ",";\n  color: ",";\n  height: 60px;\n  width: 100%;\n  position: fixed;\n  z-index: 12;\n"]);return F=function(){return n},n}var A=_.b.nav(F(),(function(n){return n.theme.gray}),(function(n){return n.theme.light})),T=_.b.div(R()),C=_.b.div(L(),(function(n){return n.theme.dark}),(function(n){return n.theme.gold})),U=_.b.ul(W(),(function(n){return n.theme.gold})),G=_.b.li(N(),(function(n){return n.theme.light})),J=Object(_.b)(z.a)(M(),(function(n){return n.theme.light})),D=Object(_.b)(S.a)(I(),(function(n){return n.theme.light})),V=function(){var n=Object(s.c)(k).watchlist;return a.a.createElement(A,null,a.a.createElement(T,null,a.a.createElement(o.b,{to:"/"},a.a.createElement(C,null,a.a.createElement(P.a,null))),a.a.createElement(U,null,a.a.createElement(o.b,{to:"/"},a.a.createElement(G,null,"Home")),a.a.createElement(o.b,{to:"/watchlist"},a.a.createElement(G,null,"Watchlist",a.a.createElement(J,{pill:!0},a.a.createElement("span",null,n.length)))),a.a.createElement(G,null,a.a.createElement("a",{href:"https://github.com/julianvazq/movie-explorer",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(D,null))))))},Y=t(107),B=t(106),H=t(57);function $(){var n=Object(l.a)(["\n  color: ",";\n  font-size: 2rem;\n  position: absolute;\n  right: 6px;\n  top: 3px;\n  cursor: pointer;\n"]);return $=function(){return n},n}function q(){var n=Object(l.a)(["\n  font-size: 1.125rem;\n  color: ",";\n  transition: color 250ms ease-in;\n"]);return q=function(){return n},n}function X(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 50%;\n  position: absolute;\n  top: 4px;\n  left: 5px;\n  height: 35px;\n  width: 37px;\n  background: hsla(46, 0%, 50%, 0.5);\n  transform: scale(1);\n  transition: all 250ms ease-in;\n\n  @media (min-width: 900px) {\n    &:hover {\n      transform: scale(1.1);\n      background: hsla(46, 0%, 50%, 0.5);\n    }\n  }\n"]);return X=function(){return n},n}function K(){var n=Object(l.a)(["\n  font-size: 1.25rem;\n  color: ",";\n"]);return K=function(){return n},n}function Q(){var n=Object(l.a)(["\n  border-radius: ",";\n  background: ",";\n  min-height: 150px;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n"]);return Q=function(){return n},n}function Z(){var n=Object(l.a)(["\n  display: grid;\n  grid-gap: 0.25rem;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media (min-width: 375px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: 700px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (min-width: 900px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(6, 1fr);\n  }\n"]);return Z=function(){return n},n}function nn(){var n=Object(l.a)(["\n  padding: 1.125rem;\n  border-radius: ",";\n  background: ",";\n\n  p {\n    margin-bottom: 0;\n    color: ",";\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  margin: 0;\n  padding: 0.5rem 1.125rem 1.125rem;\n  font-size: 0.9rem;\n  color: ",";\n  line-height: 1.5;\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n  visibility: ",";\n\n  h3 {\n    font-size: 0.8rem;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    color: "," !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  p {\n    margin-bottom: 0;\n    font-size: 0.9rem;\n  }\n\n  @media (min-width: 450px) {\n    flex: 50%;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-row-gap: 0.125rem;\n  margin-top: 0.5rem;\n\n  @media (min-width: 375px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 0.75rem;\n    grid-row-gap: 0.5rem;\n  }\n\n  @media (min-width: 450px) {\n    /* grid-template-columns: repeat(2, 1fr); */\n    /* grid-row-gap: 0.5rem; */\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n  flex: 50%;\n  padding-left: 0.5rem;\n\n  /* Title */\n  h1 {\n    font-size: 1rem;\n    font-weight: 700;\n    margin-bottom: 0.25rem;\n  }\n  /* Tagline */\n  h2 {\n    font-size: 0.9rem;\n    font-weight: 400;\n    color: ",";\n    margin-bottom: 0;\n    margin-top: 0.25rem;\n  }\n\n  a {\n    color: ",";\n  }\n\n  @media (min-width: 600px) {\n    flex: 75%;\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(l.a)(["\n  width: 90%;\n  border-radius: ",";\n  background: ",";\n  background-position: left;\n  background-size: contain;\n  background-repeat: no-repeat;\n\n  @media (min-width: 450px) {\n    width: 90%;\n    height: auto;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(l.a)(["\n  flex: 50%;\n"]);return on=function(){return n},n}function un(){var n=Object(l.a)(["\n  color: ",";\n  padding: 1.25rem 1.25rem 0.625rem;\n  display: flex;\n  min-height: 200px;\n"]);return un=function(){return n},n}function ln(){var n=Object(l.a)(["\n  padding: 0;\n  background: "," !important;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.52), 0 2px 2px rgba(0, 0, 0, 0.52),\n    0 4px 4px rgba(0, 0, 0, 0.52), 0 8px 8px rgba(0, 0, 0, 0.52),\n    0 16px 16px rgba(0, 0, 0, 0.52);\n"]);return ln=function(){return n},n}function sn(){var n=Object(l.a)(["\n  background: "," !important;\n  border-radius: ",";\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.22), 0 2px 2px rgba(0, 0, 0, 0.22),\n    0 4px 4px rgba(0, 0, 0, 0.22), 0 8px 8px rgba(0, 0, 0, 0.22),\n    0 16px 16px rgba(0, 0, 0, 0.22);\n  top: 9%;\n\n  @media (min-width: 600px) {\n    top: 0%;\n  }\n\n  @media (min-width: 700px) {\n    max-width: 600px !important;\n  }\n"]);return sn=function(){return n},n}function mn(){var n=Object(l.a)(["\n  animation: "," 250ms ease-in;\n  box-shadow: 0px 0px 5px 1px rgba(133, 133, 133, 0.15);\n  border-radius: ",";\n  background: ",";\n  min-height: 200px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transform: scale(1);\n  transition: background 250ms ease-in, transform 250ms ease-in-out;\n  color: ",";\n  display: flex;\n\n  h1 {\n    font-size: 0.8rem;\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n    margin: auto;\n    padding: 0 0.5rem;\n    align-self: center;\n    text-align: center;\n  }\n\n  &:hover {\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n      ",";\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: scale(1.1);\n    z-index: 10;\n    cursor: pointer;\n  }\n\n  &:hover h1 {\n    opacity: 1;\n  }\n\n  @media (min-width: 500px) {\n    min-height: 250px;\n\n    h1 {\n      font-size: 1.25rem;\n    }\n  }\n\n  @media (min-width: 750px) {\n    min-height: 375px;\n  }\n"]);return mn=function(){return n},n}function dn(){var n=Object(l.a)(["\n        0% { \n            opacity: 0; \n        }\n        100% { \n            opacity: 1; \n        } \n"]);return dn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  display: grid;\n  grid-gap: 0.25rem;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media (min-width: 375px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: 700px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (min-width: 900px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(6, 1fr);\n  }\n"]);return fn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  display: inline-block;\n  padding: 1rem 1rem 0.5rem;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-weight: bold;\n  color: ",";\n  cursor: pointer;\n"]);return pn=function(){return n},n}function gn(){var n=Object(l.a)(["\n  flex: 50%;\n  margin-bottom: 0;\n  text-align: right;\n"]);return gn=function(){return n},n}function hn(){var n=Object(l.a)(["\n  flex: 50%;\n  margin-bottom: 0;\n  text-align: left;\n"]);return hn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  display: flex;\n"]);return bn=function(){return n},n}function vn(){var n=Object(l.a)(["\n  font-size: 1.25rem;\n  margin-bottom: 0;\n  padding-bottom: 0.5rem;\n  display: inline-block;\n  border-bottom: 1.5px solid ",";\n  color: ",";\n\n  @media (min-width: 500px) {\n    font-size: 1.5rem;\n  }\n\n  @media (min-width: 500px) {\n    font-size: 1.5rem;\n  }\n"]);return vn=function(){return n},n}function wn(){var n=Object(l.a)(["\n  margin-bottom: 2rem;\n"]);return wn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  padding: 2rem 1rem;\n  background-color: ",";\n  min-height: 100vh;\n\n  @media (min-width: 600px) {\n    padding: 2rem;\n  }\n\n  @media (min-width: 1200px) {\n    margin: 0rem auto;\n  }\n"]);return xn=function(){return n},n}var On=_.b.section(xn(),(function(n){return n.bg?n.bg:n.theme.dark})),En=_.b.div(wn()),jn=_.b.h2(vn(),(function(n){return n.theme.gold}),(function(n){return n.theme.light})),kn=_.b.div(bn()),yn=_.b.p(hn()),Sn=_.b.p(gn()),Pn=_.b.span(pn(),(function(n){return n.theme.grayLight})),zn=_.b.div(fn()),_n=Object(_.c)(dn()),In=_.b.article(mn(),_n,(function(n){return n.theme.borderRadius}),(function(n){return n.background_img?n.background_img:n.theme.dark}),(function(n){return n.theme.light}),(function(n){return n.background_img})),Mn=Object(_.b)(Y.a)(sn(),(function(n){return n.theme.gray}),(function(n){return n.theme.borderRadius})),Nn=Object(_.b)(B.a)(ln(),(function(n){return n.theme.gray})),Wn=_.b.div(un(),(function(n){return n.theme.light})),Ln=_.b.div(on()),Rn=_.b.img(cn(),(function(n){return n.theme.borderRadius}),(function(n){return n.background_img})),Fn=_.b.div(an(),(function(n){return n.theme.gold}),(function(n){return n.theme.light})),An=_.b.div(rn()),Tn=_.b.div(tn(),(function(n){return n.hidden?"hidden":"visible"}),(function(n){return n.theme.grayLight})),Cn=_.b.p(en(),(function(n){return n.theme.light})),Un=_.b.section(nn(),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.dark}),(function(n){return n.theme.grayLight})),Gn=_.b.div(Z()),Jn=_.b.div(Q(),(function(n){return n.theme.borderRadius}),(function(n){return n.background_img})),Dn=_.b.h2(K(),(function(n){return n.theme.light})),Vn=_.b.div(X()),Yn=Object(_.b)(S.b)(q(),(function(n){return n.watchlisted?n.theme.red:"#fff"})),Bn=Object(_.b)(H.a)($(),(function(n){return n.theme.red})),Hn=t(10),$n=function(n){var e=n.firstMovieVisible,t=(n.lastMovieVisible,n.showNextMovies),r=n.showPreviousMovies;return a.a.createElement(kn,null,a.a.createElement(yn,null,0!==e&&a.a.createElement(Pn,{onClick:function(){return r()}},"Previous")),a.a.createElement(Sn,null,a.a.createElement(Pn,{onClick:function(){return t()}},"Next")))},qn=t(24),Xn=t(11),Kn=t.n(Xn),Qn=function(n){var e=n.id,t=n.posterPath,r=n.change;return a.a.createElement(Jn,{background_img:t,onClick:function(){return r(e)}})},Zn=function(n){var e=n.similarMovies,t=n.gridItems,r=n.change;return a.a.createElement(Un,null,a.a.createElement(Dn,null,"Similar Movies"),e&&e.length?a.a.createElement(Gn,null,e.slice(0,t).map((function(n){return a.a.createElement(Qn,{key:n.id,id:n.id,change:r,posterPath:"url(https://image.tmdb.org/t/p/w500".concat(n.poster_path,")")})}))):a.a.createElement("p",null,"None found."))},ne=t(35),ee=t.n(ne),te=function(n){var e=n.movie,t=n.toggleWatchlist,i=n.gridItems,c=Object(s.b)(),o=Object(s.c)(k).watchlist,u=Object(r.useState)(e),l=Object(Hn.a)(u,2),m=l[0],p=l[1],g=Object(r.useState)([]),h=Object(Hn.a)(g,2),b=h[0],v=h[1],x=Object(r.useState)(null),O=Object(Hn.a)(x,2),E=O[0],j=O[1],y=Object(r.useState)(e.watchlisted),S=Object(Hn.a)(y,2),P=S[0],z=S[1],_=E||m,I=(_.watchlisted,_.id),M=_.poster_path,N=_.title,W=_.tagline,L=_.genres,R=_.runtime,F=_.overview,A=_.release_date,T=_.original_language,C=_.budget,U=_.revenue,G=_.vote_average,J=_.homepage;t||(t=w);var D=Object(r.useState)(!1),V=Object(Hn.a)(D,2),Y=V[0],B=V[1],H=function(){B(!Y),Y?j(null):Q()},$="https://image.tmdb.org/t/p/".concat(i<=4?"w342":"w500").concat(e.poster_path);e.poster_path&&$||($=ee.a);var q="https://image.tmdb.org/t/p/w342".concat(M);M&&q||(q=ee.a);var X=function(){var n=Object(f.a)(d.a.mark((function n(){var t,r,a=arguments;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:I,n.next=3,Kn.a.get("/movies/".concat(t));case 3:r=n.sent,p(Object(qn.a)({},r.data,{watchlisted:e.watchlisted}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),K=function(){var n=Object(f.a)(d.a.mark((function n(e){var t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Kn.a.get("/movies/".concat(e));case 2:t=n.sent,r=o.find((function(n){return n.id===t.data.id})),j(r?Object(qn.a)({},t.data,{watchlisted:!0}):Object(qn.a)({},t.data,{watchlisted:!1}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Q=function(){var n=Object(f.a)(d.a.mark((function n(){var e,t,r=arguments;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:I,n.next=3,Kn.a.get("/movies/".concat(e,"/similar/1"));case 3:(t=n.sent).data.results&&v(t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=Object(f.a)(d.a.mark((function n(e){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:K(e),Q(e);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),nn=function(n){return"$"+n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},en=function(n){n.stopPropagation();var e=null;E?(e=Object(qn.a)({watchlisted:!E.watchlisted},E),j(Object(qn.a)({},E,{watchlisted:!E.watchlisted}))):e=m,c(t(e))};return Object(r.useEffect)((function(){(function(){var n=Object(f.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:X();case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){p(Object(qn.a)({},m,{watchlisted:e.watchlisted}))}),[e.watchlisted]),Object(r.useEffect)((function(){!function(){var n=E||m,e=o.find((function(e){return e.id===n.id}));z(!!e)}()}),[E,o]),a.a.createElement(In,{background_img:"url(".concat($,")"),onClick:H},a.a.createElement("h1",null,N),a.a.createElement(Vn,{onClick:en},a.a.createElement(Yn,{watchlisted:function(){var n=m;return o.find((function(e){return e.id===n.id}))?1:0}()})),a.a.createElement(Mn,{isOpen:Y,toggle:H},a.a.createElement(Nn,null,a.a.createElement(Vn,{onClick:en},a.a.createElement(Yn,{watchlisted:P?1:0})),a.a.createElement(Bn,{onClick:H}),a.a.createElement(Wn,null,a.a.createElement(Ln,null,a.a.createElement(Rn,{src:"".concat(q)})),a.a.createElement(Fn,null,a.a.createElement("h1",null,N),a.a.createElement("h2",null,W),a.a.createElement(An,null,L&&a.a.createElement(Tn,null,a.a.createElement("h3",null,"Genres"),L.slice(0,3).map((function(n){return a.a.createElement("p",{key:n.id},n.name)}))),R?a.a.createElement(Tn,null,a.a.createElement("h3",null,"Runtime"),a.a.createElement("p",null,R," minutes")):null,A?a.a.createElement(Tn,{hidden:window.innerWidth<375},a.a.createElement("h3",null,"Released"),a.a.createElement("p",null,new Date(A).getFullYear())):null,G?a.a.createElement(Tn,{hidden:window.innerWidth<375},a.a.createElement("h3",null,"Rating"),a.a.createElement("p",null,G)):null,T?a.a.createElement(Tn,{hidden:window.innerWidth<450},a.a.createElement("h3",null,"Language"),a.a.createElement("p",null,T.toUpperCase())):null,J?a.a.createElement(Tn,{hidden:window.innerWidth<450},a.a.createElement("h3",null,"Website"),a.a.createElement("p",null,a.a.createElement("a",{href:J},"Link"))):null,C?a.a.createElement(Tn,{hidden:window.innerWidth<450},a.a.createElement("h3",null,"Budget"),a.a.createElement("p",null,nn(C))):null,U?a.a.createElement(Tn,{hidden:window.innerWidth<450},a.a.createElement("h3",null,"Revenue"),a.a.createElement("p",null,nn(U))):null))),F&&a.a.createElement(Cn,null,F),a.a.createElement(Zn,{similarMovies:b,gridItems:i,change:Z}))))};function re(){var n=Object(l.a)(["\n  text-align: center;\n\n  p {\n    font-size: 1.25rem;\n    margin-bottom: 2rem;\n    color: ",";\n  }\n\n  a {\n    cursor: pointer;\n    font-size: 1.25rem;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n    padding: 0.75rem 1rem;\n    border-radius: ",";\n    color: ",";\n    border: 1px solid ",";\n    text-decoration: none !important;\n    transition: background 250ms ease-in;\n\n    &:hover {\n      color: ",";\n      background: ",";\n    }\n  }\n"]);return re=function(){return n},n}var ae=_.b.div(re(),(function(n){return n.theme.grayLight}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.light}),(function(n){return n.theme.gold}),(function(n){return n.theme.dark}),(function(n){return n.theme.gold})),ie=function(n){var e=n.children;return a.a.createElement(ae,null,e)},ce=function(n){var e=n.movies,t=n.status,i=n.maxPages,c=n.currentPage,o=n.toggleWatchlist,u=n.fetchNextPage,l=n.gridItems,s=Object(r.useState)(0),m=Object(Hn.a)(s,2),p=m[0],g=m[1],h=Object(r.useState)(l),b=Object(Hn.a)(h,2),v=b[0],w=b[1],x=function(){var n=Object(f.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(v+l>e.length&&c<i)){n.next=3;break}return n.next=3,u();case 3:g((function(n){return n+l})),w((function(n){return n+l}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){var n=Math.abs(v-p),t=l-n;v+t<e.length&&w((function(n){return n+t}))}),[l]),"failure"===t?a.a.createElement(ie,{message:"Oh no, something went wrong! Could not load movies."}):"idle"===t||"loading"===t?a.a.createElement(ie,null,a.a.createElement("p",{style:{textAlign:"left",marginTop:"1.5rem"}},"Loading...")):a.a.createElement(a.a.Fragment,null,a.a.createElement($n,{firstMovieVisible:p,lastMovieVisible:v,showPreviousMovies:function(){p>=l?(g((function(n){return n-l})),w((function(n){return n-l}))):(g(0),w(l))},showNextMovies:x}),a.a.createElement(zn,null,e.slice(p,v).map((function(n){return a.a.createElement(te,{key:n.id,status:t,movie:n,toggleWatchlist:o,gridItems:l})}))))},oe=function(n){n.status="loading"},ue=function(n,e){console.log(e.payload),n.error=e.payload,n.status="failure"},le=function(n,e){var t=e.payload,r=t.results,a=t.total_pages,i=n.movies.concat(r);n.movies=Array.from(new Set(i.map((function(n){return n.id})))).map((function(n){return i.find((function(e){return e.id===n}))})),n.pages=a,n.status="success"},se=function(n,e){var t=e.payload.id,r=n.movies.find((function(n){return n.id===t}));r&&(r.watchlisted=!r.watchlisted)},me=Object(p.b)({name:"NOW_PLAYING_MOVIES",initialState:{movies:[],pages:null,status:"idle",error:null},reducers:{toggle:se,startFetching:oe,fetchingFailed:ue,fetchingSuccess:le}}),de=me.actions,fe=de.toggle,pe=de.startFetching,ge=de.fetchingFailed,he=de.fetchingSuccess,be=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(pe()),e.prev=1,e.next=4,Kn.a.get("/movies/nowplaying/".concat(n));case 4:r=e.sent,t(he(r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(ge(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},ve=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(fe(n)),n.watchlisted?t(E(n)):t(O(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},we=me.reducer,xe=Object(p.b)({name:"UPCOMING",initialState:{movies:[],pages:null,status:"idle",error:null},reducers:{toggle:se,startFetching:oe,fetchingFailed:ue,fetchingSuccess:le}}),Oe=xe.actions,Ee=Oe.toggle,je=Oe.startFetching,ke=Oe.fetchingFailed,ye=Oe.fetchingSuccess,Se=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(je()),e.prev=1,e.next=4,Kn.a.get("/movies/upcoming/".concat(n));case 4:r=e.sent,t(ye(r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(ke(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},Pe=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Ee(n)),n.watchlisted?t(E(n)):t(O(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},ze=xe.reducer,_e=Object(p.b)({name:"TOP_RATED",initialState:{movies:[],pages:null,status:"idle",error:null},reducers:{toggle:se,startFetching:oe,fetchingFailed:ue,fetchingSuccess:le}}),Ie=_e.actions,Me=Ie.toggle,Ne=Ie.startFetching,We=Ie.fetchingFailed,Le=Ie.fetchingSuccess,Re=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ne()),e.prev=1,e.next=4,Kn.a.get("/movies/toprated/".concat(n));case 4:r=e.sent,t(Le(r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(We(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},Fe=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Me(n)),n.watchlisted?t(E(n)):t(O(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},Ae=_e.reducer,Te=Object(p.b)({name:"POPULAR_MOVIES",initialState:{movies:[],pages:null,status:"idle",error:null},reducers:{toggle:se,startFetching:oe,fetchingFailed:ue,fetchingSuccess:le}}),Ce=Te.actions,Ue=Ce.toggle,Ge=Ce.startFetching,Je=Ce.fetchingFailed,De=Ce.fetchingSuccess,Ve=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ge()),e.prev=1,e.next=4,Kn.a.get("/movies/popular/".concat(n));case 4:r=e.sent,t(De(r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Je(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},Ye=function(n){return function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Ue(n)),n.watchlisted?t(E(n)):t(O(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},Be=Te.reducer,He=function(n){switch(n){case"NOW_PLAYING":return be;case"UPCOMING":return Se;case"TOP_RATED":return Re;case"POPULAR":return Ve}},$e=function(){var n=Object(r.useState)(0),e=Object(Hn.a)(n,2),t=e[0],a=e[1];return Object(r.useLayoutEffect)((function(){function n(){a(window.innerWidth)}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),[t]},qe=function(n){var e=n.type,t=n.selector,i=Object(s.b)(),c=$e(),o=Object(Hn.a)(c,1)[0],u=Object(r.useState)(window.innerWidth>=1200?6:window.innerWidth>=900?5:window.innerWidth>=700?4:window.innerWidth>=375?3:2),l=Object(Hn.a)(u,2),m=l[0],d=l[1],f=Object(r.useState)(1),p=Object(Hn.a)(f,2),g=p[0],h=p[1],b=Object(s.c)((function(n){return n[t]})),v=b.movies,w=b.pages,O=b.status,E=function(n){switch(n){case"NOW_PLAYING":return ve;case"UPCOMING":return Pe;case"TOP_RATED":return Fe;case"POPULAR":return Ye}}(e);return Object(r.useEffect)((function(){var n=He(e);i(n(1)),i(x())}),[]),Object(r.useLayoutEffect)((function(){d(o>=1200?6:o>=900?5:o>=700?4:o>=375?3:2)}),[o]),a.a.createElement(ce,{movies:v,status:O,toggleWatchlist:E,fetchNextPage:function(){var n=He(e);h(g+1),i(n(g+1))},gridItems:m,currentPage:g,maxPages:w})},Xe=function(n){var e=n.type,t=n.selector,r=n.heading;return a.a.createElement(En,null,a.a.createElement(jn,null,r),a.a.createElement(qe,{type:e,selector:t}))},Ke=function(){return a.a.createElement(On,null,a.a.createElement(Xe,{type:"NOW_PLAYING",selector:"nowPlayingMovies",heading:"Now Playing"}),a.a.createElement(Xe,{type:"TOP_RATED",selector:"topRatedMovies",heading:"Top Rated"}),a.a.createElement(Xe,{type:"POPULAR",selector:"popularMovies",heading:"Popular"}),a.a.createElement(Xe,{type:"UPCOMING",selector:"upcomingMovies",heading:"Upcoming"}))},Qe=t(58),Ze=t.n(Qe),nt=t(59),et=t.n(nt);function tt(){var n=Object(l.a)(["\n  flex: 100%;\n  font-size: 1.125rem;\n  padding-left: 2rem;\n  margin-bottom: 0;\n  text-align: left;\n"]);return tt=function(){return n},n}function rt(){var n=Object(l.a)(["\n  position: relative;\n  top: 10px;\n  left: 13px;\n  flex-basis: 45px;\n  cursor: none;\n"]);return rt=function(){return n},n}function at(){var n=Object(l.a)(["\n  color: ",";\n"]);return at=function(){return n},n}function it(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  max-width: 500px;\n  margin: 4rem auto 0 auto;\n  padding: 1rem;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: ",";\n"]);return it=function(){return n},n}function ct(){var n=Object(l.a)(["\n  font-size: 2rem;\n  font-weight: 400;\n  color: #c3c3c3;\n"]);return ct=function(){return n},n}function ot(){var n=Object(l.a)(["\n  font-size: 4rem;\n  text-align: center;\n"]);return ot=function(){return n},n}function ut(){var n=Object(l.a)(["\n  max-width: 1200px;\n  min-height: 90vh;\n  text-align: center;\n  margin: 0 0.5rem 2rem;\n  padding: 2rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  @media (min-width: 600px) {\n    padding: 2rem 2rem;\n  }\n\n  @media (min-width: 1200px) {\n    margin: 0 auto 2rem;\n  }\n"]);return ut=function(){return n},n}function lt(){var n=Object(l.a)(["\n  color: #fff;\n\n  @media (min-width: 1px) {\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n      url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: top;\n  }\n\n  @media (min-width: 850px) {\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n      url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: unset;\n  }\n"]);return lt=function(){return n},n}var st=Object(_.b)(On)(lt(),Ze.a,et.a),mt=_.b.section(ut()),dt=_.b.h1(ot()),ft=_.b.h2(ct()),pt=_.b.div(it(),(function(n){return n.theme.borderRadius})),gt=Object(_.b)(Yn)(at(),(function(n){return n.theme.red})),ht=Object(_.b)(Vn)(rt()),bt=_.b.p(tt()),vt=function(){return a.a.createElement("div",{style:{background:"hsl(250, 40%, 5%)"}},a.a.createElement(st,null,a.a.createElement(mt,null,a.a.createElement(dt,null,"Movie Explorer"),a.a.createElement(ft,null,"Discover awesome movies."),a.a.createElement(pt,null,a.a.createElement(ht,null,a.a.createElement(gt,null)),a.a.createElement(bt,null,"click the heart icon to add to watchlist")))))},wt=function(){return a.a.createElement("div",null,a.a.createElement(vt,null),a.a.createElement(Ke,null))},xt=t(29);function Ot(){var n=Object(l.a)(["\n  font-size: 2rem !important;\n  margin-bottom: 2rem;\n"]);return Ot=function(){return n},n}var Et=Object(_.b)(jn)(Ot()),jt=function(){var n=Object(s.b)(),e=Object(s.c)(k).watchlist,t=Object(r.useState)([]),i=Object(Hn.a)(t,2),c=i[0],u=i[1],l=function(){var n=Object(f.a)(d.a.mark((function n(){var t,r,a,i,c,o,l,s,f,g,h,b;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=[],r=!0,a=!1,i=void 0,n.prev=4,c=e[Symbol.iterator]();case 6:if(r=(o=c.next()).done){n.next=19;break}return l=o.value,s=l.id,n.next=11,Kn.a.get("/movies/".concat(s,"/recommendations/1"));case 11:f=n.sent,(g=f.data.results||[]).length&&(g=g.slice(0,5)),h=p(t,g),t=Object(xt.a)(h);case 16:r=!0,n.next=6;break;case 19:n.next=25;break;case 21:n.prev=21,n.t0=n.catch(4),a=!0,i=n.t0;case 25:n.prev=25,n.prev=26,r||null==c.return||c.return();case 28:if(n.prev=28,!a){n.next=31;break}throw i;case 31:return n.finish(28);case 32:return n.finish(25);case 33:b=m(t),u(b);case 35:case"end":return n.stop()}}),n,null,[[4,21,25,33],[26,,28,32]])})));return function(){return n.apply(this,arguments)}}(),m=function(n){return n.filter((function(n){return!e.some((function(e){return e.id===n.id}))}))},p=function(n,e){return[].concat(Object(xt.a)(n),Object(xt.a)(e)).filter((function(n,e,t){return e===t.findIndex((function(e){return e.id===n.id}))}))};return Object(r.useEffect)((function(){n(x())}),[]),Object(r.useEffect)((function(){l()}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Et,null,"In Your Watchlist"),e.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(En,null,a.a.createElement(zn,null,e.map((function(n){return a.a.createElement(te,{key:n.id,movie:n,toggleWatchlist:j})})))),c.length>0&&a.a.createElement(jn,{style:{marginBottom:"3rem"}},"Based on your watchlist, you ",a.a.createElement("em",null,"may")," enjoy..."),a.a.createElement(zn,null,c.map((function(n){return a.a.createElement(te,{key:n.id,movie:n,toggleWatchlist:j})})))):a.a.createElement(ie,null,a.a.createElement("p",null,"There doesn't seem to be anything in your watchlist..."),a.a.createElement(o.b,{to:"/"},"Let's browse some movies")))};function kt(){var n=Object(l.a)(["\n  padding: 5rem 0.5rem;\n\n  @media (min-width: 600px) {\n    padding: 5rem 2rem;\n  }\n"]);return kt=function(){return n},n}var yt=Object(_.b)(On)(kt()),St=function(){return a.a.createElement(yt,null,a.a.createElement(jt,null))},Pt=function(){return a.a.createElement(o.a,null,a.a.createElement(V,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",exact:!0,component:wt}),a.a.createElement(u.a,{path:"/watchlist",component:St}),a.a.createElement(u.a,{render:function(){return a.a.createElement("h2",{style:{textAlign:"center",marginTop:"3rem"}},"404 Page Not Found")}})))},zt=Object(p.a)({reducer:{watchlist:y,nowPlayingMovies:we,topRatedMovies:Ae,popularMovies:Be,upcomingMovies:ze}});c.a.render(a.a.createElement(_.a,{theme:{red:"hsl(0, 50%, 50%)",light:"#fff",gray:"hsl(250,5%,15%)",dark:"hsl(250, 40%, 5%)",gold:"hsl(46, 50%, 50%)",grayLight:"hsl(46,0%,60%)",borderRadius:"0.3rem"}},a.a.createElement(s.a,{store:zt},a.a.createElement(Pt,null))),document.getElementById("root"))},35:function(n,e,t){n.exports=t.p+"static/media/poster_unavailable.d579328a.png"},58:function(n,e,t){n.exports=t.p+"static/media/iron_man_md.11329b7e.jpg"},59:function(n,e,t){n.exports=t.p+"static/media/iron_man_lg.55f01322.jpg"},62:function(n,e,t){n.exports=t(104)},67:function(n,e,t){},69:function(n,e,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.275f55e1.chunk.js.map