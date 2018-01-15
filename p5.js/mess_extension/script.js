var w = 400;
var h = 600;
let menu_json;
let url = 'https://gymkhana.iitb.ac.in/~hostel5/api/app/mess.php';
let date = new Date();
let day_num;
let bf,ln,tf,dn;

function preload(){
    data = loadJSON(url,gotData);
}

function setup() {
    noCanvas();
    //createCanvas(w,h);
    day_num = date.getDay() - 1;
    if (day_num ==-1){day_num = 6;}
    bf = menu_json[day_num].breakfast;
    // bf = trim(bf);
    // bf = split(bf,'\r\n');
    // bf = join(bf, ' ');
    // console.log(bf);
    ln = menu_json[day_num].lunch;
    tf = menu_json[day_num].tiffin;
    dn = menu_json[day_num].dinner

    let one = select('#bf');
    let two = select('#ln');
    let three = select('#tf');
    let four = select('#dn');
    one.html(bf);
    one.style("font-family: 'Pacifico', cursive;");
    one.style("text-shadow: 4px 4px 4px #aaa;");
    two.html(ln);
        two.style("font-family: 'Pacifico', cursive;");
    two.style("text-shadow: 4px 4px 4px #aaa;");
    three.html(tf);
        three.style("font-family: 'Pacifico', cursive;");
    three.style("text-shadow: 4px 4px 4px #aaa;");
    four.html(dn);
        four.style("font-family: 'Pacifico', cursive;");
    four.style("text-shadow: 4px 4px 4px #aaa;");

}

function gotData(data) {
    menu_json = data.results;
    console.log(menu_json);
}