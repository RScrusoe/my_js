
// function setup() {
//     noCanvas();
//     var speech = new p5.SpeechRec('en-US',gotSpeech);
//     speech.start(true,true);
//     console.log('asdasd')
// }

// function gotSpeech(data) {
//     if (speech.resultvalue){
//         console.log(speech);
//     }
// }

var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) { 
  console.log(event) 
}
recognition.start();