var w = 600;
var h = 600;



var axiom='A';
var sent = axiom;
var rules = [];
rules[0]={
   a:'A',
   b:'AB'
};
rules[1]={
   a:'B',
   b:'A'
};


function setup() {
   // createCanvas(w,h);
   console.log(rules[0].b);
   var btn = createButton('Generate');
   btn.mousePressed(generate);

}

function generate() {
   var next = '';
   for (var i = 0; i<sent.length;i++){
      var curr = sent.charAt(i);
      for (var j=0; j<rules.length;j++){
         if(curr == rules[j].a){
            next = next + rules[j].b;
         }
      }
   }
   sent = next;
   createP(sent);
}