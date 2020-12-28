function removeActive(y, elem) {
   let x = document.getElementsByClassName(y);
   //alert(x);
   for (let i = 0; i < x.length; i++) {
      const element = x[i];
      if (element.classList.contains("active")) {
         element.classList.remove("active")
      }
   }
   elem.classList.add("active");
}


function checkActive(elem) {
   if (elem.classList.contains("active")) {
      return
   } else {
      if (elem.classList != "services__menuUnit") {
         let y = elem.classList.toString();
         let r = y.match(/Unit/);
         y = y.slice(0, r.index + 4);
         removeActive(y, elem);
      } else {
         let y = elem.classList;
         removeActive(y, elem);
      }
   }
}
function nameReloader() {
   let id6 = document.getElementById('6');
   let longName = "graphic design";
   let shortName = "gr. design"
   let name = document.getElementById('name');
   let clientWidth = document.documentElement.clientWidth;
   if (id6.classList.contains("active") || clientWidth < 601) {
      name.innerHTML = "";
      name.append(shortName);
   } else {
      name.innerHTML = "";
      name.append(longName);
   };
}


function moveFunc(event) {
   let x = this.getAttribute('id');
   //alert(x);
   checkActive(this);
   nameReloader();
   let content = document.getElementsByClassName(x);
   for (let i = 0; i < content.length; i++) {
      const element = content[i];
      checkActive(element);
   }
}
window.addEventListener(`resize`, event => {
   nameReloader();

}, false);

let serviceMenu = document.getElementsByClassName("services__menuUnit");
for (let i = 0; i < serviceMenu.length; i++) {
   const element = serviceMenu[i];
   //alert(element);
   //element.classList.add("test");
   element.addEventListener("click", moveFunc);

}




//menu.addEventListener("click", moveFunc, false);
/*for (let i = 0; i < menu.length; i++) {
   if (menu[i]) {
      menu

   }

}*/