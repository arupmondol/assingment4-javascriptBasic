// ---------------------------//
// problem-1 radianToDegree
// ----------------------------//

function radianToDegree(radian) {
  if (typeof radian !== 'number') {
    return 'Please enter a number'
  }
  let degree = radian * (180 / 3.1416);
  let degree1 = degree.toFixed(2)
  let degree2 =parseFloat(degree1)
  return degree2;

}
const totalRadien = radianToDegree(34)
console.log(totalRadien)

// ----------------------------------------------------//
// problem-2 isJavaScriptFile
// ----------------------------------------------------//

function isJavaScriptFile(string) {
  if (string.endsWith(".js")) {
    return true;

  }else{
    return 'Please enter correct name';
  }

}
 let fileName = isJavaScriptFile("file.js");
 console.log(fileName);

// -------------------------------------//
//  problem-3 oilPrice
// --------------------------------------//

function oilPrice(disel, petrol,octane) {
  if (typeof disel !== 'number' || typeof petrol !==  'number' || typeof octane !== 'number' ) {
    return 'Please enter the number'
  }
  const diselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;
  const totalDiselPrice = diselPrice * disel;
  const totalPetrolPrice = petrolPrice * petrol;
  const totalOctanePrice = octanePrice * octane;
  const totalPrice = totalDiselPrice + totalPetrolPrice + totalOctanePrice;
  return totalPrice;
}
const total = oilPrice(1, 1, 1);
console.log(total);

// ---------------------------------------//
// problem-4 publicBusFare
// ----------------------------------------//

function PublicBusFare(people) {
  if (typeof people !== 'number') {
    return 'Please enter the number of plople';
  }
  const busCapacity = 50;
  const microBusCapacity = 11;
  const remained = people % busCapacity;
  const rest = remained % microBusCapacity;
  const publicBuss =rest * 250;
  return publicBuss;

}
const totalPeople = PublicBusFare(65);
console.log(totalPeople);

// ----------------------------------//
// problem-5 isBestFriend
// ----------------------------------//

const item1 ={
  myName :'Tom', friend :'Rock'
}
const item2 ={
  myName :'Rock', friend :'Tom'
}
function isBestFriend(item1, item2) {
  if (typeof item1 !== 'object' || typeof item2 !== 'object') {
    return 'Please enter a object'
  }
  if (item1.myName == item2.friend && item1.friend == item2.myName) {
    return true ;

  }
  else{
    return false;
  }
  
}
 let friends = isBestFriend(item1, item2);
 console.log(friends);