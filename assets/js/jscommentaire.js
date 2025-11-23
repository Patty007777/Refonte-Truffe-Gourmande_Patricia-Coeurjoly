document.addEventListener('DOMContentLoaded', function() {
// document = objet JavaScript qui représente toute la page web
// addEventListener = méthode pour "écouter" un événement
// 'DOMContentLoaded' = événement qui se déclenche quand le HTML est complètement chargé
// function() { } = fonction anonyme (sans nom) qui s'exécute quand l'événement se produit
// DOM = Document Object Model (modèle d'objet de document) - structure HTML en JavaScript
// RÉSULTAT : tout le code entre { } s'exécute seulement quand la page est prête
// C'est ESSENTIEL : sans ça, le JavaScript essaierait de manipuler des éléments qui n'existent pas encore
    
    console.log('Truffe Gourmande - JavaScript chargé');
    // console.log() affiche un message dans la console du navigateur (F12)
    // Utile pour déboguer (vérifier que le code fonctionne)
    // Ce message confirme que le JavaScript s'est bien exécuté
    
    // Smooth scroll pour les ancres
    // Commentaire qui décrit la section suivante
    // "Smooth scroll" = défilement fluide
    // "Ancres" = liens vers des sections de la page (liens avec #)

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    // const = déclare une constante (valeur qui ne change pas)
    // smoothScrollLinks = nom de la variable (tu peux choisir n'importe quel nom)
    // document.querySelectorAll() = sélectionne TOUS les éléments qui correspondent
    // 'a[href^="#"]' = sélecteur CSS pour tous les liens (<a>) dont href commence par "#"
    // ^ signifie "commence par" en regex
    // RÉSULTAT : trouve tous les liens d'ancre comme <a href="#section">
    
    smoothScrollLinks.forEach(function(link) {
    // .forEach() = méthode qui parcourt chaque élément d'une liste
    // function(link) = fonction qui s'exécute pour chaque lien
    // link = paramètre qui représente le lien en cours de traitement
    // RÉSULTAT : exécute le code { } pour chaque lien d'ancre trouvé
        
        link.addEventListener('click', function(event) {
        // .addEventListener('click', ...) = écoute le clic sur ce lien
        // function(event) = fonction qui s'exécute quand on clique
        // event = objet qui contient les informations sur l'événement (le clic)
            
            const targetId = this.getAttribute('href');
            // const targetId = nouvelle constante
            // this = fait référence au lien cliqué (celui sur lequel on vient de cliquer)
            // .getAttribute('href') = récupère la valeur de l'attribut href
            // Exemple : si href="#histoire", targetId vaut "#histoire"
            
            if (targetId === '#') {
            // if = instruction conditionnelle "si"
            // targetId === '#' vérifie si la valeur est exactement "#" (juste un dièse, pas de section)
            // === = opérateur de comparaison stricte (valeur ET type)
            // == compare seulement la valeur, === compare valeur ET type (plus sûr)
                
                return;
                // return = arrête l'exécution de la fonction
                // Si le href est juste "#", on ne fait rien (pas de scroll)
            }
            // Fermeture du if
            
            const targetElement = document.querySelector(targetId);
            // document.querySelector() = sélectionne le PREMIER élément qui correspond
            // targetId = la valeur du href (ex: "#histoire")
            // RÉSULTAT : trouve l'élément avec id="histoire" dans le HTML
            
            if (targetElement) {
            // if (targetElement) vérifie si l'élément existe
            // Si l'élément n'existe pas, targetElement vaut null (faux)
            // Cette vérification évite une erreur si la section ciblée n'existe pas
                
                event.preventDefault();
                // event.preventDefault() empêche l'action par défaut du navigateur
                // Par défaut, cliquer sur un lien d'ancre cause un saut brusque
                // preventDefault() annule ce comportement pour qu'on puisse faire notre propre animation
                // prevent = "empêcher", default = "par défaut"
                
                targetElement.scrollIntoView({
                // .scrollIntoView() = méthode qui fait défiler la page vers cet élément
                // Les { } contiennent des options de configuration
                
                    behavior: 'smooth',
                    // behavior: 'smooth' = défilement fluide/animé
                    // behavior = "comportement"
                    // Sans cette option : défilement instantané (saut)
                    // Avec : défilement progressif et agréable
                    
                    block: 'start'
                    // block: 'start' aligne le haut de l'élément avec le haut de la fenêtre
                    // block = "bloc" (alignement vertical)
                    // Options : 'start' (haut), 'center' (centre), 'end' (bas)
                    
                });
                // Fermeture des options de scrollIntoView
            }
            // Fermeture du if (targetElement)
        });
        // Fermeture de la fonction click
    });
    // Fermeture du forEach
    
   // Barre de recherche
   // Commentaire qui indique le début de la section barre de recherche

    const searchIcon = document.getElementById('search-icon');
    // document.getElementById() = sélectionne un élément par son id
    // 'search-icon' = la valeur de l'attribut id dans le HTML
    // RÉSULTAT : récupère l'icône de loupe cliquable
    // getElementById est plus rapide que querySelector pour les id
    
    const searchBar = document.getElementById('search-bar');
    // Récupère la barre de recherche (cachée par défaut)
    
    const searchButton = document.querySelector('.header-horizontal__search-button');
    // Récupère le bouton de recherche rond et rose
    // On utilise querySelector avec un sélecteur de classe (.)
    
    if (searchIcon && searchBar) {
    // if (searchIcon && searchBar) vérifie que les deux éléments existent
    // && = opérateur logique "ET" (les deux conditions doivent être vraies)
    // Si un élément n'existe pas, il vaut null et tout le code est ignoré
    // Cela évite les erreurs si les id sont manquants dans le HTML
        
        searchIcon.addEventListener('click', function(event) {
        // Écoute le clic sur l'icône de loupe
            
            event.preventDefault();
            // Empêche l'action par défaut (le lien href="#" ne fait rien)
            
            searchBar.classList.toggle('show');
            // .classList = objet qui contient toutes les classes CSS de l'élément
            // .toggle('show') = ajoute la classe si elle n'existe pas, l'enlève si elle existe
            // toggle = "basculer, alterner"
            // C'est comme un interrupteur : clic = allumé, reclic = éteint
            // RÉSULTAT : la classe 'show' apparaît/disparaît à chaque clic
            
            if (searchBar.classList.contains('show')) {
            // .contains('show') vérifie si la classe 'show' est présente
            // Cette condition est vraie seulement si la barre vient d'apparaître
                
                const searchInput = searchBar.querySelector('.header-horizontal__search-input');
                // Trouve le champ de saisie à l'intérieur de la barre de recherche
                // querySelector cherche UNIQUEMENT dans searchBar, pas dans toute la page
                
                if (searchInput) {
                // Vérifie que le champ existe
                    
                    setTimeout(() => searchInput.focus(), 100);
                    // setTimeout() = exécute du code après un délai
                    // () => = fonction flèche (syntaxe moderne ES6)
                    // searchInput.focus() = active le champ (curseur clignotant dedans)
                    // 100 = délai de 100 millisecondes (0.1 seconde)
                    // Le délai laisse le temps à l'animation CSS de se terminer
                    // RÉSULTAT : le curseur apparaît dans le champ automatiquement
                }
                // Fermeture du if (searchInput)
            }
            // Fermeture du if (contains show)
        });
        // Fermeture de la fonction click sur searchIcon
        
        if (searchButton) {
        // Vérifie si le bouton de recherche existe
            
            searchButton.addEventListener('click', function(event) {
            // Écoute le clic sur le bouton de recherche
                
                event.preventDefault();
                // Empêche l'action par défaut
                
                const searchInput = searchBar.querySelector('.header-horizontal__search-input');
                // Récupère le champ de saisie
                
                if (searchInput && searchInput.value.trim()) {
                // Double condition :
                // 1. searchInput existe
                // 2. searchInput.value.trim() n'est pas vide
                // .value = récupère le texte tapé dans le champ
                // .trim() = enlève les espaces au début et à la fin
                // Exemple : "  hello  ".trim() devient "hello"
                // Si le champ est vide ou contient seulement des espaces, la condition est fausse
                    
                    console.log('Recherche :', searchInput.value);
                    // Affiche dans la console ce que l'utilisateur a tapé
                    // C'est temporaire : dans une vraie application, on enverrait ça à un serveur
                    // ou on afficherait des résultats de recherche
                }
                // Fermeture du if (searchInput et value)
            });
            // Fermeture de la fonction click sur searchButton
        }
        // Fermeture du if (searchButton)
        
        document.addEventListener('click', function(event) {
        // Écoute TOUS les clics sur la page entière
        // Cette fonction gère la fermeture de la barre quand on clique ailleurs
            
            if (!searchBar.contains(event.target) && !searchIcon.contains(event.target) && searchBar.classList.contains('show')) {
            // Condition complexe avec trois parties reliées par &&
            // 1. !searchBar.contains(event.target) = le clic N'est PAS dans la barre
            // ! = opérateur de négation "NON"
            // event.target = l'élément exact qui a été cliqué
            // .contains() = vérifie si l'élément contient l'élément cliqué
            // 2. !searchIcon.contains(event.target) = le clic N'est PAS sur l'icône
            // 3. searchBar.classList.contains('show') = la barre est visible
            // Les trois conditions doivent être vraies pour exécuter le code
            // RÉSULTAT : ferme la barre seulement si on clique ailleurs et qu'elle est ouverte
                
                searchBar.classList.remove('show');
                // .remove('show') = enlève la classe 'show'
                // RÉSULTAT : la barre de recherche se cache
            }
            // Fermeture du if
        });
        // Fermeture de la fonction click sur document
    }
    // Fermeture du if (searchIcon && searchBar)
    
});
// Fermeture de la fonction DOMContentLoaded

// FIN DU FICHIER

// ===== EXPLICATIONS SUPPLÉMENTAIRES =====

// POURQUOI const au lieu de var ou let ?
// - const : valeur constante (ne peut pas être réassignée)
// - let : valeur variable (peut être réassignée)
// - var : ancienne façon (à éviter, portée problématique)
// On utilise const par défaut car les références aux éléments ne changent pas

// POURQUOI event.preventDefault() ?
// Sans preventDefault(), le navigateur exécute l'action par défaut :
// - Lien : charge la page
// - Formulaire : envoie les données
// - Ancre : saute à la section
// preventDefault() nous laisse contrôler le comportement

// DIFFÉRENCE entre getElementById et querySelector ?
// - getElementById('id') : plus rapide, seulement pour les id
// - querySelector('.class') ou querySelector('#id') : plus flexible, plus lent
// - querySelectorAll() : retourne TOUS les éléments correspondants

// POURQUOI vérifier si les éléments existent ?
// Si on essaie d'utiliser un élément qui n'existe pas (null), JavaScript plante
// Les vérifications if (element) évitent les erreurs
// C'est une bonne pratique ESSENTIELLE en JavaScript

// ÉVÉNEMENTS JAVASCRIPT COURANTS :
// - click : clic de souris
// - DOMContentLoaded : page HTML chargée
// - submit : envoi de formulaire
// - keypress : touche du clavier pressée
// - mouseover : souris passe au-dessus
// - change : valeur d'un champ change

// MÉTHODES DOM IMPORTANTES :
// - document.querySelector() : trouve UN élément
// - document.querySelectorAll() : trouve TOUS les éléments
// - document.getElementById() : trouve par id (rapide)
// - element.addEventListener() : écoute un événement
// - element.classList.add() : ajoute une classe
// - element.classList.remove() : enlève une classe
// - element.classList.toggle() : ajoute/enlève selon l'état
// - element.classList.contains() : vérifie si classe existe