// Organisation d'un tableau

const { EvalSourceMapDevToolPlugin } = require("webpack");

// Un tableau est une liste ordonné d'éléments.
const tab = ["a", "b", "c"];
// accéder à un élément dans le tableau
tab["1"]; // b
// modifier élément
tab[0] = 42;
console.log(tab); // [42, "b", "c"]

// accéder au dernier élément d'un tableau
tab[tab.lenght -1]; // "c"

// itérer sur les éléments d'un tableau
for (let i = 0; i < tab.lenght; i++) {
    console.log(tab[i]);
}

// réinit un tableau sans modifier sa référence
tab.lenght = 0;
// le tableau conserve sa réf et on peut ajouter un élément
tab[0] = 1;
console.log(tab);

// imbriquer des tableaux

const tabl = [[1, 2], [3,4]];
tabl[0]; // [1, 2]
tabl[0][1]; // 2
tabl[1][1]; // 4

// affectation par décomposition

const table = [1, 2, 3, 4];
const [a, b] = table;
console.log(b); // 2

// Sauter un ou plusieurs éléments lors de l'affectation

const [, , a, b];
console.log(a); // 3
console.log(b); // 4

const tablea = [1];
const [a = 0, b = 2] = tablea;
console.log(a); // 1
console.log(b); // 2



let arr = [1, 2 ,3]
// ajoute un élément à la fin du tableau
arr.push(4,5);
arr = [...arr, 6];
arr = [-2, ...arr];
// splice 1er param; ou commence, deuxième supprime, troisième ajoute
arr.splice(1, 0, -1.5);

console.log(arr);

// La méthode push()
// La méthode push est la méthode que vous utiliserez le plus pour ajouter un ou plusieurs éléments à la fin d'un tableau :
// La méthode unshift()
// La méthode unshift() permet d'ajouter un ou plusieurs éléments au début d'un tableau.
// L'opérateur spread
// Vous pouvez aussi utiliser l'opérateur spread … et une déclaration littérale pour créer un nouveau tableau, avec une nouvelle référence et ajouter un ou plusieurs éléments :
// La méthode splice()
// La méthode splice() permet de modifier le contenu d'un tableau


// Supprimer des éléments dans un tableau

const tableau1 = [1, 2, 3];
tableau1.shift();
console.log(tableau1); // [2, 3]

const tableau2 = [1, 2, 3];
tableau2.pop();
console.log(tableau2); // [1, 2]

const tableau3 = [1, 2, 3];
const enlevés = tableau3.splice(-2, 1);
console.log(tableau3); // [1, 3]
console.log(enlevés); // [2]

const tableau4 = [1, 2, 3, 4];
const [, , ...copie] = tableau4;
console.log(copie); // [3, 4]

// Trouver des éléments dans un tableau
// si élément pas dans le tableau indexOf retourne -1
const tableau5 = [1, 42, 42, 3];
tableau5.indexOf(42); // 1
tableau5.indexOf(5); // -1
// rechercher tout les index d'un élément
const indexes = [];
let index = tableau5.indexOf(42);
while (index !== -1) {
  indexes.push(index);
  index = tableau5.indexOf(42, index + 1);
}
console.log(indexes); // [1, 2]

// Trouver la dernière position d'un élément avec lastIndexOf()
tableau5.lastIndexOf(42); // 2
tableau5.lastIndexOf(5); // -1

// Vérifier la présence d'un élément dans un tableau avec includes()
tableau5.includes(42); // true
tableau5.includes(5); // false

// Rechercher le premier élément qui vérifie une condition avec find()
const sup = tableau5.find(el => el > 10);
console.log(sup); // 42

// La méthode findIndex() renvoie l'index du premier élément trouvé dans le tableau qui vérifie la condition testée par une fonction.
const sup = tableau5.findIndex(el => el > 10);
console.log(sup); // 1

// Copier un tableau

const newArr = [1, 2, 3];
const newCopy = newArr;

// avec spread
const newCopy2 = [... newArr];

// avec splice
// La méthode peut prendre facultativement en premier paramètre un index de début et en second un index de fin exclus.
const tableau6 = [1, 2, 3];
const tableau6b = tableau6.slice();
const tableau6c = tableau6.slice(1, 2);
console.log(tableau6b); // [1, 2, 3]
console.log(tableau6c); // [2]

// copier un tableau en profondeur
const tableau7 = [[1,2], {a: 1}];
const tableau7b = JSON.parse(JSON.stringify(tableau7));

tableau7b[0].push(42);
tableau7b[1].a = 2;

console.log(tableau7); // [[1,2], {a: 1}]

// Fusionner les tableaux
const tabA = [1, 2, 3];
const tabB = [4, 5, 6];

// méthode concate
const tabC = tabA.concat(tabB);
console.log(tabC);

// avec spread
const tabD = [...tabA, ...tabB];

// Trier un tableau
// La méthode sort() permet de trier les éléments d'un tableau en utilisant facultativement une fonction de rappel.
const tableau8 = ['z', 'b', 'k', 'y', 'c'];
tableau8.sort();
console.log(tableau8); // ["b", "c", "k", "y", "z"]

// La méthode localeCompare() permet justement de renvoyer un nombre indiquant si une chaîne de caractères est avant ou après une autre chaîne de caractère passée en premier argument.
const tableau9 = ['Château', 'élève', 'Baron', 'antre', 'étage', 'espiègle'];
tableau9.sort((a, b) => a.localeCompare(b, 'fr'));
console.log(tableau9); // ["antre", "Baron", "Château", "élève", "espiègle", "étage"]

// Trier des tableaux avec une fonction de comparaison personnalisée
const tableau10 = [{prix: 42}, {prix: 21}, {prix: 1}];
tableau10.sort((a, b) => a.prix - b.prix);
console.log(tableau10); // [{prix: 1}, {prix: 21}, {prix: 42}];

// Inverser les éléments d'un tableau avec la méthode reverse()
const tableau11 = [1, 'chaise', 2, 'tabouret'];
tableau11.reverse();
console.log(tableau11); // ["tabouret", 2, "chaise", 1]

// Itérer un tableau
// for (const valeur of tableau) {
//     console.log(valeur);
//   }

// D'autre méthode de programmation fonctionnelle 

// La méthode reduce()
// la méthode reduce est urilisée le plus souvent pour réduire une liste à une seule valeur.

// En fait elle va parcourir le plus souvent pour réduire une liste à une seule valeur

const lastEx = [1, 2, 3, 4];
const total = lastEx.reduce((acc, curr)) => acc + curr;
console.log(total); // 10







