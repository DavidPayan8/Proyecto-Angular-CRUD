import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponent } from './post/listado/listado.component';
import { EditadoComponent } from './post/editado/editado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListadoComponent,EditadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
