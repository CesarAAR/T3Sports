
import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder } from '@angular/forms';
import { Torneo } from 'src/app/models/torneo';
import { TorneoService } from 'src/app/services/torneo.service';

@Component({
  selector: 'app-new-torneo',
  templateUrl: './new-torneo.page.html',
  styleUrls: ['./new-torneo.page.scss'],
})
export class NewTorneoPage implements OnInit {
  public myForm:FormGroup;
  public clash:Torneo;
  constructor(private clashService:TorneoService, private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      nombre:[""]
    });
    }
  
  create(){
    this.clash={
      nombre:this.myForm.controls.nombre.value,
    }
    this.clashService.createTorneo(this.clash);
  }

}
