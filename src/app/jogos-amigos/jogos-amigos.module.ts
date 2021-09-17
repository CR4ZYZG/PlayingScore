import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogosAmigosPageRoutingModule } from './jogos-amigos-routing.module';

import { JogosAmigosPage } from './jogos-amigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogosAmigosPageRoutingModule
  ],
  declarations: [JogosAmigosPage]
})
export class JogosAmigosPageModule {}
