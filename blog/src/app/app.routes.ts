import { Routes } from '@angular/router';
  
import { ListadoComponent } from './post/listado/listado.component';
import { VistaIndividualComponent } from './post/vista-individual/vista-individual.component';
import { CreacionComponent } from './post/creacion/creacion.component';
import { EditadoComponent } from './post/editado/editado.component';
  
export const routes: Routes = [
      { path: '', redirectTo: 'post/listado', pathMatch: 'full'},
      { path: 'post/listado', component: ListadoComponent },
      { path: 'post/:postId/vista', component: VistaIndividualComponent },
      { path: 'post/crear', component: CreacionComponent },
      { path: 'post/:postId/editar', component: EditadoComponent } 
  ];
