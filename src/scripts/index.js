import '../styles/index.scss';
import { packshotAnimation } from './animations';
import { expandBlock, flipCards, smoothScroll, zoom } from './main';
import { videoPlayer } from './video';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	/*  ANIMATIONS */
	packshotAnimation('.packBlock', '_animated1');

	/* OPEN/CLOSE EXPAND BLOCKS */
	expandBlock('.expandButton', '.expandBlock', '_expandClass');

	/* FLIPPING CARDS ON CLICK */
	flipCards('.flipperCard', '_rotate');

	/*  SMOOTH SCROLL to anchores */
	smoothScroll('.anchor');

	/* ZOOM for PLUS buttons on mobile devices */
	zoom('.popup');

	/* VIDEO & TIME CODES LINKS */
	videoPlayer('.startButton', '_started');
});
