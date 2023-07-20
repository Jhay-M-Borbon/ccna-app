import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrePage } from './gre.page';

const routes: Routes = [
  {
    path: '',
    component: GrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrePageRoutingModule {}
