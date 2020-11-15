var video = document.getElementById('myVideo');

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log('Puase Video');
	video.pause();
});

document.querySelector('#slower').addEventListener('click', function() {
	// video.defaultPlaybackRate = 1.0;
	// video.playbackRate -= 0.1
	video.playbackRate *= 0.9;
	console.log('Playback speed: ' + video.playbackRate);
});

document.querySelector('#faster').addEventListener('click', function() {
	video.playbackRate /= 0.9;
	console.log('Playback speed: ' + video.playbackRate);
});

document.querySelector('#skip').addEventListener('click', function() {
	if (video.duration - video.currentTime > 5) {
		video.currentTime += 5;
	}
	else {
		video.currentTime = 0;
		video.play();
	}
	console.log('Current location: ' + video.currentTime);
});

document.querySelector('#mute').addEventListener('click', function() {
	let m = document.querySelector('#mute');
	if (video.muted === true) {
		video.muted = false;
		console.log('Unmuted');
		m.innerHTML = 'Mute';
	}
	else {
		video.muted = true;
		console.log('Muted');
		m.innerHTML = 'Unmute';
	}
});

document.querySelector('#volumeSlider').addEventListener('click', function() {
	let volume = video.volume = this.value / 100;
	console.log('Volume: ' + video.volume);
	document.querySelector('#volume').innerHTML = volume*100 + '%';
});

document.querySelector('#old').addEventListener('click', function() {
	video.classList.add('oldTime')
});

document.querySelector('#original').addEventListener('click', function() {
	video.classList.remove('oldTime')
});
