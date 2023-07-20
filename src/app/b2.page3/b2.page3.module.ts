import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page3PageRoutingModule } from './b2.page3-routing.module';

import { B2Page3Page } from './b2.page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page3PageRoutingModule
  ],
  declarations: [B2Page3Page]
})
export class B2Page3PageModule {}
