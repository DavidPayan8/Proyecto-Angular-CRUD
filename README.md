# PR4. CRUD Blog

Este proyecto consiste en el desarrollo de un módulo CRUD para las publicaciones de un blog utilizando Angular. Se implementarán funcionalidades de lista, vista, inserción, actualización y eliminación de los post. Para simplificar el backend, se utilizará la API del servicio web JSONPlaceholder. Se hara con de la forma standalone, para evitar el uso de nuevos modulos.

## Inicio del proyecto

1. Se crea componentes para cada acción del CRUD (listado, vista individual, creación y actualización) y se insertan en una carpeta llamada "post".

2. Configurar las rutas del proyecto en el archivo `app.routes.ts`.

3. Actualizar el archivo `app.config.ts` para añadir el servicio `provideHttpClient`.

## Modelo de datos

Crear una interfaz para los posts. La interfaz debe ubicarse dentro de la carpeta "post" y llamarse `post.ts`.

```typescript
interface Post {
    id: number;
    title: string;
    body: string;
}
```
## Configuración del servicio de conexión a la base de datos

1. Generar un servicio llamado `post` con el siguiente codigo:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post'; // Asegúrate de importar la interfaz de Post si la has definido en otro archivo

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = 'https://jsonplaceholder.typicode.com'; // URL de la API de JSONPlaceholder

  // Opciones de encabezado HTTP
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  // Método para obtener todos los posts
  getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/posts/`);
  }

  // Método para crear un nuevo post
  create(post: Post): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/posts/`, JSON.stringify(post), this.httpOptions);
  }

  // Método para buscar un post por su ID
  find(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/posts/${id}`);
  }

  // Método para actualizar un post
  update(id: number, post: Post): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/posts/${id}`, JSON.stringify(post), this.httpOptions);
  }

  // Método para eliminar un post
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/posts/${id}`, this.httpOptions);
  }
}
```
## Creacion de los componentes CRUD.
1.Listado de posts, el cual mostrara el resultado de los posts.

```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  posts: Post[] = [];
  
  constructor(public postService: PostService) { }
      
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
      
  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Eliminado');
    })
  }
}
```
2.Componente de creacion de un nuevo Post
```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './creacion.component.html',
  styleUrl: './creacion.component.css'
})
export class CreacionComponent {
  form!: FormGroup;
      
  constructor(
    public postService: PostService,
    private router: Router
  ) { }
      
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
      
  get f(){
    return this.form.controls;
  }
      
  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('Creado');
         this.router.navigateByUrl('post/listado');
    })
  }
}
```
3.Vista individual de un post el cual recoge el id del post que se haya seleccionado y se busca entre todos los objetos Post, esta es su vista en Html.
```Html
<div class="container"> 
        
    <form [formGroup]="form" (ngSubmit)="submit()">
  
        <div class="form-group">
            <label for="title">Titulo:</label>
            <input 
                formControlName="title"
                id="title" 
                type="text" 
                class="form-control">
            <div *ngIf="f['title'].touched && f['title'].invalid" class="alert alert-danger">
                <div *ngIf="f['title'].errors && f['title'].errors['required']">Campo obligatorio</div>
            </div>
        </div>
  
        <div class="form-group">
            <label for="body">Descripcion</label>
            <textarea 
                formControlName="body"
                id="body" 
                type="text" 
                class="form-control">
            </textarea>
            <div *ngIf="f['body'].touched && f['body'].invalid" class="alert alert-danger">
                <div *ngIf="f['body'].errors && f['body'].errors['required']">Campo obligatorios</div>
            </div>
        </div>
  
        <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Crear</button>
        <a href="#" routerLink="/post/listado" class="btn btn-danger">Cancelar</a>
    </form>
</div>
```
4.El borrado de un post se hace llamando directamente a la funcion que hace este cometido, en el archivo `post.service.ts`
