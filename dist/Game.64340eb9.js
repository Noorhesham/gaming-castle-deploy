function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},a=t.parcelRequire4a28;null==a&&((a=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire4a28=a),a.register("27Lyk",function(t,s){e(t.exports,"register",()=>i,e=>i=e),e(t.exports,"resolve",()=>a,e=>a=e);var i,a,r={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},a=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("kddcW",function(e,t){e.exports=new URL(a("27Lyk").resolve("4z9kP"),import.meta.url).toString()}),a.register("iOYCG",function(e,t){e.exports=new URL(a("27Lyk").resolve("9Fi2a"),import.meta.url).toString()}),a.register("4v3SY",function(e,t){e.exports=new URL(a("27Lyk").resolve("9X8th"),import.meta.url).toString()}),a.register("bo2mY",function(e,t){e.exports=new URL(a("27Lyk").resolve("jaF55"),import.meta.url).toString()}),a.register("hYpli",function(e,t){e.exports=new URL(a("27Lyk").resolve("4Ne7O"),import.meta.url).toString()}),a.register("4newR",function(e,t){e.exports=new URL(a("27Lyk").resolve("2b5vX"),import.meta.url).toString()}),a.register("5GyMI",function(e,t){e.exports=new URL(a("27Lyk").resolve("2W5jg"),import.meta.url).toString()}),a.register("7WYPG",function(e,t){e.exports=new URL(a("27Lyk").resolve("7VPqf"),import.meta.url).toString()}),a.register("3yWhF",function(e,t){e.exports=new URL(a("27Lyk").resolve("1cQzB"),import.meta.url).toString()}),a.register("cpNfy",function(e,t){e.exports=new URL(a("27Lyk").resolve("fIjGl"),import.meta.url).toString()}),a.register("676oJ",function(e,t){e.exports=new URL(a("27Lyk").resolve("ix0DV"),import.meta.url).toString()}),a.register("iymsg",function(e,t){e.exports=new URL(a("27Lyk").resolve("aXfLE"),import.meta.url).toString()}),a.register("bEb8M",function(e,t){e.exports=new URL(a("27Lyk").resolve("fdnlj"),import.meta.url).toString()}),a.register("bHFHk",function(e,t){e.exports=new URL(a("27Lyk").resolve("5P8i2"),import.meta.url).toString()}),a.register("4DMdl",function(e,t){e.exports=new URL(a("27Lyk").resolve("3sgQx"),import.meta.url).toString()}),a.register("8IpPN",function(e,t){e.exports=new URL(a("27Lyk").resolve("aB8PB"),import.meta.url).toString()}),a.register("fBRPm",function(e,t){e.exports=new URL(a("27Lyk").resolve("90gb2"),import.meta.url).toString()}),a.register("2MAgr",function(e,t){e.exports=new URL(a("27Lyk").resolve("efTGw"),import.meta.url).toString()}),a.register("khdXh",function(e,t){e.exports=new URL(a("27Lyk").resolve("jaoxq"),import.meta.url).toString()}),a.register("3QxLK",function(e,t){e.exports=new URL(a("27Lyk").resolve("2Cw9J"),import.meta.url).toString()}),a("27Lyk").register(JSON.parse('{"h47UK":"Game.64340eb9.js","4z9kP":"spider-man-2-video-hero-banner-desktop-01-en-19sep23.88f9c946.mp4","9Fi2a":"poster.62f5f6de.webp","9X8th":"news1title.6d915a9f.webp","jaF55":"cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.49553fc7.mp4","4Ne7O":"poster2.ce091526.webp","2b5vX":"iconcyber.8b0583fb.webp","2W5jg":"news1.34838739.webp","7VPqf":"ps5icon.7346ef9c.png","1cQzB":"news2.a48cb6db.webp","fIjGl":"news2title.8b1e5d11.webp","ix0DV":"news4.476d8ebf.jpg","aXfLE":"game1.6a19ded7.webp","fdnlj":"game2.1551d033.webp","5P8i2":"uncharted.04c51fd6.png","3sgQx":"game4.fc74e27e.jpg","aB8PB":"game5.d1814a02.webp","90gb2":"game6.bc52bb37.webp","efTGw":"video2.acb69fa3.jpg","jaoxq":"video3.640fd35c.webp","2Cw9J":"video4.caf32044.avif"}'));var r=a("7nhm9"),o=a("dyZ81");a("axLMF");class l{constructor(e,t,s,i,a,r){this.buttons=s,this.prevscrollleft=r,this.prevpagex=a,this.isdragstart=!1,this.slider=e}addhandler(e){this.slider?.addEventListener("click",t=>{console.log(t.target);let s=t.target.closest("#detail");if(!s)return;let i=s.dataset.detail;console.log(i),e(i)})}render(e,t=!1,s=!1,i=!1){i?e.forEach((e,a)=>{this.slider?.insertAdjacentHTML("afterbegin",this.generatemarkupSlide(e,a,t,s,i))}):e.forEach((e,a)=>{this.slider?.insertAdjacentHTML("beforeend",this.generatemarkupSlide(e,a,t,s,i))})}generatemarkupSlide(e,t,s,i,a){return s||i||a?s?` <div class="game-slide" id=${e.id}>
      <div class="game-slide__info">
        <h2 class="game-slide__title">${e.name}</h2>
        <p class='game-slide__paragraph'>${e.detail}</p>
        <a href="gamedetailed.html" id='detail' data-detail=${e.id} class="${e.class} button button-nomargin">discover more</a>
        </div>
      <div class="game-slide__background">
        <img
          src="${e.background}"
          alt=""
          class="game-slide__photo"
          draggable="false"
        />
      </div>
    </div>`:i?` <div class="game-slide game-slide-2">
    <div class="video">
      <iframe  class="game-slide__photo video__player video__iframe" src="${e.video}"frameborder="0"allowfullscreen allow="autoplay"></iframe>            
      <span class="circle video__icon"><i class="fa-solid fa-play" style="color: #f4f2f2;"></i>   </span>
      <img src="${e.poster}" class="game-slide__photo video__cover" alt="">
      <i class="fa-brands fa-youtube youtube__icon" style="color: #fd1c27;"></i>
         </div>  `:a?` <div class="screen-slide" data-slide=${t}>
         <div class="screen-slide__background">
           <img
             src="${e.image}"
             alt=""
             class="screen-slide__photo"
             draggable="false"
           />
         </div>
       </div> `:void 0:`<div  class="mini-slide" id=${e.id}>
        <div  class="mini-slide__background">
          <img
            src="${e.background_image}"
            alt=""
            class="mini-slide__photo"
            draggable="false"
          />
        </div>
        <div class="mini-slide__info">
          <a href="gamedetailed.html" id='detail' data-detail=${e.id} class="mini-slide__title">${e.name}</a>
        </div>
      </div>`}infinte(){let e=Math.round(this.slider.offsetWidth/this.slider.firstElementChild.offsetWidth),t=[...this.slider.children];t.slice(-e).reverse().forEach(e=>this.slider.insertAdjacentHTML("afterbegin",e.outerHTML)),t.slice(0,e).forEach(e=>this.slider.insertAdjacentHTML("beforeend",e.outerHTML))}dragstart(e){this.isdragstart=!0,this.prevpagex=e.pageX,this.prevscrollleft=this.scrollLeft,this.classList.add("dragging")}dragstop(){this.isdragstart=!1,this.classList.remove("dragging")}dragging(e){if(!this.isdragstart)return;e.preventDefault();let t=e.pageX-this.prevpagex;this.scrollLeft=this.prevscrollleft-t}infintescroll(){0===this.scrollLeft?this.scrollLeft=this.scrollWidth-2*this.offsetWidth:Math.floor(this.scrollLeft)===this.scrollWidth-this.offsetWidth&&(this.scrollLeft=this.offsetWidth)}sliderMove(e=!1){this.slider.addEventListener("mousedown",this.dragstart),this.slider.addEventListener("mousemove",this.dragging),this.slider.addEventListener("mouseup",this.dragstop),e&&this.slider.addEventListener("scroll",this.infintescroll)}clickButtons(){let e=this.slider?.firstElementChild.offsetWidth;this.buttons.forEach(t=>{t.addEventListener("click",()=>this.slider.scrollLeft+="left"===t.id?-e:+e)})}}var n=a("axLMF");a("2lAcg");class d{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._data.length||this.renderError();let t=this.generatemarkup();this._clear(),this._parentEl?.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentEl&&(this._parentEl.innerHTML="")}loadSpinner(e=!1){let t=`<div class="spinner ${e?"spinsmall":""}">
        <i class="fa-solid fa-spinner spinning" style="color: #2d73eb;"></i>
            </div>`;this._clear(),this._parentEl?.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){console.log(e,this);let t=`<h2 class="sub-title sub-title-primary alert"> ${e}</h2></div>`;this._clear(),this._parentEl?.insertAdjacentHTML("afterbegin",t)}}class c extends d{_parentEl=document.querySelector(".Game-details");clicked;addhandler(e,t){this._parentEl?.addEventListener("click",t=>{t.preventDefault();let s=t.target.closest("#detail");if(!s)return;let i=s.dataset.detail;e(i)}),this._parentEl?.addEventListener("click",e=>{e.preventDefault();let s=e.target.closest("#addwishlist");s&&t(this._data,s.dataset.id)})}viewscreen(e){let t=function(){document.querySelector(".slider-screen ").classList.add("hidden-2"),document.querySelector(".pagi-screen").classList.add("hidden-2"),document.querySelector("header").classList.remove("hidden-2"),document.querySelector(".slider-screen ").classList.add("hidden-2"),document.querySelector(".exist").classList.add("hidden-2"),document.querySelector(".overlay").classList.add("hidden-2"),document.documentElement.style.overflow="auto",document.body.scroll="yes"},s=0;document.querySelector(".screenshot-slider")?.addEventListener("click",function(t){let i=t.target.closest(".screen-slide__photo");s=t.target.closest(".screen-slide").dataset.slide,i&&(document.querySelector(".slider-screen ").classList.remove("hidden-2"),document.querySelector(".slider-screen ").classList.add("screenshot-active"),document.querySelector(".pagi-screen").classList.remove("hidden-2"),document.querySelector(".pagi-screen").classList.add("pagi-active"),document.querySelector("header").classList.add("hidden-2"),document.querySelector(".overlay").classList.remove("hidden-2"),document.querySelector(".exist").classList.remove("hidden-2"),document.documentElement.style.overflow="hidden",document.body.scroll="no",e.slideMove(s))}),document.querySelector(".exist")?.addEventListener("click",t.bind(this)),document.querySelector(".overlay")?.addEventListener("click",t.bind(this))}generatemarkup(){return`        <div class="overlay hidden-2"></div>
        <div class="slider slider-1">
        <div class="slide-1 slided">
            <div class="gradient"></div>
          <div class="slide__background">
            <img src=${this._data.background} class="slide__photo slide__photo-3">
          </div>
          <div class="game-info">
                <h2 class="game-name">${this._data.title}</h2>
                <div class="bold-title">${this._data.developers[0].name}</div>
                <div class="game__plattforms game__plattforms-1">
                <div class="sub-title sub-title-1 margin-r-s">avilable on 🎮</div>
                ${this._data.platforms.map(e=>`<div class="game__plattform game__plattform-1">${e.platform.name}
                ${e.platform.name.includes("PlayStation")?'<i class="fa-brands fa-playstation margin-l-s icon-size" style="color: #3878e5;"></i>':e.platform.name.includes("PC")?'<i class="fa-brands fa-windows margin-l-s icon-size" style="color: #ffffff;"></i>':e.platform.name.includes("Xbox")?'<i class="fa-brands fa-xbox margin-l-s icon-size" style="color: #1eae3b;"></i>':""}</div>`).join("")}
                </div>
                <div class="game__plattforms game__plattforms-1">
              <div class="bold-title margin-r-s">rating 🤩</div>
              ${(function(){let e=[];for(var t=0;t<this._data.rating;t++)e.push('<div class="game__icon"><i class="fa-solid fa-star" style="color: #ffed24;"></i></div>');return e.join("")}).call(this)}
            </div>
           
              <a class="btn-glitch-fill" data-id=${this._data.id} id='addwishlist'>
                <span class="text">//add to wishlist</span><span class="text-decoration">_</span><span class="decoration">&rArr;</span>
              </a>
                <div class="sub-title sub-title-1 margin-r-s margin-top-s">Release date: ${this._data.realese?this._data.realese:"not know yet"} 🗓️</div>
              </div>
            </div>
            
      </div>
       <div class='outerslider'>
       <span class="game-btn game-buttonprev game-buttonprev-3" id="left"
       ><i class="fa-solid fa-circle-chevron-left" style="color: #234fd1;"></i></span>
     <span class="game-btn game-buttonnext game-buttonnext-3" id="right"
       ><i class="fa-solid fa-circle-chevron-right" style="color: #234fd1;"></i>
     </span>
       <div class="screenshot-slider">
    
       </div>
       </div>         


      <div class="slider slider-1">
        <div class="slide-1 slided">
            <div class="gradient gradient-2"></div>
          <div class="slide__background">
            <img src=${this._data.backgroundsec} class="slide__photo slide__photo-4">
            <div class="game-info game-info-2">
            <div class="box__title box__title-3">What is ${this._data.title}?</div>
            <div class="game__paragraph game-info__paragraph">
                ${this._data.description}
            </div>
        </div>
        </div>
        </div>
        </div>

        <div class='tags'>
        <h2 class="game-name game-name-2">tags for ${this._data.title}</h2>
        <div class="game__tags">
        ${this._data.tags.map(e=>`<div class="game__genre">${e.name}</div>`).join("")}
    </div>
    </div>
        <h2 class="tech__title center-title margin-bottom">games like ${this._data.title}</h2>
          <div class="search_results search_results-2">
          <img src=${this._data.screenshots[Math.floor(Math.random()*this._data.screenshots.length)]?.image} class='imagea'>
        ${0!==this._data.similargames.length?this._data.similargames.map(e=>`<div class="game game-gen">
        <div class="game__background game__background-gen">
          <img class="game__pic"
            src="${e.background_image}"
            alt=""
          />
          <div class="game__plattforms">
          ${e.parent_platforms.map(e=>`<div class="game__plattform ${"PlayStation"===e.platform.name?"ps":"PC"===e.platform.name?"def":"Xbox"===e.platform.name?"xbox1":""}">${e.platform.name}</div>`).join("")}
          </div>
        </div>
        <h2 class="game__title">${e.name}</h2>
        <div class="game__description">
        ${e.genres.map(e=>`<div class="game__genre">${e.name}</div>`).join("")}
        </div>
        <div class="date">${e.released}</div>
        <a href="gamedetailed.html" id='detail' class="button default game__button" data-detail=${e.id}>discover more<i class="fa-solid fa-angle-right iconn"></i></a>
      </div>`).join(""):`<h2 class="sub-title sub-title-primary alert">
      <span class="closebtn">❗❗</span>
      there is no similar games for ${this._data.title} 😭☹️!!!</h2>`} 
        </div>`}}new c;//NEWS SLIDER DATA
const m=[{image:a("kddcW"),subtitle:"Be Greater. Together.",content:"Peter Parker & Miles Morales return for an exciting new adventure in the acclaimed Marvel’s Spider-Man franchise, out October 20 for PS5.",btnclasses:"spider",button:"swing there",video:!0,poster:a("iOYCG"),photo:!0,icon:a("4v3SY")},{image:a("bo2mY"),subtitle:"Freedom always comes at a price…",content:"As cyber-enhanced mercenary V, join secret agent Solomon Reed to unravel a web of sinister political machinations.",btnclasses:"default",button:"find out more",video:!0,poster:a("hYpli"),photo:!0,icon:a("4newR")},{image:a("5GyMI"),subtitle:"play like never before..be greater",content:"Get the PlayStation\xae5 - Marvel's Spider-Man 2 Limited Edition Bundle",btnclasses:"spider",button:"swing there",photo:!0,icon:a("7WYPG")},{image:a("3yWhF"),subtitle:"Season 2 is now available",content:"Season 2 is available now on PS4 and PS5, with new maps, chaos and more to come",btnclasses:"default",button:"find out more",photo:!0,icon:a("cpNfy")},{image:a("676oJ"),title:"Xbox Series S – 1TB",subtitle:"Power Your Dreams",content:"Best Value in Gaming",btnclasses:"xbox",button:"buy now",link:"https://www.xbox.com/en-US/consoles/xbox-series-s"}],g=new n.default(document.querySelector(".slider"),document.querySelector(".slide__pagination"));g.render(m),setTimeout(g.moveSlider,500),g.clickButtons();//GAMES FROM API DATA
const u=async function(){let e=await (0,r.AJAX)(`https://api.rawg.io/api/games?&key=${o.KEY}`);return e.results},h=new l(document.querySelector(".mini-slider"),document.querySelector(".mini-slide"),document.querySelectorAll(".slide-btn"));u().then(e=>{h.render(e),h.sliderMove(),h.clickButtons(),h.addhandler(v)});//EXCLUSIVE GAMES DATA
const f=[{id:"799265",name:"The Last of Us Part I",background:a("iymsg"),class:"default",detail:"Experience the emotional storytelling and unforgettable characters of The Last of Us, winner of over 200 Game of the Year awards."},{id:"58550",name:"Ghost of Tsushima™ Director's Cut",background:a("bEb8M"),class:"default",detail:"Forge a new path and wage an unconventional war for the freedom of Tsushima in this expanded version of the open-world action-adventure from Sucker Punch Productions."},{id:"2462",name:"uncharted 4",background:a("bHFHk"),detail:"Play as Nathan Drake and Chloe Frazer in their own standalone adventures as they are forced to confront their pasts and forge their own legacies."},{id:"494384",name:"God of War™ Ragnar\xf6k",background:a("4DMdl"),detail:"From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers."},{id:"452642",name:"horaizon forbidden west",background:a("8IpPN"),detail:"Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon. "},{id:"452634",name:"Marvel's Spider Man Miles Morales",background:a("fBRPm"),class:"spider",detail:"Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."}],p=new l(document.querySelector(".game__Slider"),document.querySelector(".game-slide"),document.querySelectorAll(".game-btn")),v=function(e){console.log(e),localStorage.setItem("id",e),e&&(window.location="gamedetailed.html")};p.render(f,!0),p.infinte(),p.sliderMove(!0),p.clickButtons(),p.addhandler(v);//VIDEOS DATA
const _=[{video:"https://www.youtube.com/embed/EE-4GvjKcfs?si=mMd_tC0YafJgmVJl",poster:a("4DMdl")},{video:"https://www.youtube.com/embed/bgqGdIoa52s?si=LWrhHCGupDqL0WLO",poster:a("2MAgr")},{video:"https://www.youtube.com/embed/_jD6SoXMNy4?si=KBgh0l9GXvb4HLZK",poster:a("khdXh")},{video:"https://www.youtube.com/embed/_jD6SoXMNy4?si=KBgh0l9GXvb4HLZK",poster:a("3QxLK")}],b=new l(document.querySelector(".game__Slider-2"),document.querySelector(".game-slide"),document.querySelectorAll(".game-btn-2"));b.render(_,!1,!0),b.sliderMove(!0),b.clickButtons(),//SLIDING VIDEOS
document.querySelectorAll(".video").forEach(e=>{e.addEventListener("click",t=>{let s=t.target.closest(".video__icon");s&&(e.querySelector(".video__cover").classList.add("video__player"),e.querySelector(".video__icon").classList.add("video__player"),e.querySelector(".youtube__icon").classList.add("video__player"),e.querySelector(".video__iframe").classList.remove("video__player"),e.querySelector(".video__iframe").src+="?controls=0&autoplay=1")})});//# sourceMappingURL=Game.64340eb9.js.map

//# sourceMappingURL=Game.64340eb9.js.map
