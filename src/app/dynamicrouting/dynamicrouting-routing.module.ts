import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicroutingPage } from './dynamicrouting.page';

const routes: Routes = [
  {
    path: '',
    component: DynamicroutingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicroutingPageRoutingModule {}
