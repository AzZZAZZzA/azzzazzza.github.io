
var swiper = new Swiper('.swiper-container', {
   slidesPerView: 2,
   slidesPerColumn: 2,
   slidesPerGroup: 2,
   spaceBetween: 30,
   observer: true,
   observeSlideChildren: true,
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {


         return '1' + '<div class="swiper-button-prev" id="imitPrev">prev</div>' + '<span class="' + currentClass + '"></span>' + '<div class="swiper-button-next" id="imitNext">next</div>' + '<span class="' + totalClass + '"></span>'
      }
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },

});

let categoriButton = document.getElementById('portfolio__category-batton');
let categoriList = document.getElementById("portfolio__category-list");
categoriButton.addEventListener("click", function () {
   categoriButton.classList.toggle('active');
   categoriList.classList.toggle('active');
   arrow.classList.toggle('active');
}
);
let categoriUnits = document.getElementsByClassName('portfolio__category-unit');
for (let index = 0; index < categoriUnits.length; index++) {
   const element = categoriUnits[index];
   element.addEventListener("click", function () {
      let trigger = this.innerText.toLowerCase();
      let slides = document.getElementsByClassName('swiper-slide');
      let y = slides.length;
      for (let i = 0; i < y; i++) {
         const el = slides[i];
         let category = el.innerText;
         if (~category.indexOf(trigger)) {
            //alert(i + " true");
         } else {
            //alert(i + " del");
            el.classList.add("fdel");
         }
      };
      let fdel = document.getElementsByClassName('fdel');
      //alert(fdel.length)
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
      }
   });





};


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
