var w = 800;
var h = 400;
let mic;
let s = [];

function setup() {
    createElement('h1','MIC TEST');
    createCanvas(w,h);
    mic = new p5.AudioIn();
    mic.start();
    noFill();
}

function draw() {
    background(230);

    
    s.push(mic.getLevel());
    beginShape();
    if (s.length>w){
        s.splice(0,1);
    }
    for(var i=0;i<s.length;i++){
        var ht = map(s[i],0,1,h/2,0);
        stroke(map(s[i],0,1,0,255),90,map(s[i],0,1,255,0));
        // stroke('red')
        strokeWeight(2);
        vertex(i,ht);
    }
    endShape();

}