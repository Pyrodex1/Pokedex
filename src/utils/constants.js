
// API Configuration
export const API_CONFIG = {
    BASE_URL: 'https://pokeapi.co/api/v2',
    ENDPOINTS: {
        POKEMON: '/pokemon',
        SPECIES: '/pokemon-species',
        TYPE: '/type'
    }
};

// Pokemon Type Colors (Dark Mode Palette)
export const POKEMON_TYPE_COLORS = {
    fire: '#DC143C',        // Carmesí intenso
    water: '#4682B4',       // Azul acero
    grass: '#228B22',       // Verde bosque
    electric: '#DAA520',    // Vara dorada
    psychic: '#9370DB',     // Púrpura medio
    ice: '#5F9EA0',         // Azul cadete
    dragon: '#483D8B',      // Azul pizarra oscuro
    dark: '#2F2F2F',        // Gris carbón
    fairy: '#C71585',       // Violeta rojo medio
    normal: '#696969',      // Gris tenue
    fighting: '#8B0000',    // Rojo oscuro
    poison: '#800080',      // Púrpura
    ground: '#A0522D',      // Siena
    flying: '#4169E1',      // Azul real
    bug: '#556B2F',         // Verde oliva oscuro
    rock: '#708090',        // Gris pizarra
    ghost: '#483D8B',       // Azul pizarra oscuro
    steel: '#708090'        // Gris pizarra
};

// Stat Colors for Progress Bars
export const STAT_COLORS = {
    HIGH: '#22c55e',    // Verde (>= 100)
    MEDIUM: '#eab308',  // Amarillo (>= 70)
    LOW: '#ef4444'      // Rojo (< 70)
};

// Animation Durations
export const ANIMATIONS = {
    FADE_IN: 600,
    STAT_BAR: 1000,
    SKELETON: 1500,
    GRADIENT: 12000
};

// Breakpoints for Responsive Design
export const BREAKPOINTS = {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1200
};

// Default Pokemon for Initial Load
export const DEFAULT_POKEMON = 'pikachu';
