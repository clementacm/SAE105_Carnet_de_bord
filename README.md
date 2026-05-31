# Carnet de bord | Projet MMI

Réalisé dans le cadre de mon BUT MMI, ce projet consistait à concevoir un carnet de bord automatisé regroupant les différentes Situations d'Apprentissage et d'Évaluation (SAÉ). L'objectif était de générer dynamiquement chaque page à partir d'une structure de données JavaScript.

* **Technologies utilisées :** HTML5, CSS3, JavaScript.
* **Design :** Interface ergonomique, inspiration Bento Grids pour la page d'accueil.

🔗 **<a href="https://clementacm.github.io/SAE105_Carnet_de_bord/" target="_blank">Voir le site en ligne</a>** 

<img width="1315" height="278" alt="image" src="https://github.com/user-attachments/assets/c4db3354-bdaf-468d-ad66-076de04e2508" />

# Carnet de bord dynamique - SAÉ 105

Réalisé dans le cadre de mon BUT MMI (Métiers du Multimédia et de l'Internet), ce projet visait à créer un carnet de bord numérique pour afficher dynamiquement les différentes Situations d’Apprentissage et d’Évaluation (SAÉ). 

L’objectif technique principal était d'éviter la duplication de code HTML et de proposer une navigation intuitive en générant les interfaces à partir d'une structure de données JavaScript.

🔗 **[Voir le site en ligne](https://clementacm.github.io/SAE105_Carnet_de_bord/)**

<img width="1315" alt="Aperçu de la page d'accueil" src="https://github.com/user-attachments/assets/c4db3354-bdaf-468d-ad66-076de04e2508" />

---

## Architecture technique

Le cœur du projet repose sur une séparation stricte entre les données (stockées en JS) et le rendu visuel (HTML/CSS), simulant le comportement d'un site dynamique sans nécessiter de serveur backend.

* **Le "Modèle" (Données) :** Toutes les informations textuelles et les chemins d'images sont stockés dans des fichiers JavaScript dédiés (`dataSAE.js` et `dataAC.js`). 
* **Le "Contrôleur" (Logique JavaScript) :** Des algorithmes (`script.js`, `scriptSAE.js`) parcourent ces données, créent les éléments du DOM, et injectent le contenu dans la page.
* **Routage côté client :** Les pages détaillées (`sae.html`) sont générées dynamiquement en récupérant un paramètre d'identification passé dans l'URL pour extraire les bonnes données.
* **La "Vue" (Frontend) :** Utilisation de balises sémantiques HTML5 pour garantir des pages claires et accessibles, couplées à une mise en page fluide en CSS3 (unités relatives).

---

## Fonctionnalités clés

* **Accueil en "Bento Grid" :** La page principale liste les SAÉ sous la forme d'une grille Bento moderne. Le script parcourt les données et attribue dynamiquement des classes CSS en fonction de la position souhaitée pour chaque case.
* **Mise à jour centralisée :** Grâce à cette architecture, l’ajout, la modification ou la suppression d’une SAÉ se fait **uniquement** en mettant à jour le fichier de données JavaScript. Le code HTML n'a jamais besoin d'être modifié.
* **Design adaptatif et ergonomique :** Interface fluide qui s'adapte à la largeur de l'écran (dans la limite d'un format desktop réduit). 
* **Navigation optimisée :** Intégration de boutons de retour vers la page principale et d'ancres stratégiquement placées pour guider l'utilisateur.

---

## Structure du projet

* `index.html` & `sae.html` : Templates où le contenu est injecté.
* `js/dataSAE.js` & `js/dataAC.js` : Fichiers agissant comme base de données (tableaux d'objets JSON).
* `js/script.js` & `js/scriptSAE.js` : Scripts gérant l'algorithmique et la manipulation du DOM.
* `styles/` : Feuilles de styles (fichiers séparés pour l'accueil, les fiches SAÉ et le style global).
* `pdf/` : Stockage des documents de justifications des SAÉ.
