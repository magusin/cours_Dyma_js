// SELECTIONNER

document.getElementById()
// permet de récupérer l'élément ayant l'id passé en argument. Vous pouvez également sélectionner l'élément directement en utilisant son id qui est une propriété globale sur l'objet window. A noter que cette dernière méthode est déconseillée, notamment à cause des risques de collision de noms.

document.getElementsByName()
// permet de récupérer une NodeList des éléments qui ont le nom passé en argument.

element.getElementsByClassName()
// permet de récupérer une HTMLCollection des éléments descendants ayant la classe passée en argument.

element.getElementsByTagName()
// permet de récupérer une HTMLCollection des éléments descendants correspondants à la balise passé en argument.

element.querySelector()
// retourne le premier élément sélectionné par le sélecteur.

element.querySelectorAll()
// retourne tous les éléments sélectionnés par le sélecteur passé en argument. Elle retourne une NodeList.

// MODIFIER STYLE ET CLASSES

// écrase classes
element.className = "nomclasse"

// element.classList.add(nom) permet d'ajouter la classe passée en argument sur l'élément.

// element.classList.remove(nom) permet de supprimer la classe passée en argument sur l'élément.

// element.classList.toggle(nom) permet d'ajouter la classe passée en argument si elle est absente, ou de la supprimer si elle est présente.

// element.classList.contains(nom) permet de savoir si la classe existe sur l'élément. La méthode retourne un booléen.

// La propriété classList retourne une collection itérable contenant le nom des classes présentes sur un élément. Vous pouvez donc lister facilement toutes les classes présentes sur un élément en faisant par exemple :

for (const classe of document.querySelector("p").classList) {
  console.log(classe);
}

const element = document.querySelector("p");
const proprietes = getComputedStyle(element);
console.log(proprietes.color); // rgb(0, 0, 255)

// CREER UN NOEUD TEXTE

// Pour créer un noeud texte il faut utiliser la méthode document.createTextNode(chaine) et lui passer la chaîne de caractères en argument.

document.createTextNode('Bienvenue à Gattaca');

// Créer un attribut Attr
// Pour créer un noeud d'attribut il faut utiliser la méthode document.createAttribute(nom).

// Vous pouvez directement créer un attribut sur un élément et définir sa valeur avec setAttribute() qui est donc à privilégier.

// POSITIONNER DES NOEUDS

// Insérer des noeuds
// Une fois que vous avez créé des noeuds, il faut les insérer quelque part sur le document.

// Il existe une liste de méthodes qui permettent le faire.
noeud.append()
//  permet d'insérer plusieurs noeuds ou une chaîne de caractères passé(s) en argument avant le début du contenu du noeud ciblé. Si vous passez une chaîne de caractères, un noeud Text sera inséré.
noeud.prepend()
//  permet d'insérer plusieurs noeuds ou une chaîne de caractères passé(s) en argument après la fin du contenu du noeud ciblé. Si vous passez une chaîne de caractères, un noeud Text sera inséré.
noeud.before()
//  permet d'insérer plusieurs noeuds ou une chaîne de caractères passé(s) en argument avant le noeud ciblé. Si vous passez une chaîne de caractères, un noeud Text sera inséré.
noeud.after()
//  permet d'insérer plusieurs noeuds ou une chaîne de caractères passé(s) en argument après le noeud ciblé. Si vous passez une chaîne de caractères, un noeud Text sera inséré.

// Insérer des noeuds contenant du HTML

// Pour insérer du HTML, il faut utiliser la méthode 
insertAdjacentHTML()

element.insertAdjacentHTML(position, html)

// Le premier argument est l'emplacement de l'insertion par rapport à l'élément ciblé. Les valeurs possibles sont beforebegin / afterbegin (avant le début de l'élément, dans l'élément mais avant son contenu) et beforeend / afterend (dans l'élément mais après le contenu, après l'élément).


// SUPPRIMER ET REMPLACER DES NOEUDS

// On peut remplacer le paragraphe par deux noeuds span facilement :
const elem = document.querySelector("p");
const span = document.createElement("span");
const span2 = document.createElement("span");
span.innerText = "Hello";
span2.innerText = " ça va ?";
elem.replaceWith(span, span2);

// Nous recommandons d'utiliser les méthodes présentées précédemment.

// Des méthodes comme replaceChild() et removeChild() sont moins concises et moins efficaces, il faut donc savoir qu'elles existent car vous pourrez les rencontrer mais ne pas les utiliser.

