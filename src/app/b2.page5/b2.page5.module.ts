import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2Page5PageRoutingModule } from './b2.page5-routing.module';

import { B2Page5Page } from './b2.page5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2Page5PageRoutingModule
  ],
  declarations: [B2Page5Page]
})
export class B2Page5PageModule {}
