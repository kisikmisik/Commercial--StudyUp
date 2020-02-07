$(document).ready(function() {
	var playButton = document.querySelector(".experience__play");
	var video = document.querySelector(".experience__video");

	playButton.addEventListener("click", function() {
		video.style = "z-index: 1";
	});
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, мы успешно получили Ваше письмо. С Вами свяжутся в ближайшее время.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});