import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EIGRPPageRoutingModule } from './eigrp-routing.module';

import { EIGRPPage } from './eigrp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EIGRPPageRoutingModule
  ],
  declarations: [EIGRPPage]
})
export class EIGRPPageModule {}
