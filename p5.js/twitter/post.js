var tweets;
var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var str = {
    status: "#Mumbai is the greatest city in the world!"

}

T.post('statuses/update', str, tweeted);


function tweeted(err, data, response) {
    console.log("Done!");
}