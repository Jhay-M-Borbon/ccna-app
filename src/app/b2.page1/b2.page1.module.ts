import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page1PageRoutingModule } from './b2.page1-routing.module';

import { B2Page1Page } from './b2.page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page1PageRoutingModule
  ],
  declarations: [B2Page1Page]
})
export class B2Page1PageModule {}
