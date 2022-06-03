

// declaration
const name = 'jean';

console.log(typeof name);

const roues = 4;
let vehiculeType;

switch (roues) {
    case 2 : 
    vehiculeType = 'moto';
    break;
    case 4 : 
    case "4" : {
        vehiculeType = "voiture";
        break;
    }
    default : 
    vehiculeType = "camion";
    break;
}

for (let i = 0; i < 4;) {
    console.log(i);
    i++;
}

let texte = "";
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    continue;
  }
  texte += i;
}
console.log(texte); // 02

let i = 0;
while (i < 3) {
  i++;
  console.log(i); // 1, 2, 3
}

let j = 0;
do {
  j++;
  console.log(j);
} while (j < 10); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// do permet de rentrer au moin une fois dans le while

console.log(Number.isSafeInteger(9007199254740991)); // true;

console.log(1e6);

parseFloat(" 32.21frefz"); // 32.21
parseFloat("   0.152e57  "); // 1.52e+56
parseFloat(".1"); // 0.1
parseFloat("a1"); // NaN
// 2 et 10 donne le format
parseInt(" 32.21frefz", 10); // 32
parseInt("10101", 2); // 21

// Number.parseFloat()
// Number.parseInt()
// Number.isFinite()	
// Number.isInteger()	
// Number.isNaN()	
// Number.isSafeInteger()	

(12312).toExponential(); // "1.2312e+4"
(12312).toExponential(2); // "1.23e+4"
const a = 100000000;
a.toExponential(); // "1e+8"

(1.23e2).toFixed(2); // 123
(42.658486).toFixed(1); // 42.7
(42).toFixed(1); // 42.0

(1.23e2).toPrecision(1); // 1e+2
(423).toPrecision(2);  // 4.2e+2
(423).toPrecision(3); // 423
(1.23456).toPrecision(3); // 1.23

Math.E; // Nombre d’Euler
Math.LN2; // Logarithme népérien de 2
Math.LN10; // Logarithme népérien de 10
Math.PI; // Pi
Math.SQRT2; // Racine carrée de 2

// Par exemple pour obtenir un entier entre 0 et 9 on peut faire :

Math.floor(Math.random() * 10);

// Pour obtenir un nombre dans l'intervalle souhaité avec min incluse et max exclue on peut faire :

// Math.random() * (max - min) + min;

const fatigue = true;
const action = 'dormir';
const etatDeFatigue =   `Jean est ${fatigue ? `fatigué et veut ${action} !` : `en pleine forme !`}`;
console.log(etatDeFatigue); // Jean est fatigué et veut dormir !"

const monObjet = {};
monObjet.propriete1 = 42;
monObjet.propriete2 = "Koala";

console.log(monObjet); // {propriete1: 42, propriete2: "Koala"}

const personne = {
  nom: 'Jean',
  famille: {
    pere: {
      prenom: 'Bob',
      nom: 'Dylan',
    }
  }
};

const { famille: { pere } } = personne;
console.log(pere); // Object { nom: 'Dylan',  prenom: 'Bob' }
// console.log(famille); // undefined

const monObj = {a: 1};
monObj.hasOwnProperty("a"); // true

// Supprimer ou écarter des propriétés
const terre = {
  population: 7e7,
  satellite: 'Lune',
  temperature: {
    min: -70,
    max: 60
  },
  isOld: false
}
terre.satellite = null; // garde la valeur nul
delete terre.satellite; // enlève la propriété
const { population, ...copyTerre } = terre; // récupère Terre sans population
console.log(terre);

// Fusionner des objets

const terre1 = {
  population: 7e7,
  satellite: "Lune"
};

const terre2 = {
temperature: {
  min: -70,
  max: 60
},
isOld: false
};
// méthode 1
const terres = { ... terre1, ... terre2 };
// méthode 2
// Object.assign(objetCible, objetACopier1, objetACopier2, etc);

// Comparer des objets

const Oa = {};
const Ob = {};

console.log(Oa === Ob); // false, pas même adresse dans la heap
// les objets sont comparer par référence, pour mettre deux objets identique mais nommé différement passer par un troisième objets
// ex: const c = Oa;

// Itérer sur des objets

const obj = {
  a: "un",
  b: "deux",
  c: "trois"
};

for (prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
}

console.log(Object.keys(obj)); // retourne un tableau avec les propriétés
console.log(Object.values(obj)); // retourne les valeurs dans un tableau
console.log(Object.entries(obj)); // retourne dans un tableau les valeurs et les clefs

// Le format Json

// le format XML n'est plus d'actualité maintenant le format Json est adapté
// Json = Javascript Notation Object

// console.log(JSON.stringify(obj)); retourne une chaine de caractère
// console.log(JSON.parse) analyser du format JSON pour reconstreuire un objet Javascript

// Copier un objet

const objA = {
  name: 'tot',
  foo: {
    bar: 'zoo'
  }
}
// shallow
// const objB = Object.assign({}, objA); // méthode 1
// const objBbis = { ...a}; // méthode 2

// deep 
const objB = JSON.parse(JSON.stringify(objA));
console.log(objB);

var i2 =50; i2 %=2;
console.log(i2);

