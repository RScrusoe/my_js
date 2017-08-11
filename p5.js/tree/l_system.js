var w = 600;
var h = 600;

var angle;
var back = '#D2EDFB';
var tree1 = {
   axiom: 'F',
   rules: [{
      a: 'F',
      b: 'FF+[+F-F-F]-[-F+F+F]'
   }],
   sent: this.axiom,
   len: 100
};

var tree2 = {
   axiom: 'X',
   rules: [{
      a: 'X',
      b: 'F[-X][X]F[-X]+FX'
   }, {
      a: 'F',
      b: 'FF'
   }],
   sent: this.axiom,
   len: 110
};


var glob_tree;


function setup() {
   angle = radians(25);
   createCanvas(w, h);
   createP('');
   background(back);
   var b1 = createButton('Tree-1');
   b1.mousePressed(goto1);
   var b2 = createButton('Tree-2');
   b2.mousePressed(goto2);
   var btn = createButton('Generate');
   btn.mousePressed(generate);
   var btn = createButton('Clear');
   btn.mousePressed(function clear() {
      tree1.len = 100;
      tree1.sent = tree1.axiom;
      tree2.len = 100;
      tree2.sent = tree2.axiom;
      background(back);
   });
}

function goto1() {
   tree1.len = 100;
   tree1.sent = tree1.axiom;
   createP('');
   background(back);
   glob_tree = tree1;
   turtle(glob_tree);
   createP('');

   turtle(glob_tree);
}

function goto2() {
   tree2.len = 110;
   tree2.sent = tree2.axiom;
   createP('');
   background(back);
   glob_tree = tree2;
   turtle(glob_tree);
   createP('');
   turtle(glob_tree);
   turtle(glob_tree);
}

function turtle(t) {

   background(back);
   resetMatrix();
   translate(w / 2, h);
   stroke('#19C128');
   strokeWeight(1);
   t.strok *= 0.8
   for (var i = 0; i < t.sent.length; i++) {
      var curr = t.sent.charAt(i);
      if (curr == 'F') {
         line(0, 0, 0, -t.len);
         translate(0, -t.len);
      } else if (curr == '+') {
         rotate(angle);
      } else if (curr == '-') {
         rotate(-angle);
      } else if (curr == '[') {
         push();
      } else if (curr == ']') {
         pop();
      }
   }
}

function generate() {
   var t = glob_tree;
   t.len = t.len * 0.55;
   var next = '';
   console.log(t);
   for (var i = 0; i < t.sent.length; i++) {
      var curr = t.sent.charAt(i);
      var flag = 0;
      for (var j = 0; j < t.rules.length; j++) {
         if (curr == t.rules[j].a) {
            next = next + t.rules[j].b;
            flag = 1;
            break;
         }
      }
      if (!flag) {
         next += curr;
      }
   }
   t.sent = next;
   // createP(t.sent);
   console.log(t.sent.length);
   turtle(t);
}