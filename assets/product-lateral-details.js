const wattagePBar = document.getElementById('wattage-pbar');
const currentPBar = document.getElementById('current-pbar');
const voltagePBar = document.getElementById('voltage-pbar');

//const product = document.getElementById('product-json-product-template').textContent;
const metafields = `[{
    "this_wattage": 0,
    "this_current": 0,
    "this_voltage": 0
}]`;

function calculatePercentage(metafields) {
    metafields = JSON.parse(metafields.replace(/W/g, '').replace(/A/g, '').replace(/V/g, '').replace(/""/g, '0'));
    var thisWattage = parseFloat(metafields[metafields.length-1].this_wattage),
        thisCurrent = parseFloat(metafields[metafields.length-1].this_current),
        thisVoltage = parseFloat(metafields[metafields.length-1].this_voltage);
    var wattages = new Array(), currents = new Array(), voltages = new Array();
  
      /* Converting to a numbers array*/
    for (var i = 0; i < metafields.length; i++) {
      metafields[i].wattage = parseFloat(metafields[i].wattage);
      metafields[i].current = parseFloat(metafields[i].current);
      metafields[i].voltage = parseFloat(metafields[i].voltage);
      if (!isNaN(metafields[i].wattage)) wattages.push(metafields[i].wattage);
      if (!isNaN(metafields[i].current)) currents.push(metafields[i].current);
      if (!isNaN(metafields[i].voltage)) voltages.push(metafields[i].voltage);
    }
  
    wattages.sort(function(a, b) {
      return a - b;
    });
    currents.sort(function(a, b) {
      return a - b;
    });
    voltages.sort(function(a, b) {
      return a - b;
    });
  
    /* Deleting duplicates*/
    wattages = Array.from(new Set(wattages));
    currents = Array.from(new Set(currents));
    voltages = Array.from(new Set(voltages));
  
    const wattagePer = setPercentage(wattages, thisWattage);
    const currentPer = setPercentage(currents, thisCurrent);
    const voltagePer = setPercentage(voltages, thisVoltage);
  
    return {
      watter_per: wattagePer,
      current_per: currentPer,
      voltage_per: voltagePer
    };
}

function fillCircleProgressBar(wattage, current, voltage) {
    wattage = 232.36 - 232.36/(100/wattage);
    current = 232.36 - 232.36/(100/current);
    voltage = 232.36 - 232.36/(100/voltage);
    animateProgressBar(wattagePBar, wattage);
    animateProgressBar(currentPBar, current);
    animateProgressBar(voltagePBar, voltage);
}

function animateProgressBar(stroke, value) {
    stroke.animate([
        // keyframes
        { strokeDashoffset: '232.36' },
        { strokeDashoffset: value }
    ], {
        // timing options
        duration: 2500,
        fill: "forwards"
    });
}

function setPercentage(array, currentVariant) {
    var units = 100 / array.length;
    console.log((array.indexOf(currentVariant) + 1) + "*" + units);
    return (array.indexOf(currentVariant) + 1) * units;
}

const percentages = calculatePercentage(metafields);
console.log(percentages);
fillCircleProgressBar(percentages.watter_per, percentages.current_per, percentages.voltage_per);