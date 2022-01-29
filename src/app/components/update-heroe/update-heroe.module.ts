import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { UpdateHeroeComponent } from '../../components/update-heroe/update-heroe.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [UpdateHeroeComponent],
  exports: [UpdateHeroeComponent],
})
export class UpdateHeroeModule {}
