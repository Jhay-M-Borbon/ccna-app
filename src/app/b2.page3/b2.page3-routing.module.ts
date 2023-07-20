import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2Page3Page } from './b2.page3.page';

const routes: Routes = [
  {
    path: '',
    component: B2Page3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B2Page3PageRoutingModule {}
