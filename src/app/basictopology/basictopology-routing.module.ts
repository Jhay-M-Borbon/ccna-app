import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasictopologyPage } from './basictopology.page';

const routes: Routes = [
  {
    path: '',
    component: BasictopologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasictopologyPageRoutingModule {}
