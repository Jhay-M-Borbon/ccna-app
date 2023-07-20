import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ETHERCHANNELPage } from './etherchannel.page';

const routes: Routes = [
  {
    path: '',
    component: ETHERCHANNELPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ETHERCHANNELPageRoutingModule {}
