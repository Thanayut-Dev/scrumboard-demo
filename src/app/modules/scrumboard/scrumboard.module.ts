import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumboardComponent } from './scrumboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BoardResolve, ScrumboardService } from './scrumboard.service';

const routes: Routes = [
  {
    path: '',
    component: ScrumboardComponent,
    resolve: {
      scrumboard: ScrumboardService
    }
  },
  // {
  //   path: 'boards/:boardId/:boardUri',
  //   component: BoardComponent,
  //   resolve: {
  //     board: BoardResolve
  //   }
  // }
];

@NgModule({
  declarations: [ScrumboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,

    // NgxDnDModule
  ],
  providers: [
    ScrumboardService,
    BoardResolve
  ],
})
export class ScrumboardModule { }
