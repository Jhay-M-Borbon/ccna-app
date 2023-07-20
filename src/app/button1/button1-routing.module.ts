import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Button1Page } from './button1.page';

const routes: Routes = [
  {
    path: '',
    component: Button1Page
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Button1PageRoutingModule {}
