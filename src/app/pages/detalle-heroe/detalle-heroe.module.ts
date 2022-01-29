import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IonicModule } from '@ionic/angular';

import { DetalleHeroePageRoutingModule } from './detalle-heroe-routing.module';

import { DetalleHeroePage } from './detalle-heroe.page';

import { UpdateHeroeModule } from '../../components/update-heroe/update-heroe.module';
import { UpdatePoderModule } from '../../components/update-poder/update-poder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    IonicModule,
    DetalleHeroePageRoutingModule,
    UpdateHeroeModule,
    UpdatePoderModule,
  ],
  declarations: [DetalleHeroePage],
})
export class DetalleHeroePageModule {}
