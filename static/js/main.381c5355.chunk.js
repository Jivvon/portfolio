(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t(40)},36:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(14),r=t.n(i),c=(t(36),t(4)),s=t(5),o=t(7),m=t(6),u=t(8),p=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#activity"},"Activities")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner text-stroke"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline",style:{fontFamily:"IBMPlexSansKR-Medium"}},e.role," ",e.name,"\uc785\ub2c8\ub2e4."),l.a.createElement("h3",{style:{fontFamily:"IBMPlexSansKR-Regular"}},e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},"i"===e.tag?l.a.createElement("i",{className:e.className}):l.a.createElement("img",{className:e.className,src:e.src,alt:"".concat(e.name," link")})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profile.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Medium"},dangerouslySetInnerHTML:{__html:e.aboutme}}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Medium"},className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",{style:{fontFamily:"IBMPlexSansKR-Medium"}},e.UniversityName),l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Regular"},className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{style:{fontFamily:"IBMPlexSansKR-Regular"},className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfJoining," ",e.YearOfJoining," ~ ",e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.description)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription))))}}]),a}(n.Component),E=(t(38),t(13)),f=t(10),v=t(11),b=t(12),g=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.swiper=new E.a(".swiper-container",{preloadImages:!1,speed:2e3,pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3},slidesPerView:1,spaceBetween:30,loop:!0})}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.destroy()}},{key:"render",value:function(){E.a.use([E.a,f.a,v.a,b.a]);var e=this.props.resumeData;return $(".open-popup-link").magnificPopup({type:"inline",midClick:!0}),l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-thirds cf"},l.a.createElement("div",{className:"swiper-container"},l.a.createElement("div",{className:"swiper-wrapper"},e.portfolio&&e.portfolio.map(function(e,a){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center"},className:"swiper-slide"},l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{className:"open-popup-link",href:"#modal-".concat(a)},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",{style:{fontFamily:"IBMPlexSansKR-Medium"}},e.name),l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Medium"}},e.description)))))),l.a.createElement("div",{id:"modal-".concat(a),className:"white-popup popup-modal mfp-hide"},l.a.createElement("div",{className:"modal-box"},l.a.createElement("div",{className:"image-box"},l.a.createElement("img",{src:"".concat(e.preview),alt:"".concat(e.name," preview images")})),l.a.createElement("div",{className:"description-box"},l.a.createElement("h2",null,e.name),l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Regular"}},e.description),l.a.createElement("hr",null),l.a.createElement("h3",null,"Dev Period"),l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Medium"}},e.period),l.a.createElement("h3",null,"Stack"),l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Medium"}},e.stack),l.a.createElement("h3",null,"Contribute"),l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Medium"}},e.contribute),e.link&&l.a.createElement("a",{href:e.link,target:"_blank",style:{fontFamily:"IBMPlexSansKR-Medium"}},"link\xa0",l.a.createElement("i",{className:"fa fa-link"})),e.github&&l.a.createElement("a",{href:e.github,target:"_blank",style:{fontFamily:"IBMPlexSansKR-Medium"}},"github\xa0",l.a.createElement("i",{className:"fa fa-github"}))))))})),l.a.createElement("div",{className:"swiper-pagination swiper-pagination-black"}),l.a.createElement("div",{className:"swiper-button-prev swiper-button-black"}),l.a.createElement("div",{className:"swiper-button-next swiper-button-black"}))))))}}]),a}(n.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"activity"},["experience","activity","certificate"].map(function(a){return l.a.createElement("div",{className:"row ".concat(a)},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,a[0].toUpperCase()+a.slice(1)))),l.a.createElement("div",{className:"nine columns main-col"},e[a]&&e[a].map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",{style:{fontFamily:"IBMPlexSansKR-Medium"}},e.name),e.contents&&e.contents.map(function(e){return l.a.createElement("div",null,l.a.createElement("h5",{style:{fontFamily:"IBMPlexSansKR-Medium"}},e.title),l.a.createElement("ul",{style:{fontFamily:"IBMPlexSansKR-Light"}},e.descriptions&&e.descriptions.map(function(e){return l.a.createElement("li",null,"\u2022 ",e)})),e.description&&l.a.createElement("p",{style:{fontFamily:"IBMPlexSansKR-Light"}},e.description))}),"link"===e.type?l.a.createElement("a",{href:e.url,target:"_blank",style:{fontFamily:"IBMPlexSansKR-Regular"}},"link\xa0",l.a.createElement("i",{className:"fa fa-link"})):"github"===e.type?l.a.createElement("a",{href:e.url,target:"_blank",style:{fontFamily:"IBMPlexSansKR-Regular"}},"github\xa0",l.a.createElement("i",{className:"fa fa-github"})):l.a.createElement("a",null)))})))}))}}]),a}(n.Component),w=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead",style:{fontFamily:"IBMPlexSansKR-Medium"}},"\uc544\ub798 \uc5f0\ub77d\ucc98\ub85c \uc790\uc720\ub86d\uac8c \uc5f0\ub77d \uc8fc\uc138\uc694!"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email :\xa0",e.email),l.a.createElement("h4",null,"Phone :\xa0",e.phoneNumber)))))}}]),a}(n.Component),k=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},l.a.createElement("li",null,l.a.createElement("a",{href:e.socialLinks[0].url},l.a.createElement("i",{className:e.socialLinks[0].className}))))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),y={name:"\uc815\uc9c0\uc6d0",role:"\ub370\ube0c\uc635\uc2a4 \uc5d4\uc9c0\ub2c8\uc5b4",linkedinId:"jiwonj15",email:"jwjeong127@gmail.com",phoneNumber:"010-6850-0658",roleDescription:"\uc77c\uc758 \ud6a8\uc728\uc744 \ub04c\uc5b4\uc62c\ub9ac\ub294 \uac83\uc744 \uc990\uae41\ub2c8\ub2e4. \uac1c\ubc1c\uc790\uc758 \uc0dd\uc0b0\uc131\uc744 \uc99d\uac00\uc2dc\ud0a4\uac70\ub098, \ub9ac\uc18c\uc2a4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uc77c\uc5d0 \ud76c\uc5f4\uc744 \ub290\ub08d\ub2c8\ub2e4.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/jiwonj15/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/Jivvon",className:"fa fa-github"}],aboutme:"\uc548\ub155\ud558\uc138\uc694. \ub370\ube0c\uc635\uc2a4 \uc5d4\uc9c0\ub2c8\uc5b4 \uc815\uc9c0\uc6d0\uc785\ub2c8\ub2e4.\n<br>\uc800\ub294 <code>\uc0dd\uc0b0\uc131</code>, <code>\ud6a8\uc728\uc131</code>, <code>\uc790\ub3d9\ud654</code>\ub97c \uc911\uc694\uc2dc\ud558\uba70 \uc790\uc5f0\uc2a4\ub808 CI/CD \ud30c\uc774\ud504\ub77c\uc778, \uc544\ud0a4\ud14d\ucc98, \ucee8\ud14c\uc774\ub108 \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158 \ub4f1\uc5d0 \uad00\uc2ec\uc744 \uac00\uc9c0\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ucd5c\uadfc\uc5d0\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \ud559\uc2b5\ud558\uace0 \uc788\uc73c\uba70 Grafana, Prometheus, Promtail, Loki\ub97c \uc774\uc6a9\ud558\uc5ec \ud074\ub7ec\uc2a4\ud130\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \ub9ac\uc18c\uc2a4\uc758 \uba54\ud2b8\ub9ad\uacfc \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub85c\uadf8\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud558\uc5ec \uc6b4\uc601\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n<span>\uac19\uc774 \uc77c\ud558\uace0 \uc2f6\uc740, \ucc45\uc784\uac10 \uc788\ub294 \uac1c\ubc1c\uc790(\uc5d4\uc9c0\ub2c8\uc5b4)</span>\uac00 \ub418\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \uc0bc\uace0 \uc788\uc73c\uba70 \uc131\uc7a5\ud558\ub294 \ub290\ub08c\uc774 \ub4e4 \ub54c \uac00\uc7a5 \ud589\ubcf5\ud569\ub2c8\ub2e4.",address:"Korea",website:"jwjeong127@gmail.com",education:[{UniversityName:"\ucda9\ub0a8\ub300\ud559\uad50",specialization:"\ucef4\ud4e8\ud130\uacf5\ud559",MonthOfPassing:"Feb",YearOfPassing:"2022 (\uc878\uc5c5 \uc608\uc815)"}],work:[{CompanyName:"\uc5d0\uc2a4\uc544\uc774\uc5d0\uc774(SI Analytics)",specialization:"DevOps Engineer",MonthOfJoining:"Mar",YearOfJoining:"2021",MonthOfLeaving:"\uc7ac\uc9c1 \uc911",description:"\uc778\ud134 | Mar 2021 ~ Aug 2021, \uacc4\uc57d\uc9c1 | Sep 2021 ~ \ud604\uc7ac"}],skillsDescription:"Docker, Kubernetes, Grafana, Prometheus, Loki, Python, AWS",skillsCategory:[{name:"language",skills:[{skillname:"Python"},{skillname:"Go"}]},{name:"grafana stack",skills:[{skillname:"Grafana"},{skillname:"Prometheus"},{skillname:"Loki"}]},{name:"container",skills:[{skillname:"Docker"},{skillname:"Kubernetes"}]},{name:"etc",skills:[{skillname:"RabbitMQ"},{skillname:"Git"},{skillname:"AWS"}]}],portfolio:[{name:"Cartoonizer using GAN",description:"GAN\uc744 \ud65c\uc6a9\ud558\uc5ec 2D/3D \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud558\ub294 \uc6f9\uc785\ub2c8\ub2e4.",imgurl:"images/portfolio/Cartoonizer-using-GAN.png",preview:"images/portfolio/modals/Cartoonizer-using-GAN.gif",period:"2021/01 ~ 2021/02",stack:"#React.js #Flask #Gunicorn #Nginx #RabbitMQ #Redis #PostgreSQL #Docker #Prometheus #Grafana #AWS #Git #Slack",github:"https://github.com/SV-TeamD/Woowha",contribute:"Backend(all), Frontend(fix, refactor)"},{name:"\ucda9\ub0a8\ub300\ud559\uad50 \ucef4\ud4e8\ud130\uacf5\ud559\uacfc \uacf5\uc9c0\uc0ac\ud56d \uc54c\ub9ac\ubbf8",description:"\ucda9\ub0a8\ub300\ud559\uad50 \ucef4\ud4e8\ud130\uacf5\ud559\uacfc \uacf5\uc9c0\uc0ac\ud56d\uc744 Slack\uc73c\ub85c \uc54c\ub824\uc8fc\ub294 \ubd07\uc785\ub2c8\ub2e4. \uc77c\uc815\ud55c \uc2dc\uac04 \uac04\uaca9\uc73c\ub85c \uc138 \uc885\ub958\uc758 \uacf5\uc9c0\uc0ac\ud56d\uc744 \ud06c\ub864\ub9c1\ud558\uba70 AWS EC2\ub85c \ubc30\ud3ec\ud558\uc600\uc2b5\ub2c8\ub2e4.",imgurl:"images/portfolio/cnu-computer-noti-preview.png",preview:"images/portfolio/modals/cnu-computer-noti-architecture.png",period:"2020/03, 2020/07",stack:"#Python #Docker #AWS #Git #Slackbot",github:"https://github.com/Jivvon/cnu-computer-noti",contribute:"Backend(all)"},{name:"\uae30\uc0c1\uc815\ubcf4\uc9c0\uc6d0\uce58\uacc4",description:"\uad70 \ubcf5\ubb34\uc2dc\uc808 \uc9c4\ud589\ud588\ub358 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \ube44\ud589\uc791\uc804 \uc804\ud6c4\uc5d0 \uc0ac\ub839\uad00 \ub4f1\uc774 \uc608\ubcf4\uad00\ub4e4\uc774 \uc785\ub825\ud55c \uc815\ubcf4, \uae30\uc0c1\ub370\uc774\ud130 \ub4f1\uc744 \ubcfc \uc218 \uc788\ub294 \ube44\ud589\uc791\uc804\uc9c0\uc6d0\uccb4\uacc4, \ucd1d 42\uac1c\uc758 \ud654\uba74\uc73c\ub85c \uad6c\uc131\ub418\uc5b4\uc788\uc73c\uba70 \uae30\uc0c1\ub370\uc774\ud130 \uc785\ub825 \ubc0f \uc5c5\ub85c\ub4dc, \uc13c\uc11c\uc7a5\ube44\uac12 \ubc0f \uc0c1\ud0dc \ud655\uc778, HA, \ucc28\ud2b8, \ud48d\ubc30\ub3c4 \ub370\uc774\ud130 \uc2dc\uac01\ud654 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",imgurl:"images/portfolio/ROKAF.jpeg",preview:"images/portfolio/modals/AMOS-windrose.jpg",period:"2016/04 ~ 2018/02",stack:"#Vue.js #Node.js #Express #D3.js #MongoDB #Nginx",link:"https://github.com/Jivvon/jivvon.github.io/blob/master/\uae30\uc0c1\uc815\ubcf4\uc9c0\uc6d0\uccb4\uacc4.md",contribute:"Backend(Real-time wind data), Frontend(windrose, chart)"}],experience:[{name:"DevOps Engineer in SI Analytics [2021.03~]",contents:[{title:"Kubernetes \ud658\uacbd\uc5d0\uc11c \ubaa8\ub2c8\ud130\ub9c1 \uc2dc\uc2a4\ud15c \uad6c\ucd95",descriptions:["\uac01\uc885 Exporter\uc640 Prometheus, Loki\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba54\ud2b8\ub9ad\uacfc \ub85c\uadf8\ub97c \uc218\uc9d1 \ubc0f \uc800\uc7a5\ud558\uace0 Grafana\ub97c \ud1b5\ud574 \ub300\uc2dc\ubcf4 \ub4dc\ub85c \uc2dc\uac01\ud654\ud558\ub294 \ubaa8\ub4e0 \uc2dc\uc2a4\ud15c \uad6c\ucd95","GPU \uba54\ud2b8\ub9ad\uc744 \uac00\uc838\uc624\ub294 nvidia/gpu-monitoring-tools \uc774\ubbf8\uc9c0\ub97c GPU \ubaa8\ub378\uba85\uacfc \uc0ac\uc6a9\ub960\uc774 \ub098\uc624\ub3c4\ub85d \uc218\uc815 \ud6c4 \uc774\ub97c \uc0ac\uc6a9\ud558\ub294 dcgm-exporter\ub97c \ud1b5\ud574 GPU \uba54\ud2b8\ub9ad \uc218\uc9d1","\ub9ac\uc18c\uc2a4 \uc0ac\uc6a9\ub7c9\uc774 \ud2b9\uc815 \uae30\uc900\ubcf4\ub2e4 \ub192\uc744 \uacbd\uc6b0 MS Teams\ub85c \uc54c\ub9bc\uc744 \uc804\uc1a1\ud558\ub3c4\ub85d \uc124\uc815","ArgoCD\ub97c \ud65c\uc6a9\ud558\uc5ec GitOps \ubc29\uc2dd\uc73c\ub85c \ubc30\ud3ec"]},{title:"Kubernetes \ud074\ub7ec\uc2a4\ud130\ubcc4 \uc811\uadfc \uc81c\uc5b4 \ud658\uacbd \uad6c\ucd95 \ubc0f \uc6b4\uc601",descriptions:["\uc0ac\uc6a9\uc790\ubcc4 User account\ub97c \ubc1c\uae09\ud558\uace0 RBAC(ClusterRole, Role)\ub97c \ud65c\uc6a9\ud558\uc5ec \ud074\ub7ec\uc2a4\ud130\ubcc4 \uc811\uadfc \uc81c\uc5b4\uac00 \uac00\ub2a5\ud55c Helm chart \uc791\uc131","ArgoCD\ub97c \ud65c\uc6a9\ud558\uc5ec GitOps \ubc29\uc2dd\uc73c\ub85c \ubc30\ud3ec"]},{title:"Kubernetes \ud658\uacbd \ubc31\uc5c5 \ubc0f \ubcf5\uc6d0 \uc2dc\uc2a4\ud15c \uad6c\ucd95",descriptions:["Harbor | Database \ub364\ud504\ub97c \uc0dd\uc131\ud558\ub294 \uc2a4\ud06c\ub9bd\ud2b8 \uc791\uc131 \ud6c4 cronjob\uc73c\ub85c \uc2e4\ud589","ETCD | Etcdctl\uc744 \uc774\uc6a9\ud558\uc5ec \uc2a4\ub0c5\uc0f7 \uc0dd\uc131\ud558\ub294 \uc2a4\ud06c\ub9bd\ud2b8 \uc791\uc131 \ud6c4 cronjob\uc73c\ub85c \uc2e4\ud589","K8S Resources | velero\ub97c \uc774\uc6a9\ud558\uc5ec \uc8fc\uae30\uc801\uc73c\ub85c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ubcc4 \ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\ub97c minio\uc5d0 \ubc31\uc5c5"]}],type:"none"},{name:"2021 Silicon Valley Online Internship [2021.01~2021.02]",contents:[{title:"",description:"2021 Silicon Valley Online Internship\uc5d0\uc11c 'GAN\uc744 \ud65c\uc6a9\ud558\uc5ec 2D/3D \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud558\ub294 \uc6f9' \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud300 \ub9ac\ub354\uc774\uc790 \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c \ucc38\uc5ec\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc11c\ubc84\ubd80\ud130 \uac1c\ubc1c \ud658\uacbd \uad6c\uc131, \ubaa8\ub378 \uc11c\ube59\ub4f1 \ud504\ub85c\uc81d\ud2b8\uc758 \uc804\ubc18\uc801\uc778 \ubd80\ubd84\uc744 \ub2f4\ub2f9\ud558\uc600\uc73c\uba70 \ubaa8\ub378 \uc11c\ubc84\ub97c \uc5ec\ub7ec \uac1c\uc758 \ucee8\ud14c\uc774\ub108\ub85c \ub450\uace0 \uba54\uc138\uc9c0 \ud050(RabbitMQ)\ub97c \ud1b5\ud574 \uc791\uc5c5\uc744 \ubd84\ubc30\ud558\uac70\ub098 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uace0\ub824\ud558\uc5ec \uc778\uba54\ubaa8\ub9ac \ubc29\uc2dd\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4(Redis)\ub97c \uce90\uc2dc\ub85c \uc0ac\uc6a9\ud558\ub294 \ub4f1 \uae30\uc220\uc801\uc73c\ub85c \uc0c8\ub85c\uc6b4 \uc2dc\ub3c4\ub97c \ub9ce\uc774 \ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4."}],type:"github",url:"https://github.com/SV-TeamD/Woowha"}],activity:[{name:"\uc624\ud508\uc18c\uc2a4 \ucee8\ud2b8\ub9ac\ubdf0\ud1a4 - Backend.AI [2020.08~2020.09]",contents:[{title:"",description:"\uc808\ub300\uc801\uc778 \uae30\uc5ec\ub7c9\uc740 \uc791\uace0 \uadc0\uc5ec\uc6e0\uc9c0\ub9cc \ucf54\ub4dc\ub97c \uc774\ud574\ud558\ub294 \uac83\ubd80\ud130 \ubc84\uc804 \uad00\ub9ac, PR, \ucee4\ubc0b \ucee8\ubca4\uc158 \uc9c0\ud0a4\uae30 \ub4f1 \uc624\ud508\uc18c\uc2a4\uc5d0 \uae30\uc5ec\ud558\uae30 \uc704\ud55c \uc804\uccb4\uc801\uc778 \uacfc\uc815\uc744 \uacaa\uc740 \ub355\uc5d0 \uc624\ud508\uc18c\uc2a4 \uc0dd\ud0dc\uacc4\ub97c \uc774\ud574\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 Git\uc744 \ud6e8\uc52c \uc798 \ud65c\uc6a9\ud558\uac8c \ub418\uc5b4 \ud604\uc7ac\uae4c\uc9c0\ub3c4 \uac00\uc7a5 \ub3c4\uc6c0\uc774 \ub41c \ud65c\ub3d9\uc774\uc5c8\uc2b5\ub2c8\ub2e4.\ub300\ud68c \ub9c8\uc9c0\ub9c9 \uc8fc\uc5d0\ub294 \ud300\uc744 \ub300\ud45c\ud558\uc5ec \ubc1c\ud45c\ub97c \ud558\uae30\ub3c4 \ud558\uc600\uc2b5\ub2c8\ub2e4. "}],type:"link",url:"https://github.com/lablup/backend.ai-webui/commits?author=Jivvon"}],certificate:[{name:"OPIc (English) Intermediate High",contents:[{title:"",description:"\ubc1c\ud589\uc77c: 2021\ub144 11\uc6d4 \xb7 \ub9cc\ub8cc\uc77c: 2023\ub144 11\uc6d4 / from ACTFL"}]},{name:"SQL Developer",contents:[{title:"",description:"\ubc1c\ud589\uc77c: 2020\ub144 6\uc6d4 \xb7 \ub9cc\ub8cc\uc77c: 2022\ub144 6\uc6d4 / from \ud55c\uad6d\ub370\uc774\ud130\uc9c4\ud765\uc6d0"}]}]},j=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:y}),l.a.createElement(d,{resumeData:y}),l.a.createElement(h,{resumeData:y}),l.a.createElement(g,{resumeData:y}),l.a.createElement(N,{resumeData:y}),l.a.createElement(w,{resumeData:y}),l.a.createElement(k,{resumeData:y}))}}]),a}(n.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/portfolio","/service-worker.js");O?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):M(a,e)})}}()}},[[31,2,1]]]);
//# sourceMappingURL=main.381c5355.chunk.js.map