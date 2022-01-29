import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleHeroePage } from './detalle-heroe.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleHeroePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleHeroePageRoutingModule {}
