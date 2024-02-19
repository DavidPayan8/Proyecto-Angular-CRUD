# PR4. CRUD Blog

Este proyecto consiste en el desarrollo de un módulo CRUD para las publicaciones de un blog utilizando Angular. Se implementarán funcionalidades de lista, vista, inserción, actualización y eliminación de los post. Para simplificar el backend, se utilizará la API del servicio web JSONPlaceholder.

## Inicio del proyecto

Para comenzar, sigue los siguientes pasos:

1. Crea un nuevo proyecto Angular en un repositorio GitHub llamado "blog". Trabajarás en modo standalone.

2. Añade Bootstrap (versión 5) a través de sus CDN. Asegúrate de que el alcance de Bootstrap 5 sea global para todo el proyecto.

3. Crea componentes para cada acción del CRUD (listado, vista individual, creación y actualización) y englóbalos en una carpeta llamada "post".

4. Configura las rutas del proyecto en el archivo `app.routes.ts`.

5. Actualiza el archivo `app.config.ts` para añadir el servicio `provideHttpClient`.

## Modelo de datos

Crea una interfaz para los objetos principales del proyecto, que son los posts. La interfaz debe ubicarse dentro de la carpeta "post" y llamarse `post.ts`. El objeto post tendrá la siguiente estructura:

```typescript
interface Post {
    id: number;
    title: string;
    body: string;
}
