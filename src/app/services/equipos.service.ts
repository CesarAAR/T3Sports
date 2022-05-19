import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Equipos } from '../models/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private firestore:AngularFirestore) { }

  createEquipos(team:Equipos){
    return this.firestore.collection('Equipos').add(team);
  }

  getEquipos(){
    return this.firestore.collection('Equipos').snapshotChanges();
  }
}
