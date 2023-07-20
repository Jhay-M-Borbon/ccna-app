import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RipPage } from './rip.page';

const routes: Routes = [
  {
    path: '',
    component: RipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RipPageRoutingModule {}
