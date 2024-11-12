// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/

// Fonction pour afficher les informations des liens dans la page
function getInfosLiens() {
    // Sélectionne tous les éléments <a> (liens) dans la page
    const liens = document.querySelectorAll('a');
    
    // Affiche le nombre total de liens
    console.log(`Nombre total de liens : ${liens.length}`);
    
    // Vérifie s'il y a au moins un lien pour éviter des erreurs
    if (liens.length > 0) {
        // Affiche l'URL du premier lien
        console.log(`Cible du premier lien : ${liens[0].href}`);
        
        // Affiche l'URL du dernier lien
        console.log(`Cible du dernier lien : ${liens[liens.length - 1].href}`);
    }
}

// Fonction pour vérifier si un élément avec un certain ID possède une classe donnée
function possede(id, classe) {
    // Sélectionne l'élément avec l'ID donné
    const element = document.getElementById(id);
    
    // Vérifie si l'élément existe
    if (element) {
        // Vérifie si l'élément contient la classe spécifiée
        console.log(element.classList.contains(classe));
    } else {
        // Affiche un message si l'élément avec l'ID donné n'existe pas
        console.log(`Aucun élément ne possède l'id ${id}`);
    }
}

// Appel de la fonction pour afficher les informations des liens
getInfosLiens();

// Tests de la fonction possede
possede("saxophone", "bois");    // Doit afficher true
possede("saxophone", "cuivre");  // Doit afficher false
possede("trompette", "cuivre");  // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher "Aucun élément ne possède l'id contrebasse"




