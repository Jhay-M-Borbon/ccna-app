import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { STPPage } from './stp.page';

const routes: Routes = [
  {
    path: '',
    component: STPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class STPPageRoutingModule {}
