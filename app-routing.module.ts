import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstProjectComponent } from './first-project/first-project.component';
import { SecondProjectComponent } from './second-project/second-project.component';
import { ThirdProjectComponent } from './third-project/third-project.component';
import { FourProjectComponent } from './four-project/four-project.component';

const routes: Routes = [
  {
    component:FirstProjectComponent,
    path:"first-project",
  },
  {
    component:SecondProjectComponent,
    path:"second-project",
  },
  {
    component:ThirdProjectComponent,
    path:"third-project",
  },
  {
    component:FourProjectComponent,
    path:"four-project",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
