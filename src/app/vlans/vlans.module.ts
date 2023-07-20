import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VLANsPageRoutingModule } from './vlans-routing.module';

import { VLANsPage } from './vlans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VLANsPageRoutingModule
  ],
  declarations: [VLANsPage]
})
export class VLANsPageModule {}
