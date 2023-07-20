import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B1Page1PageRoutingModule } from './b1.page1-routing.module';

import { B1Page1Page } from './b1.page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B1Page1PageRoutingModule
  ],
  declarations: [B1Page1Page]
})
export class B1Page1PageModule {}
