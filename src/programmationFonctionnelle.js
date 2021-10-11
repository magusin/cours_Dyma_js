// Programmation fonctionnelle

const arr = ['UN', 'DEUX', 'TROIS'];

// La méthode map() crée et retourne un nouveau tableau avec les résultats de l'appel d'une fonction de rappel utilisée sur chaque élément du tableau.
const tableau = [1, 2, 3];
const tableau2 = tableau.map(el => el ** el);
console.log(tableau2); // [1, 4, 27]

// La méthode filter() crée et retourne un nouveau tableau contenant les éléments qui passent le test de la fonction de rappel.
const tableau3 = [
    { prix: 42 },
    { prix: 2 },
    { prix: 12 },
    { prix: 50 },
    { },
    { prix: undefined },
    { prix: NaN },
    { prix: null }
  ];
  const tableau4 = tableau3.filter(el => el.prix > 10);
  console.log(tableau4); // [{prix: 42}, {prix: 12}, {prix: 50}]

  