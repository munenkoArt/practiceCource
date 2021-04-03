 // // функция колбек ******************************** -->
// function learnJs(lang, callback){
//      console.log(`я учу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('я прошел этот урок!!');
// }

// learnJs('Java script', done);

// function homework(sub, callback){
//     console.log(`what do you wont from ${sub}`);
//     callback();
// }

// homework('me', function(){
//     console.log('i em a superman');
// });


// // использование функции обертки при условии что нам нужно передать функцию с аргументами как 
// аргумент в другую функцию  -->

// function first(params, callback){
//     console.log('hello world!!' + `${params}`);
//      callback();
// }

// function second222(a, b){
//     console.log(a + b);
// }


// first(`it is serghii!!! love you `, function(){// использование функции обертки 
//     // для передачи параметров без мгновенного визова колбек функции -->
//     second222(3,6);
// }); 
// если передать в аргумент функцию колбек с аргументом сразу в скобках  
// то порядок выполнения  будет сбит и колбек выполнится сразу не дожидаясь  выполнения основной ф=и

// let counter = 0;
// //  визначаємо лічильник для того щоб перерахувати кількість властивостей в обєкті

// const obj = {
//     name: 'ivan',
//     surname: 'popov',
//     height: '190',
//     weight: 90,
//     arr:{
//         test: 'gggg',
//         practice:'ccccv'
//     }
// }; -->
// // console.log(Object.keys(obj).length);

// const {test, practice} = obj.arr;
// console.log(practice);

// for(let key in obj){
//     if(typeof obj[key] === 'object'){
//         for(let i in obj[key]){
//             console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
//             counter++;
//             // збільшуємо на 1
//         }
    
//     }else{
//             console.log(`Свойство ${key} имеет значение ${obj[key]}`);
//             counter++;
//     }
// }

// let i = 0; -->

 // do{
//     const a = prompt('Один из последних просмотреных ильмов?', ''),
//           b = +prompt('На сколько оцените его?', '');
//         i++;
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done!!!');
//     }else{
//         console.log('error');
//         i--;
//     } 
// }
// while(i < 2);
// if(4 == 5){
//     console.log('ok!!');
// }
// else{
//     console.log('not ok!!');
// }

// (num === 3) ? console.log('ok!!') : console.log('not ok'); -->

 // let num = 5;

// switch(num){
//     case 4:
//         console.log('not ok');
//         break;
//     case 6:
//         console.log('ok');
//         break; 
//     default:
//         console.log('heeet');
//         break;       
// } -->


// let num = 50;

// // while(num < 55){
// //     console.log(num);
// //     num++;
// // }


// do{
//     console.log(num);
//     num++;
// } -->
// while(num<55); -->

// let options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     }
// };


// let {border, bg} = options.colors;
// console.log(border);
// console.log(bg);



// for(let i = 1; i <= 50; i++ ){
//     console.log(i);
// }

// let i = 1;
// while(i<= 50){
//     console.log(i);
//     i++;
// }

// let item = 1;
// do{
//     console.log(item);
//     item++;
// }
// while(item <= 50);

// let arr = [1,2,3,4,5];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let arr2 = [2,3,4,5];
// let result = 1;
// for(let i = 0; i < arr2.length; i++){
//     result = result * arr2[i];
//     console.log(result);
// }
// console.log(result);


// let obj ={
//     Минск: "Беларусь",
//     Москва: "россия",
//     Киев: "Украина",
// };

// for(let key in obj){
//     console.log(`${key} - это ${obj[key]}`);
// }
// let i = 1;
// // while(i <= 100 ){
// //     console.log(i);
// //     i++;
// // }
// let n = 0;
// for (let i = 0; i < 100; i++){          //сумма чисел от 1 до 100
//      n = n + (i + 1);
     
// }
// console.log(n);


// let result = 0;
// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//    result = result + arr[i];
// }
// console.log(result);


// let obj = {
//     red: 'червоний',
//     green: 'зелений',
//     blue: 'синій',
// };

// for(let key in obj){
//     console.log(`${key}` + " - " + `${obj[key]}`);
// }



let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
};
console.log(personalMovieDB);


let a = prompt('Один из последних просмотреных фильмов?', '');
let b = +prompt('На сколько оцените его?', '');
let d = prompt('Один из последних просмотреных фильмов?', '');
let c = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[d] = c;
console.log(personalMovieDB);