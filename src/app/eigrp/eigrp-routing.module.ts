import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EIGRPPage } from './eigrp.page';

const routes: Routes = [
  {
    path: '',
    component: EIGRPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EIGRPPageRoutingModule {}
