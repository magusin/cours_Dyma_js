/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// declaration
var name = 'jean';
console.log(_typeof(name));
var roues = 4;
var vehiculeType;

switch (roues) {
  case 2:
    vehiculeType = 'moto';
    break;

  case 4:
  case "4":
    {
      vehiculeType = "voiture";
      break;
    }

  default:
    vehiculeType = "camion";
    break;
}

for (var _i = 0; _i < 4;) {
  console.log(_i);
  _i++;
}

var texte = "";

for (var _i2 = 0; _i2 < 3; _i2++) {
  if (_i2 === 1) {
    continue;
  }

  texte += _i2;
}

console.log(texte); // 02

var i = 0;

while (i < 3) {
  i++;
  console.log(i); // 1, 2, 3
}

var j = 0;

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

12312 .toExponential(); // "1.2312e+4"

12312 .toExponential(2); // "1.23e+4"

var a = 100000000;
a.toExponential(); // "1e+8"

1.23e2.toFixed(2); // 123

42.658486.toFixed(1); // 42.7

42 .toFixed(1); // 42.0

1.23e2.toPrecision(1); // 1e+2

423 .toPrecision(2); // 4.2e+2

423 .toPrecision(3); // 423

1.23456.toPrecision(3); // 1.23

Math.E; // Nombre d’Euler

Math.LN2; // Logarithme népérien de 2

Math.LN10; // Logarithme népérien de 10

Math.PI; // Pi

Math.SQRT2; // Racine carrée de 2
// Par exemple pour obtenir un entier entre 0 et 9 on peut faire :

Math.floor(Math.random() * 10); // Pour obtenir un nombre dans l'intervalle souhaité avec min incluse et max exclue on peut faire :
// Math.random() * (max - min) + min;

var fatigue = true;
var action = 'dormir';
var etatDeFatigue = "Jean est ".concat(fatigue ? "fatigu\xE9 et veut ".concat(action, " !") : "en pleine forme !");
console.log(etatDeFatigue); // Jean est fatigué et veut dormir !"

var monObjet = {};
monObjet.propriete1 = 42;
monObjet.propriete2 = "Koala";
console.log(monObjet); // {propriete1: 42, propriete2: "Koala"}

var personne = {
  nom: 'Jean',
  famille: {
    pere: {
      prenom: 'Bob',
      nom: 'Dylan'
    }
  }
};
var pere = personne.famille.pere;
console.log(pere); // Object { nom: 'Dylan',  prenom: 'Bob' }
// console.log(famille); // undefined

var monObj = {
  a: 1
};
monObj.hasOwnProperty("a"); // true
// Supprimer ou écarter des propriétés

var terre = {
  population: 7e7,
  satellite: 'Lune',
  temperature: {
    min: -70,
    max: 60
  },
  isOld: false
};
terre.satellite = null; // garde la valeur nul

delete terre.satellite; // enlève la propriété

var population = terre.population,
    copyTerre = _objectWithoutProperties(terre, ["population"]); // récupère Terre sans population


console.log(terre); // Fusionner des objets

var terre1 = {
  population: 7e7,
  satellite: "Lune"
};
var terre2 = {
  temperature: {
    min: -70,
    max: 60
  },
  isOld: false
}; // méthode 1

var terres = _objectSpread(_objectSpread({}, terre1), terre2); // méthode 2
// Object.assign(objetCible, objetACopier1, objetACopier2, etc);
// Comparer des objets


var Oa = {};
var Ob = {};
console.log(Oa === Ob); // false, pas même adresse dans la heap
// les objets sont comparer par référence, pour mettre deux objets identique mais nommé différement passer par un troisième objets
// ex: const c = Oa;
// Itérer sur des objets

var obj = {
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

var objA = {
  name: 'tot',
  foo: {
    bar: 'zoo'
  }
}; // shallow
// const objB = Object.assign({}, objA); // méthode 1
// const objBbis = { ...a}; // méthode 2
// deep 

var objB = JSON.parse(JSON.stringify(objA));
console.log(objB);
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map