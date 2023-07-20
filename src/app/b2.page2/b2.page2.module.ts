import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page2PageRoutingModule } from './b2.page2-routing.module';

import { B2Page2Page } from './b2.page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page2PageRoutingModule
  ],
  declarations: [B2Page2Page]
})
export class B2Page2PageModule {}
