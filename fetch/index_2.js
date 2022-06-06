
//import fetch from 'node-fetch';


// const starWars = () =>{
    
//     const url =`https://swapi.dev/api/people/1/` 
//         fetch(url)
//         .then(response => {return response.json()} ) 
        
//         .then(star => {
//             document.querySelector("#app").innerHTML = star.mane;
//             console.log(star)
//         })
//     }
// starWars();

fetch("https://swapi.dev/api/people/1/")
  .then(r => r.json())
  .then(jsonBody => {
    const pref="name"
    document.querySelector("#app").innerHTML = jsonBody.films[0];
    console.log(jsonBody);
  });