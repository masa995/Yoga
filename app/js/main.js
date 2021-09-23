"use strict";var body=document.querySelector("body"),linksProgram=document.querySelectorAll(".js-link-program"),popupCloseBtn=document.querySelector(".js-button-close"),popup=document.querySelector(".js-popup"),popupLink=document.querySelector(".js-popup-link"),popupContent=document.querySelector(".js-popup-content"),dataProgram=[{title:'<h2 class="title popup__title">Хатха-йога</h2>',text:'<div class="popup__text">\n\t\t\t\tХатха-йога учит сознательно и внимательно относиться к своему здоровью. \n\t\t\t\tЗдесь много упражнений, позволяющих со временем восстанавливать нормальную \n\t\t\t\tработу организма, излечиваться. Во время занятий чередуются напряжение и \n\t\t\t\tрасслабление, что позволяет достичь лучшего результата, укрепить здоровье.\n\t\t\t</div>',img:'<picture>\n\t\t\t\t\t<source srcset="img/program-1.webp" type="image/webp">\n\n\t\t\t\t\t<img src="img/program-1.jpg" alt="Фото занятия" class="program-slider__img">\n\t\t\t\t</picture>'},{title:'<h2 class="title popup__title">Аштанга-йога</h2>',text:'<div class="popup__text">\n\t\t\t\tАштанга-йога — это особая практика, сформировавшаяся в русле хатха-йоги. \n\t\t\t\tЕсли классическая йога уделяет первоочередное внимание дыхательным упражнениям, \n\t\t\t\tразвитию гибкости и расслаблению, то аштанга-йога формирует силу духа и тела.\n\t\t\t</div>',img:'<picture>\n\t\t\t\t\t<source srcset="img/program-2.webp" type="image/webp">\n\n\t\t\t\t\t<img src="img/program-2.jpg" alt="Фото занятия" class="program-slider__img">\n\t\t\t\t</picture>'},{title:'<h2 class="title popup__title">Йога для беременных</h2>',text:'<div class="popup__text">\n\t\t\t\tЙога для беременных делает тело гибким, растягивает и расслабляет мышцы. \n\t\t\t\tОна, также, успокаивает, учит контролировать дыхание и, прежде всего, \n\t\t\t\tподготавливает тело женщины к родам.\n\t\t\t</div>',img:'<picture>\n\t\t\t\t\t<source srcset="img/program-3.webp" type="image/webp">\n\n\t\t\t\t\t<img src="img/program-3.jpg" alt="Фото занятия" class="program-slider__img">\n\t\t\t\t</picture>'},{title:'<h2 class="title popup__title">Fly-йога</h2>',text:'<div class="popup__text">\n\t\t\t\tПлюс йоги в гамаках заключается в том, \n\t\t\t\tчто она гораздо быстрее развивает гибкость и разгружает позвоночник. \n\t\t\t\tВо время уроков задействованы основные мышцы корпуса,\n\t\t\t\tчто особенно важно для людей с сидячей профессией. \n\t\t\t\tБалансирование в гамаке значительно улучшает координацию движений,\n\t\t\t\tразвивает вестибулярный аппарат и приносит состояние легкости и контроля над телом.\n\t\t\t</div>',img:'<picture>\n\t\t\t\t\t<source srcset="img/program-1.webp" type="image/webp">\n\n\t\t\t\t\t<img src="img/program-1.jpg" alt="Фото занятия" class="program-slider__img">\n\t\t\t\t</picture>'}];linksProgram.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),popup.classList.add("active"),lock();var e=t.currentTarget.getAttribute("data-program");if(null!==e){var i=parseInt(e),o=dataProgram[i],r=o.title,n=o.text,l=o.img;popupContent.innerHTML="\n\t\t\t".concat(r,'\n\t\t\t<div class="popup__content">\n\t\t\t\t').concat(n,"\n\t\t\t\t").concat(l,"\n\t\t\t</div>\n\t\t\t")}}))})),popupCloseBtn.addEventListener("click",(function(t){popup.classList.remove("active"),unlock()})),popupLink.addEventListener("click",(function(t){t.preventDefault(),popup.classList.remove("active"),unlock();var e=popupLink.getAttribute("href"),i=document.querySelector(e).getBoundingClientRect().top-headerHeight;window.scrollBy({top:i,behavior:"smooth"})}));var sliderProgram=document.querySelector(".programs__swiper-container"),sliderVideo=document.querySelector(".videos__swiper-container"),playButtonVideo=document.querySelectorAll(".js-btn-play"),slideVideo=document.querySelectorAll(".videos"),swiperProgram=new Swiper(sliderProgram,{centeredSlides:!0,spaceBetween:65,slidesPerView:1.1,loop:!0,breakpoints:{650:{centeredSlides:!1,slidesPerView:2.1,spaceBetween:65},1130:{centeredSlides:!1,slidesPerView:3.1,spaceBetween:85}},pagination:{el:".program-slider__pagination",clickable:!0}}),swiperVideo=new Swiper(sliderVideo,{centeredSlides:!0,slidesPerView:1,spaceBetween:15,loop:!0,breakpoints:{630:{spaceBetween:50,slidesPerView:1.1}},pagination:{el:".videos-slider__pagination",clickable:!0}});playButtonVideo.forEach((function(t){t.addEventListener("click",(function(t){t.currentTarget.closest(".js-slide-video").querySelector("video").play(),t.currentTarget.style.display="none"}))})),swiperVideo.on("transitionEnd",(function(){document.querySelectorAll(".js-slide-video video").forEach((function(t){t.pause(),t.currentTime=0})),playButtonVideo.forEach((function(t){t.style.display="block"}))})),body.addEventListener("click",(function(t){t.target.closest(".js-slide-video")||(document.querySelectorAll(".js-slide-video video").forEach((function(t){t.pause()})),playButtonVideo.forEach((function(t){t.style.display="block"})))}));var form=document.querySelector(".js-form");new window.JustValidate(".js-form",{rules:{name:{required:!0},email:{required:!0,email:!0}},messages:{name:{required:"Введите имя"},email:{required:"Введите почту",email:"Формат почты неверный"}},submitHandler:function(t){console.log("Валидация успешна!"),t.reset()}});var html=document.querySelector("html"),header=(body=document.querySelector("body"),document.querySelector(".js-header")),burger=document.querySelector(".js-menu__btn"),menu=document.querySelector(".js-menu__list"),links=document.querySelectorAll(".js-links"),widthScroll=window.innerWidth-document.documentElement.clientWidth+"px",headerHeight=header.clientHeight;function lock(){html.classList.add("html_lock"),body.classList.add("lock"),body.style.paddingRight=widthScroll}function unlock(){html.classList.remove("html_lock"),body.classList.remove("lock"),body.style.paddingRight=0}burger.addEventListener("click",(function(){burger.classList.toggle("active"),menu.classList.toggle("active"),html.classList.toggle("html_lock"),body.classList.toggle("lock")})),links.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href"),i=document.querySelector(e).getBoundingClientRect().top-headerHeight;window.scrollBy({top:i,behavior:"smooth"}),burger.classList.remove("active"),menu.classList.remove("active"),unlock()}))}));
//# sourceMappingURL=main.js.map
