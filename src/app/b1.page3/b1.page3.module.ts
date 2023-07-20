import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B1Page3PageRoutingModule } from './b1.page3-routing.module';

import { B1Page3Page } from './b1.page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B1Page3PageRoutingModule
  ],
  declarations: [B1Page3Page]
})
export class B1Page3PageModule {}
