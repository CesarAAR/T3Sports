import { Component } from '@angular/core';
import { EquiposService } from '../services/equipos.service';
import { Equipos } from '../models/equipos';
import {Router,RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public teams:Equipos[];
  constructor(private service:EquiposService,private router:Router) {
    this.service.getEquipos().subscribe(data=>{
      this.teams = data.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Equipos
        };
      })
    });
  }
  onCrearTeam(){
    this.router.navigateByUrl('/new-equipos')
  }
}
