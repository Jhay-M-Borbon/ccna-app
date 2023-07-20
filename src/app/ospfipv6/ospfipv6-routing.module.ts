import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OSPFIPv6Page } from './ospfipv6.page';

const routes: Routes = [
  {
    path: '',
    component: OSPFIPv6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OSPFIPv6PageRoutingModule {}
