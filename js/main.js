(() => {
	console.log("Fired Up");

	function playDrumKitSound(event) {
		// debugger;
		// select the corresponding audio element & make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

		// Error handling - Stop function if no matching audio is found
		if(!audio) {return}; //return stops code functionaaaaaaaaaaaaaaaaaaaa

		// rewind and make it play
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playDrumKitSound);

})();