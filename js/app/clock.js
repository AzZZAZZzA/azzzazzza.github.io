
function clock() {
   var forTime = new Date();
   var hour = forTime.getHours();
   var minut = forTime.getMinutes();
   var sec = forTime.getSeconds();
   var hourRot = (hour % 12) * 30 + ((minut / 60) * 30);
   var minRot = minut * 6;
   var secondRot = sec * 6;
   var hourEL = document.getElementById('hour');
   hourEL.setAttribute("style", "transform: rotate(" + hourRot + "deg);-ms - transform: rotate(" + hourRot + "deg);-o - transform: rotate(" + hourRot + "deg);- webkit - transform: rotate(" + hourRot + "deg);- moz - transform: rotate(" + hourRot + "deg);");
   var minuteEL = document.getElementById('minute');
   minuteEL.setAttribute("style", "transform: rotate(" + minRot + "deg);-ms - transform: rotate(" + minRot + "deg);-o - transform: rotate(" + minRot + "deg);- webkit - transform: rotate(" + minRot + "deg);- moz - transform: rotate(" + minRot + "deg);");
   var secondEL = document.getElementById('second');
   secondEL.setAttribute("style", "transform: rotate(" + secondRot + "deg);-ms - transform: rotate(" + secondRot + "deg);-o - transform: rotate(" + secondRot + "deg);- webkit - transform: rotate(" + secondRot + "deg);- moz - transform: rotate(" + secondRot + "deg);");


}
let timerId = setInterval(() => clock(), 1000);