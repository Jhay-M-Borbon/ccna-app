import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page9PageRoutingModule } from './b2.page9-routing.module';

import { B2Page9Page } from './b2.page9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page9PageRoutingModule
  ],
  declarations: [B2Page9Page]
})
export class B2Page9PageModule {}
