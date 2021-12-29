
const baseURL  = 'https://pokeapi.co/api/v2/pokemon/charmander'; 

let buttonElement = document.getElementById ('spirites');
let resultsElement =document.getElementById('results');

function displayspiritesData() {
  charmander = document.createElement('img');
  charmander.setAttribute("src", "img_charmander.jpg");

  buttonElement.appendChild(charmander);
}  

  function fetchPokemon (charmander) {
    let url = `${ baseURL }?charmander${charmander}`
    fetch (url)
    .then (response => response.json())
    .then (jsonData => {
      console.log(jsonData(sprites));
      let charmander =jsonData.sprites.front_default;
      displayspritesData(charmander);
    })
  }

  
