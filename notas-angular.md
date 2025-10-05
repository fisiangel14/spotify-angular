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
let nombre: string = 'Spotify';
let edad: number = 20;

---

* Agrega fonts y iconos
* Usar dataset para datos tpo json
  de aqui saco la data q usare en la app

“compilerOptions”: {
“resolveJsonModule”: true,
“baseUrl”: “./”,
agregasmos esto para evitar pbugs con los json

---

## Branding

Agregamos los estilos en style.css
Se usaran variables css para todo el proyecto

---

## Scaffolding o estructuracion

Verificar contenido de src/app

Directorio de C:\sm\spotify-angular\src\app

03/10/2025  10:25               412 app.config.ts
03/10/2025  10:25                 0 app.css               *CSS*
03/10/2025  11:35                87 app.html             *HTML*
03/10/2025  10:25                80 app.routes.ts         *Rutas*
03/10/2025  10:25               696 app.spec.ts            *Pruebas*
03/10/2025  11:36               309 app.ts                *TypeScript*
03/10/2025  11:37    <DIR>          data

Usamos app.ts (antes era app.component.ts)

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

```
@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
```

export class App {
protected readonly title = signal('Spotify');
}

Segun me explico mi curso el @Component es un decorador q va includo a la Clase,
y realaciona la etiquera, template, estilo, y import van otros components

Aparte en la parte de clase va la logica en Typescript

Ahora vamos con el Scaffolding: o estructura
crear carpetas
src/app
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

---

## Componentes

cree 1 carpeta pages y para cada componente luego tanb los cree

* ng generate component pages/history --standalone
  ya tanbn cree las rutas con loadComponent

crear componentes de prueba
ng g c ruta/ejemplo

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

nos dira q hagamos un import, iniciamos el server y veremos nuestro " Hola mundo "

Recorda que ya sea 1 ruta u usar 1 componente dentro de otro
se debe importar antes.

---

Luego sobre la estructura
cramos el sidebar, header y  media-player en shared\components

Luego el hace lazyload pero lo haremos como loadComponent y sin modulos, asi:

```
path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
```

---

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

Luego en nuestro caso hacemos un componente Layout q tendra el sidebar y mediaplayer, q no cambian y dentro las paginas q cambian
auth, favorites, home,etc. En el laboratorio lo realiza todo dentro de home

Sobre el css del componente se usan BEM para nombrarlos
Tanbn se usan variables definidas en el TS y q se recorren con ngfor en html para armar el menu
queda asi

| Componente / Archivo | Función                                                      |
| -------------------- | ------------------------------------------------------------ |
| `layout/`            | Estructura fija (sidebar, media-player, outlet)              |
| `sidebar/`           | Navegación lateral del usuario                               |
| `media-player/`      | Controles inferiores (por ahora vacío)                       |
| `app.routes.ts`      | Define rutas con `Layout` para home y sin `Layout` para auth |
| `auth/`              | Página de login / acceso (sin sidebar ni player)             |


![alt text](image.png)


| Concepto Angular | Qué hace                          | Dónde lo usaste                  |
| ---------------- | --------------------------------- | -------------------------------- |
| `@Component`     | Define un componente              | Todos                            |
| `@Input()`       | Recibe datos del padre            | `section-generic`, `card-player` |
| `*ngFor`         | Repite elementos                  | `sidebar`, `section-generic`     |
| `*ngIf`          | Muestra / oculta contenido        | `media-player` (más adelante)    |
| `[ngClass]`      | Aplica clases dinámicas           | `sidebar`, `section-generic`     |
| `RouterOutlet`   | Carga rutas hijas                 | `layout`                         |
| `loadComponent`  | Carga componente según la ruta    | `app.routes.ts`                  |
| `OnInit`         | Se ejecuta al crear el componente | `sidebar`, `layout`              |
| `Layout`         | Estructura base persistente       | `layout.html`                    |

luego creamos 2 componente mas section-generic y card-player q usaremo en tracks
y usaremos input para poder mandar variables
de padre -> hijo, esto es la comunicacion entre componentes


Paso 27, creamos interfaces, que define 1 objeto y los campos q debe tener este
esto con el fin de que ts detecte errores
la data por el momento viene de un tracks.json, posterior sera de un API

en page de favoritos, usamos lo mismo cramos 2 componentes para el header y body
usamos lo q sabemos
HTML + CSS
Tanbn usamos el json para la data y la interface

usamo algo nuevo, odemos parasar 1 varible al ngtemplate y mandarle datos del ngcontainer

Luego vemos navegacion con Routerlink 

🔥 Perfecto, Angel — acabas de entrar en **una de las partes más potentes de Angular**:
el enrutamiento dinámico con **`[routerLink]`**.
Este paso (29) es clave porque conecta tu **sidebar** con las **páginas reales**.
Vamos a repasarlo bien para que te quede clarísimo 👇

---

## 🧭 1. Qué hace `[routerLink]`

La directiva `[routerLink]` **reemplaza los `<a href="">` tradicionales**,
pero **sin recargar la página completa** — solo cambia el componente que se muestra dentro del `<router-outlet>`.

Por ejemplo:

```html
<li *ngFor="let item of mainMenu.defaultOptions">
  <div class="list-wrapper-item" [routerLink]="item.router">
    <i [ngClass]="['uil', item.icon]"></i>
    <span class="side-bar__list list-label">{{item.name}}</span>
  </div>
</li>
```

➡️ Cada `item.router` es un **array o string** con la ruta configurada en tu `app.routes.ts`.
Cuando haces clic, Angular **renderiza el componente correspondiente** dentro del `<router-outlet>` del layout,
sin hacer una nueva petición HTTP al servidor.

---

## 🧩 2. Qué cambió en tu sidebar.ts

Agregaste algo como esto:

```ts
mainMenu = {
  defaultOptions: [
    {
      name: 'Home',
      icon: 'uil uil-estate',
      router: ['/tracks']
    },
    {
      name: 'Buscar',
      icon: 'uil uil-search',
      router: ['/history']
    },
    {
      name: 'Tu biblioteca',
      icon: 'uil uil-chart',
      router: ['/favorites']
    }
  ],
  accessLink: [
    { name: 'Crear playlist', icon: 'uil uil-plus' },
    { name: 'Canciones que te gustan', icon: 'uil uil-heart' }
  ]
};
```

✔️ Cada `router` apunta a una ruta real
✔️ Así conectas tu **Sidebar** → con las **Pages (`TracksPage`, `FavoritesPage`, etc.)**

---

## 🧠 3. Qué hace `RouterLink`

* Se comunica con el **Router interno de Angular**
* Cambia la URL sin recargar
* Le dice al `<router-outlet>` qué componente debe mostrar

---

## 🧩 4. Asegúrate de importar `RouterLink` (solo una vez por componente)

En tu `sidebar.ts`:

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar { ... }
```

Sin eso, te saldría el clásico error:

> “Can’t bind to ‘routerLink’ since it isn’t a known property…”

---

## 🧱 5. En tu layout

Asegúrate que tu `<router-outlet>` esté en el layout:

```html
<div class="layout">
  <app-side-bar></app-side-bar>
  <main class="content">
    <router-outlet></router-outlet>
  </main>
  <app-media-player></app-media-player>
</div>
```

Así cuando haces clic en “Home”, “Buscar”, “Favoritos”…
se reemplaza solo la parte dentro del `<router-outlet>` 🎯

---

## 🧩 6. Verifica tus rutas (`app.routes.ts`)

Debe lucir más o menos así:

```ts
import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { TracksPage } from './pages/tracks/tracks-page';
import { FavoritesPage } from './pages/favorites/favorite-page';
import { HistoryPage } from './pages/history/history-page';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'full' },
      { path: 'tracks', component: TracksPage },
      { path: 'favorites', component: FavoritesPage },
      { path: 'history', component: HistoryPage }
    ]
  }
];
```

---

## ✅ En resumen

| Elemento          | Función                                 |
| ----------------- | --------------------------------------- |
| `[routerLink]`    | Cambia la vista sin recargar            |
| `RouterLink`      | Directiva que maneja navegación         |
| `<router-outlet>` | Muestra el componente activo            |
| `routes.ts`       | Define qué componente carga cada ruta   |
| `Layout`          | Permite mantener sidebar y player fijos |

---

## Pipe

ng g p shared/pipe/orderList
CREATE src/app/shared/pipe/order-list-pipe.spec.ts (208 bytes)
CREATE src/app/shared/pipe/order-list-pipe.ts (235 bytes)

eventos

| Evento                          | Cuándo se dispara                                | Ejemplo                       |
| ------------------------------- | ------------------------------------------------ | ----------------------------- |
| `(click)`                       | cuando se hace clic                              | `(click)="playSong()"`        |
| `(dblclick)`                    | doble clic                                       | `(dblclick)="zoomImage()"`    |
| `(input)`                       | cada vez que se cambia el valor de un input      | `(input)="onChange($event)"`  |
| `(change)`                      | cuando un input pierde el foco y su valor cambió | `(change)="onSelect($event)"` |
| `(submit)`                      | al enviar un formulario                          | `(submit)="onSubmit()"`       |
| `(mouseenter)` / `(mouseleave)` | al entrar o salir el puntero del mouse           | `(mouseenter)="hover = true"` |
| `(keydown)` / `(keyup)`         | al presionar o soltar una tecla                  | `(keydown)="onKey($event)"`   |
| `(focus)` / `(blur)`            | cuando un input gana o pierde el foco            | `(focus)="onFocus()"`         |


| Línea                                     | Explicación                                                                                                                                                                              |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `changSort(property: string): void`       | Declara una función llamada `changSort` que recibe un **texto** (`property`) y no devuelve nada (`void`).<br>Ejemplo: cuando haces `(click)="changSort('name')"` estás pasando `'name'`. |
| `const {order} = this.optionSort;`        | Usa **desestructuración de objetos** (JS moderno).<br>Extrae la propiedad `order` de `this.optionSort`.<br>Es como si hicieras:<br>`const order = this.optionSort.order;`                |
| `this.optionSort = { ... }`               | Aquí reasignas el objeto `optionSort` con nuevos valores. Angular detectará el cambio y actualizará la vista.                                                                            |
| `property,`                               | Esto en JS moderno equivale a `property: property`. Asigna el argumento que le pasaste (`'name'`, `'album'`, etc.) al campo `property` del objeto.                                       |
| `order: order === 'asc' ? 'desc' : 'asc'` | Aquí está el truco: el **operador ternario**.<br>👉 Si el orden actual es `'asc'`, lo cambia a `'desc'`.<br>👉 Si no, lo cambia a `'asc'`.<br>Es una forma corta de escribir un `if`.    |


---


🧠 Ejemplo visual de lo que pasa:

Imagina que al iniciar:

optionSort = {property: null, order: 'asc'}


👉 Clic en “Nombre”:

changSort('name')
→ optionSort = {property: 'name', order: 'desc'}


👉 Clic otra vez en “Nombre”:

changSort('name')
→ optionSort = {property: 'name', order: 'asc'}


👉 Clic ahora en “Álbum”:

changSort('album')
→ optionSort = {property: 'album', order: 'desc'}


Así Angular sabe qué columna ordenar y en qué dirección — y el pipe (orderList) usa justo esos valores.

🧩 En resumen:

optionSort = estado del orden (qué propiedad y en qué dirección).

changSort() = cambia el estado.

Angular detecta el cambio y el pipe vuelve a ordenar el arreglo automáticamente.



Angular funciona así:

En el HTML tienes

*ngFor="let track of tracks | orderList:optionSort.property:optionSort.order"


👉 Esto le dice a Angular: “pásale la lista de tracks al pipe orderList, junto con esas dos variables”.

Cada vez que optionSort cambia (por el (click) en el encabezado), Angular vuelve a ejecutar el pipe.
El pipe compara los valores del array y devuelve una nueva versión ordenada.

Angular re-renderiza el DOM automáticamente con ese nuevo array.

Así que sí:

La lógica de ordenación vive en el pipe.

La elección de qué ordenar vive en el componente (con optionSort).

La actualización visual la hace Angular al detectar el cambio. ✅

---


## Directivas

ng g d shared/directives/ImgBroken
CREATE src/app/shared/directives/img-broken.spec.ts (208 bytes)
CREATE src/app/shared/directives/img-broken.ts (148 bytes)


Excelente pregunta 👏 — y ojo: **no exactamente**.
La directiva que tú acabas de crear (*`appImgBroken`*) **sirve para ese caso concreto** (cuando una imagen no carga),
pero **las directivas en Angular son mucho más poderosas y generales**.

Déjame explicártelo clarito 👇

---

### 🧱 ¿Qué es una directiva en Angular?

Una **directiva** es una “instrucción” que **le agrega comportamiento o apariencia adicional a un elemento HTML**
sin tener que crear un componente nuevo.

Piensa que un **componente** = HTML + lógica + estilo
mientras que una **directiva** = solo **lógica**, sin plantilla.

---

### 🧩 Tipos de directivas

#### 1️⃣ **Estructurales**

Cambian la estructura del DOM (agregan o quitan elementos del HTML).
Ejemplos clásicos:

* `*ngIf` → muestra u oculta algo
* `*ngFor` → repite un elemento
* `*ngSwitch` → muestra una de varias opciones

> Estas usan el `*` porque modifican directamente el DOM (estructuralmente).

---

#### 2️⃣ **De atributo**

Modifican **la apariencia o el comportamiento** de un elemento que ya existe.
Tu directiva `appImgBroken` es de este tipo 💪

Otros ejemplos:

* `[ngClass]` → cambia clases CSS dinámicamente
* `[ngStyle]` → aplica estilos dinámicos
* `[routerLink]` → convierte un `<a>` normal en un enlace de Angular
* Tu `[appImgBroken]` → detecta errores en `<img>` y reemplaza la fuente

---

### 💡 En resumen

| Tipo de directiva | Ejemplo                       | Qué hace                                                                |
| ----------------- | ----------------------------- | ----------------------------------------------------------------------- |
| Estructural       | `*ngIf`, `*ngFor`             | Añade o quita elementos del DOM                                         |
| De atributo       | `[ngClass]`, `[appImgBroken]` | Modifica o extiende el comportamiento o estilo de un elemento existente |

---

👉 Así que tu caso (imagen rota) es **una aplicación práctica de una directiva de atributo**,
pero podrías crear directivas para *casi cualquier cosa*:
por ejemplo, detectar cuando un botón hace doble clic,
cambiar el color del texto al pasar el mouse,
o interceptar eventos globales del teclado.

---

## Formulario Reactivos

🎯 ¡Excelente resumen!
Estás entendiendo **muy bien** cómo funcionan los **formularios reactivos** en Angular.
Vamos a explicarlo despacio, para que veas **cómo encaja cada pieza** y cuándo se ejecuta cada parte.

---

## 🧠 1️⃣ Qué es un Formulario Reactivo

En Angular hay **dos formas** de manejar formularios:

* **Template-driven** → más simple, con directivas en el HTML (como en AngularJS).
* **Reactive Forms** → más potente, la lógica del formulario vive en el **TypeScript** y se vincula (bind) al HTML.

👉 En el laboratorio estás usando la segunda: **Formularios Reactivos**, que se basan en:

* **FormGroup** → el formulario entero (agrupa los campos)
* **FormControl** → cada campo individual
* **Validators** → reglas para los campos

---

## ⚙️ 2️⃣ Flujo completo de tu formulario

### 🧩 En tu `login-page.ts`

```ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });
  }

  sendLogin(): void {
    if (this.formLogin.valid) {
      console.log('Datos del formulario:', this.formLogin.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
```

---

### 💻 En tu `login-page.html`

```html
<form [formGroup]="formLogin" (ngSubmit)="sendLogin()" class="login-auth-form">
  <input
    formControlName="email"
    type="text"
    placeholder="Correo o usuario"
    class="form-input"
    [class.error]="formLogin.get('email')?.invalid && formLogin.get('email')?.touched"
    [class.success]="formLogin.get('email')?.valid"
  />

  <input
    formControlName="password"
    type="password"
    placeholder="Contraseña"
    class="form-input"
    [class.error]="formLogin.get('password')?.invalid && formLogin.get('password')?.touched"
    [class.success]="formLogin.get('password')?.valid"
  />

  <button type="submit" [disabled]="formLogin.invalid">
    Iniciar sesión
  </button>
</form>
```

---

### 🎨 En tu `login-page.css`

```css
.login-auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 350px;
  margin: 4rem auto;
}

.form-input {
  padding: 0.75rem;
  border: 2px solid #444;
  border-radius: 6px;
  background: #1e1e1e;
  color: white;
}

.form-input.error {
  border-color: #e74c3c;
}

.form-input.success {
  border-color: #2ecc71;
}

button {
  padding: 0.75rem;
  border: none;
  background: #1db954;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

button:disabled {
  background: #555;
  cursor: not-allowed;
}
```

---

## 🧩 3️⃣ Cuándo se activan los estilos de error o éxito

* `.error` aparece cuando:

  ```ts
  formLogin.get('email')?.invalid && formLogin.get('email')?.touched
  ```

  Es decir: el campo **es inválido y el usuario ya lo tocó**.

* `.success` aparece cuando:

  ```ts
  formLogin.get('email')?.valid
  ```

  Es decir: el campo **cumple las reglas** del validador.

👉 Así, los estilos cambian automáticamente según el estado **reactivo** del formulario.

---

## 🚦 4️⃣ Qué pasa al presionar “Iniciar sesión”

Cuando das clic al botón:

1. Angular evalúa los `Validators`.
2. Si el formulario **no es válido**, el botón está `disabled`.
3. Si es válido, ejecuta el método `(ngSubmit)="sendLogin()"`.
4. En `sendLogin()` tú puedes:

   * Mostrar mensajes de error.
   * Enviar los datos a una API.
   * Limpiar el formulario, etc.

---

¿Quieres que te muestre el **paso siguiente del lab (validaciones visuales)** con los mensajes tipo
“Correo inválido” o “Contraseña muy corta”?
Así completamos la parte 2 del paso 32.




.login-auth-page {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-4);
    color: var(--color-3);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

.login-auth-page .login-auth-wrapper {
    width: 25%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.login-auth-page .login-social-zone {
    display: flex;
    flex-direction: column;
    gap: .75rem;
    width: 100%;
}

.login-auth-page .social-btn {
    border: 0;
    padding: .5rem 2rem;
    width: 100%;
    font-size: var(--font-size-2);
    border-radius: var(--border-radius-2);
    box-shadow: var(--shadow-1);
    border: solid 1px var(--color-4);
    background-color: var(--color-4);
    font-weight: 600;
}

.login-auth-page .login-social-zone .social-btn.btn-fb {
    background-color: #3A61B3;
    color: var(--color-4);
}

.login-auth-page .login-social-zone .social-btn.btn-apple {
    background-color: #1a1a1a;
    color: var(--color-4);
}

.login-auth-page .separator {
    width: 100%;
    margin: 2rem 0;
    border-bottom: solid 1px var(--color-2);
    opacity: .2;
}

.login-auth-page .login-auth-form {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
}

.login-auth-page .login-auth-form .form-group {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

.login-auth-page .login-auth-form .form-group input {
    border: solid 1px #e7e7e7;
    border-radius: var(--border-radius-1);
    height: 30px;
    padding: .25rem .5rem;
    font-size: 90%;
}

.login-auth-page .login-auth-form label {
    padding-bottom: .35rem;
    font-weight: 600;
    display: inline-block;
    margin: 0;
}

.login-auth-page .login-auth-form .form-steps {
    padding: .5rem 0;
}

.login-auth-page .login-auth-form .form-steps .link {
    color: var(--color-2);
    font-size: 85%;
    font-weight: 500;
    text-decoration: underline;
}

.login-auth-page .login-auth-form .form-steps .link:hover {
    color: var(--color-1);
}

.login-auth-page .login-auth-form .form-action .login {
    color: var(--color-4);
    margin: 1rem 0;
    background-color: var(--color-1);
}

input.ng-invalid.ng-touched {
    border: solid 2px red !important
}

input.ng-valid.ng-touched {
    border: solid 2px rgb(21, 255, 0) !important
}

---

## Servicios

ng g s pages/auth/services/Auth
CREATE src/app/pages/auth/services/auth.spec.ts (327 bytes)
CREATE src/app/pages/auth/services/auth.ts (116 bytes)
