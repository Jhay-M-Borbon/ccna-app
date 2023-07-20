import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaticroutingPageRoutingModule } from './staticrouting-routing.module';

import { StaticroutingPage } from './staticrouting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaticroutingPageRoutingModule
  ],
  declarations: [StaticroutingPage]
})
export class StaticroutingPageModule {}
