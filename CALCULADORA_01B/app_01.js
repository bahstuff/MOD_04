//NUMERO A

//coger valor
var numberA;
var getnumberA = () => {
    numberA = document.getElementById("input-numberA").value;
    return numberA;
    // console.log(typeof numberA); //COMO ES STRING MODIFICAMOS A NUMBER EN LA SUMA
}

//imprimir valor
var printNumberA = () => {
    document.getElementById("printNumberA").innerText = getnumberA();
}
//sin emplear botón de submit
document.getElementById("input-numberA").addEventListener("keyup", printNumberA);


//NUMERO B
//coger valor
var numberB;
var getnumberB = () => {
    numberB = document.getElementById("input-numberB").value;
    return numberB;
}
// console.log(numberB);

//imprimir valor
var printNumberB = () => {
    document.getElementById("printNumberB").innerText = getnumberB();
}
//sin emplear botón de submit
document.getElementById("input-numberB").addEventListener("keyup", printNumberB);


//SUM
var printSignsum = () => document.getElementById("printSign").innerText = '+';

function sum() {
    document.getElementById("printResult").innerText = (parseInt(numberA, 10) + parseInt(numberB, 10));
    printSignsum();
    error();
}

//REST
var printSignsubstract = () => document.getElementById("printSign").innerText =  '-';

 function substract() {
    document.getElementById("printResult").innerText = (numberA - numberB);
    printSignsubstract();
    error();
}

//MULTIPLY
var printSignmultiply = () => document.getElementById("printSign").innerText = 'x';

function multiply() {
    document.getElementById("printResult").innerText = (numberA * numberB);
    printSignmultiply();
    error();
}

//DIVIDE
var printSigndivide = () => document.getElementById("printSign").innerText = '÷';
function divide() {
    document.getElementById("printResult").innerText = (numberA / numberB);
    printSigndivide();
    error();
}

// ERROR
function error() {
if (document.getElementById("input-numberA").value === ""){
    alert("ERROR: debe introducir un número en cada casilla.");
    document.getElementById("printResult").innerText = "ERROR"
    } else if (document.getElementById("input-numberB").value   === ""){
        alert("ERROR: debe introducir un número en cada casilla.");
        document.getElementById("printResult").innerText = "ERROR"
    }
}