function sch() {
   var val = srch.value;

   srch.onfocus = function () {

      if (srch.value == srch.getAttribute("value")) {
         srch.value = "";
      }
   };
   srch.onblur = function () {
      if (srch.value == "") {
         srch.value = val;
      }
   };
};