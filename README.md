# Sitio Web Institucional de Tracto - Next.js

Este proyecto es un sitio web institucional desarrollado con Next.js para Tracto.

## Levantar el proyecto localmente en modo de desarrollo

Antes de comenzar, asegúrate de tener Node.js y npm instalados en tu máquina.

1. Clona este repositorio:

   ```bash
   git clone https://gitlab.hq3.cast.com.py/dev/web/tracto-static.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tracto-static
   ```

3. Instala las dependencias:

   ```bash
    npm install
    ```

4. Copia el archivo .env.template en el mismo directorio y renombra la copia a .env:

   ```bash
   cp .env.template .env
   ```

5. Agrega los valores correspondientes a las variables del .env. Solicita los datos de las credenciales necesarias a los encargados del proyecto. No olvides resguardar estos datos ya que son bastante sensibles.

6. Para iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

6. Antes de comenzar a desarrollar, lee la [Guía de Contribución](https://gitlab.hq3.cast.com.py/dev/web/tracto-static/-/blob/main/CONTRIBUTING.md) donde se detallan las convenciones de código y las buenas prácticas.

## Construir el proyecto

1. Para construir el proyecto:

   ```bash
   npm run build
   ```

2. Para iniciar el servidor de producción:

   ```bash
    npm run start
    ```


