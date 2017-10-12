var tweets;
var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);



var params = {
    track: 'Trump'
};
var stream = T.stream('statuses/filter');

stream.on('tweet', function (tweet) {
  console.log(tweet)
});

// function gotData(err, data, response) {
//     tweets = data.statuses;
//     for(var i = 0 ; i< tweets.length; i++){
//        console.log(tweets[i].text);
//     }
// }




