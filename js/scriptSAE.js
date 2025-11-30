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

// Section Apprentissages Critiques en accordéon

let apprentissages = Object.keys(SAE[page]["AC"]);



let tableau_ac = "";

apprentissages.forEach(function(ac, i)
{
    tableau_ac += "<button class='accordeon'>"+apprentissages[i]+" - "+SAE[page]["AC"][ac]+"</button><div class='contenu'><p>lorem ipsum</p></div>";
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
