// Génération de la page SAE
let url= new URLSearchParams(location.search);
let page = url.get('sae');

let num_sae = Object.keys(SAE);

let ressources = Object.keys(SAE[page]["ressources"]);


document.querySelector("h1").innerHTML=page;
document.querySelector("h2").innerHTML=SAE[page]["titre"];
document.querySelector(".competence").innerHTML=SAE[page]["compétences"];
document.querySelector(".description>p").innerHTML=SAE[page]["description"];

let tableau_ressources = "";

ressources.forEach(function(ressource, i)
{
    tableau_ressources += "<tr><td>"+ressource+"</td><td>"+SAE[page]["ressources"][ressource]+"</td></tr>";
})

document.querySelector(".ressources").innerHTML="<table>"+tableau_ressources+"</table>";

// Bouton ouvrir le document

document.querySelector(".btn").innerHTML="<a href='../pdf/"+page+".pdf' target='_blank'><div class='btn_ouvrirAC'>Ouvrir le document <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='#F5F5DC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><g fill='none' fill-rule='evenodd'><path d='M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8'/></g></svg></div></a>"

// Section Apprentissages Critiques en accordéon

let apprentissages = Object.keys(SAE[page]["AC"]);

let descriptionsAC = Object.keys(ACRITIQUES[page]);

let tableau_ac = "";

apprentissages.forEach(function(ac, i)
{
    tableau_ac += "<button class='accordeon'>"+apprentissages[i]+" - "+SAE[page]["AC"][ac]+"</button><div class='contenu'><p>Description de l'AC : "+ACRITIQUES[page][ac]+"</p></div>";
})

document.querySelector(".ac").innerHTML=tableau_ac;

var ac = document.getElementsByClassName("accordeon");
var i;

for (i = 0; i < ac.length; i++) {
  ac[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var contenu = this.nextElementSibling;
    if (contenu.style.display === "block") {
      contenu.style.display = "none";
    } else {
      contenu.style.display = "block";
    }
  });
} 
