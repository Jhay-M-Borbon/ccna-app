import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OSPFPage } from './ospf.page';

const routes: Routes = [
  {
    path: '',
    component: OSPFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OSPFPageRoutingModule {}
