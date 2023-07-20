import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterVlanTrunkingPage } from './inter-vlan-trunking.page';

const routes: Routes = [
  {
    path: '',
    component: InterVlanTrunkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterVlanTrunkingPageRoutingModule {}
