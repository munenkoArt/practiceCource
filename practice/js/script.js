
"use strict";



let personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
   
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
   rememberMyFilms: function (){
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
    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмовв");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30){
            console.log("Вы киноман");
        }else{
           console.log("произошла ошибка");
        }
    },
    showMyDB: function (){
        if(personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === '' || genre == null){
                console.log('Вы не ввели данных');
                i--;
            }else{
                personalMovieDB.genres[i - 1] = genre;
            }
            // альтернативный вариант записать все данные через цикл i = 1; i < 2 !!!!!
            // получаем данные через запятую и розбиваем через сплит, сортируем

            // let genres = prompt(`Введите Ваши любимые жанри через запятую`).toLowercase();
            // if(genres === '' || genres == null){
            //     console.log('Вы не ввели данных');
            //     i--;
            // }else{
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`);

        });
    }

};

