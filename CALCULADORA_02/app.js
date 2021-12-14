var numeroA = 0;
var numeroB = 0;
var operador; 
var getNewNumber;

//SMILEY
var myFunction = () => alert('HAVE A NICE DAY');

//LIMPIAR INPUT
var clearInput = () => document.getElementById("input-number").value = "";

////////////////////////////////////////////////////////////////////////////

//PRIMER NUMERO
function getsingleNumber() {
    var singleNumber = document.getElementById("input-number").value;
    return singleNumber;
}

function  printResult(){
    document.getElementById("print-result").value = getsingleNumber();
    clearInput();
}
document.getElementById("button-equal").addEventListener("click", printResult);

//AL HACER CLICK IMPRIME RESULTADO Y VACÍA INPUT



//OPERACION INICIAL


function calculate(operador){
    var operando1= document.getElementById("print-result").value;
    var operando2 = document.getElementById("input-number").value;
    var result = (operando1 + operador + operando2) ;
    console.log(eval(result));
    document.getElementById("print-result").value = eval(result);
}

//CLICK BOTON =
function totalResult() {
    document.getElementById("button-equal").value = result;
}
// document.getElementById("button-equal").addEventListener("click", totalResult)