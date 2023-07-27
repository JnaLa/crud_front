import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiscComponent } from './add-disc/add-disc.component';
import { DiscsComponent } from './discs/discs.component';
import { PuttingPractiseComponent } from './putting-practise/putting-practise.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch:'full'},
  {path: "add-disc", component: AddDiscComponent},
  {path: "discs", component: DiscsComponent},
  {path: "putting-practise", component: PuttingPractiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
