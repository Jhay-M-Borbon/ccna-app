import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B1Page3Page } from './b1.page3.page';

const routes: Routes = [
  {
    path: '',
    component: B1Page3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B1Page3PageRoutingModule {}
