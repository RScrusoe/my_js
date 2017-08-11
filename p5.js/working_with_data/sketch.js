var w = 600;
var h = 600;
var w = 800;
var h = 600;

function preload(){
  data = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/sports/nba_teams.json');
}

function setup() {
  noCanvas();
  teams = data.nba_teams;

  for (var i=0;i<teams.length;i++){
    team = teams[i]
    createElement('h2',team.name)
    createDiv('\t\t'+ team.city)
    createSpan('\t\t'+ team.stadium)
  } 


  
}

  