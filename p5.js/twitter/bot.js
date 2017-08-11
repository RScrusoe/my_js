
var Twit = require('twit');

var config = require('./config');
console.log(config);
var T = new Twit(config);

var params = {
	q: 'Mumbai',
	count: 50
}

T.get('search/tweets', params, gotData);


function gotData(err, data, response) {
	console.log(data);
}