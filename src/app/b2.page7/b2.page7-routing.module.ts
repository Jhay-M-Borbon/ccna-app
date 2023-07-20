import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2Page7Page } from './b2.page7.page';

const routes: Routes = [
  {
    path: '',
    component: B2Page7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B2Page7PageRoutingModule {}
