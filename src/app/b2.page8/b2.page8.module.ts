import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page8PageRoutingModule } from './b2.page8-routing.module';

import { B2Page8Page } from './b2.page8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page8PageRoutingModule
  ],
  declarations: [B2Page8Page]
})
export class B2Page8PageModule {}
