import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page7PageRoutingModule } from './b2.page7-routing.module';

import { B2Page7Page } from './b2.page7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page7PageRoutingModule
  ],
  declarations: [B2Page7Page]
})
export class B2Page7PageModule {}
