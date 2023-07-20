import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Button1PageRoutingModule } from './button1-routing.module';
import { Button1Page } from './button1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Button1PageRoutingModule
  ],
  declarations: [Button1Page]
})
export class Button1PageModule {}
