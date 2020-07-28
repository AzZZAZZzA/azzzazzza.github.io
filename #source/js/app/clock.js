var forTime = new Date();
var hour = forTime.getHours();
var minut = forTime.getMinutes();
var sec = forTime.getSeconds();
var hourRot = (hour % 12) * 30;
var minRot = 1;

var hourEL = document.getElementById('hour');
//hourEL.style = "-webkit-transform: rotate(15deg);
//   - moz - transform: rotate(15deg);
//-o - transform: rotate(15deg);
//-ms - transform: rotate(15deg);
//transform: rotate(15deg);
//";