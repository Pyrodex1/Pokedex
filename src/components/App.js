const { useState, useEffect } = React;

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPokemon = async (pokemonName) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      
      const pokemonData = await response.json();
      setPokemon(pokemonData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon('pikachu');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchPokemon(searchTerm.trim());
      setSearchTerm('');
    }
  };

  const getTypeColor = (type) => {
    const typeColors = {
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
    return typeColors[type] || 'bg-gray-500';
  };

  return React.createElement('div', {
    className: 'min-h-screen p-4 md:p-8 w-full overflow-x-hidden'
  },
    React.createElement('div', {
      className: 'max-w-4xl mx-auto w-full'
    },
      React.createElement('div', {
        className: 'text-center mb-8'
      },
        React.createElement('h1', {
          className: 'text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg'
        }, 'Pokédex'),
        React.createElement('p', {
          className: 'text-white/80 text-lg md:text-xl'
        }, 'Explora el mundo Pokémon')
      ),

      React.createElement('form', {
        onSubmit: handleSearch,
        className: 'mb-8'
      },
        React.createElement('div', {
          className: 'glass-input rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4'
        },
          React.createElement('input', {
            type: 'text',
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            placeholder: 'Buscar Pokémon (ej Charizard o 6)',
            className: 'flex-1 bg-transparent text-white placeholder-white/60 outline-none text-base sm:text-lg w-full min-w-0'
          }),
          React.createElement('button', {
            type: 'submit',
            disabled: loading,
            className: 'bg-white/20 hover:bg-white/30 disabled:opacity-50 text-white px-4 sm:px-6 py-2 rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shrink-0'
          }, loading ? 'Buscando...' : 'Buscar')
        )
      ),

      loading && React.createElement('div', {
        className: 'glass-card rounded-3xl p-8 text-center'
      },
        React.createElement('div', {
          className: 'animate-spin w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4'
        }),
        React.createElement('p', {
          className: 'text-white/80 text-xl'
        }, 'Cargando Pokémon...')
      ),

      error && React.createElement('div', {
        className: 'glass-card rounded-3xl p-8 text-center border-red-400/50'
      },
        React.createElement('p', {
          className: 'text-red-300 text-xl'
        }, `${error}`)
      ),

      pokemon && !loading && React.createElement(PokemonCard, {
        pokemon: pokemon,
        getTypeColor: getTypeColor
      })
    )
  );
}
