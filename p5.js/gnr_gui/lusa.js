let r1,r2,r3,r4,r5,r6,r,r8,r9,r10,r11;
let submit,result;
let err;
let lusa_class;
let radios = [];
let values = [];

function setup() {

    noCanvas();
    init_class();
    createElement('br');
    submit = createButton('Submit');
    submit.addClass('btn');
    submit.mousePressed(submit_class);
    result = createElement('h1','');
    result.style('font-size','50px');
    result.style('color','#8B0000')
}


function mousePressed() {
    values = []
    for (let i =0; i< radios.length;i++){
        values.push(radios[i].value())
    }
    // console.log(values);
    // console.log(max(values));
}

function init_class() {
    a = createElement('h4','Drought');
    a.style('color','#000080');
    r1 = createRadio();
    radios.push(r1);
    r1.option('>220',1);
    r1.option('160-220',2);
    r1.option('100-160',3);
    //r1.option('>220',4);
    r1.option('60-100',5);
    r1.option('<60',6);

    a =createElement('h4','Slope Angle (degrees)');
    a.style('color','#000080');
    r2 = createRadio();
    radios.push(r2);
    r2.option('<1',1);
    r2.option('1-2.5',2);
    r2.option('2.5-6.5',3);
    r2.option('6.5-11',4);
    r2.option('any',5);
    r2.option('any',6);

    a = createElement('h4','Past Erosion');
    a.style('color','#000080');
    r3 = createRadio();
    radios.push(r3);
    r3.option('Nil',1);
    r3.option('Slight',2);
    r3.option('Moderate',3);
    //r3.option('Moderate',4);
    r3.option('Severe',5);
    //r3.option('Severe',6);

    a = createElement('h4','Rock Outcrop (%)');
    a.style('color','#000080');
    r4 = createRadio();
    radios.push(r4);
    r4.option('0',1);
    //r4.option('0',2);
    r4.option('0-5',3);
    //r4.option('0-5',4);
    r4.option('5-20',5);
    r4.option('Any',6);


    a = createElement('h4','Waterlogging');
    a.style('color','#000080');
    r5 = createRadio();
    radios.push(r5);
    r5.option('Nil',1);
    //r5.option('Nil',2);
    r5.option('Moderate',3);
    //r5.option('Moderate',4);
    r5.option('Severe',5);
    //r5.option('Severe',6);

    a = createElement('h4','Flooding Duration');
    a.style('color','#000080');
    r6 = createRadio();
    radios.push(r6);
    r6.option('Nil',1);
    //r6.option('Nil',2);
    r6.option('Upto 2 months',3);
    //r6.option('Nil',4);
    r6.option('> 2 months',5);
    r6.option('> 4 months',6);

    a = createElement('h4','Flooding Depth');
    a.style('color','#000080');
    r7 = createRadio();
    radios.push(r7);
    r7.option('Nil',1);
    //r7.option('Nil',2);
    r7.option('Upto 1 months',3);
    //r7.option('Nil',4);
    r7.option('> 2 months',5);
    //r7.option('> 2 months',6);

    a = createElement('h4','Salinity ECE (s)');
    a.style('color','#000080');
    r8 = createRadio();
    radios.push(r8);
    r8.option('<0.5',1);
    r8.option('0.5-2',2);
    r8.option('2-4',3);
    //r8.option('<0.5',4);
    r8.option('4-8',5);
    r8.option('>8',6);

    a = createElement('h4','Acidity/Sodicity (pH)');
    a.style('color','#000080');
    r9 = createRadio();
    radios.push(r9);
    r9.option('5.5-7',1);
    r9.option('5-5.5 / 7-7.5',2);
    r9.option('4.5-5 / 7.5-9',3);
    r9.option('4.5-5.5',4);
    r9.option('4-4.5 / 7.5-9',5);
    r9.option('<4.5 / >9',6);

    a = createElement('h4','Drought 2 - Effective Soil Thickness');
    a.style('color','#000080');
    r10 = createRadio();
    radios.push(r10);
    r10.option('>90',1);
    r10.option('50-90',2);
    r10.option('<50',3);
    //r10.option('<50',4);
    //r10.option('<50',5);
    r10.option('Any',6);

    a= createElement('h4','Drought 2 - Texture Class');
    a.style('color','#000080');
    r11 = createRadio();
    radios.push(r11);
    r11.option('ZL,L,CL',1);
    r11.option('ZL,L,CL,SCL,SC',2);
    r11.option('SL,C',3);
    r11.option('L,CL,C',4);
    r11.option('LS',5);
    r11.option('-',6);

}


function submit_class() {
    if(err){err.remove();}
    values = []
    for (let i =0; i< radios.length;i++){
        values.push(radios[i].value())
    }
    let lusa_class_no = max(values);

    switch(lusa_class_no){
        case 0:
            err = createElement('h4','Please select at least one option');
            break;
        case 1:
            lusa_class = 'A Arable';
            break
        case 2:
            lusa_class = 'B Arable';
            break
        case 3:
            lusa_class = 'C Arable';
            break
        case 4:
            lusa_class = 'D Special Arable';
            break
        case 5:
            lusa_class = 'E Special Arable';
            break
        case 6:
            lusa_class = 'F Special Arable';
            break
    }

    console.log(lusa_class);
    result.html(lusa_class);
}


function confi_level() {

    createElement('h4','Drought 1 - Length of Growing Season');
    r1 = createRadio();
    radios.push(r1);
    r1.option('Agro Ecological zone',1);
    r1.option('',2);
    r1.option('100-160',3);
    //r1.option('>220',4);
    r1.option('60-100',5);
    r1.option('<60',6);

}

