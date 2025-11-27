// detail.js - Lógica para la página de detalle

// Función para obtener el icono SVG según el tipo
function getWeatherIcon(iconType, size = 48) {
    const icons = {
        sun: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
        rain: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="16" y1="13" x2="16" y2="21"/>
            <line x1="8" y1="13" x2="8" y2="21"/>
            <line x1="12" y1="15" x2="12" y2="23"/>
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
        </svg>`,
        cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>`,
        'cloud-sun': `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

// Función para renderizar la información actual de la ciudad
function renderCurrentWeather(city) {
    const currentWeatherSection = document.getElementById('current-weather');
    
    currentWeatherSection.innerHTML = `
        <div class="card-body p-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1 class="display-4 fw-bold mb-2">${city.name}</h1>
                    <p class="text-muted fs-5 mb-4">${city.country}</p>
                    <div class="d-flex align-items-center mb-3">
                        ${getWeatherIcon(city.icon, 64)}
                        <span class="display-1 fw-bold ms-3">${city.temp}°</span>
                    </div>
                    <span class="badge ${getConditionBadge(city.condition)} fs-6 px-3 py-2">
                        ${city.condition}
                    </span>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                    <div class="row g-3">
                        <div class="col-6">
                            <div class="card bg-primary bg-opacity-10 border-0">
                                <div class="card-body text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-2">
                                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                                    </svg>
                                    <h6 class="text-muted mb-1">Humedad</h6>
                                    <p class="h4 mb-0">${city.humidity}%</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card bg-success bg-opacity-10 border-0">
                                <div class="card-body text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#198754" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-2">
                                        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                                    </svg>
                                    <h6 class="text-muted mb-1">Viento</h6>
                                    <p class="h4 mb-0">${city.wind} km/h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para renderizar el pronóstico semanal
function renderForecast(forecast) {
    const forecastGrid = document.getElementById('forecast-grid');
    
    forecastGrid.innerHTML = '';
    
    forecast.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'col-6 col-md-4 col-lg-3';
        
        dayCard.innerHTML = `
            <article class="card h-100 shadow-sm border-0 hover-shadow">
                <div class="card-body text-center">
                    <h3 class="h5 fw-bold mb-3">${day.day}</h3>
                    <div class="mb-3">
                        ${getWeatherIcon(day.icon, 40)}
                    </div>
                    <p class="h3 fw-bold mb-2">${day.temp}°</p>
                    <p class="text-muted small mb-0">${day.condition}</p>
                </div>
            </article>
        `;
        
        forecastGrid.appendChild(dayCard);
    });
}

// Función principal para cargar los datos de la ciudad
function loadCityDetails() {
    // Obtener el ID de la ciudad del localStorage
    const cityId = localStorage.getItem('selectedCityId');
    
    // Si no hay ciudad seleccionada, redirigir al inicio
    if (!cityId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Buscar la ciudad en los datos
    const city = citiesData.find(c => c.id === parseInt(cityId));
    
    // Si no se encuentra la ciudad, redirigir al inicio
    if (!city) {
        window.location.href = 'index.html';
        return;
    }
    
    // Renderizar la información de la ciudad
    renderCurrentWeather(city);
    renderForecast(city.forecast);
}

// Inicializar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadCityDetails();
});