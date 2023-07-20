import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RipPageRoutingModule } from './rip-routing.module';

import { RipPage } from './rip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RipPageRoutingModule
  ],
  declarations: [RipPage]
})
export class RipPageModule {}
