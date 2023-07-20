import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Button3PageRoutingModule } from './button3-routing.module';

import { Button3Page } from './button3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Button3PageRoutingModule
  ],
  declarations: [Button3Page]
})
export class Button3PageModule {}
