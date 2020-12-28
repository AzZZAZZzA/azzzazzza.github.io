
window.onload = function () {
	sch();

	burger.onclick = function (event) {
		alert(menu);
		burger.classList.toggle("active");
		menu.classList.toggle("active");
		//document.body.classList.toggle("lock"); блокировка скрола document.body 
	};
};





