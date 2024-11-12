// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501891-modifiez-la-structure-de-la-page
- https://github.com/oc-courses/javascript-web
*/

/* EXERCICE RÉCAPITULATIF : 
Vous disposez d'un document HTML contenant juste un body
et un titre "Mes jeux". Écrire le code JS qui
- place dans un objet "mesJeux" les 3 jeux suivants avec leur catégorie
	* League of Legends	: jeu de stratégie/action
	* World of Warcraft : MMORPG (jeu de rôle en ligne massivement multijoueur)
	* Call of Duty - Modern Warfare : FPS (jeu de tir)
	* Fifa 2020 : jeu de simulation
- parcourt le tableau avec une boucle pour récupérer ces infos
  et afficher dans le HTML, au chargement de la page, une liste
  d'id "jeux" créée dynamiquement qui reprend les jeux suivis de
  leur catégorie entre parenthèses  
  */

// Création d'un tableau contenant les jeux et leurs catégories de manière structurée
const mesJeuxBase = {
  "League of Legends": "jeu de stratégie/action",
  "World of Warcraft": "MMORPG (jeu de rôle en ligne massivement multijoueur)",
  "Call of Duty - Modern Warfare": "FPS (jeu de tir)",
  "Fifa 2020": "jeu de simulation"
};


// Création d'un tableau contenant les jeux et leurs catégories de manière structurée
const mesJeux = [
  { nomJeu: "League of Legends", categorie: "jeu de stratégie/action" },
  { nomJeu: "World of Warcraft", categorie: "MMORPG (jeu de rôle en ligne massivement multijoueur)" },
  { nomJeu: "Call of Duty - Modern Warfare", categorie: "FPS (jeu de tir)" },
  { nomJeu: "Fifa 2020", categorie: "jeu de simulation" }
];

// Création de l'élément <ul> avec l'id "jeux"
const ulElement = document.createElement("ul");
ulElement.id = "jeux";

// Parcours du tableau mesJeux pour créer les éléments de la liste
for (let jeu of mesJeux) {
  const liElement = document.createElement("li");
  liElement.textContent = `${jeu.nomJeu} (${jeu.categorie})`;

  // ulElement.innerHTML = liElement; // ca c'est pas bon car liElement est un objet et innerHTML attend un STRING
  // ulElement.innerHTML = `<li>${jeu.nomJeu} (${jeu.categorie})</li>`; // Ca c'est pas bon car innerHTML ecrase le contenu précédant à chaque fois

  ulElement.appendChild(liElement);
}

document.body.appendChild(ulElement);
/*
  Explication du code

  Tableau mesJeux : 
    Chaque jeu est un objet avec les propriétés nomJeu et categorie.

  Boucle forEach : 
    Elle parcourt chaque objet dans le tableau mesJeux pour créer un élément <li> 
    avec le texte au format "nomJeu (categorie)".

  Ajout de la liste au DOM : 
    Enfin, l'élément <ul> est ajouté au <body> pour afficher la liste des jeux sur la page.
*/


  