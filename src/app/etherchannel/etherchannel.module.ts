import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ETHERCHANNELPageRoutingModule } from './etherchannel-routing.module';

import { ETHERCHANNELPage } from './etherchannel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ETHERCHANNELPageRoutingModule
  ],
  declarations: [ETHERCHANNELPage]
})
export class ETHERCHANNELPageModule {}
