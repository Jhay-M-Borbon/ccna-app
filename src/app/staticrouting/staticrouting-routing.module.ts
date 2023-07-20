import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticroutingPage } from './staticrouting.page';

const routes: Routes = [
  {
    path: '',
    component: StaticroutingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticroutingPageRoutingModule {}
