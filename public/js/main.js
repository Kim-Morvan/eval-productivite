import { fetchPokemonAbilities } from "./pokemonAbilities.js"
import { fetchPokemon } from "./pokemons.js"

export const pokeP = document.getElementById("pokeInfo")
export const pokeAbilityBtn = document.getElementById("ability")

window.addEventListener("DOMContentLoaded", () => {
  const pokeDiv = document.getElementById("pokemon-info")

  fetchPokemonAbilities
  fetchPokemon

  const invoquePokemon = () => {
    const pokeBtn = document.getElementById("pokemon")
    pokeBtn.addEventListener("click", fetchPokemon)
    pokeDiv.appendChild(pokeP)
  }

  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener("click", fetchPokemonAbilities)
    pokeDiv.appendChild(pokeAbility)
  }

  ;(function startAll() {
    invoquePokemon()
    pokemonAbility()
  })()
})
