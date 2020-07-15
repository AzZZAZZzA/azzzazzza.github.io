			window.onload = function(){
				var divWithIbg = document.getElementsByClassName("ibg");
				for (var i = 0; i < divWithIbg.length; i++) {
					var imgInIBG=divWithIbg[i].getElementsByTagName("img");
					var srcIbg = imgInIBG.Attribute("src");
					imgInIBG.remove();
					divWithIbg[i].style.backgroundImage = "url('" + srcIbg + "')";
				};
			};
