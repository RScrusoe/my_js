var w = 800;
var h = 800;
let cols;
let rows;
let resolution = 10;
let current;


function create2Darray(r,c) {
    arr = new Array(c);
    for (let i=0;i<arr.length;i++){
        arr[i] = new Array(r);
    }
    return arr;
}

function countNeighbors(g,x,y) {
    sum=0;
    for (let i=-1;i<2;i++){
        for(let j=-1;j<2;j++){
            let x1 = (x+i+cols)%cols;
            let y1 = (y+j+rows)%rows;
            sum+=g[x1][y1];
        }
    }
    sum -= g[x][y]
    return sum;
}

function setup() {
    createCanvas(w,h);
    cols = w/resolution;
    rows = h/resolution;
    current = create2Darray(rows,cols);
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            current[i][j] = floor(random(2));
        }
    }    

}

function draw() {
    background(0);
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            let x = i*resolution;
            let y = j*resolution;
            if(current[i][j]==1){
                fill(255);
                stroke(0);
                rect(x,y,resolution-1,resolution-1);
                // console.log("#");
            }
        }
    }

    let next = create2Darray(rows,cols);
    
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            state = current[i][j];
            let n = countNeighbors(current,i,j)
            if(state==1 && (n<2 || n>3)){next[i][j] = 0;}
            else if(state ==0 && n==3 ){next[i][j]=1;}
            else{next[i][j] = state;}
        }
    }
    current=next;

}   
