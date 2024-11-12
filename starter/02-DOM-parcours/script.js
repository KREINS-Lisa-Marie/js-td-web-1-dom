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

/* 
    Utiliser childNodes peut être délicat car cette méthode retourne tous les nœuds enfants, y compris les nœuds de texte 
    (comme les espaces et les retours à la ligne), ce qui peut rendre les sélections sensibles aux modifications du HTML.
*/



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

// Afficher le titre pour vérifier la sélection
console.log(titreAntique2);

// Afficher le nombre de titres <h2> dans le document
console.log("Nombre de titres <h2> dans le document :", titresH2.length);

/*
    Explications :
        document.getElementsByTagName("h2") : 
            Cette méthode renvoie une HTMLCollection contenant tous les éléments <h2> du document.

        titresH2[0] : 
            Comme getElementsByTagName renvoie une collection, nous utilisons l’indice [0] pour sélectionner le premier 
            titre <h2>, qui correspond au texte "Merveilles du monde antique".

        titresH2.length : 
            Cette propriété retourne le nombre total de titres <h2> présents dans le document.
*/



// 3. Sélection d'éléments selon leur classe
/* EXERCICE 3 :
- Sélectionner et afficher (à l'aide d'une boucle)
l'ensemble des éléments du document ayant pour classe "merveilles"
*/

console.log("\n\nSolution 3 ---------------------- \n");

// Sélection de tous les éléments ayant la classe "merveilles"
const elementsMerveilles = document.getElementsByClassName("merveilles");

// Boucle pour afficher chaque élément ayant la classe "merveilles"
for (let i = 0; i < elementsMerveilles.length; i++) {
    console.log(elementsMerveilles[i]);
}

/*
    Explications :
        document.getElementsByClassName("merveilles") : 
            Cette méthode sélectionne tous les éléments ayant la classe "merveilles" 
            et retourne une HTMLCollection contenant ces éléments.

        Boucle for : 
            Nous parcourons chaque élément de la collection elementsMerveilles avec une boucle, et nous l'affichons 
            dans la console en utilisant console.log(elementsMerveilles[i]);.
*/



// 4. Sélection d'un élément selon son identifiant
/* EXERCICE 4 :
- Sélectionner et afficher l'élément du document portant l'identifiant "nouvelles"
*/

console.log("\n\nSolution 4 ---------------------- \n");

// Sélection de l'élément ayant l'identifiant "nouvelles"
const nouvellesMerveilles = document.getElementById("nouvelles");

// Afficher l'élément sélectionné dans la console
console.log(nouvellesMerveilles);

/* 
    Explications
        document.getElementById("nouvelles") : 
            Cette méthode sélectionne l'élément du document ayant l'identifiant "nouvelles" et le retourne en tant qu'élément 
            unique (car les identifiants doivent être uniques dans un document HTML).

        console.log(nouvellesMerveilles); : 
            Affiche cet élément dans la console pour vérifier la sélection.

*/



// 5. Chaînage de méthodes
/* EXERCICE 5 :
- Sélectionner et afficher, en enchaînant les méthodes getElementById() et getElementsByClassName(),
	le nombre d'enfants de l'élément d'id "antiques" ayant la classe "existe" 
- Afficher l'enfant en question
*/

console.log("\n\nSolution 5 ---------------------- \n");

// Sélectionner l'élément avec l'id "antiques", puis sélectionner les éléments avec la classe "existe"
const antiquesExistes = document.getElementById("antiques").getElementsByClassName("existe");

// Afficher le nombre d'enfants ayant la classe "existe"
console.log("Nombre d'enfants avec la classe 'existe' :", antiquesExistes.length);

// Afficher chaque enfant ayant la classe "existe"
for (let i = 0; i < antiquesExistes.length; i++) {
    console.log(antiquesExistes[i]);
}




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
console.log("Nombre de paragraphes :", paragraphs.length);

// Le premier paragraphe
const firstParagraph = paragraphs[0];
console.log("Premier paragraphe :", firstParagraph);

// Nombre de paragraphes à l'intérieur de l'élément d'id "contenu"
const paragraphsInContenu = document.querySelectorAll("#contenu p");
console.log("Nombre de paragraphes dans #contenu :", paragraphsInContenu.length);

// Le 2e paragraphe à l'intérieur de l'élément d'id "contenu"
const secondParagraphInContenu = paragraphsInContenu[1];
console.log("Deuxième paragraphe dans #contenu :", secondParagraphInContenu);

// Nombre d'éléments ayant la classe "existe"
const exists = document.querySelectorAll(".existe");
console.log("Nombre d'éléments avec la classe 'existe' :", exists.length);

// Tous les éléments ayant la classe "existe" (avec boucle)
exists.forEach((element, index) => {
    console.log(`Élément ${index + 1} avec la classe 'existe' :`, element);
});

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

/* 
    En résumé, utilise querySelector() lorsque tu as besoin du premier élément qui correspond à un sélecteur 
    et querySelectorAll() lorsque tu as besoin de tous les éléments correspondants.
*/



/*********************************************************/
console.log("\n\n*********************************************************\n");

// B. OBTENIR DES INFORMATIONS SUR LES ÉLÉMENTS

// 1. Le contenu HTML
/*
La propriété innerHTML permet de récupérer tout le contenu HTML d'un élément du DOM. 
*/
/* EXERCICE 7 : Afficher dans la console
- Le contenu HTML de l'élément identifié par "contenu"
- Le contenu HTML de l'ul qui n'a pas la classe "merveilles"
*/

console.log("\n\nSolution 1 ---------------------- \n");

// Sélectionner l'élément avec l'id "contenu"
const contenu = document.getElementById("contenu");

// Afficher son contenu HTML dans la console
console.log(contenu.innerHTML);


// Sélectionner l'élément <ul> qui n'a pas la classe "merveilles"
const ulSansMerveilles = document.querySelector("ul:not(.merveilles)");

// Afficher son contenu HTML dans la console
console.log(ulSansMerveilles.innerHTML);

/*
    Explication :
        innerHTML : 
            Cette propriété permet de récupérer ou de définir le contenu HTML d'un élément. 
            Cela inclut tout le HTML interne (balises et texte) à l'intérieur de l'élément sélectionné.

        querySelector("ul:not(.merveilles)") : 
            Ce sélecteur CSS utilise :not() pour sélectionner les éléments ul qui ne possèdent pas la classe "merveilles". 
            Cela te permet de récupérer uniquement l'élément ul qui n'a pas cette classe.
*/



// 2. Le contenu textuel
/*
La propriété textContent renvoie tout le contenu textuel d'un élément du DOM, sans le balisage HTML.﻿﻿ 
*/
/* EXERCICE 8 : Afficher dans la console
- Le contenu textuel de l'élément identifié par "contenu"
- Le libellé du lien qui pointe vers https://fr.wikipedia.org/wiki/Sept_merveilles_du_monde 
*/

console.log("\n\nSolution 2 ---------------------- \n");

// Sélectionner l'élément avec l'id "contenu"
const contenu2 = document.getElementById("contenu");

// Afficher son contenu textuel dans la console
console.log(contenu.textContent);


// Sélectionner le lien pointant vers l'URL spécifique
const lien = document.querySelector('a[href="https://fr.wikipedia.org/wiki/Sept_merveilles_du_monde"]');

// Afficher le contenu textuel du lien dans la console
console.log(lien.textContent);

/*
    Explication :
        textContent : 
            Cette propriété récupère tout le texte dans l'élément et ses enfants, mais sans les balises HTML.

        querySelector('a[href="URL"]') : 
            Ce sélecteur permet de cibler un lien <a> ayant l'attribut href égal à l'URL fournie.
*/



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

console.log("\n\nSolution 3 ---------------------- \n");

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


/* 
    Explication des méthodes utilisées :

        getAttribute('attribut') : 
            Cette méthode permet d'obtenir la valeur d'un attribut spécifique d'un élément du DOM.

        Propriétés d'attributs (par exemple id, href) : 
            Ces propriétés permettent d'accéder directement à certaines valeurs d'attributs sans avoir besoin de getAttribute().

        hasAttribute('attribut') : 
            Cette méthode permet de vérifier si un élément possède un attribut spécifique.
*/




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

console.log("\n\nSolution 4 ---------------------- \n");

// Liste des classes de l'élément identifié par "antiques"
// Sélectionner l'élément d'id "antiques"
const antiquesElement = document.getElementById('antiques');

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

/* 
    Explication des méthodes utilisées :
        classList : 
            Cette propriété retourne une collection des classes CSS de l'élément sous forme d'objet de type DOMTokenList. 
            Elle te permet d'ajouter, de supprimer ou de manipuler les classes.

        length : 
            La propriété length de classList te donne le nombre de classes présentes sur l'élément.

        [0] : 
            Cela permet d'accéder à la première classe de la liste.``

        contains('class') : 
            Cette méthode permet de vérifier si l'élément possède une classe spécifique. 
            Elle renvoie true si l'élément a cette classe, sinon false.
*/