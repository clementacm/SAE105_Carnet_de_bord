// Génération de la page SAE

let url = new URLSearchParams(location.search);
let page = url.get('sae');

let num_sae = Object.keys(SAE);
let ressources = Object.keys(SAE[page]["ressources"]);

/*******************************************/
/*           Affichage du header           */
/*******************************************/

// Numéro et titre
document.querySelector("h1").innerHTML = page;
document.querySelector("h2").innerHTML = SAE[page]["titre"];

// Compétence(s)
let competences = SAE[page]["compétences"];
let affichage_competences = "";

competences.forEach(function (competence) {
  affichage_competences += `<div class='tag_competence'>${competence}</div>`
})

document.querySelector(".competence").innerHTML = affichage_competences;

if (competences.length > 1){
  document.querySelector(".zone_competences>h3").innerHTML = "Compétences : ";
}

/*******************************************/
/*            Section principale           */
/*******************************************/

// Description
document.querySelector(".description>p").innerHTML = SAE[page]["description"];

// Tableau des ressources
let tableau_ressources = "";

ressources.forEach(function (ressource, i) { // Pour chaque ressource => création d'une ligne de tableau avec deux cases
  tableau_ressources += "<tr><td>" + ressource + "</td><td>" + SAE[page]["ressources"][ressource] + "</td></tr>";
})

document.querySelector(".tableau").innerHTML = "<table>" + tableau_ressources + "</table>";

/*******************************************/
/*        Apprentissages critiques         */
/*******************************************/

// Bouton vers le PDF
document.querySelector(".bouton").innerHTML = `<a href='pdf/${page}.pdf' target='_blank'>
    <div>Ouvrir le document</div>
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='#F5F5DC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8'/></svg>
</a>`;

// Création de l'accordéon
let ac_num = Object.keys(SAE[page]["AC"]);
let accordeon_html = "";

ac_num.forEach(function (ac_num) {
  accordeon_html += `
        <button class='accordeon'>${ac_num} - ${SAE[page]["AC"][ac_num]}</button>
        <div class='contenu'>
            <p><strong>Détail :</strong> ${ACRITIQUES[page][ac_num]}</p>
        </div>`;
})

document.querySelector(".ac").innerHTML = accordeon_html;

// Interactivité de l'accordéon
const ac_elements = document.querySelectorAll(".accordeon");

ac_elements.forEach(function(bouton) {
    bouton.addEventListener("click", function () {
        // Bascule la classe "active" pour l'animation de la flèche
        this.classList.toggle("active");

        // Gestion de l'affichage du panneau (nextElementSibling cible la div .contenu)
        const panneau = this.nextElementSibling;
        if (panneau.style.display === "block") {
            panneau.style.display = "none";
        } else {
            panneau.style.display = "block";
        }
    });
});