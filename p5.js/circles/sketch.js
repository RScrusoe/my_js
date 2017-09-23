var w = 600;
var h = 600;
var circles = [];

function setup() {
    createCanvas(w,h);
    var nTimes = 0;
    while(circles.length < 500 ){

        var circle = {
            x: random(width),
            y: random(height),
            r: random(5,50)
        };
        var flag = 1;
        for(j=0; j<circles.length; j++){
            var tmp = circles[j];
            var d = dist(circle.x,circle.y, tmp.x, tmp.y);
            if(d<(circle.r + tmp.r)){flag = 0;break;}
        }
        if(flag){
            circles.push(circle)
        }
        nTimes++;
        if(nTimes>100000){break;}
    }

    for (var i =0; i<circles.length; i++){
        // fill(0,0,255,100);
        fill(random(2,200),random(2,200),random(2,200),random(85,200));
        noStroke();
        ellipse(circles[i].x,circles[i].y,circles[i].r*2,circles[i].r*2);
    }
    console.log(circles.length);


}



function draw() {


}
