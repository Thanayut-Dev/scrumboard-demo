import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'scrumboard',
    loadChildren: () => import('./modules/scrumboard/scrumboard.module').then(m => m.ScrumboardModule),
  },
  {
    path: '**',
    redirectTo: 'scrumboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
