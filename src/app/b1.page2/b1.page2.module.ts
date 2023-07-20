import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B1Page2PageRoutingModule } from './b1.page2-routing.module';

import { B1Page2Page } from './b1.page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B1Page2PageRoutingModule
  ],
  declarations: [B1Page2Page]
})
export class B1Page2PageModule {}
