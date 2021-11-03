// 1.	צרו פונקצית פרומיס שממירה את ה JSON  לאובייקט ומחזירה את הערך של success, במידה והוא true.
// אם המערך ריק היא מחזירה אובייקט של שגיאה.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את התוצאה.

const movieJSON = JSON.stringify({
  success: true,
  data: [
    {
      _id: "606d7d2c110a540674caa27a",
      movieName: "spider-man",
      rating: 3,
      date: "2021-04-07T09:36:44.053Z",
      __v: 0,
    },
    {
      _id: "607828bcd9def60015535fcc",
      movieName: "Snow-White",
      rating: 3,
      date: "2021-04-15T11:51:24.833Z",
      __v: 0,
    },
    {
      _id: "60815daa6b305d8dcd07c674",
      movieName: "Bratz",
      rating: 6,
      date: "2021-04-22T11:27:38.067Z",
      __v: 0,
    },
    {
      _id: "6122459bdbf6109484b6d2eb",
      movieName: "Fast-and-Furious",
      rating: 4,
      date: "2021-08-22T12:39:55.115Z",
      __v: 0,
    },
    {
      _id: "612245fcbb593194fcda74d0",
      movieName: "The-sleeping-beauty",
      rating: 5,
      date: "2021-08-22T12:41:32.969Z",
      __v: 0,
    },
  ],
});

// function FunPromise() {
//   let movies = JSON.parse(movieJSON);
//   return new Promise((resolve, reject) => {
//     movies.success ? resolve(movies.success) : reject(false);
//   });
// }
// async function functionAsy() {
//   try {
//     return await FunPromise();
//   } catch (err) {
//     return err;
//   }
// }
// functionAsy()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// 2.	צרו פונקצית פרומיס שממירה את ה JSON  לאובייקט ומחזירה מערך של סרטים,
//  במידה והמערך מלא,
//  אם המערך ריק היא מחזירה אובייקט של שגיאה.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את המערך.

// function promiseFunction() {
//   let moviesObject = JSON.parse(movieJSON);
//   return new Promise((resolve, reject) => {
//     moviesObject.data.length > 0
//       ? resolve(moviesObject.data)
//       : reject({ massage: "array is empty" });
//   });
// }
// async function asynceFunction() {
//   try {
//     return await promiseFunction();
//   } catch (err) {
//     return err;
//   }
// }
// asynceFunction()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// 3.	צרו פונקצית פרומיס שמקבלת שם סרט, הפונקציה ממירה את ה JSON
//   לאובייקט ומחזירה  את האובייקט סרט המתאים, במידה והסרט קיים.
// אם הסרט לא קיים, היא מחזירה אובייקט של שגיאה, שמודיע שהסרט לא קיים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את הסרט.

// function getMoviesByName() {
//   let nameOfMovie = prompt("name of movie");
//   let ObjectMovies = JSON.parse(movieJSON);
//   return new Promise((resolve, reject) => {
//     for (const movie of ObjectMovies.data) {
//       if (movie.movieName == nameOfMovie) {
//         resolve(movie);
//       }
//     }
//     reject({ massage: "error" });
//   });
// }
// async function MovieExistsOrNo() {
//   try {
//     return await getMoviesByName();
//   } catch (err) {
//     return err;
//   }
// }
// MovieExistsOrNo()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// 4.	צרו פונקצית פרומיס שמקבלת id של סרט,
//  הפונקציה ממירה את ה JSON  למערך ומחזירה את האובייקט סרט המתאים, במידה והסרט קיים.
// אם הסרט לא קיים, היא מחזירה אובייקט של שגיאה, שמודיע שהסרט לא קיים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את הסרט.

// function getMoviesById() {
//     return new Promise((resolve,reject)=>{
// let idOfTheMovie=prompt("id of movie");
// let ObjectMovies = JSON.parse(movieJSON);
// for (const idMovie of ObjectMovies.data) {
//     if(idMovie._id==idOfTheMovie){
//         resolve(idMovie)
//     }
// }
// reject({massage: "is not Exists"})
//     })
// }
// async function GetIdOfMovie() {
//     try{
//         return await getMoviesById()
//     }
//     catch(error){
//         return error
//     }
// }
// GetIdOfMovie().then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

// =================================================================5
// 5.	צרו פונקצית פרומיס שמחזירה מערך של סרטים שהרייטינג שלהם גבוה ממספר שמתקבל מבחוץ
// , במידה וישנם סרטים. 
// אם אין סרטים, היא מחזירה אובייקט של שגיאה, שמודיע שאין סרטים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את הסרט.
// function promiseMoreRating() {
//     return new Promise((resolve,reject)=>{
//       btnNum.onclick=()=>{
//        let num =inputNum.value
// let arrayMovie=[]
// let ObjectMovies = JSON.parse(movieJSON);
// for (const movie of ObjectMovies.data) {
//     if(movie.rating>num){
//         arrayMovie.push(movie)
//        resolve(arrayMovie) 
//     }
// }
// reject({massage:"now rating"}) 
//       }
//     })
// }
// async function getMoreRating() {
//     try{
//         return await promiseMoreRating()
//     }
//     catch(error){
//         return error
//     }
// }
// getMoreRating().then((res)=>{divNum.innerHTML+=`  
// id : ${res._id} <br>
// rating : ${res.rating} <br>
// date : ${res.date} <br>
// v : ${res.__v} <br>
// `})
// .catch((rej)=>{console.log(divNum.innerHTML+=rej.massage);})

// =================================================================6
// 6.	צרו טופס שמאפשר למשתמש לבצע חיפוש על פי פרמטרים, כלומר,
//  תצוגה שמפעילה את הפונקציות למעלה ומציגה למסך את התוצאות.
// movie.oninput=()=>{
//     let ObjectMovies = JSON.parse(movieJSON);
//   for (const objMovie of ObjectMovies.data) {
//   if(movie.value==objMovie.movieName){
// div.innerHTML+=`<h3>${movie.value}:</h3>  
// id : ${objMovie._id} <br>
// rating : ${objMovie.rating} <br>
// date : ${objMovie.date} <br>
// v : ${objMovie.__v} <br>
// `
// console.log(objMovie);
//   }
// }  
// }


// =================================================================7
// 7.	הוסיפו setTimeout לפונקציות, וגיף טעינה של סרטים.

// =================================================================

