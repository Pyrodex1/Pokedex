import { POKEMON_TYPE_COLORS, STAT_COLORS, API_CONFIG } from './constants.js';

/**
 * Formatea el nombre de un Pokémon capitalizando la primera letra
 * @param {string} name - Nombre del Pokémon
 * @returns {string} - Nombre formateado
 */
export const formatPokemonName = (name) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
};

/**
 * Obtiene el color correspondiente a un tipo de Pokémon
 * @param {string} type - Tipo de Pokémon
 * @returns {string} - Color hexadecimal
 */
export const getTypeColor = (type) => {
    return POKEMON_TYPE_COLORS[type?.toLowerCase()] || '#6b7280'; // Gray-500 por defecto
};

/**
 * Obtiene la clase CSS de Tailwind para un tipo de Pokémon
 * @param {string} type - Tipo de Pokémon
 * @returns {string} - Clase CSS de Tailwind
 */
export const getTypeColorClass = (type) => {
    const colorMap = {
        fire: 'bg-pokemon-fire',
        water: 'bg-pokemon-water',
        grass: 'bg-pokemon-grass',
        electric: 'bg-pokemon-electric',
        psychic: 'bg-pokemon-psychic',
        ice: 'bg-pokemon-ice',
        dragon: 'bg-pokemon-dragon',
        dark: 'bg-pokemon-dark',
        fairy: 'bg-pokemon-fairy',
        normal: 'bg-pokemon-normal',
        fighting: 'bg-pokemon-fighting',
        poison: 'bg-pokemon-poison',
        ground: 'bg-pokemon-ground',
        flying: 'bg-pokemon-flying',
        bug: 'bg-pokemon-bug',
        rock: 'bg-pokemon-rock',
        ghost: 'bg-pokemon-ghost',
        steel: 'bg-pokemon-steel'
    };
    return colorMap[type?.toLowerCase()] || 'bg-gray-500';
};

/**
 * Calcula el porcentaje de una estadística para la barra de progreso
 * @param {number} statValue - Valor de la estadística
 * @param {number} maxValue - Valor máximo (por defecto 255)
 * @returns {number} - Porcentaje (0-100)
 */
export const getStatPercentage = (statValue, maxValue = 255) => {
    if (!statValue || statValue < 0) return 0;
    return Math.min((statValue / maxValue) * 100, 100);
};

/**
 * Obtiene el color de la barra de estadística basado en el valor
 * @param {number} statValue - Valor de la estadística
 * @returns {string} - Clase CSS de color
 */
export const getStatColor = (statValue) => {
    if (statValue >= 100) return 'bg-green-400';
    if (statValue >= 70) return 'bg-yellow-400';
    return 'bg-red-400';
};

/**
 * Formatea el ID del Pokémon con ceros a la izquierda
 * @param {number} id - ID del Pokémon
 * @returns {string} - ID formateado (ej: "001", "025")
 */
export const formatPokemonId = (id) => {
    if (!id) return '000';
    return id.toString().padStart(3, '0');
};

/**
 * Convierte altura de decímetros a metros
 * @param {number} height - Altura en decímetros
 * @returns {string} - Altura en metros con unidad
 */
export const formatHeight = (height) => {
    if (!height) return '0 m';
    return `${(height / 10).toFixed(1)} m`;
};

/**
 * Convierte peso de hectogramos a kilogramos
 * @param {number} weight - Peso en hectogramos
 * @returns {string} - Peso en kilogramos con unidad
 */
export const formatWeight = (weight) => {
    if (!weight) return '0 kg';
    return `${(weight / 10).toFixed(1)} kg`;
};

/**
 * Construye la URL completa para la API de Pokémon
 * @param {string|number} pokemonIdentifier - Nombre o ID del Pokémon
 * @returns {string} - URL completa
 */
export const buildPokemonApiUrl = (pokemonIdentifier) => {
    if (!pokemonIdentifier) return '';
    const cleanIdentifier = pokemonIdentifier.toString().toLowerCase().trim();
    return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.POKEMON}/${cleanIdentifier}`;
};

/**
 * Valida si un string es un nombre de Pokémon válido
 * @param {string} name - Nombre a validar
 * @returns {boolean} - True si es válido
 */
export const isValidPokemonName = (name) => {
    if (!name || typeof name !== 'string') return false;
    const cleanName = name.trim();
    return cleanName.length > 0 && /^[a-zA-Z0-9\-]+$/.test(cleanName);
};
