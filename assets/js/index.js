document.addEventListener('DOMContentLoaded', function() {
    
    initSmoothScroll();
    initSearchBar();
    
});

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

function executeSearch(event) {
    event.preventDefault();
    const searchBar = document.getElementById('search-bar');
    const searchInput = searchBar.querySelector('.header-horizontal__search-input');
    
    if (searchInput && searchInput.value.trim()) {
        console.log('Recherche :', searchInput.value);
    }
}

function closeSearchBar(event) {
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');
    
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target) && searchBar.classList.contains('show')) {
        searchBar.classList.remove('show');
    }
}