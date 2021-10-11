// LES FONCTIONS

// Les expressions de fonction et leur déclaration
// déclaration de fonction
function func () {
    console.log("func exec");
}

// invoquer fonction
func();

// expression de fonction
const fn = function func2() {
console.log('func2 exec')
}

fn();

// Paramètres, arguments et paramètres par défault
// par défault les paramètres des fonctions sont undefined
function test(param1) {
    console.log(param1);
  }
  
  test(); // undefined

  // déclarer une valeur à un paramètre
  function test(param1, param2 = 42) {
    console.log(param1, param2);
  }
  
  test(); // undefined 42

  // deuxième méthode pour simplement vérifier que le paramètre n'est pas false
  function test3(param1, param2) {
    param2 = param2 || 42;
  }

// Objet arguments et utilisation de l'opérateur Rest (...)

function additionner(...nombres) {
    let resultat = 0;
    for (let i = 0; i < nombres.length; i++) {
      resultat += nombres[i];
    }
    console.log(resultat);
  }
  
  additionner(42, 22, 12, 23); // 99



// Valeur de retour des fonctions
// Pour définir la valeur retournée par une fonction, il faut utiliser le mot clé return :

function additionner1(a, b) {
    return a + b;
  }
  
  const total = additionner1(42, 1); // 43

// Chaine de portée

let foo = 2;
function a() {
  console.log(foo);
}

function b() {
  let foo = 1;
  a();
}

b(); // 2
// environnementLexicalGlobal = {
//   foo: 2
//   a: <référence à la fonction a>
//   b: <référence à la fonction b>
//   environnementParent: <null>
// }

let foo2 = 2;
function b() {
  let foo2 = 1;
  function a() {
    console.log(foo2);
  }
  a();
}
b(); // 1

// Namespace et IIFE

// pas en javascript mais équivalent avec les fonctions déifni leur propre namespace, appelé namespace artificiel, après apparition de webpack plus besoin de namespace

// IIFE est une fonction anonyme 
(function () { 
  var a = "Paul";
})();
a; // ReferenceError

// Le mot clé This

// this est un mot clé JavaScript permettant d'accéder à l'objet représentant le contexte d'exécution.
// lorsqu'on passe une fonction en paramètre d'une autre fonction on ne passe pas l'objet, seulement la fonction.
// le mode strict en js est un mode un peu plus contraignant sur la syntaxte,  le mode strict a un impact sur le mode this.

"use strict";

a = 17; // ReferenceError 
// En mode normal une var est déclarée automatiquement.

undefined = 42; //  Cannot assign to read only property.
// En mode normal pas d’erreur, mais pas d’affectation.

delete Object.prototype; // Cannot delete property 'prototype'
// En mode normal pas d’erreur, mais pas de suppression.

function somme(a, a, b) { // Duplicate parameter name not allowed
}
// En mode normal pas d’erreur, a aura la valeur du second argument

false.true = ""; // TypeError: Cannot create property
// En mode normal, pas d’erreur. Simplement ignoré

// Définir ou lier this 

// méthode .call(), .apply(), .bind()
// Il suffit d'utiliser call() ou apply() et de passer en premier argument la valeur de this.

"use strict"

const personne = { name: 'Jean Dupont' };

function formuleSalutation(formule) {
  return this.name + formule;
}

formuleSalutation(' vous salue'); // TypeError: Cannot read property 'name' of undefined
formuleSalutation.call(personne, ' vous salue');  // => 'Jean Dupont vous salue'

// La méthode bind() permet de créer un clone d'une fonction en liant définitivement la valeur de this à l'argument passé en premier paramètre.

 function multiplier(nombre) {
  return this * nombre;
}

const doubler = multiplier.bind(2); // définir this comme étant la valeur 2
console.log(doubler(4));  //  8 

// les fonctions fléchées

// La syntaxe des fonctions fléchées
// Les fonctions fléchées sont des fonctions anonymes (sans nom) qui ont une syntaxe plus concise :

(param1, param2) => {
  // instruction 1;
  // instruction 2;
} 
// Lorsque qu'il n'y a qu'un seul paramètre, il est possible d'enlever les parenthèses l'entourant :

param1 => {
  // instruction 1;
  // instruction 2;
  return valeur;
} 

// Les fonctions de rappel (callback)

// Twitter.get('/tweets', params, (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// });

// Les fermetures (closures)

