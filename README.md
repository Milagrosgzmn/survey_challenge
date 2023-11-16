# Survey-Challenge

## Descripción
Este proyecto es una solución para un desafío en el que se requería renderizar un formulario dinámico a partir de un archivo JSON. La solución implica el uso de dos servidores: uno para servir como una API que proporciona datos desde el archivo JSON y otro para responder a las solicitudes del frontend.

## Instalación
Siga estos pasos para configurar y ejecutar el proyecto:

## Clonar el repositorio:

    git clone <URL_DEL_REPOSITORIO>


## Instalar las dependencias del back:
    cd server
    npm install

## Iniciar los servidores:
    npm start

## Instalar las dependencias del frontend:
    cd ../client
    npm install

## Iniciar el frontend:
    npm run dev

## Uso
Una vez que ambos servidores estén en funcionamiento, puede acceder al formulario dinámico en su navegador mediante la URL proporcionada por el servidor frontend. El formulario se renderizará utilizando los datos del archivo JSON proporcionados por el servidor de la API.


## Tecnologías Utilizadas
* Node.js para el backend.
* Express.js para la creación del servidor de la API.
* React.js para el frontend.
