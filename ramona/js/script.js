$(function(){
	var x = 0;
	var count = 0;
	var prevElem = "";
	var nextElem = "";
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
			prevElem = imgElemChild;
			x++;
		});
	});
	setInterval(function(){
		prevElem.fadeOut(400, function(){
			$("#valentine-greetings").animate({
				zoom: "90%"
			});
			$("#valentine-greetings").animate({
				zoom: "100%"
			});
			if(x === 5){
				nextElem = $("#slide-pictures .img-circle:nth-child(1)");
				x = 1;
			}
			else
			{
				nextElem = prevElem.next();
			}
			nextElem.fadeIn();
			prevElem = nextElem;
			x++
			count++;
		});
	}, 20000);

});