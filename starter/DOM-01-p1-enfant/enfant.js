// 01-DOM : DÉCOUVREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 1 : afficher l'enfant d'un objet du DOM
Déclarez la fonction afficherEnfant afin que le reste du programme fonctionne correctement.
AIDES : 
	La fonction afficherEnfant affiche un enfant d'un objet du DOM
	Le paramètre noeud est l'objet du DOM
	Le paramètre indice est l'indice de l'enfant à afficher
*/

// Insérez votre code ici
function afficherEnfant(noeud, indice) {
    // Vérifier que le noeud est bien un élément DOM et qu'il a des enfants
    if (noeud.nodeType !== Node.ELEMENT_NODE) {
        console.error("Type de noeud incorrect\n");
        return;
    }

    // Vérifier que l'indice est dans la plage valide des enfants
    if (indice < 0 || indice >= noeud.childNodes.length) {
        console.error("Indice incorrect\n");
        return;
    }

    // Afficher l'enfant à l'indice donné
    console.log(noeud.childNodes[indice], "\n");
}

// Tests de la fonction afficherEnfant
afficherEnfant(document.body, 1); // Doit afficher le noeud h1
afficherEnfant(document.body, -1); // Doit afficher "Indice incorrect"
afficherEnfant(document.body, 8);  // Doit afficher "Indice incorrect"
afficherEnfant(document.body.childNodes[0], 0); // Doit afficher "Type de noeud incorrect"
