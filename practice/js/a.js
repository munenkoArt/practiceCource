

// конкатенация чисел возведенных в квадрате переданих через аргумент в функции 
function squareDigits(num){
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
    let number;
    let arr = [];
    let integer;
    for(let i = 0; i < realDigits.length; i++){
      number = Math.pow(realDigits[i], 2);
      arr.push(number);
      integer = +arr.join('');
    }
    return integer;
  }
console.log(squareDigits(34567));

// ***********************************************
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}
console.log(squareDigits(3564));

// ************************************************
const squareDigits2 = (num) => parseInt(num.toString().split('').map((x) => x * x).join(''));

console.log(squareDigits2(54535));



function peopleWithAgeDrink(old) {
  if(old < 14){
    return console.log(old +' --> drink todd');
  }else if(old < 18 && old >= 14){
    return old + ' --> drink coke';
  }else if(old >= 18 && old < 21){
    return old + ' --> drink beer';
  }else{
    return console.log(`${old} --> drink whisky`);
  }
}
peopleWithAgeDrink(12);
// /*********************************************************** */
function preFizz(n) {
  let arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(i);
  }
  return arr;
}
console.log(preFizz(12));

// возвращаем масив реверс чисел 
function digitize(n) {
  //code here
  let arr2 = [];
  let arr = n.toString().split('').reverse();
  for(let i = 0; i < arr.length; i++){
    arr2.push(Number(arr[i]));
  }
  return arr2;
}
console.log(digitize(1234));


function digitize2(n) {
  return String(n).split('').map(Number).reverse();
}
console.log(digitize2(123));
// *******************************************************************

function updateLight(current) {
  let color;
  if(current === 'green'){
    color = 'yellow';
  }
  if(current === 'yellow'){
    color = 'red';
  }
  if(current === 'red'){
    color = 'green';
  }
  return color;
}
console.log(updateLight('red'));

function updateLight2(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}
console.log(updateLight2('red'));


function exponentRanging(num){
  let arr = [];
  for(let i = 0; i <= num; i++){
    arr.push(Math.pow(2, i));
  }
  return arr;
}
 exponentRanging(4);



 function dutyFree(normPrice, discount, hol){
   return Math.floor(hol / (normPrice *(0.01 * discount)));
}
console.log(dutyFree(12, 60, 1000));


function enough(cap, on, wait) {
  // your code here
  if((cap - on) >= wait){
    return 0;
  }else{
    return (on + wait) - cap; 
  }
}
console.log(enough(60, 60, 50));



function check(arr, x) {
  // your code here
  return arr.includes(x, 0);
}
check([1,2,3,4,5], 3);


function generateRange(min, max, step){

}