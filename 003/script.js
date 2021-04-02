// "use strict";
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 20;
// console.log(obj);

// && и
// || или


// let incr =  10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(++incr);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose);
// console.log(isChecked || isClose);

// console.log(2 * 2 + 2 * 2 === 8);
// console.log(2 * 2 + 2 * 2 !== 8);
// console.log(2 * 2 + 2 * 2 != 8);

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function lastFilms() {
    for (let i = 0; i < 2; i++ ) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
            
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }    
    }
}

lastFilms();

function personalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    }   else if (personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    }   else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    }   else {
        console.log("Произошла ошибка");
    } 
}

personalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (i = 1; i <= 3; i++){
        const e = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = e;
    }         
}

writeYourGenres(numberOfFilms.genres);

// f = prompt('Один из последних просмотренных фильмов?', ''),
//           g = prompt('Один из последних просмотренных фильмов?', ''),


// const kek = "35435.554 вольно мало фильмов";

// console.log(parseInt(kek));
// console.log(kek.slice(21));
// console.log(kek.indexOf('мало'));