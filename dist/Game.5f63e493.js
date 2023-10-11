var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequire4a28;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequire4a28=s);var i=s("2lAcg");class l{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._data.length||this.renderError();let t=this.generatemarkup();this._clear(),this._parentEl?.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentEl&&(this._parentEl.innerHTML="")}loadSpinner(e=!1){let t=`<div class="spinner ${e?"spinsmall":""}">
        <i class="fa-solid fa-spinner spinning" style="color: #2d73eb;"></i>
            </div>`;this._clear(),this._parentEl?.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){console.log(e,this);let t=`<h2 class="sub-title sub-title-primary alert"> ${e}</h2></div>`;this._clear(),this._parentEl?.insertAdjacentHTML("afterbegin",t)}}class r extends l{_errorMessage="Sorry there is no resault for your search ! try another one ...";_parentEl=document.querySelector(".search_results");plat=!1;_errorMessage="sorry ☹️☹️... there are no results for your search! try to use other keywords..\uD83D\uDE25\uD83D\uDE25";searchtitle(e,t){document.querySelector(".search__titlee").innerHTML="",document.querySelector(".search__titlee")?.insertAdjacentHTML("afterbegin",`<h1 class="search__title sub-title">Results for ${e} are <span class="count">${t}</span><i class="fa-solid fa-arrow-right moving-icon" style="color: #3a7cee;"></i> <span class='note'>default search is for playstaion top rating</span></h1> `)}addhandler(e,t){this._parentEl?.addEventListener("click",t=>{t.preventDefault();let a=t.target.closest("#detail");if(!a)return;let s=a.dataset.detail;e(s)}),this._parentEl?.addEventListener("click",e=>{e.preventDefault();let a=e.target.closest("#addwishlist");a&&t(this._data[this._data.findIndex(e=>e.id===Number(a.dataset.id))],a.dataset.id)})}generatemarkup(){return this.plat?this._data.map(e=>`<div class="game game-gen game-gen-result">
  <div class="game__background game__background-gen game__background-gen-result">
    <img class="game__pic"
      src="${e.background}"
      alt=""
    />
    <div class="game__plattforms">
    ${e.plattformP.map(e=>`<div class="game__plattform ${"PlayStation"===e.platform.name?"ps":"PC"===e.platform.name?"def":"Xbox"===e.platform.name?"xbox1":""}">${e.platform.name}</div>`).join("")}
    </div>
  </div>
  <h2 class="game__title">${e.title}</h2>
  <div class="game__description">
  ${e.genres.map(e=>`<div class="game__genre">${e.name}</div>`).join("")}
  </div>
  <div class="date">${e.realese}</div>
  <div class='btns'>
  <a href="gamedetailed.html" id='detail' class="button default game__button" data-detail=${e.id}>discover more<i class="fa-solid fa-angle-right iconn"></i></a>
  <a href="" class="wishlist-button button-nomargin" data-id=${e.id} id='addwishlist'><h2 class="game__title d-2">wishlist<i class="fa-regular fa-heart margin-r-s" style="color: #2974f5;"></i></h2>
  </a> 
</div></div>`).join(""):this._data.map(e=>`<div class="game">
    <div class="game__background">
      <img class="game__pic"
        src="${e.background}"
        alt=""
      />
      <div class="game__plattforms">
      ${e.plattformP?.map(e=>`<div class="game__plattform ${"PlayStation"===e.platform.name?"ps":"PC"===e.platform.name?"def":"Xbox"===e.platform.name?"xbox1":""}">${e.platform.name}</div>`).join("")}
      </div>
    </div>
    <h2 class="game__title">${e.title}</h2>
    <div class="game__description">
    ${e.genres.map(e=>`<div class="game__genre">${e.name}</div>`).join("")}
    </div>
    <div class="date">${e.realese}</div>
    <a href="" class="wishlist-button button-nomargin" data-id=${e.id} id='addwishlist'>
    <div class='btns'>
    <a href="gamedetailed.html" id='detail' class="button default game__button" data-detail=${e.id}>discover more<i class="fa-solid fa-angle-right iconn"></i></a>
    </a> 
    <button id='addwishlist' data-id=${e.id} class='meow' aria-label="heart" data-ico="❤️" style="--hue: 344deg"></button> 
    </div>
  </div>`).join("")}}var d// <button class="game__title wishbutton">wishlist<i class="fa-regular fa-heart margin-r-s" style="color: white;"></i></button>
=new r;class n extends l{_parentEl=document.querySelector(".pagination__results");page=1;addhandler(e){this._parentEl?.addEventListener("click",t=>{let a=t.target.closest(".pagination__button");a&&(this.page=Number(a.dataset.page),a.classList.add("active-button"),e(this.page))})}generatemarkup(){let e=Math.ceil(this._data.count/this._data.resultPerPage);console.log(e);let t=[];for(let a=this.page;a<=e&&t.length<=10;a++)t.push(a);return`${t.map(e=>`<a class="pagination__button" data-page=${e}>
    <span class="pagination__number">${e}</span>
  </a>`).join("")}`}}var o=new n,c=s("8ZU4v");class m extends l{_parentEl=document.querySelector(".search__genres");generatemarkup(){return this._data.map(e=>`<a data-id=${e.id} class="genre__title">${e.name}</a>`).join("")}addhandler(e){this._parentEl?.addEventListener("click",t=>{let a=t.target.closest(".genre__title");a&&(document.querySelectorAll(".genre__title").forEach(e=>e.classList.remove("active-button")),a.classList.add("active-button"),e(a.dataset.id))})}}var g=new m;// import SearchView from "./SearchView.js";
class h extends l{_parentEl=document.querySelector(".game_results");addhandler(e,t,a){this._parentEl?.addEventListener("click",t=>{t.preventDefault();let a=t.target.closest("#detail");if(!a)return;let s=a.dataset.detail;console.log(s),e(s)}),this._parentEl?.addEventListener("click",e=>{e.preventDefault();let a=e.target.closest("#addwishlist");a&&t(this._data[this._data.findIndex(e=>e.id===Number(a.dataset.id))],a.dataset.id)})}generatemarkup(){return this._data.map(e=>`<div class="game game-gen">
        <div class="game__background game__background-gen">
          <img class="game__pic"
            src="${e.background}"
            alt=""
          />
          <div class="game__plattforms">
          ${e.plattformP.map(e=>`<div class="game__plattform ${"PlayStation"===e.platform.name?"ps":"PC"===e.platform.name?"def":"Xbox"===e.platform.name?"xbox1":""}">${e.platform.name}</div>`).join("")}
          </div>
        </div>
        <h2 class="game__title">${e.title}</h2>
        <div class="game__description">
        ${e.genres.map(e=>`<div class="game__genre">${e.name}</div>`).join("")}
        </div>
        <div class="date">${e.realese}</div>
        <div class='btns'>
        <a href="gamedetailed.html" id='detail' class="button default game__button" data-detail=${e.id}>discover more<i class="fa-solid fa-angle-right iconn"></i></a>
        <a href="" class="wishlist-button button-nomargin" data-id=${e.id} id='addwishlist'><h2 class="game__title d-2">wishlist<i class="fa-regular fa-heart margin-r-s" style="color: #2974f5;"></i></h2>
        </a> 
      </div></div>`).join("")}}var u=new h;class _ extends l{_parentEl=document.querySelector(".Game-details");clicked;addhandler(e,t){this._parentEl?.addEventListener("click",t=>{t.preventDefault();let a=t.target.closest("#detail");if(!a)return;let s=a.dataset.detail;e(s)}),this._parentEl?.addEventListener("click",e=>{e.preventDefault();let a=e.target.closest("#addwishlist");a&&t(this._data,a.dataset.id)})}viewscreen(e){let t=function(){document.querySelector(".slider-screen ").classList.add("hidden-2"),document.querySelector(".pagi-screen").classList.add("hidden-2"),document.querySelector("header").classList.remove("hidden-2"),document.querySelector(".slider-screen ").classList.add("hidden-2"),document.querySelector(".exist").classList.add("hidden-2"),document.querySelector(".overlay").classList.add("hidden-2"),document.documentElement.style.overflow="auto",document.body.scroll="yes"},a=0;document.querySelector(".screenshot-slider")?.addEventListener("click",function(t){let s=t.target.closest(".screen-slide__photo");a=t.target.closest(".screen-slide").dataset.slide,s&&(document.querySelector(".slider-screen ").classList.remove("hidden-2"),document.querySelector(".slider-screen ").classList.add("screenshot-active"),document.querySelector(".pagi-screen").classList.remove("hidden-2"),document.querySelector(".pagi-screen").classList.add("pagi-active"),document.querySelector("header").classList.add("hidden-2"),document.querySelector(".overlay").classList.remove("hidden-2"),document.querySelector(".exist").classList.remove("hidden-2"),document.documentElement.style.overflow="hidden",document.body.scroll="no",e.slideMove(a))}),document.querySelector(".exist")?.addEventListener("click",t.bind(this)),document.querySelector(".overlay")?.addEventListener("click",t.bind(this))}generatemarkup(){return`        <div class="overlay hidden-2"></div>
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
        </div>`}}var v=new _;s("axLMF");class p{constructor(e,t,a,s,i,l){this.buttons=a,this.prevscrollleft=l,this.prevpagex=i,this.isdragstart=!1,this.slider=e}addhandler(e){this.slider?.addEventListener("click",t=>{console.log(t.target);let a=t.target.closest("#detail");if(!a)return;let s=a.dataset.detail;console.log(s),e(s)})}render(e,t=!1,a=!1,s=!1){s?e.forEach((e,i)=>{this.slider?.insertAdjacentHTML("afterbegin",this.generatemarkupSlide(e,i,t,a,s))}):e.forEach((e,i)=>{this.slider?.insertAdjacentHTML("beforeend",this.generatemarkupSlide(e,i,t,a,s))})}generatemarkupSlide(e,t,a,s,i){return a||s||i?a?` <div class="game-slide" id=${e.id}>
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
    </div>`:s?` <div class="game-slide game-slide-2">
    <div class="video">
      <iframe  class="game-slide__photo video__player video__iframe" src="${e.video}"frameborder="0"allowfullscreen allow="autoplay"></iframe>            
      <span class="circle video__icon"><i class="fa-solid fa-play" style="color: #f4f2f2;"></i>   </span>
      <img src="${e.poster}" class="game-slide__photo video__cover" alt="">
      <i class="fa-brands fa-youtube youtube__icon" style="color: #fd1c27;"></i>
         </div>  `:i?` <div class="screen-slide" data-slide=${t}>
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
      </div>`}infinte(){let e=Math.round(this.slider.offsetWidth/this.slider.firstElementChild.offsetWidth),t=[...this.slider.children];t.slice(-e).reverse().forEach(e=>this.slider.insertAdjacentHTML("afterbegin",e.outerHTML)),t.slice(0,e).forEach(e=>this.slider.insertAdjacentHTML("beforeend",e.outerHTML))}dragstart(e){this.isdragstart=!0,this.prevpagex=e.pageX,this.prevscrollleft=this.scrollLeft,this.classList.add("dragging")}dragstop(){this.isdragstart=!1,this.classList.remove("dragging")}dragging(e){if(!this.isdragstart)return;e.preventDefault();let t=e.pageX-this.prevpagex;this.scrollLeft=this.prevscrollleft-t}infintescroll(){0===this.scrollLeft?this.scrollLeft=this.scrollWidth-2*this.offsetWidth:Math.floor(this.scrollLeft)===this.scrollWidth-this.offsetWidth&&(this.scrollLeft=this.offsetWidth)}sliderMove(e=!1){this.slider.addEventListener("mousedown",this.dragstart),this.slider.addEventListener("mousemove",this.dragging),this.slider.addEventListener("mouseup",this.dragstop),e&&this.slider.addEventListener("scroll",this.infintescroll)}clickButtons(){let e=this.slider?.firstElementChild.offsetWidth;this.buttons.forEach(t=>{t.addEventListener("click",()=>this.slider.scrollLeft+="left"===t.id?-e:+e)})}}var f=s("axLMF");class b extends l{_parentEl=document.querySelector(".result-box");_errorMessage="Sorry there is no resault for your search ! try another one ...☹️☹️";addhandler(e){document.querySelector("#search-form").addEventListener("keyup",()=>{let t=document.querySelector("#search").value;t?(e(t),document.querySelector(".result-box")?.classList.remove("hidden")):(this._clear(),document.querySelector(".result-box")?.classList.add("hidden"))}),document.querySelector(".closebtn")?.addEventListener("click",()=>{document.querySelector("#search").value="",this._clear(),document.querySelector(".result-box").classList.add("hidden")})}addhandler2(e){this._parentEl?.addEventListener("click",t=>{t.preventDefault();let a=t.target.closest("#detail");if(!a)return;let s=a.dataset.detail;e(s)})}generatemarkup(){return` 
        <ul class="search-suggestions">
        ${this._data.map(e=>` <a href="gamedetailed.html" id='detail' data-detail=${e.id} class="suggestion">
        <div class="suggestion__title">${e.title}</div>
        <img class="suggestion__photo" src='${e.background}'>
        </a>`).join("")}
        </ul>
      `}}var y=new b;class $ extends l{_errorMessage="have not added any items to your wishlist yet ... add some\uD83D\uDE0A\uD83D\uDE01\uD83C\uDFAE";_parentEl=document.querySelector(".wishlist-box");addhandler(e,t,a){document.querySelector("#wishlistparent")?.addEventListener("click",t=>{this._parentEl.classList.remove("hidden-2"),e()}),this._parentEl?.addEventListener("click",e=>{let a=e.target.closest(".delete")?.dataset.del;a&&t(a);// delete-wish
}),this._parentEl?.addEventListener("click",e=>{let t=e.target.closest(".suggestion")?.dataset.detail;console.log(t),t&&a(t);// delete-wish
}),document.addEventListener("click",e=>{e.target.classList.contains("wish")||this._parentEl.classList.add("hidden-2")})}generatemarkup(){return`<h1 class='tech__title center-title wishlist__title'>my wishlist ❤️</h1>
       ${this._data.map(e=>`<div class='wish__container'>
        <a href="gamedetailed.html" id='detail' data-detail=${e.id} class="suggestion suggestion-2">
        <div class="suggestion__title">${e.title}</div>
        <img class="suggestion__photo" src='${e.background}'>
        </a><div class='delete-wish wish'><ii class="fa-solid fa-trash wish delete" data-del=${e.id} style="color: #d1d1d1;"></ii></div>
        </div>`).join("")}`}}var E=new $;class L extends l{_parentEl=document.querySelector(".platforms");addhandler(e){let t=this._parentEl;this._parentEl?.addEventListener("click",a=>{let s=a.target.closest(".game-plat").id;s&&(console.log(t),t.classList.add("button-active"),e(s))})}generatemarkup(){return`${this._data.map(e=>`<div class="game game-plat" id=${e.id}>
        <div class="game__background game__background-plat">
          <img class="game__pic"
            src="${e.image_background}"
            alt=""
          />
        </div>
        <h2 class="game__title">${e.name}</h2>
        </div>`).join("")}`}}var k=new L;let w=!1;const S=async function(e){try{let e=localStorage.getItem("search");if(!e)return;{w=!0,d.loadSpinner();let t=await i.searchGames(e);d.searchtitle(e,i.state.search.count),d.render(t),o.loadSpinner(),o.render(i.state.search),localStorage.clear()}}catch(e){d.renderError(),console.log(e)}},x=async function(e){try{y.loadSpinner(!0);let t=await i.searchGames(e,1,[{filterr:"parent_platforms",option:"2"}],6);console.log(t),y.render(t),0===t.length&&y.renderError()}catch(e){console.error(e)}},q=async function(e){let t=await i.searchGames(i.state.search.query,e,i.state.search.filters);d.render(t),o.render(i.state.search)},j=async function(e){if(!w)return;d.loadSpinner();let t=await i.searchGames(i.state.search.query,1,e);d.searchtitle(i.state.search.query,i.state.search.count),d.render(t),o.render(i.state.search)},M=async function(){let e=await i.LoadGenres();g.render(e);let t=await i.getGameFromgenres();u.render(t)},D=async function(e){u.loadSpinner();let t=await i.getGameFromgenres(e);u.render(t)},A=async function(e){localStorage.setItem("id",e),e&&(window.location="gamedetailed.html")},P=async function(){try{let e=localStorage.getItem("id");if(!e)return;{v.loadSpinner();let t=await i.getGame(e);v.render(t);let a=new p(document.querySelector(".screenshot-slider"),"",document.querySelectorAll(".game-btn"));a.render(t.screenshots,!1,!1,!0),a.clickButtons();let s=new f.default(document.querySelector(".slider-screen"),document.querySelector(".pagi-screen"));s.render(t.screenshots,!0),s.clickButtons(),v.viewscreen(s);// if(!document.URL.includes("gamedetailed.html")) localStorage.clear()
}}catch(e){v.renderError(),console.error(e)}},T=function(e,t){i.state.game=e,localStorage.setItem("id",t);let a=!1;i.state.wishlist?.forEach(e=>{e.id===i.state.game?.id&&(a=!0)}),i.state.game?.wishlisted||a||i.addwishlist(i.state.game)},H=async function(){try{k.loadSpinner();let e=await i.loadplatforms();k.render(e);let t=new p(document.querySelector(".platforms"),"",document.querySelectorAll(".game-btn"));t.render(e,!0),t.clickButtons()}catch(e){console.error(e)}},C=async function(e){try{d.plat=!0,d.loadSpinner();let t=await i.gamebyplatforms(e);console.log(t),console.log(i.state),d.render(t),o.render(i.state.search)}catch(e){console.error(e)}};M(),S(),P(),H(),y.addhandler(x),(0,c.default).addhandler(j),o.addhandler(q),g.addhandler(D),d.addhandler(A,T),u.addhandler(A,T),y.addhandler2(A),E.addhandler(function(){E.render(i.state.wishlist)},function(e){i.deletebookmark(e)},A),v.addhandler(A,T),k.addhandler(C,T);//# sourceMappingURL=Game.5f63e493.js.map

//# sourceMappingURL=Game.5f63e493.js.map
