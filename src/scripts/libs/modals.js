export function modals(modalBlock, openButton, closeButton) {
	if (document.querySelector(`.${openButton}`)) {
		const modals = document.querySelectorAll(`.${modalBlock}`);
		const openModalButtons = document.querySelectorAll(`.${openButton}`);
		const closeModalButtons = document.querySelectorAll(`.${closeButton}`);

		openModalButtons.forEach(button => {
			button.addEventListener('click', () => {
				document.querySelector('html').classList.add('noScroll');
				document.querySelector(`#${button.dataset.label}`).showModal();
				document.querySelector(`#${button.dataset.label}`).scrollTop = 0;
			});
		});
		closeModalButtons.forEach(button => {
			button.addEventListener('click', e => {
				let openedModal = document.querySelector(`#${button.dataset.label}`);
				document.querySelector('html').classList.remove('noScroll');
				openedModal.setAttribute('closing', '');
				openedModal.addEventListener(
					'animationend',
					() => {
						openedModal.removeAttribute('closing');
						openedModal.close();
					},
					{ once: true }
				);
			});
		});
		modals.forEach(modal => {
			modal.addEventListener('click', function (e) {
				if (e.target.nodeName === 'DIALOG') {
					document.querySelector('html').classList.remove('noScroll');
					this.setAttribute('closing', '');
					this.addEventListener(
						'animationend',
						() => {
							this.removeAttribute('closing');
							this.close();
						},
						{ once: true }
					);
				}
			});
		});
	}
}

//! html structure - copy template to your document:
//* BUTTONS:
/* 
	<button class="open-button" data-label="modal1">
		<p>Open Modal 1</p>
	</button>
	<button class="open-button" data-label="modal2">
		<p>Open Modal 2</p>
	</button>
*/
//* MODALS:
/* 
	<dialog class="modal" id="modal1">
		<div class="modal-container">
			<div class="modal-box">
				<div class="modal-content">
					<h2>MODAL 1</h2>
				</div>
			</div>
			<img class="close-button" src="../public/close.svg" alt="close" />
		</div>
	</dialog>

	<dialog class="modal" id="modal2">
		<div class="modal-container">
			<div class="modal-box">
				<div class="modal-content">
					<h2>MODAL 2</h2>
				</div>
			</div>
			<img class="close-button" src="../public/close.svg" alt="close" />
		</div>
	</dialog>
*/
