import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcadorPage } from './marcador.page';

const routes: Routes = [
  {
    path: '',
    component: MarcadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcadorPageRoutingModule {}
