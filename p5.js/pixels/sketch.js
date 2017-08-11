var w = 640;
var h = 480;

var vid;
var vscale = 8

function setup() {
 createCanvas(w,h);
 pixelDensity(1);
 vid = createCapture(VIDEO);
 vid.size(w/vscale,h/vscale);

}


function draw() {
    background(51);
    vid.loadPixels();
    loadPixels();

    // if you want to address to individual pixel say (x,y)
    // we can do::
    // pixels[(x+y*width)*4] => R
    // pixels[(x+y*width)*4 +1] => G
    // pixels[(x+y*width)*4 +2] => B
    // pixels[(x+y*width)*4 +3] => alpha

    for (var y = 0; y<vid.height; y++){
        for (var x=0; x<vid.width; x++){
            var i = (x + y*vid.width)*4;

            var r = vid.pixels[i+0];
            var g = vid.pixels[i+1];
            var b = vid.pixels[i+2];
            var bright = (r+g+b)/3;
            var rect_width = map(bright,0,255,0,vscale);
            noStroke();
            fill(255);
            rect(x*vscale,y*vscale,rect_width,rect_width);
            // pixels[i+0] =  bright;
            // pixels[i+1] =  bright;
            // pixels[i+2] =  bright;
            // pixels[i+3] = 255;

        }
    }


    // updatePixels();
  

}

