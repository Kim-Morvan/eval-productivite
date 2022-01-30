import { fetchPokemonAbilities } from "./pokemonAbilities.js";
import { fetchPokemon } from "./pokemons.js";

export const pokeP = document.getElementById("pokeInfo");
export const pokeAbilityBtn = document.getElementById("ability");

window.addEventListener("DOMContentLoaded", () => {
  const pokeDiv = document.getElementById("pokemon-info");

  fetchPokemonAbilities;
  fetchPokemon;
  /**
   * Une fois invoquer lorsque l'utilisateur click sur un bouton, cette fonction permet d'afficher le nom du pokémon sur la page.
   *
   * @function invoquePokemon
   */
  const invoquePokemon = () => {
    /** @type {HTMLElement} */
    const pokeBtn = document.getElementById("pokemon");
    pokeBtn.addEventListener("click", fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };
  /**
   * Une fois invoquer lorsque l'utilisateur click sur un bouton, cette fonction permet d'afficher l'abilité du pokémon sur la page.
   *
   * @function pokemonAbility
   */
  const pokemonAbility = () => {
    /** @type {HTMLElement} */
    pokeAbilityBtn.addEventListener("click", fetchPokemonAbilities);
    pokeDiv.appendChild(pokeAbility);
  };

  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});
