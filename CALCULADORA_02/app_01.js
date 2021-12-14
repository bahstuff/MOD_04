var numberA = 0;
var numberB = 0;
var operador = ""; 

//OPERACIONES
// function calculate(operador){
//     var result = eval(numberB + operador + numberA)
//     document.getElementById("print-result").value= result;
// }


//suma
function sum(numberA,numberB) {
    var numberA = parseInt(document.getElementById("input-number").value);
    var numberB = parseInt(document.getElementById("print-result").value);
    var result = numberB += numberA;
    document.getElementById("print-result").value = result;
    clearInput();
}
function substract(numberA,numberB) {
    var numberA = parseInt(document.getElementById("input-number").value);
    var numberB = parseInt(document.getElementById("print-result").value);
    var result = numberB -= numberA;
    document.getElementById("print-result").value = result;
    clearInput();
}
function multiply(numberA,numberB) {
    var numberA = parseInt(document.getElementById("input-number").value);
    var numberB = parseInt(document.getElementById("print-result").value);
    var result = numberB *= numberA;
   console.log(result);
    clearInput();
}
//SMILEY + RESET
function myFunction() {
    alert('HAVE A NICE DAY');
    document.getElementById("input-number").value = 0;
    document.getElementById("print-result").value = 0;
    operacion = "";
}

//LIMPIAR INPUT
var clearInput = () => document.getElementById("input-number").value = "";


//CLICK BOTON =
function equalButton() {
    clearInput();
    document.getElementById("print-result").value = result;
}
