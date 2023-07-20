import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Button3Page } from './button3.page';

const routes: Routes = [
  {
    path: '',
    component: Button3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Button3PageRoutingModule {}
