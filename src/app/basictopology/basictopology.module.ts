import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasictopologyPageRoutingModule } from './basictopology-routing.module';

import { BasictopologyPage } from './basictopology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasictopologyPageRoutingModule
  ],
  declarations: [BasictopologyPage]
})
export class BasictopologyPageModule {}
