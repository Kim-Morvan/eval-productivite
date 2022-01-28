import { pokeP, pokeAbilityBtn } from "./main.js"
/**
 *Cette fonction permet de récupérer des information sur les pokemons à partir d'un api puis l'affiche dans le navigateur
 * @async
 * @param {Number} pokedexNum Quantité de pokemons nombre aléatoire
 * @param {String} foundPokemon Nom du pokemon trouvé
 * @param {String} jsonPokemon
 * @param {Object} pokeInfo Affiche les informations concernant le pokemon
 */
// eslint-disable-next-line import/prefer-default-export
export const fetchPokemon = async () => {
  /** @type {String} Résultat de la recherche */
  const pokedexNum = Math.floor(Math.random() * 897)
  let foundPokemon = ""
  let jsonPokemon = ""
  const pokeInfo = {}

  try {
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error(error.message)
  }

  if (foundPokemon) {
    try {
      jsonPokemon = await foundPokemon.json()
      pokeInfo.name = `${String(jsonPokemon.species.name)
        .slice(0, 1)
        .toUpperCase()}${String(jsonPokemon.species.name)
        .slice(1, jsonPokemon.species.name.length)
        .toLowerCase()}`
    } catch (error) {
      console.error(error.message)
    }
  } else {
    jsonPokemon = "No Pokémon found..."
  }

  if (pokeP.innerText !== "") {
    pokeP.innerText = ""
  }
  pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`
  pokeAbilityBtn.removeAttribute("disabled")
}
