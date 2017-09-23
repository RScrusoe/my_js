var w = 600;
var h = 600;
var d = new Date();


function setup() {
    createCanvas(w,h);
    angleMode(DEGREES);
}


function draw() {
    background(0);
    translate(w/2,h/2);
    rotate(-90)
    var d = new Date();
    let hr = hour();
    let min = minute();    
    let sec = second();
    strokeWeight(8);


    stroke(100,0,255);
    noFill();
    end = map(hr,0,12,0,360);
    var tmp = map(min,0,60,0,30);
    arc(0,0,400,400,0,end+tmp);
    var tmp = map(min,0,60,0,30);
    push();
    rotate(end+tmp);
    line(0,0,50,0);
    pop();
    


    stroke(0,255,155);
    noFill();
    end = map(min,0,60,0,360);
    arc(0,0,425,425,0,end);
    push();
    rotate(end);
    line(0,0,125,0);
    pop();



    stroke(255,0,155);
    noFill();
    var mili = d.getMilliseconds();
    sec = sec+mili/1000;
    end = map(sec,0,60,0,360);
    arc(0,0,450,450,0,end);    
    push();
    rotate(end);
    line(0,0,175,0);
    pop();


    stroke(255);
    point(0,0);

}   
