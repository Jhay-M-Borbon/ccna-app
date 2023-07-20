import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OSPFIPv4PageRoutingModule } from './ospfipv4-routing.module';

import { OSPFIPv4Page } from './ospfipv4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OSPFIPv4PageRoutingModule
  ],
  declarations: [OSPFIPv4Page]
})
export class OSPFIPv4PageModule {}
