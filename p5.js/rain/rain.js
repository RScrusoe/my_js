var w = 600;
var h = 400;
var rains = [];
var n = 600;


function setup() {
    createCanvas(w,h);
    noStroke();
    for (let i = 0; i<n; i++){
        var d = new Drop();
        rains.push(d);
    }
}

function draw() {
    background(200);

    for (let i = 0; i<n; i++){
        rains[i].show();
    }
}   

