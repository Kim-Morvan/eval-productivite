import { pokeP, pokeAbilityBtn } from "./main.js";
/** 
 * @file Ce projet permet de faire appel à l'API pokemon permettant d'affiche un nom et une abilitée 
 * 
 * @version 0.1
 * @author VirtuoWorks
 * @copyright 2022
 */
/**
 * Retourne les données concernant les pokemons sélectionnés aléatoirement à partir d'un api.
 *
 * @async
 * @function fetchPokemon
 * @param {Number} pokedexNum Retourne un numéro de pokédex par nombre aléatoire.
 * @param {String} foundPokemon Retourne une reponse de l'url avec le numéro de pokémon trouver.
 * @param {String} jsonPokemon Retourne un objet avec toutes les données concernant le pokémon trouver.
 * @param {Object} pokeInfo Retourne le nom du pokémon trouver.
 * @return {Promise} Les données provenant de l'URL.
 */
export const fetchPokemon = async () => {
  const pokedexNum = Math.floor(Math.random() * 897);
  let foundPokemon = "";
  let jsonPokemon = "";
  const pokeInfo = {};
  try {
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error.message);
  }
  if (foundPokemon) {
    try {
      jsonPokemon = await foundPokemon.json();
      pokeInfo.name = `${String(jsonPokemon.species.name)
        .slice(0, 1)
        .toUpperCase()}${String(jsonPokemon.species.name)
        .slice(1, jsonPokemon.species.name.length)
        .toLowerCase()}`;
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonPokemon = "No Pokémon found...";
  }
  if (pokeP.innerText !== "") {
    pokeP.innerText = "";
  }
  pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
  pokeAbilityBtn.removeAttribute("disabled");
};
