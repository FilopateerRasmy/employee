import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'employees', loadComponent:()=> import('./home/home.component').then(c => c.HomeComponent), title:"Employees"},
  {path:'', redirectTo:'employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
