import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Torneo} from 'src/app/models/torneo';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor(private firestore:AngularFirestore) { }

  createTorneo(clash:Torneo){
    return this.firestore.collection('Torneo').add(clash);
  }

  getTorneo(){
    return this.firestore.collection('Torneo').snapshotChanges();
  }
}
