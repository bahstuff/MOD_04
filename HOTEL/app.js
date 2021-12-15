//NUMERO DE NOCHES HOTEL
let nightNumber;
var getnightNumber = () => {
    nightNumber = parseInt(document.getElementById("nights").value);
    return nightNumber;
}
document.getElementById("nights").addEventListener("keyup",getnightNumber)


// //TIPO DE HABITACION
let roomType;
var getroomType = () => {
    roomType = parseInt(document.getElementById("roomtype").value);
    return roomType;
}
document.getElementById("roomtype").addEventListener("change",getroomType)

//OCUPACION DE HABITACION
let roomOcc;
var roomOccupance = () => {
    roomOcc = document.getElementById("roomocupance").value;
    return roomOcc;
}
document.getElementById("roomocupance").addEventListener("change",roomOccupance)

//OPCION SPA
let spa = 0;
function spaService() {
    var spaService = document.getElementById('spaServ');
    if(spaService.checked){
        spa = 20;
        alert("Has seleccionado el servicio de SPA")
    } else {
        spa = 0;
    }
    return spa
}

//NUMERO NOCHES PARKING
let parkingNights;
var getparkingPrice = () => {
    parkingNights = parseInt(document.getElementById("parking").value)* 10;
    return parkingNights;
}
document.getElementById("parking").addEventListener("keyup",getparkingPrice)


//CALCULO TOTAL
function calculate() {
    let totalBase = roomType * nightNumber + spa;
    let totalIncremento = eval(totalBase + totalBase * roomOcc);
    let totalReserva = totalIncremento + parkingNights;
    document.getElementById("totalPrice").value = totalReserva + " €";
}
    


