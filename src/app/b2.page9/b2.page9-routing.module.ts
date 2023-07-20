import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2Page9Page } from './b2.page9.page';

const routes: Routes = [
  {
    path: '',
    component: B2Page9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B2Page9PageRoutingModule {}
