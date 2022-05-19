import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEquiposPageRoutingModule } from './new-equipos-routing.module';

import { NewEquiposPage } from './new-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewEquiposPageRoutingModule
  ],
  declarations: [NewEquiposPage]
})
export class NewEquiposPageModule {}
