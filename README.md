Tech POS es una aplicación web desarrollada con Next.js y TypeScript que funciona como
un catálogo y punto de venta de productos tecnológicos.

El sistema permite:
● Visualizar productos tecnológicos.
● Filtrar productos por categorías.
● Consultar detalles individuales.
● Agregar productos a un carrito.
● Calcular el total de compra.
● Mantener el carrito guardado usando localStorage.


El proyecto fue desarrollado sin backend, sin autenticación y sin base de datos, utilizando
únicamente datos locales.
Tecnologías Utilizadas

-Next.js Framework principal
-React Biblioteca para interfaces
-TypeScript Tipado estático
-Tailwind CSS Framework de estilos
-localStorage Persistencia del carrito
-Lucide React Iconografía

Requisitos Previos
Antes de ejecutar el proyecto es necesario instalar:
Node.js
Versión recomendada:
Node.js v18 o superior
Descarga oficial:
Node.js oficial

Instalación del Proyecto
1. Clonar o descargar el proyecto
Si utilizas Git:
git clone <url-del-repositorio>
O descarga el proyecto manualmente.
2. Abrir el proyecto
Abrir la carpeta del proyecto en Visual Studio Code.
3. Instalar dependencias
Abrir una terminal dentro del proyecto y ejecutar:
npm install
Esto instalará todas las dependencias necesarias.
Dependencias Principales
Instalar Lucide React
npm install lucide-react

Instalar Tailwind CSS
npm install -D tailwindcss@3 postcss autoprefixer

Generar configuración de Tailwind
npx tailwindcss init -p

Configuración de Tailwind
tailwind.config.js
contenido:

/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./app/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}


globals.css
Ubicación:
app/globals.css
Contenido:

@tailwind base;
@tailwind components;
@tailwind utilities;
body {
margin: 0;
padding: 0;
font-family: Arial, Helvetica, sans-serif;
}
* {
box-sizing: border-box;
}

Configuración de Imágenes Externas
El proyecto utiliza imágenes desde internet.

next.config.ts
conteido:

import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 'images.unsplash.com'
}
]
}
}
export default nextConfig


Proceso de ejecución del proyecto:
● Entorno de desarrollo: Abrir una terminal en la carpeta raíz del proyecto.
● Compilación inicial: Ejecutar npm run dev para iniciar el servidor de desarrollo.
● Acceso: Abrir localhost:3000 en su navegador preferido.
● Validación: Confirmar que la interfaz de Tech POS se carga correctamente