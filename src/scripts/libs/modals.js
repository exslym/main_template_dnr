export function modals(modalBlock, openButton, closeButton) {
	if (
		document.querySelector(`.${openButton}`) &&
		document.querySelector(`.${modalBlock}`)
	) {
		const modals = document.querySelectorAll(`.${modalBlock}`);
		const openModalButtons = document.querySelectorAll(`.${openButton}`);
		const closeModalButtons = document.querySelectorAll(`.${closeButton}`);

		const isTablet =
			/^iP/.test(navigator.userAgent) ||
			(/^Mac/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
		if (isTablet) {
			modals.forEach(modal => {
				modal.classList.add('noPadddingRight');
			});
		}

		openModalButtons.forEach(button => {
			button.addEventListener('click', () => {
				const openingModal = document.querySelector(
					`#${button.dataset.target}`
				);
				/* Check if scrollbar is visible */
				if (document.body.clientHeight > window.innerHeight) {
					document.querySelector('html').classList.add('noScroll');
				} else {
					openingModal.style.padding = '1em';
				}

				openingModal.showModal();
				openingModal.scrollTop = 0;
				openingModal.addEventListener(
					'animationend',
					() => {
						openingModal.style.overflow = 'auto';
					},
					{ once: true }
				);
			});
		});
		closeModalButtons.forEach(button => {
			button.addEventListener('click', () => {
				const openedModal = document.querySelector(`#${button.dataset.target}`);
				document.querySelector('html').classList.remove('noScroll');
				openedModal.setAttribute('closing', '');
				openedModal.style.overflow = 'hidden';
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
					this.style.overflow = 'hidden';
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

//! html structure - copy templates to your document:
//* BUTTONS:
/* 
	<button class="button openButton" data-target="modal1">
		<p>OPEN_MODAL_1</p>
	</button>
	<button class="button openButton" data-target="modal2">
		<p>OPEN_MODAL_2</p>
	</button>
*/

//* MODALS:
/* 
	<dialog class="modal modalBlock" id="modal1">
		<div class="modal-container">
			<div class="modal-box">
				<div class="modal-content">
					<div>MODAL_1_CONTENT</div>
				</div>
			</div>
			<img class="closeButton" data-target="modal1" src="../public/images/close.svg" alt="close" />
		</div>
	</dialog>

	<dialog class="modal modalBlock" id="modal2">
		<div class="modal-container">
			<div class="modal-box">
				<div class="modal-content">
					<div>MODAL_2_CONTENT</div>
				</div>
			</div>
			<img class="closeButton" data-target="modal2" src="../public/images/close.svg" alt="close" />
		</div>
	</dialog>
*/
//! styles structure - copy _modals.scss module to your project and import it in the index.scss

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
import { modals } from './libs/modals';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals('modalBlock', 'openButton', 'closeButton');
});
*/
