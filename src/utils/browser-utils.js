window.PokemonUtils = {
    API_BASE_URL: 'https://pokeapi.co/api/v2/pokemon',
    DEFAULT_POKEMON: 'pikachu',

    TYPE_COLORS: {
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
    },

    formatName: (name) => {
        if (!name) return '';
        return name.charAt(0).toUpperCase() + name.slice(1);
    },

    getTypeColor: (type) => {
        return window.PokemonUtils.TYPE_COLORS[type?.toLowerCase()] || 'bg-gray-500';
    },

    getStatPercentage: (statValue, maxValue = 255) => {
        if (!statValue || statValue < 0) return 0;
        return Math.min((statValue / maxValue) * 100, 100);
    },

    getStatColor: (statValue) => {
        if (statValue >= 100) return 'bg-green-400';
        if (statValue >= 70) return 'bg-yellow-400';
        return 'bg-red-400';
    },

    formatId: (id) => {
        if (!id) return '000';
        return id.toString().padStart(3, '0');
    },

    formatHeight: (height) => {
        if (!height) return '0 m';
        return `${(height / 10).toFixed(1)} m`;
    },

    formatWeight: (weight) => {
        if (!weight) return '0 kg';
        return `${(weight / 10).toFixed(1)} kg`;
    },

    buildApiUrl: (pokemonIdentifier) => {
        if (!pokemonIdentifier) return '';
        const cleanIdentifier = pokemonIdentifier.toString().toLowerCase().trim();
        return `${window.PokemonUtils.API_BASE_URL}/${cleanIdentifier}`;
    },

    isValidPokemonName: (name) => {
        if (!name || typeof name !== 'string') return false;
        const cleanName = name.trim();
        return cleanName.length > 0 && /^[a-zA-Z0-9\-]+$/.test(cleanName);
    }
};
