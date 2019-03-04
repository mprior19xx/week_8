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

		//grab div to be animated
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add('playing');

	}

	function removePlayingClass(event,){
		// debugger;
		if (event.propertyName !== "transform"){
			return;
		} 
		else {
			//remove playing class here from the active div
			event.target.classList.remove('playing');
			console.log("Transition is done");
		}
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

	window.addEventListener("keydown", playDrumKitSound);

})();