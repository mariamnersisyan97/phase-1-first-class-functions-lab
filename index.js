const drivers =  ['Antonia', 'Nuru', 'Amari', 'Mo']
const firstTwo = drivers.slice(0,2);
const lastTwo = drivers.slice(-2);
function returnFirstTwoDrivers() {
    return firstTwo; 
}
function returnLastTwoDrivers() {
     return lastTwo;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(num) {
//     return function(){return num * 5};
// }
const createFareMultiplier = (num) =>{
    return function(fare) {return num * fare}
};
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const arrayOfDrivers = [firstTwo, lastTwo];
function selectDifferentDrivers(arrayOfDrivers, x) {
    return x(arrayOfDrivers);

}