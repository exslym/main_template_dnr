import $ from 'jquery';
require('../../public/tools/magnific-popup.min.js');

const w = window;
const e = document.documentElement;
const b = document.getElementsByTagName('body')[0];
const x = w.innerWidth || e.clientWidth || b.clientWidth;

//* for PLUS/ZOOM buttons on mobile devices:
export function zoom(popupClass) {
	if (document.querySelector(`${popupClass}`)) {
		let scrollPosition;
		$(`${popupClass}`).magnificPopup({
			/* Фикс для корректного открытия popup (отключаем скроллинг сайта на фоне popup) и возврата на текущее расположение на странице после закрытия popup: */
			type: 'inline',
			fixedContentPos: true,
			fixedBgPos: true,
			callbacks: {
				beforeOpen: () => {
					scrollPosition = $(window).scrollTop();
					$('html').addClass('mfp-helper');
				},
				close: () => {
					$('html').removeClass('mfp-helper');
					$(window).scrollTop(scrollPosition);
				},
			},
		});
	}

	/* //! add this class to .scss file:
			html.mfp-helper {
				body {
					overflow: hidden;
					.wrapper {
						display: none;
						visibility: hidden !important;
						-webkit-overflow-scrolling: none;
					}
				}
			}
	*/
}

//* Smooth navigation scroll
export function smoothScroll(anchorClass) {
	if (document.querySelector(`a${anchorClass}`)) {
		document.querySelectorAll(`a${anchorClass}`).forEach(link => {
			link.addEventListener('click', function (e) {
				if (document.getElementById(link.getAttribute('href').substring(1))) {
					e.preventDefault();
					let href = link.getAttribute('href').substring(1);
					const scrollTarget = document.getElementById(href);
					const topOffset = 0;

					//! если не нужен отступ сверху:
					// const topOffset = 0;
					//! если есть fixed:
					// document.querySelector('.scrollto').offsetHeight;

					const elementPosition = scrollTarget.getBoundingClientRect().top;
					const offsetPosition = elementPosition - topOffset;

					window.scrollBy({
						top: offsetPosition,
						behavior: 'smooth',
					});
				}
			});
		});
	}
}

//* Block "open/close on mobile devices" instead of tooltip on "hover on desktop"
export function showBlock(expandButton, activeClass) {
	if (x < 768) {
		if (document.querySelector(`${expandButton}`)) {
			const buttons = document.querySelectorAll(`${expandButton}`);
			buttons.forEach(button => {
				button.addEventListener('click', () => {
					if (!button.classList.contains(activeClass)) {
						button.classList.add(activeClass);
					} else {
						button.classList.remove(activeClass);
					}
				});
			});
		}
	}
}

//* expanding blocks - smooth scroll:
export function expandBlock(expandButton, expandBlock, activeClass) {
	if (
		document.querySelector(`${expandButton}`) &&
		document.querySelector(`${expandBlock}`)
	) {
		const buttons = document.querySelectorAll(`${expandButton}`);
		const blocks = document.querySelectorAll(`${expandBlock}`);

		blocks.forEach(block => {
			block.style.maxHeight = '0px';
		});

		buttons.forEach(button => {
			button.addEventListener('click', e => {
				e.preventDefault();
				let expandable = button.nextElementSibling;
				if (expandable.style.maxHeight == '0px') {
					expandable.style.display = 'block';
					setTimeout(() => {
						button.parentNode.classList.add(`${activeClass}`);
						expandable.style.maxHeight = expandable.scrollHeight + 'px';
					}, 10);
				} else {
					button.parentNode.classList.remove(`${activeClass}`);
					expandable.style.maxHeight = '0px';
					setTimeout(() => {
						expandable.style.display = 'none';
					}, 200);
				}
			});
		});

		//! no smooth animation:
		// buttons.forEach(button => {
		// 	button.addEventListener('click', e => {
		// 		e.preventDefault();
		// 		let parentBlock = button.parentNode;
		// 		if (!parentBlock.classList.contains(`${activeClass}`)) {
		// 			parentBlock.classList.add(`${activeClass}`);
		// 		} else {
		// 			parentBlock.classList.remove(`${activeClass}`);
		// 		}
		// 	});
		// });
	}
}

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
