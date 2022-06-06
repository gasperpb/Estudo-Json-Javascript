const starWars = () =>{
    const fetch = require ('node-fetch')
    const url =`https://swapi.dev/api/people/1/` 
        fetch(url)
        .then(response => response.json())
        .then(star => {console.log(star)})
    }
starWars();