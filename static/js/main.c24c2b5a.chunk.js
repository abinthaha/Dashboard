(this.webpackJsonpMyPersonalWebsite=this.webpackJsonpMyPersonalWebsite||[]).push([[0],{176:function(e,a,t){e.exports=t.p+"static/media/Abin Thaha Azees - Resume.7ee4e605.pdf"},177:function(e,a,t){e.exports=t(383)},375:function(e,a,t){},376:function(e,a,t){},377:function(e,a,t){},378:function(e,a,t){},379:function(e,a,t){},380:function(e,a,t){},381:function(e,a,t){},382:function(e,a,t){},383:function(e,a,t){"use strict";t.r(a);t(178),t(187);var n=t(0),i=t.n(n),s=t(175),r=t.n(s),l=t(83),o=t(24),c=t(13),m=t(14),d=t(54),h=t(15),u=t(16),p=(t(375),t(376),t(176)),g=t.n(p),f=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){!function(){var e=document.getElementsByClassName("asyncImage");Array.from(e).map((function(e){var a=new Image;a.src=e.dataset.src,a.onload=function(){return e.classList.remove("asyncImage"),"IMG"===e.nodeName?e.src=e.dataset.src:e.style.backgroundImage="url(".concat(e.dataset.src,")")}}))}()}},{key:"showPositionTextChange",value:function(){var e=this,a=1;setInterval((function(){var t=e.state.position,n=t.slice(0,a);a<t.length?a+=1:a-=1,e.setState(Object(o.a)({},e.state,{showPosition:n}))}),200)}},{key:"render",value:function(){return i.a.createElement("section",{className:"even banner-wrapper",id:this.props.elId},i.a.createElement("header",{className:"page-header"},i.a.createElement("span",{className:"signature"},"Abinthaha")),i.a.createElement("div",{className:"banner asyncImage"},i.a.createElement("span",{className:"user-image asyncImage"}),i.a.createElement("h1",null,i.a.createElement("div",{className:"title"},"Hey, I'm")," ABIN THAHA AZEES"),i.a.createElement("h2",{className:"position"}),i.a.createElement("a",{href:g.a,className:"download-resume-btn",download:"Abin Thaha Azees - Resume.pdf"},"Download Resume"),i.a.createElement("span",{className:"quote"},'"Yes, I\'m the CSS to your HTML"'),i.a.createElement("span",{className:"small-desc"},"Specializing in building everything from small business sites to rich interactive web apps.")))}}]),t}(n.Component),b=(t(377),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={isViewed:!1},n}return Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.isViewed;this.setState(Object(o.a)({},this.state,{isViewed:a}))}},{key:"render",value:function(){return i.a.createElement("section",{className:"about-me odd "+(this.state.isViewed?"viewed":""),id:this.props.elId},i.a.createElement("div",{className:"each-section"},i.a.createElement("h2",null,"Hi! I'm ",i.a.createElement("span",{className:"signature"},"Abin Thaha")),i.a.createElement("div",{className:"content"},i.a.createElement("span",{className:"highlight"},"Creative web developer")," offering",i.a.createElement("span",{className:"highlight"}," 4+ years")," of experience in designing and developing user interfaces, and integration with backend. Proven ability in optimising web functionality that improve data retrieval and workflow effeciancies. Expert in interdepartmental coordination and communication. Works with ",i.a.createElement("span",{className:"highlight"},"full integrity and zest")," and ",i.a.createElement("span",{className:"highlight"},"enthusiastic")," about the work and upcoming technologies.")),i.a.createElement("div",{className:"each-section focus"},i.a.createElement("h2",null,"My ",i.a.createElement("span",{className:"signature"},"Focus")),i.a.createElement("div",{className:"content"},"Let's be honest and cut through the marketing fluff. You need a website that",i.a.createElement("span",{className:"highlight"}," looks amazing "),"and",i.a.createElement("span",{className:"highlight"}," actually works"),". Bottom line, that's what",i.a.createElement("span",{className:"highlight"}," I do"),". And if you want to learn more about working with me, pick up the phone and give me a call (or email).")))}}]),t}(n.Component)),v=(t(378),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={isViewed:!1,skills:[{name:"Frameworks/Library",items:[{name:"Angular 2+",rating:8},{name:"React + Redux",rating:8.5},{name:"NodeJS + ExpressJS",rating:7},{name:"VueJS + Vuex",rating:8},{name:"UnderscoreJS",rating:7},{name:"Bootstrap 3/4",rating:8},{name:"MaterialUI",rating:8},{name:"RxJS",rating:7.5}]},{name:"Languages",items:[{name:"HTML5",rating:9},{name:"CSS3",rating:9},{name:"ES5",rating:8},{name:"ES6",rating:8},{name:"SASS/SCSS",rating:9.5},{name:"TypeScript",rating:7},{name:"JSX/TSX",rating:8},{name:"Mongo DB/SQL",rating:6}]},{name:"Social Media Integration",items:[{name:"Facebook",rating:7},{name:"Google",rating:8},{name:"Twitter",rating:6},{name:"Microsoft",rating:7}]},{name:"Version Control",items:[{name:"Git",rating:8},{name:"TFS",rating:7}]},{name:"Package Managers",items:[{name:"NPM",rating:8},{name:"Yarn",rating:6}]},{name:"Operating System",items:[{name:"Ubuntu",rating:10},{name:"Windows",rating:9}]},{name:"Deployment",items:[{name:"Github",rating:8},{name:"Azure",rating:8},{name:"AWS",rating:7},{name:"Heroku",rating:6}]},{name:"Build Tools/Task Manager",items:[{name:"Webpack",rating:9.5},{name:"Gulp",rating:8},{name:"Grunt",rating:7}]}]},n}return Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.isViewed;this.setState(Object(o.a)({},this.state,{isViewed:a}))}},{key:"render",value:function(){var e=this,a=this.state.skills.map((function(a,t){return i.a.createElement("div",{key:t,className:"each-skill-category"},i.a.createElement("h2",null,a.name),i.a.createElement("ul",null,a.items.map((function(a,t){return i.a.createElement("li",{key:"item"+t,className:"each-skill"},i.a.createElement("span",{className:"skill-name"},a.name),i.a.createElement("span",{className:"rate-slider"},i.a.createElement("span",{style:{width:e.state.isViewed?10*a.rating+"%":0},className:"rate-bar"})))}))))}));return i.a.createElement("section",{className:"skills even "+(this.state.isViewed?"viewed":""),id:this.props.elId},i.a.createElement("h1",{className:"section-heading"},"My ",i.a.createElement("span",{className:"signature"},"Skills")),i.a.createElement("div",{className:"skill-wrapper"},a))}}]),t}(n.Component)),E=(t(379),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={isViewed:!1,services:[{name:"Web Development",icon:"fas fa-code",description:"I can start the work of a website from scratch, building structure, integrating with any backend services or working and maintaining the existing ones."},{name:"Web Design",icon:"fas fa-laptop",description:"In the absense of designs, I came up with the best designs that suits the buisiness logic."},{name:"Fully Responsive",icon:"fas fa-mobile-alt",description:"Each and every site including hobby projects are made in a way that fully responsive in Mobile, Tablet, Desktop and other large devices."},{name:"Well Documented",icon:"far fa-file-alt",description:"The code is maintained in a way where anyone else can easily understand what's written and the work flow."},{name:"Clean Code",icon:"far fa-copy",description:"Well defined and clean code which is self explanatory in a very reusable manner."},{name:"Video Training",icon:"far fa-file-video",description:"The training will go over some great insights to help users understand how to get the most out of their site."}]},n}return Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.isViewed;this.setState(Object(o.a)({},this.state,{isViewed:a}))}},{key:"render",value:function(){var e=this.state.services.map((function(e,a){return i.a.createElement("div",{key:a,className:"each-service"},i.a.createElement("span",{className:"icon-wrapper"},i.a.createElement("i",{className:e.icon,"aria-hidden":"true"})),i.a.createElement("h2",{className:"service-name"},e.name),i.a.createElement("p",{className:"desc"},e.description))}));return i.a.createElement("section",{className:"services odd "+(this.state.isViewed?"viewed":""),id:this.props.elId},i.a.createElement("h1",{className:"section-heading"},"My ",i.a.createElement("span",{className:"signature"},"Services")),i.a.createElement("div",{className:"service-wrapper"},e))}}]),t}(n.Component)),w=(t(380),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"contact-me odd",id:this.props.elId},i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"each-section experience"},i.a.createElement("h2",null,"My ",i.a.createElement("span",{className:"signature"},"Experience")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("h4",{className:"company-name"},i.a.createElement("span",null,"Senior Software Engineer - EY Global"),i.a.createElement("span",{className:"time-period"},"(2019 February - Present)")),i.a.createElement("ol",null,i.a.createElement("li",null,"Designing highly efficient architecture and workflows for projects."),i.a.createElement("li",null,"Choosing the best frameworks/libraries according to the client requirement."),i.a.createElement("li",null,"Extending my service to multiple projects and mentoring junior developers with best industrial methods."),i.a.createElement("li",null,"Helping colleagues to solve blockers by providing efficient solution."),i.a.createElement("li",null,"Reviewing the code of colleagues before deploying and make sure the codes are using best industrial methods."),i.a.createElement("li",null,"Stay plugged into the emerging technologies/industry trends and apply them into operations and activities"))),i.a.createElement("li",null,i.a.createElement("h4",{className:"company-name"},i.a.createElement("span",null,"Senior Software Engineer - QBurst Technologies Pvt. Ltd."),i.a.createElement("span",{className:"time-period"},"(2015 July - 2019 January)")),i.a.createElement("ol",null,i.a.createElement("li",null,"Designing, coding and modifying SEO friendly responsive web applications from layout to function and according to clients specifications."),i.a.createElement("li",null,"Integrate data from various back-end services and databases."),i.a.createElement("li",null,"End to end testing the application, creating dev test reports before delivering any tasks to the client to ensure that the application is bug free."),i.a.createElement("li",null,"Peer to peer code review of colleagues, share best industrial practices. ")))))))}}]),t}(n.Component)),y=(t(381),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={links:[{id:"01",icon:"fab fa-github",link:"https://github.com/abinthaha"},{id:"02",icon:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/3315333/abinthaha"},{id:"03",icon:"fab fa-linkedin",link:"https://www.linkedin.com/in/abinthaha"},{id:"04",icon:"fab fa-instagram",link:"https://www.instagram.com/abinthaha"},{id:"05",icon:"fab fa-codepen",link:"https://codepen.io/abinthaha"}]},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.links.map((function(e,a){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:e.link,target:"_blank"},i.a.createElement("i",{className:e.icon})))}));return i.a.createElement("section",null,i.a.createElement("div",{className:"footer",id:this.props.elId},i.a.createElement("div",{className:"notification"},"This entire page is in ReactJS and no external plugins used. Check my ",i.a.createElement("a",{href:"https://github.com/abinthaha/Dashboard/blob/master/package.json",target:"_blank"},"package")),i.a.createElement("h1",null,"Get a website that ",i.a.createElement("span",{className:"highlight"},"looks amazing")," and ",i.a.createElement("span",{className:"highlight"},"actually works")),i.a.createElement("div",{className:"mail-phone"},i.a.createElement("div",{className:"address"},i.a.createElement("span",null,"Kalaripparambil (H),"),i.a.createElement("span",null,"Maniyarankudy P.O,"),i.a.createElement("span",null,"Vazhathoppe,"),i.a.createElement("span",null,"Idukki, Kerala"),i.a.createElement("span",null,"PIN: 685602")),i.a.createElement("div",{className:"connect"},i.a.createElement("a",{href:"mailto:iamabinthaha@gmail.com",className:"item"},i.a.createElement("span",null,i.a.createElement("i",{className:"far fa-envelope"})),i.a.createElement("span",null,"iamabinthaha@gmail.com")),i.a.createElement("a",{href:"tel:+91 9447621294",className:"item"},i.a.createElement("span",null,i.a.createElement("i",{className:"fas fa-mobile-alt"})),i.a.createElement("span",null,"+91 9447621294")),i.a.createElement("ul",null,e)))),i.a.createElement("footer",{className:"copyright-footer"},"Copyright \xa9 2019 Hosted by ",i.a.createElement("span",{className:""},"abinthaha")))}}]),t}(n.Component)),k=(t(382),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={projectList:[{id:1,projectName:"KTM Challenge",type:"Assessment, Hobby",hostedUrl:"https://abinthaha.github.io/Dashboard",codeUrl:"https://github.com/abinthaha/KTM-Client",isHosted:!1},{id:2,projectName:"Upcomer Replication",type:"Hobby",hostedUrl:"https://abinthaha.github.io/Upcomer/",codeUrl:"https://github.com/abinthaha/Upcomer",isHosted:!0},{id:3,projectName:"Movie Listing",type:"Movies, Hobby",hostedUrl:"https://abinthaha.github.io/Movie-Listing/",codeUrl:"https://github.com/abinthaha/Movie-Listing-Code",isHosted:!0},{id:4,projectName:"Why So Serious",type:"Game, Hobby",hostedUrl:"https://abinthaha.github.io/Movie-Listing/",codeUrl:"https://github.com/abinthaha/whySoSerious",isHosted:!0},{id:5,projectName:"Scroll Parallax",type:"Hobby",hostedUrl:"https://abinthaha.github.io/Scroll-Parallax/",codeUrl:"https://github.com/abinthaha/Scroll-Parallax",isHosted:!0},{id:6,projectName:"Random Balls",type:"Hobby",hostedUrl:"https://abinthaha.github.io/Balls-Random/",codeUrl:"https://github.com/abinthaha/Balls-Random",isHosted:!0}]},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.projectList.map((function(e){return i.a.createElement("li",{key:e.id,className:"flip-card"},i.a.createElement("div",{className:"flip-card-inner"},i.a.createElement("div",{className:"flip-card-front"}),i.a.createElement("div",{className:"flip-card-back"},i.a.createElement("span",{className:"project-name"},e.projectName),i.a.createElement("span",{className:"type"},e.type),i.a.createElement("span",{className:"links"},e.isHosted?i.a.createElement("a",{className:"card-label",title:"Website",target:"_blank",href:e.hostedUrl},i.a.createElement("span",{className:"icon-wrapper"},i.a.createElement("i",{className:"fas fa-laptop","aria-hidden":"true"}))):"",i.a.createElement("a",{className:"card-label",title:"Code",target:"_blank",href:e.codeUrl},i.a.createElement("span",{className:"icon-wrapper"},i.a.createElement("i",{className:"far fa-file-alt"})))))))}));return i.a.createElement("section",{className:"even portfolio-wrapper",id:this.props.elId},i.a.createElement("h2",null,"My ",i.a.createElement("span",{className:"signature"},"Portfolio")),i.a.createElement("ul",{className:"project-list-wrapper flip-wrapper"},e))}}]),t}(n.Component)),N=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={screenHeight:0,domSections:[]},n.myRef=i.a.createRef(),n.setvalObj=n.setvalObj.bind(Object(d.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){this.setvalObj(this.props.elements)}.bind(this),500),this.setState(Object(o.a)({},this.state,{screenHeight:window.screen.height}),(function(){window.onscroll=function(){var e=this;this.state.domSections.map((function(a){var t=a.topVal-e.state.screenHeight/2;!a.alreadyFound&&(document.body.scrollTop>t||document.documentElement.scrollTop>t)&&(a.alreadyFound=!0,e.props.setCompOnView(a))}))}.bind(e)}))}},{key:"setvalObj",value:function(e){var a=[];e.map((function(e){if(document.getElementById(e)&&document.getElementById(e).offsetTop){var t={id:e,alreadyFound:!1,topVal:document.getElementById(e).offsetTop};a.push(t)}})),this.setState(Object(o.a)({},this.state,{domSections:a}))}},{key:"render",value:function(){return i.a.createElement("span",{ref:"myRef"})}}]),t}(n.Component),j=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={elements:["banner","intro","skills","portfolio","services","contactMe","footer"],viewedComponents:{}},n.setCompOnView=n.setCompOnView.bind(Object(d.a)(n)),n}return Object(m.a)(t,[{key:"setCompOnView",value:function(e){this.setState(Object(o.a)({},this.state,{viewedComponents:Object(o.a)({},this.state.viewedComponents,Object(l.a)({},e.id,!0))}),(function(){}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N,{elements:this.state.elements,setCompOnView:this.setCompOnView}),i.a.createElement(f,{elId:"banner",isViewed:this.state.viewedComponents.banner}),i.a.createElement(b,{elId:"intro",isViewed:this.state.viewedComponents.intro}),i.a.createElement(v,{elId:"skills",isViewed:this.state.viewedComponents.skills}),i.a.createElement(E,{elId:"services",isViewed:this.state.viewedComponents.services}),i.a.createElement(k,{elId:"portfolio",isViewed:this.state.viewedComponents.portfolio}),i.a.createElement(w,{elId:"contactMe",isViewed:this.state.viewedComponents.contactMe}),i.a.createElement(y,{elId:"footer",isViewed:this.state.viewedComponents.footer}))}}]),t}(n.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Dashboard",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Dashboard","/service-worker.js");O?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):S(e)}))}}()}},[[177,1,2]]]);
//# sourceMappingURL=main.c24c2b5a.chunk.js.map