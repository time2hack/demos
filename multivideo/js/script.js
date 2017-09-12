var webrtc = new SimpleWebRTC({
	localVideoEl: 'localVideo',
	remoteVideosEl: 'remoteVideo',
	autoRequestMedia: true
});

webrtc.on('readyToCall', function () {
	webrtc.joinRoom('pankaj');
});