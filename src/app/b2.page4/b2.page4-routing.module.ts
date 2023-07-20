import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2Page4Page } from './b2.page4.page';

const routes: Routes = [
  {
    path: '',
    component: B2Page4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B2Page4PageRoutingModule {}
