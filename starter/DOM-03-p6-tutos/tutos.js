// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
DOM - PREPA 6 : « Tutos » : construire une liste de tutos JavaScript
Vous disposez d’un fichier HTML qui contient une nav.
1. Créer un objet tutos qui contient les tutoriels JavaScript suivants :
	- Openclassrooms : Apprenez à coder avec JavaScript : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript
	- Openclassrooms : Créez des pages web interactives avec JavaScript : https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/
	- Udemy : The Complete JavaScript Course 2019 : Build Real Projects! sur UDEMY : https://www.udemy.com/course/the-complete-javascript-course/
2. Parcourir cet objet pour récupérer ces infos afin d’afficher un menu créé dynamiquement dans la page Web :
	- Le titre du menu (créé dynamiquement avec JS) est « Mes tutos JavaScript »
	- Le libellé du lien est à chaque fois le texte qui précède le lien dans l’objet tutos
	- Pour chaque item, le lien mène vers l’adresse mentionnée dans l'objet tutos
	- Pour chaque lien, prévoyez un title (« Vers le site de … »,
		avec le texte qui précède le lien dans l’énoncé ci-dessus)
AIDE : Utilisez une boucle for/in pour parcourir l'objet tutos
*/


// Création de l'objet tutos avec les informations sur les tutoriels JavaScript
const tutos = [
    { 
		nomLien: "Openclassrooms : Apprenez à coder avec JavaScript", 
		lien: "https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript" 
	},
    { 
		nomLien: "Openclassrooms : Créez des pages web interactives avec JavaScript", 
		lien: "https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/" 
	},
    { 
		nomLien: "Udemy : The Complete JavaScript Course 2019 : Build Real Projects! sur UDEMY", 
		lien: "https://www.udemy.com/course/the-complete-javascript-course/" 
	}
];

// Sélection de l'élément <nav> dans lequel le menu sera ajouté
const nav = document.querySelector("nav");

// Création du titre du menu
const title = document.createElement("h2");
title.textContent = "Mes tutos JavaScript";
nav.appendChild(title);

// Création de la liste <ul> pour les tutoriels
const ul = document.createElement("ul");

// Boucle pour parcourir l'objet tutos et créer les liens
tutos.forEach(tuto => {
    // Création de chaque élément <li> pour chaque tutoriel
    const li = document.createElement("li");

    // Création du lien <a>
    const link = document.createElement("a");
    link.href = tuto.lien;            // Définir l'URL du lien
    link.textContent = tuto.nomLien;   // Texte du lien
    link.title = `Vers le site de ${tuto.nomLien.split(':')[0]}`; // Titre du lien

    // Ajout du lien dans l'élément <li>, puis <li> dans <ul>
    li.appendChild(link);
    ul.appendChild(li);
});

// Ajout de la liste <ul> dans l'élément <nav>
nav.appendChild(ul);
