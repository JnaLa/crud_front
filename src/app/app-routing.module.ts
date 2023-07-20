import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiscComponent } from './add-disc/add-disc.component';
import { DiscsComponent } from './discs/discs.component';

const routes: Routes = [
  {path: "add-disc", component: AddDiscComponent},
  {path: "discs", component: DiscsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
