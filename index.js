var OMXPlayer = require('./lib/omxplayer');

var configuration = {

};

var omxplayer = new OMXPlayer(configuration);
omxplayer.start("movie.mkv");

var omxPlayerService = omxplayer._sessionBus.getService('org.mpris.MediaPlayer2.omxplayer');
console.log("Omx player service=", omxPlayerService);

omxplayer._sessionBus.listNames(function(error, list) {
	if (error) {
		console.error("Get interface error:", error);
		return;
	}
	console.log("Omx player listNames=", list);

});

omxplayer._sessionBus.getInterface('org.mpris.MediaPlayer2.omxplayer', '/org/mpris/MediaPlayer2', null, function(error,
		omxPlayerNotificationsInterface) {
	if (error) {
		console.error("Get interface error:", error);
		return;
	}
	console.log("Omx player interface=", omxPlayerNotificationsInterface);
});
