document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var sleep = getInputVal('sleep'); // just sleep
    var calories = getInputVal('calories');
    var weight = getInputVal('weight');
    var exercise = getInputVal('exercise');
}


function getInputVal(id){
    return document.getElementById(id).value;
}