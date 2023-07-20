import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VLANsPage } from './vlans.page';

const routes: Routes = [
  {
    path: '',
    component: VLANsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VLANsPageRoutingModule {}
