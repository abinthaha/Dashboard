(this.webpackJsonpMyPersonalWebsite=this.webpackJsonpMyPersonalWebsite||[]).push([[0],{177:function(e,a,t){e.exports=t.p+"static/media/Abin Thaha Azees - Resume.fd845649.pdf"},178:function(e,a,t){e.exports=t(387)},377:function(e,a,t){},378:function(e,a,t){},379:function(e,a,t){},380:function(e,a,t){},381:function(e,a,t){},382:function(e,a,t){},383:function(e,a,t){},384:function(e,a,t){},385:function(e,a,t){},386:function(e,a,t){},387:function(e,a,t){"use strict";t.r(a);t(179),t(189);var n=t(0),i=t.n(n),s=t(176),r=t.n(s),o=t(86),c=t(6),l=t(14),m=t(15),d=t(54),p=t(17),u=t(16),h=(t(377),t(378),t(177)),g=t.n(h),f=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(l.a)(this,t),a.call(this,e)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){!function(){var e=document.getElementsByClassName("asyncImage");Array.from(e).map((function(e){var a=new Image;a.src=e.dataset.src,a.onload=function(){return e.classList.remove("asyncImage"),"IMG"===e.nodeName?e.src=e.dataset.src:e.style.backgroundImage="url(".concat(e.dataset.src,")")}}))}()}},{key:"showPositionTextChange",value:function(){var e=this,a=1;setInterval((function(){var t=e.state.position,n=t.slice(0,a);a<t.length?a+=1:a-=1,e.setState(Object(c.a)(Object(c.a)({},e.state),{},{showPosition:n}))}),200)}},{key:"render",value:function(){return i.a.createElement("section",{className:"even banner-wrapper",id:this.props.elId},i.a.createElement("header",{className:"page-header"},i.a.createElement("span",{className:"signature"},"Abinthaha")),i.a.createElement("div",{className:"banner asyncImage"},i.a.createElement("span",{className:"user-image asyncImage"}),i.a.createElement("h1",null,i.a.createElement("div",{className:"title"},"Hey, I'm")," ABIN THAHA AZEES"),i.a.createElement("h2",{className:"position"}),i.a.createElement("a",{href:g.a,className:"download-resume-btn",download:"Abin Thaha Azees - Resume.pdf"},"Download Resume"),i.a.createElement("span",{className:"quote"},'"I\'m the CSS to your HTML"'),i.a.createElement("span",{className:"small-desc"},"Specializing in building everything from small business sites to rich interactive web apps.")))}}]),t}(n.Component),b=(t(379),function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).state={isViewed:!1},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var a=e.isViewed;this.setState(Object(c.a)(Object(c.a)({},this.state),{},{isViewed:a}))}},{key:"render",value:function(){this.state.experience;return i.a.createElement("section",{className:"about-me odd "+(this.state.isViewed?"viewed":""),id:this.props.elId},i.a.createElement("div",{className:"each-section"},i.a.createElement("h2",null,"Hi! I'm ",i.a.createElement("span",{className:"signature"},"Abin Thaha")),i.a.createElement("div",{className:"content"},i.a.createElement("span",{className:"highlight"},"Creative web developer")," offering experience in designing and developing user interfaces, and integration with backend. Proven ability in optimising web lity that improve data retrieval and workflow effeciancies. Expert in interdepartmental coordination and communication. Works with ",i.a.createElement("span",{className:"highlight"},"full integrity and zest")," and ",i.a.createElement("span",{className:"highlight"},"enthusiastic")," about the work and upcoming technologies.")),i.a.createElement("div",{className:"each-section focus"},i.a.createElement("h2",null,"My ",i.a.createElement("span",{className:"signature"},"Focus")),i.a.createElement("div",{className:"content"},"Let's be honest and cut through the marketing fluff. You need a website that",i.a.createElement("span",{className:"highlight"}," looks amazing "),"and",i.a.createElement("span",{className:"highlight"}," actually works"),". Bottom line, that's what",i.a.createElement("span",{className:"highlight"}," I do"),". And if you want to learn more about working with me, pick up the phone and give me a call (or email).")))}}]),t}(n.Component)),v=(t(380),function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).state={isViewed:!1,skills:[{name:"Frameworks/Library",items:[{name:"Angular 2+",rating:8},{name:"React + Redux",rating:8.5},{name:"NodeJS + ExpressJS",rating:7},{name:"VueJS + Vuex",rating:8},{name:"UnderscoreJS",rating:7},{name:"Bootstrap 3/4",rating:8},{name:"MaterialUI",rating:8},{name:"RxJS",rating:7.5}]},{name:"Languages",items:[{name:"HTML5",rating:9},{name:"CSS3",rating:9},{name:"ES5",rating:8},{name:"ES6",rating:8},{name:"SASS/SCSS",rating:9.5},{name:"TypeScript",rating:7},{name:"JSX/TSX",rating:8},{name:"Mongo DB/SQL",rating:6}]},{name:"Social Media Integration",items:[{name:"Facebook",rating:7},{name:"Google",rating:8},{name:"Twitter",rating:6},{name:"Microsoft",rating:7},{name:"Google analytics",rating:8}]},{name:"Version Control",items:[{name:"Git",rating:8},{name:"TFS",rating:7}]},{name:"Package Managers",items:[{name:"NPM",rating:8},{name:"Yarn",rating:6}]},{name:"Operating System",items:[{name:"Ubuntu",rating:10},{name:"Windows",rating:9}]},{name:"Deployment",items:[{name:"Github",rating:8},{name:"Azure",rating:8},{name:"AWS",rating:7},{name:"Heroku",rating:6}]},{name:"Build Tools/Task Manager",items:[{name:"Webpack",rating:9.5},{name:"Gulp",rating:8},{name:"Grunt",rating:7}]}]},n}return Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.isViewed;this.setState(Object(c.a)(Object(c.a)({},this.state),{},{isViewed:a}))}},{key:"render",value:function(){var e=this,a=this.state.skills.map((function(a,t){return i.a.createElement("div",{key:t,className:"each-skill-category"},i.a.createElement("h2",null,a.name),i.a.createElement("ul",null,a.items.map((function(a,t){return i.a.createElement("li",{key:"item"+t,className:"each-skill"},i.a.createElement("span",{className:"skill-name"},a.name),i.a.createElement("span",{className:"rate-slider"},i.a.createElement("span",{style:{width:e.state.isViewed?10*a.rating+"%":0},className:"rate-bar"})))}))))}));return i.a.createElement("section",{className:"skills even "+(this.state.isViewed?"viewed":""),id:this.props.elId},i.a.createElement("h1",{className:"section-heading"},"My ",i.a.createElement("span",{className:"signature"},"Skills")),i.a.createElement("div",{className:"skill-wrapper"},a))}}]),t}(n.Component)),y=(t(381),function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).state={isViewed:!1,services:[{name:"Web Development",icon:"fas fa-code",description:"I can start the work of a website from scratch, building structure, integrating with any backend services or working and maintaining the existing ones."},{name:"Web Design",icon:"fas fa-laptop",description:"In the absense of designs, I came up with the best designs that suits the buisiness logic."},{name:"Fully Responsive",icon:"fas fa-mobile-alt",description:"Each and every site including hobby projects are made in a way that fully responsive in Mobile, Tablet, Desktop and other large devices."},{name:"Well Documented",icon:"far fa-file-alt",description:"The code is maintained in a way where anyone else can easily understand what's written and the work flow."},{name:"Clean Code",icon:"far fa-copy",description:"Well defined and clean code which is self explanatory in a very reusable manner."},{name:"Video Training",icon:"far fa-file-video",description:"The training will go over some great insights to help users understand how to get the most out of their site."}]},n}return Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.isViewed;this.setState(Object(c.a)(Object(c.a)({},this.state),{},{isViewed:a}))}},{key:"render",value:function(){var e=this.state.services.map((function(e,a){return i.a.createElement("div",{key:a,className:"each-service"},i.a.createElement("span",{className:"icon-wrapper"},i.a.createElement("i",{className:e.icon,"aria-hidden":"true"})),i.a.createElement("h2",{className:"service-name"},e.name),i.a.createElement("p",{className:"desc"},e.description))}));return i.a.createElement("section",{className:"services odd "+(this.state.isViewed?"viewed":""),id:this.props.elId},i.a.createElement("h1",{className:"section-heading"},"My ",i.a.createElement("span",{className:"signature"},"Services")),i.a.createElement("div",{className:"service-wrapper"},e))}}]),t}(n.Component)),w=(t(382),[{companyName:"Kloud9",companyUrl:"http://kloud9.nyc/",jobRole:"Senior Software Engineer",duration:"May, 2021 - Present",technologies:["HTML5","CSS3","SCSS","JavaScript","Angular 4","Angular 7","React","Redux","TypeScript"],responsibilities:["Develops software solutions by studying information needs, conferring with users, studying systems flow, data usage, and work processes; investigating problem areas; and following the software development lifecycle.","Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.","Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments, and clear code.","Prepares and installs solutions by determining and designing system specifications, standards, and programming.","Improves operations by conducting systems analysis and recommending changes in policies and procedures.","Updates job knowledge by studying state-of-the-art development tools, programming techniques, and computing equipment, and by participating in educational opportunities, reading professional publications, maintaining personal networks, and participating in professional organizations.","Protects operations by keeping information confidential.","Provides information by collecting, analyzing, and summarizing development and service issues.","Accomplishes engineering and organization mission by completing related results as needed.","Supports and develops software engineers by providing advice, coaching, and educational opportunities."]},{companyName:"Ernst & Young",companyUrl:"https://www.ey.com/en_in",jobRole:"Senior Software Engineer",duration:"February, 2019 - May, 2021",technologies:["HTML5","CSS3","SCSS","JavaScript","Angular 7","React","Redux","TypeScript","React-router"],responsibilities:["Designing highly efficient architecture and workflows for projects.","Choosing the best frameworks/libraries according to the client requirement.","Extending my service to multiple projects and mentoring junior developers with best industrial methods.","Helping colleagues to solve blockers by providing efficient solution.","Reviewing the code of colleagues before deploying and make sure the codes are using best industrial methods.","Stay plugged into the emerging technologies/industry trends and apply them into operations and activities"]},{companyName:"QBurst Technologies",companyUrl:"https://www.qburst.com/",jobRole:"Senior Software Developer",duration:"July, 2015 - January, 2019",technologies:["HTML5","CSS3","SCSS","JavaScript","TypeScript","React","Redux","Redux-toolkit","Reach-router"],responsibilities:["Designing, coding and modifying SEO friendly responsive web applications from layout to function and according to clients specifications.","Integrate data from various back-end services and databases.","End to end testing the application, creating dev test reports before delivering any tasks to the client to ensure that the application is bug free.","Peer to peer code review of colleagues, share best industrial practices"]}]),E=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"contact-me odd",id:this.props.elId},i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"each-section experience"},i.a.createElement("h2",null,"My ",i.a.createElement("span",{className:"signature"},"Experience")),i.a.createElement("ul",null,w.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("h4",{className:"company-name"},i.a.createElement("span",null,e.jobRole," - ",i.a.createElement("a",{target:"_blank",href:e.companyUrl},e.companyName)),i.a.createElement("span",{className:"time-period"},"(",e.duration,")")),i.a.createElement("ol",null,e.responsibilities.map((function(e,a){return i.a.createElement("li",{key:a},e)}))),i.a.createElement("h4",{className:"technologies"},"Technologies used: ",e.technologies.map((function(e){return i.a.createElement("span",null,e)}))))}))))))}}]),t}(n.Component),N=(t(383),function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).state={links:[{id:"01",icon:"fab fa-github",link:"https://github.com/abinthaha"},{id:"02",icon:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/3315333/abinthaha"},{id:"03",icon:"fab fa-linkedin",link:"https://www.linkedin.com/in/abinthaha"},{id:"04",icon:"fab fa-instagram",link:"https://www.instagram.com/abinthaha"},{id:"05",icon:"fab fa-codepen",link:"https://codepen.io/abinthaha"}]},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.links.map((function(e,a){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:e.link,target:"_blank"},i.a.createElement("i",{className:e.icon})))}));return i.a.createElement("section",null,i.a.createElement("div",{className:"footer",id:this.props.elId},i.a.createElement("div",{className:"notification"},"This entire page is in ReactJS and no external plugins used. Check my ",i.a.createElement("a",{href:"https://github.com/abinthaha/Dashboard/blob/master/package.json",target:"_blank"},"package")),i.a.createElement("h1",null,"Get a website that ",i.a.createElement("span",{className:"highlight"},"looks amazing")," and ",i.a.createElement("span",{className:"highlight"},"actually works")),i.a.createElement("div",{className:"mail-phone"},i.a.createElement("div",{className:"address"},i.a.createElement("span",null,"Kalaripparambil (H),"),i.a.createElement("span",null,"Maniyarankudy P.O,"),i.a.createElement("span",null,"Vazhathoppe,"),i.a.createElement("span",null,"Idukki, Kerala"),i.a.createElement("span",null,"PIN: 685602")),i.a.createElement("div",{className:"connect"},i.a.createElement("a",{href:"mailto:iamabinthaha@gmail.com",className:"item"},i.a.createElement("span",null,i.a.createElement("i",{className:"far fa-envelope"})),i.a.createElement("span",null,"iamabinthaha@gmail.com")),i.a.createElement("a",{href:"tel:+91 9447621294",className:"item"},i.a.createElement("span",null,i.a.createElement("i",{className:"fas fa-mobile-alt"})),i.a.createElement("span",null,"+91 9447621294")),i.a.createElement("ul",null,e)))),i.a.createElement("footer",{className:"copyright-footer"},"Copyright \xa9 2019 Hosted by ",i.a.createElement("span",{className:""},"abinthaha")))}}]),t}(n.Component)),k=(t(384),function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={projectList:[{id:1,projectName:"KTM Challenge",type:"Assessment, Hobby",hostedUrl:"https://abinthaha.github.io/Dashboard",codeUrl:"https://github.com/abinthaha/KTM-Client",isHosted:!1},{id:2,projectName:"Upcomer Replication",type:"Hobby",hostedUrl:"https://abinthaha.github.io/Upcomer/",codeUrl:"https://github.com/abinthaha/Upcomer",isHosted:!0},{id:3,projectName:"Movie Listing",type:"Movies, Hobby",hostedUrl:"https://abinthaha.github.io/Movie-Listing/",codeUrl:"https://github.com/abinthaha/Movie-Listing-Code",isHosted:!0},{id:4,projectName:"Why So Serious",type:"Game, Hobby",hostedUrl:"https://abinthaha.github.io/Movie-Listing/",codeUrl:"https://github.com/abinthaha/whySoSerious",isHosted:!0},{id:5,projectName:"Scroll Parallax",type:"Hobby",hostedUrl:"https://abinthaha.github.io/Scroll-Parallax/",codeUrl:"https://github.com/abinthaha/Scroll-Parallax",isHosted:!0},{id:6,projectName:"Random Balls",type:"Hobby",hostedUrl:"https://abinthaha.github.io/Balls-Random/",codeUrl:"https://github.com/abinthaha/Balls-Random",isHosted:!0}]},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.projectList.map((function(e){return i.a.createElement("li",{key:e.id,className:"flip-card"},i.a.createElement("div",{className:"flip-card-inner"},i.a.createElement("div",{className:"flip-card-front"}),i.a.createElement("div",{className:"flip-card-back"},i.a.createElement("span",{className:"project-name"},e.projectName),i.a.createElement("span",{className:"type"},e.type),i.a.createElement("span",{className:"links"},e.isHosted?i.a.createElement("a",{className:"card-label",title:"Website",target:"_blank",href:e.hostedUrl},i.a.createElement("span",{className:"icon-wrapper"},i.a.createElement("i",{className:"fas fa-laptop","aria-hidden":"true"}))):"",i.a.createElement("a",{className:"card-label",title:"Code",target:"_blank",href:e.codeUrl},i.a.createElement("span",{className:"icon-wrapper"},i.a.createElement("i",{className:"far fa-file-alt"})))))))}));return i.a.createElement("section",{className:"even portfolio-wrapper",id:this.props.elId},i.a.createElement("h2",null,"My ",i.a.createElement("span",{className:"signature"},"Portfolio")),i.a.createElement("ul",{className:"project-list-wrapper flip-wrapper"},e))}}]),t}(n.Component)),j=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={screenHeight:0,domSections:[]},n.myRef=i.a.createRef(),n.setvalObj=n.setvalObj.bind(Object(d.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){this.setvalObj(this.props.elements)}.bind(this),500),this.setState(Object(c.a)(Object(c.a)({},this.state),{},{screenHeight:window.screen.height}),(function(){window.onscroll=function(){var e=this;this.state.domSections.map((function(a){var t=a.topVal-e.state.screenHeight/2;!a.alreadyFound&&(document.body.scrollTop>t||document.documentElement.scrollTop>t)&&(a.alreadyFound=!0,e.props.setCompOnView(a))}))}.bind(e)}))}},{key:"setvalObj",value:function(e){var a=[];e.map((function(e){if(document.getElementById(e)&&document.getElementById(e).offsetTop){var t={id:e,alreadyFound:!1,topVal:document.getElementById(e).offsetTop};a.push(t)}})),this.setState(Object(c.a)(Object(c.a)({},this.state),{},{domSections:a}))}},{key:"render",value:function(){return i.a.createElement("span",{ref:"myRef"})}}]),t}(n.Component),O=(t(385),function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).hoursDiff=function(e,a){var t=Math.abs(e-a)/1e3;console.log(t),t-=86400*Math.floor(t/86400);var i=Math.floor(t/3600)%24;t-=3600*i;var s=Math.floor(t/60)%60;t-=60*s;var r=Math.floor(t%60);n.setState(Object(c.a)(Object(c.a)({},n.state),{},{experience:Object(c.a)(Object(c.a)({},n.state.experience),{},{hours:i,minutes:s,seconds:r})}))},n.state={isViewed:!1,experience:{year:"",month:"",days:"",hours:"",minutes:"",seconds:""}},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=new Date("13 July 2015"),t=new Date;this.dateDiffInDays_Months_Years(a,t),setInterval((function(){t=new Date,e.hoursDiff(a,t)}),1e3)}},{key:"componentWillReceiveProps",value:function(e){var a=e.isViewed;this.setState(Object(c.a)(Object(c.a)({},this.state),{},{isViewed:a}))}},{key:"dateDiffInDays",value:function(e,a){var t=new Date(e),n=new Date(a),i=Math.abs(t-n),s=Math.ceil(i/864e5);console.log("Days: ",s);var r=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),o=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate());return Math.floor((o-r)/864e5)}},{key:"dateDiffInDays_Months_Years",value:function(e,a){var t=new Date(e),n=new Date(a),i=n.getFullYear()-t.getFullYear(),s=n.getMonth()-t.getMonth(),r=n.getDate()-t.getDate();if(r<0){var o=this.getDaysInLastFullMonth(e);r=o<t.getDate()?o+r+(t.getDate()-o):o+r,s--}s<0&&(s=12+s,i--),this.setState(Object(c.a)(Object(c.a)({},this.state),{},{experience:{year:i,month:s,days:r}}),(function(){}))}},{key:"getDaysInLastFullMonth",value:function(e){var a=new Date(e);console.log(a.getDay());var t=new Date(a.getFullYear(),a.getMonth()+1,0);return console.log("last day of month:",t.getDate()),t.getDate()}},{key:"render",value:function(){var e=this.state.experience;return i.a.createElement("section",{className:"experience odd "+(this.state.isViewed?"viewed":""),id:this.props.elId},i.a.createElement("h1",{className:"section-heading"},"My ",i.a.createElement("span",{className:"signature"},"Experience")),i.a.createElement("div",{className:"experience-wrapper"},i.a.createElement("span",{className:"experience-item"},i.a.createElement("span",{className:"experience-value"},e.year),i.a.createElement("label",{className:"label"},"Years")),i.a.createElement("span",{className:"experience-item"},i.a.createElement("span",{className:"experience-value"},e.month),i.a.createElement("label",{className:"label"},"Months")),i.a.createElement("span",{className:"experience-item"},i.a.createElement("span",{className:"experience-value"},e.days),i.a.createElement("label",{className:"label"},"Days")),i.a.createElement("span",{className:"experience-item"},i.a.createElement("span",{className:"experience-value"},e.hours),i.a.createElement("label",{className:"label"},"Hours")),i.a.createElement("span",{className:"experience-item"},i.a.createElement("span",{className:"experience-value"},e.minutes),i.a.createElement("label",{className:"label"},"Minutes")),i.a.createElement("span",{className:"experience-item"},i.a.createElement("span",{className:"experience-value"},e.seconds),i.a.createElement("label",{className:"label"},"Seconds"))))}}]),t}(n.Component)),S=(t(386),[{id:1,item:"Google Analytics Certification",itemId:"ga"},{id:2,item:"Microsoft 365: Fundamentals",itemId:"ms365"},{id:3,item:"Microsoft Azure: Fundamentals",itemId:"azure"},{id:4,item:"Programming in HTML5 with JavaScript and CSS3",itemId:"html"}]),M=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"contact-me odd",id:this.props.elId},i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"each-section experience"},i.a.createElement("h2",null,"My ",i.a.createElement("span",{className:"signature"},"Achievements"))),i.a.createElement("ul",{className:"achievement-wrapper"},S.map((function(e){return i.a.createElement("li",{className:"cert-item ".concat(e.itemId)},i.a.createElement("span",{className:"img-wrapper"}),i.a.createElement("span",{className:"item-name"},e.item))})))))}}]),t}(n.Component),C=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).state={elements:["banner","intro","skills","achievements","portfolio","services","contactMe","footer"],viewedComponents:{}},n.setCompOnView=n.setCompOnView.bind(Object(d.a)(n)),n}return Object(m.a)(t,[{key:"setCompOnView",value:function(e){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{viewedComponents:Object(c.a)(Object(c.a)({},this.state.viewedComponents),{},Object(o.a)({},e.id,!0))}),(function(){}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,{elements:this.state.elements,setCompOnView:this.setCompOnView}),i.a.createElement(f,{elId:"banner",isViewed:this.state.viewedComponents.banner}),i.a.createElement(b,{elId:"intro",isViewed:this.state.viewedComponents.intro}),i.a.createElement(O,{elId:"experience",isViewed:this.state.viewedComponents.intro}),i.a.createElement(v,{elId:"skills",isViewed:this.state.viewedComponents.skills}),i.a.createElement(M,{elId:"achievements",isViewed:this.state.viewedComponents.achievements}),i.a.createElement(y,{elId:"services",isViewed:this.state.viewedComponents.services}),i.a.createElement(k,{elId:"portfolio",isViewed:this.state.viewedComponents.portfolio}),i.a.createElement(E,{elId:"contactMe",isViewed:this.state.viewedComponents.contactMe}),i.a.createElement(N,{elId:"footer",isViewed:this.state.viewedComponents.footer}))}}]),t}(n.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Dashboard",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Dashboard","/service-worker.js");I?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):D(e)}))}}()}},[[178,1,2]]]);
//# sourceMappingURL=main.986eb944.chunk.js.map