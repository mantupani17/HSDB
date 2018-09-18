var cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function (e) {
	var pos = this.scrollY,
			cardIndex = Math.floor( pos/window.innerHeight ) + 1,
			prevCard = cards[cardIndex - 1];

	if ( pos > prevCard.offsetTop ) {
		prevCard.classList.add('card__stick'); // make previous card sticky
		cards[cardIndex].classList.remove('card__stick'); // unstick current card, for scrolling up behavior
	}
});