import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { IonicModule } from '@ionic/angular';

import { AddHeroePageRoutingModule } from './add-heroe-routing.module';

import { AddHeroePage } from './add-heroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    IonicModule,
    AddHeroePageRoutingModule,
  ],
  declarations: [AddHeroePage],
})
export class AddHeroePageModule {}
