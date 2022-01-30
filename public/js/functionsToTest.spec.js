import { returnAnObject, multiplyAllByTwo } from "./functionsToTest.js";

describe("La fonction returnAnObject...", () => {
  test("devrait retourer un objet avec des arguments que je prédéfini", () => {
    expect(returnAnObject({ prenom: "Kim", nom: "Morvan", age: 32 })).toEqual({
      0: { prenom: "Kim", nom: "Morvan", age: 32 },
    });
  });

  test("devrait retourer une reponse si l'objet est vide", () => {
    expect(returnAnObject()).toBe("No argument was given to the function.");
  });
});

describe("La fonction multiplyAllByTwo :", () => {
  test("- doit retourner 100 et 200 quand on lui donne 50 et 100'", () => {
    expect(multiplyAllByTwo([50, 100])).toEqual([100, 200]);
  });

  test("- doit retourner un string si un arument dans la réponse n'est pas un number", () => {
    expect(multiplyAllByTwo(50, "100")).toBe(
      "The argument is not an Array of numbers"
    );
  });
});
