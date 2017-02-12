$(function(){
	var isVolumeOn = true;
	var music = document.getElementById("music");
	$("#volume").click(function(){
		if(isVolumeOn){
			$(this).removeClass("fa-volume-up");
			$(this).addClass("fa-volume-off");
			isVolumeOn = false;
			music.pause();

		}
		else{
			$(this).removeClass("fa-volume-off");
			$(this).addClass("fa-volume-up");
			isVolumeOn = true;
			music.play();

		}
	});

	$("#tap-letter").click(function() {
		$(this).fadeOut(400, function(){
			$("body").addClass("gif-background");
			$("#letter-body").fadeIn("slow");
		});
		var music = document.getElementById("music");
		music.volume = 0.30;
		music.loop = true;
		music.play();
	});
});
