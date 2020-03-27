(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{104:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(20),c=t.n(i),o=(t(67),t(68),t(22)),u=t(23),l=(t(69),t(9)),s=t(4),m=t(11),d=t(5),f=t.n(d),p=t(8),g=t(17),h=Object(g.b)({name:"WATCHLIST",initialState:{watchlist:[]},reducers:{getLocalStorageSuccess:function(e,n){var t=n.payload;e.watchlist=t},add:function(e,n){var t=n.payload;e.watchlist.find((function(e){return e.id===t.id}))||e.watchlist.push(t)},remove:function(e,n){var t=n.payload,r=e.watchlist.findIndex((function(e){return e.id===t.id}));-1!==r&&e.watchlist.splice(r,1)}}}),b=h.actions,v=b.getLocalStorageSuccess,x=b.add,w=b.remove,O=function(){return function(){var e=Object(p.a)(f.a.mark((function e(n,t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r=JSON.parse(localStorage.getItem("movies")||"[]"),n(v(r))}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},j=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=JSON.parse(localStorage.getItem("movies")||"[]"),r.find((function(n){return n.id===e.id}))||(r.push(e),t(x(e))),localStorage.setItem("movies",JSON.stringify(r));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){var r,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=JSON.parse(localStorage.getItem("movies")||"[]"),-1!==(a=r.findIndex((function(n){return n.id===e.id})))&&(r.splice(a,1),t(w(e))),localStorage.setItem("movies",JSON.stringify(r));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t,r){var a,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=r().watchlist.watchlist,i=a.find((function(n){return n.id===e.id})),t(i?E(e):j(e));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},y=function(e){return{watchlist:e.watchlist.watchlist}},P=h.reducer,S=t(27),M=t(56),z=t(105),_=t(3);function I(){var e=Object(s.a)(["\n  color: ",";\n  font-size: 1.25rem;\n  margin-left: 2rem;\n"]);return I=function(){return e},e}function N(){var e=Object(s.a)(["\n  color: ",";\n  background: hsl(46, 80%, 40%);\n  vertical-align: baseline;\n  padding-right: 0.6em;\n  padding-left: 0.55em;\n  margin-left: 0.3rem;\n  font-size: 0.8rem;\n  height: 19px;\n  width: 20px;\n  line-height: 0.9;\n  position: absolute;\n  top: 16px;\n  right: -7px;\n  display: flex;\n  justify-content: center;\n"]);return N=function(){return e},e}function W(){var e=Object(s.a)(["\n  padding: 0.75rem;\n  color: ",";\n  font-weight: bold;\n  letter-spacing: 1px;\n  position: relative;\n"]);return W=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  list-style: none;\n  margin-bottom: 0;\n\n  a {\n    text-decoration-color: ",";\n  }\n"]);return R=function(){return e},e}function L(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 1.25rem;\n  height: 37px;\n  width: 42px;\n  background: ",";\n  color: ",";\n"]);return L=function(){return e},e}function F(){var e=Object(s.a)(["\n  max-width: 1100px;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  padding: 0 1rem;\n"]);return F=function(){return e},e}function A(){var e=Object(s.a)(["\n  background: ",";\n  color: ",";\n  height: 60px;\n  width: 100%;\n  position: fixed;\n  z-index: 12;\n"]);return A=function(){return e},e}var T=_.b.nav(A(),(function(e){return e.theme.gray}),(function(e){return e.theme.light})),C=_.b.div(F()),U=_.b.div(L(),(function(e){return e.theme.dark}),(function(e){return e.theme.gold})),G=_.b.ul(R(),(function(e){return e.theme.gold})),D=_.b.li(W(),(function(e){return e.theme.light})),J=Object(_.b)(z.a)(N(),(function(e){return e.theme.light})),Y=Object(_.b)(S.a)(I(),(function(e){return e.theme.light})),V=function(e){var n=Object(r.useState)(!1),t=Object(l.a)(n,2),i=(t[0],t[1],Object(m.c)(y).watchlist);return a.a.createElement(T,null,a.a.createElement(C,null,a.a.createElement(o.b,{to:"/"},a.a.createElement(U,null,a.a.createElement(M.a,null))),a.a.createElement(G,null,a.a.createElement(o.b,{to:"/"},a.a.createElement(D,null,"Home")),a.a.createElement(o.b,{to:"/watchlist"},a.a.createElement(D,null,"Watchlist",a.a.createElement(J,{pill:!0},a.a.createElement("span",null,i.length)))),a.a.createElement(D,null,a.a.createElement("a",{href:"https://github.com/julianvazq/movie-explorer",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(Y,null))))))},B=t(107),H=t(106),$=t(57);function q(){var e=Object(s.a)(["\n  color: ",";\n  font-size: 2rem;\n  position: absolute;\n  right: 6px;\n  top: 3px;\n  cursor: pointer;\n"]);return q=function(){return e},e}function K(){var e=Object(s.a)(["\n  font-size: 1.125rem;\n  color: ",";\n  transition: color 250ms ease-in;\n"]);return K=function(){return e},e}function Q(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 50%;\n  position: absolute;\n  top: 4px;\n  left: 5px;\n  height: 35px;\n  width: 37px;\n  background: hsla(46, 0%, 50%, 0.5);\n  transform: scale(1);\n  transition: all 250ms ease-in;\n\n  @media (min-width: 900px) {\n    &:hover {\n      transform: scale(1.1);\n      background: hsla(46, 0%, 50%, 0.5);\n    }\n  }\n"]);return Q=function(){return e},e}function X(){var e=Object(s.a)(["\n  font-size: 1.25rem;\n  color: ",";\n"]);return X=function(){return e},e}function Z(){var e=Object(s.a)(["\n  border-radius: ",";\n  background: ",";\n  min-height: 150px;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n"]);return Z=function(){return e},e}function ee(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: 0.25rem;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media (min-width: 375px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: 700px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (min-width: 900px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(6, 1fr);\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  /* min-height: 150px; */\n  padding: 1.125rem;\n  border-radius: ",";\n  background: ",";\n\n  p {\n    margin-bottom: 0;\n    color: ",";\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  margin: 0;\n  padding: 0.5rem 1.125rem 1.125rem;\n  font-size: 0.9rem;\n  color: ",";\n  line-height: 1.5;\n"]);return te=function(){return e},e}function re(){var e=Object(s.a)(["\n  visibility: ",";\n\n  h3 {\n    font-size: 0.8rem;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    color: "," !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  p {\n    margin-bottom: 0;\n    font-size: 0.9rem;\n  }\n\n  @media (min-width: 450px) {\n    flex: 50%;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-row-gap: 0.125rem;\n  margin-top: 0.5rem;\n\n  @media (min-width: 375px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 0.75rem;\n    grid-row-gap: 0.5rem;\n  }\n\n  @media (min-width: 450px) {\n    /* grid-template-columns: repeat(2, 1fr); */\n    /* grid-row-gap: 0.5rem; */\n  }\n"]);return ae=function(){return e},e}function ie(){var e=Object(s.a)(["\n  flex: 50%;\n  padding-left: 0.5rem;\n\n  /* Title */\n  h1 {\n    font-size: 1rem;\n    font-weight: 700;\n    margin-bottom: 0.25rem;\n  }\n  /* Tagline */\n  h2 {\n    font-size: 0.9rem;\n    font-weight: 400;\n    color: ",";\n    margin-bottom: 0;\n    margin-top: 0.25rem;\n  }\n\n  a {\n    color: ",";\n  }\n\n  @media (min-width: 600px) {\n    flex: 75%;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(s.a)(["\n  width: 90%;\n  border-radius: ",";\n  background: ",";\n  background-position: left;\n  background-size: contain;\n  background-repeat: no-repeat;\n\n  @media (min-width: 450px) {\n    width: 90%;\n    height: auto;\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(s.a)(["\n  flex: 50%;\n"]);return oe=function(){return e},e}function ue(){var e=Object(s.a)(["\n  color: ",";\n  padding: 1.25rem 1.25rem 0.625rem;\n  display: flex;\n  min-height: 200px;\n"]);return ue=function(){return e},e}function le(){var e=Object(s.a)(["\n  padding: 0;\n  background: "," !important;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.52), 0 2px 2px rgba(0, 0, 0, 0.52),\n    0 4px 4px rgba(0, 0, 0, 0.52), 0 8px 8px rgba(0, 0, 0, 0.52),\n    0 16px 16px rgba(0, 0, 0, 0.52);\n"]);return le=function(){return e},e}function se(){var e=Object(s.a)(["\n  background: "," !important;\n  border-radius: ",";\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.22), 0 2px 2px rgba(0, 0, 0, 0.22),\n    0 4px 4px rgba(0, 0, 0, 0.22), 0 8px 8px rgba(0, 0, 0, 0.22),\n    0 16px 16px rgba(0, 0, 0, 0.22);\n  top: 9%;\n\n  @media (min-width: 600px) {\n    top: 0%;\n  }\n\n  @media (min-width: 700px) {\n    max-width: 600px !important;\n  }\n"]);return se=function(){return e},e}function me(){var e=Object(s.a)(["\n  box-shadow: 0px 0px 5px 1px rgba(133, 133, 133, 0.15);\n  border-radius: ",";\n  background: ",";\n  min-height: 200px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transform: scale(1);\n  transition: background 250ms ease-in, transform 250ms ease-in-out;\n  color: ",";\n  display: flex;\n\n  h1 {\n    font-size: 0.8rem;\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n    margin: auto;\n    padding: 0 0.5rem;\n    align-self: center;\n    text-align: center;\n  }\n\n  &:hover {\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n      ",";\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: scale(1.1);\n    z-index: 10;\n    cursor: pointer;\n  }\n\n  &:hover h1 {\n    opacity: 1;\n  }\n\n  @media (min-width: 500px) {\n    min-height: 250px;\n\n    h1 {\n      font-size: 1.25rem;\n    }\n  }\n\n  @media (min-width: 750px) {\n    min-height: 375px;\n  }\n"]);return me=function(){return e},e}function de(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: 0.25rem;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media (min-width: 375px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: 700px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (min-width: 900px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(6, 1fr);\n  }\n"]);return de=function(){return e},e}function fe(){var e=Object(s.a)(["\n  display: inline-block;\n  padding: 1rem 1rem 0.5rem;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-weight: bold;\n  color: ",";\n  cursor: pointer;\n"]);return fe=function(){return e},e}function pe(){var e=Object(s.a)(["\n  flex: 50%;\n  margin-bottom: 0;\n  text-align: right;\n"]);return pe=function(){return e},e}function ge(){var e=Object(s.a)(["\n  flex: 50%;\n  margin-bottom: 0;\n  text-align: left;\n"]);return ge=function(){return e},e}function he(){var e=Object(s.a)(["\n  display: flex;\n"]);return he=function(){return e},e}function be(){var e=Object(s.a)(["\n  font-size: 1.25rem;\n  margin-bottom: 0;\n  padding-bottom: 0.5rem;\n  display: inline-block;\n  border-bottom: 1.5px solid ",";\n  color: ",";\n\n  @media (min-width: 500px) {\n    font-size: 1.5rem;\n  }\n\n  @media (min-width: 500px) {\n    font-size: 1.5rem;\n  }\n"]);return be=function(){return e},e}function ve(){var e=Object(s.a)(["\n  margin-bottom: 2rem;\n"]);return ve=function(){return e},e}function xe(){var e=Object(s.a)(["\n  padding: 2rem 0.5rem;\n  background-color: ",";\n  min-height: 100vh;\n\n  @media (min-width: 600px) {\n    padding: 2rem;\n  }\n\n  @media (min-width: 1200px) {\n    margin: 0rem auto;\n  }\n"]);return xe=function(){return e},e}var we=_.b.section(xe(),(function(e){return e.bg?e.bg:e.theme.dark})),Oe=_.b.div(ve()),je=_.b.h2(be(),(function(e){return e.theme.gold}),(function(e){return e.theme.light})),Ee=_.b.div(he()),ke=_.b.p(ge()),ye=_.b.p(pe()),Pe=_.b.span(fe(),(function(e){return e.theme.grayLight})),Se=_.b.div(de()),Me=_.b.article(me(),(function(e){return e.theme.borderRadius}),(function(e){return e.background_img?e.background_img:e.theme.dark}),(function(e){return e.theme.light}),(function(e){return e.background_img})),ze=Object(_.b)(B.a)(se(),(function(e){return e.theme.gray}),(function(e){return e.theme.borderRadius})),_e=Object(_.b)(H.a)(le(),(function(e){return e.theme.gray})),Ie=_.b.div(ue(),(function(e){return e.theme.light})),Ne=_.b.div(oe()),We=_.b.img(ce(),(function(e){return e.theme.borderRadius}),(function(e){return e.background_img})),Re=_.b.div(ie(),(function(e){return e.theme.gold}),(function(e){return e.theme.light})),Le=_.b.div(ae()),Fe=_.b.div(re(),(function(e){return e.hidden?"hidden":"visible"}),(function(e){return e.theme.grayLight})),Ae=_.b.p(te(),(function(e){return e.theme.light})),Te=_.b.section(ne(),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.dark}),(function(e){return e.theme.grayLight})),Ce=_.b.div(ee()),Ue=_.b.div(Z(),(function(e){return e.theme.borderRadius}),(function(e){return e.background_img})),Ge=_.b.h2(X(),(function(e){return e.theme.light})),De=_.b.div(Q()),Je=Object(_.b)(S.b)(K(),(function(e){return e.watchlisted?e.theme.red:"#fff"})),Ye=Object(_.b)($.a)(q(),(function(e){return e.theme.red})),Ve=function(e){e.status="loading"},Be=function(e,n){console.log(n.payload),e.error=n.payload,e.status="failure"},He=function(e,n){var t=n.payload,r=t.results,a=t.total_pages,i=e.movies.concat(r);e.movies=Array.from(new Set(i.map((function(e){return e.id})))).map((function(e){return i.find((function(n){return n.id===e}))})),e.pages=a,e.status="success"},$e=function(e,n){var t=n.payload.id,r=e.movies.find((function(e){return e.id===t}));r&&(r.watchlisted=!r.watchlisted)},qe=t(12),Ke=t.n(qe),Qe=Object(g.b)({name:"NOW_PLAYING_MOVIES",initialState:{movies:[],pages:null,status:"idle",error:null},reducers:{toggle:$e,startFetching:Ve,fetchingFailed:Be,fetchingSuccess:He}}),Xe=Qe.actions,Ze=Xe.toggle,en=Xe.startFetching,nn=Xe.fetchingFailed,tn=Xe.fetchingSuccess,rn=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(en()),n.prev=1,n.next=4,Ke.a.get("/movies/nowplaying/".concat(e));case 4:r=n.sent,t(tn(r.data)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(nn(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},an=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(Ze(e)),e.watchlisted?t(E(e)):t(j(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},cn=function(e){return{movies:e.nowPlayingMovies.movies,pages:e.nowPlayingMovies.pages,status:e.nowPlayingMovies.status}},on=Qe.reducer,un=Object(g.b)({name:"TOP_RATED",initialState:{movies:[],pages:null,status:"idle",error:null},reducers:{toggle:$e,startFetching:Ve,fetchingFailed:Be,fetchingSuccess:He}}),ln=un.actions,sn=ln.toggle,mn=ln.startFetching,dn=ln.fetchingFailed,fn=ln.fetchingSuccess,pn=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(mn()),n.prev=1,n.next=4,Ke.a.get("/movies/toprated/".concat(e));case 4:r=n.sent,t(fn(r.data)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(dn(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},gn=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(sn(e)),e.watchlisted?t(E(e)):t(j(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},hn=function(e){return{movies:e.topRatedMovies.movies,pages:e.topRatedMovies.pages,status:e.topRatedMovies.status}},bn=un.reducer,vn=Object(g.b)({name:"UPCOMING",initialState:{movies:[],pages:null,status:"idle",error:null},reducers:{toggle:$e,startFetching:Ve,fetchingFailed:Be,fetchingSuccess:He}}),xn=vn.actions,wn=xn.toggle,On=xn.startFetching,jn=xn.fetchingFailed,En=xn.fetchingSuccess,kn=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(On()),n.prev=1,n.next=4,Ke.a.get("/movies/upcoming/".concat(e));case 4:r=n.sent,t(En(r.data)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(jn(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},yn=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(wn(e)),e.watchlisted?t(E(e)):t(j(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Pn=function(e){return{movies:e.upcomingMovies.movies,pages:e.upcomingMovies.pages,status:e.upcomingMovies.status}},Sn=vn.reducer,Mn=Object(g.b)({name:"POPULAR_MOVIES",initialState:{movies:[],pages:null,status:"idle",error:null},reducers:{toggle:$e,startFetching:Ve,fetchingFailed:Be,fetchingSuccess:He}}),zn=Mn.actions,_n=zn.toggle,In=zn.startFetching,Nn=zn.fetchingFailed,Wn=zn.fetchingSuccess,Rn=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(In()),n.prev=1,n.next=4,Ke.a.get("/movies/popular/".concat(e));case 4:r=n.sent,t(Wn(r.data)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(Nn(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},Ln=function(e){return function(){var n=Object(p.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(_n(e)),e.watchlisted?t(E(e)):t(j(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Fn=function(e){return{movies:e.popularMovies.movies,pages:e.popularMovies.pages,status:e.popularMovies.status}},An=Mn.reducer,Tn=function(e){var n=e.firstMovieVisible,t=(e.lastMovieVisible,e.showNextMovies),r=e.showPreviousMovies;return a.a.createElement(Ee,null,a.a.createElement(ke,null,0!==n&&a.a.createElement(Pe,{onClick:function(){return r()}},"Previous")),a.a.createElement(ye,null,a.a.createElement(Pe,{onClick:function(){return t()}},"Next")))},Cn=t(24),Un=function(e){var n=e.id,t=e.posterPath,r=e.change;return a.a.createElement(Ue,{background_img:t,onClick:function(){return r(n)}})},Gn=function(e){var n=e.similarMovies,t=e.gridItems,r=e.change;return a.a.createElement(Te,null,a.a.createElement(Ge,null,"Similar Movies"),n&&n.length?a.a.createElement(Ce,null,n.slice(0,t).map((function(e){return a.a.createElement(Un,{key:e.id,id:e.id,change:r,posterPath:"url(https://image.tmdb.org/t/p/w500".concat(e.poster_path,")")})}))):a.a.createElement("p",null,"None found."))},Dn=t(35),Jn=t.n(Dn),Yn=function(e){var n=e.movie,t=e.toggleWatchlist,i=e.gridItems,c=Object(m.b)(),o=Object(m.c)(y).watchlist,u=Object(r.useState)(n),s=Object(l.a)(u,2),d=s[0],g=s[1],h=Object(r.useState)([]),b=Object(l.a)(h,2),v=b[0],x=b[1],O=Object(r.useState)(null),j=Object(l.a)(O,2),E=j[0],k=j[1],P=Object(r.useState)(n.watchlisted),S=Object(l.a)(P,2),M=S[0],z=S[1],_=E||d,I=(_.watchlisted,_.id),N=_.poster_path,W=_.title,R=_.tagline,L=_.genres,F=_.runtime,A=_.overview,T=_.release_date,C=_.original_language,U=_.budget,G=_.revenue,D=_.vote_average,J=_.homepage;t||(t=w);var Y=Object(r.useState)(!1),V=Object(l.a)(Y,2),B=V[0],H=V[1],$=function(){H(!B),B?k(null):Z()},q="https://image.tmdb.org/t/p/".concat(i<=4?"w342":"w500").concat(n.poster_path);n.poster_path&&q||(q=Jn.a);var K="https://image.tmdb.org/t/p/w342".concat(N);N&&K||(K=Jn.a);var Q=function(){var e=Object(p.a)(f.a.mark((function e(){var t,r,a=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:I,e.next=3,Ke.a.get("/movies/".concat(t));case 3:r=e.sent,g(Object(Cn.a)({},r.data,{watchlisted:n.watchlisted}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(p.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ke.a.get("/movies/".concat(n));case 2:t=e.sent,r=o.find((function(e){return e.id===t.data.id})),k(r?Object(Cn.a)({},t.data,{watchlisted:!0}):Object(Cn.a)({},t.data,{watchlisted:!1}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(p.a)(f.a.mark((function e(){var n,t,r=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:I,e.next=3,Ke.a.get("/movies/".concat(n,"/similar/1"));case 3:(t=e.sent).data.results&&x(t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(p.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(n),Z(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ne=function(e){return"$"+e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},te=function(e){e.stopPropagation();var n=null;E?(n=Object(Cn.a)({watchlisted:!E.watchlisted},E),k(Object(Cn.a)({},E,{watchlisted:!E.watchlisted}))):n=d,c(t(n))};return Object(r.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){g(Object(Cn.a)({},d,{watchlisted:n.watchlisted}))}),[n.watchlisted]),Object(r.useEffect)((function(){!function(){var e=E||d,n=o.find((function(n){return n.id===e.id}));z(!!n)}()}),[E,o]),a.a.createElement(Me,{background_img:"url(".concat(q,")"),onClick:$},a.a.createElement("h1",null,W),a.a.createElement(De,{onClick:te},a.a.createElement(Je,{watchlisted:function(){var e=d;return o.find((function(n){return n.id===e.id}))?1:0}()})),a.a.createElement(ze,{isOpen:B,toggle:$},a.a.createElement(_e,null,a.a.createElement(De,{onClick:te},a.a.createElement(Je,{watchlisted:M?1:0})),a.a.createElement(Ye,{onClick:$}),a.a.createElement(Ie,null,a.a.createElement(Ne,null,a.a.createElement(We,{src:"".concat(K)})),a.a.createElement(Re,null,a.a.createElement("h1",null,W),a.a.createElement("h2",null,R),a.a.createElement(Le,null,L&&a.a.createElement(Fe,null,a.a.createElement("h3",null,"Genres"),L.slice(0,3).map((function(e){return a.a.createElement("p",{key:e.id},e.name)}))),F?a.a.createElement(Fe,null,a.a.createElement("h3",null,"Runtime"),a.a.createElement("p",null,F," minutes")):null,T?a.a.createElement(Fe,{hidden:window.innerWidth<375},a.a.createElement("h3",null,"Released"),a.a.createElement("p",null,new Date(T).getFullYear())):null,D?a.a.createElement(Fe,{hidden:window.innerWidth<375},a.a.createElement("h3",null,"Rating"),a.a.createElement("p",null,D)):null,C?a.a.createElement(Fe,{hidden:window.innerWidth<450},a.a.createElement("h3",null,"Language"),a.a.createElement("p",null,C.toUpperCase())):null,J?a.a.createElement(Fe,{hidden:window.innerWidth<450},a.a.createElement("h3",null,"Website"),a.a.createElement("p",null,a.a.createElement("a",{href:J},"Link"))):null,U?a.a.createElement(Fe,{hidden:window.innerWidth<450},a.a.createElement("h3",null,"Budget"),a.a.createElement("p",null,ne(U))):null,G?a.a.createElement(Fe,{hidden:window.innerWidth<450},a.a.createElement("h3",null,"Revenue"),a.a.createElement("p",null,ne(G))):null))),A&&a.a.createElement(Ae,null,A),a.a.createElement(Gn,{similarMovies:v,gridItems:i,change:ee}))))};function Vn(){var e=Object(s.a)(["\n  text-align: center;\n\n  p {\n    font-size: 1.25rem;\n    margin-bottom: 2rem;\n    color: ",";\n  }\n\n  a {\n    cursor: pointer;\n    font-size: 1.25rem;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n    padding: 0.75rem 1rem;\n    border-radius: ",";\n    color: ",";\n    border: 1px solid ",";\n    text-decoration: none !important;\n    transition: background 250ms ease-in;\n\n    &:hover {\n      color: ",";\n      background: ",";\n    }\n  }\n"]);return Vn=function(){return e},e}var Bn=_.b.div(Vn(),(function(e){return e.theme.grayLight}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.light}),(function(e){return e.theme.gold}),(function(e){return e.theme.dark}),(function(e){return e.theme.gold})),Hn=function(e){var n=e.children;return a.a.createElement(Bn,null,n)},$n=function(e){var n=e.movies,t=e.status,i=e.maxPages,c=e.currentPage,o=e.toggleWatchlist,u=e.fetchNextPage,s=e.gridItems,m=Object(r.useState)(0),d=Object(l.a)(m,2),g=d[0],h=d[1],b=Object(r.useState)(s),v=Object(l.a)(b,2),x=v[0],w=v[1],O=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(x+s>n.length&&c<i)){e.next=3;break}return e.next=3,u();case 3:h((function(e){return e+s})),w((function(e){return e+s}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=Math.abs(x-g),t=s-e;x+t<n.length&&w((function(e){return e+t}))}),[s]),"failure"===t?a.a.createElement(Hn,{message:"Oh no, something went wrong! Could not load movies."}):"idle"===t||"loading"===t?a.a.createElement(Hn,null,a.a.createElement("p",{style:{textAlign:"left",marginTop:"1.5rem"}},"Loading...")):a.a.createElement(a.a.Fragment,null,a.a.createElement(Tn,{firstMovieVisible:g,lastMovieVisible:x,showPreviousMovies:function(){g>=s?(h((function(e){return e-s})),w((function(e){return e-s}))):(h(0),w(s))},showNextMovies:O}),a.a.createElement(Se,null,n.slice(g,x).map((function(e){return a.a.createElement(Yn,{key:e.id,status:t,movie:e,toggleWatchlist:o,gridItems:s})}))))},qn=function(e){switch(e){case"NOW_PLAYING":return rn;case"UPCOMING":return kn;case"TOP_RATED":return pn;case"POPULAR":return Rn}},Kn=function(){var e=Object(r.useState)(0),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(r.useLayoutEffect)((function(){function e(){a(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),[t]},Qn=function(e){var n=e.type,t=Object(m.b)(),i=Kn(),c=Object(l.a)(i,1)[0],o=Object(r.useState)(window.innerWidth>=1200?6:window.innerWidth>=900?5:window.innerWidth>=700?4:window.innerWidth>=375?3:2),u=Object(l.a)(o,2),s=u[0],d=u[1],f=Object(r.useState)(1),p=Object(l.a)(f,2),g=p[0],h=p[1],b=Object(r.useState)(1),v=Object(l.a)(b,2),x=v[0],w=v[1],j=Object(r.useState)(1),E=Object(l.a)(j,2),k=E[0],y=E[1],P=Object(r.useState)(1),S=Object(l.a)(P,2),M=S[0],z=S[1],_=Object(m.c)(cn),I=_.movies,N=_.pages,W=_.status,R=Object(m.c)(Pn),L=R.movies,F=R.pages,A=R.status,T=Object(m.c)(hn),C=T.movies,U=T.pages,G=T.status,D=Object(m.c)(Fn),J=D.movies,Y=D.pages,V=D.status,B=function(){var e=null;switch(n){case"NOW_PLAYING":h((function(e){return e+1})),e=qn(n),t(e(g+1));break;case"UPCOMING":w((function(e){return e+1})),e=qn(n),t(e(x+1));break;case"TOP_RATED":y((function(e){return e+1})),e=qn(n),t(e(k+1));break;case"POPULAR":z((function(e){return e+1})),e=qn(n),t(e(M+1))}};Object(r.useEffect)((function(){var e=qn(n);t(e(1)),t(O())}),[]),Object(r.useLayoutEffect)((function(){d(c>=1200?6:c>=900?5:c>=700?4:c>=375?3:2)}),[c]);return a.a.createElement(a.a.Fragment,null,function(){switch(n){case"NOW_PLAYING":return a.a.createElement($n,{movies:I,status:W,toggleWatchlist:an,fetchNextPage:B,gridItems:s,currentPage:g,maxPages:N});case"TOP_RATED":return a.a.createElement($n,{movies:C,status:G,toggleWatchlist:gn,fetchNextPage:B,gridItems:s,currentPage:k,maxPages:U});case"UPCOMING":return a.a.createElement($n,{movies:L,status:A,toggleWatchlist:yn,fetchNextPage:B,gridItems:s,currentPage:x,maxPages:F});case"POPULAR":return a.a.createElement($n,{movies:J,status:V,toggleWatchlist:Ln,fetchNextPage:B,gridItems:s,currentPage:M,maxPages:Y})}}())},Xn=function(e){var n=e.type,t=e.heading;return a.a.createElement(Oe,null,a.a.createElement(je,null,t),a.a.createElement(Qn,{type:n}))},Zn=function(){return a.a.createElement(we,null,a.a.createElement(Xn,{type:"NOW_PLAYING",heading:"Now Playing in Theatres"}),a.a.createElement(Xn,{type:"TOP_RATED",heading:"Top Rated"}),a.a.createElement(Xn,{type:"POPULAR",heading:"Popular"}),a.a.createElement(Xn,{type:"UPCOMING",heading:"Upcoming"}))},et=t(58),nt=t.n(et),tt=t(59),rt=t.n(tt);function at(){var e=Object(s.a)(["\n  flex: 100%;\n  font-size: 1.125rem;\n  padding-left: 2rem;\n  margin-bottom: 0;\n  text-align: left;\n"]);return at=function(){return e},e}function it(){var e=Object(s.a)(["\n  position: relative;\n  top: 10px;\n  left: 13px;\n  flex-basis: 45px;\n  cursor: none;\n"]);return it=function(){return e},e}function ct(){var e=Object(s.a)(["\n  color: ",";\n"]);return ct=function(){return e},e}function ot(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  max-width: 500px;\n  margin: 4rem auto 0 auto;\n  padding: 1rem;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: ",";\n"]);return ot=function(){return e},e}function ut(){var e=Object(s.a)(["\n  font-size: 2rem;\n  font-weight: 400;\n  color: #c3c3c3;\n"]);return ut=function(){return e},e}function lt(){var e=Object(s.a)(["\n  font-size: 4rem;\n  text-align: center;\n"]);return lt=function(){return e},e}function st(){var e=Object(s.a)(["\n  max-width: 1200px;\n  min-height: 90vh;\n  text-align: center;\n  margin: 0 0.5rem 2rem;\n  padding: 2rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  @media (min-width: 600px) {\n    padding: 2rem 2rem;\n  }\n\n  @media (min-width: 1200px) {\n    margin: 0 auto 2rem;\n  }\n"]);return st=function(){return e},e}function mt(){var e=Object(s.a)(["\n  color: #fff;\n\n  @media (min-width: 1px) {\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n      url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: top;\n  }\n\n  @media (min-width: 850px) {\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n      url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: unset;\n  }\n"]);return mt=function(){return e},e}var dt=Object(_.b)(we)(mt(),nt.a,rt.a),ft=_.b.section(st()),pt=_.b.h1(lt()),gt=_.b.h2(ut()),ht=_.b.div(ot(),(function(e){return e.theme.borderRadius})),bt=Object(_.b)(Je)(ct(),(function(e){return e.theme.red})),vt=Object(_.b)(De)(it()),xt=_.b.p(at()),wt=function(){return a.a.createElement("div",{style:{background:"hsl(250, 40%, 5%)"}},a.a.createElement(dt,null,a.a.createElement(ft,null,a.a.createElement(pt,null,"Movie Explorer"),a.a.createElement(gt,null,"Discover awesome movies."),a.a.createElement(ht,null,a.a.createElement(vt,null,a.a.createElement(bt,null)),a.a.createElement(xt,null,"click the heart icon to add to watchlist")))))},Ot=function(){return a.a.createElement("div",null,a.a.createElement(wt,null),a.a.createElement(Zn,null))},jt=t(29);function Et(){var e=Object(s.a)(["\n  font-size: 2rem !important;\n  margin-bottom: 2rem;\n"]);return Et=function(){return e},e}var kt=Object(_.b)(je)(Et()),yt=function(){var e=Object(m.b)(),n=Object(m.c)(y).watchlist,t=Object(r.useState)([]),i=Object(l.a)(t,2),c=i[0],u=i[1],s=function(){var e=Object(p.a)(f.a.mark((function e(){var t,r,a,i,c,o,l,s,m,p,h,b;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],r=!0,a=!1,i=void 0,e.prev=4,c=n[Symbol.iterator]();case 6:if(r=(o=c.next()).done){e.next=19;break}return l=o.value,s=l.id,e.next=11,Ke.a.get("/movies/".concat(s,"/recommendations/1"));case 11:m=e.sent,(p=m.data.results||[]).length&&(p=p.slice(0,5)),h=g(t,p),t=Object(jt.a)(h);case 16:r=!0,e.next=6;break;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(4),a=!0,i=e.t0;case 25:e.prev=25,e.prev=26,r||null==c.return||c.return();case 28:if(e.prev=28,!a){e.next=31;break}throw i;case 31:return e.finish(28);case 32:return e.finish(25);case 33:b=d(t),u(b);case 35:case"end":return e.stop()}}),e,null,[[4,21,25,33],[26,,28,32]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){return e.filter((function(e){return!n.some((function(n){return n.id===e.id}))}))},g=function(e,n){return[].concat(Object(jt.a)(e),Object(jt.a)(n)).filter((function(e,n,t){return n===t.findIndex((function(n){return n.id===e.id}))}))};return Object(r.useEffect)((function(){e(O())}),[]),Object(r.useEffect)((function(){s()}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(kt,null,"In Your Watchlist"),n.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(Oe,null,a.a.createElement(Se,null,n.map((function(e){return a.a.createElement(Yn,{key:e.id,movie:e,toggleWatchlist:k})})))),a.a.createElement(je,{style:{marginBottom:"3rem"}},"Based on your watchlist, you ",a.a.createElement("em",null,"may")," enjoy..."),a.a.createElement(Se,null,c.map((function(e){return a.a.createElement(Yn,{key:e.id,movie:e,toggleWatchlist:k})})))):a.a.createElement(Hn,null,a.a.createElement("p",null,"There doesn't seem to be anything in your watchlist..."),a.a.createElement(o.b,{to:"/"},"Let's browse some movies")))};function Pt(){var e=Object(s.a)(["\n  padding: 5rem 0.5rem;\n\n  @media (min-width: 600px) {\n    padding: 5rem 2rem;\n  }\n"]);return Pt=function(){return e},e}var St=Object(_.b)(we)(Pt()),Mt=function(){return a.a.createElement(St,null,a.a.createElement(yt,null))},zt=function(){return a.a.createElement(o.a,null,a.a.createElement(V,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",exact:!0,component:Ot}),a.a.createElement(u.a,{path:"/watchlist",component:Mt}),a.a.createElement(u.a,{render:function(){return a.a.createElement("h2",{style:{textAlign:"center",marginTop:"3rem"}},"404 Page Not Found")}})))},_t=Object(g.a)({reducer:{watchlist:P,nowPlayingMovies:on,topRatedMovies:bn,popularMovies:An,upcomingMovies:Sn}});c.a.render(a.a.createElement(_.a,{theme:{red:"hsl(0, 50%, 50%)",light:"#fff",gray:"hsl(250,5%,15%)",dark:"hsl(250, 40%, 5%)",gold:"hsl(46, 50%, 50%)",grayLight:"hsl(46,0%,60%)",borderRadius:"0.3rem"}},a.a.createElement(m.a,{store:_t},a.a.createElement(zt,null))),document.getElementById("root"))},35:function(e,n,t){e.exports=t.p+"static/media/poster_unavailable.d579328a.png"},58:function(e,n,t){e.exports=t.p+"static/media/iron_man_md.11329b7e.jpg"},59:function(e,n,t){e.exports=t.p+"static/media/iron_man_lg.55f01322.jpg"},62:function(e,n,t){e.exports=t(104)},67:function(e,n,t){},69:function(e,n,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.cee98026.chunk.js.map