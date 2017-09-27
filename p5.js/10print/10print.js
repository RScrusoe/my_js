var w = 600;
var h = 600;
var d = 25;
var x = 0;
var y = 0;

function setup() {
    createCanvas(w,h);
    background(0);
}


function draw() {
    
    stroke(255);
    if(random(1)>0.5){
        line(x,y,x+d,y+d);
    }
    else{
        line(x,y+d,x+d,y);
    }
    x += d;
    if(x>width){
        x=0;
        y+=d;
        if(y>height){y=0; background(0);}
    }


}   
