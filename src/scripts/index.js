import '../styles/index.scss';
import { expandBlock } from './main';
import { elementAnimation } from './extra/animations';
import { smoothScroll } from './extra/smoothScroll';
import { flipCards } from './extra/flipper';
import { videoPlayer } from './extra/video';
import { modals } from './extra/modals';
import { popup } from './extra/popup';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
	require('../page1.html');
}

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	/*  ANIMATIONS */
	elementAnimation('.packBlock', '_animated1');

	/* OPEN/CLOSE EXPAND BLOCKS */
	expandBlock('.expandButton', '.expandBlock', '_expandClass');

	/* FLIPPING CARDS ON CLICK */
	flipCards('.flipperCard', '_rotate');

	/*  SMOOTH SCROLL to anchores */
	smoothScroll('.anchor');

	/* ZOOM for PLUS buttons on mobile devices (magnificPopup) */
	popup('.popup');

	/* VIDEO & TIME CODES LINKS */
	videoPlayer('.startButton', '_started');

	/* MODALS */
	modals('.modal', '.open-button', '.close-button');
});
