


var tweets;
var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

tweetit();

setInterval(tweetit,1000*(Math.random()*20 + 5));

function tweetit() {
    var r = Math.random()*10;

    var str = {
        status: "My favourite number is " + r + " !"

    }

    T.post('statuses/update', str, tweeted);


    function tweeted(err, data, response) {
        console.log("Done!");
    }

}