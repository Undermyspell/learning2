import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from "./gallery/container/container.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: "full" },
  { path: 'default', component: SpinnerComponent },
  { path: "gallery", component: ContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
