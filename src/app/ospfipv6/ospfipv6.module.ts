import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OSPFIPv6PageRoutingModule } from './ospfipv6-routing.module';

import { OSPFIPv6Page } from './ospfipv6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OSPFIPv6PageRoutingModule
  ],
  declarations: [OSPFIPv6Page]
})
export class OSPFIPv6PageModule {}
