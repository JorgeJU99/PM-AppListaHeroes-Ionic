import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { UpdatePoderComponent } from '../../components/update-poder/update-poder.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [UpdatePoderComponent],
  exports: [UpdatePoderComponent],
})
export class UpdatePoderModule {}
