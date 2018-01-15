var word = 'stitches';
var data;
var defs = [];


function setup() {
    noCanvas();
    var url = "http://api.pearson.com/v2/dictionaries/wordwise/entries?limit=3&search=" + word;
    loadJSON(url,gotData);

}

function gotData(data) {
    data = data.results;
    console.log(data);
    for (var i =0;i<data.length;i++){
        // console.log(data[i].senses[0].examples[0]);
        createElement('h1',data[i].headword);
        createSpan(data[i].part_of_speech);
        if(data[i].senses && data[i].senses.length>0){
            var div = createDiv(data[i].senses[0].definition);
            if(data[i].senses[0].examples){
                div.html(data[i].senses[0].examples[0].text);
                console.log(data[i].senses[0].examples[0].text);
            }
        }

    }

}

