let r1,r2,r3,r4,r5,r6,r,r8;
let submit,result;
let confi_class;
let radios = [];
let result_elements = [];

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
    a = createElement('h3','Drought - Length of the growing season');
    a.style('color','#000080');
    r1 = createSelect();
    radios.push(r1);
    r1.option('Agro-ecological zone',1);
    r1.option('Compilation from district agromat; R>0.5PET, mothly means',2);
    r1.option('Compilation from district agromat data and local raing gauge networks,75% exceedance R>0.5PET by dekad',3);
    b1 = createElement('h4','');
    b1.style('color','#8B0000');
    result_elements.push(b1);

    a = createElement('h3','Soil Erosion - Slope Angle');
    a.style('color','#000080');
    r2 = createSelect();
    radios.push(r2);
    r2.option('1:50000 Topographic sheet',1);
    r2.option('Transfer function from 1:50000 satellite imagery/air photo to 1:50000 sheet',2);
    r2.option('Field measurement or parallax measurement on stereo air photos',3);
    b2 = createElement('h4','');
    b2.style('color','#8B0000');
    result_elements.push(b2);

    a = createElement('h3','Soil Erosion - Past Erosion');
    a.style('color','#000080');
    r3 = createSelect();
    radios.push(r3);
    r3.option('Transfer function from 1:250000 soil map',1);
    r3.option('Interpretatiton of 1:50000 satellite imagery',2);
    r3.option('Air photo Interpretatiton and Field check',3);
    b3 = createElement('h4','');
    b3.style('color','#8B0000');
    result_elements.push(b3);

    a = createElement('h3','Terrain - Rock outcrops');
    a.style('color','#000080');
    r4 = createSelect();
    radios.push(r4);
    r4.option('1:50000 Topographic sheet',1);
    r4.option('Interpretatiton of satellite imagery',2);
    r4.option('Air photo Interpretatiton and Field check',3);
    b4 = createElement('h4','');
    b4.style('color','#8B0000');
    result_elements.push(b4);

    a = createElement('h3','Waterlogging - Period of wetness');
    a.style('color','#000080');
    r5 = createSelect();
    radios.push(r5);
    r5.option('1:50000 Topographic sheet and 1:250000 land cover interpret of satellite imagery',1);
    r5.option('Transfer function from 1:250000 soil map',2);
    r5.option('ransfer function from 1:50000 soil map and Field calibration',3);
    b5 = createElement('h4','');
    b5.style('color','#8B0000');
    result_elements.push(b5);

    a = createElement('h3','Flooding - Period and depth of Flooding');
    a.style('color','#000080');
    r6 = createSelect();
    radios.push(r6);
    r6.option('Transfer function from 1:50000 topo sheet ',1);
    r6.option('Transfer function from 3 season 1:50000 satellite imagery',2);
    r6.option('Local calibration',3);
    b6 = createElement('h4','');
    b6.style('color','#8B0000');
    result_elements.push(b6);

    a = createElement('h3','Salinity - Salt affected areas');
    a.style('color','#000080');
    r7 = createSelect();
    radios.push(r7);
    r7.option('satellite imagery and Transfer function from 1:250000 soil maps ',1);
    r7.option('Not Applicablr',2);
    r7.option('Transfer function from 1:50000 soil map with local calibration ',3);
    b7 = createElement('h4','');
    b7.style('color','#8B0000');
    result_elements.push(b7);

    a = createElement('h3','Drought - Available Water capacity from Soul Texture and rootable thickness');
    a.style('color','#000080');
    r8 = createSelect();
    radios.push(r8);
    r8.option('Transfer function from 1:250000 soil maps ',1);
    r8.option('Not Applicablr',2);
    r8.option('Transfer function from 1:50000 soil map with local calibration ',3);
    b8 = createElement('h4','');
    b8.style('color','#8B0000');
    result_elements.push(b8);

}

function submit_class() {
    for (var i=0; i<radios.length;i++){
        ans = radios[i].value();
        str = '&nbsp &nbsp &nbsp =>' + 'Degree of Confidence is ' + ans;
        result_elements[i].html(str);
    }   
}