import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicroutingPageRoutingModule } from './dynamicrouting-routing.module';

import { DynamicroutingPage } from './dynamicrouting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicroutingPageRoutingModule
  ],
  declarations: [DynamicroutingPage]
})
export class DynamicroutingPageModule {}
