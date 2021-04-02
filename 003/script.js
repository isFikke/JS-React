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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
}   else if (personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
}   else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
}   else {
    console.log("Произошла ошибка")
}

console.log(personalMovieDB);

