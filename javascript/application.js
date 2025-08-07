import Mustache from "mustachejs";
import { createApp } from "vue";

// console.log("hello from application.js")


const url = "https://www.omdbapi.com/?s=fast and furious&apikey=adf1f2d7"


const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");



// Vanilla JS


// select an element
// fetch
// fetch(url)
// .then(response => response.json())
// .then((data) => {
//     // change the dom
//     // console.log(data.Search);
//     data.Search.forEach((movie) =>{
//       const movieCard = `<div class='col-6'>
//         <div class="card">
//           <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
//           <div class="card-body">
//             <h4 class="card-title">${movie.Title}</h4>
//             <p class="card-text">${movie.Year}</p>
//             <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//           </div>
//         </div>
//       </div>`

//       // console.log(movieCard);
//       results.insertAdjacentHTML("beforeend", movieCard);
      
//     });
//   });

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data)
//     // do something with the data
//   })




// JS with Templates
// console.log(template);

// console.log(clone);

// fetch(url)
// .then(response => response.json())
// .then((data) => {
//   // change the dom
//   console.log(data.Search);
//   data.Search.forEach((movie) =>{
//     const clone = template.content.cloneNode(true)
//     clone.querySelector(".card-title").innerText = movie.Title;
//     clone.querySelector(".card-text").innerText = movie.Year;
//     clone.querySelector(".card-img-top").src = movie.Poster;
//     clone.querySelector(".card-img-top").alt = movie.Title;
//     clone.querySelector("a.btn-primary").href += movie.imdbID;
//     console.log(clone);
//     results.appendChild(clone);
//   });
// });




// Moustache JS

// const testTemplate = "<h4>{{subTitle}}</h4>";

// const data = {
//   subTitle: "Hello Kaleb!"
// }

// const rendered = Mustache.render(testTemplate, data);

// console.log(rendered);
const template = document.querySelector("#movieCardTemplate").innerHTML;
// console.log(template);


// fetch(url)
// .then(response => response.json())
// .then((data) => {
//   // change the dom
//   console.log(data.Search);
//   data.Search.forEach((movie) => {
//     // console.log(movie);
//     const output = Mustache.render(template, movie);
//     // console.log(output);
//     results.insertAdjacentHTML("beforeend", output);
//   });
// });

fetch(url)
.then(response => response.json())
.then((data) => {
  // change the dom
  // const fruits = {
  //   "fruits": [
  //     { "name": "apple", "price": 3 },
  //     { "name": "pear", "price": 2 },
  //     { "name": "banana", "price": 5 }
  //   ]
  // }
  const movieData = {
    "movies": data.Search
  }

  console.log(data.Search);
  const output = Mustache.render(template, movieData);
  results.innerHTML = output;
  // results.insertAdjacentHTML("afterbegin", output);
});



// Vue JS

// createApp({
//   data() {
//     return {
//       message: "Hello batch 2058!"
//     }
//   }
// }).mount("#results")
