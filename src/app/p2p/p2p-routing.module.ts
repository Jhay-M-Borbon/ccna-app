import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P2pPage } from './p2p.page';

const routes: Routes = [
  {
    path: '',
    component: P2pPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P2pPageRoutingModule {}
