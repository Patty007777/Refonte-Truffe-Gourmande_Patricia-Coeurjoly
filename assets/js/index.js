document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Truffe Gourmande - JavaScript charge');
    
    // Smooth scroll pour les ancres
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
    
    // BARRE DE RECHERCHE
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.querySelector('.header-horizontal__search-button');

    if (searchIcon && searchBar) {
        searchIcon.addEventListener('click', function(event) {
            event.preventDefault();
            searchBar.classList.toggle('show');
            
            if (searchBar.classList.contains('show')) {
                const searchInput = searchBar.querySelector('.header-horizontal__search-input');
                if (searchInput) {
                    setTimeout(() => searchInput.focus(), 100);
                }
            }
        });
        
        // Clic sur la loupe rose pour rechercher
        if (searchButton) {
            searchButton.addEventListener('click', function(event) {
                event.preventDefault();
                const searchInput = searchBar.querySelector('.header-horizontal__search-input');
                if (searchInput && searchInput.value.trim()) {
                    // Logique de recherche à ajouter ici
                    console.log('Recherche :', searchInput.value);
                }
            });
        }
        
        // Fermer si clic ailleurs
        document.addEventListener('click', function(event) {
            if (!searchBar.contains(event.target) && !searchIcon.contains(event.target) && searchBar.classList.contains('show')) {
                searchBar.classList.remove('show');
            }
        });
    }
    
});