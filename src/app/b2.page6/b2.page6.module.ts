import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page6PageRoutingModule } from './b2.page6-routing.module';

import { B2Page6Page } from './b2.page6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page6PageRoutingModule
  ],
  declarations: [B2Page6Page]
})
export class B2Page6PageModule {}
