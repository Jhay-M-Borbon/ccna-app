import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QosPageRoutingModule } from './qos-routing.module';

import { QosPage } from './qos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QosPageRoutingModule
  ],
  declarations: [QosPage]
})
export class QosPageModule {}
