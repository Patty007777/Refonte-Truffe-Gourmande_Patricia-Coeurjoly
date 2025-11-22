
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
    
    // Bouton recherche
    const searchButtons = document.querySelectorAll('[aria-label="Rechercher"]');
    
    searchButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('La fonction de recherche sera bientot disponible!');
        });
    });
    
});

