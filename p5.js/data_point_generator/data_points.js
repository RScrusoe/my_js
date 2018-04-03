var w = 600;
var h = 600;
let s = [];
let writer;
let classes = {};
let counter = 0;
function setup() {
    classes[0] = [];
    counter += 1;
    createCanvas(w,h);
    background(51);
    stroke(255);
    writer = createWriter('datapoints.csv');
    createElement('p','Press C on keyboard to change Label/Class');
    createElement('p','Press D on keyboard to download CSV of datapoints');
    createElement('p','Points are normalized between (0-1) and cartesian notation with origin at bottom left corner');
    


}

function draw() {
   

}

function mouseClicked(){
    x = mouseX;
    y = mouseY;
    ellipse(x,y,5,5);
    x = x/w;
    y = (h-y)/h;
    classes[counter-1].push([x,y]);
}

function changeClass() {
    classes[counter] = [];
    counter += 1;
    c = color(random(255),random(255),random(255));
    stroke(c);
    fill(c);
}

function downloadCSV() {
    for (var i=0;i<counter;i++){
        for (var j=0;j<classes[i].length;j++){
            l = [];
            l.push(i);
            l.push(classes[i][j][0]);
            l.push(classes[i][j][1]);
            writer.write(l);
            writer.write('\n');
        }
    }
    writer.close();

}


function keyTyped() {
    if (key === 'c'){
        changeClass();
    }
    else if (key === 'd'){
        downloadCSV();
    }
}