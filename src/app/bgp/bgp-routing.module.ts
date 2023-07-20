import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BGPPage } from './bgp.page';

const routes: Routes = [
  {
    path: '',
    component: BGPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BGPPageRoutingModule {}
