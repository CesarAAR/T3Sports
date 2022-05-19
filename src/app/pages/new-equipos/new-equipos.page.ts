import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder } from '@angular/forms';
import { Equipos } from 'src/app/models/equipos';
import { EquiposService } from 'src/app/services/equipos.service';
import {Router,RouterModule} from '@angular/router';

@Component({
  selector: 'app-new-equipos',
  templateUrl: './new-equipos.page.html',
  styleUrls: ['./new-equipos.page.scss'],
})
export class NewEquiposPage implements OnInit {

  public myForm2:FormGroup;
  public team:Equipos;
  constructor(private teamService:EquiposService,private fb2:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.myForm2 = this.fb2.group({
      Nombre_Equip:[""],
      Responsable:[""],
      Correo:[""],
      Telefono:[""]
    });
  }
  createTM(){
    this.team={
      Nombre_Equip:this.myForm2.controls.Nombre_Equip.value,
      Responsable:this.myForm2.controls.Responsable.value,
      Correo:this.myForm2.controls.Correo.value,
      Telefono:this.myForm2.controls.Telefono.value,
    }
    this.teamService.createEquipos(this.team)
    this.router.navigateByUrl('/home')
  }

  onSalir(){
    this.router.navigateByUrl('/home')
  }

}
