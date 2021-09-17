import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogosFavoritosPage } from './jogos-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: JogosFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosFavoritosPageRoutingModule {}
