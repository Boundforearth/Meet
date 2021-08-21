(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(66),i=n.n(r),s=(n(200),n(26)),c=n.n(s),l=n(51),u=n(23),d=n(31),h=n(24),p=n(25),f=(n(202),n(203),n(3)),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={toggleDetails:!1},e.handleClick=function(){!1===e.state.toggleDetails?e.setState({toggleDetails:!0}):e.setState({toggleDetails:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.toggleDetails,a=n?"displayed":"hidden",o=n?"Hide Details":"Show Details",r=new Date(t.start.dateTime).toUTCString();return Object(f.jsxs)("div",{className:"Event",children:[Object(f.jsx)("h2",{className:"summary",children:t.summary}),Object(f.jsx)("p",{className:"start-time",children:r}),Object(f.jsxs)("p",{className:"location",children:["@",t.summary," | ",t.location]}),Object(f.jsxs)("div",{className:a,children:[Object(f.jsx)("h4",{children:"About Event:"}),Object(f.jsx)("p",{className:"description",children:t.description})]}),Object(f.jsx)("button",{className:"btn",onClick:function(){return e.handleClick()},children:o})]})}}]),n}(a.Component),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{className:"events",children:Object(f.jsx)(m,{event:e})},e.id)}))})}}]),n}(a.Component),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(g),b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(g),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#fd6a3b",a}return n}(g),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:" "},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:" "});e.setState({query:n,infoText:"Location not found"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t,e.props.displayCount)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(j,{text:this.state.infoText}),Object(f.jsx)("label",{htmlFor:"selectedLocation",children:"Location: "}),Object(f.jsx)("input",{id:"selectedLocation",type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Enter a city...",onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsx)("div",{className:"suggestions-container",children:Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{className:t,onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})})]})}}]),n}(a.Component),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={displayCount:32,infoText:""},e.handleInputChange=function(t){var n=t.target.value;""===n?e.setState({infoText:"Please enter a number",displayCount:n}):n<=0?e.setState({infoText:"Min of 1",displayCount:n}):n>64?e.setState({infoText:"Max of 64",displayCount:n}):(e.setState({displayCount:n,infoText:""}),e.props.getDisplayCount(t.target.value))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"NumberOfEvents",children:[Object(f.jsx)(b,{text:this.state.infoText}),Object(f.jsx)("label",{htmlFor:"eventsDisplayed",children:"Event Count: "}),Object(f.jsx)("input",{id:"eventsDisplayed",type:"number",className:"number",value:this.state.displayCount,onChange:this.handleInputChange})]})}}]),n}(a.Component),O=n(18),k=n(359),S=n(366),C=n(180),T=function(e){var t=e.events,n=Object(a.useState)([]),o=Object(O.a)(n,2),r=o[0],i=o[1];return Object(a.useEffect)((function(){i((function(){return function(){for(var e,n=["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(/(?:,| |-|!)+/).join(",").split(".").join(",").split(",").includes(e)})).length;return{name:e,value:n}}));e<n.length;e++)0===n[e]&&n.splice(e,1);return n}()}))}),[t]),Object(f.jsx)(k.a,{height:400,children:Object(f.jsx)(S.a,{width:400,height:400,children:Object(f.jsx)(C.a,{data:r,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},N=n(189),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],D=n(120),E=n.n(D),Z=n(77),A=n.n(Z),L=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,E.a.get("https://dycgmo7l10.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&q(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){var t=e.map((function(e){return e.location}));return Object(N.a)(new Set(t))},M=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://dycgmo7l10.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return A.a.done(),e.abrupt("return",W);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),A.a.done(),e.abrupt("return",t?JSON.parse(t):[]);case 8:return e.next=10,L();case 10:if(!(n=e.sent)){e.next=20;break}return J(),a="https://dycgmo7l10.execute-api.us-east-1.amazonaws.com/dev/api/getevents/"+n,e.next=16,E.a.get(a);case 16:return(o=e.sent).data&&(r=I(o.data),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),A.a.done(),e.abrupt("return",o.data);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=n(363),B=n(364),F=n(185),_=n(186),z=n(78),H=n(190);n(356),n(357);var P=function(e){return e.showWelcomeScreen?Object(f.jsxs)("div",{className:"WelcomeScreen",children:[Object(f.jsx)("h1",{children:"Welcome to the Meet app"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{className:"google-btn",children:[Object(f.jsx)("div",{className:"google-icon-wrapper",children:Object(f.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with google"})})]})}),Object(f.jsx)("a",{href:"https://Boundforearth.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},G=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],locations:[],displayCount:32,currentCity:"all",showWelcomeScreen:void 0,infoText:""},e.updateEvents=function(t,n){e.mounted=!0,R().then((function(a){if(e.mounted){var o=("all"===t?a:a.filter((function(e){return e.location===t}))).slice(0,n);e.setState({events:o,currentCity:t,infoText:""})}}))},e.getDisplayCount=function(t){var n=e.state.currentCity;e.setState({displayCount:t}),e.updateEvents(n,t)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,M(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&R().then((function(e){if(r.mounted){var t=e.slice(0,r.state.displayCount);r.setState({events:t,locations:I(e)})}})),navigator.onLine?this.setState({infoText:""}):this.setState({infoText:"You are currently browsing offline.  To get up to date events, please go online"});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.displayCount,a=e.events;return void 0===this.state.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h2",{className:"app-name",children:"Meet App"}),Object(f.jsxs)("div",{className:"input-boxes",children:[Object(f.jsx)(x,{locations:t,updateEvents:this.updateEvents,displayCount:n}),Object(f.jsx)(y,{getDisplayCount:this.getDisplayCount})]}),Object(f.jsx)("h4",{children:"Events in each city"}),Object(f.jsxs)("div",{className:"data-vis-wrapper",children:[Object(f.jsx)(T,{events:a}),Object(f.jsx)(k.a,{height:400,children:Object(f.jsxs)(U.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(f.jsx)(B.a,{}),Object(f.jsx)(F.a,{type:"category",dataKey:"city",name:"city"}),Object(f.jsx)(_.a,{type:"number",dataKey:"number",name:"number of events"}),Object(f.jsx)(z.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)(H.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(f.jsx)(w,{text:this.state.infoText}),Object(f.jsx)(v,{events:a}),Object(f.jsx)(P,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){L()}})]})}}]),n}(a.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};n(187).config("7801268a2fb24b53ae050fe1315e4a15").install(),i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),V()}},[[358,1,2]]]);
//# sourceMappingURL=main.a7ebef23.chunk.js.map