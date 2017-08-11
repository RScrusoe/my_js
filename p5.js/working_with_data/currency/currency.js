var curr_data;
var money=1;
var cFrom;
var cTo;

var ans;
function setup() {
  noCanvas();
  init();
  fromChanged();
  toChanged();
  ans = createElement('h1',"$$");
}


function init() {
  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(50, 10);
  createP('From');
  sel.option('USD');
  sel.option('GBP');
  sel.option('INR');
  sel.option('EUR');
  sel.option('JPY');
  sel.option('CNY');
  sel.changed(fromChanged);


  sel2 = createSelect();
  sel2.position(50, 40);
  createP('To');
  sel2.option('INR');
  sel2.option('USD');
  sel2.option('EUR');
  sel2.option('JPY');
  sel2.option('GBP');
  sel2.option('CNY');
  sel2.changed(toChanged);
  
  var inp = createInput(money);
  inp.input(convert);
}


function fromChanged() {
  cFrom = sel.value();
  var url = 'http://api.fixer.io/latest?base=' + cFrom;
  loadJSON(url,gotData);
}


function toChanged() {
  cTo = sel2.value();
}


function gotData(data) {
  curr_data = data.rates;
  console.log(curr_data);
}


function convert(x) {
  money = this.value();
  var tmp1 = money*curr_data[cTo];
  ans.html(tmp1);  
}


function dryconvert(x) {
  var tmp = x*curr_data[cTo];
  ans.html(tmp);
}


function mouseMoved() {
if (curr_data){
dryconvert(money);
}
}