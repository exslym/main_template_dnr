const w = window;
const e = document.documentElement;
const b = document.getElementsByTagName('body')[0];
const x = w.innerWidth || e.clientWidth || b.clientWidth;

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
