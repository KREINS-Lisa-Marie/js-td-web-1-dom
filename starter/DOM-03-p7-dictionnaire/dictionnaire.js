// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 7 : « Dictionnaire » : construire un dictionnaire
1. Votre dictionnaire contient les mots et les définitions suivantes :
    - Procrastination : Tendance pathologique à remettre systématiquement au lendemain
    - Tautologie : Phrase dont la formulation ne peut être que vraie
    - Oxymore : unit dans un même syntagme deux termes sémantiquement opposés
2. Stockez la liste des mots du dictionnaire dans la variable mots,
    qui est un tableau d'objets :
    - chaque élément du tableau représente un mot ;
    - chaque mot est lui-même un objet avec deux propriétés :
        * une propriété "terme", et
        * une propriété "definition"
3. Créer le dictionnaire sur la page web, dans la div d'id "contenu"
AIDE : utilisez la méthode forEach() pour parcourir le tableau de mots
*/

// Déclaration du tableau de mots avec les propriétés "terme" et "definition"
const mots = [
    { terme: "Procrastination", definition: "Tendance pathologique à remettre systématiquement au lendemain" },
    { terme: "Tautologie", definition: "Phrase dont la formulation ne peut être que vraie" },
    { terme: "Oxymore", definition: "Unit dans un même syntagme deux termes sémantiquement opposés" }
];

// Sélection de l'élément <div> avec l'id "contenu" pour y insérer le dictionnaire
const contenu = document.getElementById("contenu");

// Parcours du tableau de mots pour créer les éléments de la page
mots.forEach(mot => {
    // Création d'un élément <dt> pour le terme
    const dt = document.createElement("dt");
    dt.textContent = mot.terme; // Ajout du texte pour le terme

    // Création d'un élément <dd> pour la définition
    const dd = document.createElement("dd");
    dd.textContent = mot.definition; // Ajout du texte pour la définition

    // Ajout des éléments <dt> et <dd> dans l'élément "contenu"
    contenu.appendChild(dt);
    contenu.appendChild(dd);
});