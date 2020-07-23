function sch() {
   var form = document.getElementsByTagName("form");
   for (var i = 0; i < form.length; i++) {

      form[i].onclick = function (event) {
         var input = event.target;
         var val = input.getAttribute("value");
         function inputFocus() {
            if (input.getAttribute("type") != "submit" && input.value == val) {
               input.value = "";
               input.style = "color: #707070";
            }
         }
         function inputBlur() {
            if (input.value == "") {
               input.value = input.getAttribute("value");
               input.style = "color: #454545";
            }
         };
         inputFocus();
         input.onblur = inputBlur;
      };
   }


}