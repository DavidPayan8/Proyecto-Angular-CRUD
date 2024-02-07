import { Routes } from '@angular/router';
import { VistaIndividualComponent } from './post/vista-individual/vista-individual.component';
import { ListadoComponent } from './post/listado/listado.component';
import { CreacionComponent } from './post/creacion/creacion.component';
import { ActualizarComponent } from './post/actualizar/actualizar.component';


export const routes: Routes = [
    { path: '', redirectTo: '/post', pathMatch: 'full' },
    { path: 'post', component: ListadoComponent },
    { path: 'posts/nuevo', component: CreacionComponent },
    { path: 'posts/:id', component: VistaIndividualComponent },
    { path: 'posts/:id/editar', component: ActualizarComponent }
  ];
