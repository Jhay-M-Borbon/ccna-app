import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OSPFPageRoutingModule } from './ospf-routing.module';

import { OSPFPage } from './ospf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OSPFPageRoutingModule
  ],
  declarations: [OSPFPage]
})
export class OSPFPageModule {}
