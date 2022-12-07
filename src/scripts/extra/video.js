export function videoPlayer(startButton, startedClass) {
	if (document.querySelector('video')) {
		const videoPosters = document.querySelectorAll(`${startButton}`);
		const videos = document.querySelectorAll('video');

		let Play = id => {
			for (let poster of videoPosters) {
				if (poster.dataset.label == id) {
					poster.classList.add(`${startedClass}`);
				}
			}
			for (let video of videos) {
				if (video.dataset.label == id) {
					video.play();
				}
			}
		};

		let Stop = id => {
			for (let video of videos) {
				if (video.dataset.label == id) {
					video.pause();
				}
			}
		};

		for (let poster of videoPosters) {
			poster.addEventListener('click', () => {
				let videoId = poster.dataset.label;
				Play(videoId);
			});
		}

		for (let video of videos) {
			video.addEventListener('click', () => {
				let videoId = video.dataset.label;
				if (video.paused) {
					Play(videoId);
				} else {
					Stop(videoId);
				}
			});
		}
	}
}
