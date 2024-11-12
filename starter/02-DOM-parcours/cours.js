// 02-DOM : PARCOUREZ LE DOM

/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501886-parcourez-le-dom
- https://github.com/oc-courses/javascript-web
*/

// A. SÉLECTIONNER DES ÉLÉMENTS

// 1. Les limites du parcours du DOM nœud par nœud
/*
EXERCICE 1 : sélectionner le titre "Merveilles du monde antique"
de notre page web en utilisant la propriété childNodes
(Aide : il s'agit du deuxième nœud enfant du sixième nœud enfant du nœud body)
*/

console.log("Solution 1 ---------------------- \n");

// Sélection du nœud body
const body = document.body;

// Accès au sixième nœud enfant de body
const sixthChild = body.childNodes[5];

// Accès au deuxième nœud enfant de sixthChild, qui est le titre "Merveilles du monde antique"
const titreAntique = sixthChild.childNodes[1];

// Affichage du résultat pour vérifier
console.log(titreAntique);


// 2. Sélection d'éléments selon leur balise
/*
EXERCICE 2 :
- Sélectionner le titre "Merveilles du monde antique" de notre page web
en utilisant la méthode getElementsByTagName()
(Aide : il s'agit du premier titre h2 du document)
- Afficher le nombre de titres h2 dans le document
*/

console.log("\n\nSolution 2 ---------------------- \n");

// Sélectionner tous les éléments <h2> dans le document
const titresH2 = document.getElementsByTagName("h2");

// Sélectionner le premier élément <h2>, qui est "Merveilles du monde antique"
const titreAntique2 = titresH2[0];
console.log(titreAntique2);

// Afficher le nombre de titres <h2> dans le document
console.log("Nombre de titres <h2> dans le document :", titresH2.length);




// 3. Sélection d'éléments selon leur classe
/* EXERCICE 3 :
- Sélectionner et afficher (à l'aide d'une boucle)
l'ensemble des éléments du document ayant pour classe "merveilles"
*/

console.log("\n\nSolution 3 ---------------------- \n");

// Sélection de tous les éléments ayant la classe "merveilles"
const elementsMerveilles = document.getElementsByClassName("merveilles");

for (let i = 0 ; i < elementsMerveilles.length ; i++) {
	console.log(elementsMerveilles[i]);
}



// 4. Sélection d'un élément selon son identifiant
/* EXERCICE 4 :
- Sélectionner et afficher l'élément du document portant l'identifiant "nouvelles"
*/

console.log("\n\nSolution 4 ---------------------- \n");

// Sélection de l'élément ayant l'identifiant "nouvelles"
const nouvellesMerveilles = document.getElementById("nouvelles");

// Afficher l'élément sélectionné dans la console
console.log(nouvellesMerveilles);



// 5. Chaînage de méthodes
/* EXERCICE 5 :
- Sélectionner et afficher, en enchaînant les méthodes getElementById() et getElementsByClassName(),
	le nombre d'enfants de l'élément d'id "antiques" ayant la classe "existe" 
- Afficher l'enfant en question
*/

console.log("\n\nSolution 5 ---------------------- \n");

// Affiche le nombre d'enfants de l'élément d'identifiant "antiques" ayant la classe "existe"
const antiquesExistes = document.getElementById("antiques").getElementsByClassName("existe");

// Affiche l'enfant de l'élément d'id "antiques" ayant la classe "existe"
console.log(antiquesExistes[0]);



// 6. Sélection d'éléments à partir d'un sélecteur CSS

// 6. a) La méthode querySelectorAll()
/*
La méthode querySelectorAll() permet de rechercher des éléments du DOM
en définissant un sélecteur identique à celui qu'on utiliserait dans une feuille de style CSS.
Elle renvoie la liste des éléments correspondant au sélecteur passé en paramètre.
*/

console.log("\n\nSolution 6 ---------------------- \n");

/* EXERCICE 6a : Sélectionner et afficher, grâce à la méthode querySelectorAll(),
- Le nombre de paragraphes du document
- Le premier paragraphe du document
- Le nombre de paragraphes à l'intérieur de l'élément d'id "contenu"
- Le 2e paragraphe à l'intérieur de l'élément d'id "contenu"
- Le nombre d'éléments ayant la classe "existe"
- Tous les éléments ayant la classe "existe" (à l'aide d'une boucle)
- Le nombre d'enfants de l'élément d'id "antiques" ayant la classe "existe"
*/

console.log("\n(A) --------- \n");

// Nombre de paragraphes
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
console.log("Nombre de paragraphes :", paragraphs.length);

// Le premier paragraphe
console.log(paragraphs[0]);

// Nombre de paragraphes à l'intérieur de l'élément d'id "contenu"
const paragraphsInContenu = document.querySelectorAll("#contenu p");
console.log("Nombre de paragraphes dans #contenu :", paragraphsInContenu.length);

// Le 2e paragraphe à l'intérieur de l'élément d'id "contenu"
console.log(paragraphsInContenu[1]);

// Nombre d'éléments ayant la classe "existe"
const exists = document.querySelectorAll(".existe");
console.log("Nombre d'éléments avec la classe 'existe' :", exists.length);

// Tous les éléments ayant la classe "existe"
console.log(exists);

// exists.forEach(
// 	(element, index) => {
//     	console.log(`Élément ${index + 1} avec la classe 'existe' :`, element);
// 	}
// );

// Nombre d'enfants de l'élément d'id "antiques" ayant la classe "existe"
const childrenWithClassExist = document.querySelectorAll("#antiques .existe");
console.log("Nombre d'enfants dans #antiques avec la classe 'existe' :", childrenWithClassExist.length);

// 6. b) La méthode querySelector()
/*
La méthode querySelector() fonctionne comme querySelectorAll(), mais elle renvoie uniquement le PREMIER élément correspondant au sélecteur passé en paramètre.﻿﻿
*/
/* EXERCICE 6b : Sélectionner et afficher, grâce à la méthode querySelector(),
- Le premier paragraphe du document
- Le premier (et seul) enfant de l'élément d'id "antiques" ayant la classe "existe"
*/

console.log("\n(B) --------- \n");

// Le premier paragraphe du document
const firstParagraphDoc = document.querySelector("p");
console.log("Premier paragraphe du document :", firstParagraphDoc);

// Le premier (et seul) enfant de l'élément d'id "antiques" ayant la classe "existe"
const firstExistInAntiques = document.querySelector("#antiques .existe");
console.log("Premier enfant avec la classe 'existe' dans #antiques :", firstExistInAntiques);


/***********************************************
 **********/

// B. OBTENIR DES INFORMATIONS SUR LES ÉLÉMENTS

// 1. Le contenu HTML
/*
La propriété innerHTML permet de récupérer tout le contenu HTML d'un élément du DOM. 
*/
/* EXERCICE 7 : Afficher dans la console
- Le contenu HTML de l'élément identifié par "contenu"
- Le contenu HTML de l'ul qui n'a pas la classe "merveilles"
*/

console.log("\n\nSolution 7 ---------------------- \n");

// Le contenu HTML de l'élément identifié par "contenu"
const contenu = document.getElementById("contenu");
//console.log(contenu.innerHTML);

// Le contenu HTML de l'ul qui n'a pas la classe "merveilles"
const ulSansMerveilles = document.querySelector("ul:not(.merveilles)");
console.log(ulSansMerveilles.innerHTML);

const ulSansMerveillesBis = document.querySelectorAll("ul:not(.merveilles)");
console.log(ulSansMerveillesBis[0].innerHTML);
ulSansMerveillesBis.forEach((element, index) => console.log(element));


// 2. Le contenu textuel
/*
La propriété textContent renvoie tout le contenu textuel d'un élément du DOM, sans le balisage HTML.﻿﻿ 
*/
/* EXERCICE 8 : Afficher dans la console
- Le contenu textuel de l'élément identifié par "contenu"
- Le libellé du lien qui pointe vers https://fr.wikipedia.org/wiki/Sept_merveilles_du_monde 
*/

console.log("\n\nSolution 8 ---------------------- \n");

// Sélectionner l'élément avec l'id "contenu"
const contenu2 = document.getElementById("contenu");

// Afficher son contenu textuel dans la console
console.log(contenu.textContent);


// Sélectionner le lien pointant vers l'URL spécifique
const lien = document.querySelector('a[href="https://fr.wikipedia.org/wiki/Sept_merveilles_du_monde"]');

// Afficher le contenu textuel du lien dans la console
console.log(lien.textContent);



// 3. Les attributs
/*
- La méthode getAttribute() peut être appliquée à un élément du DOM et renvoie la valeur de l'attribut passé en paramètre.﻿ ;
- Les attributs sont aussi directement accessibles sous la forme de propriétés ;
- On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute().
*/
/* EXERCICE 9 : Afficher dans la console
- L'attribut href du premier lien avec la méthode getAttribute()
- L'identifiant de la première liste (avec l'autre méthode)
- L'attribut href du premier lien (avec l'autre méthode)
- Vérifier, grâce à la méthode hasAttribute(), la présence de l'attribut target sur le premier lien du document 
*/

console.log("\n\nSolution 9 ---------------------- \n");

// Affiche l'attribut href du premier lien
// Sélectionner le premier lien
const premierLien = document.querySelector('a');

// Afficher l'attribut href du premier lien
console.log(premierLien.getAttribute('href'));


// Affiche l'identifiant de la première liste
// Sélectionner la première liste (ul)
const premiereListe = document.querySelector('ul');

// Afficher l'identifiant de la première liste
console.log(premiereListe.id);


// Affiche l'attribut href du premier lien
console.log(premierLien.href);


// Vérifier si le premier lien a l'attribut 'target'
const aTargetPresent = premierLien.hasAttribute('target');

// Afficher le résultat de la vérification
console.log(aTargetPresent);


// 4. Les classes
/*
- La propriéte classList (https://developer.mozilla.org/fr/docs/Web/API/Element/classList)
	* permet de récupérer la liste des classes d'un élément du DOM.
	* elle s'utilise comme un tableau.
- On peut aussi tester la présence d'une classe dans un élément en appelant la méthode contains() sur la liste des classes.﻿﻿﻿
*/
/* EXERCICE 10 : Afficher dans la console
- Le nombre de classes que possède l'élément d'id "antiques"
- La première classe que possède l'élément d'id "antiques"
- Le message "L'élément d'id antiques possède / ne possède pas la classe merveille" selon que c'est le cas ou pas
	(Aide : tester s'il possède bien cette classe grâce à la méthode contains())
*/

console.log("\n\nSolution 10 ---------------------- \n");

// Liste des classes de l'élément identifié par "antiques"
// Sélectionner l'élément d'id "antiques"
const antiquesElement = document.getElementById('antiques');

console.log(antiquesElement);


// Afficher le nombre de classes que possède l'élément
console.log(antiquesElement.classList.length);


// Affiche la première classe que possède l'élément d'id "antiques"
console.log(antiquesElement.classList[0]);


// Teste si l'élément d'id "antiques" possède la classe "merveille"
if (antiquesElement.classList.contains('merveille')) {
    console.log("L'élément d'id antiques possède la classe merveille");
} else {
    console.log("L'élément d'id antiques ne possède pas la classe merveille");
}


