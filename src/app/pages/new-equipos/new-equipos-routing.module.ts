import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEquiposPage } from './new-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: NewEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewEquiposPageRoutingModule {}
