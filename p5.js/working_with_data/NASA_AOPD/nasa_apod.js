var glob_data;

function setup() {
  noCanvas();
  loadJSON('https://api.nasa.gov/planetary/apod?api_key=bBDdMGfD3BWJ6YTeR4t6nlZeGMnlbPOucV1UV3DB',gotData);
  
}


function gotData(data) {
    glob_data = data;
    createElement('h1',glob_data.title);
    var url = glob_data.url;
    var img = createImg(url);
    createP(glob_data.explanation);
    console.log(glob_data.hdurl);
}

