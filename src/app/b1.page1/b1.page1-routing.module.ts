import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B1Page1Page } from './b1.page1.page';

const routes: Routes = [
  {
    path: '',
    component: B1Page1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B1Page1PageRoutingModule {}
