var nightNumber
const roomType = {
    standard = 100,
    juniorSuite = 120,
    suite = 150,
}
const ocType = {
    individual = -0.25,
    double = 0,
    triple = +0.25,
}

const spa = 20;

const parking = 10 * nightNumber;

var totalBase = roomType * nightNumber + spa;
var totalIncremento = totalBase + totalBase*ocType;
var totalReserva = totalIncremento + parking;