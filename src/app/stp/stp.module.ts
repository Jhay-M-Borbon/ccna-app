import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { STPPageRoutingModule } from './stp-routing.module';

import { STPPage } from './stp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    STPPageRoutingModule
  ],
  declarations: [STPPage]
})
export class STPPageModule {}
