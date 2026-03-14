// Récupération des données
let num_sae = Object.keys(SAE);

// Création de le grille Bento
let grille = "";

num_sae.forEach(function(id, i) {
    // Par défaut, toutes les cases sont au format "compacte"
    let classe_case = "compacte";
    console.log(id)


    // Indices correspondant aux cases larges
    if (i == 0 || i == 8 || i == 9 || i == 17){
        classe_case = "bandeau";
    }
    // Indices correspondants aux cases hautes
    else {
        if (i == 4 || i == 11){
            classe_case = "portrait";
        }
    }
    grille += "<a href='sae.html?sae=" + id + "' class='case " + classe_case + "'>" + id + "</a>";
});
document.querySelector(".grille_sae").innerHTML = grille;

