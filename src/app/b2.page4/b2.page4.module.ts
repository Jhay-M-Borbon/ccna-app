import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page4PageRoutingModule } from './b2.page4-routing.module';

import { B2Page4Page } from './b2.page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page4PageRoutingModule
  ],
  declarations: [B2Page4Page]
})
export class B2Page4PageModule {}
