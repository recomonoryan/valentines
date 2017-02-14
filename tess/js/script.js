$(function(){
	var imgElemChild = "";

	$("#valentine-greetings").hide();
	setInterval(function(){
		$("#arrow").animate({
			top: "30px"
		});
		$("#arrow").animate({
			top: "-30px"
		});
	}, 500);
	document.querySelector("#heart").addEventListener("click", function(event){
		music.volume = 0.80;
		music.loop = true;
		music.play();
		$("#intro").fadeOut(400, function(){
			$("body").addClass("gif-background");
			imgElemChild = $("#slide-pictures .img-circle:nth-child(1)");
			imgElemChild.fadeIn("slow");
			$("#valentine-greetings").fadeIn();
			$("#volume").fadeIn();
			$("#valentine-greetings").animate({
				zoom: "90%"
			});
			$("#valentine-greetings").animate({
				zoom: "100%"
			});
		});
	});
	setInterval(function(){
		$("#valentine-greetings").animate({
				zoom: "90%"
		});
		$("#valentine-greetings").animate({
			zoom: "100%"
		});
	}, 20000);

});