/* ============================================
   INITIALISATION AU CHARGEMENT DE LA PAGE
   ============================================ */

/*
 * DOMContentLoaded : Événement qui se déclenche quand le HTML est complètement chargé
 * EFFET : Lance toutes les fonctions d'initialisation une fois que le DOM est prêt
 */
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initSearchBar();
    removeTypewriterCursor();
});

/* ============================================
   SMOOTH SCROLL POUR LES ANCRES
   ============================================ */

/*
 * Fonction : initSmoothScroll
 * EFFET : Active le défilement fluide pour tous les liens qui pointent vers des ancres (#)
 * Exemple : Cliquer sur "Notre histoire > Mission" défile smoothly vers la section #mission
 */
function initSmoothScroll() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ============================================
   BARRE DE RECHERCHE INTERACTIVE
   ============================================ */

/*
 * Fonction : initSearchBar
 * EFFET : Active tous les événements de la barre de recherche
 * - Clic sur loupe : affiche/cache la barre
 * - Clic sur bouton rose : lance la recherche
 * - Clic ailleurs : ferme la barre
 */
function initSearchBar() {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.querySelector('.header-horizontal__search-button');

    if (!searchIcon || !searchBar) {
        return;
    }

    searchIcon.addEventListener('click', toggleSearchBar);
    
    if (searchButton) {
        searchButton.addEventListener('click', executeSearch);
    }
    
    document.addEventListener('click', closeSearchBar);
}

/*
 * Fonction : toggleSearchBar
 * ÉVÉNEMENT : Clic sur l'icône loupe
 * EFFET : Affiche la barre de recherche si cachée, la cache si visible
 * VISUEL : Barre glisse de droite à gauche avec animation smooth (transition CSS 0.4s)
 */
function toggleSearchBar(event) {
    event.preventDefault();
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('show');
    
    if (searchBar.classList.contains('show')) {
        const searchInput = searchBar.querySelector('.header-horizontal__search-input');
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 100);
        }
    }
}

/*
 * Fonction : executeSearch
 * ÉVÉNEMENT : Clic sur le bouton loupe rose dans la barre de recherche
 * EFFET : Lance la recherche si du texte est saisi
 * VISUEL : Pour l'instant, affiche dans la console (à connecter avec vraie recherche plus tard)
 */
function executeSearch(event) {
    event.preventDefault();
    const searchBar = document.getElementById('search-bar');
    const searchInput = searchBar.querySelector('.header-horizontal__search-input');
    
    if (searchInput && searchInput.value.trim()) {
        console.log('Recherche :', searchInput.value);
    }
}

/*
 * Fonction : closeSearchBar
 * ÉVÉNEMENT : Clic n'importe où sur la page
 * EFFET : Ferme la barre de recherche si le clic est à l'extérieur
 * VISUEL : Barre glisse vers la droite et disparaît
 */
function closeSearchBar(event) {
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');
    
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target) && searchBar.classList.contains('show')) {
        searchBar.classList.remove('show');
    }
}

/* ============================================
   ANIMATION TYPEWRITER - RETRAIT DU CURSEUR
   ============================================ */

/*
 * Fonction : removeTypewriterCursor
 * EFFET : Retire le curseur clignotant (border-right) après l'animation
 * TIMING : 4 secondes (1s de délai + 3s d'animation)
 * VISUEL : Le curseur | disparaît une fois que le texte est complètement écrit
 * 
 * POURQUOI ICI ET PAS DANS LE HTML ?
 * - Bonne pratique : Tout le JavaScript doit être dans les fichiers .js
 * - Séparation des préoccupations : HTML = structure, CSS = style, JS = comportement
 * - Maintenance : Plus facile de gérer tout le JS au même endroit
 * - Performance : Un seul fichier JS à charger plutôt que scripts inline partout
 */
function removeTypewriterCursor() {
    setTimeout(function() {
        const typewriterElement = document.getElementById('typewriter-text');
        if (typewriterElement) {
            typewriterElement.style.borderRight = 'none';
        }
    }, 4000);
}