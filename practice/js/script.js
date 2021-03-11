
"use strict";

let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотреных ильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done!!!');
        }else{
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмовв");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    }else{
        console.log("произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

// функция колбек ********************************
function learnJs(lang, callback){
    console.log(`я учу: ${lang}`);
    callback();
}

function done(){
    console.log('я прошел этот урок!!');
}

learnJs('Java script', done);

function homework(sub, callback){
    console.log(`what do you wont from ${sub}`);
    callback();
}

homework('me', function(){
    console.log('i em a superman');
});


// использование функции обертки при условии что нам нужно передать функцию с аргументами как аргумент в другую функцию 

function first(params, callback){
    console.log('hello world!!' + `${params}`);
    callback();
}

function second222(a, b){
    console.log(a + b);
}


first(`it is serghii!!! love you `, function(){// использование функции обертки 
    // для передачи параметров без мгновенного визова колбек функции
    second222(3,6);
}); 
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
// };
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

// let i = 0;

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

// (num === 3) ? console.log('ok!!') : console.log('not ok');

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
// }


// let num = 50;

// // while(num < 55){
// //     console.log(num);
// //     num++;
// // }


// do{
//     console.log(num);
//     num++;
// }
// while(num<55);


