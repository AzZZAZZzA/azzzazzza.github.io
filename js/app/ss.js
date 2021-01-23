let slideSave = document.getElementById('cont').innerHTML;

function swiper() {
   //console.log('Start f swiper');

   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      observer: true,
      observeSlideChildren: true,
      simulateTouch: false,
      pagination: {
         el: '.swiper-pagination',
         type: 'fraction',
         renderFraction: function (currentClass, totalClass) {


            return '1' + '<div class="swiper-button-prev" id="imitPrev">' + 'prev' + '</div>' + '<span class="' + currentClass + ' highlighter"></span>' + '<div class="swiper-button-next" id="imitNext"> next </div>' + '<span class="' + totalClass + '"></span>'
         }
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
      },

   });
   //console.log('end f swiper');

   let imitPrev = document.getElementById('imitPrev');
   let imitNext = document.getElementById('imitNext');

   imitPrev.onclick = function (event) {
      let itarget = document.getElementById('prev');
      itarget.click();
   };
   imitNext.onclick = function (event) {
      let itarget = document.getElementById('next');
      itarget.click();
   };

}
swiper();

let categoriButton = document.getElementById('portfolio__category-batton');
let categoriList = document.getElementById("portfolio__category-list");
categoriButton.addEventListener("click", function () {
   categoriButton.classList.toggle('active');
   categoriList.classList.toggle('active');
   arrow.classList.toggle('active');
}
);
let trigger = '';
let filterInit = false;
let categoriUnits = document.getElementsByClassName('portfolio__category-unit');

function swiperReload() {
   //let slider = getElementById('slider');
   slider.classList.remove("swiper-container-initialized", "swiper-container-horizontal", "swiper-container-multirow", "swiper-container-multirow-column")
   swiper();
   console.log('Slider reload');

}


function rewrite() {
   const toDel = document.getElementsByClassName('swiper-slide');
   //console.log("to del ");
   console.log(toDel);
   Object.entries(toDel).forEach(elem => elem[1].remove());
   let cont = document.getElementById('cont');

   cont.innerHTML = slideSave;
   filterInit = false;
   console.log('rewrite');

   swiper();
   //slides = document.getElementsByClassName('swiper-slide');

   //for (let index = 0; index < slides.length; index++) {
   //   const element = slides[index];
   //   console.log(element);
   //   cont.prepend(element);
   //}
   //Object.entries(slides).forEach(element => { cont.prepend(element[1]), console.log(element[1]) });
   console.log('write3');
};


function writeCategory(toButton) {
   console.log();
   document.getElementById('categoriTitle').innerHTML = toButton + '<span id="arrow"></span>';

}



function filter(activ, toButton) {
   let slides = document.getElementsByClassName('swiper-slide');
   let y = slides.length; console.log(y);
   for (let i = 0; i < y; i++) {
      const el = slides[i];
      let category = el.innerText;
      if (~category.indexOf(trigger)) {
         //alert(i + " true");
      } else {
         //alert(i + " del");
         el.classList.add("fdel");
         filterInit = true;

      }
   };
   swiper()
   let fdel = document.getElementsByClassName('fdel');
   //alert('Length fdel ' + fdel.length)
   for (let e = 0; e < fdel.length; e++) {
      const ent = fdel[e];
      //alert("LIst " + e + "<br>" + ent.innerText)
   }
   let x = fdel.length;
   for (let e = x - 1; e > -1; e--) {
      //alert(fdel.length)
      const ent = fdel[e];
      //alert("del " + ent.innerText)
      ent.remove();
   };
   console.log(activ);
   activ.classList.add('active');
   //                                  function activeCategory
   writeCategory(toButton);
}


for (let index = 0; index < categoriUnits.length; index++) {

   const element = categoriUnits[index];
   element.addEventListener("click", function () {

      const toButton = this.innerText;
      trigger = toButton.toLowerCase();
      document.getElementsByClassName('portfolio__category-unit active').item(0).classList.remove('active');
      if (!filterInit) {
         filter(this, toButton);
      } else {

         //                                  function deactiveCategory
         if ("all categories" !== trigger) {
            console.log("filter");
            rewrite(slideSave);
            filter(this, toButton);
            console.log('smena category');
         } else {

            console.log("filter");
            rewrite(slideSave);
            this.classList.add('active');
            writeCategory(toButton);


         }

         //filter(y);
         // выгрузить slides(40 cтрока)в html document
         // запаковать фукцию и вызвать (рекурсия)
      }
      setTimeout(() => swiperReload(), 0);

   });
};



