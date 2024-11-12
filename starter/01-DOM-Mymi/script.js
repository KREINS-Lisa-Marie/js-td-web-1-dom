/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */


// Sélectionner l'élément <li> avec le lien "Photos"
const photoLi = document.getElementById("li4");

// Créer une copie de cet élément
const visualsLi = photoLi.cloneNode(true);

// Mettre à jour le contenu du nouvel élément pour qu'il corresponde aux consignes
const visualsLink = visualsLi.querySelector('a');

visualsLink.textContent = "Visuals";
visualsLink.href = "visuals.html";
visualsLink.title = "voir la galerie";

// Insérer le nouvel élément <li> juste après l'élément "Photos"
photoLi.after(visualsLi);

// photoLi.insertAdjacentHTML("afterend", photoLi); // Pas juste