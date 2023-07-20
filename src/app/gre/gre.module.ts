import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrePageRoutingModule } from './gre-routing.module';

import { GrePage } from './gre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrePageRoutingModule
  ],
  declarations: [GrePage]
})
export class GrePageModule {}
