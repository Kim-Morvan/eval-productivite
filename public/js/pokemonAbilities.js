/**
 * Retourne les données concernant l'abilité du pokémon sélectionnés aléatoirement à partir d'un api.
 *
 * @async
 * @function fetchPokemonAbilities
 * @param {Number} pokedexNum Retourne un numéro d'abilité par nombre aléatoire.
 * @param {String} foundAbilities Retourne une reponse de l'url avec le numéro d'abilité trouver.
 * @param {HTMLElement} pokeAbility Retourne une balise "p" qui permet d'afficher l'abilité du pokémon trouver.
 * @param {Object} jsonAbilities Retourne un objet avec toutes les données concernant l'abilité du pokémon trouver.
 * @param {String} abilityToDisplay Retourne le nom de l'abilité du pokémon trouver.
 * @return {Promise} Les données provenant de l'URL.
 */
export const fetchPokemonAbilities = async () => {
  const pokedexNum = Math.floor(Math.random() * 266);
  let foundAbilities = "";
  const pokeAbility = document.getElementById("pokeAbility");
  let jsonAbilities = {};
  let abilityToDisplay = "";

  try {
    foundAbilities = await fetch(
      `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundAbilities) {
    try {
      jsonAbilities = await foundAbilities.json();
      if (jsonAbilities.name !== "" && undefined !== jsonAbilities.name) {
        abilityToDisplay = `${String(jsonAbilities.name)
          .slice(0, 1)
          .toUpperCase()}${String(jsonAbilities.name)
          .slice(1, jsonAbilities.name.length)
          .toLowerCase()}`;
      } else {
        abilityToDisplay = "Tackle";
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonAbilities = "No ability found...";
  }

  if (pokeAbility.innerText !== "") {
    pokeAbility.innerText = "";
  }

  pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;  
};
