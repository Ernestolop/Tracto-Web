# Guía de Contribución - Sitio Web de Tracto

¡Gracias por contribuir al desarrollo del Sitio Web de Tracto! Antes de enviar tu contribución, por favor, toma un momento para revisar las siguientes pautas.

## Estilos

En nuestro proyecto, empleamos dos metodologías CSS: utilidades y BEM (Block Element Modifier). El archivo `global.css` está dedicado a la normalización, definición de variables y utilidades. Por otro lado, en `index.css` se escriben los componentes BEM. Adherimos al enfoque "mobile first" para asegurar una experiencia de usuario óptima en dispositivos móviles.

## SEO

Es esencial que cada archivo JSX "Page.jsx" incluya metadatos tanto para motores de búsqueda como para redes sociales. Asegúrate de proporcionar información relevante y descriptiva para mejorar la visibilidad y compartibilidad del contenido.


## Exportación de Componentes

Los componentes deben ser retornados como funciones de flecha. 

Para exportar componentes, utilizamos un archivo de barril llamado `index.js`. Este archivo debe exportar todos los componentes que se encuentran en el directorio. Por ejemplo:

```js
export * from './Component1';
export * from './Component2';
export * from './Component3';
```

Esto permite importar los componentes de la siguiente manera:

```jsx
import { Component1, Component2, Component3 } from './components';
```

Para facilitar la exportación de componentes en el archivo de barril, se recomienda exportar los componentes de la siguiente manera:

```jsx
export const Component1 = () => {
  // ...
};
```

## Estructura de Carpetas
Mantén la estructura de carpetas organizada y coherente. Agrupa archivos relacionados en directorios y nombra las carpetas de manera descriptiva.

## Lighthouse
Utiliza Lighthouse para evaluar el rendimiento, la accesibilidad, el SEO y las mejores prácticas de tu código. Puedes utilizar la extensión de Chrome y seguir las recomendaciones brindadas por la herramienta.     