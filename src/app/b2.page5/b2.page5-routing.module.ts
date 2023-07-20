import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2Page5Page } from './b2.page5.page';

const routes: Routes = [
  {
    path: '',
    component: B2Page5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B2Page5PageRoutingModule {}
