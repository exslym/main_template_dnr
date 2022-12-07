//* flipping cards:
export function flipCards(flipperClass, activeClass) {
	const flippers = document.querySelectorAll(`${flipperClass}`);
	if (flippers) {
		for (let flipper of flippers) {
			flipper.addEventListener('click', () => {
				flipper.classList.toggle(`${activeClass}`);
			});
		}
	}
}
