import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

interface Player {
  Id: number;
  Name: string;
  Score: number
}

@Component({
  selector: 'app-jogar',
  templateUrl: './jogar.page.html',
  styleUrls: ['./jogar.page.scss'],
})

export class JogarPage implements OnInit {

  playerCollectionRef: AngularFirestoreCollection<Player>;
  players: Observable<Player[]>;

  JOGADORES= [
    {id:0, Name:"alguem", Score: 0},
    {id:0, Name:"alguem", Score: 0},
    {id:0, Name:"alguem", Score: 0},
    {id:0, Name:"alguem", Score: 0},
    {id:0, Name:"alguem", Score: 0},
    
    
  ];
  
  QtdJogadores: number;
  Jogadores: string [] = [];

  constructor(public afAuth: AngularFireAuth, afs: AngularFirestore) {
    this.QtdJogadores = 0;

    afAuth.auth.signInAnonymously();
    this.playerCollectionRef = afs.collection('players');
    this.players = this.playerCollectionRef.valueChanges();
  }

  updateTotalPlayers(value) {
    this.QtdJogadores = value;
    this.Jogadores = [];
    for (let i = 0; i <this.QtdJogadores; i++) {
      this.Jogadores[i] = this.JOGADORES[i].Name;
      console.log(this.JOGADORES[i].Name);
    }
  }

  ngOnInit() {}
}