import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './Child/child/child.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // {path:'child', component:ChildComponent},
  {path:'main', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
