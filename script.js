document.addEventListener('keydown', playSound);

function playSound(e) {
	if (e.keyCode === 65) {
		let audio = document.querySelector('audio[data-key="65"]');
		audio.currentTime = 0;
		audio.play();
	}
	if (e.keyCode === 83) {
		let audio = document.querySelector('audio[data-key="83"]');
		audio.currentTime = 0;
		audio.play();
	}
	if (e.keyCode === 68) {
		let audio = document.querySelector('audio[data-key="68"]');
		audio.currentTime = 0;
		audio.play();
	}
	if (e.keyCode === 70) {
		let audio = document.querySelector('audio[data-key="70"]');
		audio.currentTime = 0;
		audio.play();
	}
	if (e.keyCode === 71) {
		let audio = document.querySelector('audio[data-key="71"]');
		audio.currentTime = 0;
		audio.play();
	}
	if (e.keyCode === 72) {
		let audio = document.querySelector('audio[data-key="72"]');
		audio.currentTime = 0;
		audio.play();
	}
	if (e.keyCode === 74) {
		let audio = document.querySelector('audio[data-key="74"]');
		audio.currentTime = 0;
		audio.play();
	}
	if (e.keyCode === 75) {
		let audio = document.querySelector('audio[data-key="75"]');
		audio.currentTime = 0;
		audio.play();
	}
	if (e.keyCode === 76) {
		let audio = document.querySelector('audio[data-key="76"]');
		audio.currentTime = 0;
		audio.play();
	}
};	

document.addEventListener('keydown', addCss);

function addCss(e) {
	if (e.keyCode === 65) {
		let style = document.querySelector('button[data-key="65"]');
		style.classList.add('active');
	}
	else if (e.keyCode === 83) {
		let style = document.querySelector('button[data-key="83"]');
		style.classList.add('active');
	}
	else if (e.keyCode === 68) {
		let style = document.querySelector('button[data-key="68"]');
		style.classList.add('active');
	}
	if (e.keyCode === 70) {
		let style = document.querySelector('button[data-key="70"]');
		style.classList.add('active');
	}
	if (e.keyCode === 71) {
		let style = document.querySelector('button[data-key="71"]');
		style.classList.add('active');
	}
	if (e.keyCode === 72) {
		let style = document.querySelector('button[data-key="72"]');
		style.classList.add('active');
	}
	if (e.keyCode === 74) {
		let style = document.querySelector('button[data-key="74"]');
		style.classList.add('active');
	}
	if (e.keyCode === 75) {
		let style = document.querySelector('button[data-key="75"]');
		style.classList.add('active');
	}
	if (e.keyCode === 76) {
		let style = document.querySelector('button[data-key="76"]');
		style.classList.add('active');
	}
};

document.addEventListener('keyup', removeCss);

function removeCss(e) {
	if (e.keyCode === 65) {
		let style = document.querySelector('button[data-key="65"]');
		style.classList.remove('active');
	}
	if (e.keyCode === 83) {
		let style = document.querySelector('button[data-key="83"]');
		style.classList.remove('active');
	}
	if (e.keyCode === 68) {
		let style = document.querySelector('button[data-key="68"]');
		style.classList.remove('active');
	}
	if (e.keyCode === 70) {
		let style = document.querySelector('button[data-key="70"]');
		style.classList.remove('active');
	}
	if (e.keyCode === 71) {
		let style = document.querySelector('button[data-key="71"]');
		style.classList.remove('active');
	}
	if (e.keyCode === 72) {
		let style = document.querySelector('button[data-key="72"]');
		style.classList.remove('active');
	}
	if (e.keyCode === 74) {
		let style = document.querySelector('button[data-key="74"]');
		style.classList.remove('active');
	}
	if (e.keyCode === 75) {
		let style = document.querySelector('button[data-key="75"]');
		style.classList.remove('active');
	}
	if (e.keyCode === 76) {
		let style = document.querySelector('button[data-key="76"]');
		style.classList.remove('active');
	}
};