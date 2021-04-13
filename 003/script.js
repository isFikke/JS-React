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

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function lastFilms() {
//     for (let i = 0; i < 2; i++ ) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
            
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }    
//     }
// }

// lastFilms();

// function personalLevel() {
//     if (personalMovieDB.count <= 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     }   else if (personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     }   else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман");
//     }   else {
//         console.log("Произошла ошибка");
//     } 
// }

// personalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     } 
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (i = 1; i <= 3; i++){
//         const e = prompt(`Ваш любимый жанр под номером ${i}`);
//     personalMovieDB.genres[i - 1] = e;
//     }         
// }

// writeYourGenres(numberOfFilms.genres);

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
               personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    lastFilms: function() {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
            
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }    
    },
    personalLevel: function() {
        if (personalMovieDB.count <= 10) {
            console.log("Просмотрено довольно мало фильмов");
        }   else if (personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        }   else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        }   else {
            console.log("Произошла ошибка");
        } 
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }   else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (i = 1; i <= 3; i++){
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genres === '' || genres == null) {
                console.log('Некоректные даннын');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }
            
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });              
    }   
};




// f = prompt('Один из последних просмотренных фильмов?', ''),
//           g = prompt('Один из последних просмотренных фильмов?', ''),


// const kek = "35435.554 вольно мало фильмов";

// console.log(parseInt(kek));
// console.log(kek.slice(21));
// console.log(kek.indexOf('мало'));

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// obj.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 4;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(newNumbers, add));

// const soldier = {
//     health: 350,
//     armor: 220
// };

// const josh = Object.create(soldier);

// console.log(josh.health);