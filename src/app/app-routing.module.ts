import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { ContactoComponent } from './feature/contacto/contacto.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [SecurityGuard]  
  },
  { 
    path: 'servicio', 
    loadChildren: () => import('./feature/servicio/servicio.module').then(mod => mod.ServicioModule) 
  },
  { 
    path: 'reserva', 
    loadChildren: () => import('./feature/reserva/reserva.module').then(mod => mod.ReservaModule) 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./feature/admin/admin.module').then(mod => mod.AdminModule) 
  },
  { 
    path: 'contacto', 
    component: ContactoComponent, 
    canActivate: [SecurityGuard]  
  },
  { 
    path: '**', 
    component: PageNotFoundComponent, 
    canActivate: [SecurityGuard]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
