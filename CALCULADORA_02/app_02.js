var numberA = 0 ;
var operador;

var clearInput = () => document.getElementById("input-number").value = "";

// function getnumberA () {
//     var numberA = document.getElementById("input-number").value;
//     console.log(numberA);
//     return numberA;
// }

// function getnumberB () {
//     var numberB = document.getElementById("print-result").value;
//     console.log(numberB);
//     return numberB;
// }

function sum(){
    numberA += parseInt(document.getElementById("input-number").value);
    clearInput();
    console.log(numberA);
}

function substract(){
    numberA -= parseInt(document.getElementById("input-number").value);
    clearInput();
    console.log(numberA);
}

function multiply(){
    numberA *= parseInt(document.getElementById("input-number").value);
    clearInput();
    console.log(numberA);
}

function divide(){
    numberA /= parseInt(document.getElementById("input-number").value);
    clearInput();
    console.log(numberA);
}

//SMILEY + RESET
function myFunction() {
    alert('HAVE A NICE DAY');
    document.getElementById("input-number").value = 0;
    document.getElementById("print-result").value = 0;
    operacion = "";
}