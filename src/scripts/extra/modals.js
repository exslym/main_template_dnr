export function modals(openButton, modalBlock, closeButton) {
	if (document.querySelector(`${openButton}`)) {
		const modal = document.querySelector(`${modalBlock}`);
		const openModal = document.querySelector(`${openButton}`);
		const closeModal = document.querySelector(`${closeButton}`);

		openModal.addEventListener('click', () => {
			document.querySelector('html').classList.add('noScroll');
			modal.showModal();
		});

		closeModal.addEventListener('click', () => {
			document.querySelector('html').classList.remove('noScroll');
			modal.setAttribute('closing', '');
			modal.addEventListener(
				'animationend',
				() => {
					modal.removeAttribute('closing');
					modal.close();
				},
				{ once: true }
			);
		});

		modal.addEventListener('click', e => {
			if (e.target.nodeName === 'DIALOG') {
				document.querySelector('html').classList.remove('noScroll');
				modal.setAttribute('closing', '');
				modal.addEventListener(
					'animationend',
					() => {
						modal.removeAttribute('closing');
						modal.close();
					},
					{ once: true }
				);
			}
		});
	}
}
