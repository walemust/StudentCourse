import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentscoreComponent } from './studentscore/studentscore.component';

const routes: Routes = [
  {
    path: '',
    component: StudentscoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
