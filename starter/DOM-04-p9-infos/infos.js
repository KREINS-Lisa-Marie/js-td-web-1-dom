// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/

// Sélection de l'élément avec l'ID "contenu" pour obtenir ses dimensions
const contenu = document.getElementById("contenu");

// Récupération de la largeur et de la hauteur du contenu
const largeur = contenu.clientWidth;
const hauteur = contenu.clientHeight;

// Création d'une liste pour afficher les dimensions
const ul = document.createElement("ul");

// Création des items de la liste pour la largeur et la hauteur
const liLargeur = document.createElement("li");
liLargeur.textContent = `Largeur : ${largeur}px`;

const liHauteur = document.createElement("li");
liHauteur.textContent = `Hauteur : ${hauteur}px`;

// Ajout des items dans la liste
ul.appendChild(liLargeur);
ul.appendChild(liHauteur);

// Sélection de la section "infos" et insertion de la liste
const infos = document.getElementById("infos");
infos.appendChild(ul);
