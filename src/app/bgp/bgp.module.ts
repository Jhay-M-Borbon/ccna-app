import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BGPPageRoutingModule } from './bgp-routing.module';

import { BGPPage } from './bgp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BGPPageRoutingModule
  ],
  declarations: [BGPPage]
})
export class BGPPageModule {}
