# 🔥 Pokédex 

Una Pokédex construida con **React**, **JavaScript** y **Tailwind CSS**, **glassmorphism**.

## ✨ Características

- 🎨 **Diseño Glassmorphism** - Efectos de vidrio modernos con backdrop-filter
- ⚡ **React con JavaScript** - Desarrollo rápido y funcional
- 🎯 **PokeAPI Integration** - Datos en tiempo real de Pokémon
- 📱 **Responsive Design** - Optimizado para móviles y desktop
- 🌈 **Animaciones Suaves** - Transiciones CSS y loading states
- 🔍 **Búsqueda Inteligente** - Por nombre o ID de Pokémon
- 📊 **Estadísticas Visuales** - Barras de progreso animadas
- 🎨 **Colores Dinámicos** - Tipos de Pokémon con colores específicos

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + JavaScript
- **Styling**: Tailwind CSS + Custom CSS
- **API**: PokeAPI (https://pokeapi.co/)
- **Arquitectura**: Componentes funcionales + React Hooks

## 🛠️ Instalación y Uso

### Opción 1: Desarrollo Local

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd pokedex
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   ```
   http://localhost:3000
   ```

### Opción 2: Abrir Directamente

Simplemente abre el archivo `index.html` en tu navegador favorito.

## 📁 Estructura del Proyecto

```
pokedex/
├── index.html                 # Punto de entrada principal
├── tailwind.config.js         # Configuración de Tailwind CSS
├── package.json              # Dependencias y scripts
├── README.md                 # Documentación
└── src/
    ├── App.js                # Componente principal
    └── components/
        └── PokemonCard.js    # Componente de tarjeta Pokémon
```

## 🎯 Funcionalidades

### 🔍 Búsqueda de Pokémon
- Busca por **nombre** (ej: pikachu, charizard)
- Busca por **ID** (ej: 25, 150)
- Búsqueda case-insensitive

### 📊 Información Detallada
- **Imagen oficial** en alta resolución
- **Estadísticas base** con barras de progreso
- **Tipos** con colores específicos
- **Altura y peso** del Pokémon
- **Habilidades** disponibles

### 🎨 Efectos Visuales
- **Glassmorphism cards** con backdrop-filter
- **Animaciones de carga** con skeleton loaders
- **Transiciones suaves** en todas las interacciones
- **Gradientes animados** en el fondo

## 🎨 Paleta de Colores por Tipo

| Tipo | Color | Código |
|------|-------|--------|
| 🔥 Fire | Naranja | `#F08030` |
| 💧 Water | Azul | `#6890F0` |
| 🌱 Grass | Verde | `#78C850` |
| ⚡ Electric | Amarillo | `#F8D030` |
| 🔮 Psychic | Rosa | `#F85888` |
| ❄️ Ice | Celeste | `#98D8D8` |
| 🐲 Dragon | Púrpura | `#7038F8` |

## 🚀 Despliegue

### Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
```bash
# Push to main branch
# Enable GitHub Pages in repository settings
```

## 🔧 Personalización

### Agregar Nuevos Tipos de Pokémon
Edita `tailwind.config.js`:
```javascript
colors: {
  'pokemon-nuevo-tipo': '#HEXCOLOR',
}
```

### Modificar Animaciones
Edita las clases CSS en `index.html`:
```css
@keyframes nuevaAnimacion {
  /* tus keyframes aquí */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT (Usala como gustes)

## 🙏 Agradecimientos

- [PokeAPI](https://pokeapi.co/) - Por la increíble API de Pokémon
- [Tailwind CSS](https://tailwindcss.com/) - Por el framework de CSS
- [React](https://reactjs.org/) - Por la biblioteca de UI

---

**¡Desarrollado con ❤️ para la comunidad Pokémon!**
