import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogosAmigosPage } from './jogos-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: JogosAmigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosAmigosPageRoutingModule {}
