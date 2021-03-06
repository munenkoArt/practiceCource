
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


