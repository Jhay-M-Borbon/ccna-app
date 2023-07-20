import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterVlanTrunkingPageRoutingModule } from './inter-vlan-trunking-routing.module';

import { InterVlanTrunkingPage } from './inter-vlan-trunking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterVlanTrunkingPageRoutingModule
  ],
  declarations: [InterVlanTrunkingPage]
})
export class InterVlanTrunkingPageModule {}
