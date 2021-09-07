import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcadorPageRoutingModule } from './marcador-routing.module';

import { MarcadorPage } from './marcador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcadorPageRoutingModule
  ],
  declarations: [MarcadorPage]
})
export class MarcadorPageModule {}
