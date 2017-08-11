var l = require("lyric-get");
var lyr;

function getget(artist, song) {
	console.log('getting');
	l.get(artist, song, function(err, res) {
		if (err) {
			console.log(err);
		} else {
			lyr = res;
			console.log(res);
		}
	});
}


getget('taylor swift', 'love story');