
"use strict";

const namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: namberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

// const a = prompt('Один из последних просмотреных ильмов?', ''),
//       b = +prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотреных ильмов?', ''),
//       d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

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















if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмовв");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
}else if(personalMovieDB.count >= 30){
    console.log("Вы киноман");
}else{
    console.log("произошла ошибка");
}



console.log(personalMovieDB);


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


