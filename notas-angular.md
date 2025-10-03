# Labo angular - Clone de Spotify

## Instalacion de software

1. Instalar node
   - `node -v`
   - npm -v

Instalar angular
npm install -g @angular/cli
ng v  //version de angular

---

## Creacion de proyecto

ng new name-aplicacion  //Para crear 1 proyecto

ng new Spotify --routing --style=css   //esta opcion es para q escoga  css y routing pero igual hace otras preguntas de zone y ia, etc

ng serve   //Para iniciar el servidor de desarrollo

Entramos a la ruta q nos indica
http://localhost:4200/  y veremos la pagina de inicio

Para cambiar de puerto
ng s --port=4100

Para compartir con cualquier host, hay q ver la ip de la maquina donde se despliega
ng s --host=0.0.0.0 --port=4100

---

//Tipos de datos en Typescript

Verificar contenido de src/app

Directorio de D:\proyectos-2025\sm\Spotify\src\app

14/09/2025  18:35    <DIR>          .
14/09/2025  18:35    <DIR>          ..
14/09/2025  18:35               412 app.config.ts
14/09/2025  18:35                 0 app.css
14/09/2025  18:35            20,464 app.html
14/09/2025  18:35                80 app.routes.ts
14/09/2025  18:35               688 app.spec.ts
14/09/2025  18:35               301 app.ts

Usamos app.ts (antes era app.component.ts)

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
selector: 'app-root',
imports: [RouterOutlet],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
protected readonly title = signal('Spotify');
}

Segun me explico mi curso el @Component es un decorador q va includo a la Clase,
y realaciona la etiquera, temaplte, estilo, y import van otros components

Aparte en la parte de clase va la logica en Typescript

Agrega fonts y iconos

Usar dataset para datos tpo json
de aqui saco la data q usare en la app

“compilerOptions”: {
“resolveJsonModule”: true,
“baseUrl”: “./”,
agregasmos esto para evitar pbugs con los json

Branding
Agregamos los estilos en style.css
----------------------------------

Ahora vamos con el Scaffolding: o estructura
crear carpetas
-core
-modules
-shared
-data

“En Angular actual (standalone) ya no se utilizan NgModules,
por lo que la funcionalidad modular se implementa directamente con componentes independientes
y lazy loading con loadComponent.”

Borrar todo el contenido generado por angular en app.html y dejar solo
<router-outlet />

esta realcionado con app.route.ts //ahi van las rutas
index.html = la puerta de entrada (tiene <app-root>).

main.ts = el motor que arranca Angular y dice “pinta App en <app-root>”.

app.html = lo que realmente ves en pantalla (el contenedor principal de la app).

cree 1 carpeta pages y para cada componente luego tanb los cree
ng generate component pages/history --standalone
ya tanbn cree las rutas con loadComponent

crear componentes de prueba
ng g c Example

ng g c pages/home/home-page --standalone --inline-style=false --inline-template=false --flat
ng g c pages/favorites/favorite-page --standalone --inline-style=false --inline-template=false --flat
ng g c pages/history/history-page --standalone --inline-style=false --inline-template=false --flat
ng g c pages/tracks/tracks-page --standalone --inline-style=false --inline-template=false --flat

para q no cree otra carpeta con el mismo nombre

Directorio de D:\proyectos-2025\sm\Spotify\src\app\example

15/09/2025  11:18    <DIR>          .
15/09/2025  11:18    <DIR>          ..
15/09/2025  11:18                 0 example.css                 //CSS
15/09/2025  11:18                23 example.html                //HTML template
15/09/2025  11:18               558 example.spec.ts             //pruebas unitarias
15/09/2025  11:18               200 example.ts                  //Logica en TS

Editamos el html para mostrar un mensaje

y luego en app.route.ts agregamos la ruta
{
path: '',
component: Example
}

nos dira q hagamos un import, iniciamos el server y veremos nuestro " Hola mundo

Luego sobre la estructura
cramos el sidebar. header player en core
ya no cramos shared
y los llamamos desde otro layout

Luego el hace lazyload pero lo haremos como loadComponent y sin modulos
el crea 1 modulo q en si esta vacio y luego dentro de este 1 componente

podemos agregar alias para las rutas

"baseUrl": "./src",
"paths": {
"@core/*": ["app/core/*"],
"@pages/*": ["app/pages/*"],
"@shared/*": ["app/shared/*"],
"@layout/*": ["app/layout/*"],
"@data/*": ["app/data/*"]
},en tsconfig.app.json

y cambiamos los import asi

import { Sidebar } from '@core/sidebar/sidebar';  //alias

[20251003_105022_Labo-DW.txt](assets/20251003_105022_Labo-DW.txt)

Notas Angular (Clone Spotify)

## Comandos útiles

- `ng serve` → levanta el server en localhost:4200
- `ng g c componente --standalone` → crea componente standalone

## Conceptos

- **@Input()**: sirve para pasar datos de un componente padre a un hijo.
- **ngFor**: directiva para recorrer arrays en el template.

## Tips

- Usar `ngClass` para manejar estilos dinámicos.
- Si quiero usar rutas necesito `--routing` al crear el proyecto.

