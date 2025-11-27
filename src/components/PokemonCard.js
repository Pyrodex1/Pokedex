function PokemonCard({ pokemon, getTypeColor }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  
  React.useEffect(() => {
    setImageLoaded(false);
  }, [pokemon.id]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const getStatPercentage = (statValue) => {
    return Math.min((statValue / 255) * 100, 100);
  };

  const getStatColor = (statValue) => {
    if (statValue >= 100) return 'bg-green-400';
    if (statValue >= 70) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return React.createElement('div', {
    className: 'glass-card rounded-3xl p-6 md:p-8 shadow-glass'
  },
    React.createElement('div', {
      className: 'grid md:grid-cols-2 gap-8 items-center'
    },
      React.createElement('div', {
        className: 'text-center'
      },
        React.createElement('div', {
          className: 'relative'
        },
          !imageLoaded && React.createElement('div', {
            className: 'w-64 h-64 mx-auto rounded-full skeleton mb-4'
          }),
          
          React.createElement('img', {
            src: pokemon.sprites.other['official-artwork'].front_default,
            alt: pokemon.name,
            onLoad: handleImageLoad,
            className: `w-64 h-64 mx-auto object-contain transition-all duration-500 ${
              imageLoaded ? 'opacity-100 pokemon-image-enter' : 'opacity-0'
            }`
          }),
          
          React.createElement('div', {
            className: 'absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl -z-10'
          })
        ),

        React.createElement('h2', {
          className: 'text-3xl md:text-4xl font-bold text-white mb-2'
        }, formatName(pokemon.name)),
        
        React.createElement('p', {
          className: 'text-white/60 text-lg mb-4'
        }, `#${pokemon.id.toString().padStart(3, '0')}`),

        React.createElement('div', {
          className: 'flex justify-center gap-3 mb-6'
        }, 
          pokemon.types.map((typeInfo, index) =>
            React.createElement('span', {
              key: index,
              className: `${getTypeColor(typeInfo.type.name)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`
            }, formatName(typeInfo.type.name))
          )
        ),

        React.createElement('div', {
          className: 'grid grid-cols-2 gap-4'
        },
          React.createElement('div', {
            className: 'glass-input rounded-xl p-4'
          },
            React.createElement('p', {
              className: 'text-white/60 text-sm'
            }, 'Altura'),
            React.createElement('p', {
              className: 'text-white font-bold text-lg'
            }, `${pokemon.height / 10} m`)
          ),
          React.createElement('div', {
            className: 'glass-input rounded-xl p-4'
          },
            React.createElement('p', {
              className: 'text-white/60 text-sm'
            }, 'Peso'),
            React.createElement('p', {
              className: 'text-white font-bold text-lg'
            }, `${pokemon.weight / 10} kg`)
          )
        )
      ),

      React.createElement('div', null,
        React.createElement('h3', {
          className: 'text-2xl font-bold text-white mb-6'
        }, 'Estadísticas Base'),
        
        React.createElement('div', {
          className: 'space-y-4'
        },
          pokemon.stats.slice(0, 6).map((stat, index) => {
            const percentage = getStatPercentage(stat.base_stat);
            const statColor = getStatColor(stat.base_stat);
            
            return React.createElement('div', {
              key: index,
              className: 'glass-input rounded-xl p-4'
            },
              React.createElement('div', {
                className: 'flex justify-between items-center mb-2'
              },
                React.createElement('span', {
                  className: 'text-white/80 font-medium'
                }, formatName(stat.stat.name.replace('-', ' '))),
                React.createElement('span', {
                  className: 'text-white font-bold'
                }, stat.base_stat)
              ),
              
              React.createElement('div', {
                className: 'w-full bg-white/10 rounded-full h-3 overflow-hidden'
              },
                React.createElement('div', {
                  className: `h-full ${statColor} stat-bar rounded-full shadow-lg`,
                  style: { 
                    width: imageLoaded ? `${percentage}%` : '0%',
                    transition: 'width 1s ease-in-out'
                  }
                })
              ),
              
              React.createElement('div', {
                className: 'text-right mt-1'
              },
                React.createElement('span', {
                  className: 'text-white/60 text-xs'
                }, `${Math.round(percentage)}%`)
              )
            );
          })
        ),

        React.createElement('div', {
          className: 'mt-8 grid grid-cols-1 gap-4'
        },
          React.createElement('div', {
            className: 'glass-input rounded-xl p-4'
          },
            React.createElement('h4', {
              className: 'text-white font-semibold mb-2'
            }, 'Habilidades'),
            React.createElement('div', {
              className: 'flex flex-wrap gap-2'
            },
              pokemon.abilities?.map((ability, index) =>
                React.createElement('span', {
                  key: index,
                  className: 'bg-white/20 text-white px-3 py-1 rounded-lg text-sm'
                }, formatName(ability.ability.name))
              ) || React.createElement('span', {
                className: 'text-white/60 text-sm'
              }, 'No disponible')
            )
          )
        )
      )
    )
  );
}
