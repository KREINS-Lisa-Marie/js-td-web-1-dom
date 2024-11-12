// A. MODIFIER UN ÉLÉMENT EXISTANT

// 1. Le contenu HTML
/*
La propriété innerHTML
- peut être utilisée pour modifier le contenu HTML d'un élément du DOM ;
- est souvent utilisée pour "vider" un élément de tout son contenu
!! N.B. Limiter son usage (déconseillé pour plusieurs raisons), on verra des méthodes plus adaptées.
*/
/*
EXERCICE 1 :
1. Enregistrer l'ul d'id "langages" dans la variable ulElt et l'afficher
2. Ajouter un nouveau langage (C) à cette liste et la réafficher
	(Aide : on lui ajoute (opérateur+=) une entrée sous la forme d'une balise <li>)
3. Vider la liste de tout son contenu et la réafficher
*/

console.log("Solution 1 ---------------------- \n");

// Sélectionner l'élément ul d'id "langages"
const ulElt = document.getElementById('langages');

// Afficher l'élément dans la console
console.log(ulElt.innerHTML);


// Ajouter un nouveau langage à la liste
ulElt.innerHTML += '    <li>C</li>';

// Afficher la liste mise à jour dans la console
console.log(ulElt.innerHTML);


// Vider le contenu de la liste
// ulElt.innerHTML = ''; // Commenter sinon la liste est vide pour la suite des exercices

// Afficher la liste vide dans la console
console.log(ulElt.innerHTML);




// 2. Le contenu textuel
/*
La propriété textContent permet de modifier le contenu textuel d'un élément du DOM.
*/
/*
EXERCICE 2 :
Compléter le titre du document pour qu'il devienne
"Quelques langages de programmation" et le réafficher
*/

console.log("\n\nSolution 2 ---------------------- \n");

// Sélectionner l'élément h1 du titre
const titre = document.querySelector('h1');

// Modifier le contenu textuel du titre
titre.textContent = "Quelques langages de programmation";

// Afficher le titre mis à jour dans la console
console.log(titre.textContent);



// 3. Les attributs
/*
- La méthode setAttribute() permet de définir la valeur de l'un des attributs d'un élément.
  Elle prend en paramètres le nom et la valeur de cet attribut.
- On peut aussi modifier les attributs via la propriété qui les représente
*/
/*
EXERCICE 3 :
1. Stocker le premier titre du document dans une variable titreElt et l'afficher
2. Lui donner l'id "titre" et le réafficher
	- avec la méthode setAttribute()
	- via la propriété id de l'élément h1
*/

console.log("\n\nSolution 3 ---------------------- \n");

// 1. Stocker le premier titre du document dans une variable titreElt et l'afficher
const titreElt = document.querySelector('h1');
console.log(titreElt);

// 2. Lui donner l'id "titre" et le réafficher

// Avec la méthode setAttribute()
titreElt.setAttribute('id', 'titre');
console.log(titreElt);

// Via la propriété id de l'élément h1
titreElt.id = 'titre';
console.log(titreElt);




// 4. Les classes
/*
- On peut utiliser la propriété classList pour ajouter ou supprimer des classes à un élément du DOM.
- On emploie les méthodes add() (ajout) et remove() (suppression)
- Une autre méthode très intéressante est la méthode toggle(), qui change la présence d'une classe dans la liste :
	* si la classe existe, toggle() la supprime et retourne false, 
	* si la classe n'existe pas, toggle() l'ajoute et retourne true. 
*/
/*
EXERCICE 4 : 
- Accéder au premier titre h1 et le stocker dans la variable titreElt
- Lui retirer la classe "debut"
- Lui ajouter la classe "titre"
- L'afficher
*/

console.log("\n\nSolution 4 ---------------------- \n");

// Accéder au premier titre h1 et le stocker dans la variable titreElt
const titreElt2 = document.querySelector('h1');

// Lui retirer la classe "debut"
titreElt2.classList.remove('debut');

// Lui ajouter la classe "titre"
titreElt2.classList.add('titre');

// L'afficher
console.log(titreElt);




/*
EXERCICE 5 : 
- Accéder au premier li et le stocker dans la variable liElt
- S'il possède la classe "hide", la retirer, sinon, l'ajouter
- L'afficher
- Ajouter la classe "hide" manuellement dans le fichier HTML
- Retester le script
*/

console.log("\n\nSolution 5 ---------------------- \n");

// Accéder au premier li et le stocker dans la variable liElt
const liElt = document.querySelector('li');  // Sélection du premier <li>

// Vérifier si il possède la classe "hide" et basculer son état
if (liElt.classList.contains('hide')) {
    liElt.classList.remove('hide');  // Retirer la classe si elle existe
} else {
    liElt.classList.add('hide');  // Ajouter la classe si elle n'existe pas
}

// Afficher l'élément après la modification
console.log(liElt);  // Affiche l'élément <li> dans la console




/*********************************************************/

// B. AJOUTER UN NOUVEL ÉLÉMENT

/*
EXERCICE 6 : 
Ajouter le langage "ruby" à la liste des langages :
- 1. Créer un élément li et le stocker dans une variable rubyElt
- 2. Lui ajouter un id "python" et y inscrire le texte "Python"
- 3. L'ajouter dans l'ul d'id "langages"
- 4. Afficher le contenu HTML de l'ul
*/

console.log("\n\nSolution 6 ---------------------- \n");

// 1. Créer un élément li et le stocker dans une variable rubyElt
const rubyElt = document.createElement('li');  // Crée un nouvel élément <li>

// 2. Lui ajouter un id "python" et y inscrire le texte "Python"
rubyElt.id = 'python';  // Attribue un id à l'élément
rubyElt.textContent = 'Python';  // Ajoute le texte à l'élément

// 3. L'ajouter dans l'ul d'id "langages"
const ulElt2 = document.getElementById('langages');  // Récupère l'élément <ul>
ulElt2.appendChild(rubyElt);  // Ajoute le nouvel élément à la liste

// 4. Afficher le contenu HTML de l'ul
console.log(ulElt2.innerHTML);  // Affiche le contenu HTML de l'élément <ul>



/*
EXERCICE 7 : 
Ajouter le langage "JavaScript" au tout début de la liste des langages
dans une li d'id "javascript" avec la méthode insertAdjacentHTML()
puis afficher le contenu HTML de l'ul
*/

console.log("\n\nSolution 7 ---------------------- \n");

// Ajouter le langage "JavaScript" au tout début de la liste des langages
const ulElt3 = document.getElementById('langages');  // Récupère l'élément <ul>
ulElt3.insertAdjacentHTML('afterbegin', '<li id="javascript">JavaScript</li>');  // Insère l'élément <li> au début de la liste

// Afficher le contenu HTML de l'ul
console.log(ulElt3.innerHTML);  // Affiche le contenu HTML de l'élément <ul>




/*********************************************************/

// C. REMPLACER OU SUPPRIMER UN NOEUD

/*
EXERCICE 8 :
- Remplacer le langage C# par un nouvel élément correspondant au langage CSS
- Afficher le contenu HTML de la liste ainsi modifiée
*/

console.log("\n\nSolution 8 ---------------------- \n");

// Récupérer l'élément <li> avec l'id "csharp"
const csharpElt = document.getElementById('csharp');

// Remplacer son contenu par "CSS"
csharpElt.textContent = 'CSS';

// Afficher le contenu HTML de la liste mise à jour
const ulElt4 = document.getElementById('langages');
console.log(ulElt4.innerHTML);  // Affiche le contenu HTML de l'élément <ul>



/*
EXERCICE 9 :
- Supprimer l'élément correspondant au langage CSS que vous venez d'insérer
- Réaffichez la liste des langages
*/

console.log("\n\nSolution 9 ---------------------- \n");

// Récupérer la liste des <li> de la liste des langages
const langagesList = document.querySelectorAll('#langages li');

// Chercher l'élément "CSS" dans la liste
langagesList.forEach((li) => {
  if (li.textContent === 'CSS') {
    // Supprimer l'élément CSS de la liste
    li.remove();
  }
});

// Afficher le contenu HTML de la liste mise à jour
const ulElt5 = document.getElementById('langages');
console.log(ulElt5.innerHTML);  // Affiche le contenu HTML de l'élément <ul>


