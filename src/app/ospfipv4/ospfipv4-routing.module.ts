import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OSPFIPv4Page } from './ospfipv4.page';

const routes: Routes = [
  {
    path: '',
    component: OSPFIPv4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OSPFIPv4PageRoutingModule {}
