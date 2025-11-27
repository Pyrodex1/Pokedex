# 🏗️ Arquitectura del Proyecto

## 📁 Estructura Modular

```
pokedex/
├── index.html                      # Punto de entrada principal
├── package.json                    # Dependencias y scripts
├── README.md                       # Documentación principal
├── src/                            # Código fuente
│   ├── components/                 # Componentes React
│   │   ├── App.js                  # Componente principal
│   │   └── PokemonCard.js          # Componente de tarjeta
│   ├── styles/                     # Estilos modulares
│   │   ├── main.css                # Estilos principales
│   │   ├── glassmorphism.css       # Efectos de vidrio
│   │   └── animations.css          # Animaciones CSS
│   ├── utils/                      # Utilidades y helpers
│   │   ├── constants.js            # Constantes de la app
│   │   ├── pokemonHelpers.js       # Funciones utilitarias
│   │   └── browser-utils.js        # Utilidades para navegador
│   └── config/                     # Configuraciones
│       ├── tailwind.config.js      # Config completa de Tailwind
│       └── tailwind-browser.js     # Config para CDN
├── assets/                         # Recursos estáticos (futuro)
└── docs/                          # Documentación técnica
    └── ARCHITECTURE.md             # Este archivo
```

## 🧩 Separación de Responsabilidades

### **Components** (`src/components/`)
- **App.js**: Componente principal, maneja estado global y lógica de la aplicación
- **PokemonCard.js**: Componente de presentación para mostrar datos del Pokémon

### **Styles** (`src/styles/`)
- **main.css**: Variables CSS, reset, utilidades globales
- **glassmorphism.css**: Efectos de vidrio para modo oscuro
- **animations.css**: Keyframes y animaciones CSS

### **Utils** (`src/utils/`)
- **constants.js**: Constantes de la aplicación (colores, URLs, etc.)
- **pokemonHelpers.js**: Funciones utilitarias para Pokémon
- **browser-utils.js**: Adaptación para entorno de navegador

### **Config** (`src/config/`)
- **tailwind.config.js**: Configuración completa de Tailwind
- **tailwind-browser.js**: Configuración para CDN de Tailwind

## 🔄 Flujo de Datos

```
index.html
    ↓
browser-utils.js (Utilidades globales)
    ↓
App.js (Estado principal)
    ↓
PokemonCard.js (Presentación)
```

## 🎨 Sistema de Estilos

### **Cascada CSS**
1. **Tailwind CSS** (CDN) - Framework base
2. **main.css** - Variables y utilidades
3. **glassmorphism.css** - Efectos específicos
4. **animations.css** - Animaciones

### **Colores Temáticos**
- Paleta Dark Mode para tipos de Pokémon
- Variables CSS para consistencia
- Clases utilitarias reutilizables

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Estrategia**
- Mobile-first approach
- Grid system flexible
- Componentes adaptativos

## 🚀 Performance

### **Optimizaciones**
- CSS modular para mejor caching
- Utilidades separadas para reutilización
- Animaciones optimizadas con CSS

### **Carga**
1. HTML base
2. Tailwind CSS (CDN)
3. Configuración personalizada
4. Estilos modulares
5. Utilidades JavaScript
6. Componentes React

## 🔧 Mantenimiento

### **Ventajas de la Estructura Modular**
- ✅ **Separación clara** de responsabilidades
- ✅ **Reutilización** de código
- ✅ **Fácil mantenimiento** y debugging
- ✅ **Escalabilidad** para nuevas features
- ✅ **Testing** más sencillo

### **Convenciones**
- Nombres descriptivos en español para comentarios
- Estructura de carpetas semántica
- Separación de lógica y presentación
- Documentación inline en código
