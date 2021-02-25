
"use strict";

const namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: namberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt('Один из последних просмотреных ильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных ильмов?', ''),
      d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);