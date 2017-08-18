var t0 = 10
var ding;
function preload() {
  ding = loadSound('a/ding.wav');
}

function convertS(s) {
  var min = floor(s/60);
  var sec = floor(s%60);
  return nf(min,2) + ":" + nf(sec,2)
}

function setup() {
 noCanvas();
 textSize(60  )
 var params = getURLParams()
 if(params.min){
  t0 = int(params.min*60);
  console.log(t0)
 }

 var timer = select('#timer');
 timer.html(convertS(t0));
 
 var interval = setInterval(counter,1000);

 function counter() {
   t0 = t0 - 1;
   timer.html(convertS(t0));
   if (t0 == 0){
    clearInterval(interval);
    ding.play();
   }
 }

}

