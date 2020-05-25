
import  data  from './data/pokemon/pokemon.js';

let pokemons = data.pokemon
let pokes = document.querySelector('#pokes')
let popUp =  document.querySelectorAll('#modalCard')

pokemons.forEach(pokemonData=>{
  let pikachu = document.createElement('pikachu')
  pikachu.classList.add("pokeCard")
  pikachu.innerHTML = `
    <img src=${pokemonData.img} />
    <p>${pokemonData.name}</p>
    <p>${pokemonData.id}</p>
`
  pokes.appendChild(pikachu)

  function onPokemonClick(e){
    let modal = document.getElementById('modalCard')
    modal.innerHTML = `
    <p>${'Nombre: ' + pokemonData.name}</p>
    <p>${'Tipo: ' + pokemonData.type}</p>
    <p>${'Debilidades: ' + pokemonData.weaknesses}</p>
    <p>${'Altura: ' + pokemonData.height}</p>
    <p>${'Peso: ' + pokemonData.weight}</p>
    <img src=${pokemonData.img} />
    `
    modalCard.onclick = function(){
      modal.style.display = "block";

				body.style.position = "static";
				body.style.height = "100%";
				body.style.overflow = "hidden";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
      }
    }
    pokes.appendChild(modalCard)
  }
  pikachu.addEventListener('click', onPokemonClick)
})



let nombre = pokemons.filter(pokemons => pokemons.name === 'Nidorina');
  console.log(nombre);
 
