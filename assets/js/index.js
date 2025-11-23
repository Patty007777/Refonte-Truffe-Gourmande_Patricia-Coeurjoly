



// ============================================
// TRUFFE GOURMANDE - JAVASCRIPT
// Événements interactifs pour toutes les pages
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('✨ Truffe Gourmande - JavaScript chargé!');
    
    // ============================================
    // ÉVÉNEMENT 1 : Smooth Scroll pour liens internes
    // ============================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            
            // Ignorer si c'est juste #
            if (targetId === '#') {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                // Fermer le menu mobile si ouvert
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
                
                // Scroll smooth vers l'élément
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // ÉVÉNEMENT 2 : Validation formulaire newsletter
    // ============================================
    const newsletterForm = document.querySelector('.newsletter__form, form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                // Animation de succès
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = '✓ INSCRIT!';
                submitBtn.style.backgroundColor = '#28a745';
                submitBtn.disabled = true;
                
                // Réinitialiser après 3 secondes
                setTimeout(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                    emailInput.value = '';
                }, 3000);
                
                console.log('✅ Inscription newsletter réussie:', email);
            } else {
                alert('Veuillez entrer une adresse courriel valide.');
            }
        });
    }
    
    // ============================================
    // ÉVÉNEMENT 3 : Boutons "Ajouter au panier"
    // ============================================
    const addToCartButtons = document.querySelectorAll('button, .btn');
    
    addToCartButtons.forEach(function(button) {
        // Vérifier si le bouton contient "AJOUTER AU PANIER"
        if (button.textContent.includes('AJOUTER AU PANIER')) {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                
                // Trouver le titre du produit
                const card = this.closest('.card');
                let productName = 'Produit';
                
                if (card) {
                    const titleElement = card.querySelector('.card-title');
                    if (titleElement) {
                        productName = titleElement.textContent;
                    }
                }
                
                // Animation du bouton
                const originalHTML = this.innerHTML;
                this.innerHTML = '✓ AJOUTÉ!';
                this.style.backgroundColor = '#28a745';
                this.disabled = true;
                
                // Réinitialiser après 2 secondes
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.backgroundColor = '';
                    this.disabled = false;
                }, 2000);
                
                console.log('🛒 Produit ajouté au panier:', productName);
            });
        }
    });
    
    // ============================================
    // ÉVÉNEMENT 4 : Hover sur les cartes de produits
    // ============================================
    const productCards = document.querySelectorAll('.card');
    
    productCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-0.5rem)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // ============================================
    // ÉVÉNEMENT 5 : Clic sur icônes animaux
    // ============================================
    const animalLinks = document.querySelectorAll('.animal-circle, .animal-icon-circle');
    
    animalLinks.forEach(function(animalCircle) {
        animalCircle.addEventListener('click', function() {
            // Animation de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            const animalName = this.closest('a')?.querySelector('p')?.textContent || 'Animal';
            console.log('🐾 Navigation vers:', animalName);
        });
    });
    
    // ============================================
    // ÉVÉNEMENT 6 : Bouton recherche
    // ============================================
    const searchButtons = document.querySelectorAll('[aria-label="Rechercher"]');
    
    searchButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('La fonction de recherche sera bientôt disponible!');
            console.log('🔍 Fonction de recherche activée');
        });
    });
    
});

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

/**
 * Valide une adresse courriel
 * @param {string} email - L'adresse courriel à valider
 * @returns {boolean} - True si valide, false sinon
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Anime un élément avec une classe temporaire
 * @param {HTMLElement} element - L'élément à animer
 * @param {string} className - La classe à ajouter temporairement
 * @param {number} duration - Durée en millisecondes
 */
function animateElement(element, className, duration = 300) {
    element.classList.add(className);
    setTimeout(function() {
        element.classList.remove(className);
    }, duration);
}
