(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},71:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(29),n=s.n(i),r=s(8),o=(s(38),s(98)),l=s(99),j=(s(39),s(0));function d(e){var t=e.visibleElement,s=e.menuOpen,c=e.setMenuOpen;return Object(j.jsxs)("div",{className:"navbar "+(s?"active ":"")+("projects"===t||"contact"===t?"inverse":"")+("about"===t?"white-detail":""),children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsxs)("a",{href:"#home",className:"logo",children:[Object(j.jsx)("span",{className:"circle"}),Object(j.jsx)("div",{className:"circle-animate-wrapper",children:Object(j.jsx)("span",{className:"circle animate"})}),Object(j.jsx)("svg",{viewBox:"0 0 92.25932 92.259996",xmlnsSvg:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:Object(j.jsx)("g",{inkscapeLabel:"Layer 1",inkscapeGroupmode:"layer",id:"layer1",transform:"translate(-112.12123,-26.584484)",children:Object(j.jsx)("path",{d:"m 161.14563,75.609417 v 43.235063 h 43.23492 z m -49.0244,-49.024933 h 42.20781 v 92.259856 h -42.20781 z"})})})]}),Object(j.jsxs)("div",{className:"items",children:[Object(j.jsxs)("a",{href:"tel:+61491688816",className:"itemContainer",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("span",{children:"+61 491 688 816"})]}),Object(j.jsxs)("a",{href:"#contact",className:"itemContainer",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("span",{children:"kiahooperandersen@gmail.com"})]})]})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return c(!s)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})}s(45);function b(e){var t=e.clickTo,s=e.title,c=e.setMenuOpen;return Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:t,children:s})})}function h(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsxs)("div",{className:t?"menu active":"menu",children:[Object(j.jsx)("div",{className:"circle"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)(b,{clickTo:"#home",title:"Home",setMenuOpen:s}),Object(j.jsx)(b,{clickTo:"#projects",title:"Projects",setMenuOpen:s}),Object(j.jsx)(b,{clickTo:"#about",title:"About",setMenuOpen:s}),Object(j.jsx)(b,{clickTo:"#contact",title:"Contact",setMenuOpen:s})]})]})}s(46);function m(e){var t=e.visibleElement,s=function(e){for(var t="",s=0;s<900;s++)t+=(t?",":"")+"".concat(e," ")+1*-s+"px "+1*s+"px";return t};return Object(j.jsxs)("div",{id:"home",className:"home"===t?"home active":"home",children:[Object(j.jsxs)("div",{className:"name",children:[Object(j.jsx)("h1",{style:{textShadow:s("#633ad1")},children:"Kia"}),Object(j.jsx)("h1",{style:{textShadow:s("#4d29af")},children:"Hooper"}),Object(j.jsx)("h1",{style:{textShadow:s("#44249a")},children:"Andersen"})]}),Object(j.jsx)("a",{className:"arrow",href:"#projects"})]})}var p=[{id:0,title:"Shopping Cart",desc:"A mock implementation of a shop, with the focus on the cart including a weather widget.",img:"".concat("/portfolio","/assets/projectImages/shopping-cart.PNG"),link:"https://kiahooper.github.io/shopping-cart/",sourceCode:"https://github.com/kiahooper/shopping-cart",toolbox:["React","React Router","Sass","Flexbox"]},{id:1,title:"Battleships",desc:"A modern take on the old classic game, with a cabable computer opponent.",img:"".concat("/portfolio","/assets/projectImages/battleships.PNG"),link:"https://kiahooper.github.io/battleships/",sourceCode:"https://github.com/kiahooper/battleships",toolbox:["React","Jest","Sass","Flexbox"]},{id:2,title:"Memory Game",desc:"A simple memory card game, made enjoyable by tropical content.",img:"".concat("/portfolio","/assets/projectImages/memory-game.PNG"),link:"https://kiahooper.github.io/memory-game/",sourceCode:"https://github.com/kiahooper/memory-game",toolbox:["React"]}],x=(s(47),s(48),s(49),s(50),s(51),s(52),s(109)),O=s(104),u=s(108),v=s(100),g=s(101),f=s(102),N=s(103);function w(e){var t=e.visibleElement;return Object(j.jsxs)("div",{id:"projects",className:"projects"===t?"projects active":"projects",children:[Object(j.jsx)("h2",{children:"Projects"}),Object(j.jsxs)("div",{className:"swiperWrapper",children:[Object(j.jsx)(x.a,{updateOnWindowResize:!0,resizeObserver:!0,observer:!0,effect:"coverflow",mousewheel:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},spaceBetween:30,loop:!0,grabCursor:!0,centeredSlides:!0,slidesPerView:1,breakpoints:{768:{slidesPerView:2,centeredSlides:!1},1024:{slidesPerView:2.85}},coverflowEffect:{rotate:0,stretch:1,depth:50,modifier:1,slideShadows:!1},className:"mySwiper",pagination:!0,children:p.map((function(e){return Object(j.jsx)(O.a,{children:Object(j.jsxs)("div",{className:"slide",children:[Object(j.jsxs)("div",{className:"img-wrapper",children:[Object(j.jsx)("img",{src:e.img,alt:e.title}),Object(j.jsxs)("div",{className:"overlay",children:[Object(j.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:"Visit Site"}),Object(j.jsx)("a",{href:e.sourceCode,target:"_blank",rel:"noreferrer",children:"View Code"})]}),Object(j.jsx)("div",{class:"divider",children:Object(j.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(j.jsx)("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",class:"shape-fill"}),Object(j.jsx)("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",class:"shape-fill"}),Object(j.jsx)("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",class:"shape-fill"})]})})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("p",{children:e.desc}),Object(j.jsx)("ul",{children:e.toolbox.map((function(e){return Object(j.jsx)("li",{children:e})}))})]})]})})}))}),Object(j.jsx)("div",{class:"swiper-button-prev"}),Object(j.jsx)("div",{class:"swiper-button-next"})]})]})}u.a.use([v.a,g.a,f.a,N.a]);s(53),s(71);var y=function(){var e=Object(c.useState)({pageX:0,pageY:0}),t=Object(r.a)(e,2),s=t[0],a=t[1],i=function(e){var t=e.pageX,s=e.pageY;a({pageX:t,pageY:s})};return Object(c.useEffect)((function(){return document.addEventListener("mousemove",i,!1),document.addEventListener("mouseenter",i,!1),function(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseenter",i)}}),[]),s};function k(e){var t=e.visibleElement,s=y(),c=s.pageX,a=s.pageY;return Object(j.jsxs)("div",{id:"about",className:"about"===t?"about active":"about",children:[Object(j.jsx)("div",{class:"divider",children:Object(j.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(j.jsx)("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",class:"shape-fill"}),Object(j.jsx)("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",class:"shape-fill"}),Object(j.jsx)("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",class:"shape-fill"})]})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h2",{children:"About"}),Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("h3",{children:"Languages I Speak"}),Object(j.jsx)("p",{children:"Javascript, React / JSX, HTML, CSS / Sass, SQL"}),Object(j.jsxs)("div",{className:"learning",children:[Object(j.jsx)("p",{children:"Currently learning "}),Object(j.jsxs)("div",{className:"dotdotdot",children:[Object(j.jsx)("span",{className:"dot",children:"."}),Object(j.jsx)("span",{className:"dot",children:"."}),Object(j.jsx)("span",{className:"dot",children:"."})]}),Object(j.jsx)("p",{children:" Node JS"})]}),Object(j.jsx)("h3",{children:"The Nitty-Gritty"}),Object(j.jsx)("a",{href:"".concat("/portfolio","/assets/CV-Kia-Hooper-Andersen.pdf"),className:"cv",download:!0,children:"Download CV"}),Object(j.jsxs)("p",{children:["Visit my",Object(j.jsx)("a",{href:"https://github.com/kiahooper",target:"_blank",rel:"noreferrer",children:"Github"}),"profile for more of my projects, my",Object(j.jsx)("a",{href:"https://www.linkedin.com/in/kia-hooper-andersen-367740221/",target:"_blank",rel:"noreferrer",children:"Linkedin"}),"profile for more information or just",Object(j.jsx)("a",{href:"#contact",target:"_blank",children:"contact me"}),"."]})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("div",{className:"skillsOrbit",children:Object(j.jsx)("div",{className:"orbit",children:Object(j.jsxs)("div",{className:"axis",children:[Object(j.jsxs)("div",{className:"axis",children:[Object(j.jsx)("div",{className:"axis",children:Object(j.jsx)("img",{className:"icon html",src:"".concat("/portfolio","/assets/icons/html.png"),alt:"html logo"})}),Object(j.jsx)("img",{className:"icon",src:"".concat("/portfolio","/assets/icons/css.png"),alt:"css logo"})]}),Object(j.jsxs)("div",{className:"axis2",children:[Object(j.jsx)("img",{src:"".concat("/portfolio","/assets/icons/JS.png"),alt:"JS logo"}),Object(j.jsx)("img",{className:"subIcon",src:"".concat("/portfolio","/assets/icons/react.png"),alt:"react logo"})]}),Object(j.jsx)("div",{className:"logoWrapper",children:Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("span",{}),Object(j.jsx)("svg",{viewBox:"0 0 92.25932 92.259996",xmlnsSvg:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:Object(j.jsx)("g",{inkscapeLabel:"Layer 1",inkscapeGroupmode:"layer",id:"layer1",transform:"translate(-112.12123,-26.584484)",children:Object(j.jsx)("path",{d:"m 161.14563,75.609417 v 43.235063 h 43.23492 z m -49.0244,-49.024933 h 42.20781 v 92.259856 h -42.20781 z"})})})]})})]})})}),Object(j.jsx)("h3",{children:"What I Do"}),Object(j.jsx)("p",{children:"Based near Melbourne, originally from Denmark, I am a keen software engineer with an affinity for web development."}),Object(j.jsxs)("p",{children:["I enjoy spending my time challenging myself, be it in or outside of work. Besides programming, I spend my time",Object(j.jsxs)("span",{className:"hover-wrapper",children:["surfing",Object(j.jsx)("img",{className:"hover-img",src:"".concat("/portfolio","/assets/aboutImages/surfing.JPG"),alt:"Kia surfing",style:{transform:"translate(calc(-90% + ".concat(c,"px), calc(-90% + ").concat(a,"px))")}})]}),",",Object(j.jsxs)("span",{className:"hover-wrapper",children:["scuba diving",Object(j.jsx)("img",{className:"hover-img",src:"".concat("/portfolio","/assets/aboutImages/scuba.JPG"),alt:"Kia scuba diving",style:{transform:"translate(calc(-90% + ".concat(c,"px), calc(-90% + ").concat(a,"px))")}})]}),",",Object(j.jsxs)("span",{className:"hover-wrapper",children:["hiking",Object(j.jsx)("img",{className:"hover-img",src:"".concat("/portfolio","/assets/aboutImages/hiking.JPG"),alt:"Kia hiking",style:{transform:"translate(calc(-90% + ".concat(c,"px), calc(-90% + ").concat(a,"px))")}})]}),"and more. I am always up for trying something new."]}),Object(j.jsx)("p",{children:"I believe that you should never stop challenging yourself to learn new things and move outside your comfort zone. The everchanging nature of software engineering is a big part of why I find it so rewarding."})]})]})]})}var E=s(21),C=s(31),S=s(20),_=s.n(S),A=(s(82),s(105)),P=s(106),M=s(107);function V(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVICE_ID:"service_1169jyd",REACT_APP_TEMPLATE_ID:"template_2f3vnjp",REACT_APP_USER_ID:"user_wqGoCX0EzMiTX99bmAZU5"}),s=t.REACT_APP_SERVICE_ID,a=t.REACT_APP_TEMPLATE_ID,i=t.REACT_APP_USER_ID,n=e.visibleElement,o=Object(c.useState)(!1),l=Object(r.a)(o,2),d=l[0],b=l[1];return Object(j.jsxs)("div",{id:"contact",className:"contact"===n?"contact active":"contact",children:[Object(j.jsx)("div",{class:"divider",children:Object(j.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(j.jsx)("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25"}),Object(j.jsx)("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5"}),Object(j.jsx)("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"})]})}),Object(j.jsx)("h2",{children:"Contact"}),Object(j.jsx)("div",{className:"background",children:Object(E.a)(Array(30)).map((function(e,t){return Object(j.jsx)("div",{className:"particle"},t)}))}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C.a.sendForm(s,a,e.target,i).then((function(e){console.log(e.text),_.a.fire({icon:"success",title:"Message Sent Successfully"})}),(function(e){console.log(e.text),_.a.fire({icon:"error",title:"Ooops, something went wrong",text:e.text})})),e.target.reset()},className:"form",children:[Object(j.jsxs)("label",{for:"email",children:["Email",Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)(A.a,{className:"icon"}),Object(j.jsx)("input",{id:"email",name:"reply_to",placeholder:"Email",required:!0})]})]}),Object(j.jsxs)("label",{for:"name",children:["Name",Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)(P.a,{className:"icon"}),Object(j.jsx)("input",{id:"name",name:"from_name",placeholder:"Name",required:!0})]})]}),Object(j.jsxs)("label",{for:"message",children:["Message",Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)(M.a,{className:"icon"}),Object(j.jsx)("textarea",{id:"message",name:"message",placeholder:"Message",required:!0})]})]}),Object(j.jsxs)("button",{type:"submit",className:d?"active":"",onClick:function(){b(!0),setTimeout((function(){b(!1)}),1e3)},children:["Get in touch",Object(E.a)(Array(30)).map((function(e,t){return Object(j.jsx)("div",{className:"btn-particle"},t)}))]})]})]})}s(83);function I(e){var t=e.visibleElement;return Object(j.jsx)("div",{className:"about"===t?"scrollPagination inverse":"scrollPagination",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{className:"home"===t?"active":"",children:[Object(j.jsx)("span",{}),Object(j.jsx)("p",{children:"Home"})]}),Object(j.jsxs)("li",{className:"projects"===t?"active":"",children:[Object(j.jsx)("span",{}),Object(j.jsx)("p",{children:"Projects"})]}),Object(j.jsxs)("li",{className:"about"===t?"active":"",children:[Object(j.jsx)("span",{}),Object(j.jsx)("p",{children:"About"})]}),Object(j.jsxs)("li",{className:"contact"===t?"active":"",children:[Object(j.jsx)("span",{}),Object(j.jsx)("p",{children:"Contact"})]})]})})}s(84);function T(){return Object(j.jsxs)("div",{className:"socialSidebar",children:[Object(j.jsx)("a",{href:"https://github.com/kiahooper",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:"".concat("/portfolio","/assets/icons/github.png"),alt:"github logo"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/kia-hooper-andersen-367740221/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:"".concat("/portfolio","/assets/icons/linkedin.png"),alt:"linkedin logo"})})]})}var R=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)("home"),n=Object(r.a)(i,2),o=n[0],l=n[1];return Object(c.useEffect)((function(){var e=document.querySelectorAll(".sections > *"),t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&l(e.target.id)}))}),{root:document.querySelector(".sections"),rootMargin:"0px",threshold:.5});return e.forEach((function(e){t.observe(e)})),function(){e.forEach((function(e){t.unobserve(e)}))}}),[]),Object(j.jsxs)("div",{className:"app "+"app_".concat(o),children:[Object(j.jsx)(d,{menuOpen:s,setMenuOpen:a,visibleElement:o}),Object(j.jsx)(h,{menuOpen:s,setMenuOpen:a}),Object(j.jsx)(I,{visibleElement:o}),Object(j.jsx)(T,{}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(m,{visibleElement:o}),Object(j.jsx)(w,{visibleElement:o}),Object(j.jsx)(k,{visibleElement:o}),Object(j.jsx)(V,{visibleElement:o})]})]})};n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.9c65ca65.chunk.js.map