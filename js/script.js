num_sae = Object.keys(SAE);
console.log(num_sae);

let ligne="";

SAE.forEach(function(element, i)
{
    ligne += "<div>"+num_sae[i-1]+" - ";
})
document.querySelector(".page_gauche>div").innerHTML=ligne;

function affichage(SAE)
{
    console.log(SAE);
    document.querySelector(h1).innerText=SAE;
}