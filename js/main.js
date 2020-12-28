window.onload = function () {
   sch();

   burger.onclick = function (event) {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      //document.body.classList.toggle("lock"); блокировка скрола document.body 
   };
};
function inputFocus(foc, val) {
   if (foc.getAttribute("type") != "submit" && foc.value == val) {
      foc.value = "";
      foc.style = "color: #a0a0a0";
   }
}
function inputBlur(bl) {
   if (bl.value == "") {
      bl.value = input.getAttribute("value");
      bl.style = "color: #454545";
   }
};
function sch() {
   const forms = document.getElementsByTagName("form");
   for (let i = 0; i < forms.length; i++) {
      const form = forms[i];

      let inputs = form.getElementsByTagName('input');
      for (let j = 0; j < inputs.length; j++) {

         const inputo = inputs[j];
         inputo.onfocus = function () {
            var val = inputo.getAttribute("value");
            inputFocus(inputo, val);


         }
         inputo.onblur = function () {
            if (inputo.value == "") {
               inputo.value = inputo.getAttribute("value");
               inputo.style = "color: #454545";
            }

         }
      };

   };

}
sch();


