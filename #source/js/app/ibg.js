function ibg() {

	var divWithIbg = document.getElementsByClassName('ibg');
	for (var i = 0; i < divWithIbg.length; i++) {
		var imgInIbg = divWithIbg[i].querySelector('img');
		var srcIbg = imgInIbg.getAttribute("src");
		divWithIbg[i].style.backgroundImage = "url('" + srcIbg + "')";
	};
};
ibg();

