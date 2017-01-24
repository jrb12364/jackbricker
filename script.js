$(document).ready(function() {

		starClock = 3; // Set a lower number for a higher spawn frequency
		fadeSpeed = 300; // Set a higher number for a longer delay between elements

		i = 1;
		setInterval(function() {
				if (Math.floor(Math.random() * starClock) == 0 && document.hasFocus()) {
						height = $(window).height() * Math.random();
						speed = (Math.random() + 1) * 15;
						opacity = (Math.random() / 2) + 0.5;
						$('.bg').append('<img src="img/star.png" class="star" style="top: ' + height + 'px; opacity: ' + opacity + '; -webkit-animation: star ' + speed + 's linear; -moz-animation: star ' + speed + 's linear; animation: star ' + speed + 's linear;">');
						i++;
				}
		}, 100);
});
