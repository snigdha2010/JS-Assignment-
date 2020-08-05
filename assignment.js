//convert feet to mile
//5280 feet = 1 mile
function feetToMile(n) {
  var feet = 5280;
  var result = n / feet;
  return result;
}
var mileValue1 = feetToMile(52840);
console.log(mileValue1);

//WoodCalculator.
//1 chair 1 cubic feet wood
// 1 table 3 cubic feet wood
// 1 bed 5 cubic feet wood
function woodCalculator(chair, table, bed) {
  var chairWood = chair * 1;
  var tableWood = table * 3;
  var bedWood = bed * 5;
  var totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

var setWood1 = woodCalculator(3, 4, 5);
console.log(setWood1);

//brickCalculator
//first 10 floor 15 feet height
//11-20 floor 12 feet height
//20> floor 10 feet height
//1 feet = 1000 brick

function brickCalculator(n) {
  var feet = 0;
  for (var i = 1; i <= n; i++) {
    if (i <= 10) {
      feet += 15;
    } else if (i <= 20) {
      feet += 12;
    } else if (i > 20) {
      feet += 10;
    }
  }
  var totalBrick = feet * 1000;
  return totalBrick;
}
var result = brickCalculator(21);
console.log(result);

//tinyFriend
// short name length

function tinyFriend(arr) {
  var tiny = arr[0];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (tiny.length > element.length) {
      tiny = element;
    }
  }
  return tiny;
}
var friends = ["Mila", "Rinjhuma", "Leela"];
var result = tinyFriend(friends);
console.log(result);
