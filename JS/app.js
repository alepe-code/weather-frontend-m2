// app.js - Lógica para la página de inicio

// Función para obtener el icono SVG según el tipo
function getWeatherIcon(iconType) {
    const icons = {
        sun: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>`,
        rain: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="16" y1="13" x2="16" y2="21"/>
            <line x1="8" y1="13" x2="8" y2="21"/>
            <line x1="12" y1="15" x2="12" y2="23"/>
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
        </svg>`,
        cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>`,
        'cloud-sun': `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v2"/>
            <path d="m4.93 4.93 1.41 1.41"/>
            <path d="M20 12h2"/>
            <path d="m19.07 4.93-1.41 1.41"/>
            <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/>
            <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
        </svg>`
    };
    return icons[iconType] || icons.cloud;
}

// Función para obtener la clase de badge según la condición
function getConditionBadge(condition) {
    if (condition.includes('Soleado')) return 'bg-warning text-dark';
    if (condition.includes('Lluv')) return 'bg-primary';
    return 'bg-secondary';
}

// Función para crear una card de ciudad
function createCityCard(city) {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    
    card.innerHTML = `
        <article class="card h-100 shadow-sm border-0 hover-card" data-city-id="${city.id}">
            <div class="card-body text-center">
                <h3 class="h5 fw-bold mb-1">${city.name}</h3>
                <p class="text-muted small mb-3">${city.country}</p>
                <div class="mb-3">
                    ${getWeatherIcon(city.icon)}
                </div>
                <p class="display-6 fw-bold mb-2">${city.temp}°C</p>
                <span class="badge ${getConditionBadge(city.condition)} w-100 py-2">
                    ${city.condition}
                </span>
            </div>
        </article>
    `;
    
    return card;
}

// Función para renderizar todas las ciudades
function renderCities() {
    const citiesGrid = document.getElementById('cities-grid');
    
    // Limpiar el grid
    citiesGrid.innerHTML = '';
    
    // Crear y agregar cada card
    citiesData.forEach(city => {
        const cityCard = createCityCard(city);
        citiesGrid.appendChild(cityCard);
    });
    
    // Agregar event listeners a las cards
    addCityCardListeners();
}

// Función para agregar event listeners a las cards
function addCityCardListeners() {
    const cards = document.querySelectorAll('.hover-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cityId = this.dataset.cityId;
            // Guardar el ID de la ciudad en localStorage para la página de detalle
            localStorage.setItem('selectedCityId', cityId);
            // Navegar a la página de detalle
            window.location.href = 'detalle.html';
        });
        
        // Agregar efecto de cursor pointer
        card.style.cursor = 'pointer';
    });
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    renderCities();
});