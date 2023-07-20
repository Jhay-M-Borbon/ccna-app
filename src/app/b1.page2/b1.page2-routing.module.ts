import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B1Page2Page } from './b1.page2.page';

const routes: Routes = [
  {
    path: '',
    component: B1Page2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B1Page2PageRoutingModule {}
