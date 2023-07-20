import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HSRPPageRoutingModule } from './hsrp-routing.module';

import { HSRPPage } from './hsrp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HSRPPageRoutingModule
  ],
  declarations: [HSRPPage]
})
export class HSRPPageModule {}
