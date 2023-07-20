import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P2pPageRoutingModule } from './p2p-routing.module';

import { P2pPage } from './p2p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P2pPageRoutingModule
  ],
  declarations: [P2pPage]
})
export class P2pPageModule {}
