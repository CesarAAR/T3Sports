import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-torneo',
    loadChildren: () => import('./pages/new-torneo/new-torneo.module').then( m => m.NewTorneoPageModule)
  },
  {
    path: 'new-equipos',
    loadChildren: () => import('./pages/new-equipos/new-equipos.module').then( m => m.NewEquiposPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
